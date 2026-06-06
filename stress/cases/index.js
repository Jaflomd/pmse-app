/* ============================================================================
   100 casos psiquiátricos sintéticos — enfoque CIE-11 / DSM-5-TR.
   Cada caso = arquetipo clínico + `expected` (lo que el motor DEBERÍA dar).
   Bloques: A psicosis · B bipolar · C depresión · D ansiedad · E trauma ·
   F orgánico/neurocognitivo (estresa el Gate) · G sustancias · H neurodesarrollo·
   I personalidad · J conducta alimentaria/somático · K adversariales (rompen la
   síntesis maestra: dosis-respuesta, triangulación seguridad, auto-flags, NaN).
   ============================================================================ */
const { buildCase, EXPO, EXT_KITS, mergeAns } = require('../lib/build');

// ---- helpers de meta y funcionamiento ----
function M(codigo, edad, sexo, opts = {}) {
  return Object.assign({
    codigo, edad: String(edad), sexo, evaluador: 'JFC', fecha: '2026-06-01',
    setting: opts.setting || 'Consulta externa', fuente: opts.fuente || 'Paciente', confiabilidad: opts.confiabilidad || 'Media',
    estadoCivil: opts.estadoCivil || 'Soltero/a', etnia: opts.etnia || 'Mestizo/a',
    ocupacion: opts.ocupacion || 'Empleado/a', educacion: opts.educacion || 'Secundaria', ses: opts.ses || 'Medio'
  }, opts.metaExtra || {});
}
const A7 = (v) => ({ social: v, acadlab: v, vincular: v, autonomia: v, autocuidado: v, drive: v, cognicion: v });
const fxPreserved = (age, exp = 'baja') => ({ age, exposure: exp, current: A7(1), coherence: 'alta', pattern: '' });
const fxMild = (age, exp = 'baja') => ({ age, exposure: exp, current: { social: 2, acadlab: 2, vincular: 2, autonomia: 1, autocuidado: 1, drive: 2, cognicion: 1 } });
const fxImpaired = (age, exp = 'alta') => ({ age, exposure: exp, current: A7(4) });
const fxAcuteBreak = (age, exp = 'baja') => ({ age, exposure: exp, breakAge: age, current: { social: 2, acadlab: 5, vincular: 2, autonomia: 3, autocuidado: 5, drive: 3, cognicion: 6 }, pattern: 'ruptura aguda' });
const fxChronicDecline = (age, exp = 'baja') => ({ age, exposure: exp, current: A7(5), earlier: { s12_15: A7(1), s16_18: { acadlab: 2, social: 2 } }, pattern: 'declive progresivo' });
const fxDementia = (age) => ({ age, exposure: 'baja', current: { social: 4, acadlab: 5, vincular: 4, autonomia: 5, autocuidado: 5, drive: 4, cognicion: 6 }, earlier: { s45_64: A7(1) }, pattern: 'declive progresivo' });

// expected helper
function E(o) { return o; }

const SPECS = [];
const push = (s) => SPECS.push(s);

/* ════════ A · ESPECTRO PSICÓTICO (SALIENCIA / A1) ════════ */
push({ id: 'A01', dx: 'Esquizofrenia paranoide', cie11: '6A20.0', dsm5: '295.90', tests: 'psicosis positiva, gate pass',
  meta: M('A01-SZ', 28, 'M', { ocupacion: 'Desempleado/a' }),
  exposome: mergeAns(EXPO.psychosis), functioning: fxChronicDecline(28),
  history: { setting: 'consulta externa', curso: 'continuo', tempo: 'insidioso', safety: 'g', insight: 'egosintónico (no lo reconoce)', episodesAges: [20, 24] },
  bmse: { preset: 'PSYCHOSIS_POSITIVE' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'psicótico/saliencia' }) });
push({ id: 'A02', dx: 'Trastorno delirante', cie11: '6A24', dsm5: '297.1', tests: 'delirio sin alucinación, insight nulo',
  meta: M('A02-TD', 52, 'F'), exposome: {}, functioning: fxMild(52),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g', insight: 'egosintónico (no lo reconoce)', episodesAges: ['a los 48'] },
  bmse: { preset: 'DELIRIO_CRONICO' },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'delirante/psicótico', note: 'edad inicio 48>40 → posible auto-flag organicidad' }) });
push({ id: 'A03', dx: 'Primer episodio psicótico (FEP)', cie11: '6A20.Z', dsm5: '298.8', tests: 'primer episodio agudo, de novo',
  meta: M('A03-FEP', 22, 'M', { setting: 'Emergencia', fuente: 'Familiar' }),
  exposome: mergeAns(EXPO.chrp, EXPO.neurodev), functioning: fxAcuteBreak(22),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'subagudo', safety: 'g', primer: true, insight: 'parcial' },
  bmse: { preset: 'PSYCHOSIS_POSITIVE' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'psicótico' }) });
push({ id: 'A04', dx: 'Trastorno esquizoafectivo', cie11: '6A21', dsm5: '295.70', tests: 'frontera saliencia+afectivo',
  meta: M('A04-EA', 34, 'F'), exposome: mergeAns(EXPO.psychosis, EXPO.depression), functioning: fxChronicDecline(34),
  history: { curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'warn', episodesAges: [24, 29, 33] },
  bmse: { preset: 'MANIA_PSICOTICA', vector: { 'F3.tono': { score: '-1', specifiers: {} }, 'F6.desesperanza': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'frontera psicótico-afectivo' }) });
push({ id: 'A05', dx: 'Trastorno psicótico agudo y transitorio', cie11: '6A23', dsm5: '298.8', tests: 'psicosis breve, remite',
  meta: M('A05-PB', 26, 'F', { setting: 'Emergencia' }), exposome: mergeAns(EXPO.highLoad), functioning: fxAcuteBreak(26, 'alta'),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'hiperagudo', safety: 'g', primer: true },
  bmse: { preset: 'PSYCHOSIS_POSITIVE' },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'psicótico', note: 'tempo hiperagudo puede subir organicidad (estrés VEMMFAL)' }) });
push({ id: 'A06', dx: 'Esquizofrenia desorganizada', cie11: '6A20.1', dsm5: '295.10', tests: 'desorganización → B4',
  meta: M('A06-DES', 24, 'M'), exposome: mergeAns(EXPO.neurodev), functioning: fxChronicDecline(24),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g', insight: 'egosintónico (no lo reconoce)' },
  bmse: { preset: 'DESORGANIZADO' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'desorganizado/neurocognitivo' }) });
push({ id: 'A07', dx: 'Esquizofrenia síntomas negativos', cie11: '6A20.3', dsm5: '295.90', tests: 'negativos → B3 desapego',
  meta: M('A07-NEG', 30, 'M', { ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.neurodev), functioning: fxChronicDecline(30),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g', insight: 'parcial' },
  bmse: { preset: 'NEGATIVO' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'negativo/desapego' }) });
push({ id: 'A08', dx: 'Estado mental de alto riesgo (CHR-P)', cie11: 'QE—', dsm5: 'APS', tests: 'CHR-P sin psicosis franca',
  meta: M('A08-CHR', 19, 'F'), exposome: mergeAns(EXPO.chrp), functioning: fxMild(19),
  history: { curso: 'primer contacto', tempo: 'subagudo', safety: 'g', primer: true },
  bmse: { preset: 'MINIMO', vector: { 'F4.experiencia': { score: '1', specifiers: {} }, 'F6.amenaza': { score: '1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', chrp: true, phenotype: 'subumbral/insuficiente' }) });
push({ id: 'A09', dx: 'Trastorno esquizotípico', cie11: '6A22', dsm5: '301.22', tests: 'esquizotipia',
  meta: M('A09-ET', 27, 'M'), exposome: mergeAns(EXPO.neurodev), functioning: fxMild(27),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' },
  bmse: { preset: 'ESQUIZOIDE', vector: { 'F4.experiencia': { score: '1', specifiers: {} }, 'F6.amenaza': { score: '1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'esquizotípico/desapego' }) });
push({ id: 'A10', dx: 'Psicosis posparto', cie11: '6E20', dsm5: '293.89', tests: 'mujer puérpera, agudo, gate?',
  meta: M('A10-PP', 29, 'F', { setting: 'Emergencia', fuente: 'Familiar', ocupacion: 'Labores del hogar' }),
  exposome: mergeAns(EXPO.highLoad), functioning: fxAcuteBreak(29, 'media'),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'hiperagudo', safety: 'warn', primer: true },
  bmse: { preset: 'MANIA_PSICOTICA', conciencia: { score: '-1', specifiers: { CONF: true } } },
  expected: E({ gate: true, orgBand: ['mid', 'hi'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'psicótico/mixto', note: 'conciencia fluctuante → gate fail correcto (descartar orgánico)' }) });

/* ════════ B · BIPOLAR / MANÍA (A2) ════════ */
push({ id: 'B01', dx: 'Manía psicótica (Bipolar I)', cie11: '6A60.2', dsm5: '296.44', tests: 'manía con psicosis',
  meta: M('B01-BDI', 31, 'M', { setting: 'Emergencia', fuente: 'Familiar' }), exposome: mergeAns(EXPO.chrp), functioning: fxAcuteBreak(31),
  history: { setting: 'emergencia', curso: 'episódico-recurrente', tempo: 'agudo', safety: 'warn', episodesAges: [22, 27] },
  bmse: { preset: 'MANIA_PSICOTICA' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'manía/saliencia' }) });
push({ id: 'B02', dx: 'Hipomanía (Bipolar II)', cie11: '6A61.0', dsm5: '296.89', tests: 'hipomanía',
  meta: M('B02-BDII', 35, 'F'), exposome: {}, functioning: fxMild(35),
  history: { curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'g', episodesAges: [25, 30, 34] },
  bmse: { preset: 'MANIA', vector: { 'F2.velocidad': { score: '1', specifiers: {} }, 'F3.drive': { score: '1', specifiers: {} }, 'I.insight': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'hipomanía' }) });
push({ id: 'B03', dx: 'Episodio mixto', cie11: '6A60.6', dsm5: '296.45', tests: 'mixto, riesgo suicida',
  meta: M('B03-MIX', 33, 'F', { setting: 'Emergencia' }), exposome: mergeAns(EXPO.suicidIdea), functioning: fxImpaired(33, 'media'),
  history: { setting: 'emergencia', curso: 'episódico-recurrente', tempo: 'agudo', safety: 'fail', episodesAges: [23, 28, 31] },
  bmse: { preset: 'MIXTO', ext: EXT_KITS.suicidaRed },
  expected: E({ gate: false, orgBand: 'lo', safety: 'fail', deNovo: false, suicid: 'Ideación', quadrant: 'Vulnerabilidad esperable', phenotype: 'mixto', st3: 'red' }) });
push({ id: 'B04', dx: 'Bipolar I en eutimia (remisión)', cie11: '6A60.3', dsm5: '296.46', tests: 'estado normal + curso recurrente (estado vs curso)',
  meta: M('B04-EUT', 40, 'M'), exposome: {}, functioning: fxPreserved(40),
  history: { curso: 'episódico-recurrente', tempo: 'insidioso', safety: 'g', episodesAges: [24, 30, 36] },
  bmse: { preset: 'NORMAL' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'normal/insuficiente', note: 'ADVERSARIAL: estado sano pero curso recurrente — fenotipo vacío vs curso' }) });
push({ id: 'B05', dx: 'Ciclotimia', cie11: '6A62', dsm5: '301.13', tests: 'oscilación subumbral crónica',
  meta: M('B05-CIC', 29, 'F'), exposome: {}, functioning: fxMild(29),
  history: { curso: 'fluctuante', tempo: 'insidioso', safety: 'g' },
  bmse: { preset: 'DISTIMIA', vector: { 'F3.drive': { score: '1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'subumbral' }) });

/* ════════ C · DEPRESIÓN / INTERNALIZANTE (B1) ════════ */
push({ id: 'C01', dx: 'Depresión mayor moderada', cie11: '6A70.1', dsm5: '296.22', tests: 'depresión B1 estándar',
  meta: M('C01-DM', 38, 'F'), exposome: mergeAns(EXPO.depression), functioning: fxImpaired(38, 'baja'),
  history: { curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'warn', episodesAges: [30, 35] },
  bmse: { preset: 'DEPRESION' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo/internalizante' }) });
push({ id: 'C02', dx: 'Depresión mayor severa con riesgo suicida', cie11: '6A70.2', dsm5: '296.23', tests: 'triangulación seguridad coherente (todo red)',
  meta: M('C02-DSS', 45, 'M', { setting: 'Emergencia', ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.depression, EXPO.suicidIntento), functioning: fxImpaired(45, 'media'),
  history: { setting: 'emergencia', curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'fail', episodesAges: [38, 42] },
  bmse: { preset: 'DEPRESION', ext: EXT_KITS.suicidaRed },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'fail', deNovo: false, suicid: 'Intento', quadrant: 'Vulnerabilidad esperable', phenotype: 'depresivo', st3: 'red', note: 'edad>40 puede falsear organicidad' }) });
push({ id: 'C03', dx: 'Depresión psicótica', cie11: '6A70.3', dsm5: '296.24', tests: 'frontera depresivo-psicótico (macro?)',
  meta: M('C03-DP', 50, 'F', { setting: 'Hospitalización' }), exposome: mergeAns(EXPO.depression), functioning: fxImpaired(50, 'baja'),
  history: { setting: 'consulta externa', curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'fail', episodesAges: [40, 46] },
  bmse: { preset: 'DEPRESION_PSICOTICA', ext: EXT_KITS.suicidaWarn },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'fail', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo-psicótico (ambiguo)', note: 'ADVERSARIAL: F4.contenido alto en depresión — ¿macro saliencia o internalizante?' }) });
push({ id: 'C04', dx: 'Distimia (trastorno depresivo persistente)', cie11: '6A72', dsm5: '300.4', tests: 'crónico leve',
  meta: M('C04-DIS', 36, 'F'), exposome: mergeAns(EXPO.depression), functioning: fxMild(36),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' },
  bmse: { preset: 'DISTIMIA' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'distímico' }) });
push({ id: 'C05', dx: 'Depresión con ideación pasiva', cie11: '6A70.1', dsm5: '296.21', tests: 'safety WARN (ideación pasiva)',
  meta: M('C05-DIP', 41, 'F'), exposome: mergeAns(EXPO.depression), functioning: fxImpaired(41, 'baja'),
  history: { curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'warn', episodesAges: [33, 38] },
  bmse: { preset: 'DEPRESION', ext: EXT_KITS.suicidaWarn },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'warn', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo', st3: 'yellow' }) });
push({ id: 'C06', dx: 'Depresión posparto', cie11: '6E20.0', dsm5: '296.22', tests: 'puérpera, no psicótica',
  meta: M('C06-DPP', 27, 'F', { ocupacion: 'Labores del hogar' }), exposome: mergeAns(EXPO.depression), functioning: fxImpaired(27, 'media'),
  history: { curso: 'primer contacto', tempo: 'subagudo', safety: 'warn', primer: true },
  bmse: { preset: 'DEPRESION' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'depresivo' }) });
push({ id: 'C07', dx: 'Trastorno de duelo prolongado', cie11: '6B42', dsm5: '309.89', tests: 'duelo vs depresión',
  meta: M('C07-DUE', 55, 'F'), exposome: mergeAns(EXPO.depression), functioning: fxMild(55),
  history: { curso: 'continuo', tempo: 'subagudo', safety: 'g', episodesAges: ['a los 54'] },
  bmse: { preset: 'DEPRESION', vector: { 'F6.desesperanza': { score: '-1', specifiers: {} }, 'E.egodistonia': { score: '1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'depresivo/duelo', note: 'edad inicio 54>40 → posible auto-flag' }) });
push({ id: 'C08', dx: 'Depresión geriátrica con quejas cognitivas (pseudodemencia)', cie11: '6A70.1', dsm5: '296.22', tests: 'depresión vs demencia en anciano',
  meta: M('C08-PSD', 72, 'F', { setting: 'Consulta externa', ocupacion: 'Jubilado/a' }), exposome: mergeAns(EXPO.depression), functioning: fxImpaired(72, 'baja'),
  history: { curso: 'primer contacto', tempo: 'subagudo', safety: 'warn', primer: true },
  bmse: { preset: 'DEPRESION', vector: { 'NC.recall': { score: '-1', specifiers: { rec_tipo: 'Retrieval' } }, 'NC.fluencia': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo con queja cognitiva', note: 'edad>40 + de novo → VEMMFAL puede marcar organicidad (pseudodemencia es trampa clásica)' }) });

/* ════════ D · ANSIEDAD (B1) ════════ */
push({ id: 'D01', dx: 'Trastorno de ansiedad generalizada', cie11: '6B00', dsm5: '300.02', tests: 'GAD',
  meta: M('D01-TAG', 34, 'F'), exposome: {}, functioning: fxMild(34),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'ANSIEDAD_GAD' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'ansioso/internalizante' }) });
push({ id: 'D02', dx: 'Trastorno de pánico', cie11: '6B01', dsm5: '300.01', tests: 'pánico, interocepción',
  meta: M('D02-PAN', 30, 'F', { setting: 'Emergencia' }), exposome: {}, functioning: fxMild(30),
  history: { setting: 'emergencia', curso: 'episódico-recurrente', tempo: 'agudo', safety: 'g', episodesAges: [28, 29] }, bmse: { preset: 'PANICO' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'ansioso/pánico', note: 'crisis somática en emergencia — ¿VEMMFAL la confunde con orgánico?' }) });
push({ id: 'D03', dx: 'Fobia social (trastorno de ansiedad social)', cie11: '6B04', dsm5: '300.23', tests: 'fobia social',
  meta: M('D03-FS', 23, 'M'), exposome: {}, functioning: fxMild(23),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'ANSIEDAD_GAD', vector: { 'P2.afiliación': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'ansioso' }) });
push({ id: 'D04', dx: 'Agorafobia', cie11: '6B02', dsm5: '300.22', tests: 'agorafobia',
  meta: M('D04-AGO', 37, 'F'), exposome: {}, functioning: fxImpaired(37, 'baja'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'PANICO', vector: { 'P2.afiliación': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'ansioso' }) });
push({ id: 'D05', dx: 'Trastorno obsesivo-compulsivo', cie11: '6B20', dsm5: '300.3', tests: 'egodistonia alta (B1/insight)',
  meta: M('D05-TOC', 26, 'M'), exposome: {}, functioning: fxMild(26),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'TOC' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'TOC/internalizante egodistónico' }) });
push({ id: 'D06', dx: 'Trastorno de ansiedad por enfermedad (hipocondría)', cie11: '6B23', dsm5: '300.7', tests: 'hipocondría',
  meta: M('D06-HIP', 44, 'M'), exposome: mergeAns(EXPO.comorbMedica), functioning: fxMild(44),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'SOMATICO' },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'somático/ansioso', note: 'comorbilidad médica E3 → prior VEMMFAL' }) });

/* ════════ E · TRAUMA / ESTRÉS ════════ */
push({ id: 'E01', dx: 'Trastorno de estrés postraumático', cie11: '6B40', dsm5: '309.81', tests: 'TEPT, ACE alto',
  meta: M('E01-PTSD', 33, 'F', { etnia: 'Quechua/Aymara' }), exposome: mergeAns(EXPO.ace(6), EXPO.indigena), functioning: fxImpaired(33, 'alta'),
  history: { curso: 'continuo', tempo: 'subagudo', safety: 'warn', episodesAges: ['a los 30'] }, bmse: { preset: 'PTSD' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'trauma/internalizante', ace: '>=4' }) });
push({ id: 'E02', dx: 'TEPT complejo', cie11: '6B41', dsm5: '—', tests: 'CPTSD, trauma temprano',
  meta: M('E02-CPTSD', 29, 'F'), exposome: mergeAns(EXPO.ace(8)), functioning: fxImpaired(29, 'alta'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'warn' }, bmse: { preset: 'PTSD', vector: { 'E.regulación': { score: '-2', specifiers: {} }, 'F7.auto-mentalización': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'trauma complejo', ace: '>=4' }) });
push({ id: 'E03', dx: 'Trastorno de estrés agudo', cie11: '6B42—', dsm5: '308.3', tests: 'estrés agudo post-evento',
  meta: M('E03-TEA', 31, 'M', { setting: 'Emergencia' }), exposome: mergeAns(EXPO.ace(3)), functioning: fxAcuteBreak(31, 'media'),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'hiperagudo', safety: 'warn', primer: true }, bmse: { preset: 'PTSD' },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'estrés agudo' }) });
push({ id: 'E04', dx: 'Trastorno de adaptación', cie11: '6B43', dsm5: '309.0', tests: 'adaptativo, leve',
  meta: M('E04-ADAP', 28, 'F'), exposome: mergeAns(EXPO.ace(2)), functioning: fxMild(28),
  history: { curso: 'primer contacto', tempo: 'subagudo', safety: 'g', primer: true }, bmse: { preset: 'DISTIMIA' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'adaptativo/depresivo leve' }) });
push({ id: 'E05', dx: 'Trastorno de despersonalización/desrealización', cie11: '6B66', dsm5: '300.6', tests: 'disociativo',
  meta: M('E05-DPDR', 25, 'F'), exposome: mergeAns(EXPO.ace(4)), functioning: fxMild(25),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'DISOCIATIVO' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'disociativo', ace: '>=4', note: 'despersonalización puede leerse como organicidad/percepción atípica' }) });

/* ════════ F · ORGÁNICO / NEUROCOGNITIVO — estresa el GATE ════════ */
push({ id: 'F01', dx: 'Delirium hiperactivo', cie11: '6D70', dsm5: '293.0', tests: 'GATE FAIL claro',
  meta: M('F01-DEL', 68, 'M', { setting: 'Interconsulta', fuente: 'Familiar', ocupacion: 'Jubilado/a' }),
  exposome: mergeAns(EXPO.comorbMedica), functioning: fxAcuteBreak(68),
  history: { setting: 'interconsulta', curso: 'primer contacto', tempo: 'hiperagudo', safety: 'g', primer: true }, bmse: { preset: 'DELIRIUM' },
  expected: E({ gate: true, orgBand: 'hi', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'cuarentena/orgánico' }) });
push({ id: 'F02', dx: 'Delirium hipoactivo', cie11: '6D70', dsm5: '293.0', tests: 'GATE — hipoactivo se confunde con depresión',
  meta: M('F02-DELH', 75, 'F', { setting: 'Interconsulta', fuente: 'Historia clínica', ocupacion: 'Jubilado/a' }),
  exposome: mergeAns(EXPO.comorbMedica), functioning: fxImpaired(75, 'baja'),
  history: { setting: 'interconsulta', curso: 'primer contacto', tempo: 'agudo', safety: 'g', primer: true }, bmse: { preset: 'DELIRIUM_HIPOACTIVO' },
  expected: E({ gate: true, orgBand: 'hi', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'cuarentena', note: 'ADVERSARIAL: presentación apática mimetiza depresión — el Gate debe capturar conciencia reducida (-1).' }) });
push({ id: 'F03', dx: 'Demencia tipo Alzheimer', cie11: '6D80', dsm5: '294.x', tests: 'neurocognitivo, conciencia PRESERVADA',
  meta: M('F03-ALZ', 78, 'F', { setting: 'Consulta externa', fuente: 'Familiar', ocupacion: 'Jubilado/a' }),
  exposome: mergeAns(EXPO.comorbMedica), functioning: fxDementia(78),
  history: { curso: 'progresivo', tempo: 'insidioso', safety: 'g', episodesAges: ['a los 74'] }, bmse: { preset: 'NEUROCOGNITIVO' },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'neurocognitivo', note: 'CLAVE: conciencia=0 → gate NO debe fallar (demencia≠delirium), pero organicidad debe subir por edad>40+cognición' }) });
push({ id: 'F04', dx: 'Demencia frontotemporal (variante conductual)', cie11: '6D83', dsm5: '294.x', tests: 'DFT mimetiza manía/cambio personalidad',
  meta: M('F04-DFT', 62, 'M', { setting: 'Consulta externa', fuente: 'Familiar' }),
  exposome: {}, functioning: fxChronicDecline(62),
  history: { curso: 'progresivo', tempo: 'insidioso', safety: 'failTerceros', episodesAges: ['a los 59'] },
  bmse: { preset: 'MANIA', vector: { 'NC.fluencia': { score: '-1', specifiers: {} }, 'J.juicio': { score: '-2', specifiers: {} }, 'FUN.psp_disruptivas': { score: '1', specifiers: {} } }, ext: EXT_KITS.violenciaRed },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'fail', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'manía/orgánico (ambiguo)', note: 'ADVERSARIAL: DFT como manía tardía — edad>40 debe levantar organicidad; ¿la marca?' }) });
push({ id: 'F05', dx: 'Demencia por cuerpos de Lewy', cie11: '6D82', dsm5: '294.x', tests: 'fluctuación + alucinaciones → gate',
  meta: M('F05-DLB', 74, 'M', { setting: 'Consulta externa', fuente: 'Familiar', ocupacion: 'Jubilado/a' }),
  exposome: mergeAns(EXPO.comorbMedica), functioning: fxDementia(74),
  history: { curso: 'fluctuante', tempo: 'subagudo', safety: 'g', episodesAges: ['a los 72'] },
  bmse: { preset: 'NEUROCOGNITIVO', vector: { 'F4.experiencia': { score: '2', specifiers: {} }, 'F4.contenido': { score: '1', specifiers: {} }, 'NM.parkinsonismo': { score: '-1', specifiers: {} } }, conciencia: { score: '-1', specifiers: { CONF: true } } },
  expected: E({ gate: true, orgBand: 'hi', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'cuarentena/neurocognitivo' }) });
push({ id: 'F06', dx: 'Encefalitis autoinmune (anti-NMDAR)', cie11: '6E61', dsm5: '293.x', tests: 'rule-in VEMMFAL (validado)',
  meta: M('F06-ENC', 35, 'F', { setting: 'Emergencia', fuente: 'Familiar', ocupacion: 'Empleado/a', educacion: 'Universitaria' }),
  exposome: mergeAns(EXPO.autoimmune), functioning: fxAcuteBreak(35),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'hiperagudo', safety: 'g', primer: true, insight: 'parcial' },
  bmse: { preset: 'ENCEPH' },
  expected: E({ gate: true, orgBand: 'hi', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'cuarentena/orgánico' }) });
push({ id: 'F07', dx: 'Delirium superpuesto a demencia', cie11: '6D70/6D8Z', dsm5: '293.0', tests: 'delirium-on-dementia',
  meta: M('F07-DOD', 82, 'F', { setting: 'Interconsulta', fuente: 'Familiar', ocupacion: 'Jubilado/a' }),
  exposome: mergeAns(EXPO.comorbMedica), functioning: fxDementia(82),
  history: { setting: 'interconsulta', curso: 'progresivo', tempo: 'agudo', safety: 'g', episodesAges: ['a los 78'] },
  bmse: { preset: 'NEUROCOGNITIVO', conciencia: { score: '-1', specifiers: { CONF: true } } },
  expected: E({ gate: true, orgBand: 'hi', safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'cuarentena' }) });
push({ id: 'F08', dx: 'Hipotiroidismo con depresión', cie11: '6E62', dsm5: '293.83', tests: 'endocrino → ánimo',
  meta: M('F08-HIPO', 48, 'F'), exposome: mergeAns(EXPO.comorbMedica), functioning: fxImpaired(48, 'baja'),
  history: { curso: 'primer contacto', tempo: 'subagudo', safety: 'warn', primer: true },
  bmse: { preset: 'DEPRESION', vector: { 'F2.velocidad': { score: '-2', specifiers: {} }, 'NC.fluencia': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo orgánico', note: 'edad>40 + de novo + comorbilidad → organicidad debería subir' }) });
push({ id: 'F09', dx: 'Tumor frontal con cambio de personalidad', cie11: '6E60', dsm5: '310.1', tests: 'lesión estructural → psiquiátrico',
  meta: M('F09-TUM', 55, 'M', { setting: 'Interconsulta', fuente: 'Familiar' }),
  exposome: {}, functioning: fxChronicDecline(55),
  history: { setting: 'interconsulta', curso: 'progresivo', tempo: 'subagudo', safety: 'failTerceros', primer: true },
  bmse: { preset: 'MANIA', vector: { 'J.juicio': { score: '-2', specifiers: {} }, 'NC.tmt': { score: '-2', specifiers: {} }, 'NM.luria': { score: '-2', specifiers: {} } }, ext: EXT_KITS.violenciaRed },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'fail', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'orgánico/desinhibido', note: 'edad>40 + de novo + signos frontales' }) });
push({ id: 'F10', dx: 'Epilepsia temporal con psicosis', cie11: '6E60', dsm5: '293.x', tests: 'epilepsia E3-11 → VEMMFAL prior',
  meta: M('F10-ELT', 38, 'M'), exposome: mergeAns({ 'E3-11': 'Sí' }), functioning: fxMild(38),
  history: { curso: 'episódico-recurrente', tempo: 'agudo', safety: 'g', episodesAges: [34, 36] },
  bmse: { preset: 'PSYCHOSIS_POSITIVE', vector: { 'F4.experiencia': { score: '2', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'psicótico (orgánico subyacente)', note: 'E3-11 epilepsia es PRIOR read-only (§11.B) — NO debe auto-encender crisis, pero sí priorizar workup' }) });
push({ id: 'F11', dx: 'Neurosífilis/VIH con psicosis tardía', cie11: '6E60', dsm5: '293.x', tests: 'infección → psicosis late-onset',
  meta: M('F11-NSF', 58, 'M'), exposome: mergeAns({ 'E3-9': 'Sí', 'E3-10': 'Sí' }), functioning: fxChronicDecline(58),
  history: { curso: 'progresivo', tempo: 'subagudo', safety: 'g', primer: true },
  bmse: { preset: 'PSYCHOSIS_POSITIVE', vector: { 'NC.recall': { score: '-2', specifiers: {} }, 'NC.tmt': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'psicótico orgánico', note: 'psicosis de inicio >50 = bandera orgánica obligatoria' }) });
push({ id: 'F12', dx: 'Catatonía', cie11: '6A40', dsm5: '293.89', tests: 'catatonía — ¿gate la cuarentena? señal VEMMFAL catatonia',
  meta: M('F12-CAT', 30, 'F', { setting: 'Emergencia', fuente: 'Familiar' }),
  exposome: {}, functioning: fxAcuteBreak(30),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'agudo', safety: 'g', primer: true },
  bmse: { preset: 'CATATONIA', vector: { 'NM.parakinesia_volicional': { score: '-1', specifiers: { para_vol_fenomeno: 'Flexibilidad cérea/catalepsia', para_vol_fuente: 'Entrevista' } } } },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'catatonía', note: 'ADVERSARIAL CRÍTICO: parakinesia volicional/flexibilidad cérea — ¿dispara la señal "Catatonía" del VEMMFAL?' }) });
push({ id: 'F13', dx: 'Síndrome neuroléptico maligno', cie11: '6A45—', dsm5: '333.92', tests: 'emergencia orgánica iatrogénica',
  meta: M('F13-SNM', 40, 'M', { setting: 'Emergencia', fuente: 'Historia clínica' }),
  exposome: mergeAns({ 'E3-2': 'Sí' }), functioning: fxAcuteBreak(40),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'hiperagudo', safety: 'g', primer: true },
  bmse: { preset: 'DELIRIUM', vector: { 'NM.parkinsonismo': { score: '-2', specifiers: {} }, 'NM.tremor': { score: '-1', specifiers: { pk_etiologia: 'Farmacológico (AP)' } } } },
  expected: E({ gate: true, orgBand: 'hi', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'cuarentena/orgánico' }) });
push({ id: 'F14', dx: 'Déficit de B12 con síntomas neuropsiquiátricos', cie11: '6E62', dsm5: '293.x', tests: 'carencial → cognición + ánimo',
  meta: M('F14-B12', 66, 'M', { ocupacion: 'Jubilado/a' }), exposome: mergeAns(EXPO.comorbMedica), functioning: fxImpaired(66, 'baja'),
  history: { curso: 'progresivo', tempo: 'insidioso', safety: 'g', primer: true },
  bmse: { preset: 'NEUROCOGNITIVO', vector: { 'F3.tono': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'neurocognitivo' }) });
push({ id: 'F15', dx: 'Lupus neuropsiquiátrico', cie11: '6E60', dsm5: '293.x', tests: 'autoinmune sistémico → psicosis',
  meta: M('F15-LUP', 32, 'F', { setting: 'Interconsulta' }), exposome: mergeAns({ 'E3-7': 'Sí', 'E3-8': 'Sí' }), functioning: fxAcuteBreak(32, 'media'),
  history: { setting: 'interconsulta', curso: 'primer contacto', tempo: 'agudo', safety: 'g', primer: true },
  bmse: { preset: 'PSYCHOSIS_POSITIVE', conciencia: { score: '-1', specifiers: { CONF: true } } },
  expected: E({ gate: true, orgBand: 'hi', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'cuarentena/orgánico' }) });

/* ════════ G · SUSTANCIAS ════════ */
push({ id: 'G01', dx: 'Trastorno por consumo de alcohol', cie11: '6C40.2', dsm5: '303.90', tests: 'TUS alcohol',
  meta: M('G01-OH', 47, 'M', { ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.substances), functioning: fxImpaired(47, 'media'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'warn' }, bmse: { preset: 'DEPRESION', ext: EXT_KITS.sustanciasActivo },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'depresivo + consumo' }) });
push({ id: 'G02', dx: 'Delirium tremens (abstinencia alcohólica)', cie11: '6C40.5', dsm5: '291.0', tests: 'abstinencia → gate',
  meta: M('G02-DT', 50, 'M', { setting: 'Emergencia', fuente: 'Historia clínica' }), exposome: mergeAns(EXPO.substances), functioning: fxAcuteBreak(50),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'hiperagudo', safety: 'g', primer: true },
  bmse: { preset: 'DELIRIUM', vector: { 'NM.tremor': { score: '-2', specifiers: { pk_etiologia: 'Espontáneo' } } }, ext: EXT_KITS.sustanciasActivo },
  expected: E({ gate: true, orgBand: 'hi', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'cuarentena/abstinencia' }) });
push({ id: 'G03', dx: 'Psicosis por estimulantes', cie11: '6C46.6', dsm5: '292.9', tests: 'psicosis inducida',
  meta: M('G03-EST', 24, 'M', { setting: 'Emergencia' }), exposome: mergeAns(EXPO.substances), functioning: fxAcuteBreak(24, 'media'),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'hiperagudo', safety: 'failTerceros', primer: true },
  bmse: { preset: 'PSYCHOSIS_POSITIVE', vector: { 'G.arousal': { score: '2', specifiers: {} } }, ext: mergeAns(EXT_KITS.sustanciasActivo, EXT_KITS.violenciaRed) },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'fail', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'psicótico inducido', note: 'sustancias activas — ¿VEMMFAL las pondera como orgánico?' }) });
push({ id: 'G04', dx: 'Trastorno por consumo de opioides', cie11: '6C43.2', dsm5: '304.00', tests: 'TUS opioides',
  meta: M('G04-OPI', 36, 'M'), exposome: mergeAns(EXPO.substances), functioning: fxImpaired(36, 'media'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'warn' }, bmse: { preset: 'DISTIMIA', ext: EXT_KITS.sustanciasActivo },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'consumo/depresivo' }) });

/* ════════ H · NEURODESARROLLO ════════ */
push({ id: 'H01', dx: 'TDAH del adulto', cie11: '6A05.1', dsm5: '314.01', tests: 'TDAH → B5 desinhibido',
  meta: M('H01-TDAH', 27, 'M'), exposome: mergeAns(EXPO.neurodev), functioning: fxMild(27),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'TDAH' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'neurodesarrollo/TDAH' }) });
push({ id: 'H02', dx: 'Trastorno del espectro autista (adulto)', cie11: '6A02', dsm5: '299.00', tests: 'TEA → B3 desapego',
  meta: M('H02-TEA', 23, 'M'), exposome: mergeAns(EXPO.neurodev), functioning: fxImpaired(23, 'baja'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'AUTISMO' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'TEA/desapego' }) });
push({ id: 'H03', dx: 'Discapacidad intelectual', cie11: '6A00', dsm5: '317', tests: 'DI, cognición global baja',
  meta: M('H03-DI', 25, 'M', { educacion: 'Primaria', ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.neurodev), functioning: fxImpaired(25, 'baja'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' },
  bmse: { preset: 'NEUROCOGNITIVO', vector: { 'NC.conciencia': { score: '0', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'neurocognitivo/desarrollo', note: 'edad joven — NO debe disparar edad>40' }) });

/* ════════ I · PERSONALIDAD ════════ */
push({ id: 'I01', dx: 'Trastorno límite de la personalidad', cie11: '6D10.5', dsm5: '301.83', tests: 'B2 desregulación + autolesión',
  meta: M('I01-TLP', 24, 'F', { setting: 'Emergencia' }), exposome: mergeAns(EXPO.ace(5)), functioning: fxImpaired(24, 'alta'),
  history: { setting: 'emergencia', curso: 'fluctuante', tempo: 'agudo', safety: 'fail', episodesAges: [19, 21, 23] },
  bmse: { preset: 'BORDERLINE', ext: EXT_KITS.suicidaWarn },
  expected: E({ gate: false, orgBand: 'lo', safety: 'fail', deNovo: false, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'desregulación/borderline', ace: '>=4' }) });
push({ id: 'I02', dx: 'Trastorno antisocial de la personalidad', cie11: '6D10.2', dsm5: '301.7', tests: 'A3 antagonismo',
  meta: M('I02-TASP', 33, 'M', { ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.ace(4), EXPO.substances), functioning: fxImpaired(33, 'alta'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'failTerceros' },
  bmse: { preset: 'ANTISOCIAL', ext: EXT_KITS.violenciaRed },
  expected: E({ gate: false, orgBand: 'lo', safety: 'fail', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'antisocial/saliencia', ace: '>=4' }) });
push({ id: 'I03', dx: 'Trastorno narcisista de la personalidad', cie11: '6D10.Z', dsm5: '301.81', tests: 'A3 narcisista',
  meta: M('I03-TNP', 40, 'M'), exposome: {}, functioning: fxMild(40),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'NARCISISTA' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'narcisista/saliencia' }) });
push({ id: 'I04', dx: 'Trastorno esquizoide de la personalidad', cie11: '6D10.Z', dsm5: '301.20', tests: 'desapego frío',
  meta: M('I04-TEP', 35, 'M', { estadoCivil: 'Soltero/a' }), exposome: {}, functioning: fxMild(35),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'ESQUIZOIDE' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'esquizoide/desapego' }) });
push({ id: 'I05', dx: 'Trastorno obsesivo de la personalidad', cie11: '6D11.5', dsm5: '301.4', tests: 'anancástico',
  meta: M('I05-TOCP', 42, 'M'), exposome: {}, functioning: fxMild(42),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'TOC', vector: { 'E.egodistonia': { score: '0', specifiers: {} }, 'P1.dominancia': { score: '1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'anancástico' }) });

/* ════════ J · CONDUCTA ALIMENTARIA / SOMÁTICO / SUEÑO ════════ */
push({ id: 'J01', dx: 'Anorexia nerviosa', cie11: '6B80', dsm5: '307.1', tests: 'TCA restrictivo',
  meta: M('J01-AN', 19, 'F', { ocupacion: 'Estudiante' }), exposome: {}, functioning: fxImpaired(19, 'baja'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'warn' }, bmse: { preset: 'ANOREXIA' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'conducta alimentaria' }) });
push({ id: 'J02', dx: 'Bulimia nerviosa', cie11: '6B81', dsm5: '307.51', tests: 'TCA purgativo',
  meta: M('J02-BN', 22, 'F'), exposome: mergeAns(EXPO.ace(3)), functioning: fxMild(22),
  history: { curso: 'fluctuante', tempo: 'insidioso', safety: 'warn' }, bmse: { preset: 'ANOREXIA', vector: { 'F5.regulación': { score: '-2', specifiers: {} }, 'FUN.psp_disruptivas': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'conducta alimentaria/desregulación' }) });
push({ id: 'J03', dx: 'Trastorno de síntomas somáticos', cie11: '6C20', dsm5: '300.82', tests: 'somatización',
  meta: M('J03-TSS', 49, 'F', { setting: 'Interconsulta' }), exposome: mergeAns(EXPO.comorbMedica), functioning: fxMild(49),
  history: { setting: 'interconsulta', curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'SOMATICO' },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'somático' }) });
push({ id: 'J04', dx: 'Insomnio crónico', cie11: '7A00', dsm5: '780.52', tests: 'sueño',
  meta: M('J04-INS', 39, 'F'), exposome: mergeAns({ 'item64': 'Sí' }), functioning: fxMild(39),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' },
  bmse: { preset: 'ANSIEDAD_GAD', vector: { 'G.sueno-ritmo': { score: '2', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'ansioso/sueño' }) });

/* ════════ K · ADVERSARIALES — diseñados para ROMPER la síntesis maestra ════════ */
push({ id: 'K01', dx: 'ADVERSARIAL: VEMMFAL rule-in con conciencia preservada', cie11: '—', dsm5: '—', tests: 'gate vía VEMMFAL (no conciencia)',
  meta: M('K01-VEM', 60, 'M', { setting: 'Interconsulta' }), exposome: {}, functioning: fxAcuteBreak(60),
  history: { setting: 'interconsulta', curso: 'primer contacto', tempo: 'hiperagudo', safety: 'g', primer: true },
  bmse: { preset: 'PSYCHOSIS_POSITIVE', vector: { 'NM.diskinesia': { score: '-1', specifiers: { dk_etiologia: 'Espontánea', dk_temp: 'Aguda/de novo' } } }, conciencia: { score: '0', specifiers: {} } },
  expected: E({ gate: true, orgBand: 'hi', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'cuarentena por rule-in', note: 'conciencia=0 pero diskinesia espontánea (tier1) → gate debe fallar por VEMMFAL' }) });
push({ id: 'K02', dx: 'ADVERSARIAL: quiebre agudo de novo, carga ambiental baja', cie11: '—', dsm5: '—', tests: 'cuadrante intrínseco/ND',
  meta: M('K02-DOSE1', 24, 'M', { setting: 'Emergencia' }), exposome: {}, functioning: fxAcuteBreak(24, 'baja'),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'hiperagudo', safety: 'g', primer: true },
  bmse: { preset: 'PSYCHOSIS_POSITIVE' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'psicótico', note: 'dosis-respuesta: deterioro alto sin carga → intrínseco' }) });
push({ id: 'K03', dx: 'ADVERSARIAL: alta carga ambiental + funcionamiento preservado', cie11: '—', dsm5: '—', tests: 'cuadrante Resiliencia',
  meta: M('K03-RES', 35, 'F', { etnia: 'Quechua/Aymara', ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.ace(7), EXPO.highLoad, EXPO.indigena), functioning: fxPreserved(35, 'alta'),
  history: { curso: 'primer contacto', tempo: 'insidioso', safety: 'g', primer: true }, bmse: { preset: 'NORMAL' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Resiliencia', ace: '>=4', phenotype: 'normal', note: 'dosis-respuesta: carga alta + función intacta = resiliencia' }) });
push({ id: 'K04', dx: 'ADVERSARIAL: alta carga + deterioro', cie11: '—', dsm5: '—', tests: 'cuadrante Vulnerabilidad esperable',
  meta: M('K04-VUL', 40, 'M', { ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.ace(6), EXPO.highLoad), functioning: fxImpaired(40, 'alta'),
  history: { curso: 'continuo', tempo: 'subagudo', safety: 'warn' }, bmse: { preset: 'DEPRESION' },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', ace: '>=4', phenotype: 'depresivo' }) });
push({ id: 'K05', dx: 'ADVERSARIAL: 3ST rojo en bMSE pero safety verde en Historia', cie11: '—', dsm5: '—', tests: 'triangulación seguridad DISCORDANTE',
  meta: M('K05-DISC1', 37, 'F'), exposome: {}, functioning: fxImpaired(37, 'baja'),
  history: { curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'g', episodesAges: [30, 34] },
  bmse: { preset: 'DEPRESION', ext: EXT_KITS.suicidaRed },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo', st3: 'red', note: 'ADVERSARIAL: Historia dice safety OK pero bMSE 3ST rojo → ¿el verdicto único prioriza la fuente más alta?' }) });
push({ id: 'K06', dx: 'ADVERSARIAL: safety fail en Historia pero 3ST verde en bMSE', cie11: '—', dsm5: '—', tests: 'triangulación inversa',
  meta: M('K06-DISC2', 29, 'M', { setting: 'Emergencia' }), exposome: {}, functioning: fxMild(29),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'agudo', safety: 'fail', primer: true },
  bmse: { preset: 'ANSIEDAD_GAD' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'fail', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'ansioso', st3: 'green', note: 'ADVERSARIAL: Historia safety fail, bMSE 3ST verde → ¿el maestro mantiene el verdicto alto?' }) });
push({ id: 'K07', dx: 'ADVERSARIAL: intento reciente + medios + desesperanza (3ST full)', cie11: '6A70.2', dsm5: '296.23', tests: '3ST capability completa',
  meta: M('K07-3ST', 44, 'M', { setting: 'Emergencia', ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.suicidIntento), functioning: fxImpaired(44, 'media'),
  history: { setting: 'emergencia', curso: 'episódico-recurrente', tempo: 'agudo', safety: 'fail', episodesAges: [38, 42] },
  bmse: { preset: 'DEPRESION', vector: { 'FUN.psp_disruptivas': { score: '-2', specifiers: {} }, 'FUN.psp_relaciones': { score: '-2', specifiers: {} } }, ext: EXT_KITS.suicidaRed },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'fail', deNovo: false, suicid: 'Intento', quadrant: 'Vulnerabilidad esperable', phenotype: 'depresivo', st3: 'red' }) });
push({ id: 'K08', dx: 'ADVERSARIAL: depresión tardía sin organicidad (estresa edad>40)', cie11: '6A70.1', dsm5: '296.22', tests: 'falso positivo organicidad por edad',
  meta: M('K08-LATE', 58, 'F'), exposome: mergeAns(EXPO.depression), functioning: fxImpaired(58, 'baja'),
  history: { curso: 'primer contacto', tempo: 'insidioso', safety: 'warn', primer: true },
  bmse: { preset: 'DEPRESION' },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo', note: 'ADVERSARIAL: 1ª depresión a los 58 sin signos orgánicos — edad>40 + de novo podría sobre-marcar organicidad' }) });
push({ id: 'K09', dx: 'ADVERSARIAL: recurrente con episodios vacíos (de-novo falso)', cie11: '6A60.3', dsm5: '296.46', tests: 'deNovo mal disparado por episodios<=1',
  meta: M('K09-DENOVO', 45, 'F'), exposome: {}, functioning: fxMild(45),
  history: { curso: 'episódico-recurrente', tempo: 'insidioso', safety: 'g', episodesAges: [] },
  bmse: { preset: 'NORMAL' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'normal', note: 'ADVERSARIAL: curso recurrente pero sin episodios codificados → episodios<=1 → deNovo se enciende FALSAMENTE' }) });
push({ id: 'K10', dx: 'ADVERSARIAL: fenotipo insuficiente (pocos ítems)', cie11: '—', dsm5: '—', tests: 'confianza insuficiente → macro vacío',
  meta: M('K10-INSUF', 33, 'M'), exposome: {}, functioning: fxMild(33),
  history: { curso: 'primer contacto', tempo: 'subagudo', safety: 'g', primer: true },
  bmse: { preset: 'MINIMO' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'insuficiente (macro vacío)', note: '<4 dims → engine debe devolver confianza insuficiente; ¿el maestro maneja macro vacío sin romper?' }) });
push({ id: 'K11', dx: 'ADVERSARIAL: hipervigilancia (conciencia +2) sin delirium', cie11: '6B00', dsm5: '300.02', tests: 'hiperarousal +2 orientado/no fluctuante',
  meta: M('K11-HIPER', 31, 'F', { setting: 'Emergencia' }), exposome: {}, functioning: fxMild(31),
  history: { setting: 'emergencia', curso: 'episódico-recurrente', tempo: 'agudo', safety: 'g', episodesAges: [29] },
  bmse: { preset: 'PANICO', conciencia: { score: '2', specifiers: {} } },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'ansioso', note: 'Hipervigilancia ansiosa (+2) sin [CONF] NO debe activar cuarentena por conciencia.' }) });
push({ id: 'K12', dx: 'ADVERSARIAL: esquizofrenia crónica estable (estado leve, curso continuo)', cie11: '6A20.2', dsm5: '295.90', tests: 'estado vs curso',
  meta: M('K12-CRON', 48, 'M', { ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.neurodev), functioning: fxChronicDecline(48),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g', episodesAges: [22, 30, 38] },
  bmse: { preset: 'NEGATIVO', vector: { 'F1.expresividad': { score: '-1', specifiers: {} }, 'F3.drive': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'negativo residual', note: 'estado actual leve, curso continuo de larga data' }) });
push({ id: 'K13', dx: 'ADVERSARIAL: conflicto fenotipo psicótico vs factor-p internalizante', cie11: '—', dsm5: '—', tests: 'coherencia transv/long discordante',
  meta: M('K13-PFACT', 36, 'M'), exposome: mergeAns(EXPO.depression, { 'E2-3': 'Sí', 'E2-6': 'Sí', 'E2-7': 'Sí', 'E2-9': 'Sí' }), functioning: fxChronicDecline(36),
  history: { curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'g', episodesAges: [26, 32] },
  bmse: { preset: 'PSYCHOSIS_POSITIVE' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'psicótico (estado) vs internalizante (lifetime)', note: 'macro bMSE psicótico pero factor-p exposoma internalizante → ¿el maestro reporta la discordancia?' }) });
push({ id: 'K14', dx: 'ADVERSARIAL: anciano 85+ (stage extremo s85)', cie11: '6A70.1', dsm5: '296.22', tests: 'currentMean en stage s85',
  meta: M('K14-OLD', 88, 'F', { ocupacion: 'Jubilado/a' }), exposome: mergeAns(EXPO.comorbMedica), functioning: { age: 88, exposure: 'baja', current: { social: 4, acadlab: 5, vincular: 4, autonomia: 4, autocuidado: 3, drive: 4, cognicion: 3 } },
  history: { curso: 'primer contacto', tempo: 'subagudo', safety: 'warn', primer: true }, bmse: { preset: 'DEPRESION' },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo', note: 'stage s85 — ¿currentMean y cuadrante calculan bien en el extremo etario?' }) });
push({ id: 'K15', dx: 'ADVERSARIAL: adolescente 15a (applicabilidad parcial de ejes)', cie11: '6A70.1', dsm5: '296.22', tests: 'stage s12_15 ejes parciales',
  meta: M('K15-ADOL', 15, 'F', { ocupacion: 'Estudiante', educacion: 'Secundaria' }), exposome: mergeAns(EXPO.ace(3)), functioning: { age: 15, exposure: 'media', current: { social: 4, acadlab: 4, autocuidado: 3, drive: 4, cognicion: 2 } },
  history: { curso: 'primer contacto', tempo: 'subagudo', safety: 'warn', primer: true }, bmse: { preset: 'DEPRESION' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'depresivo', note: 'vincular/autonomia parcial en s12_15 — ¿currentMean ignora ejes na correctamente?' }) });
push({ id: 'K16', dx: 'ADVERSARIAL: ICE máximo (carga + ACE 10/10)', cie11: '—', dsm5: '—', tests: 'tope de escala ICE/ACE',
  meta: M('K16-ICEMAX', 30, 'F', { etnia: 'Quechua/Aymara', ocupacion: 'Desempleado/a', estadoCivil: 'Soltero/a' }),
  exposome: mergeAns(EXPO.ace(10), EXPO.highLoad, EXPO.depression, EXPO.substances, EXPO.indigena, EXPO.comorbMedica), functioning: fxImpaired(30, 'alta'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'warn' }, bmse: { preset: 'PTSD' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', ace: '10', phenotype: 'trauma', note: 'ICE alto — ¿satura/normaliza bien las barras?' }) });
push({ id: 'K17', dx: 'ADVERSARIAL: caso mínimo / casi vacío (robustez NaN)', cie11: '—', dsm5: '—', tests: 'divide-by-zero / NaN',
  meta: M('K17-EMPTY', 40, 'M'), exposome: {}, functioning: { age: 40, exposure: null, current: {}, premorbid: null },
  history: { curso: 'primer contacto', tempo: 'insidioso', safety: 'g', primer: true }, bmse: { preset: 'MINIMO', vector: {} },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: '—', phenotype: 'vacío', note: 'ROBUSTEZ: sin cells → currentMean null; sin exposure → quadrant —; sin ítems → macro vacío. NO debe romper.' }) });
push({ id: 'K18', dx: 'ADVERSARIAL: control sano (sin patología)', cie11: 'QC—', dsm5: 'V71.09', tests: 'control negativo — ¿fuerza fenotipo?',
  meta: M('K18-SANO', 32, 'F', { estadoCivil: 'Casado/a', ocupacion: 'Empleado/a' }), exposome: {}, functioning: fxPreserved(32),
  history: { curso: 'primer contacto', tempo: 'insidioso', safety: 'g', primer: true }, bmse: { preset: 'NORMAL' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'normal/insuficiente', note: 'CONTROL: todo preservado — el sistema NO debería inventar un fenotipo patológico' }) });
push({ id: 'K19', dx: 'ADVERSARIAL: psicosis por corticoides con ánimo elevado', cie11: '6E60', dsm5: '292.84', tests: 'manía orgánica iatrogénica',
  meta: M('K19-CORT', 52, 'F', { setting: 'Interconsulta' }), exposome: mergeAns({ 'E3-7': 'Sí', 'E3-2': 'Sí' }), functioning: fxAcuteBreak(52, 'baja'),
  history: { setting: 'interconsulta', curso: 'primer contacto', tempo: 'agudo', safety: 'warn', primer: true },
  bmse: { preset: 'MANIA_PSICOTICA' },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'manía orgánica', note: 'manía de novo a los 52 en interconsulta → organicidad debería subir' }) });
push({ id: 'K20', dx: 'ADVERSARIAL: demencia + depresión comórbida', cie11: '6D80/6A70', dsm5: '294.x+296', tests: 'macro neurocognitivo vs depresivo',
  meta: M('K20-COMORB', 76, 'M', { setting: 'Consulta externa', fuente: 'Mixta', ocupacion: 'Jubilado/a' }),
  exposome: mergeAns(EXPO.depression, EXPO.comorbMedica), functioning: fxDementia(76),
  history: { curso: 'progresivo', tempo: 'insidioso', safety: 'warn', episodesAges: ['a los 73'] },
  bmse: { preset: 'NEUROCOGNITIVO', vector: { 'F3.tono': { score: '-2', specifiers: {} }, 'F6.animo-meta': { score: '-2', specifiers: {} }, 'F6.desesperanza': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'neurocognitivo+depresivo (ambiguo)', note: 'mezcla cognición baja + ánimo bajo — ¿qué macro gana?' }) });

/* ──── relleno hasta 100: variantes demográficas y de borde sobre arquetipos núcleo ──── */
function variant(id, base, over) { return Object.assign({}, base, over, { id }); }
// L: variantes de psicosis por edad/sexo/setting (estresan derivaciones identidad→scoring)
push(variant('L01', SPECS.find(s => s.id === 'A01'), { dx: 'Esquizofrenia (mujer, deriva C-n1)', tests: 'sexo F→C-n1/C-n2', meta: M('L01-SZF', 29, 'F'), expected: Object.assign({}, SPECS.find(s => s.id === 'A01').expected) }));
push(variant('L02', SPECS.find(s => s.id === 'A01'), { dx: 'Esquizofrenia inicio muy tardío (>60)', tests: 'psicosis tardía = bandera orgánica', meta: M('L02-LOS', 67, 'M'), functioning: fxChronicDecline(67), history: { curso: 'primer contacto', tempo: 'subagudo', safety: 'g', primer: true }, expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'psicótico tardío', note: 'inicio >60 debería forzar workup orgánico (edad>40 auto-flag)' }) }));
push(variant('L03', SPECS.find(s => s.id === 'C01'), { dx: 'Depresión en varón joven', tests: 'sexo M→C-n2', meta: M('L03-DMM', 26, 'M'), expected: Object.assign({}, SPECS.find(s => s.id === 'C01').expected, { quadrant: 'Carga intrínseca / neurodesarrollo' }) }));
push(variant('L04', SPECS.find(s => s.id === 'C01'), { dx: 'Depresión migrante indígena (deriva C-n3)', tests: 'etnia→C-n3 (TEPT outcome)', meta: M('L04-DIND', 34, 'F', { etnia: 'Quechua/Aymara' }), exposome: mergeAns(EXPO.depression, EXPO.indigena), expected: Object.assign({}, SPECS.find(s => s.id === 'C01').expected) }));
push(variant('L05', SPECS.find(s => s.id === 'D01'), { dx: 'TAG en desempleado (deriva C-n11)', tests: 'ocupación→C-n11', meta: M('L05-TAGU', 40, 'M', { ocupacion: 'Desempleado/a' }), expected: Object.assign({}, SPECS.find(s => s.id === 'D01').expected) }));
push(variant('L06', SPECS.find(s => s.id === 'B01'), { dx: 'Manía en mujer (Bipolar I)', tests: 'manía F', meta: M('L06-BDIF', 33, 'F', { setting: 'Emergencia', fuente: 'Familiar' }), expected: Object.assign({}, SPECS.find(s => s.id === 'B01').expected) }));
push(variant('L07', SPECS.find(s => s.id === 'F03'), { dx: 'Demencia vascular', cie11: '6D81', tests: 'demencia vascular (cognición + comorb cardiovascular)', meta: M('L07-VASC', 70, 'M', { setting: 'Consulta externa', fuente: 'Familiar' }), exposome: mergeAns(EXPO.comorbMedica, { 'E3-3': 'Sí', 'E3-4': 'Sí' }), expected: Object.assign({}, SPECS.find(s => s.id === 'F03').expected) }));
push(variant('L08', SPECS.find(s => s.id === 'C02'), { dx: 'Depresión severa adolescente con intento', tests: 'menor de edad + 3ST', meta: M('L08-DSAD', 16, 'F', { setting: 'Emergencia', ocupacion: 'Estudiante' }), functioning: fxImpaired(16, 'media'), history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'agudo', safety: 'fail', primer: true }, expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'fail', deNovo: true, suicid: 'Intento', quadrant: 'Vulnerabilidad esperable', phenotype: 'depresivo', st3: 'red' }) }));
push(variant('L09', SPECS.find(s => s.id === 'A03'), { dx: 'FEP con consumo de cannabis comórbido', tests: 'FEP + sustancias', meta: M('L09-FEPC', 20, 'M', { setting: 'Emergencia', fuente: 'Familiar' }), exposome: mergeAns(EXPO.chrp, EXPO.substances), bmse: { preset: 'PSYCHOSIS_POSITIVE', ext: EXT_KITS.sustanciasActivo }, expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'psicótico + consumo' }) }));
push(variant('L10', SPECS.find(s => s.id === 'I01'), { dx: 'TLP varón con heteroagresividad', tests: 'borderline + safety terceros', meta: M('L10-TLPM', 27, 'M', { setting: 'Emergencia' }), history: { setting: 'emergencia', curso: 'fluctuante', tempo: 'agudo', safety: 'failTerceros', episodesAges: [20, 24] }, bmse: { preset: 'BORDERLINE', ext: EXT_KITS.violenciaRed }, expected: E({ gate: false, orgBand: 'lo', safety: 'fail', deNovo: false, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'desregulación', ace: '>=4' }) }));

// M: más cobertura CIE-11 que faltó
push({ id: 'M01', dx: 'Trastorno esquizofreniforme', cie11: '6A20.Z', dsm5: '295.40', tests: 'duración intermedia',
  meta: M('M01-SZF', 25, 'M', { setting: 'Emergencia', fuente: 'Familiar' }), exposome: mergeAns(EXPO.chrp), functioning: fxAcuteBreak(25),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'subagudo', safety: 'g', primer: true }, bmse: { preset: 'PSYCHOSIS_POSITIVE' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'psicótico' }) });
push({ id: 'M02', dx: 'Trastorno bipolar II depresivo actual', cie11: '6A61.1', dsm5: '296.89', tests: 'BD-II en fase depresiva',
  meta: M('M02-BD2D', 38, 'F'), exposome: mergeAns(EXPO.depression), functioning: fxImpaired(38, 'baja'),
  history: { curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'warn', episodesAges: [28, 33, 36] }, bmse: { preset: 'DEPRESION' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo (bipolar)' }) });
push({ id: 'M03', dx: 'Trastorno por estrés postraumático con disociación', cie11: '6B40', dsm5: '309.81', tests: 'TEPT disociativo',
  meta: M('M03-PTSDD', 31, 'F'), exposome: mergeAns(EXPO.ace(7)), functioning: fxImpaired(31, 'alta'),
  history: { curso: 'continuo', tempo: 'subagudo', safety: 'warn' }, bmse: { preset: 'PTSD', vector: { 'F7.auto-mentalización': { score: '-2', specifiers: {} }, 'F2.sensorial': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'trauma/disociativo', ace: '>=4' }) });
push({ id: 'M04', dx: 'Trastorno disociativo de identidad', cie11: '6B64', dsm5: '300.14', tests: 'TID',
  meta: M('M04-TID', 28, 'F'), exposome: mergeAns(EXPO.ace(9)), functioning: fxImpaired(28, 'alta'),
  history: { curso: 'fluctuante', tempo: 'insidioso', safety: 'warn' }, bmse: { preset: 'DISOCIATIVO', vector: { 'F7.coherencia-autobiografica': { score: '-2', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'disociativo', ace: '>=4' }) });
push({ id: 'M05', dx: 'Trastorno de conversión (síntomas neurológicos funcionales)', cie11: '6B60', dsm5: '300.11', tests: 'conversivo vs orgánico',
  meta: M('M05-CONV', 26, 'F', { setting: 'Interconsulta' }), exposome: mergeAns(EXPO.ace(4)), functioning: fxMild(26),
  history: { setting: 'interconsulta', curso: 'primer contacto', tempo: 'agudo', safety: 'g', primer: true },
  bmse: { preset: 'DISOCIATIVO', vector: { 'NM.dismetria': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'conversivo/funcional', ace: '>=4', note: 'signo neuromotor funcional — ¿VEMMFAL lo confunde con orgánico real?' }) });
push({ id: 'M06', dx: 'Esquizofrenia catatónica', cie11: '6A20.4', dsm5: '295.90', tests: 'catatonía psiquiátrica primaria',
  meta: M('M06-SZCAT', 27, 'M', { setting: 'Hospitalización', fuente: 'Familiar' }), exposome: mergeAns(EXPO.neurodev), functioning: fxChronicDecline(27),
  history: { setting: 'consulta externa', curso: 'continuo', tempo: 'insidioso', safety: 'g' },
  bmse: { preset: 'CATATONIA', vector: { 'NM.parakinesia_volicional': { score: '-1', specifiers: { para_vol_fenomeno: 'Flexibilidad cérea/catalepsia', para_vol_fuente: 'Entrevista' } }, 'F4.contenido': { score: '1', specifiers: {} }, 'I.insight': { score: '-2', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'catatónico/psicótico', note: 'catatonía en esquizofrenia (no orgánica) — ¿se distingue de la orgánica?' }) });
push({ id: 'M07', dx: 'Trastorno depresivo recurrente, episodio grave (psicótico)', cie11: '6A71.3', dsm5: '296.34', tests: 'depresión recurrente psicótica',
  meta: M('M07-DRG', 54, 'F', { setting: 'Hospitalización' }), exposome: mergeAns(EXPO.depression), functioning: fxImpaired(54, 'baja'),
  history: { curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'fail', episodesAges: [40, 47, 51] },
  bmse: { preset: 'DEPRESION_PSICOTICA', ext: EXT_KITS.suicidaRed },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'fail', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo-psicótico', st3: 'red' }) });
push({ id: 'M08', dx: 'Trastorno de pánico con agorafobia severa', cie11: '6B01', dsm5: '300.01', tests: 'pánico+agorafobia',
  meta: M('M08-PANA', 35, 'F'), exposome: {}, functioning: fxImpaired(35, 'baja'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'PANICO', vector: { 'P2.afiliación': { score: '-1', specifiers: {} }, 'FUN.psp_utiles': { score: '-2', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'ansioso' }) });
push({ id: 'M09', dx: 'Trastorno de acumulación (hoarding)', cie11: '6B24', dsm5: '300.3', tests: 'espectro TOC',
  meta: M('M09-HOARD', 60, 'M', { ocupacion: 'Jubilado/a' }), exposome: {}, functioning: fxMild(60),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'TOC', vector: { 'E.egodistonia': { score: '0', specifiers: {} }, 'I.insight': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'TOC/acumulación', note: 'edad 60 → posible edad>40 flag' }) });
push({ id: 'M10', dx: 'Trastorno dismórfico corporal', cie11: '6B21', dsm5: '300.7', tests: 'TDC',
  meta: M('M10-TDC', 21, 'F', { ocupacion: 'Estudiante' }), exposome: {}, functioning: fxMild(21),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'warn' }, bmse: { preset: 'TOC', vector: { 'F6.autoevaluación': { score: '-2', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'dismórfico/TOC' }) });
push({ id: 'M11', dx: 'Trastorno de la conducta alimentaria por atracón', cie11: '6B82', dsm5: '307.51', tests: 'atracón',
  meta: M('M11-BED', 34, 'F'), exposome: mergeAns(EXPO.depression), functioning: fxMild(34),
  history: { curso: 'fluctuante', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'ANOREXIA', vector: { 'G.apetito': { score: '2', specifiers: {} }, 'F5.regulación': { score: '-2', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'conducta alimentaria' }) });
push({ id: 'M12', dx: 'Trastorno por consumo de cocaína con paranoia', cie11: '6C45.2', dsm5: '304.20', tests: 'cocaína',
  meta: M('M12-COC', 30, 'M', { setting: 'Emergencia' }), exposome: mergeAns(EXPO.substances), functioning: fxImpaired(30, 'media'),
  history: { setting: 'emergencia', curso: 'episódico-recurrente', tempo: 'agudo', safety: 'failTerceros', episodesAges: [27, 29] },
  bmse: { preset: 'PSYCHOSIS_POSITIVE', vector: { 'G.arousal': { score: '2', specifiers: {} }, 'F6.amenaza': { score: '2', specifiers: {} } }, ext: mergeAns(EXT_KITS.sustanciasActivo, EXT_KITS.violenciaRed) },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'fail', deNovo: false, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'psicótico inducido' }) });
push({ id: 'M13', dx: 'Trastorno facticio', cie11: '6D50', dsm5: '300.19', tests: 'simulación de síntomas',
  meta: M('M13-FACT', 33, 'F', { setting: 'Hospitalización', confiabilidad: 'Baja' }), exposome: {}, functioning: fxMild(33),
  history: { setting: 'consulta externa', curso: 'fluctuante', tempo: 'insidioso', safety: 'g' },
  bmse: { preset: 'MINIMO', vector: { 'F4.contenido': { score: '1', specifiers: {} }, 'I.insight': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'incongruente/insuficiente', note: 'cuadro inconsistente — ¿el motor fuerza un fenotipo espurio?' }) });
push({ id: 'M14', dx: 'Simulación (malingering)', cie11: 'QC30', dsm5: 'V65.2', tests: 'ganancia externa',
  meta: M('M14-MAL', 29, 'M', { setting: 'Emergencia', confiabilidad: 'Baja', fuente: 'Paciente' }), exposome: {}, functioning: fxPreserved(29),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'agudo', safety: 'warn', primer: true },
  bmse: { preset: 'MINIMO', vector: { 'F6.desesperanza': { score: '-2', specifiers: {} } }, ext: EXT_KITS.suicidaWarn },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'insuficiente', note: 'declara síntomas pero función preservada — incongruencia estado/función' }) });
push({ id: 'M15', dx: 'Trastorno esquizoafectivo tipo depresivo', cie11: '6A21', dsm5: '295.70', tests: 'esquizoafectivo depresivo',
  meta: M('M15-EAD', 37, 'F'), exposome: mergeAns(EXPO.psychosis, EXPO.depression), functioning: fxChronicDecline(37),
  history: { curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'fail', episodesAges: [27, 31, 35] },
  bmse: { preset: 'PSYCHOSIS_POSITIVE', vector: { 'F3.tono': { score: '-2', specifiers: {} }, 'F6.animo-meta': { score: '-2', specifiers: {} }, 'F6.desesperanza': { score: '-2', specifiers: {} } }, ext: EXT_KITS.suicidaRed },
  expected: E({ gate: false, orgBand: 'lo', safety: 'fail', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'frontera psicótico-depresivo', st3: 'red' }) });
push({ id: 'M16', dx: 'Trastorno de ansiedad por separación (adulto)', cie11: '6B05', dsm5: '309.21', tests: 'ansiedad separación',
  meta: M('M16-SEP', 24, 'F'), exposome: mergeAns(EXPO.ace(2)), functioning: fxMild(24),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'ANSIEDAD_GAD', vector: { 'P2.afiliación': { score: '1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'ansioso' }) });
push({ id: 'M17', dx: 'Trastorno de personalidad por evitación', cie11: '6D11.1', dsm5: '301.82', tests: 'evitativo',
  meta: M('M17-EVIT', 31, 'M', { estadoCivil: 'Soltero/a', ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.ace(3)), functioning: fxMild(31),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'ESQUIZOIDE', vector: { 'F6.amenaza': { score: '1', specifiers: {} }, 'E.egodistonia': { score: '1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'evitativo/ansioso' }) });
push({ id: 'M18', dx: 'Trastorno de personalidad dependiente', cie11: '6D11.2', dsm5: '301.6', tests: 'dependiente',
  meta: M('M18-DEP', 36, 'F', { estadoCivil: 'Casado/a' }), exposome: {}, functioning: fxMild(36),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' }, bmse: { preset: 'DISTIMIA', vector: { 'P1.dominancia': { score: '-2', specifiers: {} }, 'P2.afiliación': { score: '1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'dependiente' }) });
push({ id: 'M19', dx: 'Trastorno bipolar I, episodio depresivo con rasgos mixtos', cie11: '6A60.4', dsm5: '296.53', tests: 'depresión con activación',
  meta: M('M19-BDMX', 42, 'M', { setting: 'Emergencia' }), exposome: mergeAns(EXPO.depression), functioning: fxImpaired(42, 'baja'),
  history: { setting: 'emergencia', curso: 'episódico-recurrente', tempo: 'agudo', safety: 'fail', episodesAges: [30, 36, 40] },
  bmse: { preset: 'MIXTO', ext: EXT_KITS.suicidaRed },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'fail', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'mixto', st3: 'red' }) });
push({ id: 'M20', dx: 'Trastorno por tics / Tourette (adulto)', cie11: '8A05.00', dsm5: '307.23', tests: 'tics → señal neuromotora',
  meta: M('M20-TIC', 25, 'M'), exposome: mergeAns(EXPO.neurodev), functioning: fxMild(25),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' },
  bmse: { preset: 'TOC', vector: { 'NM.tic': { score: '-1', specifiers: { tic_tipo: 'Motor complejo', tic_temp: 'Infancia/neurodesarrollo' } }, 'NM.parakinesia_iterativa': { score: '-1', specifiers: { para_iter_fenomeno: 'Estereotipia', para_iter_fuente: 'Últimos 7 días' } } } },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'tics/neurodesarrollo', note: 'estereotipia como parakinesia iterativa → no debe disparar extrapiramidalismo no farmacológico VEMMFAL' }) });

/* ──── último relleno hasta 100 (N): bordes finos sobre seguridad/curso/edad ──── */
push({ id: 'N01', dx: 'Riesgo heteroagresivo puro (BVC alto), sin ideación suicida', cie11: '—', dsm5: '—', tests: 'safety por terceros (no suicidio)',
  meta: M('N01-HET', 34, 'M', { setting: 'Emergencia', fuente: 'Familiar' }), exposome: mergeAns(EXPO.substances), functioning: fxImpaired(34, 'media'),
  history: { setting: 'emergencia', curso: 'episódico-recurrente', tempo: 'agudo', safety: 'failTerceros', episodesAges: [28, 31] },
  bmse: { preset: 'PSYCHOSIS_POSITIVE', ext: EXT_KITS.violenciaRed },
  expected: E({ gate: false, orgBand: 'lo', safety: 'fail', deNovo: false, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'psicótico', note: 'safety fail por riesgo a terceros, no por suicidio — ¿la triangulación lo refleja?' }) });
push({ id: 'N02', dx: 'Plan suicida específico declarado, sin intento previo', cie11: '6A70.2', dsm5: '296.23', tests: 'EXT.plan ESPEC → 3ST',
  meta: M('N02-PLAN', 39, 'M', { setting: 'Emergencia' }), exposome: mergeAns(EXPO.suicidIdea), functioning: fxImpaired(39, 'baja'),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'agudo', safety: 'fail', primer: true },
  bmse: { preset: 'DEPRESION', ext: { 'EXT.plan_suicida': { score: 'ESPEC', specifiers: {} }, 'EXT.medios': { score: 'SI', specifiers: {} }, 'EXT.soporte': { score: 'MIN', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'fail', deNovo: true, suicid: 'Ideación', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo', st3: 'red' }) });
push({ id: 'N03', dx: 'NSSI sin intencionalidad suicida', cie11: '—', dsm5: '—', tests: 'autolesión no suicida (E2-13)',
  meta: M('N03-NSSI', 19, 'F', { ocupacion: 'Estudiante' }), exposome: mergeAns(EXPO.nssi, EXPO.ace(4)), functioning: fxMild(19),
  history: { curso: 'fluctuante', tempo: 'insidioso', safety: 'warn' },
  bmse: { preset: 'BORDERLINE', vector: { 'FUN.psp_disruptivas': { score: '-1', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: true, suicid: 'NSSI', quadrant: 'Desarrollo típico', phenotype: 'desregulación', ace: '>=4', note: 'suicidalidad lifetime debe leerse NSSI, no Intento' }) });
push({ id: 'N04', dx: 'Catatonía retraída con mutismo (riesgo médico)', cie11: '6A40', dsm5: '293.89', tests: 'catatonía hipoactiva',
  meta: M('N04-CATM', 45, 'F', { setting: 'Hospitalización', fuente: 'Familiar' }), exposome: {}, functioning: fxAcuteBreak(45),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'subagudo', safety: 'g', primer: true },
  bmse: { preset: 'CATATONIA', vector: { 'NM.parakinesia_volicional': { score: '-1', specifiers: { para_vol_fenomeno: 'Flexibilidad cérea/catalepsia', para_vol_fuente: 'Entrevista' } }, 'F3.tono': { score: '-2', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'hi', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'catatónico', note: 'edad>40 + catatonía aguda/de novo — organicidad debe subir' }) });
push({ id: 'N05', dx: 'Episodio depresivo único leve (no recurrente)', cie11: '6A70.0', dsm5: '296.21', tests: 'episodio único → curso',
  meta: M('N05-DEPU', 33, 'M'), exposome: mergeAns(EXPO.depression), functioning: fxMild(33),
  history: { curso: 'episodio único', tempo: 'subagudo', safety: 'g', primer: true },
  bmse: { preset: 'DISTIMIA', vector: { 'F3.tono': { score: '-2', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'depresivo leve', note: 'curso "episodio único" → normaliza a episodio-unico → deNovo true' }) });
push({ id: 'N06', dx: 'Trastorno depresivo recurrente en remisión', cie11: '6A71.Z', dsm5: '296.36', tests: 'remisión + curso recurrente',
  meta: M('N06-DREM', 47, 'F'), exposome: mergeAns(EXPO.depression), functioning: fxPreserved(47),
  history: { curso: 'episódico-recurrente', tempo: 'insidioso', safety: 'g', episodesAges: [35, 41, 45] },
  bmse: { preset: 'NORMAL' },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: false, suicid: 'No', quadrant: 'Desarrollo típico', phenotype: 'normal/insuficiente', note: 'estado eutímico + curso recurrente (estado vs curso, como B04)' }) });
push({ id: 'N07', dx: 'Psicosis no orgánica en gestante', cie11: '6A2Z', dsm5: '298.9', tests: 'embarazo, precaución farmacológica',
  meta: M('N07-GEST', 28, 'F', { setting: 'Emergencia', fuente: 'Familiar' }), exposome: mergeAns(EXPO.chrp), functioning: fxAcuteBreak(28, 'media'),
  history: { setting: 'emergencia', curso: 'primer contacto', tempo: 'agudo', safety: 'warn', primer: true },
  bmse: { preset: 'PSYCHOSIS_POSITIVE' },
  expected: E({ gate: false, orgBand: ['lo', 'mid'], safety: 'warn', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'psicótico' }) });
push({ id: 'N08', dx: 'Trastorno orgánico de personalidad post-TEC', cie11: '6E60', dsm5: '310.1', tests: 'TCE previo → cambio conductual',
  meta: M('N08-TEC', 41, 'M'), exposome: mergeAns({ 'E3-15': 'Sí' }), functioning: fxChronicDecline(41),
  history: { curso: 'progresivo', tempo: 'insidioso', safety: 'failTerceros', episodesAges: ['a los 38'] },
  bmse: { preset: 'ANTISOCIAL', vector: { 'J.juicio': { score: '-2', specifiers: {} }, 'NM.luria': { score: '-1', specifiers: {} } }, ext: EXT_KITS.violenciaRed },
  expected: E({ gate: false, orgBand: ['mid', 'hi'], safety: 'fail', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'orgánico/desinhibido', note: 'edad inicio 38<40 — ¿se pierde la bandera por umbral rígido de 40?' }) });
push({ id: 'N09', dx: 'Trastorno depresivo con ansiedad prominente', cie11: '6A70.1', dsm5: '296.22', tests: 'mixto ansioso-depresivo',
  meta: M('N09-DANX', 35, 'F'), exposome: mergeAns(EXPO.depression), functioning: fxImpaired(35, 'baja'),
  history: { curso: 'episódico-recurrente', tempo: 'subagudo', safety: 'warn', episodesAges: [30, 33] },
  bmse: { preset: 'DEPRESION', vector: { 'F6.amenaza': { score: '2', specifiers: {} }, 'G.arousal': { score: '2', specifiers: {} } } },
  expected: E({ gate: false, orgBand: 'lo', safety: 'warn', deNovo: false, suicid: 'No', quadrant: 'Carga intrínseca / neurodesarrollo', phenotype: 'depresivo-ansioso' }) });
push({ id: 'N10', dx: 'Trastorno por consumo de cannabis con síndrome amotivacional', cie11: '6C41.2', dsm5: '304.30', tests: 'cannabis → negativos',
  meta: M('N10-CAN', 23, 'M', { ocupacion: 'Desempleado/a' }), exposome: mergeAns(EXPO.substances), functioning: fxImpaired(23, 'media'),
  history: { curso: 'continuo', tempo: 'insidioso', safety: 'g' },
  bmse: { preset: 'NEGATIVO', ext: EXT_KITS.sustanciasActivo },
  expected: E({ gate: false, orgBand: 'lo', safety: 'g', deNovo: true, suicid: 'No', quadrant: 'Vulnerabilidad esperable', phenotype: 'negativo/consumo', note: 'amotivación por cannabis vs negativos de esquizofrenia — frontera' }) });

/* curado a exactamente 100: se eliminan 25 variantes diagnósticas redundantes
   (sus ejes ya quedan cubiertos por otro caso). Se conservan TODOS los
   adversariales K y la amplitud diagnóstica CIE-11/DSM-5-TR. */
const DROP = new Set([
  'L01', 'L03', 'L05', 'L06', 'L07', 'L09', 'L10',
  'M01', 'M02', 'M03', 'M04', 'M07', 'M08', 'M09', 'M10', 'M11', 'M12', 'M15', 'M16', 'M17', 'M18', 'M19',
  'N06', 'N07', 'N09'
]);
const FINAL = SPECS.filter(s => !DROP.has(s.id));
if (FINAL.length !== 100) throw new Error('esperaba 100 casos, hay ' + FINAL.length);
module.exports = FINAL.map(buildCase);
module.exports.SPECS = FINAL;
