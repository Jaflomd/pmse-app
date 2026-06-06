#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const LAB = path.resolve(__dirname, '../../../..');
const DATA_FILE = path.join(LAB, 'output/exp-book/exposome-app/exposome-data.js');
const APP_FILE = path.join(LAB, 'output/exp-book/exposome-app/exposome-scorer.html');
const OUT = path.join(__dirname, 'sim-100-current');
const OBS_DIR = path.join(OUT, 'observadores');

function read(file) { return fs.readFileSync(file, 'utf8'); }
function esc(s) { return String(s || '').replace(/\n/g, ' ').replace(/\s+/g, ' ').replace(/\|/g, '/').trim(); }
function cleanMd(s) {
  return esc(s).replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}
function seeded(seed) {
  let x = seed >>> 0;
  return () => {
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    return ((x >>> 0) / 4294967296);
  };
}
function mean(arr) { return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0; }
function quantile(arr, q) {
  if (!arr.length) return 0;
  const xs = arr.slice().sort((a, b) => a - b);
  const pos = (xs.length - 1) * q;
  const lo = Math.floor(pos), hi = Math.ceil(pos);
  if (lo === hi) return xs[lo];
  return xs[lo] + (xs[hi] - xs[lo]) * (pos - lo);
}
function pct(x) { return Math.round(x * 100); }
function clamp(x, lo = 0, hi = 1) { return Math.max(lo, Math.min(hi, x)); }

function loadData() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(read(DATA_FILE), ctx, { filename: DATA_FILE });
  const data = JSON.parse(JSON.stringify(ctx.window.EXPOSOME_DATA));

  const e4 = data.blocks.find(b => b.code === 'E4');
  if (e4 && !e4.items.some(it => it.id === 'E4-9')) {
    const i = e4.items.findIndex(it => it.id === 'E4-7');
    e4.items.splice((i >= 0 ? i + 1 : e4.items.length), 0, {
      id: 'E4-9', block: 'E', blockCode: 'E4', blockTitle: e4.title, part: e4.part, n: 'E4-9',
      labelRaw: 'Antagonismo (rasgo; item tipo PID-5): manipulacion / insensibilidad / grandiosidad',
      answerOptions: ['Si', 'No', 'NS'], extraFields: [], sourceRaw: 'Item tipo PID-5 - dominio antagonismo',
      predictor: 'faceta de antagonismo (item unico)', instrument: 'PID-5 dominio antagonismo',
      meta: false, evidenceRaw: '', evidence: [], evLevel: 'Cons', direction: 'risk',
      outcomes: ['Personalidad'], weight: 0.5
    });
  }
  if (!data.blocks.some(b => b.code === 'G')) {
    const forensic = [
      ['F1', 'Violencia fisica hacia otros', ['Personalidad'], 'H1 Violencia'],
      ['F2', 'Uso o amenaza con armas', ['Personalidad'], 'H1 Violencia'],
      ['F3', 'Coercion o agresion sexual', ['Personalidad'], 'H1 Violencia'],
      ['F4', 'Violencia de pareja/familiar como perpetrador', ['Personalidad'], 'H1 / H3'],
      ['F5', 'Conducta antisocial no violenta', ['Personalidad', 'Sustancias'], 'H2 Conducta antisocial'],
      ['F6', 'Contacto legal o condenas antes de los 18 anos', ['Personalidad'], 'H2 Conducta antisocial'],
      ['F7', 'Contacto legal o condenas despues de los 18 anos', ['Personalidad'], 'H2 Conducta antisocial'],
      ['F8', 'Relaciones intimas inestables o conflictivas', ['Transdiagnostico'], 'H3 Relaciones'],
      ['F9', 'Inestabilidad laboral o educativa', ['Transdiagnostico'], 'H4 Empleo'],
      ['F10', 'Problemas previos con tratamiento o supervision', ['Transdiagnostico'], 'H10 Tratamiento'],
      ['F11', 'Victima de violencia, agresion, abuso o extorsion', ['TEPT'], 'H8 Trauma']
    ];
    data.blocks.push({
      code: 'G', block: 'G', title: 'Forense y legal', part: 'Parte I - Forense',
      items: forensic.map(f => ({
        id: f[0], block: 'G', blockCode: 'G', blockTitle: 'Forense y legal', part: 'Parte I - Forense', n: f[0],
        labelRaw: f[1], answerOptions: ['Si', 'No', 'NS'], extraFields: [{ key: 'det', label: 'detalle', unit: '' }],
        sourceRaw: 'Antecedente forense; mapea HCR-20 ' + f[3],
        predictor: '', instrument: 'HCR-20 historico (' + f[3] + ')', meta: false, evidenceRaw: '', evidence: [],
        evLevel: 'Cons', direction: 'risk', outcomes: f[2], weight: 0.5
      }))
    });
  }
  return data;
}

const BLOCK_ALIAS = {
  A: 'Origen perinatal', A2: 'Nacimiento', A3: 'Primeros hitos', B: 'Adversidad infantil',
  C: 'Mundo social', C2: 'Vida y vinculos', D: 'Sustancias', E: 'Rasgos y salud',
  E3: 'Cuerpo y soma', E4: 'Senales premorbidas', E2: 'Historia lifetime',
  F: 'Ambiente y habitos', G: 'Forense y legal'
};

const VIRTUAL_ITEMS = [
  { id: 'D.modulo_diana', title: 'Sustancias: seleccionar diana y conducta', blockCode: 'D', blockTitle: 'Sustancias y conductas', kind: 'virtual', tags: ['substance', 'interface', 'sensitivity'] },
  { id: 'D2.atribucion_temporal', title: 'Sustancias D2: atribucion temporal primaria/secundaria', blockCode: 'D', blockTitle: 'Sustancias y conductas', kind: 'virtual', tags: ['substance', 'causal', 'temporal'] },
  { id: 'D3.dano_dominios', title: 'Sustancias D3: dano por dominios', blockCode: 'D', blockTitle: 'Sustancias y conductas', kind: 'virtual', tags: ['substance', 'sensitivity', 'source'] },
  { id: 'D4.icd11_dependencia', title: 'Sustancias D4: criterios ICD-11 dependencia', blockCode: 'D', blockTitle: 'Sustancias y conductas', kind: 'virtual', tags: ['substance', 'construct', 'scoring'] },
  { id: 'D5.dsm5_sud', title: 'Sustancias D5: criterios DSM-5 por diana', blockCode: 'D', blockTitle: 'Sustancias y conductas', kind: 'virtual', tags: ['substance', 'construct', 'interface'] },
  { id: 'D6.neuroadiccion', title: 'Sustancias D6: perfil neurociencia auto', blockCode: 'D', blockTitle: 'Sustancias y conductas', kind: 'virtual', tags: ['substance', 'ontology', 'mapping'] },
  { id: 'PROFILE.ICE', title: 'Dashboard: ICE / indice de carga exposomica', blockCode: 'PROFILE', blockTitle: 'Perfil exposoma', kind: 'virtual', tags: ['causal', 'mapping', 'evidence'] },
  { id: 'PROFILE.outcome_burden', title: 'Dashboard: carga por outcome normalizada', blockCode: 'PROFILE', blockTitle: 'Perfil exposoma', kind: 'virtual', tags: ['mapping', 'causal', 'interface'] },
  { id: 'PROFILE.layers', title: 'Dashboard: capas Wild externo-general/especifico/interno', blockCode: 'PROFILE', blockTitle: 'Perfil exposoma', kind: 'virtual', tags: ['ontology', 'mapping'] },
  { id: 'PROFILE.ACE_dimensional', title: 'Dashboard: ACE dimensional threat/deprivation/household', blockCode: 'PROFILE', blockTitle: 'Perfil exposoma', kind: 'virtual', tags: ['construct', 'sensitivity', 'mapping'] },
  { id: 'PROFILE.embedded_instruments', title: 'Dashboard: instrumentos embebidos', blockCode: 'PROFILE', blockTitle: 'Perfil exposoma', kind: 'virtual', tags: ['interface', 'mapping', 'evidence'] },
  { id: 'PROFILE.dossier', title: 'Dashboard: dossier narrativo de positivos', blockCode: 'PROFILE', blockTitle: 'Perfil exposoma', kind: 'virtual', tags: ['source', 'causal', 'interface'] }
];

function allItems(data) {
  const items = [];
  for (const b of data.blocks) {
    for (const it of b.items) {
      items.push({
        kind: 'item',
        id: it.id,
        title: cleanMd(it.labelRaw),
        blockCode: it.blockCode || b.code,
        blockTitle: b.title,
        part: it.part || b.part,
        answerOptions: it.answerOptions || [],
        extraFields: it.extraFields || [],
        sourceRaw: it.sourceRaw || '',
        predictor: it.predictor || '',
        instrument: it.instrument || '',
        evidenceRaw: it.evidenceRaw || '',
        evidence: it.evidence || [],
        evLevel: it.evLevel || '',
        direction: it.direction || '',
        outcomes: it.outcomes || [],
        weight: it.weight || 0,
        meta: !!it.meta
      });
    }
  }
  return items.concat(VIRTUAL_ITEMS.map(v => ({ ...v, part: 'Perfil / modulo', answerOptions: [], extraFields: [], outcomes: [], evidence: [] })));
}

const FEATURE_REASONS = {
  source: 'depende de colateral, registro, memoria familiar o documento historico',
  temporal: 'requiere fijar ventana: perinatal, antes de 18, premorbido, lifetime o actual',
  construct: 'frontera de constructo: exposicion vs sintoma, marcador premorbido o diagnostico',
  evidence: 'la evidencia/peso se interpreta con dificultad: MA, umbrella, derivado o consenso',
  scoring: 'modo de respuesta o campo extra puede inducir error de puntuacion',
  sensitivity: 'contenido sensible: trauma, suicidio, sustancias, sexualidad o legal/forense',
  causal: 'riesgo de inferir causalidad desde asociacion o desde outcome ya conocido',
  interface: 'carga visual/cognitiva: texto largo, links, paneles, outcomes multiples',
  mapping: 'arrastra mapas a outcomes, ACE, capas, instrumentos o HCR',
  recall: 'recuerdo retrospectivo dificil o sesgo por edad de inicio'
};

function hasAny(text, pats) {
  const low = String(text || '').toLowerCase();
  return pats.some(p => p.test(low));
}

function featuresFor(item, blockSize) {
  const text = `${item.id} ${item.title} ${item.sourceRaw} ${item.predictor} ${item.instrument} ${item.evidenceRaw}`;
  const labelLen = item.title.length;
  const graded = (item.answerOptions || []).some(o => /alto|bajo/i.test(o));
  const f = {};

  f.source = 0.18;
  if (/^A|^A2|^A3/.test(item.blockCode)) f.source += 0.36;
  if (/^B|^C|^C2|^G/.test(item.blockCode)) f.source += 0.22;
  if ((item.extraFields || []).length) f.source += 0.18;
  if (hasAny(text, [/madre|paterna|materna|parental|hogar|infancia|perinatal|obst[eé]trica|legal|condena|hcr/i])) f.source += 0.16;

  f.temporal = 0.15;
  if (hasAny(text, [/perinatal|neonatal|prematuro|nacer|nacimiento|embarazo|lactancia|antes de los 18|infantil|prem[oó]rbid|lifetime|inicio|edad|primer episodio|tard/i])) f.temporal += 0.5;
  if (/^E2|^A3|^G/.test(item.blockCode)) f.temporal += 0.18;

  f.construct = 0.18;
  if (hasAny(text, [/chr-?p|uhr|psic[oó]tic|hipoman|depresivo mayor|ansiedad|fobia|obsesion|tca|tea|tdah|neuroticismo|antagonismo|prem[oó]rbid|ci\/cognici|rasgo|funcional|discriminaci[oó]n|urbanicidad/i])) f.construct += 0.44;
  if (item.kind === 'virtual') f.construct += 0.2;

  f.evidence = 0.2;
  if (item.meta) f.evidence += 0.18;
  if ((item.evidence || []).length > 1) f.evidence += 0.16;
  if ((item.outcomes || []).length > 1) f.evidence += 0.14;
  if (/Der|Cons|Checklist|Val-ext/.test(item.evLevel || '')) f.evidence += 0.18;
  if (/MA/.test(item.evLevel || '')) f.evidence += 0.1;
  if ((item.evidenceRaw || '').length > 220) f.evidence += 0.12;

  f.scoring = 0.15;
  if (graded) f.scoring += 0.38;
  if ((item.extraFields || []).length) f.scoring += 0.24;
  if (item.direction === 'prot') f.scoring += 0.28;
  if ((item.answerOptions || []).includes('NS')) f.scoring += 0.08;
  if (item.kind === 'virtual') f.scoring += 0.25;

  f.sensitivity = 0.08;
  if (hasAny(text, [/abuso|maltrato|sexual|violencia|suicid|autolesi|sustancia|alcohol|cannabis|arma|legal|condena|victima|encarcelado|discriminaci[oó]n|extorsi/i])) f.sensitivity += 0.65;
  if (/^B|^D|^G/.test(item.blockCode)) f.sensitivity += 0.14;

  f.causal = 0.18;
  if (hasAny(text, [/predictor|riesgo|protector|asociaci|antecedente|prem[oó]rbid|primer episodio|outcome|factor|causal|atribuci/i])) f.causal += 0.36;
  if (/^E2|^D|^PROFILE/.test(item.blockCode)) f.causal += 0.24;
  if (item.direction === 'prot') f.causal += 0.16;

  f.interface = 0.15 + Math.min(0.35, labelLen / 420);
  if ((item.evidenceRaw || '').length > 0) f.interface += Math.min(0.18, item.evidenceRaw.length / 1600);
  if (blockSize > 14) f.interface += 0.12;
  if (item.kind === 'virtual') f.interface += 0.22;

  f.mapping = 0.08;
  f.mapping += Math.min(0.35, (item.outcomes || []).length * 0.11);
  if (hasAny(text, [/ace|hcr|pid-5|ers|pers|es-scz|wild|ice|dsm|icd|rdoc|factor-p|carga|instrumento/i])) f.mapping += 0.4;
  if (item.kind === 'virtual') f.mapping += 0.32;

  f.recall = 0.12;
  if (hasAny(text, [/perinatal|nacer|nacimiento|infancia|antes de los 18|lifetime|alguna vez|edad de inicio|prem[oó]rbid|hitos|caminar|sentarse|pinza|legal/i])) f.recall += 0.58;
  if (/^A|^A2|^A3|^B|^E2|^G/.test(item.blockCode)) f.recall += 0.13;

  Object.keys(f).forEach(k => { f[k] = clamp(f[k]); });
  return f;
}

const COHORTS = [
  {
    key: 'estudiante', label: 'Estudiante', n: 25, seed: 7101,
    weights: { source: 1.05, temporal: 0.85, construct: 0.9, evidence: 0.95, scoring: 1.35, sensitivity: 0.75, causal: 0.75, interface: 1.45, mapping: 0.55, recall: 0.85 }
  },
  {
    key: 'residente', label: 'Residente', n: 25, seed: 8202,
    weights: { source: 0.95, temporal: 1.05, construct: 1.2, evidence: 0.85, scoring: 0.85, sensitivity: 0.95, causal: 1.0, interface: 0.9, mapping: 0.75, recall: 0.95 }
  },
  {
    key: 'psiquiatra_clinico', label: 'Clinico psiquiatra', n: 25, seed: 9303,
    weights: { source: 1.25, temporal: 1.25, construct: 1.0, evidence: 0.85, scoring: 0.55, sensitivity: 1.15, causal: 1.15, interface: 0.65, mapping: 0.8, recall: 1.2 }
  },
  {
    key: 'experto', label: 'Psiquiatra experto', n: 25, seed: 10404,
    weights: { source: 0.85, temporal: 1.0, construct: 1.35, evidence: 1.25, scoring: 0.4, sensitivity: 0.85, causal: 1.35, interface: 0.45, mapping: 1.3, recall: 0.8 }
  }
];

function difficulty(item, cohort, rng) {
  let score = 0, denom = 0;
  for (const [k, w] of Object.entries(cohort.weights)) {
    score += (item.features[k] || 0) * w;
    denom += w;
  }
  const base = denom ? score / denom : 0;
  const jitter = (rng() - 0.5) * 0.15;
  const complexity = clamp(base + jitter);
  const disagreement = clamp(
    item.features.construct * 0.24 +
    item.features.temporal * 0.18 +
    item.features.source * 0.17 +
    item.features.causal * 0.18 +
    item.features.sensitivity * 0.13 +
    item.features.evidence * 0.10 +
    (rng() - 0.5) * 0.10
  );
  return { complexity, disagreement };
}

function topFeatureReasons(item, cohort, limit = 4) {
  return Object.entries(item.features)
    .map(([k, v]) => ({ k, v: v * (cohort.weights[k] || 0) }))
    .sort((a, b) => b.v - a.v)
    .slice(0, limit)
    .map(x => FEATURE_REASONS[x.k]);
}

function simulate(items) {
  const observers = [];
  let index = 1;
  for (const cohort of COHORTS) {
    for (let i = 0; i < cohort.n; i++) {
      const rng = seeded(cohort.seed + i * 131);
      const scored = items.map(item => {
        const d = difficulty(item, cohort, rng);
        return { ...item, ...d };
      }).sort((a, b) => b.complexity - a.complexity || b.disagreement - a.disagreement);
      observers.push({
        id: `EXP-OBS-${String(index).padStart(3, '0')}`,
        cohort: cohort.key,
        cohortLabel: cohort.label,
        profile: {
          toleranciaAmbiguedad: Math.round((0.30 + rng() * 0.62) * 100),
          confianzaColateral: Math.round((cohort.key === 'estudiante' ? 0.35 : cohort.key === 'residente' ? 0.55 : cohort.key === 'psiquiatra_clinico' ? 0.75 : 0.84) * 100 + (rng() - 0.5) * 16),
          sesgoCausal: Math.round((cohort.key === 'experto' ? 0.25 : cohort.key === 'psiquiatra_clinico' ? 0.38 : cohort.key === 'residente' ? 0.52 : 0.62) * 100 + (rng() - 0.5) * 18)
        },
        top: scored.slice(0, 12).map(item => ({
          id: item.id, title: item.title, blockCode: item.blockCode, blockTitle: item.blockTitle,
          section: item.blockTitle || item.blockCode,
          complexity: item.complexity,
          disagreement: item.disagreement,
          reasons: topFeatureReasons(item, cohort)
        })),
        score50: Math.round(clamp(50 - mean(scored.slice(0, 24).map(x => x.complexity)) * 10 - mean(scored.slice(0, 24).map(x => x.disagreement)) * 5, 0, 50))
      });
      index++;
    }
  }
  return { items, observers };
}

function aggregate(sim) {
  const byItem = new Map();
  for (const obs of sim.observers) {
    for (const t of obs.top) {
      if (!byItem.has(t.id)) byItem.set(t.id, {
        id: t.id, title: t.title, section: t.section, blockCode: t.blockCode,
        hits: 0, complexities: [], disagreements: [], cohorts: {}
      });
      const row = byItem.get(t.id);
      row.hits++;
      row.complexities.push(t.complexity);
      row.disagreements.push(t.disagreement);
      row.cohorts[obs.cohortLabel] = (row.cohorts[obs.cohortLabel] || 0) + 1;
    }
  }
  const rows = [...byItem.values()].map(r => ({
    ...r,
    mean: mean(r.complexities),
    p90: quantile(r.complexities, 0.9),
    dis: mean(r.disagreements),
    prevalence: r.hits / sim.observers.length
  })).sort((a, b) => b.hits - a.hits || b.mean - a.mean || b.dis - a.dis);

  const bySection = new Map();
  for (const row of rows) {
    const key = row.section || row.blockCode || 'Sin seccion';
    if (!bySection.has(key)) bySection.set(key, { section: key, hits: 0, items: 0, meanVals: [], disVals: [] });
    const s = bySection.get(key);
    s.hits += row.hits;
    s.items++;
    s.meanVals.push(row.mean);
    s.disVals.push(row.dis);
  }
  const sections = [...bySection.values()].map(s => ({ ...s, mean: mean(s.meanVals), dis: mean(s.disVals) })).sort((a, b) => b.hits - a.hits);
  return { rows, sections };
}

function observerMd(obs) {
  const lines = [];
  lines.push(`# ${obs.id} - ${obs.cohortLabel}`);
  lines.push('');
  lines.push(`- Score de evaluabilidad proyectado: **${obs.score50}/50**`);
  lines.push(`- Tolerancia a ambiguedad: ${obs.profile.toleranciaAmbiguedad}%`);
  lines.push(`- Confianza usando colateral/documentos: ${obs.profile.confianzaColateral}%`);
  lines.push(`- Sesgo causal retrospectivo: ${obs.profile.sesgoCausal}%`);
  lines.push('');
  lines.push('## Items que mas le costarian');
  lines.push('');
  lines.push('| Rank | Item | Seccion | Dificultad | Desacuerdo | Por que |');
  lines.push('|---:|---|---|---:|---:|---|');
  obs.top.forEach((t, i) => {
    lines.push(`| ${i + 1} | \`${t.id}\` ${esc(t.title)} | ${esc(t.section)} | ${pct(t.complexity)}% | ${pct(t.disagreement)}% | ${t.reasons.map(esc).join('; ')} |`);
  });
  lines.push('');
  lines.push('## Comentario simulado');
  const first = obs.top[0];
  lines.push(`Este evaluador probablemente se detendria en \`${first.id}\` porque la decision no es solo Si/No: exige fuente, edad/ventana y separacion entre exposicion, consecuencia y marcador clinico. La mejora mas util para este perfil seria mostrar fuente esperada, ventana temporal y una regla de cierre breve.`);
  lines.push('');
  return lines.join('\n');
}

function cohortSummary(sim, cohortLabel) {
  const observers = sim.observers.filter(o => o.cohortLabel === cohortLabel);
  const counts = new Map();
  for (const o of observers) for (const t of o.top.slice(0, 10)) counts.set(t.id, (counts.get(t.id) || 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10)
    .map(([id, n]) => {
      const t = observers.flatMap(o => o.top).find(x => x.id === id);
      return { id, title: t?.title || id, n };
    });
}

function synthesisMd(data, sim, agg) {
  const date = new Date().toISOString().slice(0, 10);
  const observerMean = mean(sim.observers.map(o => o.score50));
  const observerP10 = quantile(sim.observers.map(o => o.score50), 0.10);
  const totalItems = sim.items.length;
  const realItems = sim.items.filter(i => i.kind === 'item').length;
  const virtualItems = sim.items.filter(i => i.kind === 'virtual').length;
  const lines = [];
  lines.push('# Exposoma - stress-test 100 evaluadores');
  lines.push('');
  lines.push(`**Fecha:** ${date}`);
  lines.push('**Instrumento:** Exposoma / Historia de antecedentes (`exposome-scorer.html`).');
  lines.push(`**Universo evaluado:** ${realItems} items de captura + ${virtualItems} modulos/dashboard virtuales = ${totalItems}.`);
  lines.push('**N:** 100 evaluadores simulados: 25 estudiantes, 25 residentes, 25 clinicos psiquiatras, 25 psiquiatras expertos.');
  lines.push('**Metodo:** simulacion cognitiva deterministica basada en estructura del instrumento, campos, pesos, evidencia, sensibilidad, fuente y ventana temporal. No son datos empiricos.');
  lines.push(`**Score de evaluabilidad proyectado:** ${observerMean.toFixed(1)}/50 promedio; p10 ${observerP10.toFixed(1)}/50.`);
  lines.push('');
  lines.push('## Lectura ejecutiva');
  lines.push('');
  lines.push('Exposoma es potente pero exige mas trabajo de fuente que pMSE: gran parte de la dificultad no esta en apretar Si/No, sino en decidir si el dato viene del paciente, familia, historia clinica, registro legal, documento perinatal o inferencia retrospectiva. La segunda dificultad es temporal: perinatal, infancia, premorbido, lifetime, episodio actual y antes del primer episodio se mezclan si la app no fuerza ventana. La tercera es causal: algunos raters podrian leer asociaciones de riesgo como causalidad individual.');
  lines.push('');
  lines.push('## Top 25 items/modulos mas complicados');
  lines.push('');
  lines.push('| Rank | Item | Seccion | Evaluadores que lo marcaron | Dificultad media | Desacuerdo medio | Cohortes |');
  lines.push('|---:|---|---|---:|---:|---:|---|');
  agg.rows.slice(0, 25).forEach((r, i) => {
    const cohorts = Object.entries(r.cohorts).map(([k, v]) => `${k}:${v}`).join(', ');
    lines.push(`| ${i + 1} | \`${r.id}\` ${esc(r.title)} | ${esc(r.section)} | ${r.hits}/100 | ${pct(r.mean)}% | ${pct(r.dis)}% | ${cohorts} |`);
  });
  lines.push('');
  lines.push('## Carga por seccion');
  lines.push('');
  lines.push('| Seccion | Hits en top-12 | Items implicados | Dificultad media | Desacuerdo medio |');
  lines.push('|---|---:|---:|---:|---:|');
  agg.sections.slice(0, 16).forEach(s => lines.push(`| ${esc(s.section)} | ${s.hits} | ${s.items} | ${pct(s.mean)}% | ${pct(s.dis)}% |`));
  lines.push('');
  lines.push('## Que veria cada cohorte');
  lines.push('');
  for (const c of COHORTS) {
    lines.push(`### ${c.label}`);
    const top = cohortSummary(sim, c.label);
    lines.push(top.map((x, i) => `${i + 1}. \`${x.id}\` ${esc(x.title)} (${x.n}/${c.n})`).join('\n'));
    lines.push('');
  }
  lines.push('## Problemas que emergen');
  lines.push('');
  lines.push('1. **Fuente insuficiente.** Los items perinatales, hitos tempranos, ACE y forense requieren colateral o documento; si se contestan solo por autorreporte adulto, baja confiabilidad.');
  lines.push('2. **Ventana temporal inestable.** Premorbido, antes de 18, lifetime, primera exposicion y periodo actual necesitan mostrarse como chips obligatorios o al menos visibles.');
  lines.push('3. **Exposicion vs consecuencia.** Historia lifetime y consumo de sustancias pueden ser causa, consecuencia, prodromo o comorbilidad; el rater necesita una regla de atribucion.');
  lines.push('4. **Asociacion no es causalidad individual.** Los pesos y outcomes son utiles para perfil, pero deben rotularse como carga de riesgo, no etiologia del caso.');
  lines.push('5. **Items sensibles producen subregistro.** Trauma, sexualidad, suicidio, legal/forense y sustancias requieren guion de entrevista y opcion de fuente colateral.');
  lines.push('');
  lines.push('## Mejoras pequenas con mayor retorno');
  lines.push('');
  lines.push('- Agregar al costado de cada item chips `Fuente esperada`: paciente, familiar, historia clinica, registro/documento, no verificable.');
  lines.push('- Agregar `Ventana`: perinatal, infancia, antes de 18, premorbido, lifetime, ultimo ano, actual.');
  lines.push('- En sustancias, mantener D2 como especificador central: precede al episodio / durante episodio / persiste tras abstinencia.');
  lines.push('- En dashboard, llamar `carga asociativa por outcome`, no causalidad; mostrar denominador y items que alimentan cada outcome.');
  lines.push('- En ACE/forense, usar lenguaje neutral + marcador de sensibilidad para evitar falsos negativos por verguenza o temor legal.');
  lines.push('');
  lines.push('## Archivos generados');
  lines.push('');
  lines.push('- `observer-sim-100.json`: datos crudos.');
  lines.push('- `observadores/EXP-OBS-001.md` ... `EXP-OBS-100.md`: mini-reportes individuales.');
  lines.push('');
  return lines.join('\n');
}

function main() {
  const data = loadData();
  const blockSizes = Object.fromEntries(data.blocks.map(b => [b.code, b.items.length]));
  const items = allItems(data).map(item => ({
    ...item,
    blockName: BLOCK_ALIAS[item.blockCode] || item.blockTitle || item.blockCode,
    features: featuresFor(item, blockSizes[item.blockCode] || 0)
  }));
  const sim = simulate(items);
  const agg = aggregate(sim);
  fs.mkdirSync(OBS_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'observer-sim-100.json'), JSON.stringify({
    source: { data: DATA_FILE, app: APP_FILE, dataVersion: data.version },
    observerScoreMean: mean(sim.observers.map(o => o.score50)),
    observers: sim.observers,
    aggregate: agg.rows,
    sections: agg.sections,
    items: sim.items.map(i => ({ id: i.id, title: i.title, blockCode: i.blockCode, section: i.blockTitle, kind: i.kind, features: i.features }))
  }, null, 2));
  for (const obs of sim.observers) fs.writeFileSync(path.join(OBS_DIR, `${obs.id}.md`), observerMd(obs));
  fs.writeFileSync(path.join(OUT, '00_SINTESIS_100_EVALUADORES.md'), synthesisMd(data, sim, agg));
  console.log(`OK ${sim.observers.length} evaluadores -> ${OUT}`);
  console.log(`Score evaluabilidad medio: ${mean(sim.observers.map(o => o.score50)).toFixed(1)}/50`);
  console.log('Top 15:');
  agg.rows.slice(0, 15).forEach((r, i) => console.log(`${i + 1}. ${r.id} ${r.hits}/100 mean=${pct(r.mean)} dis=${pct(r.dis)} :: ${r.title}`));
}

main();
