#!/usr/bin/env node
/*
  Mode-depth selection stress test for Intake Unificado.

  Goal:
  - triage: decide stat / safety / immediate path
  - standard: decide clinically, with DSM/ICD criterion-bucket support
  - research: collect everything

  The script combines:
  1) 90 curated stress cases embedded in intake-unificado.html
  2) live metadata from Exposoma and pMSE apps through Chromium
  3) noisy simulated raters per mode to estimate inclusion stability
*/

const fs = require('fs');
const path = require('path');

const HERE = __dirname;
const ROOT = path.resolve(HERE, '..', '..', '..', '..');
const OUT_DIR = HERE;
const CHROME = '/Users/javierflorescohaila/.cache/puppeteer/chrome/mac_arm-147.0.7727.57/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
const puppeteer = require(path.join(ROOT, 'output/unified-intake/build/node_modules/puppeteer-core'));

const PATHS = {
  intake: path.join(ROOT, 'output/unified-intake/intake-unificado.html'),
  exposome: path.join(ROOT, 'output/exp-book/exposome-app/exposome-scorer-calculators-prototype.html'),
  bmse: path.join(ROOT, 'output/book-bmse/proposal/pmse-scorer-fenotipos.html'),
  functioning: path.join(ROOT, 'output/exp-book/exposome_functioning/exposome_functioning_app.html')
};

const OUTCOMES = [
  'Psicosis', 'Bipolar', 'Depresion', 'TEA', 'TDAH', 'Ansiedad', 'TOC',
  'TCA', 'TEPT', 'Personalidad', 'Sustancias', 'Suicidalidad', 'Demencia',
  'Transdiagnostico'
];

const DSM_ICD_BUCKETS = {
  'psychosis': 'Psicosis: delirio, alucinacion, desorganizacion, testing de realidad',
  'mood-mania': 'Bipolaridad: activacion, menor necesidad de sueno, grandiosidad, presion',
  'mood-depression': 'Depresion: anhedonia, desesperanza, culpa, energia, sueno/apetito',
  'anxiety-threat': 'Ansiedad/TEPT: amenaza, hiperalerta, evitacion, trauma, reactividad',
  'ocd-related': 'TOC y relacionados: obsesion, egodistonia, compulsion, acumulacion/BFRB',
  'neurodevelopment': 'TEA/TDAH: desarrollo, comunicacion social, atencion, control inhibitorio',
  'personality': 'Personalidad: self, interpersonal, antagonismo, desinhibicion, identidad',
  'neurocognitive': 'Delirium/demencia: conciencia, orientacion, cognicion, curso fluctuante',
  'substance': 'Sustancias: uso, abstinencia/intoxicacion, deterioro asociado',
  'feeding': 'TCA/somatico: apetito, restriccion, atracon, cuerpo/interocepcion',
  'risk': 'Riesgo: suicidio, heteroagresion, negligencia, capacidad'
};

const TRIAGE_EXPOSOME_IDS = new Set([
  // Familial/origin, high-yield calculators and risk.
  'FH-SCZ','FH-SZA','FH-BP','FH-MDD','FH-SUD','FH-SUIC','FH-TEA','FH-TDAH','FH-PERS','FH-DEM',
  '37','38','C-n13','7','8',
  // Perinatal/neurodevelopment high-yield.
  '1','2','5','10','14','15','A-n5','A-n6','A-n7','A-n8','A3-9','A3-10','A3-11','A3-12',
  // ACE/trauma core.
  '19','20','21','22','23','24','27','29','30','B-n1','B-n2','B-n3',
  // Social/urban/discrimination/education/employment.
  '31','32','34','36','C-n6','C-n9','C-n11','C-n12',
  // Substance and clinical lifetime.
  '42','43','44','45','46','47','48','54','55','56','E2-1','E2-2','E2-3','E2-4','E2-5',
  'E2-6','E2-7','E2-8','E2-9','E2-10','E2-11','E2-12','E2-13','E2-14','E2-15',
  'E2-n1','E2-n2','E2-n3','E2-n4','E2-n5','E2-n6',
  // Affective course / bipolar proxy.
  'AFF-MAN','AFF-MIX','AFF-AD','AFF-PP','AFF-PSY','AFF-REC','AFF-HYP','AFF-RX-STAB','AFF-RX-AD',
  // Current modifiable/medical.
  '57','64','65','66','E3-1','E3-3','E3-4','E3-5','E3-6','E3-8','E3-9','E3-10','E3-11','E3-13','E3-14','E3-15','E3-16','E3-17',
  // Forensic/HCR.
  'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11'
]);

const STAT_EXPOSOME_IDS = new Set([
  // What changes disposition or immediate plan in a 15 min triage.
  'FH-SCZ','FH-SZA','FH-BP','FH-SUD','FH-PERS','FH-SUIC','FH-DEM',
  '37',
  '19','20','21','24','27','29','30',
  '42','44','46','48','54','55','56',
  'E2-1','E2-2','E2-10','E2-11','E2-12','E2-13','E2-14','E2-15',
  'E2-n2','E2-n4',
  'AFF-MAN','AFF-MIX','AFF-AD','AFF-PSY','AFF-REC','AFF-RX-STAB','AFF-RX-AD',
  'F1','F2','F3','F4','F5','F6','F7','F10','F11'
]);

const CALC_IDS = new Set([
  '32','C-n3','31','7','2','42','19','20','21','22','23','24','27','29','B-n1','B-n2','B-n3',
  '6','54','34','C-n9','C-n11','38','C-n13','36','E2-3','E2-n6',
  'AFF-MAN','AFF-MIX','AFF-AD','AFF-PP','AFF-PSY','AFF-REC','AFF-HYP','AFF-RX-STAB','AFF-RX-AD',
  'FH-BP','FH-MDD','FH-SZA','FH-SUD','FH-ANX','FH-TCA','FH-TDAH',
  'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11'
]);

const MODIFIABLE_IDS = new Set([
  '40','41','42','43','44','45','46','47','48','57','64','65','66','C-n9','C-n10','C-n11',
  'E3-1','E3-3','E3-4','E3-5','E3-8','E3-9','E3-10','E2-10','E2-15'
]);

const TRIAGE_PMSE_IDS = new Set([
  'NC.conciencia','G.arousal','F2.velocidad','F1.expresividad','E.regulación','G.coherencia',
  'F3.drive','F3.anticipación','F3.tono',
  'F6.amenaza','F6.frustración','F6.animo-meta','F6.autoevaluación','F6.desesperanza',
  'F4.experiencia','F4.contenido','F2.sensorial','F2.sensorial-auditiva','F2.sensorial-visual',
  'F2.sensorial-somatico-tactil','F2.sensorial-olfatorio-gustativo','F7.testing',
  'F5.regulación','NC.perfil','G.sueno-ritmo','G.apetito','G.interocepcion',
  'P1.dominancia','P2.afiliación','J.juicio','I.insight','E.egodistonia',
  'FUN.psp_utiles','FUN.psp_relaciones','FUN.psp_autocuidado','FUN.psp_disruptivas',
  'FUN.oas_hetero_total','FUN.oas_auto_total',
  'EXT.plan_suicida','EXT.medios','EXT.intento_previo','EXT.soporte','EXT.sustancias',
  'EXT.hx_violencia','EXT.bvc_ruidos','EXT.bvc_amenaza_verbal','EXT.bvc_objetos','EXT.rechazo_ayuda',
  'EXT.decision_capacidad'
]);

const LOW_TRIAGE_PMSE_IDS = new Set([
  'NM.luria','NM.dismetria','NM.alternancia','NM.tandem',
  'NM.parakinesia_iterativa','NM.parakinesia_odd','NM.parakinesia_volicional',
  'NM.tic','NM.diskinesia','NM.distonia','NM.acatisia','NM.parkinsonismo','NM.tremor',
  'F7.auto-mentalización','F7.self-integracion','F7.mentalización-otro','F7.coherencia-autobiografica'
]);

const STANDARD_PMSE_IDS = new Set([
  'F7.auto-mentalización','F7.self-integracion','F7.mentalización-otro','F7.coherencia-autobiografica'
]);

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function extractJsArray(source, marker) {
  const idx = source.indexOf(marker);
  if (idx < 0) throw new Error(`Marker not found: ${marker}`);
  const start = source.indexOf('[', idx);
  if (start < 0) throw new Error(`Array start not found for: ${marker}`);
  let depth = 0, quote = null, esc = false;
  for (let i = start; i < source.length; i++) {
    const ch = source[i];
    if (quote) {
      if (esc) esc = false;
      else if (ch === '\\') esc = true;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }
    if (ch === '[') depth++;
    if (ch === ']') {
      depth--;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  throw new Error(`Array end not found for: ${marker}`);
}

function safeJson(s, fallback = {}) {
  try { return JSON.parse(s || ''); } catch (_) { return fallback; }
}

function stripMd(s) {
  return String(s || '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function short(s, n = 88) {
  const t = stripMd(s);
  return t.length > n ? t.slice(0, n - 1).trimEnd() + '…' : t;
}

async function loadBrowserMetadata() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--allow-file-access-from-files', '--disable-web-security']
  });
  const out = {};
  try {
    let p = await browser.newPage();
    await p.goto('file://' + PATHS.exposome, { waitUntil: 'load' });
    await p.waitForFunction('typeof ITEMS !== "undefined" && ITEMS.length > 0', { timeout: 10000 });
    out.exposome = await p.evaluate(() => ({
      total: ITEMS.length,
      items: ITEMS.map(it => ({
        id: it.id,
        displayId: it.displayId || it.n || it.id,
        label: it.labelRaw || it.label || it.id,
        blockCode: it.blockCode || it.block || '',
        blockTitle: it.blockTitle || '',
        part: it.part || '',
        outcomes: it.outcomes || [],
        weight: it.weight || 0,
        direction: it.direction || 'risk',
        evLevel: it.evLevel || '',
        meta: !!it.meta,
        scoreOnly: !!it.scoreOnly,
        familyDegree: !!it.familyDegree,
        featureCheck: !!it.featureCheck,
        temporalWindow: (typeof TEMPORAL_ITEM_WINDOWS !== 'undefined' && TEMPORAL_ITEM_WINDOWS[it.id]) || it.blockCode || it.block || ''
      })),
      outcomeOrder: typeof OUTCOME_ORDER !== 'undefined' ? OUTCOME_ORDER : [],
      temporalWindows: typeof TEMPORAL_WINDOWS !== 'undefined' ? TEMPORAL_WINDOWS : []
    }));
    await p.close();

    p = await browser.newPage();
    await p.goto('file://' + PATHS.bmse, { waitUntil: 'load' });
    await p.waitForFunction('typeof scoreRows === "function"', { timeout: 10000 });
    out.pmse = await p.evaluate(() => scoreRows().map(row => {
      const d = row.d || {};
      const axis = row.axis || {};
      const test = row.test || {};
      return {
        id: row.id,
        kind: row.kind,
        section: row.section || '',
        code: d.code || test.code || axis.code || '',
        label: d.title || d.label || test.title || test.label || axis.title || axis.label || row.id,
        evalType: (typeof ITEM_EVAL_MODE !== 'undefined' && ITEM_EVAL_MODE[row.id]) || ''
      };
    }).filter(r => r.id && !/^OUT\./.test(r.id)));
    await p.close();

    p = await browser.newPage();
    await p.goto('file://' + PATHS.functioning, { waitUntil: 'load' });
    await p.waitForFunction('typeof AXES !== "undefined" && AXES.length > 0', { timeout: 10000 });
    out.functioning = await p.evaluate(() => ({
      axes: AXES.map(a => ({
        id: a.id,
        code: a.code,
        title: a.title,
        short: a.short || [],
        anchors: a.anchors || []
      })),
      stages: STAGES.map(s => ({ id: s.id, label: s.label, lo: s.lo, hi: s.hi }))
    }));
    await p.close();
  } finally {
    await browser.close();
  }
  return out;
}

function loadStressCases() {
  const html = read(PATHS.intake);
  const arr = extractJsArray(html, 'const STRESS_CASES =');
  return JSON.parse(arr);
}

function caseText(c) {
  const chunks = [c.id, c.label, c.dx, c.family, c.description];
  const reg = c.reg || {};
  const hist = safeJson(reg.ls?.expHistApp_v2, {});
  chunks.push(JSON.stringify(hist.fields || {}));
  chunks.push(JSON.stringify(hist.single || {}));
  chunks.push(JSON.stringify(hist.multi || {}));
  return chunks.filter(Boolean).join(' ').toLowerCase();
}

function inferCaseOutcomes(c) {
  const t = caseText(c)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
  const hits = new Set();
  const add = (name, patterns) => { if (patterns.some(p => p.test(t))) hits.add(name); };
  add('Psicosis', [/psicosis|psicot|esquiz|deliri|paranoi|capgras|cotard|fregoli|chr/]);
  add('Bipolar', [/bipolar|mania|maniaco|hipomani|mixto|viraje|posparto afectivo/]);
  add('Depresion', [/depres|melancol|distimi|anhedon|duelo/]);
  add('TEA', [/\btea\b|autis|asperger/]);
  add('TDAH', [/tdah|adhd|hiperactiv|inatencion/]);
  add('Ansiedad', [/ansiedad|panico|\btag\b|fobia|agorafobia|ansios/]);
  add('TOC', [/\btoc\b|obsesi|compulsi|acumulaci|tricotil|dismorfi|contaminaci/]);
  add('TCA', [/\btca\b|anorex|bulim|atracon|alimentari/]);
  add('TEPT', [/tept|ptsd|trauma|postraum|disociaci|abuso/]);
  add('Personalidad', [/personalidad|tlp|borderline|limite|narcis|antisocial|conducta|tod|oposicion|cluster|histrion/]);
  add('Sustancias', [/sustancia|alcohol|opioid|opiace|cannabis|cocaina|estimulante|abstinencia|intoxicacion/]);
  add('Suicidalidad', [/suicid|autolesi|nssi|muerte/]);
  add('Demencia', [/demencia|deterioro|neurocogn|delirium|alzheimer|lewy|frontotemporal|amnestic/]);
  if (!hits.size) hits.add('Transdiagnostico');
  return [...hits];
}

function activeExposomeAnswer(ans) {
  if (ans === undefined || ans === null || ans === '') return null;
  const v = String(ans).trim();
  if (!v || /^NS$/i.test(v)) return null;
  if (/^No$/i.test(v)) return false;
  if (/^0$/.test(v)) return false;
  return true;
}

function activePmseEntry(id, entry) {
  if (!entry) return null;
  const raw = entry.score;
  if (raw === undefined || raw === null || raw === '') return null;
  const v = String(raw).trim();
  if (!v || /^NE$/i.test(v)) return null;
  if (/^NO$|^SIN$|^ADEC$/i.test(v)) return false;
  if (/^0$/.test(v)) return false;
  const n = Number(v);
  if (Number.isFinite(n)) return Math.abs(n) > 0;
  return true;
}

function currentStageForAge(stages, age) {
  const n = Number(age);
  if (!Number.isFinite(n)) return null;
  return stages.find(s => n >= s.lo && n <= s.hi) || stages[stages.length - 1] || null;
}

function miBinary(xs, ys) {
  let n00 = 0, n01 = 0, n10 = 0, n11 = 0;
  for (let i = 0; i < xs.length; i++) {
    const x = xs[i] ? 1 : 0;
    const y = ys[i] ? 1 : 0;
    if (x && y) n11++;
    else if (x && !y) n10++;
    else if (!x && y) n01++;
    else n00++;
  }
  const n = n00 + n01 + n10 + n11;
  const cells = [
    [n00, (n00 + n01), (n00 + n10)],
    [n01, (n00 + n01), (n01 + n11)],
    [n10, (n10 + n11), (n00 + n10)],
    [n11, (n10 + n11), (n01 + n11)]
  ];
  let out = 0;
  for (const [c, row, col] of cells) {
    if (!c) continue;
    out += (c / n) * Math.log2((c * n) / (row * col));
  }
  return out;
}

function logOdds(xs, ys) {
  let a = 0.5, b = 0.5, c = 0.5, d = 0.5;
  for (let i = 0; i < xs.length; i++) {
    const x = xs[i] ? 1 : 0;
    const y = ys[i] ? 1 : 0;
    if (x && y) a++;
    else if (x && !y) b++;
    else if (!x && y) c++;
    else d++;
  }
  return Math.log((a * d) / (b * c));
}

function prevalence(xs) {
  return xs.filter(Boolean).length / Math.max(1, xs.length);
}

function maxAssoc(xs, caseOutcomes) {
  let best = { outcome: '', mi: 0, lor: 0 };
  OUTCOMES.forEach(o => {
    const ys = caseOutcomes.map(arr => arr.includes(o));
    const mi = miBinary(xs, ys);
    const lor = logOdds(xs, ys);
    if (mi > best.mi || (mi === best.mi && Math.abs(lor) > Math.abs(best.lor))) {
      best = { outcome: o, mi, lor };
    }
  });
  return best;
}

function criterionBucketsForExposome(item) {
  const outs = new Set(item.outcomes || []);
  const label = stripMd(item.label).toLowerCase();
  const buckets = new Set();
  if (outs.has('Psicosis') || /chr|psicosis|esquiz|alucin|delir/.test(label)) buckets.add('psychosis');
  if (outs.has('Bipolar') || /bipolar|mania|hipoman|afectivo|antidepresivo/.test(label)) buckets.add('mood-mania');
  if (outs.has('Depresion') || /depres|sf12|duelo/.test(label)) buckets.add('mood-depression');
  if (outs.has('Ansiedad') || outs.has('TEPT') || /trauma|abuso|ansiedad|amenaza|bullying/.test(label)) buckets.add('anxiety-threat');
  if (outs.has('TOC') || /obsesi|compulsi|toc|acumulaci|tricotil/.test(label)) buckets.add('ocd-related');
  if (outs.has('TEA') || outs.has('TDAH') || /desarrollo|lenguaje|motor|tdah|autis|tea/.test(label)) buckets.add('neurodevelopment');
  if (outs.has('Personalidad') || /personalidad|antisocial|antagonismo|conducta/.test(label)) buckets.add('personality');
  if (outs.has('Demencia') || /deterioro|demencia|neurolog|cognitivo/.test(label)) buckets.add('neurocognitive');
  if (outs.has('Sustancias') || /alcohol|cannabis|sustancia|opio|cocain/.test(label)) buckets.add('substance');
  if (outs.has('TCA') || /aliment|peso|apetito|atracon/.test(label)) buckets.add('feeding');
  if (outs.has('Suicidalidad') || /^F\d+$/.test(item.id) || /suicid|violencia|arma|legal|forense/.test(label)) buckets.add('risk');
  return [...buckets];
}

function criterionBucketsForPmse(row) {
  const id = row.id || '';
  const sec = row.section || '';
  const buckets = new Set();
  if (/F4\.contenido|F2\.sensorial|F7\.testing|G\.coherencia|I\.insight/.test(id)) buckets.add('psychosis');
  if (/F3\.|G\.sueno|F2\.velocidad|F1\.expresividad|G\.arousal/.test(id)) buckets.add('mood-mania');
  if (/F6\.animo|F6\.autoevaluacion|F6\.autoevaluación|F6\.desesperanza|F3\.tono|G\.sueno|G\.apetito/.test(id)) buckets.add('mood-depression');
  if (/F6\.amenaza|F6\.frustraci|G\.arousal/.test(id)) buckets.add('anxiety-threat');
  if (/F4\.contenido|E\.egodistonia/.test(id)) buckets.add('ocd-related');
  if (/F5\.|NC\.|NM\.|F1\.|F2\.velocidad/.test(id)) buckets.add('neurodevelopment');
  if (/F7\.|P1\.|P2\.|FUN\.psp_relaciones/.test(id)) buckets.add('personality');
  if (/NC\.|G\.coherencia|F5\.|NM\./.test(id)) buckets.add('neurocognitive');
  if (/EXT\.sustancias/.test(id)) buckets.add('substance');
  if (/G\.apetito|G\.interocepcion/.test(id)) buckets.add('feeding');
  if (/EXT\.|FUN\.oas|FUN\.psp_|J\.juicio/.test(id) || /Riesgo|Capacidad/.test(sec)) buckets.add('risk');
  return [...buckets];
}

function itemWindowBoost(win, mode) {
  if (mode === 'triage') {
    if (['T7','T8','T9'].includes(win)) return 1.0;
    if (['T0','T4','T5'].includes(win)) return 0.45;
    return 0.2;
  }
  if (['T0','T4','T5','T7','T8','T9'].includes(win)) return 0.75;
  return 0.45;
}

function normalise(x, cap) {
  return Math.max(0, Math.min(1, x / cap));
}

function jitter(seed) {
  let x = Math.sin(seed * 9999.17) * 10000;
  return x - Math.floor(x);
}

function simulate(features, mode, nRaters = 100) {
  const baseWeights = mode === 'triage'
    ? { signal: 0.18, evidence: 0.14, risk: 0.28, criteria: 0.10, calc: 0.08, current: 0.16, mod: 0.06, cost: 0.18, threshold: 0.52 }
    : { signal: 0.22, evidence: 0.18, risk: 0.10, criteria: 0.25, calc: 0.12, current: 0.07, mod: 0.04, cost: 0.14, threshold: 0.43 };

  return features.map((f, idx) => {
    let yes = 0;
    const reasons = [];
    for (let r = 0; r < nRaters; r++) {
      const mult = key => 0.86 + jitter((idx + 1) * (r + 3) * (key.length + 7)) * 0.28;
      const w = Object.fromEntries(Object.keys(baseWeights).map(k => [k, baseWeights[k] * (k === 'threshold' ? 1 : mult(k))]));
      const score =
        w.signal * f.signal +
        w.evidence * f.evidence +
        w.risk * f.risk +
        w.criteria * f.criteria +
        w.calc * f.calculator +
        w.current * f.current +
        w.mod * f.modifiable -
        w.cost * f.cost;
      const threshold = baseWeights.threshold * (0.92 + jitter((idx + 17) * (r + 11)) * 0.16);
      if (score >= threshold) yes++;
    }
    if (f.risk >= 0.9) reasons.push('seguridad/stat');
    if (f.criteria >= 0.75) reasons.push('criterios DSM/CIE');
    if (f.calculator >= 0.8) reasons.push('calculadora');
    if (f.signal >= 0.55) reasons.push('señal en casos');
    if (f.modifiable >= 0.8) reasons.push('modificable');
    if (f.evidence >= 0.7) reasons.push('evidencia/peso');
    return { ...f, [`${mode}Prob`]: yes / nRaters, [`${mode}Reasons`]: reasons };
  });
}

function buildExposomeFeatures(items, cases, caseOutcomes) {
  return items.map(item => {
    const xs = cases.map(c => {
      const state = safeJson(c.reg?.ls?.exposome_scorer_v1, {});
      return activeExposomeAnswer(state.answers?.[item.id]) === true;
    });
    const assoc = maxAssoc(xs, caseOutcomes);
    const prev = prevalence(xs);
    const buckets = criterionBucketsForExposome(item);
    const id = item.id;
    const highRisk = STAT_EXPOSOME_IDS.has(id) || buckets.includes('risk');
    const feature = {
      module: 'exposoma',
      id,
      label: short(item.label),
      rawLabel: item.label,
      section: item.temporalWindow || item.blockCode || '',
      outcomes: item.outcomes || [],
      criteriaBuckets: buckets,
      prevalence: prev,
      assocOutcome: assoc.outcome,
      mi: assoc.mi,
      logOdds: assoc.lor,
      evidence: Math.max(normalise(item.weight || 0, 3), item.meta ? 0.75 : 0, /MA/i.test(item.evLevel || '') ? 0.65 : 0),
      signal: Math.max(normalise(assoc.mi, 0.075), normalise(Math.abs(assoc.lor), 3.2) * 0.7, 1 - Math.abs(prev - 0.45) / 0.45 * 0.25),
      risk: highRisk ? 1 : (buckets.includes('psychosis') || buckets.includes('mood-mania') || buckets.includes('substance') ? 0.5 : 0.12),
      criteria: Math.min(1, buckets.length / 2.2),
      calculator: CALC_IDS.has(id) ? 1 : 0,
      current: itemWindowBoost(item.temporalWindow || '', 'triage'),
      modifiable: MODIFIABLE_IDS.has(id) ? 1 : 0,
      cost: item.scoreOnly ? 0.22 : (item.familyDegree || item.featureCheck ? 0.34 : 0.46)
    };
    return feature;
  });
}

function buildPmseFeatures(rows, cases, caseOutcomes) {
  return rows.map(row => {
    const xs = cases.map(c => {
      const state = safeJson(c.reg?.ls?.bmse_state_v2, {});
      return activePmseEntry(row.id, state[row.id]) === true;
    });
    const assoc = maxAssoc(xs, caseOutcomes);
    const prev = prevalence(xs);
    const buckets = criterionBucketsForPmse(row);
    const triageCore = TRIAGE_PMSE_IDS.has(row.id);
    const lowTriage = LOW_TRIAGE_PMSE_IDS.has(row.id);
    const feature = {
      module: 'pmse',
      id: row.id,
      label: short(row.label || row.id, 74),
      rawLabel: row.label || row.id,
      section: row.section || '',
      outcomes: [],
      criteriaBuckets: buckets,
      prevalence: prev,
      assocOutcome: assoc.outcome,
      mi: assoc.mi,
      logOdds: assoc.lor,
      evidence: row.evalType === 'P' ? 0.7 : row.evalType === 'S+P' || row.evalType === 'O+P' ? 0.6 : 0.45,
      signal: Math.max(normalise(assoc.mi, 0.065), normalise(Math.abs(assoc.lor), 2.8) * 0.7, 1 - Math.abs(prev - 0.45) / 0.45 * 0.22),
      risk: buckets.includes('risk') || triageCore ? 0.85 : 0.2,
      criteria: Math.min(1, buckets.length / 1.8),
      calculator: row.id.startsWith('EXT.') || row.id.includes('oas') ? 0.6 : 0,
      current: 1,
      modifiable: /sueno|apetito|sustancias|regulación|amenaza|frustr/.test(row.id) ? 0.75 : 0.1,
      cost: lowTriage ? 0.78 : (/NM\.|F7\./.test(row.id) ? 0.62 : 0.38)
    };
    return feature;
  });
}

function functioningSummary(meta, cases) {
  const axes = meta.axes || [];
  const rows = axes.map(axis => ({
    id: axis.id,
    title: axis.title,
    rule: 'score 0-6 + fuente + nota breve por dominio'
  }));
  return {
    triage: {
      feature: 'Funcionamiento global actual',
      rule: '1 score global 0-6 + fuente + nota breve; alerta si cualquier eje actual >=4 o media >=3.'
    },
    standard: rows,
    research: {
      cells: 'Todas las ventanas por edad, 7 ejes, fuente, lectura narrativa, texto libre y puntos longitudinales.'
    }
  };
}

function historyPolicy() {
  return {
    triage: [
      'motivo declarado',
      'motivo real hipotetizado',
      'fuente/confiabilidad',
      'por que ahora',
      'curso: inicio, duracion, fluctuacion',
      'sintomas nucleares presentes',
      'riesgo suicida/hetero/negligencia/capacidad',
      'sustancias/medico/iatrogenico inmediato',
      'soporte y plan de seguridad'
    ],
    standard: [
      'motivo + curso + detonantes',
      'fenomenologia sindromica para DSM/CIE',
      'episodios previos y tratamiento/respuesta',
      'funcion y costo del sintoma',
      'riesgo estructurado y diferenciales'
    ],
    research: [
      'todos los campos de historia',
      'episodios longitudinales',
      'lectura narrativa',
      'hilo integrador',
      'datos textuales para modelado'
    ]
  };
}

function assignMode(simTriage, simStandard, module) {
  const byId = new Map();
  simTriage.forEach(x => byId.set(x.id, { ...x }));
  simStandard.forEach(x => byId.set(x.id, { ...(byId.get(x.id) || {}), ...x }));
  return [...byId.values()].map(f => {
    const triageProb = f.triageProb || 0;
    const standardProb = f.standardProb || 0;
    const statLike = STAT_EXPOSOME_IDS.has(f.id) ||
      (f.criteriaBuckets || []).some(b => ['risk','psychosis'].includes(b));
    const triage = module === 'exposoma'
      ? (f.risk >= 0.95 || (triageProb >= 0.82 && statLike) || (f.calculator >= 1 && f.criteria >= 0.65 && triageProb >= 0.55))
      : (triageProb >= 0.63 || f.risk >= 0.85);
    const standard = triage || standardProb >= 0.48 || (f.criteria >= 0.7 && f.signal >= 0.2) ||
      (module === 'exposoma' && TRIAGE_EXPOSOME_IDS.has(f.id) && standardProb >= 0.28) ||
      (module === 'pmse' && STANDARD_PMSE_IDS.has(f.id));
    return {
      ...f,
      mode: triage ? 'triage' : standard ? 'standard' : 'research',
      decisionClass: triage ? 'stat/core' : standard ? 'clinico DSM/CIE' : 'research-only'
    };
  }).sort((a, b) => {
    const rank = { triage: 0, standard: 1, research: 2 };
    return rank[a.mode] - rank[b.mode] || (b.triageProb + b.standardProb) - (a.triageProb + a.standardProb);
  });
}

function bucketTable(features, mode, n = 32) {
  const sel = features.filter(f => f.mode === mode).slice(0, n);
  if (!sel.length) return '_Sin ítems._\n';
  return '| módulo | id | ítem | por qué entra | DSM/CIE bucket |\n|---|---:|---|---|---|\n' + sel.map(f => {
    const reasons = [...new Set([...(f.triageReasons || []), ...(f.standardReasons || [])])].slice(0, 3).join(', ') || f.decisionClass;
    const buckets = (f.criteriaBuckets || []).map(b => DSM_ICD_BUCKETS[b]?.split(':')[0] || b).join(', ') || 'formulación';
    return `| ${f.module} | ${f.id} | ${f.label.replace(/\|/g, '/')} | ${reasons} · ${(f.triageProb || 0).toFixed(2)}/${(f.standardProb || 0).toFixed(2)} | ${buckets} |`;
  }).join('\n') + '\n';
}

function summariseByOutcome(features, mode) {
  const acc = {};
  features.filter(f => f.mode === mode).forEach(f => {
    const ks = (f.criteriaBuckets || ['formulation']);
    ks.forEach(k => { acc[k] = (acc[k] || 0) + 1; });
  });
  return Object.entries(acc).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${DSM_ICD_BUCKETS[k]?.split(':')[0] || k} ${v}`).join(' · ');
}

function missingChecks(features) {
  const criteria = new Set();
  features.filter(f => f.mode !== 'research').forEach(f => (f.criteriaBuckets || []).forEach(b => criteria.add(b)));
  return Object.keys(DSM_ICD_BUCKETS).filter(k => !criteria.has(k));
}

function writeReport({ cases, exposomeModes, pmseModes, func, history }) {
  const all = exposomeModes.concat(pmseModes);
  const counts = (arr, module) => ['triage','standard','research'].map(m => `${m}: ${arr.filter(x => x.mode === m).length}`).join(' · ');
  const missing = missingChecks(all);
  const pmseResearch = pmseModes.filter(x => x.mode === 'research').length;
  const report = `# Simulación de profundidad por modo · Intake Unificado

Fecha: 2026-06-03  
Corpus: ${cases.length} casos stress-test full-marked  
Raters simulados: 100 triage + 100 normal/clinico por ítem, con ruido de ponderación.

## Definición operativa

- **Triage** = decidir *stat*: seguridad, nivel de atención, urgencia, cuarentena orgánica/conciencia, riesgo suicida/hetero/negligencia/capacidad, y diferenciales que cambian la conducta inmediata.
- **Normal** = decidir clínicamente: suficiente granularidad para DSM/CIE por buckets de criterios, hipótesis principal, comorbilidad, curso y tratamiento.
- **Research** = recolectar todo: exposoma completo, longitudinalidad, texto, especificadores y variables de modelado.

Importante: el mapeo DSM/CIE es por **bucket clínico**, no copia literal de criterios.

## Resultado de conteo

- Exposoma: ${counts(exposomeModes, 'exposoma')}
- pMSE: ${counts(pmseModes, 'pmse')}
- Funcionamiento: triage = 1 score global; normal = ${func.standard.length} ejes; research = matriz longitudinal completa.
- Historia: triage = ${history.triage.length} campos breves; normal = ${history.standard.length} bloques; research = ${history.research.length} capas narrativas.

## Cobertura DSM/CIE

Triage cubre: ${summariseByOutcome(all, 'triage')}

Normal agrega: ${summariseByOutcome(all, 'standard')}

${missing.length ? `Buckets no cubiertos fuera de research: ${missing.map(k => DSM_ICD_BUCKETS[k]).join('; ')}` : 'No quedan buckets DSM/CIE completamente sin cobertura fuera de research.'}

## Ítems que entran en TRIAGE

${bucketTable(all, 'triage', 60)}

## Ítems que entran en NORMAL, pero no en triage

${bucketTable(all, 'standard', 70)}

## Research-only

Research conserva todo lo restante. En el análisis, research-only tiende a ser:

- Exposoma de baja prevalencia o bajo peso individual: perinatales finos, exposiciones contextuales lejanas, protectores, biomarcadores proxy débiles.
- ${pmseResearch ? 'pMSE fino: algunos ítems pasan a research-only por baja utilidad clínica inmediata.' : 'pMSE: la parrilla clínica completa queda disponible en normal; research agrega especificadores, texto, trazabilidad y export granular, no oculta dimensiones enteras.'}
- Narrativa longitudinal completa y puntos por edad.

## Funcionamiento

- Triage: ${func.triage.rule}
- Normal: ${func.standard.map(a => a.title).join(' · ')}; cada eje con score 0-6 + fuente + nota breve.
- Research: ${func.research.cells}

## Historia

Triage:
${history.triage.map(x => `- ${x}`).join('\n')}

Normal:
${history.standard.map(x => `- ${x}`).join('\n')}

Research:
${history.research.map(x => `- ${x}`).join('\n')}

## Regla de implementación propuesta

1. Mantener una sola app y un solo estado.
2. Cada módulo recibe \`JAFLO_MODE\`: \`triage\`, \`standard\`, \`research\`.
3. En triage no se borran datos: se ocultan ítems research-only y se reemplazan matrices largas por scores globales.
4. En normal se muestran todos los ítems con valor DSM/CIE o decisional, más calculadoras reconstruidas.
5. En research se muestra todo y se habilita texto/narrativa longitudinal.
6. Los ítems ocultos deben seguir disponibles por búsqueda o “mostrar research-only”, para no encerrar al clínico.

## Archivos generados

- \`mode-depth-selection.json\`: ranking completo con probabilidades de inclusión.
- \`mode-depth-selection-report.md\`: este reporte.
`;
  fs.writeFileSync(path.join(OUT_DIR, 'mode-depth-selection-report.md'), report);
}

async function main() {
  const cases = loadStressCases();
  const metadata = await loadBrowserMetadata();
  const caseOutcomes = cases.map(inferCaseOutcomes);

  const exposomeFeatures = buildExposomeFeatures(metadata.exposome.items, cases, caseOutcomes);
  const pmseFeatures = buildPmseFeatures(metadata.pmse, cases, caseOutcomes);

  const exposomeModes = assignMode(
    simulate(exposomeFeatures, 'triage', 100),
    simulate(exposomeFeatures, 'standard', 100),
    'exposoma'
  );
  const pmseModes = assignMode(
    simulate(pmseFeatures, 'triage', 100),
    simulate(pmseFeatures, 'standard', 100),
    'pmse'
  );
  const func = functioningSummary(metadata.functioning, cases);
  const history = historyPolicy();

  const payload = {
    generatedAt: new Date().toISOString(),
    cases: cases.map((c, i) => ({ id: c.id, label: c.label || c.dx || '', outcomes: caseOutcomes[i] })),
    counts: {
      exposoma: {
        total: exposomeModes.length,
        triage: exposomeModes.filter(x => x.mode === 'triage').length,
        standard: exposomeModes.filter(x => x.mode === 'standard').length,
        research: exposomeModes.filter(x => x.mode === 'research').length
      },
      pmse: {
        total: pmseModes.length,
        triage: pmseModes.filter(x => x.mode === 'triage').length,
        standard: pmseModes.filter(x => x.mode === 'standard').length,
        research: pmseModes.filter(x => x.mode === 'research').length
      }
    },
    exposoma: exposomeModes,
    pmse: pmseModes,
    funcionamiento: func,
    historia: history
  };
  fs.writeFileSync(path.join(OUT_DIR, 'mode-depth-selection.json'), JSON.stringify(payload, null, 2));
  writeReport({ cases, exposomeModes, pmseModes, func, history });

  console.log(JSON.stringify(payload.counts, null, 2));
  console.log('report:', path.join(OUT_DIR, 'mode-depth-selection-report.md'));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
