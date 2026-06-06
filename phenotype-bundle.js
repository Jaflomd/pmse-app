/* phenotype-bundle.js — autogenerado. Fenotipo bMSE macro/meso/micro. NO editar a mano. */
/* ===========================================================================
 * bMSE Phenotype Matcher  ·  Precision by Jaflo
 * ---------------------------------------------------------------------------
 * Sugiere el fenotipo de un paciente en 3 niveles: MACRO -> MESO -> MICRO.
 *
 * Filosofia (importante): la tesis del bMSE es que NO hay cajas, hay regiones
 * en un continuo. Por eso el matcher NO devuelve una sola etiqueta: devuelve
 * el mejor match + alternativas + una metrica de "cuan continuo/ambiguo" es,
 * y un eje de SEVERIDAD ortogonal (p-factor). Usalo como SUGERENCIA, no veredicto.
 *
 * Entrada: un objeto { "F4.contenido": 1.8, "F7.testing": -1.3, ... }
 *   - claves = nombres de dimension bMSE (mismos del JSON / app)
 *   - valores = score del paciente. Idealmente z-scored como los centroides.
 *     Si tus scores estan en otra escala (p.ej. cap a 2), pasa normalize:true
 *     y se z-normaliza con la media/sd del propio vector (aprox; ver nota).
 *   - dims ausentes (NE / no evaluado) simplemente se omiten del calculo.
 *
 * Uso:
 *   const PHENO = await fetch('bmse_phenotypes.json').then(r=>r.json());
 *   const res = matchPhenotype(patientVector, PHENO);
 *   // res.macro / res.meso / res.micro  + res.alternativas + res.severidad
 * ======================================================================== */

function _pearson(a, b, keys) {
  // correlacion sobre las dims presentes en ambos (maneja NE)
  const xs = [], ys = [];
  for (const k of keys) {
    if (a[k] == null || b[k] == null || Number.isNaN(a[k])) continue;
    xs.push(a[k]); ys.push(b[k]);
  }
  const n = xs.length;
  if (n < 4) return { r: -1, n };            // muy pocas dims -> match no fiable
  const mx = xs.reduce((s, v) => s + v, 0) / n;
  const my = ys.reduce((s, v) => s + v, 0) / n;
  let sxy = 0, sxx = 0, syy = 0;
  for (let i = 0; i < n; i++) {
    const dx = xs[i] - mx, dy = ys[i] - my;
    sxy += dx * dy; sxx += dx * dx; syy += dy * dy;
  }
  if (sxx === 0 || syy === 0) return { r: 0, n };
  return { r: sxy / Math.sqrt(sxx * syy), n };
}

function _zSelf(vec, dims) {
  // z-normalizacion intra-paciente (fallback si los scores no vienen z-scored)
  const ks = dims.filter(d => vec[d] != null && !Number.isNaN(vec[d]));
  const m = ks.reduce((s, k) => s + vec[k], 0) / ks.length;
  const sd = Math.sqrt(ks.reduce((s, k) => s + (vec[k] - m) ** 2, 0) / ks.length) || 1;
  const out = {};
  for (const k of ks) out[k] = (vec[k] - m) / sd;
  return out;
}

function _zPop(vec, norm) {
  // raw -> z por dimension usando media/sd de la poblacion (bmse_normalization.json)
  // Recomendado para el scorer (escala cruda -2..+2, 0-4, etc.)
  const out = {};
  for (const k in vec) {
    if (vec[k] == null || Number.isNaN(vec[k])) continue;
    if (norm[k]) out[k] = (vec[k] - norm[k].mean) / (norm[k].sd || 1);
    else out[k] = vec[k];
  }
  return out;
}

function matchPhenotype(patient, PHENO, opts = {}) {
  const dims = PHENO.dims;
  // Prioridad: norm poblacional (correcto) > zSelf intra-paciente (aprox) > crudo
  const vec = opts.norm ? _zPop(patient, opts.norm)
            : opts.normalize ? _zSelf(patient, dims)
            : patient;

  // --- 1. SEVERIDAD (p-factor): magnitud global del estado, ortogonal -----
  const present = dims.filter(d => vec[d] != null && !Number.isNaN(vec[d]));

  // Guarda: con < 4 dims el match no es fiable -> no sugerir micro
  if (present.length < 4) {
    return { confianza: "insuficiente", dims_evaluadas: present.length,
             macro: null, meso: null, micro: null, alternativas: [],
             severidad: null, egoFlag: null, ambiguo: null,
             nota: "Evalúa al menos 4 dimensiones para una sugerencia fiable." };
  }

  // p-factor = magnitud del estado vs NEUTRO CLINICO (raw 0 = sin señal),
  // NO vs la media poblacional (que es el promedio de arquetipos enfermos).
  // Por eso usa el patient CRUDO, no el vec z-scoreado.
  const energy = Math.sqrt(present.reduce((s, d) => {
    const v = +patient[d]; return s + (Number.isNaN(v) ? 0 : v * v);
  }, 0) / Math.max(present.length, 1));
  const severidad = {
    z: +energy.toFixed(2),
    pct: Math.min(100, Math.round((energy / 1.8) * 100)), // RMS crudo ~1.8 = muy cargado
    nota: energy < 0.5 ? "leve / preservado"
        : energy < 1.0 ? "moderado"
        : "grave (alta carga de estado)"
  };

  // --- 2. Recolectar correlaciones a cada nivel ---------------------------
  const macros = [], mesos = [], micros = [];
  for (const [mk, mac] of Object.entries(PHENO.macro)) {
    macros.push({ key: mk, label: mac.label, short: mac.short,
                  ...(_pearson(vec, mac.centroid, dims)), node: mac });
    for (const [sk, meso] of Object.entries(mac.meso)) {
      mesos.push({ key: sk, label: meso.label, macro: mk,
                   replica: meso.replica_real,
                   ...(_pearson(vec, meso.centroid, dims)), node: meso });
      for (const [ck, mic] of Object.entries(meso.micro)) {
        micros.push({ key: ck, label: mic.label, dsm: mic.dsm, meso: sk, macro: mk,
                      mesoLabel: meso.label, macroShort: mac.short,
                      replica: meso.replica_real,
                      ...(_pearson(vec, mic.centroid, dims)) });
      }
    }
  }
  const byR = (a, b) => b.r - a.r;
  macros.sort(byR); mesos.sort(byR); micros.sort(byR);

  // --- 3. Ambiguedad: gap a nivel ESPECTRO (meso), no micro ----------------
  // Dos micros del MISMO espectro (p.ej. paranoide vs delirante) estar cerca
  // NO es ambiguedad clinica real. La ambiguedad que importa es entre ESPECTROS.
  const mesoGap = mesos.length > 1 ? mesos[0].r - mesos[1].r : 1;
  const ambiguo = mesoGap < 0.08;   // paciente "entre espectros"
  const ambiguoEntre = ambiguo ? [mesos[0].label, mesos[1].label] : null;

  // --- 4. Eje EGO (sintonia/distonia), discriminador clave ASPD/NPD vs TLP -
  const ego = vec["E.egodistonia"];
  const egoFlag = ego == null ? null
    : ego > 0.4 ? "ego-distonico (sufre el rasgo)"
    : ego < -0.4 ? "ego-sintonico (no sufre el rasgo)"
    : "ego neutro";

  // --- 5. Niveles independientes + MACRO coherente con su mejor espectro ---
  // El centroide-promedio del macro esta "lavado" (mezcla muchos micros) y da r
  // enganoso. En su lugar, el macro HEREDA el match de su MESO mas fuerte:
  // asi el MACRO mostrado siempre es el padre del MESO #1 y su % es coherente.
  const pct = r => Math.max(0, Math.round(((r + 1) / 2) * 100));
  const topMicro = micros[0];
  const mesoOfTop = mesos[0];                       // espectro #1 (ranking independiente)
  const macroBest = {};                            // macroKey -> mejor r de sus mesos
  for (const m of mesos) if (!(m.macro in macroBest) || m.r > macroBest[m.macro]) macroBest[m.macro] = m.r;
  const topMacroKey = Object.keys(macroBest).sort((a, b) => macroBest[b] - macroBest[a])[0];
  const macroNode = macros.find(m => m.key === topMacroKey);
  const macroR = macroBest[topMacroKey];

  return {
    severidad,
    egoFlag,
    ambiguo,
    ambiguoEntre,
    // Confianza: gate de SEVERIDAD primero. Pearson mide forma; en un paciente
    // de baja senal la "forma" es ruido -> correlaciones altas pero espurias.
    // Si hay poca carga de estado, la sugerencia es poco fiable aunque r sea alto.
    confianza: severidad.z < 0.45 ? "baja (senal insuficiente / perfil poco diferenciado)"
             : ambiguo            ? "baja (entre espectros / perfil mixto)"
             : mesoGap < 0.15     ? "media"
             : "alta",
    // MACRO: familia dominante (= padre del espectro mas fuerte), % de ese espectro
    macro: { key: topMacroKey, label: macroNode.label, short: macroNode.short,
             r: +macroR.toFixed(3), pct: pct(macroR) },
    // MESO/MICRO singular (para badges de replica/coherencia)
    meso:  { key: mesoOfTop.key, label: mesoOfTop.label, r: +mesoOfTop.r.toFixed(3),
             pct: pct(mesoOfTop.r), replica_real: mesoOfTop.replica,
             dsm_colapsa: mesoOfTop.node.dsm_colapsa },
    micro: { key: topMicro.key, label: topMicro.label, r: +topMicro.r.toFixed(3),
             pct: pct(topMicro.r) },
    // categoria DSM-5-TR del micro ganador (el bMSE es estado; DSM es la nosologia)
    dsm: { label: topMicro.dsm },
    // MESO: 3 espectros mas cercanos (con %)
    mesosTop: mesos.slice(0, 3).map(m =>
      ({ label: m.label, r: +m.r.toFixed(3),
         pct: Math.max(0, Math.round(((m.r + 1) / 2) * 100)),
         replica: m.replica })),
    // MICRO: 5 fenotipos mas cercanos (con %). r[-1..1] -> 0..100
    alternativas: micros.slice(0, 5).map(m =>
      ({ label: m.label, dsm: m.dsm, r: +m.r.toFixed(3),
         pct: Math.max(0, Math.round(((m.r + 1) / 2) * 100)),
         meso: m.meso, mesoLabel: m.mesoLabel,
         macro: m.macro, macroShort: m.macroShort, replica: m.replica })),
    dims_evaluadas: present.length
  };
}

// Export (ESM / CommonJS / browser global)
if (typeof module !== "undefined") module.exports = { matchPhenotype };
if (typeof window !== "undefined") window.matchPhenotype = matchPhenotype;


var PHENO = {
  "dims": [
    "NC.conciencia",
    "NC.fluencia",
    "NC.digit",
    "NC.tmt",
    "NC.clock",
    "NC.recall",
    "F1.expresividad",
    "F2.velocidad",
    "F2.sensorial",
    "NM.luria",
    "NM.dismetria",
    "NM.alternancia",
    "NM.tandem",
    "NM.tic",
    "NM.parakinesia_iterativa",
    "NM.diskinesia",
    "NM.distonia",
    "NM.acatisia",
    "NM.parkinsonismo",
    "NM.tremor",
    "F5.regulación",
    "F3.tono",
    "F3.anticipación",
    "F3.drive",
    "F4.experiencia",
    "F4.contenido",
    "F6.amenaza",
    "F6.frustración",
    "F6.animo-meta",
    "F6.autoevaluación",
    "F6.desesperanza",
    "F7.testing",
    "F7.auto-mentalización",
    "F7.mentalización-otro",
    "G.arousal",
    "G.coherencia",
    "G.sueno-ritmo",
    "G.interocepcion",
    "P1.dominancia",
    "P2.afiliación",
    "J.juicio",
    "I.insight",
    "E.egodistonia",
    "FUN.psp_utiles",
    "FUN.psp_relaciones",
    "FUN.psp_autocuidado",
    "FUN.psp_disruptivas"
  ],
  "macro": {
    "MACRO_SALIENCIA": {
      "label": "Saliencia / Externalizante-Psicotico",
      "short": "Saliencia",
      "valencia": "ego-sintonico, arousal alto, contenido positivo",
      "replica_real": "fuerte (eje psicotico se separa en CNP y TCP)",
      "centroid": {
        "NC.conciencia": 0.071,
        "NC.fluencia": 0.298,
        "NC.digit": 0.141,
        "NC.tmt": 0.31,
        "NC.clock": 0.207,
        "NC.recall": 0.135,
        "F1.expresividad": 0.553,
        "F2.velocidad": 0.476,
        "F2.sensorial": 0,
        "NM.luria": 0.051,
        "NM.dismetria": 0.04,
        "NM.alternancia": 0.071,
        "NM.tandem": -0.088,
        "NM.tic": 0.084,
        "NM.diskinesia": -0.009,
        "NM.distonia": 0.01,
        "NM.acatisia": -0.018,
        "NM.parkinsonismo": -0.034,
        "NM.tremor": 0.009,
        "F5.regulación": -0.075,
        "F3.tono": 0.292,
        "F3.anticipación": 0.486,
        "F3.drive": 0.499,
        "F4.experiencia": 0.27,
        "F4.contenido": 0.565,
        "F6.amenaza": -0.209,
        "F6.frustración": 0.279,
        "F6.animo-meta": 0.374,
        "F6.autoevaluación": 0.475,
        "F6.desesperanza": 0.024,
        "F7.testing": -0.305,
        "F7.auto-mentalización": 0.182,
        "F7.mentalización-otro": -0.352,
        "G.arousal": 0.122,
        "G.coherencia": 0.013,
        "G.sueno-ritmo": 0.425,
        "G.interocepcion": -0.3,
        "P1.dominancia": 0.618,
        "P2.afiliación": -0.559,
        "J.juicio": -0.038,
        "I.insight": -0.58,
        "E.egodistonia": -0.635,
        "FUN.psp_utiles": 0.214,
        "FUN.psp_relaciones": -0.101,
        "FUN.psp_autocuidado": 0.202,
        "FUN.psp_disruptivas": 0.229,
        "NM.parakinesia_iterativa": 0.039
      },
      "signature": [
        {
          "dim": "E.egodistonia",
          "z": -0.64,
          "dir": "bajo"
        },
        {
          "dim": "P1.dominancia",
          "z": 0.62,
          "dir": "alto"
        },
        {
          "dim": "I.insight",
          "z": -0.58,
          "dir": "bajo"
        },
        {
          "dim": "F4.contenido",
          "z": 0.56,
          "dir": "alto"
        },
        {
          "dim": "P2.afiliación",
          "z": -0.56,
          "dir": "bajo"
        },
        {
          "dim": "F1.expresividad",
          "z": 0.55,
          "dir": "alto"
        },
        {
          "dim": "F3.drive",
          "z": 0.5,
          "dir": "alto"
        },
        {
          "dim": "F3.anticipación",
          "z": 0.49,
          "dir": "alto"
        }
      ],
      "meso": {
        "A1_psicosis_positiva": {
          "label": "Psicosis positiva (trastorno del pensamiento)",
          "replica_real": "SI - el unico fenotipo nitidamente discreto en ambas cohortes",
          "dsm_colapsa": [
            "Esquizofrenia (F20.9)",
            "Trastorno delirante (F22)"
          ],
          "centroid": {
            "NC.conciencia": 0.099,
            "NC.fluencia": 0.29,
            "NC.digit": 0.056,
            "NC.tmt": 0.382,
            "NC.clock": 0.303,
            "NC.recall": 0.239,
            "F1.expresividad": -0.003,
            "F2.velocidad": -0.27,
            "F2.sensorial": 0.81,
            "NM.luria": 0.063,
            "NM.dismetria": 0.071,
            "NM.alternancia": 0.124,
            "NM.tandem": -0.323,
            "NM.tic": 0.112,
            "NM.diskinesia": -0.22,
            "NM.distonia": -0.035,
            "NM.acatisia": 0.217,
            "NM.parkinsonismo": 0.17,
            "NM.tremor": -0.005,
            "F5.regulación": 0.151,
            "F3.tono": 0.356,
            "F3.anticipación": 0.054,
            "F3.drive": -0.067,
            "F4.experiencia": 0.795,
            "F4.contenido": 2.049,
            "F6.amenaza": 0.718,
            "F6.frustración": -0.558,
            "F6.animo-meta": 0.023,
            "F6.autoevaluación": -0.119,
            "F6.desesperanza": 0.179,
            "F7.testing": -1.101,
            "F7.auto-mentalización": 0.282,
            "F7.mentalización-otro": -0.295,
            "G.arousal": -0.449,
            "G.coherencia": -0.126,
            "G.sueno-ritmo": 0.144,
            "G.interocepcion": -0.362,
            "P1.dominancia": -0.143,
            "P2.afiliación": -1.095,
            "J.juicio": -0.223,
            "I.insight": -1.136,
            "E.egodistonia": -1.078,
            "FUN.psp_utiles": 0.415,
            "FUN.psp_relaciones": -0.335,
            "FUN.psp_autocuidado": 0.462,
            "FUN.psp_disruptivas": -0.303,
            "NM.parakinesia_iterativa": 0.198
          },
          "signature": [
            {
              "dim": "F4.contenido",
              "z": 2.05,
              "dir": "alto"
            },
            {
              "dim": "I.insight",
              "z": -1.14,
              "dir": "bajo"
            },
            {
              "dim": "F7.testing",
              "z": -1.1,
              "dir": "bajo"
            },
            {
              "dim": "P2.afiliación",
              "z": -1.1,
              "dir": "bajo"
            },
            {
              "dim": "E.egodistonia",
              "z": -1.08,
              "dir": "bajo"
            },
            {
              "dim": "F2.sensorial",
              "z": 0.81,
              "dir": "alto"
            },
            {
              "dim": "F4.experiencia",
              "z": 0.8,
              "dir": "alto"
            },
            {
              "dim": "F6.amenaza",
              "z": 0.72,
              "dir": "alto"
            }
          ],
          "micro": {
            "SZ_paranoide": {
              "label": "Esquizofrenia paranoide / psicosis positiva",
              "dsm": "Esquizofrenia (F20.9)",
              "centroid": {
                "NC.conciencia": 0.199,
                "NC.fluencia": 0.343,
                "NC.digit": -0.062,
                "NC.tmt": 0.382,
                "NC.clock": 0.414,
                "NC.recall": 0.239,
                "F1.expresividad": -0.003,
                "F2.velocidad": -0.238,
                "F2.sensorial": 1.845,
                "NM.luria": -0.203,
                "NM.dismetria": 0.071,
                "NM.alternancia": 0.124,
                "NM.tandem": -0.323,
                "NM.tic": -0.084,
                "NM.diskinesia": 0.15,
                "NM.distonia": 0.071,
                "NM.acatisia": 0.12,
                "NM.parkinsonismo": 0.17,
                "NM.tremor": -0.103,
                "F5.regulación": 0.094,
                "F3.tono": 0.43,
                "F3.anticipación": 0.124,
                "F3.drive": -0.156,
                "F4.experiencia": 1.548,
                "F4.contenido": 1.826,
                "F6.amenaza": 0.829,
                "F6.frustración": -0.629,
                "F6.animo-meta": 0.085,
                "F6.autoevaluación": -0.218,
                "F6.desesperanza": 0.096,
                "F7.testing": -1.779,
                "F7.auto-mentalización": 0.241,
                "F7.mentalización-otro": -0.888,
                "G.arousal": -0.545,
                "G.coherencia": -0.173,
                "G.sueno-ritmo": 0.078,
                "G.interocepcion": -0.218,
                "P1.dominancia": -0.204,
                "P2.afiliación": -1.161,
                "J.juicio": -0.894,
                "I.insight": -1.352,
                "E.egodistonia": -1.204,
                "FUN.psp_utiles": 0.327,
                "FUN.psp_relaciones": -1.029,
                "FUN.psp_autocuidado": 0.42,
                "FUN.psp_disruptivas": -0.583,
                "NM.parakinesia_iterativa": 0.096
              },
              "signature": [
                {
                  "dim": "F2.sensorial",
                  "z": 1.85,
                  "dir": "alto"
                },
                {
                  "dim": "F4.contenido",
                  "z": 1.83,
                  "dir": "alto"
                },
                {
                  "dim": "F7.testing",
                  "z": -1.78,
                  "dir": "bajo"
                },
                {
                  "dim": "F4.experiencia",
                  "z": 1.55,
                  "dir": "alto"
                },
                {
                  "dim": "I.insight",
                  "z": -1.35,
                  "dir": "bajo"
                },
                {
                  "dim": "E.egodistonia",
                  "z": -1.2,
                  "dir": "bajo"
                },
                {
                  "dim": "P2.afiliación",
                  "z": -1.16,
                  "dir": "bajo"
                },
                {
                  "dim": "FUN.psp_relaciones",
                  "z": -1.03,
                  "dir": "bajo"
                }
              ]
            },
            "Trastorno_delirante": {
              "label": "Trastorno delirante",
              "dsm": "Trastorno delirante (F22)",
              "centroid": {
                "NC.conciencia": 0,
                "NC.fluencia": 0.237,
                "NC.digit": 0.175,
                "NC.tmt": 0.382,
                "NC.clock": 0.191,
                "NC.recall": 0.239,
                "F1.expresividad": -0.003,
                "F2.velocidad": -0.302,
                "F2.sensorial": -0.224,
                "NM.luria": 0.33,
                "NM.dismetria": 0.071,
                "NM.alternancia": 0.124,
                "NM.tandem": -0.323,
                "NM.tic": 0.309,
                "NM.diskinesia": -0.589,
                "NM.distonia": -0.141,
                "NM.acatisia": 0.314,
                "NM.parkinsonismo": 0.17,
                "NM.tremor": 0.093,
                "F5.regulación": 0.207,
                "F3.tono": 0.281,
                "F3.anticipación": -0.017,
                "F3.drive": 0.023,
                "F4.experiencia": 0.042,
                "F4.contenido": 2.272,
                "F6.amenaza": 0.607,
                "F6.frustración": -0.486,
                "F6.animo-meta": -0.038,
                "F6.autoevaluación": -0.019,
                "F6.desesperanza": 0.263,
                "F7.testing": -0.423,
                "F7.auto-mentalización": 0.324,
                "F7.mentalización-otro": 0.298,
                "G.arousal": -0.353,
                "G.coherencia": -0.08,
                "G.sueno-ritmo": 0.21,
                "G.interocepcion": -0.505,
                "P1.dominancia": -0.082,
                "P2.afiliación": -1.03,
                "J.juicio": 0.447,
                "I.insight": -0.92,
                "E.egodistonia": -0.951,
                "FUN.psp_utiles": 0.503,
                "FUN.psp_relaciones": 0.358,
                "FUN.psp_autocuidado": 0.504,
                "FUN.psp_disruptivas": -0.023,
                "NM.parakinesia_iterativa": 0.299
              },
              "signature": [
                {
                  "dim": "F4.contenido",
                  "z": 2.27,
                  "dir": "alto"
                },
                {
                  "dim": "P2.afiliación",
                  "z": -1.03,
                  "dir": "bajo"
                },
                {
                  "dim": "E.egodistonia",
                  "z": -0.95,
                  "dir": "bajo"
                },
                {
                  "dim": "I.insight",
                  "z": -0.92,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.amenaza",
                  "z": 0.61,
                  "dir": "alto"
                },
                {
                  "dim": "NM.diskinesia",
                  "z": -0.59,
                  "dir": "bajo"
                },
                {
                  "dim": "G.interocepcion",
                  "z": -0.51,
                  "dir": "bajo"
                },
                {
                  "dim": "FUN.psp_autocuidado",
                  "z": 0.5,
                  "dir": "alto"
                }
              ]
            }
          }
        },
        "A2_mania_activacion": {
          "label": "Mania / activacion",
          "replica_real": "SI - zona de solapamiento afectivo-psicotico (SCHZ<->BIP)",
          "dsm_colapsa": [
            "T. bipolar I, manico con sintomas psicoticos (F31.2)",
            "T. bipolar II / episodio hipomaniaco (F31.81)",
            "T. bipolar, episodio con caracteristicas mixtas (F31.x)"
          ],
          "centroid": {
            "NC.conciencia": -0.066,
            "NC.fluencia": 0.272,
            "NC.digit": 0.096,
            "NC.tmt": 0.315,
            "NC.clock": 0.265,
            "NC.recall": 0.204,
            "F1.expresividad": 1.276,
            "F2.velocidad": 1.491,
            "F2.sensorial": -0.391,
            "NM.luria": 0.271,
            "NM.dismetria": -0.071,
            "NM.alternancia": 0,
            "NM.tandem": -0.049,
            "NM.tic": 0.178,
            "NM.diskinesia": 0.026,
            "NM.distonia": 0.071,
            "NM.acatisia": 0.055,
            "NM.parkinsonismo": -0.128,
            "NM.tremor": -0.103,
            "F5.regulación": -0.019,
            "F3.tono": 0.231,
            "F3.anticipación": 1.016,
            "F3.drive": 1.174,
            "F4.experiencia": 0.042,
            "F4.contenido": 0.295,
            "F6.amenaza": -0.446,
            "F6.frustración": 0.156,
            "F6.animo-meta": 0.719,
            "F6.autoevaluación": 0.358,
            "F6.desesperanza": -0.239,
            "F7.testing": -0.122,
            "F7.auto-mentalización": 0.103,
            "F7.mentalización-otro": 0.43,
            "G.arousal": 0.968,
            "G.coherencia": 0.075,
            "G.sueno-ritmo": 0.713,
            "G.interocepcion": -0.41,
            "P1.dominancia": 0.327,
            "P2.afiliación": 0.377,
            "J.juicio": 0.238,
            "I.insight": 0.209,
            "E.egodistonia": 0.123,
            "FUN.psp_utiles": 0.239,
            "FUN.psp_relaciones": 0.212,
            "FUN.psp_autocuidado": 0.024,
            "FUN.psp_disruptivas": 0.297,
            "NM.parakinesia_iterativa": -0.039
          },
          "signature": [
            {
              "dim": "F2.velocidad",
              "z": 1.49,
              "dir": "alto"
            },
            {
              "dim": "F1.expresividad",
              "z": 1.28,
              "dir": "alto"
            },
            {
              "dim": "F3.drive",
              "z": 1.17,
              "dir": "alto"
            },
            {
              "dim": "F3.anticipación",
              "z": 1.02,
              "dir": "alto"
            },
            {
              "dim": "G.arousal",
              "z": 0.97,
              "dir": "alto"
            },
            {
              "dim": "F6.animo-meta",
              "z": 0.72,
              "dir": "alto"
            },
            {
              "dim": "G.sueno-ritmo",
              "z": 0.71,
              "dir": "alto"
            },
            {
              "dim": "F6.amenaza",
              "z": -0.45,
              "dir": "bajo"
            }
          ],
          "micro": {
            "Mania_psicotica": {
              "label": "Mania psicotica",
              "dsm": "T. bipolar I, manico con sintomas psicoticos (F31.2)",
              "centroid": {
                "NC.conciencia": 0.099,
                "NC.fluencia": 0.237,
                "NC.digit": 0.175,
                "NC.tmt": 0.282,
                "NC.clock": 0.303,
                "NC.recall": 0.239,
                "F1.expresividad": 1.52,
                "F2.velocidad": 1.555,
                "F2.sensorial": -0.581,
                "NM.luria": 0.33,
                "NM.dismetria": -0.141,
                "NM.alternancia": -0.062,
                "NM.tandem": 0.294,
                "NM.tic": 0.112,
                "NM.diskinesia": 0.15,
                "NM.distonia": 0.071,
                "NM.acatisia": 0.12,
                "NM.parkinsonismo": -0.009,
                "NM.tremor": -0.69,
                "F5.regulación": 0.264,
                "F3.tono": 0.356,
                "F3.anticipación": 2.025,
                "F3.drive": 1.631,
                "F4.experiencia": -0.135,
                "F4.contenido": 1.826,
                "F6.amenaza": -0.557,
                "F6.frustración": -0.558,
                "F6.animo-meta": 1.865,
                "F6.autoevaluación": 1.311,
                "F6.desesperanza": 0.012,
                "F7.testing": -0.8,
                "F7.auto-mentalización": 0.158,
                "F7.mentalización-otro": 0.43,
                "G.arousal": 0.99,
                "G.coherencia": -0.08,
                "G.sueno-ritmo": 1.917,
                "G.interocepcion": -0.218,
                "P1.dominancia": 1.388,
                "P2.afiliación": 0.289,
                "J.juicio": 0.089,
                "I.insight": -0.703,
                "E.egodistonia": 0.187,
                "FUN.psp_utiles": 0.239,
                "FUN.psp_relaciones": 0.431,
                "FUN.psp_autocuidado": 0.165,
                "FUN.psp_disruptivas": 1.419,
                "NM.parakinesia_iterativa": -0.106
              },
              "signature": [
                {
                  "dim": "F3.anticipación",
                  "z": 2.03,
                  "dir": "alto"
                },
                {
                  "dim": "G.sueno-ritmo",
                  "z": 1.92,
                  "dir": "alto"
                },
                {
                  "dim": "F6.animo-meta",
                  "z": 1.86,
                  "dir": "alto"
                },
                {
                  "dim": "F4.contenido",
                  "z": 1.83,
                  "dir": "alto"
                },
                {
                  "dim": "F3.drive",
                  "z": 1.63,
                  "dir": "alto"
                },
                {
                  "dim": "F2.velocidad",
                  "z": 1.56,
                  "dir": "alto"
                },
                {
                  "dim": "F1.expresividad",
                  "z": 1.52,
                  "dir": "alto"
                },
                {
                  "dim": "FUN.psp_disruptivas",
                  "z": 1.42,
                  "dir": "alto"
                }
              ]
            },
            "Hipomania": {
              "label": "Hipomania",
              "dsm": "T. bipolar II / episodio hipomaniaco (F31.81)",
              "centroid": {
                "NC.conciencia": 0.199,
                "NC.fluencia": 0.343,
                "NC.digit": 0.056,
                "NC.tmt": 0.382,
                "NC.clock": 0.303,
                "NC.recall": 0.344,
                "F1.expresividad": 1.125,
                "F2.velocidad": 1.299,
                "F2.sensorial": -0.296,
                "NM.luria": 0.152,
                "NM.dismetria": -0.354,
                "NM.alternancia": 0.124,
                "NM.tandem": -0.117,
                "NM.tic": 0.112,
                "NM.diskinesia": -0.035,
                "NM.distonia": 0.071,
                "NM.acatisia": 0.314,
                "NM.parkinsonismo": 0.349,
                "NM.tremor": 0.093,
                "F5.regulación": 0.151,
                "F3.tono": 0.43,
                "F3.anticipación": 0.969,
                "F3.drive": 1.452,
                "F4.experiencia": 0.131,
                "F4.contenido": -0.403,
                "F6.amenaza": -0.335,
                "F6.frustración": -0.486,
                "F6.animo-meta": 1.19,
                "F6.autoevaluación": 0.712,
                "F6.desesperanza": 0.347,
                "F7.testing": 0.179,
                "F7.auto-mentalización": -0.091,
                "F7.mentalización-otro": 0.364,
                "G.arousal": 0.606,
                "G.coherencia": -0.173,
                "G.sueno-ritmo": 1.129,
                "G.interocepcion": -0.362,
                "P1.dominancia": -0.204,
                "P2.afiliación": 0.421,
                "J.juicio": 0.268,
                "I.insight": 0.666,
                "E.egodistonia": 0.123,
                "FUN.psp_utiles": -0.113,
                "FUN.psp_relaciones": 0.285,
                "FUN.psp_autocuidado": -0.173,
                "FUN.psp_disruptivas": -0.263,
                "NM.parakinesia_iterativa": 0.299
              },
              "signature": [
                {
                  "dim": "F3.drive",
                  "z": 1.45,
                  "dir": "alto"
                },
                {
                  "dim": "F2.velocidad",
                  "z": 1.3,
                  "dir": "alto"
                },
                {
                  "dim": "F6.animo-meta",
                  "z": 1.19,
                  "dir": "alto"
                },
                {
                  "dim": "G.sueno-ritmo",
                  "z": 1.13,
                  "dir": "alto"
                },
                {
                  "dim": "F1.expresividad",
                  "z": 1.13,
                  "dir": "alto"
                },
                {
                  "dim": "F3.anticipación",
                  "z": 0.97,
                  "dir": "alto"
                },
                {
                  "dim": "F6.autoevaluación",
                  "z": 0.71,
                  "dir": "alto"
                },
                {
                  "dim": "I.insight",
                  "z": 0.67,
                  "dir": "alto"
                }
              ]
            },
            "Mixto": {
              "label": "Estado mixto",
              "dsm": "T. bipolar, episodio con caracteristicas mixtas (F31.x)",
              "centroid": {
                "NC.conciencia": -0.497,
                "NC.fluencia": 0.237,
                "NC.digit": 0.056,
                "NC.tmt": 0.282,
                "NC.clock": 0.191,
                "NC.recall": 0.03,
                "F1.expresividad": 1.182,
                "F2.velocidad": 1.619,
                "F2.sensorial": -0.296,
                "NM.luria": 0.33,
                "NM.dismetria": 0.283,
                "NM.alternancia": -0.062,
                "NM.tandem": -0.323,
                "NM.tic": 0.309,
                "NM.diskinesia": -0.035,
                "NM.distonia": 0.071,
                "NM.acatisia": -0.268,
                "NM.parkinsonismo": -0.723,
                "NM.tremor": 0.289,
                "F5.regulación": -0.471,
                "F3.tono": -0.092,
                "F3.anticipación": 0.054,
                "F3.drive": 0.44,
                "F4.experiencia": 0.131,
                "F4.contenido": -0.537,
                "F6.amenaza": -0.446,
                "F6.frustración": 1.514,
                "F6.animo-meta": -0.897,
                "F6.autoevaluación": -0.95,
                "F6.desesperanza": -1.076,
                "F7.testing": 0.255,
                "F7.auto-mentalización": 0.241,
                "F7.mentalización-otro": 0.496,
                "G.arousal": 1.309,
                "G.coherencia": 0.479,
                "G.sueno-ritmo": -0.907,
                "G.interocepcion": -0.648,
                "P1.dominancia": -0.204,
                "P2.afiliación": 0.421,
                "J.juicio": 0.358,
                "I.insight": 0.666,
                "E.egodistonia": 0.06,
                "FUN.psp_utiles": 0.591,
                "FUN.psp_relaciones": -0.08,
                "FUN.psp_autocuidado": 0.081,
                "FUN.psp_disruptivas": -0.263,
                "NM.parakinesia_iterativa": -0.309
              },
              "signature": [
                {
                  "dim": "F2.velocidad",
                  "z": 1.62,
                  "dir": "alto"
                },
                {
                  "dim": "F6.frustración",
                  "z": 1.51,
                  "dir": "alto"
                },
                {
                  "dim": "G.arousal",
                  "z": 1.31,
                  "dir": "alto"
                },
                {
                  "dim": "F1.expresividad",
                  "z": 1.18,
                  "dir": "alto"
                },
                {
                  "dim": "F6.desesperanza",
                  "z": -1.08,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.autoevaluación",
                  "z": -0.95,
                  "dir": "bajo"
                },
                {
                  "dim": "G.sueno-ritmo",
                  "z": -0.91,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.animo-meta",
                  "z": -0.9,
                  "dir": "bajo"
                }
              ]
            }
          }
        },
        "A3_antagonismo": {
          "label": "Antagonismo (externalizante)",
          "replica_real": "NO - solo sintetico (sin cohorte real Cluster B aun)",
          "dsm_colapsa": [
            "T. de personalidad antisocial (F60.2)",
            "T. de personalidad narcisista (F60.81)"
          ],
          "centroid": {
            "NC.conciencia": 0.249,
            "NC.fluencia": 0.343,
            "NC.digit": 0.294,
            "NC.tmt": 0.232,
            "NC.clock": 0.024,
            "NC.recall": -0.075,
            "F1.expresividad": 0.026,
            "F2.velocidad": -0.302,
            "F2.sensorial": -0.224,
            "NM.luria": -0.292,
            "NM.dismetria": 0.177,
            "NM.alternancia": 0.124,
            "NM.tandem": 0.088,
            "NM.tic": -0.084,
            "NM.diskinesia": 0.15,
            "NM.distonia": -0.035,
            "NM.acatisia": -0.365,
            "NM.parkinsonismo": -0.098,
            "NM.tremor": 0.191,
            "F5.regulación": -0.386,
            "F3.tono": 0.318,
            "F3.anticipación": 0.124,
            "F3.drive": 0.052,
            "F4.experiencia": 0.086,
            "F4.contenido": -0.515,
            "F6.amenaza": -0.779,
            "F6.frustración": 1.299,
            "F6.animo-meta": 0.208,
            "F6.autoevaluación": 1.244,
            "F6.desesperanza": 0.263,
            "F7.testing": 0.217,
            "F7.auto-mentalización": 0.199,
            "F7.mentalización-otro": -1.581,
            "G.arousal": -0.577,
            "G.coherencia": 0.06,
            "G.sueno-ritmo": 0.275,
            "G.interocepcion": -0.075,
            "P1.dominancia": 1.817,
            "P2.afiliación": -1.425,
            "J.juicio": -0.268,
            "I.insight": -1.208,
            "E.egodistonia": -1.331,
            "FUN.psp_utiles": -0.025,
            "FUN.psp_relaciones": -0.335,
            "FUN.psp_autocuidado": 0.208,
            "FUN.psp_disruptivas": 0.658,
            "NM.parakinesia_iterativa": -0.005
          },
          "signature": [
            {
              "dim": "P1.dominancia",
              "z": 1.82,
              "dir": "alto"
            },
            {
              "dim": "F7.mentalización-otro",
              "z": -1.58,
              "dir": "bajo"
            },
            {
              "dim": "P2.afiliación",
              "z": -1.43,
              "dir": "bajo"
            },
            {
              "dim": "E.egodistonia",
              "z": -1.33,
              "dir": "bajo"
            },
            {
              "dim": "F6.frustración",
              "z": 1.3,
              "dir": "alto"
            },
            {
              "dim": "F6.autoevaluación",
              "z": 1.24,
              "dir": "alto"
            },
            {
              "dim": "I.insight",
              "z": -1.21,
              "dir": "bajo"
            },
            {
              "dim": "F6.amenaza",
              "z": -0.78,
              "dir": "bajo"
            }
          ],
          "micro": {
            "Antisocial": {
              "label": "Personalidad antisocial",
              "dsm": "T. de personalidad antisocial (F60.2)",
              "centroid": {
                "NC.conciencia": 0.298,
                "NC.fluencia": 0.343,
                "NC.digit": 0.175,
                "NC.tmt": 0.181,
                "NC.clock": -0.143,
                "NC.recall": 0.135,
                "F1.expresividad": -0.059,
                "F2.velocidad": -0.43,
                "F2.sensorial": -0.082,
                "NM.luria": -0.558,
                "NM.dismetria": 0.283,
                "NM.alternancia": 0.31,
                "NM.tandem": 0.088,
                "NM.tic": -0.281,
                "NM.diskinesia": 0.334,
                "NM.distonia": 0.071,
                "NM.acatisia": -0.268,
                "NM.parkinsonismo": -0.009,
                "NM.tremor": 0.289,
                "F5.regulación": -0.923,
                "F3.tono": 0.654,
                "F3.anticipación": 0.124,
                "F3.drive": -0.096,
                "F4.experiencia": 0.131,
                "F4.contenido": -0.448,
                "F6.amenaza": -1.666,
                "F6.frustración": 1.585,
                "F6.animo-meta": 0.146,
                "F6.autoevaluación": 0.845,
                "F6.desesperanza": 0.179,
                "F7.testing": 0.481,
                "F7.auto-mentalización": -0.091,
                "F7.mentalización-otro": -1.746,
                "G.arousal": -0.417,
                "G.coherencia": 0.013,
                "G.sueno-ritmo": 0.275,
                "G.interocepcion": -0.075,
                "P1.dominancia": 1.633,
                "P2.afiliación": -1.821,
                "J.juicio": -0.983,
                "I.insight": -0.92,
                "E.egodistonia": -0.951,
                "FUN.psp_utiles": 0.151,
                "FUN.psp_relaciones": 0.139,
                "FUN.psp_autocuidado": 0.081,
                "FUN.psp_disruptivas": 1.659,
                "NM.parakinesia_iterativa": 0.096
              },
              "signature": [
                {
                  "dim": "P2.afiliación",
                  "z": -1.82,
                  "dir": "bajo"
                },
                {
                  "dim": "F7.mentalización-otro",
                  "z": -1.75,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.amenaza",
                  "z": -1.67,
                  "dir": "bajo"
                },
                {
                  "dim": "FUN.psp_disruptivas",
                  "z": 1.66,
                  "dir": "alto"
                },
                {
                  "dim": "P1.dominancia",
                  "z": 1.63,
                  "dir": "alto"
                },
                {
                  "dim": "F6.frustración",
                  "z": 1.59,
                  "dir": "alto"
                },
                {
                  "dim": "J.juicio",
                  "z": -0.98,
                  "dir": "bajo"
                },
                {
                  "dim": "E.egodistonia",
                  "z": -0.95,
                  "dir": "bajo"
                }
              ]
            },
            "Narcisismo": {
              "label": "Personalidad narcisista",
              "dsm": "T. de personalidad narcisista (F60.81)",
              "centroid": {
                "NC.conciencia": 0.199,
                "NC.fluencia": 0.343,
                "NC.digit": 0.412,
                "NC.tmt": 0.282,
                "NC.clock": 0.191,
                "NC.recall": -0.284,
                "F1.expresividad": 0.11,
                "F2.velocidad": -0.174,
                "F2.sensorial": -0.367,
                "NM.luria": -0.025,
                "NM.dismetria": 0.071,
                "NM.alternancia": -0.062,
                "NM.tandem": 0.088,
                "NM.tic": 0.112,
                "NM.diskinesia": -0.035,
                "NM.distonia": -0.141,
                "NM.acatisia": -0.462,
                "NM.parkinsonismo": -0.187,
                "NM.tremor": 0.093,
                "F5.regulación": 0.151,
                "F3.tono": -0.018,
                "F3.anticipación": 0.124,
                "F3.drive": 0.201,
                "F4.experiencia": 0.042,
                "F4.contenido": -0.582,
                "F6.amenaza": 0.108,
                "F6.frustración": 1.014,
                "F6.animo-meta": 0.269,
                "F6.autoevaluación": 1.643,
                "F6.desesperanza": 0.347,
                "F7.testing": -0.047,
                "F7.auto-mentalización": 0.489,
                "F7.mentalización-otro": -1.416,
                "G.arousal": -0.737,
                "G.coherencia": 0.106,
                "G.sueno-ritmo": 0.275,
                "G.interocepcion": -0.075,
                "P1.dominancia": 2.001,
                "P2.afiliación": -1.03,
                "J.juicio": 0.447,
                "I.insight": -1.496,
                "E.egodistonia": -1.71,
                "FUN.psp_utiles": -0.201,
                "FUN.psp_relaciones": -0.81,
                "FUN.psp_autocuidado": 0.335,
                "FUN.psp_disruptivas": -0.343,
                "NM.parakinesia_iterativa": -0.106
              },
              "signature": [
                {
                  "dim": "P1.dominancia",
                  "z": 2,
                  "dir": "alto"
                },
                {
                  "dim": "E.egodistonia",
                  "z": -1.71,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.autoevaluación",
                  "z": 1.64,
                  "dir": "alto"
                },
                {
                  "dim": "I.insight",
                  "z": -1.5,
                  "dir": "bajo"
                },
                {
                  "dim": "F7.mentalización-otro",
                  "z": -1.42,
                  "dir": "bajo"
                },
                {
                  "dim": "P2.afiliación",
                  "z": -1.03,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.frustración",
                  "z": 1.01,
                  "dir": "alto"
                },
                {
                  "dim": "FUN.psp_relaciones",
                  "z": -0.81,
                  "dir": "bajo"
                }
              ]
            }
          }
        }
      }
    },
    "MACRO_INTERNALIZANTE": {
      "label": "Internalizante / Desapego / Neurodesarrollo",
      "short": "Internalizante",
      "valencia": "ego-distonico, deficit, contenido negativo",
      "replica_real": "fuerte (todo lo internalizante colapsa en un continuo)",
      "centroid": {
        "NC.conciencia": -0.036,
        "NC.fluencia": -0.149,
        "NC.digit": -0.071,
        "NC.tmt": -0.155,
        "NC.clock": -0.104,
        "NC.recall": -0.067,
        "F1.expresividad": -0.277,
        "F2.velocidad": -0.238,
        "F2.sensorial": 0,
        "NM.luria": -0.025,
        "NM.dismetria": -0.02,
        "NM.alternancia": -0.035,
        "NM.tandem": 0.044,
        "NM.tic": -0.042,
        "NM.diskinesia": 0.004,
        "NM.distonia": -0.005,
        "NM.acatisia": 0.009,
        "NM.parkinsonismo": 0.017,
        "NM.tremor": -0.005,
        "F5.regulación": 0.038,
        "F3.tono": -0.146,
        "F3.anticipación": -0.243,
        "F3.drive": -0.25,
        "F4.experiencia": -0.135,
        "F4.contenido": -0.282,
        "F6.amenaza": 0.104,
        "F6.frustración": -0.139,
        "F6.animo-meta": -0.187,
        "F6.autoevaluación": -0.237,
        "F6.desesperanza": -0.012,
        "F7.testing": 0.152,
        "F7.auto-mentalización": -0.091,
        "F7.mentalización-otro": 0.176,
        "G.arousal": -0.061,
        "G.coherencia": -0.007,
        "G.sueno-ritmo": -0.213,
        "G.interocepcion": 0.15,
        "P1.dominancia": -0.309,
        "P2.afiliación": 0.279,
        "J.juicio": 0.019,
        "I.insight": 0.29,
        "E.egodistonia": 0.318,
        "FUN.psp_utiles": -0.107,
        "FUN.psp_relaciones": 0.05,
        "FUN.psp_autocuidado": -0.101,
        "FUN.psp_disruptivas": -0.114,
        "NM.parakinesia_iterativa": -0.019
      },
      "signature": [
        {
          "dim": "E.egodistonia",
          "z": 0.32,
          "dir": "alto"
        },
        {
          "dim": "P1.dominancia",
          "z": -0.31,
          "dir": "bajo"
        },
        {
          "dim": "I.insight",
          "z": 0.29,
          "dir": "alto"
        },
        {
          "dim": "F4.contenido",
          "z": -0.28,
          "dir": "bajo"
        },
        {
          "dim": "P2.afiliación",
          "z": 0.28,
          "dir": "alto"
        },
        {
          "dim": "F1.expresividad",
          "z": -0.28,
          "dir": "bajo"
        },
        {
          "dim": "F3.drive",
          "z": -0.25,
          "dir": "bajo"
        },
        {
          "dim": "F3.anticipación",
          "z": -0.24,
          "dir": "bajo"
        }
      ],
      "meso": {
        "B1_distres_miedo": {
          "label": "Distres / miedo internalizante",
          "replica_real": "SI - colapsan en UN continuo (ARI 0.07 en TCP)",
          "dsm_colapsa": [
            "T. depresivo mayor (F32.x / F33.x)",
            "T. depresivo persistente / distimia (F34.1)",
            "T. de ansiedad generalizada (F41.1)",
            "T. de panico (F41.0)",
            "T. de ansiedad social (F40.10)",
            "T. de estres postraumatico (F43.10)",
            "T. obsesivo-compulsivo (F42.2)",
            "T. de sintomas somaticos (F45.1)"
          ],
          "centroid": {
            "NC.conciencia": 0.012,
            "NC.fluencia": 0.263,
            "NC.digit": 0.19,
            "NC.tmt": 0.294,
            "NC.clock": 0.149,
            "NC.recall": 0.278,
            "F1.expresividad": -0.292,
            "F2.velocidad": -0.334,
            "F2.sensorial": 0.052,
            "NM.luria": -0.048,
            "NM.dismetria": 0.018,
            "NM.alternancia": 0.031,
            "NM.tandem": 0.037,
            "NM.tic": -0.035,
            "NM.diskinesia": 0.057,
            "NM.distonia": 0.071,
            "NM.acatisia": -0.025,
            "NM.parkinsonismo": -0.009,
            "NM.tremor": -0.029,
            "F5.regulación": 0.369,
            "F3.tono": -0.158,
            "F3.anticipación": -0.219,
            "F3.drive": -0.208,
            "F4.experiencia": -0.157,
            "F4.contenido": -0.42,
            "F6.amenaza": 0.517,
            "F6.frustración": -0.219,
            "F6.animo-meta": -0.429,
            "F6.autoevaluación": -0.26,
            "F6.desesperanza": -0.135,
            "F7.testing": 0.255,
            "F7.auto-mentalización": -0.029,
            "F7.mentalización-otro": 0.405,
            "G.arousal": 0.246,
            "G.coherencia": 0.188,
            "G.sueno-ritmo": -0.447,
            "G.interocepcion": 0.427,
            "P1.dominancia": -0.419,
            "P2.afiliación": 0.421,
            "J.juicio": 0.313,
            "I.insight": 0.54,
            "E.egodistonia": 0.384,
            "FUN.psp_utiles": 0.041,
            "FUN.psp_relaciones": 0.166,
            "FUN.psp_autocuidado": -0.025,
            "FUN.psp_disruptivas": -0.123,
            "NM.parakinesia_iterativa": 0.02
          },
          "signature": [
            {
              "dim": "I.insight",
              "z": 0.54,
              "dir": "alto"
            },
            {
              "dim": "F6.amenaza",
              "z": 0.52,
              "dir": "alto"
            },
            {
              "dim": "G.sueno-ritmo",
              "z": -0.45,
              "dir": "bajo"
            },
            {
              "dim": "F6.animo-meta",
              "z": -0.43,
              "dir": "bajo"
            },
            {
              "dim": "G.interocepcion",
              "z": 0.43,
              "dir": "alto"
            },
            {
              "dim": "P2.afiliación",
              "z": 0.42,
              "dir": "alto"
            },
            {
              "dim": "F4.contenido",
              "z": -0.42,
              "dir": "bajo"
            },
            {
              "dim": "P1.dominancia",
              "z": -0.42,
              "dir": "bajo"
            }
          ],
          "micro": {
            "Depresion_mayor": {
              "label": "Depresion mayor",
              "dsm": "T. depresivo mayor (F32.x / F33.x)",
              "centroid": {
                "NC.conciencia": -0.298,
                "NC.fluencia": 0.237,
                "NC.digit": 0.294,
                "NC.tmt": 0.382,
                "NC.clock": 0.414,
                "NC.recall": 0.448,
                "F1.expresividad": -0.905,
                "F2.velocidad": -1.263,
                "F2.sensorial": -0.082,
                "NM.luria": -0.203,
                "NM.dismetria": -0.354,
                "NM.alternancia": 0.31,
                "NM.tandem": 0.294,
                "NM.tic": -0.281,
                "NM.diskinesia": -0.035,
                "NM.distonia": 0.283,
                "NM.acatisia": -0.268,
                "NM.parkinsonismo": -0.009,
                "NM.tremor": -0.103,
                "F5.regulación": 0.264,
                "F3.tono": -1.661,
                "F3.anticipación": -1.355,
                "F3.drive": -1.586,
                "F4.experiencia": -0.135,
                "F4.contenido": -0.448,
                "F6.amenaza": -0.335,
                "F6.frustración": -0.558,
                "F6.animo-meta": -1.45,
                "F6.autoevaluación": -1.415,
                "F6.desesperanza": -1.662,
                "F7.testing": 0.556,
                "F7.auto-mentalización": 0.407,
                "F7.mentalización-otro": 0.562,
                "G.arousal": -0.417,
                "G.coherencia": 0.479,
                "G.sueno-ritmo": -1.433,
                "G.interocepcion": -0.505,
                "P1.dominancia": -0.449,
                "P2.afiliación": 0.421,
                "J.juicio": 0.536,
                "I.insight": 0.449,
                "E.egodistonia": 0.123,
                "FUN.psp_utiles": -0.289,
                "FUN.psp_relaciones": 0.358,
                "FUN.psp_autocuidado": -0.851,
                "FUN.psp_disruptivas": -0.503,
                "NM.parakinesia_iterativa": 0.299
              },
              "signature": [
                {
                  "dim": "F6.desesperanza",
                  "z": -1.66,
                  "dir": "bajo"
                },
                {
                  "dim": "F3.tono",
                  "z": -1.66,
                  "dir": "bajo"
                },
                {
                  "dim": "F3.drive",
                  "z": -1.59,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.animo-meta",
                  "z": -1.45,
                  "dir": "bajo"
                },
                {
                  "dim": "G.sueno-ritmo",
                  "z": -1.43,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.autoevaluación",
                  "z": -1.42,
                  "dir": "bajo"
                },
                {
                  "dim": "F3.anticipación",
                  "z": -1.35,
                  "dir": "bajo"
                },
                {
                  "dim": "F2.velocidad",
                  "z": -1.26,
                  "dir": "bajo"
                }
              ]
            },
            "Distimia": {
              "label": "Distimia",
              "dsm": "T. depresivo persistente / distimia (F34.1)",
              "centroid": {
                "NC.conciencia": -0.199,
                "NC.fluencia": 0.343,
                "NC.digit": 0.294,
                "NC.tmt": 0.382,
                "NC.clock": -0.143,
                "NC.recall": 0.344,
                "F1.expresividad": -0.51,
                "F2.velocidad": -0.11,
                "F2.sensorial": -0.367,
                "NM.luria": 0.33,
                "NM.dismetria": 0.283,
                "NM.alternancia": -0.062,
                "NM.tandem": -0.323,
                "NM.tic": -0.084,
                "NM.diskinesia": 0.334,
                "NM.distonia": -0.141,
                "NM.acatisia": -0.074,
                "NM.parkinsonismo": 0.17,
                "NM.tremor": -0.298,
                "F5.regulación": 0.264,
                "F3.tono": -1.138,
                "F3.anticipación": -1.003,
                "F3.drive": -0.811,
                "F4.experiencia": 0.131,
                "F4.contenido": -0.537,
                "F6.amenaza": -0.557,
                "F6.frustración": -0.272,
                "F6.animo-meta": -0.529,
                "F6.autoevaluación": -0.019,
                "F6.desesperanza": -1.244,
                "F7.testing": 0.179,
                "F7.auto-mentalización": 0.407,
                "F7.mentalización-otro": 0.43,
                "G.arousal": -0.545,
                "G.coherencia": -0.266,
                "G.sueno-ritmo": 0.078,
                "G.interocepcion": -0.075,
                "P1.dominancia": -0.082,
                "P2.afiliación": 0.421,
                "J.juicio": 0.268,
                "I.insight": 0.594,
                "E.egodistonia": 0.25,
                "FUN.psp_utiles": -0.025,
                "FUN.psp_relaciones": 0.358,
                "FUN.psp_autocuidado": -0.089,
                "FUN.psp_disruptivas": -0.263,
                "NM.parakinesia_iterativa": -0.309
              },
              "signature": [
                {
                  "dim": "F6.desesperanza",
                  "z": -1.24,
                  "dir": "bajo"
                },
                {
                  "dim": "F3.tono",
                  "z": -1.14,
                  "dir": "bajo"
                },
                {
                  "dim": "F3.anticipación",
                  "z": -1,
                  "dir": "bajo"
                },
                {
                  "dim": "F3.drive",
                  "z": -0.81,
                  "dir": "bajo"
                },
                {
                  "dim": "I.insight",
                  "z": 0.59,
                  "dir": "alto"
                },
                {
                  "dim": "F6.amenaza",
                  "z": -0.56,
                  "dir": "bajo"
                },
                {
                  "dim": "G.arousal",
                  "z": -0.55,
                  "dir": "bajo"
                },
                {
                  "dim": "F4.contenido",
                  "z": -0.54,
                  "dir": "bajo"
                }
              ]
            },
            "GAD": {
              "label": "Ansiedad generalizada",
              "dsm": "T. de ansiedad generalizada (F41.1)",
              "centroid": {
                "NC.conciencia": -0.099,
                "NC.fluencia": 0.131,
                "NC.digit": 0.412,
                "NC.tmt": 0.282,
                "NC.clock": 0.191,
                "NC.recall": 0.448,
                "F1.expresividad": 0.167,
                "F2.velocidad": -0.366,
                "F2.sensorial": -0.224,
                "NM.luria": 0.152,
                "NM.dismetria": 0.071,
                "NM.alternancia": -0.062,
                "NM.tandem": 0.294,
                "NM.tic": -0.281,
                "NM.diskinesia": 0.15,
                "NM.distonia": 0.071,
                "NM.acatisia": -0.074,
                "NM.parkinsonismo": 0.349,
                "NM.tremor": 0.289,
                "F5.regulación": -0.471,
                "F3.tono": 0.057,
                "F3.anticipación": 0.054,
                "F3.drive": 0.201,
                "F4.experiencia": -0.312,
                "F4.contenido": -0.537,
                "F6.amenaza": 0.995,
                "F6.frustración": 0.228,
                "F6.animo-meta": -0.529,
                "F6.autoevaluación": 0.18,
                "F6.desesperanza": 0.514,
                "F7.testing": 0.104,
                "F7.auto-mentalización": 0.158,
                "F7.mentalización-otro": 0.43,
                "G.arousal": 1.054,
                "G.coherencia": -0.08,
                "G.sueno-ritmo": -0.776,
                "G.interocepcion": 0.713,
                "P1.dominancia": -0.082,
                "P2.afiliación": 0.421,
                "J.juicio": 0.268,
                "I.insight": 0.666,
                "E.egodistonia": 0.187,
                "FUN.psp_utiles": -0.025,
                "FUN.psp_relaciones": 0.577,
                "FUN.psp_autocuidado": 0.165,
                "FUN.psp_disruptivas": 0.217,
                "NM.parakinesia_iterativa": -0.309
              },
              "signature": [
                {
                  "dim": "G.arousal",
                  "z": 1.05,
                  "dir": "alto"
                },
                {
                  "dim": "F6.amenaza",
                  "z": 1,
                  "dir": "alto"
                },
                {
                  "dim": "G.sueno-ritmo",
                  "z": -0.78,
                  "dir": "bajo"
                },
                {
                  "dim": "G.interocepcion",
                  "z": 0.71,
                  "dir": "alto"
                },
                {
                  "dim": "I.insight",
                  "z": 0.67,
                  "dir": "alto"
                },
                {
                  "dim": "FUN.psp_relaciones",
                  "z": 0.58,
                  "dir": "alto"
                },
                {
                  "dim": "F4.contenido",
                  "z": -0.54,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.animo-meta",
                  "z": -0.53,
                  "dir": "bajo"
                }
              ]
            },
            "Panico": {
              "label": "Trastorno de panico",
              "dsm": "T. de panico (F41.0)",
              "centroid": {
                "NC.conciencia": -0.099,
                "NC.fluencia": 0.237,
                "NC.digit": -0.062,
                "NC.tmt": 0.482,
                "NC.clock": 0.191,
                "NC.recall": 0.344,
                "F1.expresividad": -0.003,
                "F2.velocidad": -0.302,
                "F2.sensorial": 0.632,
                "NM.luria": -0.025,
                "NM.dismetria": 0.071,
                "NM.alternancia": 0.124,
                "NM.tandem": 0.294,
                "NM.tic": 0.112,
                "NM.diskinesia": 0.15,
                "NM.distonia": 0.071,
                "NM.acatisia": 0.12,
                "NM.parkinsonismo": -0.009,
                "NM.tremor": 0.289,
                "F5.regulación": 0.207,
                "F3.tono": 0.206,
                "F3.anticipación": 0.194,
                "F3.drive": 0.321,
                "F4.experiencia": -0.135,
                "F4.contenido": -0.493,
                "F6.amenaza": 1.051,
                "F6.frustración": 0.014,
                "F6.animo-meta": 0.085,
                "F6.autoevaluación": -0.285,
                "F6.desesperanza": 0.431,
                "F7.testing": -0.273,
                "F7.auto-mentalización": 0.075,
                "F7.mentalización-otro": 0.43,
                "G.arousal": 1.565,
                "G.coherencia": 0.2,
                "G.sueno-ritmo": -0.447,
                "G.interocepcion": 1.86,
                "P1.dominancia": -0.204,
                "P2.afiliación": 0.421,
                "J.juicio": 0.179,
                "I.insight": 0.594,
                "E.egodistonia": 0.06,
                "FUN.psp_utiles": 0.239,
                "FUN.psp_relaciones": 0.504,
                "FUN.psp_autocuidado": -0.173,
                "FUN.psp_disruptivas": -0.183,
                "NM.parakinesia_iterativa": -0.106
              },
              "signature": [
                {
                  "dim": "G.interocepcion",
                  "z": 1.86,
                  "dir": "alto"
                },
                {
                  "dim": "G.arousal",
                  "z": 1.57,
                  "dir": "alto"
                },
                {
                  "dim": "F6.amenaza",
                  "z": 1.05,
                  "dir": "alto"
                },
                {
                  "dim": "F2.sensorial",
                  "z": 0.63,
                  "dir": "alto"
                },
                {
                  "dim": "I.insight",
                  "z": 0.59,
                  "dir": "alto"
                },
                {
                  "dim": "FUN.psp_relaciones",
                  "z": 0.5,
                  "dir": "alto"
                },
                {
                  "dim": "F4.contenido",
                  "z": -0.49,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.tmt",
                  "z": 0.48,
                  "dir": "alto"
                }
              ]
            },
            "Fobia_social": {
              "label": "Fobia social",
              "dsm": "T. de ansiedad social (F40.10)",
              "centroid": {
                "NC.conciencia": 0,
                "NC.fluencia": 0.237,
                "NC.digit": -0.062,
                "NC.tmt": 0.081,
                "NC.clock": 0.08,
                "NC.recall": 0.239,
                "F1.expresividad": -0.792,
                "F2.velocidad": -0.238,
                "F2.sensorial": -0.367,
                "NM.luria": -0.025,
                "NM.dismetria": -0.141,
                "NM.alternancia": 0.124,
                "NM.tandem": -0.323,
                "NM.tic": 0.112,
                "NM.diskinesia": -0.035,
                "NM.distonia": 0.071,
                "NM.acatisia": 0.12,
                "NM.parkinsonismo": -0.366,
                "NM.tremor": 0.093,
                "F5.regulación": 0.433,
                "F3.tono": 0.132,
                "F3.anticipación": 0.124,
                "F3.drive": 0.082,
                "F4.experiencia": -0.046,
                "F4.contenido": -0.582,
                "F6.amenaza": 0.718,
                "F6.frustración": -0.272,
                "F6.animo-meta": -0.038,
                "F6.autoevaluación": 0.047,
                "F6.desesperanza": 0.012,
                "F7.testing": 0.556,
                "F7.auto-mentalización": -0.339,
                "F7.mentalización-otro": 0.43,
                "G.arousal": -0.417,
                "G.coherencia": 0.2,
                "G.sueno-ritmo": 0.144,
                "G.interocepcion": -0.362,
                "P1.dominancia": -2.164,
                "P2.afiliación": 0.552,
                "J.juicio": 0.268,
                "I.insight": 0.594,
                "E.egodistonia": 0.187,
                "FUN.psp_utiles": 0.239,
                "FUN.psp_relaciones": -1.248,
                "FUN.psp_autocuidado": 0.165,
                "FUN.psp_disruptivas": -0.023,
                "NM.parakinesia_iterativa": 0.299
              },
              "signature": [
                {
                  "dim": "P1.dominancia",
                  "z": -2.16,
                  "dir": "bajo"
                },
                {
                  "dim": "FUN.psp_relaciones",
                  "z": -1.25,
                  "dir": "bajo"
                },
                {
                  "dim": "F1.expresividad",
                  "z": -0.79,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.amenaza",
                  "z": 0.72,
                  "dir": "alto"
                },
                {
                  "dim": "I.insight",
                  "z": 0.59,
                  "dir": "alto"
                },
                {
                  "dim": "F4.contenido",
                  "z": -0.58,
                  "dir": "bajo"
                },
                {
                  "dim": "F7.testing",
                  "z": 0.56,
                  "dir": "alto"
                },
                {
                  "dim": "P2.afiliación",
                  "z": 0.55,
                  "dir": "alto"
                }
              ]
            },
            "PTSD": {
              "label": "Estres postraumatico",
              "dsm": "T. de estres postraumatico (F43.10)",
              "centroid": {
                "NC.conciencia": 0.696,
                "NC.fluencia": 0.343,
                "NC.digit": -0.062,
                "NC.tmt": 0.181,
                "NC.clock": 0.303,
                "NC.recall": 0.239,
                "F1.expresividad": -0.398,
                "F2.velocidad": -0.238,
                "F2.sensorial": 1.06,
                "NM.luria": -0.203,
                "NM.dismetria": -0.354,
                "NM.alternancia": -0.248,
                "NM.tandem": 0.088,
                "NM.tic": -0.084,
                "NM.diskinesia": -0.035,
                "NM.distonia": 0.071,
                "NM.acatisia": -0.462,
                "NM.parkinsonismo": -0.366,
                "NM.tremor": -0.103,
                "F5.regulación": 0.151,
                "F3.tono": 0.505,
                "F3.anticipación": 0.054,
                "F3.drive": 0.142,
                "F4.experiencia": -0.135,
                "F4.contenido": -0.537,
                "F6.amenaza": 1.106,
                "F6.frustración": -0.058,
                "F6.animo-meta": -0.713,
                "F6.autoevaluación": -0.152,
                "F6.desesperanza": 0.431,
                "F7.testing": 0.33,
                "F7.auto-mentalización": -1.417,
                "F7.mentalización-otro": 0.166,
                "G.arousal": 1.373,
                "G.coherencia": 0.293,
                "G.sueno-ritmo": -1.564,
                "G.interocepcion": -0.29,
                "P1.dominancia": -0.204,
                "P2.afiliación": 0.421,
                "J.juicio": 0.447,
                "I.insight": 0.666,
                "E.egodistonia": 0.25,
                "FUN.psp_utiles": -0.113,
                "FUN.psp_relaciones": -0.08,
                "FUN.psp_autocuidado": 0.165,
                "FUN.psp_disruptivas": 0.137,
                "NM.parakinesia_iterativa": -0.309
              },
              "signature": [
                {
                  "dim": "G.sueno-ritmo",
                  "z": -1.56,
                  "dir": "bajo"
                },
                {
                  "dim": "F7.auto-mentalización",
                  "z": -1.42,
                  "dir": "bajo"
                },
                {
                  "dim": "G.arousal",
                  "z": 1.37,
                  "dir": "alto"
                },
                {
                  "dim": "F6.amenaza",
                  "z": 1.11,
                  "dir": "alto"
                },
                {
                  "dim": "F2.sensorial",
                  "z": 1.06,
                  "dir": "alto"
                },
                {
                  "dim": "F6.animo-meta",
                  "z": -0.71,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.conciencia",
                  "z": 0.7,
                  "dir": "alto"
                },
                {
                  "dim": "I.insight",
                  "z": 0.67,
                  "dir": "alto"
                }
              ]
            },
            "TOC": {
              "label": "Trastorno obsesivo-compulsivo",
              "dsm": "T. obsesivo-compulsivo (F42.2)",
              "centroid": {
                "NC.conciencia": -0.199,
                "NC.fluencia": 0.449,
                "NC.digit": 0.412,
                "NC.tmt": 0.382,
                "NC.clock": 0.191,
                "NC.recall": 0.03,
                "F1.expresividad": 0.11,
                "F2.velocidad": -0.238,
                "F2.sensorial": -0.51,
                "NM.luria": -0.203,
                "NM.dismetria": 0.283,
                "NM.alternancia": 0.31,
                "NM.tandem": -0.323,
                "NM.tic": 0.112,
                "NM.diskinesia": -0.22,
                "NM.distonia": 0.071,
                "NM.acatisia": 0.314,
                "NM.parkinsonismo": 0.17,
                "NM.tremor": 0.093,
                "F5.regulación": 1.902,
                "F3.tono": 0.58,
                "F3.anticipación": 0.054,
                "F3.drive": -0.096,
                "F4.experiencia": -0.312,
                "F4.contenido": 0.265,
                "F6.amenaza": 0.884,
                "F6.frustración": -0.344,
                "F6.animo-meta": 0.208,
                "F6.autoevaluación": -0.085,
                "F6.desesperanza": 0.263,
                "F7.testing": 0.405,
                "F7.auto-mentalización": 0.158,
                "F7.mentalización-otro": 0.364,
                "G.arousal": -0.289,
                "G.coherencia": 0.758,
                "G.sueno-ritmo": 0.341,
                "G.interocepcion": -0.003,
                "P1.dominancia": -0.204,
                "P2.afiliación": 0.421,
                "J.juicio": 0.268,
                "I.insight": 0.161,
                "E.egodistonia": 1.831,
                "FUN.psp_utiles": 0.151,
                "FUN.psp_relaciones": 0.504,
                "FUN.psp_autocuidado": 0.25,
                "FUN.psp_disruptivas": -0.023,
                "NM.parakinesia_iterativa": 0.299
              },
              "signature": [
                {
                  "dim": "F5.regulación",
                  "z": 1.9,
                  "dir": "alto"
                },
                {
                  "dim": "E.egodistonia",
                  "z": 1.83,
                  "dir": "alto"
                },
                {
                  "dim": "F6.amenaza",
                  "z": 0.88,
                  "dir": "alto"
                },
                {
                  "dim": "G.coherencia",
                  "z": 0.76,
                  "dir": "alto"
                },
                {
                  "dim": "F3.tono",
                  "z": 0.58,
                  "dir": "alto"
                },
                {
                  "dim": "F2.sensorial",
                  "z": -0.51,
                  "dir": "bajo"
                },
                {
                  "dim": "FUN.psp_relaciones",
                  "z": 0.5,
                  "dir": "alto"
                },
                {
                  "dim": "NC.fluencia",
                  "z": 0.45,
                  "dir": "alto"
                }
              ]
            },
            "Somatoforme": {
              "label": "Trastorno somatomorfo",
              "dsm": "T. de sintomas somaticos (F45.1)",
              "centroid": {
                "NC.conciencia": 0.298,
                "NC.fluencia": 0.131,
                "NC.digit": 0.294,
                "NC.tmt": 0.181,
                "NC.clock": -0.032,
                "NC.recall": 0.135,
                "F1.expresividad": -0.003,
                "F2.velocidad": 0.082,
                "F2.sensorial": 0.275,
                "NM.luria": -0.203,
                "NM.dismetria": 0.283,
                "NM.alternancia": -0.248,
                "NM.tandem": 0.294,
                "NM.tic": 0.112,
                "NM.diskinesia": 0.15,
                "NM.distonia": 0.071,
                "NM.acatisia": 0.12,
                "NM.parkinsonismo": -0.009,
                "NM.tremor": -0.494,
                "F5.regulación": 0.207,
                "F3.tono": 0.057,
                "F3.anticipación": 0.124,
                "F3.drive": 0.082,
                "F4.experiencia": -0.312,
                "F4.contenido": -0.493,
                "F6.amenaza": 0.275,
                "F6.frustración": -0.486,
                "F6.animo-meta": -0.468,
                "F6.autoevaluación": -0.351,
                "F6.desesperanza": 0.179,
                "F7.testing": 0.179,
                "F7.auto-mentalización": 0.324,
                "F7.mentalización-otro": 0.43,
                "G.arousal": -0.353,
                "G.coherencia": -0.08,
                "G.sueno-ritmo": 0.078,
                "G.interocepcion": 2.075,
                "P1.dominancia": 0.041,
                "P2.afiliación": 0.289,
                "J.juicio": 0.268,
                "I.insight": 0.594,
                "E.egodistonia": 0.187,
                "FUN.psp_utiles": 0.151,
                "FUN.psp_relaciones": 0.358,
                "FUN.psp_autocuidado": 0.165,
                "FUN.psp_disruptivas": -0.343,
                "NM.parakinesia_iterativa": 0.299
              },
              "signature": [
                {
                  "dim": "G.interocepcion",
                  "z": 2.07,
                  "dir": "alto"
                },
                {
                  "dim": "I.insight",
                  "z": 0.59,
                  "dir": "alto"
                },
                {
                  "dim": "NM.tremor",
                  "z": -0.49,
                  "dir": "bajo"
                },
                {
                  "dim": "F4.contenido",
                  "z": -0.49,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.frustración",
                  "z": -0.49,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.animo-meta",
                  "z": -0.47,
                  "dir": "bajo"
                },
                {
                  "dim": "F7.mentalización-otro",
                  "z": 0.43,
                  "dir": "alto"
                },
                {
                  "dim": "FUN.psp_relaciones",
                  "z": 0.36,
                  "dir": "alto"
                }
              ]
            }
          }
        },
        "B2_desregulacion": {
          "label": "Desregulacion emocional (borderline)",
          "replica_real": "NO - solo sintetico; se agrupa con estados mixtos",
          "dsm_colapsa": [
            "T. de personalidad limite (F60.3)"
          ],
          "centroid": {
            "NC.conciencia": -0.199,
            "NC.fluencia": 0.131,
            "NC.digit": -0.062,
            "NC.tmt": -0.119,
            "NC.clock": 0.303,
            "NC.recall": -0.179,
            "F1.expresividad": 1.407,
            "F2.velocidad": -0.238,
            "F2.sensorial": -0.581,
            "NM.luria": -0.381,
            "NM.dismetria": 0.071,
            "NM.alternancia": -0.248,
            "NM.tandem": 0.088,
            "NM.tic": -0.281,
            "NM.diskinesia": -0.589,
            "NM.distonia": -0.141,
            "NM.acatisia": 0.12,
            "NM.parkinsonismo": -0.009,
            "NM.tremor": 0.093,
            "F5.regulación": -1.261,
            "F3.tono": 0.356,
            "F3.anticipación": -0.087,
            "F3.drive": 0.082,
            "F4.experiencia": 0.485,
            "F4.contenido": -0.002,
            "F6.amenaza": 0.607,
            "F6.frustración": 0.942,
            "F6.animo-meta": -0.59,
            "F6.autoevaluación": -0.95,
            "F6.desesperanza": 0.514,
            "F7.testing": 0.179,
            "F7.auto-mentalización": -1.583,
            "F7.mentalización-otro": 0.166,
            "G.arousal": -0.289,
            "G.coherencia": 0.479,
            "G.sueno-ritmo": 0.275,
            "G.interocepcion": -0.147,
            "P1.dominancia": 0.041,
            "P2.afiliación": 0.025,
            "J.juicio": 0.179,
            "I.insight": 0.594,
            "E.egodistonia": 1.262,
            "FUN.psp_utiles": 0.151,
            "FUN.psp_relaciones": 0.504,
            "FUN.psp_autocuidado": -0.004,
            "FUN.psp_disruptivas": 0.698,
            "NM.parakinesia_iterativa": 0.299
          },
          "signature": [
            {
              "dim": "F7.auto-mentalización",
              "z": -1.58,
              "dir": "bajo"
            },
            {
              "dim": "F1.expresividad",
              "z": 1.41,
              "dir": "alto"
            },
            {
              "dim": "E.egodistonia",
              "z": 1.26,
              "dir": "alto"
            },
            {
              "dim": "F5.regulación",
              "z": -1.26,
              "dir": "bajo"
            },
            {
              "dim": "F6.autoevaluación",
              "z": -0.95,
              "dir": "bajo"
            },
            {
              "dim": "F6.frustración",
              "z": 0.94,
              "dir": "alto"
            },
            {
              "dim": "FUN.psp_disruptivas",
              "z": 0.7,
              "dir": "alto"
            },
            {
              "dim": "F6.amenaza",
              "z": 0.61,
              "dir": "alto"
            }
          ],
          "micro": {
            "TLP_borderline": {
              "label": "Personalidad limite (borderline)",
              "dsm": "T. de personalidad limite (F60.3)",
              "centroid": {
                "NC.conciencia": -0.199,
                "NC.fluencia": 0.131,
                "NC.digit": -0.062,
                "NC.tmt": -0.119,
                "NC.clock": 0.303,
                "NC.recall": -0.179,
                "F1.expresividad": 1.407,
                "F2.velocidad": -0.238,
                "F2.sensorial": -0.581,
                "NM.luria": -0.381,
                "NM.dismetria": 0.071,
                "NM.alternancia": -0.248,
                "NM.tandem": 0.088,
                "NM.tic": -0.281,
                "NM.diskinesia": -0.589,
                "NM.distonia": -0.141,
                "NM.acatisia": 0.12,
                "NM.parkinsonismo": -0.009,
                "NM.tremor": 0.093,
                "F5.regulación": -1.261,
                "F3.tono": 0.356,
                "F3.anticipación": -0.087,
                "F3.drive": 0.082,
                "F4.experiencia": 0.485,
                "F4.contenido": -0.002,
                "F6.amenaza": 0.607,
                "F6.frustración": 0.942,
                "F6.animo-meta": -0.59,
                "F6.autoevaluación": -0.95,
                "F6.desesperanza": 0.514,
                "F7.testing": 0.179,
                "F7.auto-mentalización": -1.583,
                "F7.mentalización-otro": 0.166,
                "G.arousal": -0.289,
                "G.coherencia": 0.479,
                "G.sueno-ritmo": 0.275,
                "G.interocepcion": -0.147,
                "P1.dominancia": 0.041,
                "P2.afiliación": 0.025,
                "J.juicio": 0.179,
                "I.insight": 0.594,
                "E.egodistonia": 1.262,
                "FUN.psp_utiles": 0.151,
                "FUN.psp_relaciones": 0.504,
                "FUN.psp_autocuidado": -0.004,
                "FUN.psp_disruptivas": 0.698,
                "NM.parakinesia_iterativa": 0.299
              },
              "signature": [
                {
                  "dim": "F7.auto-mentalización",
                  "z": -1.58,
                  "dir": "bajo"
                },
                {
                  "dim": "F1.expresividad",
                  "z": 1.41,
                  "dir": "alto"
                },
                {
                  "dim": "E.egodistonia",
                  "z": 1.26,
                  "dir": "alto"
                },
                {
                  "dim": "F5.regulación",
                  "z": -1.26,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.autoevaluación",
                  "z": -0.95,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.frustración",
                  "z": 0.94,
                  "dir": "alto"
                },
                {
                  "dim": "FUN.psp_disruptivas",
                  "z": 0.7,
                  "dir": "alto"
                },
                {
                  "dim": "F6.amenaza",
                  "z": 0.61,
                  "dir": "alto"
                }
              ]
            }
          }
        },
        "B3_desapego_negativo": {
          "label": "Desapego / negativo",
          "replica_real": "PARCIAL - polo negativo replica en psicosis; aterriza con depresion",
          "dsm_colapsa": [
            "Esquizofrenia, sintomas negativos (F20.5)",
            "T. del espectro autista (F84.0)"
          ],
          "centroid": {
            "NC.conciencia": 0.05,
            "NC.fluencia": -0.61,
            "NC.digit": 0.116,
            "NC.tmt": -0.27,
            "NC.clock": 0.358,
            "NC.recall": -0.598,
            "F1.expresividad": -1.356,
            "F2.velocidad": -0.558,
            "F2.sensorial": 0.097,
            "NM.luria": 0.241,
            "NM.dismetria": -0.247,
            "NM.alternancia": -0.155,
            "NM.tandem": -0.22,
            "NM.tic": -0.084,
            "NM.diskinesia": 0.057,
            "NM.distonia": 0.071,
            "NM.acatisia": 0.314,
            "NM.parkinsonismo": 0.081,
            "NM.tremor": -0.103,
            "F5.regulación": 0.828,
            "F3.tono": -0.69,
            "F3.anticipación": -0.897,
            "F3.drive": -0.811,
            "F4.experiencia": -0.224,
            "F4.contenido": -0.493,
            "F6.amenaza": -0.668,
            "F6.frustración": -0.129,
            "F6.animo-meta": 0.392,
            "F6.autoevaluación": -0.185,
            "F6.desesperanza": 0.012,
            "F7.testing": 0.405,
            "F7.auto-mentalización": -0.174,
            "F7.mentalización-otro": -1.152,
            "G.arousal": -0.513,
            "G.coherencia": -0.033,
            "G.sueno-ritmo": 0.144,
            "G.interocepcion": -0.218,
            "P1.dominancia": -0.265,
            "P2.afiliación": -0.37,
            "J.juicio": 0.313,
            "I.insight": 0.558,
            "E.egodistonia": -0.414,
            "FUN.psp_utiles": -0.729,
            "FUN.psp_relaciones": -1.138,
            "FUN.psp_autocuidado": 0.42,
            "FUN.psp_disruptivas": -0.103,
            "NM.parakinesia_iterativa": -0.309
          },
          "signature": [
            {
              "dim": "F1.expresividad",
              "z": -1.36,
              "dir": "bajo"
            },
            {
              "dim": "F7.mentalización-otro",
              "z": -1.15,
              "dir": "bajo"
            },
            {
              "dim": "FUN.psp_relaciones",
              "z": -1.14,
              "dir": "bajo"
            },
            {
              "dim": "F3.anticipación",
              "z": -0.9,
              "dir": "bajo"
            },
            {
              "dim": "F5.regulación",
              "z": 0.83,
              "dir": "alto"
            },
            {
              "dim": "F3.drive",
              "z": -0.81,
              "dir": "bajo"
            },
            {
              "dim": "FUN.psp_utiles",
              "z": -0.73,
              "dir": "bajo"
            },
            {
              "dim": "F3.tono",
              "z": -0.69,
              "dir": "bajo"
            }
          ],
          "micro": {
            "SZ_negativa": {
              "label": "Esquizofrenia negativa / deficit",
              "dsm": "Esquizofrenia, sintomas negativos (F20.5)",
              "centroid": {
                "NC.conciencia": -0.099,
                "NC.fluencia": -1.669,
                "NC.digit": 0.056,
                "NC.tmt": -0.922,
                "NC.clock": 0.414,
                "NC.recall": -1.54,
                "F1.expresividad": -1.469,
                "F2.velocidad": -1.135,
                "F2.sensorial": -0.51,
                "NM.luria": 0.152,
                "NM.dismetria": -0.354,
                "NM.alternancia": -0.248,
                "NM.tandem": -0.528,
                "NM.tic": -0.084,
                "NM.diskinesia": 0.334,
                "NM.distonia": -0.141,
                "NM.acatisia": 0.314,
                "NM.parkinsonismo": 0.349,
                "NM.tremor": 0.093,
                "F5.regulación": 0.151,
                "F3.tono": -1.81,
                "F3.anticipación": -1.495,
                "F3.drive": -1.407,
                "F4.experiencia": -0.224,
                "F4.contenido": -0.493,
                "F6.amenaza": -0.723,
                "F6.frustración": -0.058,
                "F6.animo-meta": 0.453,
                "F6.autoevaluación": -0.152,
                "F6.desesperanza": 0.012,
                "F7.testing": 0.33,
                "F7.auto-mentalización": 0.324,
                "F7.mentalización-otro": -1.086,
                "G.arousal": -0.609,
                "G.coherencia": 0.106,
                "G.sueno-ritmo": 0.144,
                "G.interocepcion": 0.068,
                "P1.dominancia": -0.449,
                "P2.afiliación": 0.421,
                "J.juicio": 0.358,
                "I.insight": 0.594,
                "E.egodistonia": -1.015,
                "FUN.psp_utiles": -1.522,
                "FUN.psp_relaciones": -1.248,
                "FUN.psp_autocuidado": 0.25,
                "FUN.psp_disruptivas": 0.057,
                "NM.parakinesia_iterativa": 0.096
              },
              "signature": [
                {
                  "dim": "F3.tono",
                  "z": -1.81,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.fluencia",
                  "z": -1.67,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.recall",
                  "z": -1.54,
                  "dir": "bajo"
                },
                {
                  "dim": "FUN.psp_utiles",
                  "z": -1.52,
                  "dir": "bajo"
                },
                {
                  "dim": "F3.anticipación",
                  "z": -1.5,
                  "dir": "bajo"
                },
                {
                  "dim": "F1.expresividad",
                  "z": -1.47,
                  "dir": "bajo"
                },
                {
                  "dim": "F3.drive",
                  "z": -1.41,
                  "dir": "bajo"
                },
                {
                  "dim": "FUN.psp_relaciones",
                  "z": -1.25,
                  "dir": "bajo"
                }
              ]
            },
            "Autismo": {
              "label": "Autismo",
              "dsm": "T. del espectro autista (F84.0)",
              "centroid": {
                "NC.conciencia": 0.199,
                "NC.fluencia": 0.449,
                "NC.digit": 0.175,
                "NC.tmt": 0.382,
                "NC.clock": 0.303,
                "NC.recall": 0.344,
                "F1.expresividad": -1.244,
                "F2.velocidad": 0.018,
                "F2.sensorial": 0.703,
                "NM.luria": 0.33,
                "NM.dismetria": -0.141,
                "NM.alternancia": -0.062,
                "NM.tandem": 0.088,
                "NM.tic": -0.084,
                "NM.diskinesia": -0.22,
                "NM.distonia": 0.283,
                "NM.acatisia": 0.314,
                "NM.parkinsonismo": -0.187,
                "NM.tremor": -0.298,
                "F5.regulación": 1.506,
                "F3.tono": 0.43,
                "F3.anticipación": -0.298,
                "F3.drive": -0.216,
                "F4.experiencia": -0.224,
                "F4.contenido": -0.493,
                "F6.amenaza": -0.612,
                "F6.frustración": -0.201,
                "F6.animo-meta": 0.33,
                "F6.autoevaluación": -0.218,
                "F6.desesperanza": 0.012,
                "F7.testing": 0.481,
                "F7.auto-mentalización": -0.671,
                "F7.mentalización-otro": -1.218,
                "G.arousal": -0.417,
                "G.coherencia": -0.173,
                "G.sueno-ritmo": 0.144,
                "G.interocepcion": -0.505,
                "P1.dominancia": -0.082,
                "P2.afiliación": -1.161,
                "J.juicio": 0.268,
                "I.insight": 0.522,
                "E.egodistonia": 0.187,
                "FUN.psp_utiles": 0.063,
                "FUN.psp_relaciones": -1.029,
                "FUN.psp_autocuidado": 0.589,
                "FUN.psp_disruptivas": -0.263,
                "NM.parakinesia_iterativa": -0.713
              },
              "signature": [
                {
                  "dim": "F5.regulación",
                  "z": 1.51,
                  "dir": "alto"
                },
                {
                  "dim": "F1.expresividad",
                  "z": -1.24,
                  "dir": "bajo"
                },
                {
                  "dim": "F7.mentalización-otro",
                  "z": -1.22,
                  "dir": "bajo"
                },
                {
                  "dim": "P2.afiliación",
                  "z": -1.16,
                  "dir": "bajo"
                },
                {
                  "dim": "FUN.psp_relaciones",
                  "z": -1.03,
                  "dir": "bajo"
                },
                {
                  "dim": "NM.parakinesia_iterativa",
                  "z": -0.71,
                  "dir": "bajo"
                },
                {
                  "dim": "F2.sensorial",
                  "z": 0.7,
                  "dir": "alto"
                },
                {
                  "dim": "F7.auto-mentalización",
                  "z": -0.67,
                  "dir": "bajo"
                }
              ]
            }
          }
        },
        "B4_neurocognitivo": {
          "label": "Desorganizacion neurocognitiva",
          "replica_real": "PARCIAL - eje cognitivo; SZ-desorg se agrupa con demencia, no con psicosis+",
          "dsm_colapsa": [
            "Esquizofrenia, desorganizada (F20.1)",
            "T. neurocognitivo mayor / demencia (F03.x)"
          ],
          "centroid": {
            "NC.conciencia": -0.348,
            "NC.fluencia": -1.616,
            "NC.digit": -0.774,
            "NC.tmt": -1.523,
            "NC.clock": -1.76,
            "NC.recall": -1.016,
            "F1.expresividad": -0.059,
            "F2.velocidad": -0.174,
            "F2.sensorial": 0.168,
            "NM.luria": -0.025,
            "NM.dismetria": -0.141,
            "NM.alternancia": 0.031,
            "NM.tandem": 0.191,
            "NM.tic": 0.014,
            "NM.diskinesia": -0.035,
            "NM.distonia": -0.354,
            "NM.acatisia": 0.12,
            "NM.parkinsonismo": -0.098,
            "NM.tremor": 0.093,
            "F5.regulación": -0.64,
            "F3.tono": 0.206,
            "F3.anticipación": -0.052,
            "F3.drive": -0.365,
            "F4.experiencia": -0.002,
            "F4.contenido": 0.421,
            "F6.amenaza": -0.668,
            "F6.frustración": -0.344,
            "F6.animo-meta": 0.361,
            "F6.autoevaluación": 0.047,
            "F6.desesperanza": 0.221,
            "F7.testing": -0.612,
            "F7.auto-mentalización": 0.282,
            "F7.mentalización-otro": 0.397,
            "G.arousal": -0.513,
            "G.coherencia": -1.058,
            "G.sueno-ritmo": 0.013,
            "G.interocepcion": -0.362,
            "P1.dominancia": -0.143,
            "P2.afiliación": 0.355,
            "J.juicio": -1.609,
            "I.insight": -1.028,
            "E.egodistonia": 0.187,
            "FUN.psp_utiles": 0.415,
            "FUN.psp_relaciones": 0.322,
            "FUN.psp_autocuidado": -1.063,
            "FUN.psp_disruptivas": -0.423,
            "NM.parakinesia_iterativa": -0.106
          },
          "signature": [
            {
              "dim": "NC.clock",
              "z": -1.76,
              "dir": "bajo"
            },
            {
              "dim": "NC.fluencia",
              "z": -1.62,
              "dir": "bajo"
            },
            {
              "dim": "J.juicio",
              "z": -1.61,
              "dir": "bajo"
            },
            {
              "dim": "NC.tmt",
              "z": -1.52,
              "dir": "bajo"
            },
            {
              "dim": "FUN.psp_autocuidado",
              "z": -1.06,
              "dir": "bajo"
            },
            {
              "dim": "G.coherencia",
              "z": -1.06,
              "dir": "bajo"
            },
            {
              "dim": "I.insight",
              "z": -1.03,
              "dir": "bajo"
            },
            {
              "dim": "NC.recall",
              "z": -1.02,
              "dir": "bajo"
            }
          ],
          "micro": {
            "SZ_desorganizada": {
              "label": "Esquizofrenia desorganizada",
              "dsm": "Esquizofrenia, desorganizada (F20.1)",
              "centroid": {
                "NC.conciencia": 0.099,
                "NC.fluencia": -1.669,
                "NC.digit": 0.294,
                "NC.tmt": -1.523,
                "NC.clock": -1.592,
                "NC.recall": 0.448,
                "F1.expresividad": -0.059,
                "F2.velocidad": -0.174,
                "F2.sensorial": 0.846,
                "NM.luria": -0.025,
                "NM.dismetria": -0.354,
                "NM.alternancia": -0.062,
                "NM.tandem": 0.294,
                "NM.tic": -0.281,
                "NM.diskinesia": -0.22,
                "NM.distonia": -0.566,
                "NM.acatisia": 0.12,
                "NM.parkinsonismo": -0.187,
                "NM.tremor": 0.093,
                "F5.regulación": -1.261,
                "F3.tono": 0.281,
                "F3.anticipación": -0.087,
                "F3.drive": 0.082,
                "F4.experiencia": -0.224,
                "F4.contenido": 1.246,
                "F6.amenaza": -0.557,
                "F6.frustración": -0.415,
                "F6.animo-meta": 0.33,
                "F6.autoevaluación": 0.114,
                "F6.desesperanza": 0.179,
                "F7.testing": -1.779,
                "F7.auto-mentalización": 0.241,
                "F7.mentalización-otro": 0.232,
                "G.arousal": -0.609,
                "G.coherencia": -2.315,
                "G.sueno-ritmo": -0.053,
                "G.interocepcion": -0.505,
                "P1.dominancia": -0.204,
                "P2.afiliación": 0.421,
                "J.juicio": -1.788,
                "I.insight": -1.136,
                "E.egodistonia": 0.06,
                "FUN.psp_utiles": 0.327,
                "FUN.psp_relaciones": 0.431,
                "FUN.psp_autocuidado": -2.376,
                "FUN.psp_disruptivas": -0.343,
                "NM.parakinesia_iterativa": 0.096
              },
              "signature": [
                {
                  "dim": "FUN.psp_autocuidado",
                  "z": -2.38,
                  "dir": "bajo"
                },
                {
                  "dim": "G.coherencia",
                  "z": -2.32,
                  "dir": "bajo"
                },
                {
                  "dim": "J.juicio",
                  "z": -1.79,
                  "dir": "bajo"
                },
                {
                  "dim": "F7.testing",
                  "z": -1.78,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.fluencia",
                  "z": -1.67,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.clock",
                  "z": -1.59,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.tmt",
                  "z": -1.52,
                  "dir": "bajo"
                },
                {
                  "dim": "F5.regulación",
                  "z": -1.26,
                  "dir": "bajo"
                }
              ]
            },
            "Deterioro_cognitivo": {
              "label": "Deterioro cognitivo / demencia",
              "dsm": "T. neurocognitivo mayor / demencia (F03.x)",
              "centroid": {
                "NC.conciencia": -0.795,
                "NC.fluencia": -1.563,
                "NC.digit": -1.842,
                "NC.tmt": -1.523,
                "NC.clock": -1.927,
                "NC.recall": -2.481,
                "F1.expresividad": -0.059,
                "F2.velocidad": -0.174,
                "F2.sensorial": -0.51,
                "NM.luria": -0.025,
                "NM.dismetria": 0.071,
                "NM.alternancia": 0.124,
                "NM.tandem": 0.088,
                "NM.tic": 0.309,
                "NM.diskinesia": 0.15,
                "NM.distonia": -0.141,
                "NM.acatisia": 0.12,
                "NM.parkinsonismo": -0.009,
                "NM.tremor": 0.093,
                "F5.regulación": -0.019,
                "F3.tono": 0.132,
                "F3.anticipación": -0.017,
                "F3.drive": -0.811,
                "F4.experiencia": 0.219,
                "F4.contenido": -0.403,
                "F6.amenaza": -0.779,
                "F6.frustración": -0.272,
                "F6.animo-meta": 0.392,
                "F6.autoevaluación": -0.019,
                "F6.desesperanza": 0.263,
                "F7.testing": 0.556,
                "F7.auto-mentalización": 0.324,
                "F7.mentalización-otro": 0.562,
                "G.arousal": -0.417,
                "G.coherencia": 0.2,
                "G.sueno-ritmo": 0.078,
                "G.interocepcion": -0.218,
                "P1.dominancia": -0.082,
                "P2.afiliación": 0.289,
                "J.juicio": -1.43,
                "I.insight": -0.92,
                "E.egodistonia": 0.313,
                "FUN.psp_utiles": 0.503,
                "FUN.psp_relaciones": 0.212,
                "FUN.psp_autocuidado": 0.25,
                "FUN.psp_disruptivas": -0.503,
                "NM.parakinesia_iterativa": -0.309
              },
              "signature": [
                {
                  "dim": "NC.recall",
                  "z": -2.48,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.clock",
                  "z": -1.93,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.digit",
                  "z": -1.84,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.fluencia",
                  "z": -1.56,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.tmt",
                  "z": -1.52,
                  "dir": "bajo"
                },
                {
                  "dim": "J.juicio",
                  "z": -1.43,
                  "dir": "bajo"
                },
                {
                  "dim": "I.insight",
                  "z": -0.92,
                  "dir": "bajo"
                },
                {
                  "dim": "F3.drive",
                  "z": -0.81,
                  "dir": "bajo"
                }
              ]
            }
          }
        },
        "B5_neurodesarrollo": {
          "label": "Neurodesarrollo desinhibido",
          "replica_real": "PARCIAL - cae con leves/controles (poca carga de estado)",
          "dsm_colapsa": [
            "TDAH (F90.x)"
          ],
          "centroid": {
            "NC.conciencia": 0.199,
            "NC.fluencia": 0.131,
            "NC.digit": -1.13,
            "NC.tmt": -0.821,
            "NC.clock": -0.143,
            "NC.recall": 0.239,
            "F1.expresividad": -0.115,
            "F2.velocidad": 1.043,
            "F2.sensorial": -0.367,
            "NM.luria": -0.025,
            "NM.dismetria": 0.283,
            "NM.alternancia": -0.248,
            "NM.tandem": 0.294,
            "NM.tic": 0.112,
            "NM.diskinesia": 0.15,
            "NM.distonia": 0.071,
            "NM.acatisia": -0.657,
            "NM.parkinsonismo": 0.349,
            "NM.tremor": 0.093,
            "F5.regulación": -1.544,
            "F3.tono": -0.167,
            "F3.anticipación": 0.335,
            "F3.drive": 0.44,
            "F4.experiencia": -0.666,
            "F4.contenido": -0.448,
            "F6.amenaza": -0.612,
            "F6.frustración": -0.201,
            "F6.animo-meta": -0.099,
            "F6.autoevaluación": -0.019,
            "F6.desesperanza": -0.072,
            "F7.testing": 0.33,
            "F7.auto-mentalización": 0.324,
            "F7.mentalización-otro": 0.562,
            "G.arousal": -0.481,
            "G.coherencia": 0.106,
            "G.sueno-ritmo": 0.013,
            "G.interocepcion": -0.003,
            "P1.dominancia": -0.204,
            "P2.afiliación": 0.552,
            "J.juicio": 0.179,
            "I.insight": 0.089,
            "E.egodistonia": 0.566,
            "FUN.psp_utiles": -1.346,
            "FUN.psp_relaciones": 0.504,
            "FUN.psp_autocuidado": 0.081,
            "FUN.psp_disruptivas": -0.263,
            "NM.parakinesia_iterativa": 0.096
          },
          "signature": [
            {
              "dim": "F5.regulación",
              "z": -1.54,
              "dir": "bajo"
            },
            {
              "dim": "FUN.psp_utiles",
              "z": -1.35,
              "dir": "bajo"
            },
            {
              "dim": "NC.digit",
              "z": -1.13,
              "dir": "bajo"
            },
            {
              "dim": "F2.velocidad",
              "z": 1.04,
              "dir": "alto"
            },
            {
              "dim": "NC.tmt",
              "z": -0.82,
              "dir": "bajo"
            },
            {
              "dim": "F4.experiencia",
              "z": -0.67,
              "dir": "bajo"
            },
            {
              "dim": "NM.acatisia",
              "z": -0.66,
              "dir": "bajo"
            },
            {
              "dim": "F6.amenaza",
              "z": -0.61,
              "dir": "bajo"
            }
          ],
          "micro": {
            "TDAH": {
              "label": "TDAH",
              "dsm": "TDAH (F90.x)",
              "centroid": {
                "NC.conciencia": 0.199,
                "NC.fluencia": 0.131,
                "NC.digit": -1.13,
                "NC.tmt": -0.821,
                "NC.clock": -0.143,
                "NC.recall": 0.239,
                "F1.expresividad": -0.115,
                "F2.velocidad": 1.043,
                "F2.sensorial": -0.367,
                "NM.luria": -0.025,
                "NM.dismetria": 0.283,
                "NM.alternancia": -0.248,
                "NM.tandem": 0.294,
                "NM.tic": 0.112,
                "NM.diskinesia": 0.15,
                "NM.distonia": 0.071,
                "NM.acatisia": -0.657,
                "NM.parkinsonismo": 0.349,
                "NM.tremor": 0.093,
                "F5.regulación": -1.544,
                "F3.tono": -0.167,
                "F3.anticipación": 0.335,
                "F3.drive": 0.44,
                "F4.experiencia": -0.666,
                "F4.contenido": -0.448,
                "F6.amenaza": -0.612,
                "F6.frustración": -0.201,
                "F6.animo-meta": -0.099,
                "F6.autoevaluación": -0.019,
                "F6.desesperanza": -0.072,
                "F7.testing": 0.33,
                "F7.auto-mentalización": 0.324,
                "F7.mentalización-otro": 0.562,
                "G.arousal": -0.481,
                "G.coherencia": 0.106,
                "G.sueno-ritmo": 0.013,
                "G.interocepcion": -0.003,
                "P1.dominancia": -0.204,
                "P2.afiliación": 0.552,
                "J.juicio": 0.179,
                "I.insight": 0.089,
                "E.egodistonia": 0.566,
                "FUN.psp_utiles": -1.346,
                "FUN.psp_relaciones": 0.504,
                "FUN.psp_autocuidado": 0.081,
                "FUN.psp_disruptivas": -0.263,
                "NM.parakinesia_iterativa": 0.096
              },
              "signature": [
                {
                  "dim": "F5.regulación",
                  "z": -1.54,
                  "dir": "bajo"
                },
                {
                  "dim": "FUN.psp_utiles",
                  "z": -1.35,
                  "dir": "bajo"
                },
                {
                  "dim": "NC.digit",
                  "z": -1.13,
                  "dir": "bajo"
                },
                {
                  "dim": "F2.velocidad",
                  "z": 1.04,
                  "dir": "alto"
                },
                {
                  "dim": "NC.tmt",
                  "z": -0.82,
                  "dir": "bajo"
                },
                {
                  "dim": "F4.experiencia",
                  "z": -0.67,
                  "dir": "bajo"
                },
                {
                  "dim": "NM.acatisia",
                  "z": -0.66,
                  "dir": "bajo"
                },
                {
                  "dim": "F6.amenaza",
                  "z": -0.61,
                  "dir": "bajo"
                }
              ]
            }
          }
        }
      }
    }
  }
};

var NORM = {
  "E.egodistonia": {
    "mean": -0.1829,
    "sd": 0.926
  },
  "F1.expresividad": {
    "mean": 0.0638,
    "sd": 1.0308
  },
  "F2.sensorial": {
    "mean": 0.3025,
    "sd": 0.798
  },
  "F2.velocidad": {
    "mean": 0.1619,
    "sd": 0.8979
  },
  "F3.anticipación": {
    "mean": -0.0461,
    "sd": 0.8234
  },
  "F3.drive": {
    "mean": -0.0815,
    "sd": 0.9608
  },
  "F3.tono": {
    "mean": -0.1652,
    "sd": 0.7706
  },
  "F4.contenido": {
    "mean": 0.831,
    "sd": 1.2692
  },
  "F4.experiencia": {
    "mean": 0.0309,
    "sd": 0.6462
  },
  "F5.regulación": {
    "mean": -0.1609,
    "sd": 1.0241
  },
  "F6.amenaza": {
    "mean": 0.648,
    "sd": 1.0189
  },
  "F6.animo-meta": {
    "mean": -0.2006,
    "sd": 0.9339
  },
  "F6.autoevaluación": {
    "mean": 0.1412,
    "sd": 0.8799
  },
  "F6.desesperanza": {
    "mean": -0.1864,
    "sd": 0.6842
  },
  "F6.frustración": {
    "mean": 0.3389,
    "sd": 0.7935
  },
  "F7.auto-mentalización": {
    "mean": -0.1143,
    "sd": 0.6958
  },
  "F7.mentalización-otro": {
    "mean": -0.3222,
    "sd": 0.8606
  },
  "F7.testing": {
    "mean": -0.2,
    "sd": 0.7595
  },
  "FUN.psp_autocuidado": {
    "mean": -0.1235,
    "sd": 0.6984
  },
  "FUN.psp_disruptivas": {
    "mean": 0.1404,
    "sd": 0.728
  },
  "FUN.psp_relaciones": {
    "mean": -0.3029,
    "sd": 0.7967
  },
  "FUN.psp_utiles": {
    "mean": -0.1101,
    "sd": 0.6774
  },
  "G.arousal": {
    "mean": 0.3838,
    "sd": 0.8894
  },
  "G.coherencia": {
    "mean": -0.0688,
    "sd": 0.6204
  },
  "G.interocepcion": {
    "mean": 0.1778,
    "sd": 0.7934
  },
  "G.sueno-ritmo": {
    "mean": -0.1311,
    "sd": 0.877
  },
  "I.insight": {
    "mean": -0.5972,
    "sd": 0.7792
  },
  "J.juicio": {
    "mean": -0.383,
    "sd": 0.6517
  },
  "NC.clock": {
    "mean": -0.2609,
    "sd": 0.5476
  },
  "NC.conciencia": {
    "mean": 0,
    "sd": 0.6251
  },
  "NC.digit": {
    "mean": -0.2535,
    "sd": 0.5221
  },
  "NC.fluencia": {
    "mean": -0.3017,
    "sd": 0.5768
  },
  "NC.recall": {
    "mean": -0.298,
    "sd": 0.5788
  },
  "NC.tmt": {
    "mean": -0.3401,
    "sd": 0.6048
  },
  "NM.acatisia": {
    "mean": -0.1459,
    "sd": 0.353
  },
  "NM.alternancia": {
    "mean": -0.1509,
    "sd": 0.3698
  },
  "NM.diskinesia": {
    "mean": -0.1776,
    "sd": 0.3822
  },
  "NM.dismetria": {
    "mean": -0.1279,
    "sd": 0.3339
  },
  "NM.distonia": {
    "mean": -0.1321,
    "sd": 0.3386
  },
  "NM.luria": {
    "mean": -0.1674,
    "sd": 0.3846
  },
  "NM.parkinsonismo": {
    "mean": -0.1783,
    "sd": 0.3827
  },
  "NM.tandem": {
    "mean": -0.1282,
    "sd": 0.3343
  },
  "NM.tic": {
    "mean": -0.1352,
    "sd": 0.342
  },
  "NM.tremor": {
    "mean": -0.1342,
    "sd": 0.3533
  },
  "P1.dominancia": {
    "mean": 0.1977,
    "sd": 0.936
  },
  "P2.afiliación": {
    "mean": -0.3702,
    "sd": 0.8578
  },
  "NM.parakinesia_iterativa": {
    "mean": -0.1303,
    "sd": 0.3366
  }
};

function buildPhenotypeVector() {
  const vec = {};
  if (typeof PHENO === 'undefined' || !PHENO) return vec;
  for (const dim of PHENO.dims) {
    const s = (typeof state !== 'undefined' && state[dim]) ? state[dim].score : undefined;
    if (s === undefined || s === null || s === 'NE' || Number.isNaN(+s)) continue;
    vec[dim] = +s;
  }
  return vec;
}

function renderPhenotypeBlock(_vec) {
  if (typeof PHENO === 'undefined' || typeof matchPhenotype !== 'function') return '';
  const vec = _vec || buildPhenotypeVector();
  const res = matchPhenotype(vec, PHENO, (typeof NORM !== 'undefined') ? { norm: NORM } : {});

  let body;
  if (res.confianza === 'insuficiente' || !res.micro) {
    body = `<div class="pheno-empty">Puntúa ≥4 dimensiones para sugerir fenotipo (van ${res.dims_evaluadas || 0}).</div>`;
  } else {
    const isReal = s => /^SI/i.test(s || '');
    const code = d => (String(d).match(/\(([^)]+)\)/) || ['', ''])[1];
    const pills = (items, withDsm) => items.map((a, i) => {
      const real = isReal(a.replica);
      return `<div class="pill rank-${i+1} ${real ? '' : 'sim-only'}"
                 title="${withDsm && a.dsm ? a.dsm + ' · ' : ''}r=${a.r} · ${real ? 'validado real' : 'solo sim'}">
        <span class="pk">${i+1}</span>
        <span class="dt" style="background:${real ? '#15803d' : '#cbd5e1'}"></span>
        <span class="lb">${a.label}${withDsm && a.dsm ? `<span class="dsm">${code(a.dsm)}</span>` : ''}</span>
        <span class="pc">${a.pct}%</span>
      </div>`;
    }).join('');

    const conf = res.confianza.split(' ')[0];
    const egoShort = res.egoFlag && res.egoFlag !== 'ego neutro' ? res.egoFlag.split(' (')[0] : '';
    const macroReal = isReal(res.meso.replica_real);

    body = `
      <div class="pheno-sev">
        <span class="pheno-sev-lbl">Severidad</span>
        <span class="pheno-sev-bar"><span class="pheno-sev-fill" style="width:${res.severidad.pct}%"></span></span>
        <span class="pheno-sev-val">${res.severidad.nota.split(' (')[0]}</span>
      </div>
      <div class="pheno-meta">
        <span class="pm-tag pm-conf-${conf}">conf. ${conf}</span>
        ${egoShort ? `<span class="pm-tag pm-ego">${egoShort}</span>` : ''}
        <span class="pm-tag ${macroReal ? 'pm-real' : 'pm-sim'}">${macroReal ? 'validado real' : 'solo sim'}</span>
      </div>

      <div class="lvl-macro">
        <div class="lvl-label"><span class="lvl-tag">MACRO</span></div>
        <div class="pill-macro"><span class="lb">${res.macro.label}</span><span class="pc">${res.macro.pct}%</span></div>
      </div>

      <div class="lvl-meso">
        <div class="lvl-label"><span class="lvl-tag">MESO</span><span class="lvl-sub">espectro · top 3</span></div>
        <div class="pills">${pills(res.mesosTop, false)}</div>
      </div>

      <div class="lvl-micro">
        <div class="lvl-label"><span class="lvl-tag">MICRO</span><span class="lvl-sub">fenotipo + DSM · top 5 · ● real</span></div>
        <div class="pills">${pills(res.alternativas, true)}</div>
      </div>

      <div class="pheno-foot">Sugerencia dimensional — no es diagnóstico. ${res.dims_evaluadas} dims.</div>`;
  }

  return `
    <section class="dash-panel dash-pheno pheno-block">
      <div class="dash-panel-head"><h2>Fenotipo</h2><div class="dash-sub">macro · meso · micro · DSM</div></div>
      <div class="dash-body">${body}</div>
    </section>`;
}

function refreshPhenotypeBlock() {
  const old = document.querySelector('.dash-pheno');
  if (!old) return;
  const tmp = document.createElement('div');
  tmp.innerHTML = renderPhenotypeBlock();
  old.replaceWith(tmp.firstElementChild);
}

if (typeof module!=='undefined') module.exports={matchPhenotype,PHENO,NORM,renderPhenotypeBlock,buildPhenotypeVector};
