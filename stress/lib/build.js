/* ============================================================================
   Builders v2 — LLENAN EL INSTRUMENTO COMPLETO.
   Cada motor se siembra con TODOS sus ítems en su valor basal/normal
   (= "evaluado y ausente/normal", información clínica real) y encima se
   superpone el perfil del arquetipo. IDs/escalas extraídos del código fuente
   real (schema.json): 164 ítems exposoma · 47 dims pMSE · 7 ejes × 10 etapas.
   ============================================================================ */

/* ---- catálogos reales (de schema.json) ---- */
const ALL_EXPO = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','A-n1','A-n2','A-n3','A-n4','A-n5','A-n6','A-n7','A-n8','A-n9','A-n10','A-n11','A3-1','A3-2','A3-3','A3-4','A3-5','A3-6','A3-7','A3-8','A3-9','A3-10','A3-11','A3-12','19','20','21','22','23','24','25','26','27','28','29','30','B-n1','B-n2','B-n3','31','32','33','34','35','36','37','38','39','40','41','C-n1','C-n2','C-n3','C-n4','C-n5','C-n6','C-n7','C-n8','C-n9','C-n10','C-n11','C-n12','C-n13','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','E3-1','E3-2','E3-3','E3-4','E3-5','E3-6','E3-7','E3-8','E3-9','E3-10','E3-11','E3-12','E3-13','E3-14','E3-15','E3-16','E3-17','E3-18','E4-1','E4-2','E4-3','E4-4','E4-5','E4-6','E4-7','E4-9','E4-8','E2-1','E2-2','E2-3','E2-4','E2-5','E2-6','E2-7','E2-8','E2-9','E2-10','E2-11','E2-12','E2-13','E2-14','E2-15','E2-n1','E2-n2','E2-n3','E2-n4','E2-n5','E2-n6','58','59','60','61','62','63','64','65','66','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11'];
const PROT_EXPO = ['18','E3-18','E4-2','E4-3','E4-8']; // ítems protectores (su "No" = ausencia de protección)
const PHENO_DIMS = ['NC.conciencia','NC.fluencia','NC.digit','NC.tmt','NC.clock','NC.recall','F1.expresividad','F2.velocidad','F2.sensorial','NM.luria','NM.dismetria','NM.alternancia','NM.tandem','NM.parakinesia_iterativa','NM.parakinesia_odd','NM.parakinesia_volicional','NM.tic','NM.diskinesia','NM.distonia','NM.acatisia','NM.parkinsonismo','NM.tremor','F5.regulación','F3.tono','F3.anticipación','F3.drive','F4.experiencia','F4.contenido','F6.amenaza','F6.frustración','F6.animo-meta','F6.autoevaluación','F6.desesperanza','F7.testing','F7.auto-mentalización','F7.mentalización-otro','G.arousal','G.coherencia','G.sueno-ritmo','G.interocepcion','P1.dominancia','P2.afiliación','J.juicio','I.insight','E.egodistonia','FUN.psp_utiles','FUN.psp_relaciones','FUN.psp_autocuidado','FUN.psp_disruptivas'];
const EXT_ITEMS = ['EXT.plan_suicida','EXT.medios','EXT.intento_previo','EXT.soporte','EXT.sustancias','EXT.decision_capacidad','EXT.hx_violencia','EXT.bvc_ruidos','EXT.bvc_amenaza_verbal','EXT.bvc_objetos','EXT.rechazo_ayuda'];
const EXT_DEF = { 'EXT.plan_suicida':'NO','EXT.medios':'NO','EXT.intento_previo':'NO','EXT.soporte':'ADEC','EXT.sustancias':'NO','EXT.decision_capacidad':'SIN','EXT.hx_violencia':'NO','EXT.bvc_ruidos':'NO','EXT.bvc_amenaza_verbal':'NO','EXT.bvc_objetos':'NO','EXT.rechazo_ayuda':'NO' };
const FX_AXES = ['social','acadlab','vincular','autonomia','autocuidado','drive','cognicion'];
const STAGES = [['s0_5',0,5],['s6_11',6,11],['s12_15',12,15],['s16_18',16,18],['s19_25',19,25],['s26_44',26,44],['s45_64',45,64],['s65_74',65,74],['s75_84',75,84],['s85',85,200]];
// applicability: ejes NO aplicables por etapa (extraído del schema)
const FX_NA = { s0_5: ['acadlab','vincular'], s6_11: ['vincular'] };
function curStage(age){ age=+age; for (const [id,lo,hi] of STAGES){ if (age>=lo&&age<=hi) return id; } return 's85'; }
function stagesUpTo(age){ const cs=curStage(age); const out=[]; for (const [id] of STAGES){ out.push(id); if (id===cs) break; } return out; }
function axisApplies(stage, ax){ return !(FX_NA[stage]||[]).includes(ax); }

/* ---------- ① EXPOSOMA (exposome_scorer_v1) — 164 ítems, todos respondidos ---------- */
function expoSeed({ codigo, age, sex, evaluador = 'JFC', answers = {} }) {
  const a = {};
  ALL_EXPO.forEach(id => { a[id] = 'No'; });          // basal: todo evaluado y ausente
  Object.assign(a, answers);                          // overlay del arquetipo
  const sx = String(sex || '').toUpperCase();
  if (sx === 'F') { a['C-n1'] = 'Sí'; a['C-n2'] = 'No'; }
  else if (sx === 'M') { a['C-n1'] = 'No'; a['C-n2'] = 'Sí'; }
  return JSON.stringify({
    answers: a, extras: {}, flags: {}, substances: [], evOpen: {},
    _pName: codigo, _pAge: String(age), _pEval: evaluador, _pSex: (sx === 'F' ? 'F' : sx === 'M' ? 'M' : 'Otro')
  });
}
const EXPO = {
  ace: (n = 4) => { const ids = ['19','20','21','27','22','23','26','B-n1','B-n2','B-n3']; const o = {}; ids.slice(0, Math.min(n, ids.length)).forEach(id => o[id] = 'Sí'); return o; },
  highLoad: { '1':'Sí','10':'Sí','20':'Sí','27':'Sí','33':'Sí','65':'Sí','64':'Sí','42':'Sí','E2-3':'Sí','E3-1':'Sí','E3-3':'Sí','E3-16':'Sí','C-n11':'Sí' },
  psychosis: { 'E4-6':'Sí','E2-1':'Sí','E2-2':'Sí','56':'Sí','A3-1':'Sí','A3-8':'Sí','E4-1':'Sí','31':'Sí' },
  depression: { 'E2-3':'Sí','19':'Sí','E2-6':'Sí','50':'Sí','64':'Sí','41':'Sí' },
  chrp: { 'E4-6':'Sí' }, suicidIntento: { 'E2-12':'Sí' }, suicidIdea: { 'E2-11':'Sí' }, nssi: { 'E2-13':'Sí' },
  autoimmune: { 'E3-7':'Sí','E2-3':'Sí' }, substances: { '42':'Sí','43':'Sí','E2-5':'Sí' },
  indigena: { 'C-n3':'Sí' }, desempleo: { 'C-n11':'Sí' },
  comorbMedica: { 'E3-1':'Sí','E3-2':'Sí','E3-11':'Sí','E3-16':'Sí' },
  neurodev: { 'A3-1':'Sí','A3-2':'Sí','A3-8':'Sí','49':'Sí' },
};
function mergeAns() { return Object.assign({}, ...arguments); }

/* ---------- ② FUNCIONAMIENTO (expfx_state_v5) — trayectoria de vida completa ---------- */
function funcSeed({ age, exposure = 'baja', current = {}, premorbid = 1, perStage = {}, pattern = '', coherence = 'media', synthesis = '' }) {
  const cells = {};
  const cs = curStage(age);
  const pmObj = (premorbid && typeof premorbid === 'object') ? premorbid : null;
  const pm = ax => pmObj ? (pmObj[ax] != null ? pmObj[ax] : null) : premorbid; // premorbid:null → no llenar (robustez)
  stagesUpTo(age).forEach(st => {
    FX_AXES.forEach(ax => {
      if (!axisApplies(st, ax)) return;
      let score;
      if (st === cs && current[ax] != null) score = current[ax];           // estado actual
      else if (perStage[st] && perStage[st][ax] != null) score = perStage[st][ax]; // override de etapa
      else if (st === cs) score = (current[ax] != null ? current[ax] : pm(ax));
      else score = pm(ax);                                                  // premórbido
      if (score == null) return;                                           // sin dato → celda no creada
      cells[st + '::' + ax] = { score: String(score), note: '', points: [] };
    });
  });
  return JSON.stringify({ cells, exposure, age: +age, narrative: { chapters: [], coherence, pattern, synthesis }, _ts: 1780000000000 });
}

/* ---------- ③ HISTORIA (expHistApp_v2) — todos los campos llenos ---------- */
const SAFETY = {
  g:    { ideacionActiva: 'no', plan: 'no', intencion: 'no', riesgoTerceros: 'no', desinhibicion: 'no', cri: ['ninguna'] },
  warn: { ideacionActiva: 'pasiva', plan: 'no', intencion: 'no', riesgoTerceros: 'no', desinhibicion: 'no', cri: ['autolesión'] },
  fail: { ideacionActiva: 'activa', plan: 'sí', intencion: 'sí', riesgoTerceros: 'no', desinhibicion: 'no', cri: ['intento suicida'], metodoViolento: 'no violento' },
  failTerceros: { ideacionActiva: 'no', plan: 'no', intencion: 'no', riesgoTerceros: 'sí', desinhibicion: 'sí', cri: ['violencia'] },
};
const TEMPO = {
  hiperagudo: { cursoDesde: '~5 días', duracionProdromo: 'pródromo de ~1 semana', inicioModo: 'brusco', tipoCambio: 'precipitante claro' },
  agudo:      { cursoDesde: 'hace ~3 semanas', duracionProdromo: '2-3 semanas', inicioModo: 'brusco', tipoCambio: 'precipitante claro' },
  subagudo:   { cursoDesde: 'hace ~4 meses', duracionProdromo: 'varias semanas', inicioModo: 'insidioso', tipoCambio: 'instalación lenta que colmó' },
  insidioso:  { cursoDesde: 'hace ~6 años', duracionProdromo: 'meses a años', inicioModo: 'insidioso', tipoCambio: 'nada cambió (endógeno)' },
};
// la app Historia solo conoce setting emergencia | consulta externa → mapeo seguro
function histSetting(metaSetting) { return /emergenc/i.test(metaSetting || '') ? 'emergencia' : 'consulta externa'; }
function motivoCatFor(setting, safety) {
  if (setting === 'emergencia') return [safety === 'fail' ? 'ideación suicida / autolesión' : 'agitación / psicosis aguda'];
  return ['cuadro crónico / personalidad'];
}
function histSeed({ codigo, age, evaluador = 'JFC', setting = 'consulta externa', curso, tempo = 'insidioso',
  safety = 'g', primer = false, insight, episodesAges = [], deNovoText = '', motivo = '', dx = '' }) {
  const hs = histSetting(setting);
  const single = {
    setting: hs, curso: curso || 'episódico-recurrente', inicioModo: 'insidioso', tipoCambio: 'instalación lenta que colmó',
    difCurso: primer ? 'nuevo/agudo' : 'crónico (cambio desde basal)', confiabilidad: 'media',
    adherencia: primer ? 'no aplica' : 'parcial', regimen: primer ? 'ninguno' : 'oral', insight: insight || 'parcial',
    soporteCalidad: 'frágil', ideacionActiva: 'no', plan: 'no', intencion: 'no', metodoViolento: 'no aplica',
    riesgoTerceros: 'no', criAntecedente: 'no', desinhibicion: 'no', funcTipo: 'social (comunicar/evitar/obtener)',
    quienDecidio: primer ? 'familia' : 'el propio paciente', primer: primer ? 'si' : ''
  };
  Object.assign(single, TEMPO[tempo] || TEMPO.insidioso);
  const saf = SAFETY[safety] || SAFETY.g;
  ['ideacionActiva','plan','intencion','riesgoTerceros','desinhibicion','metodoViolento'].forEach(k => { if (saf[k] != null) single[k] = saf[k]; });
  if (saf.cri && saf.cri.includes('intento suicida')) single.criAntecedente = 'sí';
  const episodes = episodesAges.length
    ? episodesAges.map((ed, i) => ({ cuando: (typeof ed === 'string' ? ed : ('a los ' + ed)), tipo: 'episodio ' + (i + 1) + (dx ? (' — ' + dx.split('(')[0].trim()) : ''), cuadro: deNovoText || motivo || ('recaída ' + (i + 1)), detonante: 'estresor psicosocial', respuesta: 'parcial', manejo: 'ambulatorio', termino: 'remisión parcial', funcion: 'regulación interna' }))
    : [{ cuando: 'Episodio actual (hoy)', tipo: 'cuadro actual' + (dx ? (' — ' + dx.split('(')[0].trim()) : ''), cuadro: deNovoText || motivo || 'cuadro de presentación', detonante: 'ver detonante', respuesta: 'pendiente', manejo: 'en evaluación', termino: 'pendiente', funcion: '' }];
  const fields = {
    codigo, edad: String(age), evaluador, fecha: '2026-06-01',
    motivoDecl: motivo || (dx + ' — motivo declarado'),
    motivoReal: 'Hipótesis: ' + (dx || 'cuadro') + ' — motivo real tras la consulta',
    basal: primer ? 'Funcionamiento basal conservado previo al cuadro actual' : 'Disfunción basal de larga data desde la línea de base',
    cursoDesde: single.cursoDesde, duracionProdromo: single.duracionProdromo,
    detDesc: deNovoText || 'Cambio respecto a la línea de base; fuerza/precipitante descrito',
    detRecurrente: primer ? 'No' : 'Sí (patrón recurrente)',
    porQueAhora: 'Razón de consulta en este momento del curso',
    sintomas: deNovoText || ('Cuadro compatible con ' + (dx || 'el diagnóstico de trabajo')),
    primerFenomeno: 'Primer fenómeno percibido del episodio',
    significado: 'Significado del cuadro para el paciente y su entorno',
    soporte: saf === SAFETY.g ? 'Red de soporte presente' : 'Soporte frágil/insuficiente',
    tto: primer ? 'Sin tratamiento previo' : 'Tratamiento psiquiátrico previo (adherencia parcial)',
    funcAlivio: 'Alivio/evitación que cumple la conducta', funcCosto: 'Costo funcional de la conducta',
    criDesc: (saf.cri && saf.cri[0] !== 'ninguna') ? ('Conducta de riesgo: ' + saf.cri.join(', ')) : 'Sin conductas de riesgo activas',
    hilo: 'Hilo conductor: ' + (dx || 'cuadro') + ' sobre la trayectoria del paciente'
  };
  const multi = {
    fuente: primer ? ['paciente', 'familiar'] : ['paciente', 'historia previa'],
    detonante: tempo === 'hiperagudo' ? ['Médico / orgánico'] : ['Evento vital amenazante'],
    dominios: ['trabajo/estudios', 'relaciones', 'actividades cotidianas', 'autocuidado'],
    motivoCat: motivoCatFor(hs, safety),
    cri: saf.cri
  };
  return JSON.stringify({ fields, multi, single, episodes });
}

/* ---------- ④ pMSE (bmse_state_v2) — 47 dims + 11 EXT, todos puntuados ---------- */
const sc = (v, sp) => ({ score: String(v), specifiers: sp || {} });
const BMSE = {
  PSYCHOSIS_POSITIVE: { 'F4.contenido': sc(2), 'F4.experiencia': sc(2), 'F2.sensorial': sc(2, { sens_modal: 'auditivo' }), 'F7.testing': sc(-2), 'F6.amenaza': sc(2), 'F6.autoevaluación': sc(-1), 'I.insight': sc(-2), 'J.juicio': sc(-2), 'P1.dominancia': sc(1), 'P2.afiliación': sc(-2), 'E.egodistonia': sc(-1), 'G.coherencia': sc(-1), 'FUN.psp_relaciones': sc(-2), 'FUN.psp_utiles': sc(-1) },
  DELIRIO_CRONICO: { 'F4.contenido': sc(2), 'F7.testing': sc(-2), 'F6.amenaza': sc(2), 'I.insight': sc(-2), 'J.juicio': sc(-1), 'P2.afiliación': sc(-1), 'E.egodistonia': sc(-1) },
  MANIA: { 'F2.velocidad': sc(2, { motor: true }), 'F3.drive': sc(2), 'F3.anticipación': sc(2), 'F3.tono': sc(2), 'F6.animo-meta': sc(2), 'F6.autoevaluación': sc(2), 'G.sueno-ritmo': sc(2), 'G.arousal': sc(2), 'I.insight': sc(-2), 'J.juicio': sc(-1), 'E.egodistonia': sc(-2), 'P1.dominancia': sc(2) },
  MANIA_PSICOTICA: { 'F2.velocidad': sc(2), 'F3.drive': sc(2), 'F3.anticipación': sc(2), 'F6.animo-meta': sc(2), 'F6.autoevaluación': sc(2), 'F4.contenido': sc(2), 'F7.testing': sc(-1), 'I.insight': sc(-2), 'J.juicio': sc(-2), 'E.egodistonia': sc(-2), 'P1.dominancia': sc(2), 'G.sueno-ritmo': sc(2), 'G.arousal': sc(2) },
  MIXTO: { 'F2.velocidad': sc(2), 'F3.drive': sc(1), 'F3.tono': sc(-2), 'F6.animo-meta': sc(-2), 'F6.desesperanza': sc(-2), 'F6.autoevaluación': sc(-1), 'G.sueno-ritmo': sc(2), 'G.arousal': sc(2), 'I.insight': sc(-1) },
  DEPRESION: { 'F3.tono': sc(-2), 'F3.anticipación': sc(-2), 'F3.drive': sc(-2), 'F6.animo-meta': sc(-2), 'F6.desesperanza': sc(-2), 'F6.autoevaluación': sc(-2), 'F2.velocidad': sc(-1), 'G.sueno-ritmo': sc(1), 'G.interocepcion': sc(-1), 'G.apetito': sc(-1), 'E.egodistonia': sc(1), 'I.insight': sc(1), 'FUN.psp_utiles': sc(-2), 'FUN.psp_relaciones': sc(-1) },
  DEPRESION_PSICOTICA: { 'F3.tono': sc(-2), 'F3.drive': sc(-2), 'F6.animo-meta': sc(-2), 'F6.desesperanza': sc(-2), 'F6.autoevaluación': sc(-2), 'F4.contenido': sc(2), 'F7.testing': sc(-1), 'I.insight': sc(-1), 'FUN.psp_utiles': sc(-2) },
  DISTIMIA: { 'F3.tono': sc(-1), 'F3.drive': sc(-1), 'F6.animo-meta': sc(-1), 'F6.desesperanza': sc(-1), 'F6.autoevaluación': sc(-1), 'E.egodistonia': sc(1), 'I.insight': sc(1), 'FUN.psp_utiles': sc(-1) },
  ANSIEDAD_GAD: { 'F6.amenaza': sc(1), 'G.arousal': sc(2), 'F5.regulación': sc(-1), 'F3.tono': sc(-1), 'E.egodistonia': sc(1), 'I.insight': sc(1), 'G.sueno-ritmo': sc(1) },
  PANICO: { 'G.arousal': sc(2), 'F6.amenaza': sc(2), 'G.interocepcion': sc(2), 'F5.regulación': sc(-1), 'E.egodistonia': sc(1), 'I.insight': sc(1) },
  TOC: { 'F5.regulación': sc(-1), 'E.egodistonia': sc(-2), 'F6.amenaza': sc(1), 'I.insight': sc(1), 'G.arousal': sc(1) },
  PTSD: { 'F6.amenaza': sc(2), 'F4.experiencia': sc(1), 'G.arousal': sc(2), 'F5.regulación': sc(-2), 'E.egodistonia': sc(1), 'F7.coherencia-autobiografica': sc(-1), 'F2.sensorial': sc(1) },
  DISOCIATIVO: { 'F7.auto-mentalización': sc(-2), 'F2.sensorial': sc(-1), 'F4.experiencia': sc(1), 'E.egodistonia': sc(1), 'G.interocepcion': sc(-1) },
  BORDERLINE: { 'E.regulación': sc(-2), 'E.egodistonia': sc(1), 'F5.regulación': sc(-2), 'F6.frustración': sc(2), 'F6.animo-meta': sc(-1), 'FUN.psp_disruptivas': sc(-2), 'P2.afiliación': sc(-1) },
  ANTISOCIAL: { 'P1.dominancia': sc(2), 'FUN.psp_disruptivas': sc(1), 'E.egodistonia': sc(2), 'J.juicio': sc(-1), 'I.insight': sc(-1), 'F6.frustración': sc(2), 'P2.afiliación': sc(-2) },
  NARCISISTA: { 'P1.dominancia': sc(2), 'F6.autoevaluación': sc(2), 'E.egodistonia': sc(2), 'P2.afiliación': sc(-1), 'I.insight': sc(-1), 'F1.expresividad': sc(1) },
  ESQUIZOIDE: { 'P2.afiliación': sc(-2), 'F1.expresividad': sc(-2), 'F3.drive': sc(-1), 'I.insight': sc(1), 'F2.sensorial': sc(-1) },
  NEGATIVO: { 'F1.expresividad': sc(-2), 'F3.drive': sc(-2), 'F3.anticipación': sc(-1), 'P2.afiliación': sc(-2), 'G.coherencia': sc(-1), 'I.insight': sc(-1), 'J.juicio': sc(-1), 'F2.velocidad': sc(-1) },
  DESORGANIZADO: { 'G.coherencia': sc(-2), 'NC.fluencia': sc(-1), 'F7.coherencia-autobiografica': sc(-2), 'F4.contenido': sc(1), 'I.insight': sc(-2), 'NC.recall': sc(-1), 'F1.expresividad': sc(-1) },
  NEUROCOGNITIVO: { 'NC.fluencia': sc(-2), 'NC.digit': sc(-2), 'NC.recall': sc(-2), 'NC.tmt': sc(-2), 'NC.clock': sc(-2), 'J.juicio': sc(-2), 'I.insight': sc(-1), 'F1.expresividad': sc(-1), 'FUN.psp_autocuidado': sc(-2), 'NM.luria': sc(-1) },
  DELIRIUM: { 'NC.conciencia': sc(2, { CONF: true }), 'NC.fluencia': sc(-1), 'NC.digit': sc(-1), 'NC.recall': sc(-1), 'G.arousal': sc(2), 'F4.experiencia': sc(1), 'J.juicio': sc(-1), 'F2.velocidad': sc(1) },
  DELIRIUM_HIPOACTIVO: { 'NC.conciencia': sc(-1, { CONF: true }), 'NC.fluencia': sc(-1), 'NC.digit': sc(-1), 'G.arousal': sc(-2), 'F3.drive': sc(-2), 'F2.velocidad': sc(-2), 'F3.tono': sc(-1) },
  CATATONIA: { 'NM.parakinesia_volicional': sc(-1, { para_vol_fenomeno: 'Flexibilidad cérea/catalepsia' }), 'F2.velocidad': sc(-2), 'F1.expresividad': sc(-2), 'F3.drive': sc(-2), 'G.arousal': sc(-1) },
  ENCEPH: { 'NC.conciencia': sc(-1, { CONF: true }), 'NC.fluencia': sc(-1), 'NC.digit': sc(-1), 'NC.recall': sc(-1), 'NM.diskinesia': sc(-1, { dk_etiologia: 'Espontánea', dk_temp: 'Aguda/de novo' }), 'NM.parakinesia_volicional': sc(-1, { para_vol_fenomeno: 'Flexibilidad cérea/catalepsia', para_vol_fuente: 'Entrevista' }), 'F1.expresividad': sc(-1), 'F2.velocidad': sc(-1), 'F4.experiencia': sc(1), 'G.arousal': sc(-1), 'G.sueno-ritmo': sc(-1), 'F3.drive': sc(-1), 'J.juicio': sc(-1), 'I.insight': sc(-1) },
  TDAH: { 'F3.drive': sc(1), 'F2.velocidad': sc(1), 'F5.regulación': sc(-1), 'I.insight': sc(1), 'E.egodistonia': sc(1), 'NC.digit': sc(-1) },
  AUTISMO: { 'P2.afiliación': sc(-2), 'F1.expresividad': sc(-1), 'F7.mentalización-otro': sc(-2), 'F5.regulación': sc(-1) },
  SOMATICO: { 'G.interocepcion': sc(2), 'F6.amenaza': sc(1), 'E.egodistonia': sc(1), 'F3.tono': sc(-1) },
  ANOREXIA: { 'G.apetito': sc(-2), 'F6.autoevaluación': sc(-2), 'E.egodistonia': sc(1), 'FUN.psp_autocuidado': sc(-1), 'F5.regulación': sc(-1), 'G.interocepcion': sc(-1) },
  NORMAL: {}, MINIMO: {}, // se manejan con cobertura reducida (abajo)
};
const EXT_KITS = {
  suicidaRed: { 'EXT.plan_suicida': sc('ESPEC'), 'EXT.medios': sc('SI'), 'EXT.intento_previo': sc('RECIENTE'), 'EXT.soporte': sc('AUS') },
  suicidaWarn: { 'EXT.plan_suicida': sc('VAGO'), 'EXT.intento_previo': sc('LEJANO') },
  sustanciasActivo: { 'EXT.sustancias': sc('ACTIVO') },
  violenciaRed: { 'EXT.hx_violencia': sc('RECIENTE'), 'EXT.bvc_amenaza_verbal': sc('SI'), 'EXT.bvc_objetos': sc('SI') },
  rechazo: { 'EXT.rechazo_ayuda': sc('ACTIVO') },
};
function bmseSeed({ preset, vector = {}, ext = {}, conciencia = null, full = true }) {
  const state = {};
  if (full && preset !== 'MINIMO') {
    PHENO_DIMS.forEach(d => { state[d] = sc(0); });     // pMSE dims en neutro/normal
    EXT_ITEMS.forEach(k => { state[k] = sc(EXT_DEF[k]); }); // 11 EXT en valor seguro
  } else {
    EXT_ITEMS.forEach(k => { state[k] = sc(EXT_DEF[k]); }); // MINIMO: solo EXT seguro + lo poco que traiga
  }
  Object.assign(state, (preset && BMSE[preset]) || {}, vector, ext);
  if (conciencia != null) state['NC.conciencia'] = sc(conciencia.score, conciencia.specifiers);
  state['_timerStart'] = 1780000000000;
  return JSON.stringify(state);
}
function bmseIdentity(meta) {
  return JSON.stringify({ codigo: meta.codigo, edad: String(meta.edad), sexo: meta.sexo, fecha: meta.fecha || '2026-06-01', evaluador: meta.evaluador || 'JFC', educacion: meta.educacion || '', ses: meta.ses || '', estadoCivil: meta.estadoCivil || '', etnia: meta.etnia || '', ocupacion: meta.ocupacion || '' });
}

/* ---------- ensambla el REG seed completo ---------- */
function buildCase(spec) {
  const m = spec.meta;
  const bmse = Object.assign({}, spec.bmse || {});
  if (spec.bmse && spec.bmse.preset === 'MINIMO') bmse.full = false; // robustez: caso ralo a propósito
  const ls = {
    'exposome_scorer_v1': expoSeed({ codigo: m.codigo, age: m.edad, sex: m.sexo, evaluador: m.evaluador, answers: spec.exposome || {} }),
    'expfx_state_v5': funcSeed(spec.functioning || { age: m.edad }),
    'expHistApp_v2': histSeed(Object.assign({ codigo: m.codigo, age: m.edad, evaluador: m.evaluador, setting: m.setting, dx: spec.dx }, spec.history || {})),
    'bmse_identity_v1': bmseIdentity(m),
    'bmse_state_v2': bmseSeed(bmse),
  };
  return { id: spec.id, dx: spec.dx, cie11: spec.cie11, dsm5: spec.dsm5, tests: spec.tests, expected: spec.expected || {}, meta: m, ls };
}

module.exports = { buildCase, expoSeed, funcSeed, histSeed, bmseSeed, bmseIdentity, EXPO, BMSE, EXT_KITS, SAFETY, TEMPO, mergeAns, curStage, sc, ALL_EXPO, PHENO_DIMS };
