# mini-PRD — Intake Unificado del Paciente (4 instrumentos → 1 formato + dashboard maestro)

> Escalado SPEC → mini-PRD por Luci. **Razón:** coordinación entre 4 apps maduras
> ya en producción, reuso de ~1.1 MB de código working, decisiones con tradeoffs de
> arquitectura (aislamiento JS/CSS), y un dashboard maestro que es síntesis clínica
> nueva (no collage). Riesgo: medio. Sensibilidad: ninguna (sin datos de paciente embebidos).
> **Autor:** Javier Flores-Cohaila (con Luci) · **Fecha:** 2026-05-31

---

## 1. Qué es

Un **único formato de captura del paciente** que reúne los 4 instrumentos existentes
—lo que se toma del paciente— bajo una sola identidad compartida, con **un dashboard
maestro integrado** + los **4 dashboards originales** preservados intactos.

Los 4 no son 4 herramientas: son **los 4 actos de una sola historia clínica** sobre un
eje causal-temporal.

| Acto | Instrumento (archivo) | Pregunta | Métrica headline |
|---|---|---|---|
| ① **Predisposición** (upstream) | Exposome Note · `exposome-app/exposome-scorer.html` | ¿Qué lo predispuso? | **ICE** + ACE-10 + CHR-P + suicidalidad lifetime |
| ② **Trayectoria** (longitudinal) | Functioning · `exposome_functioning/exposome_functioning_app.html` | ¿Cómo funcionó toda la vida? | **media actual 0–6** + cuadrante exposómico + ejes-alarma + patrón McAdams |
| ③ **Curso** (narrativo) | Exp_Hist · `exp_hist/exp-hist-app.html` | ¿Cómo llegó hasta aquí? | **curso** + nº episodios + **safety gate** |
| ④ **Estado** (transversal) | bMSE Yachay · `book-bmse/proposal/pmse-scorer-fenotipos.html` | ¿Cómo está hoy? | **Gate Conciencia** + fenotipo macro + 3ST suicidio + PSP |

---

## 2. Decisión de arquitectura (la pieza dura)

**Problema:** las 4 apps son maduras e independientes y **colisionan** si se mezclan en un
solo scope:

- **JS globals idénticos** en las 4: `state`, `save`, `load`, `renderProfile`, `DEMOS`,
  `init`, `showView`, `updateProgress`… (verificado en los 4 `jsKeyGlobals`).
- **CSS global idéntico:** `:root` con las mismas variables, clases genéricas
  (`.nav-chip`, `.dash-panel`, `.sec-hidden`, `.progress`). Fusionadas en un documento,
  los estilos se pisan.

**Veredicto (Taleb — downside acotado):** **Shell con iframes.** Cada app vive en su iframe
→ aislamiento total de JS y CSS **sin reescribir nada**. Las 4 siguen funcionando standalone.
El shell es un archivo nuevo; el dashboard maestro es una vista nueva (la 5ª). Los "4
dashboards separados" que pidió Javier = las 4 apps tal cual, una por pestaña.

Descartado:
- **Archivo único fusionado** (inline de los 4 JS+CSS): rework alto por colisiones JS/CSS,
  exactamente la trampa de la "tarea más difícil". Downside no acotado.
- **Reescritura a módulos ES:** tira código working; esfuerzo masivo. ❌ Taleb.

## 3. Puente de integración (lo único que se toca de las 4 apps — aditivo, no rompe nada)

Cada app recibe un bloque pequeño (`<script>` aditivo al final, ~15–25 líneas):

1. **`window.JAFLO_SUMMARY()`** → devuelve sus métricas headline llamando a sus PROPIAS
   funciones ya existentes (ICE, currentMean/quadrant, safety/curso, Gate Conciencia/fenotipo).
   Cero duplicación de lógica de scoring.
2. **Intake de identidad:** al cargar, lee `{codigo, edad/age, sexo, fecha, evaluador}` del
   padre (postMessage o `localStorage` compartido en origen `file://`) y prefilla.
3. **`postMessage('JAFLO_CHANGED')`** al guardar → el shell refresca el dashboard maestro live.

Las 4 apps siguen abriéndose solas y guardando en su propia key. El shell **no** las rompe.

## 4. Registro unificado del paciente

Una sola fuente de identidad, propagada a las 4 (hoy cada una la recaptura distinto):

```
PATIENT = {
  meta:   { codigo, edad, sexo, fecha, evaluador, setting, fuente, confiabilidad },
  // las 4 apps siguen guardando su propio estado en su key; el shell solo posee la identidad
  _keys:  { exposome:'exposome_scorer_v1', functioning:'expfx_state_v5',
            history:'expHistApp_v2', bmse:'bmse_state_v2' },
  _ts, _version:'unifiedPatient_v1'
}
```
**Mayor win de integración:** `edad`/`sexo` capturados UNA vez → `age` alimenta las etapas
de Functioning, `sexo`+`edad` alimentan Exposoma, etc.

## 5. Dashboard maestro (síntesis, no collage)

Orden de lectura (de arriba a abajo):

1. **Identidad** del paciente (barra).
2. **COMPUERTA DE VALIDEZ — Gate Conciencia** (la prueba de oro). Verde si `NC.conciencia=0`
   → lectura transversal válida. Rojo si ≠0 → "descartar delirium/orgánico; el resto no es
   interpretable a valor facial" + overlay de cautela sobre los paneles de Estado.
3. **Los 4 actos** en una fila: ICE → media funcional/cuadrante → curso/episodios/safety → fenotipo.
4. **CONVERGENCIAS (el oro — lente Hannibal):** lo que ninguna app sola ve.
   - **Dosis-respuesta:** ICE (carga) ↔ cuadrante funcional → ¿el deterioro es congruente con la
     carga ambiental, o intrínseco/neurodesarrollo? (ICE pasa a ser el eje-X del cuadrante).
   - **Seguridad triangulada:** safety (Historia) + suicidalidad lifetime (Exposoma) + 3ST (bMSE)
     → **un** verdicto de riesgo.
   - **Estado vs curso:** fenotipo (ahora) vs forma de trayectoria vs curso → agudo / agudo-sobre-
     crónico / primer episodio / progresivo.
   - **Fenotipo vs p-factor lifetime:** macro bMSE ↔ factor-p del exposoma → coherencia transv./long.
5. **Timeline integrado** (edad en X): eventos exposómicos + trayectoria 7 ejes + episodios + "ahora".
6. Botones a los **4 dashboards completos**.

## 6. Fuera de v1
- Sin export PDF (los export de texto/HTML de cada app se conservan).
- Sin cálculo probabilístico nuevo (se respeta el "burden heurístico" del exposoma).
- Sin deploy (local `file://`).
- Sin reescribir la lógica de scoring de ninguna app.

## 7. Aceptación
- [ ] Identidad capturada una vez se propaga y prefilla en las 4 apps.
- [ ] Las 4 apps siguen funcionando standalone (puente aditivo no rompe nada).
- [ ] Dashboard maestro muestra Gate Conciencia como compuerta de validez con overlay de cautela.
- [ ] Los 4 paneles de acto muestran las métricas headline reales (vía `JAFLO_SUMMARY()`).
- [ ] Panel de convergencias con las 4 lecturas cruzadas.
- [ ] 4 pestañas = los 4 dashboards originales intactos.
- [ ] Estética: un único token set sepia canónico (anchor = bMSE Yachay: `#1a140d / #c89b4f / #6e9b8f`).

## 8. Deuda / decisión abierta
- **Reconciliación de tokens:** exp_hist (`#191410/#d8a23f`) y functioning (`#1f1a14/#c79a4e`)
  usan variantes sepia ligeramente distintas al anchor bMSE/exposoma (`#1a140d/#c89b4f`). El
  shell adopta el anchor; las apps en iframe conservan el suyo (diferencia mínima, aceptable v1).
- **Canal de datos en `file://`:** Chrome comparte `localStorage` por origen `file://`;
  Firefox/Safari varían. Canal primario = postMessage; fallback = localStorage compartido.
  Target asumido: Chrome.

---

> **Adenda 2026-05-31 — decisiones de producción.** Resueltas las 2 decisiones que
> bloqueaban producción (Javier): **(1)** tríada de seguridad → consolidar en bMSE EXT
> (§10). **(2)** zonas ciegas → 2ª pasada de dedup ejecutada (§11). El modelo `shared`
> canónico queda fijado en §9. A partir de aquí arranca la producción single-file.

## 9. Modelo de datos `shared` (la fuente única)

El shell (top `file://`) posee el registro. Tres namespaces:

```
PATIENT = {
  meta:   { codigo, edad, sexo, fecha, evaluador, setting, fuente, confiabilidad,
            educacion, ses, estadoCivil, etnia, ocupacion },   // identidad + socio (§11.C)
  shared: { … 8 campos DUPLICATE, ver tabla … },               // capturar-una-vez, last-write-wins
  // las 4 apps siguen guardando su estado completo en su key (iframe srcdoc → shim)
  _keys:  { exposome:'exposome_scorer_v1', functioning:'expfx_state_v5',
            history:'expHistApp_v2', bmse:'bmse_state_v2' },
  _ts, _version:'unifiedPatient_v2'
}
```

**Regla `shared` (solo clase DUPLICATE):** campo único, editable desde cualquier app,
**last-write-wins por timestamp**, insignia de procedencia (`↩ sincronizado desde X · hace Nm`),
widgets bindeados bidireccional. Se guarda la **escala más rica** y se **proyecta hacia abajo**
a las escalas pobres de las demás apps. **Prohibido** aplicar binding a SHARED_TEMPORAL (§ guardrails).

### Los 8 campos DUPLICATE (escala canónica + proyección)

| Campo | Dueño canónico | Escala canónica (rica) | Proyección hacia abajo |
|---|---|---|---|
| `edad` | barra identidad | número (años actuales) | → `#pAge`, `#ageInput`, etapas functioning. **NO** alimenta edad-de-inicio (SHARED_TEMPORAL) |
| `evaluador` | barra identidad | texto | espejo read-only en exposoma/exp_hist |
| `intento_suicida_lifetime` | **bMSE `EXT.intento_previo`** | `NO / LEJANO / RECIENTE` (alimenta 3ST) | exposoma `E2-12` = boolean derivado (≠NO→sí). **NO** auto-derivar recencia desde el boolean |
| `insight` | bMSE `I.insight` | bipolar bMSE | exp_hist `single.insight`: 0→reconoce / -1→parcial / -2→egosintónico |
| `sueno_ritmo` | bMSE `G.sueno-ritmo` | escala bMSE | exposoma `item64` = boolean derivado (≠0) |
| `plan_medios_suicidas` | bMSE `EXT.plan_suicida` | `NO / VAGO / ESPEC` | exp_hist `single.plan` = espejo (VAGO/ESPEC→sí) |
| `hospitalizacion_previa` | Exp_Hist (episodios) | **toggle sí/no estructurado** (corrección §ABAJO) | exposoma `E2-14` derivado del toggle, no del texto libre |
| `adherencia` | Exp_Hist `single.adherencia` | 5 niveles | bMSE `EXT.rechazo_ayuda` es **constructo DISTINTO** → NO colapsar |

### Las 3 correcciones de la crítica (bakeadas, no se re-preguntan)
1. `intento_previo`: dueño = **bMSE** (no exposoma). `E2-12` deriva de bMSE. **No** auto-derivar
   recencia `LEJANO/RECIENTE` del boolean (se pierde la señal que mueve el 3ST).
2. Derivaciones desde **texto libre** son frágiles (`E2-14` hospitalización, `E2-n2` episodio previo,
   `E2-15` tto previo) → reemplazar por **toggles sí/no estructurados** en exp_hist. Si no, falsos
   negativos silenciosos.
3. **`exp_hist.multi.dominios` NO se colapsa** → es la ÚNICA señal de anosognosia (auto-reporte
   paciente vs puntuación clínico). Es SHARED_TEMPORAL con flag de discrepancia.

### Los 24 SHARED_TEMPORAL (NO colapsar — enlace read-only + flag)
soporte_social · anhedonia/hedónico · fenomenología psicótica · ideación actual · NSSI ·
juicio/capacidad · funcionamiento_actual · evento_vital_actual · vínculos_familiares · sustancias ·
tto_actual · apetito · interocepción · ánimo · ansiedad · curso · edad_inicio · refractariedad ·
tempo · cognición_bedside · heteroagresividad · autocuidado · funcionamiento_trayectoria · dominios.
**Principio temporal:** exposoma = lifetime/predisposición · bMSE = transversal-ahora ·
exp_hist = episodio-actual/safety prospectivo · functioning = trayectoria. Los `current::*` de
functioning se pueblan como TRADUCCIÓN sintetizada 0–6 *después* del bMSE, no se re-elicitan.

## 10. Resolución — Tríada de seguridad (DECISIÓN 1 = consolidar en bMSE EXT)

Ideación + plan + medios + intento estaba partida en 3 instrumentos (riesgo #1 de la crítica).
**Decisión:** consolidar la **captura** en **bMSE `EXT`** (punto de atención, un solo dueño del
cuadro de seguridad). Se mueve la ideación/intención de exp_hist §5 a bMSE.

- bMSE `EXT` posee: ideación-ahora, intención, `plan_suicida` (NO/VAGO/ESPEC), `intento_previo`
  (NO/LEJANO/RECIENTE), 3ST.
- exp_hist conserva el **safety gate prospectivo** (su función propia) pero **lee** el cuadro de
  bMSE en read-only en vez de re-capturar; `single.plan` queda como espejo derivado.
- exposoma `E2-12` (intento lifetime) = boolean derivado de bMSE.
- El **dashboard maestro** triangula: safety (exp_hist prospectivo) + intento lifetime (vía bMSE) +
  3ST (bMSE) → **un** verdicto de riesgo. Captura única, lectura cruzada.

## 11. Zonas ciegas — 2ª pasada de dedup (DECISIÓN 2, ejecutada 2026-05-31)

3 agentes, IDs reales verificados. **Veredicto transversal: las 3 zonas son SHARED_TEMPORAL, cero
DUPLICATE nuevo** — salvo los sociodemográficos, que van a identidad/`meta` con derivación.

### 11.A Trauma / ACE — SHARED_TEMPORAL (no colapsar)
ACE-10 del exposoma (`19–30`, `B-n1..B-n4`, escala Sí/No/NS, **lifetime/predisposición**) es ortogonal
al detonante actual de exp_hist (`detonante`/`detDesc`/`detRecurrente`, **episodio ahora**), al
reliving de bMSE (`F7` nivel -2, **transversal**) y a los eventos por etapa de functioning
(celdas `{stage}::{axis}` + `event-row`, **trayectoria**). Ningún par es DUPLICATE.
**Reglas:** (1) exp_hist muestra badge read-only "antecedente ACE/trauma lifetime (n positivos)"
junto al chip de evento vital — NO autocompleta. (2) bMSE `F7` recibe nota contextual si hay trauma
lifetime ("distinguir reliving de quiebre psicótico") — nunca deriva el score. (3) ACE positivo con
edad puede *sugerir* (editable, marcado como derivado) una nota en la etapa correspondiente de
functioning; la nota etaria nunca reescribe el binario del exposoma. (4) Flags de discrepancia
bidireccionales; ningún timestamp de otra app gana last-write sobre los campos ACE del exposoma.

### 11.B Comorbilidad médica E3 ↔ VEMMFAL — SHARED_TEMPORAL (E3 = prior, no auto-peso)
E3 (`E3-1..E3-18`, comorbilidad **lifetime/crónica**, Sí/No/NS) vs VEMMFAL (**organicidad aguda ahora**,
pesos ±2/±1, bandera roja dura). VEMMFAL hoy jala `auto` solo de bMSE/Historia/Identidad — **cero
conexión con exposoma**. **Regla unidireccional read-only E3→VEMMFAL como PRIOR que prioriza el workup,
NUNCA auto-enciende `it.on` ni suma al `total`/`hard`:**
- E3-11 epilepsia → M·Mov "crisis epilépticas" (+2): **no** auto-marcar (dispararía bandera roja falsa);
  badge "antecedente de epilepsia — el +2 exige crisis presenciada/EEG actual" + flag si VEMMFAL=on y E3-11=No.
- E3-1/3/4 (DM2/obesidad/sd. metabólico) → pre-llena el **candidato** de labs glucosa (fuera de score).
- E3-7/8/14 (Sjögren/psoriasis/artritis) → contexto autoinmune (sube pre-test de encefalitis AE, relevante a F·percepción atípica).
- E3-2 (BZD) → nota de riesgo retiro→delirium/convulsión; no toca el protector "sin nueva medicación".
- **E3-18 cáncer = direccionalmente OPUESTO** (protector vs demencia en exposoma; alarma RM/EEG en VEMMFAL)
  → flag de discrepancia duro y visible. Prueba clara de que jamás se fusionan.
- La inversa (VEMMFAL escribiendo en E3) queda **prohibida**.

### 11.C Sociodemográficos → barra identidad / `meta` con derivación
| Dato | Destino | Clase | Escala canónica | Regla / riesgo |
|---|---|---|---|---|
| sexo | barra identidad (`#f_sexo`) | DUPLICATE | `M/F/Otro` | **deriva C-n1/C-n2** (weight 3.0, SÍ puntúan): F→C-n1=Sí,C-n2=No · M→inverso · Otro→NS,NS. **Nunca** campos manuales paralelos. `#pSex` del scorer = redundante (solo label) → eliminar |
| edad | barra identidad | DUPLICATE | número | NO auto-rellena edad-de-inicio (VEMMFAL `>40a`/exp_hist = SHARED_TEMPORAL) |
| educación | `meta.educacion` (nuevo) | DUPLICATE | nivel ISCED/ENAHO + años opc. | hoy NO existe educación del sujeto (solo parental `34` y rendimiento `53`). **No fusionar con `34`** |
| SES | `meta.ses` (nuevo) | DUPLICATE | quintil/estrato 1–5 + flag | hoy NO existe SES directo (solo proxies desempleo `C-n11`, parental `34`). Mapear sin doble-contar el ICE |
| estado civil | `meta.estadoCivil` | DUPLICATE | categórico | deriva `C-n6` "soltero/a" (puntúa, soporte/aislamiento) |
| etnia/migración/urbanicidad | `meta.etnia` | DUPLICATE | categórico + flags | deriva `C-n3`/minoría étnica/urbanicidad (puntúan, TEPT) |
| ocupación/empleo | `meta.ocupacion` | DUPLICATE | texto + flag desempleo | deriva `C-n11` (puntúa) |

**Riesgo de scoring controlado:** centralizar sexo NO rompe el motor (el `#pSex` solo arma label);
el acoplamiento real es identidad→C-n1/C-n2, que se resuelve derivando (no recapturando). Functioning
y bMSE no usan sexo en cálculo → para ellos sexo es display heredado.
