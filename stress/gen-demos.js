#!/usr/bin/env node
/* Emite demos.js (window.STRESS_CASES) para el picker cargar-casos.html. */
const fs = require('fs');
const path = require('path');
const cases = require('./cases/index.js');
const out = cases.map(c => ({
  id: c.id, dx: c.dx, cie11: c.cie11 || '', dsm5: c.dsm5 || '', tests: c.tests || '',
  expected: c.expected || {},
  reg: { meta: c.meta, ls: c.ls, _v: 'unifiedPatient_v2' }
}));
const js = 'window.STRESS_CASES = ' + JSON.stringify(out).replace(/<\//g, '<\\/') + ';';
fs.writeFileSync(path.join(__dirname, 'demos.js'), js);
console.log('OK demos.js · ' + out.length + ' casos · ' + (Buffer.byteLength(js) / 1024).toFixed(0) + ' KB');
