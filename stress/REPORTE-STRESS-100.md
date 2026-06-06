# Stress-test · 100 casos psiquiátricos — Intake Unificado (v2, datos completos)

> **Fecha:** 2026-06-01 · **Autor:** Javier Flores-Cohaila (con Luci) · **Célula:** `3-output/unified-intake/`
> **Enfoque:** CIE-11 / DSM-5-TR · **Método:** 100 casos sintéticos por el **motor real** (4 apps + síntesis), Chrome headless.

---

## ⚠ Corrección metodológica (lee esto primero)

La **v1** de este stress-test llenaba solo los ítems *discriminantes* y dejaba el resto en blanco.
Eso **sub-ejercitaba** los motores (el ICE corre sobre 164 ítems y se seteaban ~5; el fenotipo lee 47
dims y se seteaban ~15, ignorando 32). Varias "fallas" de la v1 eran **artefactos del vector ralo**, no
bugs. La **v2** llena el instrumento **completo** (164 ítems exposoma · trayectoria de vida en los 7 ejes ·
47 dims + 11 EXT del pMSE · todos los campos de Historia), con el resto en valor basal/normal
("evaluado y ausente"). **Re-correr con datos completos cambió las conclusiones.** Qué cambió:

| Hallazgo v1 | Veredicto v2 |
|---|---|
| Crash en *Interconsulta* (9 casos) | **Artefacto:** mi semilla forzaba un `setting` fuera de enum. Con datos válidos: **0 crashes**. Queda como gap latente (§L). |
| Fenotipo: manía → "Neurodesarrollo" | **Artefacto de vector ralo.** Con 47 dims, **manía clasifica bien** ("Activación/Externalizante"). Retractado. |
| Organicidad sobre-sensible → ~12 cuarentenas falsas | **Mayormente artefacto.** Con datos completos colapsa a **~1 caso dudoso** (M14). Degradado. |
| Organicidad **sub-sensible** (FTD, psicosis tardía…) | **Sobrevive y se agudiza** (5–16%). **Este es el hallazgo real.** |

Gracias a la observación de Javier ("no llenan todo") la auditoría es ahora honesta. Lo que sigue es v2.

---

## Veredicto

El núcleo de **seguridad clínica es sólido** (safety/3ST/suicidalidad 100%, sin crashes, robusto ante
vacío). El fenotipo clasifica bien **psicosis, manía y depresión**. La falla real y **clínicamente peligrosa**
es que la **organicidad es ciega a las causas crónicas/estructurales con conciencia preservada**
(demencia frontotemporal, psicosis de inicio tardío, hipotiroidismo, pseudodemencia, post-TEC): puntúan
5–16% y **no se cuarentenan**. El cuello de botella: el score de organicidad pesa mucho contexto agudo
(de-novo, tempo, setting) y casi nada de **cognición** y **edad de inicio** — justo las señales de la
organicidad lenta.

**Cobertura:** 100/100 reportaron 4/4. **0 errores JS.**

---

## ✅ Validado (no tocar)

| Dimensión | Resultado | Evidencia |
|---|---|---|
| **Safety gate (Historia)** | **100/100** | g/warn/fail exactos |
| **Suicidalidad lifetime** | **100/100** | No / Ideación / Intento / **NSSI** (N03) bien discriminados |
| **3ST suicidio (pMSE)** | **8/8** | fail/warn/g correctos; adversariales K05/K06 incluidos |
| **Triangulación de seguridad** | **OK** | K05 (3ST rojo, Historia verde) y K06 (Historia fail, 3ST verde) → verdicto escala a la fuente más alta |
| **Gate en organicidad VERDADERA** | **OK** | Delirium F01/F02, encefalitis F06, DLB F05, SNM F13, lupus F15, DT G02, posparto A10 → cuarentena + rule-in |
| **Cuadrante dosis-respuesta** | **~100/100** | Resiliencia/Vulnerabilidad/Carga intrínseca/Desarrollo típico bien (el único "fallo", K15, fue mi `expected` mal puesto: media 2.7 < 3 = preservado) |
| **Fenotipo: psicosis / manía / depresión** | **OK** | A01 → Psicosis/Saliencia · B01–B03 → Activación/Externalizante · C0x → Internalizante/Ansiedad |
| **Robustez (vacío/NaN)** | **OK** | K17 (sin celdas, EXT mínimo): `media=null`, `quad="—"`, `macro=∅`, **sin crash** |

---

## ❌ FALLAS (rankeadas por severidad clínica, datos completos)

### 🔴 F1 — Organicidad **CIEGA a la organicidad crónica/estructural** con conciencia preservada (la dirección peligrosa)
Cuadros secundarios reales que **NO se cuarentenan** y puntúan organicidad mínima:

| Caso | Cuadro | Org | Cuarentena |
|---|---|---|---|
| **F04** | Demencia frontotemporal conductual | **5%** | no |
| **F11** | Neurosífilis/VIH, **psicosis de inicio >50** | **5%** | no |
| **L02** | Esquizofrenia de inicio muy tardío (>60) | **5%** | no |
| **F08** | Hipotiroidismo con depresión | **5%** | no |
| **C08** | Pseudodemencia geriátrica | **5%** | no |
| **N08** | Personalidad orgánica post-TEC | **5%** | no |
| **F09** | Tumor frontal con cambio de personalidad | **16%** | no |
| **K14** | Anciano 88a, depresión de novo | **5%** | no |

**Raíz:** `computeOrganicity()` se mueve por (conciencia≠0) + (de-novo) + (tempo agudo) + (setting) +
(rule-ins motores/conciencia). **Los déficits neurocognitivos del pMSE no la suben** (F04, C08 tienen
NC.fluencia/recall/tmt/clock/digit en −2 y siguen en 5%), y **la edad de inicio >40/>50 pesa casi nada**.
Resultado: la organicidad **lenta y estructural** —demencias, psicosis tardía, endocrino/carencial,
lesión frontal— pasa por debajo del radar y el estado se interpreta a valor facial. Es exactamente el
"perder organicidad" que el diseño dice evitar, y es robusto: aparece igual con datos ralos y completos.
**Fix:** (1) un patrón neurocognitivo (≥2 subtests NC ≤ −1, o ≥1 en −2) debe **subir** la pre-test;
(2) **psicosis/manía/cambio conductual de inicio >40–50** = bandera dura; (3) bajar el peso relativo del
prior de setting frente a estas señales clínicas.

### 🟠 F2 — Falso *rule-in* orgánico por estereotipia/discinesia "Espontánea"
**M20** (Tourette/tics, neurodesarrollo) → `NM.estereotipia: Espontánea` dispara el rule-in
"Extrapiramidalismo no farmacológico" → **band hi + cuarentena**. La etiología "Espontánea" en
estereotipia/discinesia se trata como organicidad aguda sin distinguir **tics/neurodesarrollo** ni
**discinesia tardía crónica** del extrapiramidalismo agudo de novo.
**Fix:** el rule-in extrapiramidal debe exigir **agudo/de-novo** o presenciado, no cualquier "Espontánea"
crónica/del desarrollo.

### 🟠 F3 — `deNovo` se enciende con ≤1 episodio aunque el curso sea recurrente/progresivo/continuo
Confirmado (adversarial **K09** + colaterales **F07**, **N08**): con `curso="episódico-recurrente"`,
`"progresivo"` o `"continuo"`, si los episodios **no están enumerados** (≤1), `deNovo=true`. Ese flag
alimenta la organicidad ("Síntomas de novo / 1.er episodio") y empuja a **"mid"** a muchas primeras
presentaciones psiquiátricas primarias (el cluster A06/A07/A09/B01/B03/D02/H02/I01/I04/K12/N01/N10 = 15–19%).
No es peligroso (mid = "considerar workup") pero ensucia la señal.
**Fix:** `deNovo` debe respetar la etiqueta de curso (recurrente/progresivo/continuo ⇒ NO de novo),
no solo contar episodios.

### 🟡 F4 — El Gate de conciencia se dispara con **hipervigilancia (+2)**
**K11** (ansiedad con `NC.conciencia=+2`, sin delirium) → cuarentena. La compuerta trata *cualquier*
`NC.conciencia≠0` como "no interpretable", confundiendo **hiperarousal** (+1/+2) con **conciencia
reducida** (−1/−2). Una crisis de pánico hipervigilante no debería cuarentenarse como delirium.
**Fix:** cuarentena por conciencia solo con valores **≤ −1** (+ fluctuación), no con +1/+2.

### 🟡 F5 — Fenotipo macro: errores residuales en ansiedad, neurocognitivo y negativos/desorganizado
Con datos completos, psicosis/manía/depresión clasifican bien, pero **persisten**:

| Entrada | Macro v2 | Esperado |
|---|---|---|
| **Demencia** (F03, NC todos −2) | **Activación / Externalizante / Sustancias** | Neurocognitivo |
| **Ansiedad** GAD/pánico (D01, D02) | Activación/Externalizante · Neurodesarrollo | Internalizante/Ansiedad |
| Síntomas negativos (A07) | Internalizante/Ansiedad | Desapego/negativo |
| Desorganizada (A06) | Activación/Externalizante | Desorganización/neurocognitivo |

"**Activación / Externalizante / Sustancias**" es ahora el **atractor sobre-usado** (correcto para manía,
pero se traga ansiedad, demencia y desorganización). El más llamativo: **demencia con NC todos en −2 →
"Activación/Externalizante"** (debería ser neurocognitivo). 
**Siguiente paso:** auditar `bmseLatentTaxonomyProfile`/centroides con casos de oro de ansiedad y
neurocognitivo; el peso de los subtests NC en el macro parece insuficiente.

### ⚪ L — (latente) Settings *Interconsulta / Hospitalización / Comunitario* crashean `renderMotivoCat`
La barra de identidad ofrece 5 settings; la app Historia solo conoce `motivoCat` para
`{emergencia, consulta externa}`. Si uno de los otros 3 llega a `single.setting`, `motivoCat[setting].map`
lanza `TypeError`. **No es alcanzable por la UI normal** (el desplegable de Historia solo ofrece los 2, y
la identidad no propaga `setting` a `single.setting`), pero **sí por import/seed malformado**. Gap de
validación de input. *(En v1 mi semilla lo disparaba; corregido, ya no aparece.)*
**Fix (~1 línea):** `(MOTIVO_CAT[setting] || MOTIVO_CAT['consulta externa'] || []).map(...)`.

---

## §A · Artefactos MÍOS / cosas que NO son falla del motor (por integridad)

- **v1 sub-llenaba los instrumentos** → causó "fallas" falsas (manía mal clasificada, sobre-cuarentena,
  crash interconsulta). Corregido en v2 (datos completos). Reportado arriba con su retracción.
- **Cuadrante K15 = "Resiliencia":** mi `expected` decía "Vulnerabilidad" pero la media (2.7) es <3 =
  preservado → Resiliencia es correcto. Artefacto de mi expectativa, no del motor.
- **Muchos "org=mid" donde esperaba "lo":** no son bugs aislados; son la manifestación de F3 (de-novo).

---

## Cómo cargar los 100 casos EN la app

Ya horneado en `intake-unificado.html` (3.43 MB): en **Datos generales**, entre "✦ Nuevo paciente" y
"▦ Cargar demo", hay un **desplegable azul** "▦ Cargar caso stress-test (100)…", agrupado por bloque
(A–N) con el código CIE-11 de cada caso. Al elegir uno, siembra las **4 apps completas** + identidad y
recarga. Ábrelo en **Chrome**. (Alterna: `stress/cargar-casos.html`, tabla con buscador.)

---

## Archivos (`stress/`)

```
harness.js · lib/build.js (v2 full-fill) · cases/index.js (100) · cases/_smoke.js
audit.js · results.json · audit-rows.json · schema.json (IDs reales extraídos)
gen-demos.js · demos.js (100 casos completos, 1.2 MB) · cargar-casos.html
extract-schema.js · REPORTE-STRESS-100.md
```

---

## Próximo paso (menor viable)

1. **F1** es el premio: recalibrar `computeOrganicity()` para que **cognición + edad-de-inicio** suban la
   organicidad crónica. Es el único hallazgo con riesgo clínico real (falsos negativos de organicidad).
2. **F2 + F3** (rule-in extrapiramidal y deNovo) son fixes acotados que limpian la sobre-marca "mid".
3. **F4** (gate +2) = 1 condición.
4. **F5** (fenotipo ansiedad/neurocognitivo) = auditoría aparte del clasificador latente.
5. **L** (motivoCat) = 1 línea defensiva.

Dime cuál abro y lo implemento sobre la fuente + rebuild.
