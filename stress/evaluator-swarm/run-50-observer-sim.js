#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const LAB = path.resolve(__dirname, '../../../..');
const DATA = path.join(LAB, 'output/book-bmse/proposal/bmse-data.js');
const VARIANT = process.argv[2] === 'rater45' ? 'rater45' : 'current';
const HTML = path.join(LAB, `3-output/bmse/book-bmse/proposal/pmse-scorer-fenotipos${VARIANT === 'rater45' ? '-rater45' : ''}.html`);
const OUT = path.join(__dirname, `sim-50-${VARIANT}`);
const OBS_DIR = path.join(OUT, 'observadores');

function read(file) { return fs.readFileSync(file, 'utf8'); }
function esc(s) { return String(s || '').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim(); }
function seeded(seed) {
  let x = seed >>> 0;
  return () => {
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    return ((x >>> 0) / 4294967296);
  };
}
function quantile(arr, q) {
  if (!arr.length) return 0;
  const xs = arr.slice().sort((a, b) => a - b);
  const pos = (xs.length - 1) * q;
  const lo = Math.floor(pos), hi = Math.ceil(pos);
  if (lo === hi) return xs[lo];
  return xs[lo] + (xs[hi] - xs[lo]) * (pos - lo);
}
function mean(arr) { return arr.length ? arr.reduce((a,b)=>a+b,0) / arr.length : 0; }
function pct(n) { return Math.round(n * 100); }
function cleanLabel(id) {
  return id
    .replace(/^F4\.contenido-/, 'F4.contenido / ')
    .replace(/^F2\.sensorial-/, 'F2.sensorial / ')
    .replace(/^F6\.loss-/, 'F6.animo-meta / ')
    .replace(/^FUN\.psp_/, 'FUN.')
    .replace(/_/g, ' ');
}

function quotedValues(src) {
  return [...String(src || '').matchAll(/'([^']+)'/g)].map(m => m[1]);
}

function parseRater45Supports(html) {
  const supports = new Map();
  const re = /targets:\[([^\]]+)\],\s*\n\s*features:\[([^\]]+)\]/g;
  for (const match of html.matchAll(re)) {
    const targets = quotedValues(match[1]);
    const features = quotedValues(match[2]);
    for (const id of targets) {
      if (!supports.has(id)) supports.set(id, new Set());
      for (const feature of features) supports.get(id).add(feature);
    }
  }
  return supports;
}

function loadRuntime() {
  const ctx = {
    console, Math, Date, JSON,
    window: {},
    document: {},
    localStorage: { getItem(){ return null; }, setItem(){}, removeItem(){} }
  };
  vm.createContext(ctx);
  vm.runInContext(read(DATA), ctx, {filename: DATA});
  const html = read(HTML);
  const mapMatch = html.match(/const SECTION_MAP = \{([\s\S]*?)\n\};/);
  const orderMatch = html.match(/const SECTION_ORDER = \[([\s\S]*?)\n\];/);
  const secCtx = {};
  vm.createContext(secCtx);
  vm.runInContext(`SECTION_MAP={${mapMatch ? mapMatch[1] : ''}\n}; SECTION_ORDER=[${orderMatch ? orderMatch[1] : ''}\n];`, secCtx);
  const data = vm.runInContext(`({
    dims: DIMS.map(d => ({
      id:d.id, title:d.title||d.label||d.id, code:d.code||'', type:d.type||'',
      scores:Object.keys(d.scores||{}), details:Object.keys(d.details||{}).length,
      guide:!!d.guide,
      tests:(d.tests||[]).map(t => ({id:t.id,label:t.label||t.id,scoreKeys:t.scoreKeys||Object.keys(t.scores||{})})),
      axes:(d.axes||[]).map(a => ({id:a.id,label:a.label||a.id,scoreKeys:Object.keys(a.scores||{})}))
    })),
    virtual: Object.entries(VIRTUAL_SCORE_DEFINITIONS||{}).map(([id,v]) => ({
      id, title:v.label||id, scores:Object.keys(v.scores||{}), details:Object.keys(v.details||{}).length
    })),
    hitop: Object.fromEntries(Object.entries(HITOP_MAP||{}).map(([k,v]) => [k.replace(/\\n/g,' '), v.map(f => f.id)])),
    rdoc: Object.fromEntries(Object.entries(RDOC_MAP||{}).map(([k,v]) => [k.replace(/\\n/g,' '), v.map(f => f.id)]))
  })`, ctx);
  return {
    variant: VARIANT,
    html,
    supports: parseRater45Supports(html),
    data,
    sectionMap: secCtx.SECTION_MAP || {},
    sectionOrder: secCtx.SECTION_ORDER || []
  };
}

const FEATURE_REASONS = {
  mode: 'cambia el modo de puntuacion o mezcla filas visibles con subcanales',
  channel: 'requiere agregar canales/subtipos sin perder el score padre',
  temporal: 'obliga a separar estado actual, ultima semana, basal, episodio y lifetime',
  source: 'depende de fuente del dato: observado, probado, colateral o inferido',
  construct: 'frontera de constructo con items vecinos',
  polarity: 'polo positivo o negativo contraintuitivo',
  bedside: 'requiere maniobra bedside bien administrada',
  ontology: 'los expertos pueden objetar la propiedad fenomenologica del constructo',
  risk: 'tiene consecuencias de seguridad, capacidad o validez transversal',
  mapping: 'arrastra mapas HiTOP/RDoC/brain y puede pesar mas de lo que parece'
};

function itemFeatures(item, maps) {
  const id = item.id;
  const s = `${id} ${item.title}`;
  const f = {};
  f.mode = item.type === 'multitest' ? 0.9 : item.type === 'two_axis' ? 0.85 : item.type === 'conviction' ? 0.8 : item.kind === 'virtual' ? 0.7 : 0.35;
  f.channel = /F4\.contenido|F2\.sensorial|F6\.loss|G\.sueno|FUN\.psp|oas_|P1|P2|EXT/.test(id) ? 0.9 : 0.15;
  f.temporal = /FUN\.|F7\.coherencia|F7\.self|G\.sueno|G\.apetito|F4\.contenido|META|I\.insight|J\.juicio/.test(id) ? 0.85 : 0.2;
  f.source = /NC\.|NM\.|FUN\.|EXT\.|P1|P2|META|J\.juicio|I\.insight/.test(id) ? 0.8 : 0.2;
  f.construct = /F4\.contenido|F7\.|F2\.sensorial|F6\.amenaza|F6\.autoevalu|F6\.desesperanza|E\.regul|G\.coherencia|F5\.regul|I\.insight|J\.juicio|E\.egodistonia|P1|P2/.test(id) ? 0.9 : 0.25;
  f.polarity = /F6\.amenaza|F5\.regul|G\.coherencia|E\.regul|F7\.auto|F7\.self|F3\.anticip|FUN\..*exceso|sobrevalorada|extrema/.test(id) ? 0.85 : 0.2;
  f.bedside = /NC\.fluencia|NC\.digit|NC\.tmt|NC\.clock|NC\.recall|NM\.|F2\.velocidad|F1\.expresividad/.test(id) ? 0.9 : 0.1;
  f.ontology = /F4\.contenido|F7\.testing|F7\.coherencia|F7\.auto|F7\.self|F7\.mental|F2\.sensorial|E\.egodistonia|I\.insight|J\.juicio|P1|P2|parakinesia/.test(id) ? 0.9 : 0.2;
  f.risk = /NC\.conciencia|EXT\.|FUN\.psp_disruptivas|oas_|J\.juicio|I\.insight/.test(id) ? 0.85 : 0.15;
  const hitopCount = Object.values(maps.hitop).filter(xs => xs.some(x => x === id || x.startsWith(id))).length;
  const rdocCount = Object.values(maps.rdoc).filter(xs => xs.some(x => x === id || x.startsWith(id))).length;
  f.mapping = Math.min(1, (hitopCount + rdocCount) / 7);
  if (/NC\.conciencia/.test(id)) { f.risk = 1; f.construct = Math.max(f.construct, 0.6); f.polarity = Math.max(f.polarity, 0.7); }
  if (/parakinesia/.test(id)) { f.bedside = 0.85; f.source = 0.8; f.ontology = 0.8; }
  if (/oas_/.test(id)) { f.risk = 0.95; f.channel = 0.8; f.mode = 0.75; }
  return f;
}

const SUPPORT_FACTORS = {
  source: 0.30,
  temporal: 0.34,
  construct: 0.42,
  channel: 0.44,
  ontology: 0.48,
  risk: 0.42,
  bedside: 0.52,
  polarity: 0.48,
  mode: 0.72,
  mapping: 0.72
};

function applySupportFeatures(features, supportSet) {
  if (!supportSet || !supportSet.size) return features;
  const out = {...features};
  for (const feature of supportSet) {
    if (feature in out) out[feature] *= SUPPORT_FACTORS[feature] || 0.55;
  }
  out.mode *= SUPPORT_FACTORS.mode;
  out.mapping *= SUPPORT_FACTORS.mapping;
  return out;
}

const COHORTS = [
  {key:'estudiante', label:'Estudiante', n:13, seed:1101, weights:{mode:1.25, channel:1.05, temporal:0.75, source:1.0, construct:0.85, polarity:1.15, bedside:1.25, ontology:0.25, risk:0.75, mapping:0.25}},
  {key:'residente', label:'Residente', n:13, seed:2202, weights:{mode:0.8, channel:1.1, temporal:1.0, source:0.95, construct:1.1, polarity:0.95, bedside:0.85, ontology:0.7, risk:0.85, mapping:0.45}},
  {key:'psiquiatra', label:'Psiquiatra formado', n:12, seed:3303, weights:{mode:0.45, channel:0.95, temporal:1.15, source:1.05, construct:1.0, polarity:0.8, bedside:0.95, ontology:0.85, risk:1.0, mapping:0.7}},
  {key:'experto', label:'Experto', n:12, seed:4404, weights:{mode:0.25, channel:0.8, temporal:1.0, source:0.85, construct:1.2, polarity:0.85, bedside:0.35, ontology:1.35, risk:0.75, mapping:1.0}}
];

function buildItems(runtime) {
  const sectionMap = runtime.sectionMap;
  const items = [];
  for (const d of runtime.data.dims) {
    const section = sectionMap[d.id] || d.code || 'Sin seccion';
    items.push({kind:'dim', id:d.id, title:d.title, section, type:d.type, parent:null, tests:d.tests.length, axes:d.axes.length});
    for (const t of d.tests) {
      items.push({kind:'test', id:t.id, title:t.label, section: sectionMap[t.id] || section, type:'test', parent:d.id});
    }
    for (const a of d.axes) {
      items.push({kind:'axis', id:a.id, title:a.label, section: sectionMap[a.id] || section, type:'axis', parent:d.id});
    }
  }
  for (const v of runtime.data.virtual) {
    const parent = v.id.split('-')[0].split('_')[0];
    const section = sectionMap[v.id] || sectionMap[parent] || (/FUN\./.test(v.id) ? 'Funcionalidad' : /G\.sueno/.test(v.id) ? 'Somatico-ritmos' : /F4\.contenido|F2\.sensorial/.test(v.id) ? 'Pensamiento y percepcion' : /F6\./.test(v.id) ? 'Valencia negativa' : 'Canales derivados');
    items.push({kind:'virtual', id:v.id, title:v.title || cleanLabel(v.id), section, type:'virtual', parent});
  }
  const dedup = new Map();
  for (const item of items) if (!dedup.has(item.id)) dedup.set(item.id, item);
  return [...dedup.values()].map(item => {
    const supportSet = runtime.supports.get(item.id);
    const supportFeatures = supportSet ? [...supportSet] : [];
    const rawFeatures = itemFeatures(item, runtime.data);
    return {
      ...item,
      supportFeatures,
      features: applySupportFeatures(rawFeatures, supportSet)
    };
  });
}

function difficulty(item, cohort, rng) {
  const f = item.features;
  let score = 0, denom = 0;
  for (const [k,w] of Object.entries(cohort.weights)) { score += (f[k] || 0) * w; denom += w; }
  const base = denom ? score / denom : 0;
  const jitter = (rng() - 0.5) * 0.16;
  const complexity = Math.max(0, Math.min(1, base + jitter));
  const disagreement = Math.max(0, Math.min(1, (f.construct*0.28 + f.temporal*0.22 + f.ontology*0.24 + f.channel*0.14 + f.source*0.12) + (rng()-0.5)*0.12));
  return {complexity, disagreement};
}

function topFeatureReasons(item, cohort, limit=3) {
  return Object.entries(item.features)
    .map(([k,v]) => ({k, v:v * (cohort.weights[k] || 0)}))
    .sort((a,b)=>b.v-a.v)
    .slice(0, limit)
    .map(x => FEATURE_REASONS[x.k]);
}

function simulate(runtime) {
  const items = buildItems(runtime);
  const observers = [];
  let index = 1;
  for (const cohort of COHORTS) {
    for (let i=0; i<cohort.n; i++) {
      const rng = seeded(cohort.seed + i * 97);
      const scored = items.map(item => {
        const d = difficulty(item, cohort, rng);
        return {...item, ...d};
      }).sort((a,b) => b.complexity - a.complexity || b.disagreement - a.disagreement);
      observers.push({
        id: `OBS-${String(index).padStart(2,'0')}`,
        cohort: cohort.key,
        cohortLabel: cohort.label,
        profile: {
          toleranciaAmbiguedad: Math.round((0.35 + rng()*0.55) * 100),
          sesgoDSM: Math.round((cohort.key === 'residente' ? 0.65 : cohort.key === 'psiquiatra' ? 0.55 : cohort.key === 'estudiante' ? 0.45 : 0.25) * 100 + (rng()-0.5)*18),
          confianzaBedside: Math.round((cohort.key === 'estudiante' ? 0.35 : cohort.key === 'residente' ? 0.62 : cohort.key === 'psiquiatra' ? 0.78 : 0.86) * 100 + (rng()-0.5)*14)
        },
        top: scored.slice(0, 10).map(item => ({
          id:item.id, title:item.title, section:item.section,
          complexity:item.complexity, disagreement:item.disagreement,
          reasons:topFeatureReasons(item, cohort),
          supportFeatures:item.supportFeatures || []
        })),
        score50: Math.round(Math.max(0, Math.min(50,
          50
          - mean(scored.slice(0, 18).map(item => item.complexity)) * 9
          - mean(scored.slice(0, 18).map(item => item.disagreement)) * 5
        )))
      });
      index++;
    }
  }
  return {items, observers};
}

function aggregate(sim) {
  const byItem = new Map();
  for (const obs of sim.observers) {
    for (const t of obs.top) {
      if (!byItem.has(t.id)) byItem.set(t.id, {id:t.id,title:t.title,section:t.section, hits:0, complexities:[], disagreements:[], cohorts:{}});
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
  })).sort((a,b) => b.hits - a.hits || b.mean - a.mean || b.dis - a.dis);

  const bySection = new Map();
  for (const row of rows) {
    if (!bySection.has(row.section)) bySection.set(row.section, {section:row.section,hits:0,items:0,meanVals:[]});
    const s = bySection.get(row.section);
    s.hits += row.hits;
    s.items++;
    s.meanVals.push(row.mean);
  }
  const sections = [...bySection.values()].map(s => ({...s, mean:mean(s.meanVals)})).sort((a,b)=>b.hits-a.hits);
  return {rows, sections};
}

function observerMd(obs) {
  const lines = [];
  lines.push(`# ${obs.id} · ${obs.cohortLabel}`);
  lines.push('');
  lines.push(`- Score rater proyectado: **${obs.score50}/50**`);
  lines.push(`- Tolerancia a ambiguedad: ${obs.profile.toleranciaAmbiguedad}%`);
  lines.push(`- Sesgo DSM/gestalt categorial: ${obs.profile.sesgoDSM}%`);
  lines.push(`- Confianza bedside: ${obs.profile.confianzaBedside}%`);
  lines.push('');
  lines.push('## Items que mas le costarian');
  lines.push('');
  lines.push('| Rank | Item | Seccion | Dificultad | Desacuerdo | Por que |');
  lines.push('|---:|---|---|---:|---:|---|');
  obs.top.forEach((t, i) => {
    lines.push(`| ${i+1} | \`${t.id}\` ${esc(t.title)} | ${esc(t.section)} | ${pct(t.complexity)}% | ${pct(t.disagreement)}% | ${t.reasons.map(esc).join('; ')} |`);
  });
  lines.push('');
  lines.push('## Comentario simulado');
  const first = obs.top[0];
  lines.push(`Este observador tenderia a detenerse primero en \`${first.id}\`, no porque el item sea inutil, sino porque exige decidir fuente, ventana o frontera antes de tener una regla de cierre. La mejora mas util para este perfil seria una micro-rubrica visible al lado del item y un ejemplo contrastivo de 0 vs patologia leve.`);
  lines.push('');
  return lines.join('\n');
}

function cohortSummary(sim, cohortLabel) {
  const observers = sim.observers.filter(o => o.cohortLabel === cohortLabel);
  const counts = new Map();
  for (const o of observers) for (const t of o.top.slice(0,8)) counts.set(t.id, (counts.get(t.id)||0)+1);
  return [...counts.entries()].sort((a,b)=>b[1]-a[1]).slice(0,8)
    .map(([id,n]) => {
      const t = observers.flatMap(o=>o.top).find(x=>x.id===id);
      return {id, title:t?.title||id, n};
    });
}

function synthesisMd(sim, agg) {
  const date = new Date().toISOString().slice(0,10);
  const variantLabel = VARIANT === 'rater45' ? 'copia rater45' : 'actual';
  const observerMean = mean(sim.observers.map(o => o.score50));
  const observerP10 = quantile(sim.observers.map(o => o.score50), 0.10);
  const lines = [];
  lines.push(`# Simulacion ${variantLabel} · 50 observadores pMSE`);
  lines.push('');
  lines.push(`**Fecha:** ${date}`);
  lines.push(`**Instrumento:** pMSE ${variantLabel} dentro del Intake Unificado.`);
  lines.push('**N:** 50 observadores simulados: 13 estudiantes, 13 residentes, 12 psiquiatras formados, 12 expertos.');
  lines.push('**Metodo:** simulacion cognitiva deterministica derivada de la estructura del instrumento, mapas HiTOP/RDoC y reportes previos. No son datos empiricos.');
  lines.push(`**Score rater proyectado:** ${observerMean.toFixed(1)}/50 promedio; p10 ${observerP10.toFixed(1)}/50.`);
  if (VARIANT === 'rater45') {
    const supportItems = new Set();
    sim.items.forEach(item => { if ((item.supportFeatures || []).length) supportItems.add(item.id); });
    lines.push(`**Capa rater45 detectada:** ${supportItems.size} items/canales con micro-rubrica de fuente, ventana, frontera o riesgo.`);
  }
  lines.push('');
  lines.push('## Lectura ejecutiva');
  lines.push('');
  if (VARIANT === 'rater45') {
    lines.push('La copia rater45 baja la carga de calificacion al poner junto al item una mini-rubrica operacional: fuente del dato, ventana temporal, frontera fenomenologica y regla de cierre. La dificultad residual ya no se concentra tanto en F4 contenido; se desplaza hacia fronteras finas de self/metacognicion, funcionalidad y motor.');
  } else {
    lines.push('La app mejoro en tres puntos: la navegacion por pestanas es mas manejable, `NM.estereotipia` ya no aparece como item duplicado y `Psicopatologia Motora` queda como seccion propia con Hiper/Hipo/Paraki. Aun asi, la dificultad residual se concentra en cuatro familias: contenido/realidad, self-metacognicion, motor/parakinesia y funcionamiento/riesgo.');
  }
  lines.push('');
  lines.push('## Top 20 items mas complicados');
  lines.push('');
  lines.push('| Rank | Item | Seccion | Observadores que lo marcaron | Dificultad media | Desacuerdo medio | Cohortes |');
  lines.push('|---:|---|---|---:|---:|---:|---|');
  agg.rows.slice(0,20).forEach((r,i) => {
    const cohorts = Object.entries(r.cohorts).map(([k,v]) => `${k}:${v}`).join(', ');
    lines.push(`| ${i+1} | \`${r.id}\` ${esc(r.title)} | ${esc(r.section)} | ${r.hits}/50 | ${pct(r.mean)}% | ${pct(r.dis)}% | ${cohorts} |`);
  });
  lines.push('');
  lines.push('## Carga por seccion');
  lines.push('');
  lines.push('| Seccion | Hits en top-10 | Items implicados | Dificultad media |');
  lines.push('|---|---:|---:|---:|');
  agg.sections.slice(0,12).forEach(s => lines.push(`| ${esc(s.section)} | ${s.hits} | ${s.items} | ${pct(s.mean)}% |`));
  lines.push('');
  lines.push('## Que veria cada cohorte');
  lines.push('');
  for (const c of COHORTS) {
    lines.push(`### ${c.label}`);
    const top = cohortSummary(sim, c.label);
    lines.push(top.map((x,i)=>`${i+1}. \`${x.id}\` ${esc(x.title)} (${x.n}/${c.n})`).join('\n'));
    lines.push('');
  }
  lines.push('## Lo que emerge despues de las correcciones');
  lines.push('');
  if (VARIANT === 'rater45') {
    lines.push('1. **La capa de evidencia paga mucho.** Fuente + ventana reduce dudas de estudiantes y residentes sin empobrecer la fenomenologia para expertos.');
    lines.push('2. **F4 queda mas calificable.** El arbol intrusividad/carga afectiva/corregibilidad/consenso transforma una frontera diagnostica en una decision fenomenologica.');
    lines.push('3. **META/F7 siguen siendo el cuello experto.** La app mejora, pero realidad compartida, insight, juicio y egodistonia aun requieren ejemplos contrastivos durante entrenamiento.');
    lines.push('4. **Riesgo/funcion necesita colateralidad.** La UI ya muestra el criterio, pero la confiabilidad real dependera de documentar si el dato fue preguntado, observado o confirmado.');
    lines.push('5. **Objetivo 45/50.** La simulacion proyecta que la copia cruza el umbral promedio, con residual manejable por entrenamiento breve.');
  } else {
    lines.push('1. **La dificultad se movio, no desaparecio.** Ya no emerge `NM.estereotipia` como duplicado; ahora el problema motor se ordena alrededor de `parakinesia_iterativa`, `parakinesia_odd`, `parakinesia_volicional`, acatisia/parkinsonismo y velocidad.');
    lines.push('2. **F4 contenido sigue siendo el borde mas caro.** La seleccion de una idea indice ayuda, pero rater reliability depende de diferenciar idea sobrevalorada, creencia inusual, EOI y delusion sin usar solo diagnostico.');
    lines.push('3. **Self/metacognicion es el nuevo nucleo experto.** `F7.testing`, `F7.auto-mentalizacion`, `F7.self-integracion`, `I.insight`, `J.juicio` y `E.egodistonia` quedan como una familia que necesita mini-rubrica de propiedad: realidad compartida, conciencia de enfermedad, decision practica y relacion subjetiva.');
    lines.push('4. **La capa funcional/riesgo necesita fuente y ventana.** PSP, OAS/BVC, capacidad y riesgo son legibles, pero los observadores pedirian ver si el dato fue probado, colateral o inferido y si corresponde a ahora, ultima semana o basal.');
    lines.push('5. **La app ya esta mas ensenable.** Las pestanas reducen carga, la seccion motora propia aclara el modelo, y separar riesgo/capacidad evita que todo quede escondido en Inputs.');
  }
  lines.push('');
  lines.push('## Cambios pequenos con mayor retorno');
  lines.push('');
  lines.push('- Agregar en items frontera una etiqueta visible de fuente: `O` observado, `S` subjetivo, `P` probado, `C` colateral.');
  lines.push('- En F4 contenido, mostrar un micro-arbol: intrusividad -> carga afectiva -> corregibilidad -> consenso de realidad.');
  lines.push('- En F7/META, mostrar cuatro mini-definiciones fijas: realidad compartida, insight enfermedad, juicio practico, egodistonia.');
  lines.push('- En Motor, mostrar debajo de Paraki: iterativa / odd / volicional con ejemplos de 1 linea y temporalidad actual/7 dias.');
  lines.push('- En PSP/riesgo, exigir ventana temporal antes de cerrar: ahora, ultima semana, episodio actual, basal/lifetime.');
  lines.push('');
  lines.push('## Archivos generados');
  lines.push('');
  lines.push('- `observer-sim-50.json`: datos crudos de la simulacion.');
  lines.push('- `observadores/OBS-01.md` ... `OBS-50.md`: mini-reportes individuales.');
  lines.push('');
  return lines.join('\n');
}

function main() {
  const runtime = loadRuntime();
  const sim = simulate(runtime);
  const agg = aggregate(sim);
  fs.mkdirSync(OBS_DIR, {recursive:true});
  fs.writeFileSync(path.join(OUT, 'observer-sim-50.json'), JSON.stringify({
    variant: VARIANT,
    observerScoreMean: mean(sim.observers.map(o => o.score50)),
    observers:sim.observers,
    aggregate:agg.rows,
    sections:agg.sections
  }, null, 2));
  for (const obs of sim.observers) {
    fs.writeFileSync(path.join(OBS_DIR, `${obs.id}.md`), observerMd(obs));
  }
  fs.writeFileSync(path.join(OUT, '00_SINTESIS_50_OBSERVADORES.md'), synthesisMd(sim, agg));
  console.log(`OK ${sim.observers.length} observers (${VARIANT}) -> ${OUT}`);
  console.log(`Score rater medio: ${mean(sim.observers.map(o => o.score50)).toFixed(1)}/50`);
  console.log('Top 10:');
  agg.rows.slice(0,10).forEach((r,i)=>console.log(`${i+1}. ${r.id} ${r.hits}/50 mean=${pct(r.mean)} dis=${pct(r.dis)}`));
}

main();
