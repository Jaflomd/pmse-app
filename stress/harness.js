#!/usr/bin/env node
/* ============================================================================
   Stress-test harness — Intake Unificado.
   Carga intake-unificado.html en Chrome headless, siembra UN caso (REG seed)
   en localStorage ANTES de que corra el runtime, espera a que las 4 apps
   reporten vía postMessage, y extrae el readout maestro completo:
     - SUMMARY (las 4 actos: exposoma/funcion/historia/bmse)
     - VEM_AUTO (señales auto del VEMMFAL)
     - computeOrganicity() (banda + p + rule-ins)  ← el motor que estresamos
     - concienciaAlterada() (Gate de validez)
     - document.body.className (gate-pass / gate-fail)
   Devuelve un array de readouts (1 por caso) a stdout como JSON.
   Uso: node harness.js cases/<archivo>.js   (default: todos los casos del index)
   ============================================================================ */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const UI = path.resolve(__dirname, '..');
const TARGET = 'file://' + path.join(UI, 'intake-unificado.html');
const CHROME = process.env.CHROME_BIN ||
  '/Users/javierflorescohaila/.cache/puppeteer/chrome/mac_arm-147.0.7727.57/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';

const REGKEY = 'unifiedPatient_v2';

// readout que extraemos del contexto de la página (los const del runtime están
// en el scope léxico global → accesibles por nombre dentro de evaluate)
const EXTRACT = () => {
  const out = { ok: true };
  try { out.summary = JSON.parse(JSON.stringify(SUMMARY)); } catch (e) { out.summary = { __err: String(e) }; }
  try { out.vemAuto = JSON.parse(JSON.stringify(VEM_AUTO)); } catch (e) { out.vemAuto = {}; }
  try { out.org = computeOrganicity(); } catch (e) { out.org = { __err: String(e) }; }
  try { out.gate = concienciaAlterada(); } catch (e) { out.gate = null; }
  try { out.bodyClass = document.body.className; } catch (e) {}
  try { out.reported = (window.__reported ? Array.from(window.__reported) : []); } catch (e) { out.reported = []; }
  return out;
};

async function runCase(browser, c) {
  const page = await browser.newPage();
  const consoleErr = [];
  page.on('pageerror', e => consoleErr.push(String(e).slice(0, 200)));
  const seed = JSON.stringify({ meta: c.meta, ls: c.ls, _v: 'unifiedPatient_v2' });
  // siembra localStorage + tracker de reportes ANTES de cualquier script de la página
  await page.evaluateOnNewDocument((key, val) => {
    try { localStorage.setItem(key, val); } catch (e) {}
    window.__reported = new Set();
    window.addEventListener('message', ev => {
      const d = ev.data || {};
      if (d.type === 'JAFLO_SUMMARY' && d.app) window.__reported.add(d.app);
    });
  }, REGKEY, seed);

  await page.goto(TARGET, { waitUntil: 'load', timeout: 30000 });
  // espera a que las 4 apps reporten su summary (o timeout)
  try {
    await page.waitForFunction(() => window.__reported && window.__reported.size >= 4,
      { timeout: 8000, polling: 120 });
  } catch (e) { /* timeout: extraemos lo que haya */ }
  await new Promise(r => setTimeout(r, 350)); // settle (charts/refreshAll)

  const readout = await page.evaluate(EXTRACT);
  readout.id = c.id; readout.dx = c.dx; readout.expected = c.expected || {};
  if (consoleErr.length) readout.pageErrors = consoleErr.slice(0, 5);
  await page.close();
  return readout;
}

async function main() {
  const arg = process.argv[2];
  let cases;
  if (arg) {
    cases = require(path.resolve(arg));
    if (typeof cases === 'function') cases = cases();
    if (!Array.isArray(cases)) cases = cases.cases || [];
  } else {
    cases = require('./cases/index.js');
  }
  process.stderr.write(`Casos a correr: ${cases.length}\n`);

  const browser = await puppeteer.launch({
    executablePath: CHROME, headless: 'new',
    args: ['--no-sandbox', '--allow-file-access-from-files', '--disable-web-security']
  });
  const results = [];
  for (let i = 0; i < cases.length; i++) {
    try {
      const r = await runCase(browser, cases[i]);
      results.push(r);
      process.stderr.write(`  [${i + 1}/${cases.length}] ${cases[i].id} · reported ${r.reported.length}/4 · org ${r.org && r.org.band} · gate ${r.gate}\n`);
    } catch (e) {
      results.push({ id: cases[i].id, dx: cases[i].dx, ok: false, error: String(e).slice(0, 300) });
      process.stderr.write(`  [${i + 1}/${cases.length}] ${cases[i].id} · ERROR ${String(e).slice(0, 120)}\n`);
    }
  }
  await browser.close();
  process.stdout.write(JSON.stringify(results, null, 2));
}
main().catch(e => { console.error(e); process.exit(1); });
