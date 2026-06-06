# Reporte mixto · qué emerge al cruzar calificadores + motor real

**Fecha:** 2026-06-01  
**Instrumento:** pMSE / Intake Unificado  
**Entrada mezclada:** reportes de cohortes simuladas + stress-test real de 100 casos completos.  
**Nota:** dos adjuntos de "Cohorte 3 — Psiquiatras formados" son duplicados exactos por checksum; se consideran una sola fuente.

## Tesis emergente

Al mezclar los reportes aparece algo más fuerte que una lista de ítems difíciles:

**El pMSE no falla primariamente por tener muchos ítems. Falla cuando obliga a decidir temporalidad, fuente y propiedad del constructo sin hacerlo explícito.**

Los humanos divergen cuando no saben si están puntuando estado actual, rasgo, curso longitudinal, mecanismo etiológico, inferencia diagnóstica o dato externo. El motor se equivoca justo en los mismos bordes: organicidad lenta, `deNovo`, gate de conciencia, motor espontáneo y macrofenotipos arrastrados por activación.

La convergencia es muy clara:

- Los calificadores sufren con **D10 agregación por canal** y **D13 marco temporal** en todos los niveles.
- El motor sufre con `deNovo`, organicidad crónica, `NC.conciencia=+2`, `NM.estereotipia` espontánea y macrofenotipo.
- Es la misma enfermedad de diseño: **el tiempo y la fuente están implícitos, pero el puntaje se comporta como si fueran explícitos.**

## Dos reportes, dos capas

| Capa | Qué mira | Hallazgo central | Tipo de problema |
|---|---|---|---|
| Reporte de calificadores | Dónde divergen estudiantes, residentes, psiquiatras y expertos | La dificultad migra con la pericia: mecánica -> DSM -> gestalt -> ontología | Confiabilidad humana / deuda de entrenamiento y diseño |
| Reporte de 100 casos | Cómo responde el motor con vectores completos | Seguridad OK; falla crítica en organicidad lenta y bordes de clasificación | Motor / reglas / pesos / validación |

Lo importante es que **se validan mutuamente**. El reporte de calificadores predice que `NC.*`, `NM.*`, `F4/F7`, `E/I/J`, PSP y temporalidad serían zonas frágiles. El motor real muestra errores precisamente ahí.

## Lo que emerge como prioridad real

| Prioridad | Emergente | Ítems/reglas implicadas | Por qué importa |
|---:|---|---|---|
| 1 | **Temporalidad oculta** | `deNovo`, `FUN.psp_*`, `NC.*`, `NM.*`, `F7.coherencia-autobiografica`, `F7.self-integracion` | Sin ventana temporal, el pMSE mezcla estado, rasgo y curso. Esto explica falsos positivos y falsos negativos. |
| 2 | **El 0 es peligroso** | `NC.*`, `NM.*`, `FUN.psp_*`, `F1/F2/F3`, `G.*` | `0` puede significar "normal observado", "no administrado", "inferido por gestalt" o "barrido por default". Esas cuatro cosas no son equivalentes. |
| 3 | **Organicidad lenta es el bug clínico mayor** | `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall`, edad de inicio, curso progresivo | F04, F08, F09, F11, C08, K14, L02 y N08 quedan bajos pese a señales crónicas/estructurales. |
| 4 | **Conciencia y arousal están acoplados de más** | `NC.conciencia`, `G.arousal`, `F6.amenaza`, `F2.velocidad` | `NC.conciencia=+2` por hipervigilancia no debe activar la misma lógica que obnubilación/fluctuación. |
| 5 | **Motor sin etiología produce falsas alarmas** | `NM.estereotipia`, `NM.diskinesia`, `NM.tic`, `NM.acatisia`, `NM.parkinsonismo` | M20 muestra que "espontáneo" puede significar tic/neurodesarrollo crónico, no extrapiramidalismo orgánico agudo. |
| 6 | **El macrofenotipo tiene atractores** | Activación/externalizante, neurocognitivo/motor, internalizante | Ansiedad, demencia, desorganización y negativos pueden caer en macro no esperado por pesos/centroides. |
| 7 | **Hay deuda ontológica irreductible** | `F4.contenido` 3 vs 4, `F7.testing`, `F7.coherencia-autobiografica`, `F2.sensorial`, `E.egodistonia`, `F7.self-integracion` | Expertos no discrepan por ignorancia, sino porque el instrumento fuerza decisiones que la fenomenología no cierra. |

## Ranking mixto de ítems más críticos

Este ranking combina dificultad humana + evidencia de falla del motor + riesgo clínico.

| Rank | Ítem/dominio | Qué emerge |
|---:|---|---|
| 1 | `NC.conciencia` | Es simultáneamente gate de validez, fuente de error de dirección y gatillo de falsa cuarentena. Separar `<= -1` de `+1/+2` es urgente. |
| 2 | `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall` | Son los ítems que más deberían proteger contra organicidad lenta, pero hoy pesan poco en organicidad y pueden ser omitidos o inferidos. |
| 3 | `NM.estereotipia`, `NM.diskinesia`, `NM.tic`, `NM.acatisia`, `NM.parkinsonismo`, `NM.tremor` | Requieren etiología y temporalidad obligatorias. Sin eso, el signo motor cambia de significado clínico. |
| 4 | `F4.contenido` 3 vs 4 | Es frontera fenomenológica clásica: idea sobrevalorada extrema vs delusión. No se resuelve solo con entrenamiento. Necesita maniobra de corregibilidad/convicción/contexto. |
| 5 | `F7.testing`, `I.insight`, `J.juicio`, `E.egodistonia` | Los evaluadores los colapsan; el motor los usa como señales fuertes. Hay que desacoplar realidad compartida, conciencia de enfermedad, decisión práctica y relación subjetiva con el problema. |
| 6 | `F7.coherencia-autobiografica` vs `F2.sensorial` vs `F7.testing` | Reliving traumático, alucinación y psicosis compiten por la misma experiencia. Es un problema de "propiedad del constructo". |
| 7 | `F1.expresividad`, `F2.velocidad`, `F3.drive`, `F3.anticipación`, `F3.tono` | Núcleo de confusión negativos/depresión/catatonía/cannabis/neurocognición. Además los psiquiatras pueden rellenarlos por gestalt. |
| 8 | `F6.amenaza -2`, `E.regulación +2`, `F5.regulación +2`, `G.coherencia +2` | Patología por exceso o polo contraintuitivo. Aquí el experto ve deuda de diseño, el estudiante ni siquiera ve el fenómeno. |
| 9 | `FUN.psp_utiles`, `FUN.psp_relaciones`, `FUN.psp_autocuidado`, `FUN.psp_disruptivas` | PSP no es puramente estado mental. Sin basal/actual/fuente, el puntaje se vuelve clínicamente ambiguo. |
| 10 | `EXT.*` | Seguridad está bien validada, pero su fragilidad está en discrepancias entre Historia, pMSE y dato externo, no en la mecánica del campo. |

## Qué es entrenamiento, qué es proceso, qué es diseño y qué es motor

| Problema | Categoría | Qué hacer |
|---|---|---|
| Estudiantes usan `0` como "no sé" | Entrenamiento + UX | Microtutorial, bloquear `0` en ítems no observados, diferenciar "normal observado" de "no evaluado". |
| Residentes colapsan RDoC a DSM | Entrenamiento | Casos contrastivos: liking vs wanting vs drive; testing vs insight; reliving vs psicosis. |
| Psiquiatras rellenan por gestalt | Proceso | Cerrar fenotipo hasta completar dimensiones; marcar bedside como "administrado/no administrado"; registrar fuente. |
| Expertos discrepan en constructos frontera | Diseño | No venderlos como precisión falsa; declarar reglas, aceptar ambigüedad o partir ítems. |
| Organicidad lenta baja | Motor | Recalibrar `computeOrganicity()` con cognición, edad de inicio, curso progresivo y cambio conductual. |
| `NC.conciencia=+2` dispara gate | Motor + diseño | Gate duro solo para reducción/fluctuación/desorientación; `+1/+2` pertenece a hiperarousal salvo evidencia de delirium. |
| `NM.estereotipia` espontánea dispara rule-in | Motor + UX | Exigir temporalidad/etiología antes del rule-in: agudo/de novo, crónico/desarrollo, farmacológico, tardío, funcional, catatónico. |
| `deNovo=true` por episodios no enumerados | Motor | Respetar `curso`: recurrente/progresivo/continuo no debe volverse de novo por falta de episodios. |
| Macrofenotipo arrastrado por atractores | Motor + transparencia | Mostrar los 5 ítems que más explican el macro; auditar centroides de ansiedad, neurocognitivo, negativos y desorganización. |

## La variable maestra: temporalidad/fuente

La mejora con mayor retorno no es añadir más ítems. Es añadir una pequeña capa de metadatos a los ítems difíciles:

| Metadato | Aplica a | Ejemplo |
|---|---|---|
| `observado / probado / inferido / colateral` | `NC.*`, `NM.*`, `FUN.psp_*`, `F7.*`, `P1/P2` | `NC.tmt=0` probado no equivale a `NC.tmt=0` por impresión. |
| `ventana temporal` | `FUN.psp_*`, `F7.coherencia`, `F7.self`, `G.sueno`, `F4.contenido` | Actual, última semana, episodio, basal, lifetime. |
| `curso` | `deNovo`, organicidad, PSP, motor | Agudo/de novo, recurrente, progresivo, continuo, crónico del desarrollo. |
| `etiología tentativa` | `NM.*`, apetito, drive, expresividad, arousal | Farmacológico, neurológico, depresivo, negativo, traumático, neurodesarrollo, funcional. |
| `confianza del dato` | ítems inferenciales | Alta si probado/colateral; baja si solo entrevista breve. |

Esta capa resolvería simultáneamente:

- el `0` por omisión,
- la contaminación por gestalt,
- el falso `deNovo`,
- el rule-in motor excesivo,
- la pérdida de organicidad lenta,
- la ambigüedad PSP basal vs actual.

## Síntesis brutal

El pMSE parece tener tres zonas:

1. **Zona sólida:** seguridad, 3ST, suicidalidad lifetime, psicosis/manía/depresión prototípicas, robustez técnica.
2. **Zona entrenable:** estudiantes/residentes en anclas, polos, bedside, RDoC, F3/F6/F7 y riesgo.
3. **Zona de deuda de diseño/motor:** organicidad lenta, gate de conciencia positivo, `deNovo`, motor espontáneo, macrofenotipo, constructos frontera.

La tercera zona es la más importante. Si se corrige, el instrumento no solo será más confiable; también enseñará mejor. Si no se corrige, entrenar más puede producir un efecto raro: evaluadores más sofisticados, pero más conscientes de que algunas casillas no tienen una respuesta única.

## Paquete mínimo de cambios

1. **Gate conciencia v2:** `NC.conciencia <= -1` o fluctuación/desorientación activa gate; `+1/+2` se etiqueta como hipervigilancia/hiperarousal y no cuarentena por sí solo.
2. **`0 observado` vs `no evaluado`:** especialmente en `NC.*`, `NM.*`, `FUN.psp_*`.
3. **Organicidad lenta:** subir pre-test con edad de inicio >40/50, curso progresivo, cambio conductual, `NC.* <= -1`, `J.juicio < 0`, `FUN.psp_*` deteriorado.
4. **Motor con etiología obligatoria:** `NM.* != 0` exige temporalidad y causa antes de rule-in.
5. **`deNovo` respeta curso:** recurrente/progresivo/continuo nunca se vuelve de novo por episodios no enumerados.
6. **Panel de explicación del macro:** mostrar drivers principales del macrofenotipo y alertar atractores.
7. **Rubrica inline para constructos frontera:** `F4.contenido` 3/4, `F7.testing`, `I.insight`, `J.juicio`, `E.egodistonia`, reliving vs alucinación.

## Qué emerge, en una frase

**El pMSE ya funciona como instrumento clínico para lo prototípico; ahora necesita convertirse en instrumento epistemológico para lo ambiguo: registrar no solo qué se puntúa, sino desde qué fuente, en qué ventana temporal y con qué grado de inferencia.**
