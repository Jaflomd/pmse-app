#!/usr/bin/env node
/* ============================================================================
   Audita results.json vs expected. Separa:
   (1) CHECKS DETERMINISTAS — donde el resultado correcto es demostrable
       (gate, banda organicidad, safety, deNovo, suicid lifetime, cuadrante).
   (2) OBSERVACIONES — fenotipo (macro/meso/micro), 3ST, robustez, errores JS.
   Imprime tabla + agregados + lista de fallas categorizadas.
   ============================================================================ */
const fs = require('fs');
const path = require('path');
const results = JSON.parse(fs.readFileSync(path.join(__dirname, 'results.json'), 'utf8'));
const cases = require('./cases/index.js');
const byId = {}; cases.forEach(c => byId[c.id] = c);

const inSet = (v, exp) => Array.isArray(exp) ? exp.includes(v) : v === exp;
const rows = [];
const fails = { gate: [], org: [], safety: [], deNovo: [], suicid: [], quadrant: [], harness: [], jsError: [] };

for (const r of results) {
  const c = byId[r.id] || {}; const ex = r.expected || {};
  const s = r.summary || {}; const h = s.historia || {}; const e = s.exposoma || {}; const f = s.funcion || {}; const b = s.bmse || {};
  const org = r.org || {};
  const chk = {};
  // harness sanity
  if (!r.reported || r.reported.length < 4) { fails.harness.push(`${r.id} reportó ${r.reported ? r.reported.length : 0}/4`); }
  if (r.pageErrors && r.pageErrors.length) fails.jsError.push(`${r.id}: ${r.pageErrors[0]}`);
  // deterministas
  chk.gate = (r.gate === ex.gate);
  if (!chk.gate) fails.gate.push(`${r.id} [${c.dx}] gate=${r.gate} esperado=${ex.gate}`);
  chk.org = ex.orgBand ? inSet(org.band, ex.orgBand) : true;
  if (!chk.org) fails.org.push(`${r.id} [${c.dx}] org=${org.band}(${org.pct}%) esperado=${JSON.stringify(ex.orgBand)} ruleIn=${(org.ruleIn || []).length}`);
  chk.safety = ex.safety ? (h.safety === ex.safety) : true;
  if (!chk.safety) fails.safety.push(`${r.id} [${c.dx}] safety=${h.safety} esperado=${ex.safety}`);
  chk.deNovo = (ex.deNovo != null) ? (h.deNovo === ex.deNovo) : true;
  if (!chk.deNovo) fails.deNovo.push(`${r.id} [${c.dx}] deNovo=${h.deNovo} esperado=${ex.deNovo} (curso=${h.curso} eps=${h.episodios})`);
  chk.suicid = ex.suicid ? (e.suicid === ex.suicid) : true;
  if (!chk.suicid) fails.suicid.push(`${r.id} [${c.dx}] suicid=${e.suicid} esperado=${ex.suicid}`);
  chk.quadrant = ex.quadrant ? (f.quadrant === ex.quadrant) : true;
  if (!chk.quadrant) fails.quadrant.push(`${r.id} [${c.dx}] cuadrante="${f.quadrant}" esperado="${ex.quadrant}" (media=${f.media} alarma=${f.alarma})`);

  rows.push({
    id: r.id, dx: (c.dx || '').slice(0, 42),
    gate: (r.gate ? 'FAIL' : 'pass') + (chk.gate ? '' : '✗'),
    org: `${org.band}` + (chk.org ? '' : '✗'),
    safety: h.safety + (chk.safety ? '' : '✗'),
    deNovo: (h.deNovo ? 'Y' : 'N') + (chk.deNovo ? '' : '✗'),
    suicid: (e.suicid || '—') + (chk.suicid ? '' : '✗'),
    quad: (f.quadrant || '—').slice(0, 12) + (chk.quadrant ? '' : '✗'),
    media: f.media, alarma: f.alarma,
    macro: (b.macro || '∅'), meso: (b.meso || ''), micro: (b.micro || ''), sev: b.severidad || '', st3: b.st3, psp: b.psp,
    expSt3: ex.st3 || '', expPheno: ex.phenotype || '',
    ICE: e.ICE, ace: e.ace, chrp: e.chrp
  });
}

// salida
console.log('=== TABLA (✗ = no coincide con lo esperado/demostrable) ===');
console.log('id    | gate    | org  | safe | dN | suicid   | cuadrante    | media | macro');
rows.forEach(r => console.log(
  `${r.id.padEnd(5)} | ${String(r.gate).padEnd(7)} | ${String(r.org).padEnd(4)} | ${String(r.safety).padEnd(4)} | ${r.deNovo.padEnd(2)} | ${String(r.suicid).padEnd(8)} | ${String(r.quad).padEnd(12)} | ${String(r.media).padEnd(5)} | ${r.macro}`
));

const total = results.length;
console.log('\n=== AGREGADOS DETERMINISTAS (fallas / 100) ===');
['gate', 'org', 'safety', 'deNovo', 'suicid', 'quadrant'].forEach(k => console.log(`${k.padEnd(9)}: ${fails[k].length} fallas`));
console.log(`harness   : ${fails.harness.length} (reportó <4/4)`);
console.log(`jsError   : ${fails.jsError.length}`);

console.log('\n=== FENOTIPO (macro vacío / insuficiente) ===');
const emptyMacro = rows.filter(r => r.macro === '∅');
console.log(`macro vacío en ${emptyMacro.length} casos: ${emptyMacro.map(r => r.id).join(', ')}`);

console.log('\n=== 3ST: esperado vs actual (red↔fail · yellow↔warn · green↔g) ===');
let st3ok = 0, st3bad = 0;
rows.filter(r => r.expSt3).forEach(r => {
  const map = { red: 'fail', yellow: 'warn', green: 'g' };
  const ok = r.st3 === (map[r.expSt3] || r.expSt3);
  ok ? st3ok++ : st3bad++;
  console.log(`${r.id} ${ok ? 'ok ' : '✗  '} st3=${r.st3} esperado=${r.expSt3}  [${r.dx}]`);
});
console.log(`3ST: ${st3ok} ok · ${st3bad} fallas`);

console.log('\n=== DETALLE DE FALLAS ===');
Object.keys(fails).forEach(k => {
  if (!fails[k].length) return;
  console.log(`\n-- ${k} (${fails[k].length}) --`);
  fails[k].forEach(x => console.log('  ' + x));
});

// dump máquina-legible para el reporte
fs.writeFileSync(path.join(__dirname, 'audit-rows.json'), JSON.stringify({ rows, fails, total }, null, 2));
console.log('\n-> audit-rows.json escrito');
