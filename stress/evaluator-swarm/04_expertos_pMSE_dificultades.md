# Cohorte de 100 expertos: dificultades para calificar pMSE

**Instrumento evaluado:** pMSE dentro de `3-output/unified-intake/intake-unificado.html`  
**Simulación:** cohorte sintética de 100 expertos en evaluación psicopatológica/psicometría  
**Base local revisada:** `schema.json`, `REPORTE-STRESS-100.md`, `results.json`, `audit-rows.json`, `lib/build.js` e inspección puntual de `intake-unificado.html`  
**Fecha de lectura:** 2026-06-01

Este reporte no agrega ítems nuevos. Usa los 47 IDs pMSE reales (`NC.*`, `F1.*`, `F2.*`, `F3.*`, `F4.*`, `F5.*`, `F6.*`, `F7.*`, `NM.*`, `G.*`, `P1.*`, `P2.*`, `J.*`, `I.*`, `E.*`, `FUN.*`) y los 11 `EXT.*` reales usados por el motor de pMSE.

## Resumen ejecutivo

La cohorte no anticipa dificultades importantes para completar el pMSE en cuadros prototípicos de psicosis, manía, depresión con riesgo o suicidalidad franca: el stress-test reporta 100/100 casos con las 4 apps, 0 errores JS, safety gate y suicidalidad lifetime correctos, y 3ST correcto en los casos esperados. La dificultad aparece cuando el evaluador debe traducir observaciones breves a dimensiones que combinan estado, rasgo, longitudinalidad y causalidad.

Los campos más difíciles son `NC.conciencia`, el bloque neurocognitivo (`NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall`), los motores con especificador etiológico (`NM.estereotipia`, `NM.diskinesia`, `NM.tic`, `NM.acatisia`, `NM.parkinsonismo`, `NM.tremor`), y las dimensiones de realidad/insight (`F7.testing`, `I.insight`, `E.egodistonia`, `J.juicio`). En menor medida, generan desacuerdo `F1.expresividad`, `F2.velocidad`, `F3.drive`, `F3.anticipación`, `G.arousal`, `G.coherencia` y las escalas funcionales `FUN.psp_*`.

La principal preocupación clínica no es que los expertos no sepan detectar signos severos, sino que puntúen correctamente un signo pero no sepan cuánto pesa cuando el cuadro es crónico, frontal, geriátrico o de inicio tardío. El stress-test muestra que cuadros como F04, F09, F11, C08 y N08 quedan con organicidad baja pese a señales cognitivas o longitudinales; eso vuelve a los ítems cognitivos y frontales campos de alto riesgo de mala interpretación.

## Tabla rankeada de campos difíciles

| Rank | Ítems/dominio pMSE | Expertos con dificultad esperada | Tipo principal de dificultad | Por qué resulta difícil | Evidencia local que lo motiva |
|---:|---|---:|---|---|---|
| 1 | `NC.conciencia` | 72/100 | Confusión de dirección (+/-) + riesgo clínico | El valor `+2` puede leerse como "más conciencia" o como hipervigilancia clínica; el motor actual trata `NC.conciencia != 0` como gate. | K11: ansiedad con `NC.conciencia=+2` terminó en `gate=FAIL`, `org=hi`, macro neurocognitivo/delirium, aunque el esperado era ansioso. |
| 2 | `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall` | 68/100 | Observabilidad breve + integración longitudinal | Requieren pruebas breves estandarizadas, ajuste por educación/edad y distinguir depresión, demencia y desorganización. | F03 tuvo NC alto en RDoC/HiTOP pero macro maniforme; F04, C08, F11 y N08 muestran riesgo de subponderar cognición para organicidad crónica. |
| 3 | `NM.estereotipia`, `NM.diskinesia`, `NM.tic` | 63/100 | Anclaje clínico insuficiente + etiología | La conducta motora visible no basta: hay que distinguir tic, estereotipia, catatonía, discinesia tardía, fenómeno funcional o extrapiramidalismo. | M20: Tourette con `NM.estereotipia: Espontánea` disparó rule-in extrapiramidal y organicidad `hi`, pese a esperado `lo/mid`. |
| 4 | `F7.testing`, `I.insight`, `E.egodistonia`, `J.juicio` | 61/100 | Ambigüedad semántica | "Testing", insight, egodistonía y juicio se solapan en delirios, TOC, personalidad, manía y psicosis afectiva. | A01/F11 usan `F7.testing` e `I.insight` para psicosis; TOC y cuadros egodistónicos exigen dirección opuesta en `E.egodistonia`. |
| 5 | `F1.expresividad`, `F2.velocidad`, `F3.drive`, `F3.anticipación` | 58/100 | Confusión de dirección (+/-) | La reducción puede significar negativo, depresión, catatonía, neurocognición o sedación; el aumento puede ser manía, ansiedad, acatisia o agitación. | A07 negativo terminó macro internalizante; N10 cannabis usa baja expresividad/drive; F04/F09 frontales fueron leídos como maniformes. |
| 6 | `G.arousal`, `G.sueno-ritmo`, `G.interocepcion` | 55/100 | Observabilidad breve + dirección | Arousal alto aparece en pánico, TEPT, manía y delirium hiperactivo; interocepción alta puede ser pánico/somático, no organicidad. | D01 fue macro maniforme; D02, D04 y E01 fueron macro neurocognitivo/delirium pese a fenotipo ansioso/trauma. |
| 7 | `G.coherencia`, `F4.experiencia`, `F4.contenido` | 49/100 | Ambigüedad semántica | Desorganización, experiencia psicótica, contenido delirante y lenguaje pueden mezclarse si la entrevista es breve. | A06 desorganizada terminó macro maniforme; A01 y F11 sí activan psicosis/saliencia, mostrando que el borde no es uniforme. |
| 8 | `F6.amenaza`, `F6.frustración`, `F6.animo-meta`, `F6.autoevaluación`, `F6.desesperanza` | 44/100 | Anclaje insuficiente + riesgo clínico | Las valencias afectivas tienen dirección intuitiva variable: grandiosidad vs autoestima baja, amenaza delirante vs ansiedad, desesperanza vs ideación suicida. | C02/C05 tienen 3ST correcto, pero D01/D02 y K11 muestran cómo amenaza/arousal pueden arrastrar macro hacia activación o delirium. |
| 9 | `P1.dominancia`, `P2.afiliación`, `F7.auto-mentalización`, `F7.mentalización-otro` | 41/100 | Necesidad de integración longitudinal | Rasgos interpersonales no se observan bien en una entrevista única y pueden ser estado, personalidad, neurodesarrollo o frontalidad. | F04/F09/N08: perfiles frontales/desinhibidos se leen como activación/externalizante sin resolver causalidad orgánica. |
| 10 | `FUN.psp_utiles`, `FUN.psp_relaciones`, `FUN.psp_autocuidado`, `FUN.psp_disruptivas` | 39/100 | Observabilidad breve + longitudinalidad | PSP actual exige separar deterioro agudo, funcionamiento basal y discapacidad histórica; el pMSE captura estado pero no siempre trayectoria. | C08/F03 tienen `psp=fail`; A01/A03 también fallan PSP por psicosis. El mismo marcador funcional no identifica etiología. |
| 11 | `EXT.plan_suicida`, `EXT.medios`, `EXT.intento_previo`, `EXT.soporte` | 32/100 | Riesgo clínico de calificar mal | Son fáciles cuando el dato es explícito, pero difíciles con ambivalencia, colateral incompleto o negación defensiva. | 3ST fue 8/8 correcto; K05/K06 prueban que la triangulación funciona, pero los expertos pedirían reglas de discrepancia Historia vs pMSE. |
| 12 | `EXT.hx_violencia`, `EXT.bvc_ruidos`, `EXT.bvc_amenaza_verbal`, `EXT.bvc_objetos`, `EXT.rechazo_ayuda`, `EXT.sustancias`, `EXT.decision_capacidad` | 28/100 | Observabilidad breve + riesgo | Violencia, rechazo, sustancias y capacidad dependen de contexto, colateral y momento de evaluación. | N01/N08 muestran riesgo heteroagresivo/desinhibición; los campos son útiles, pero requieren entrenamiento de umbral. |

## Comentarios representativos de la cohorte

> "En `NC.conciencia` necesito que el instrumento me diga si el polo positivo es hipervigilancia o mejor nivel de conciencia. K11 es exactamente el error que cometería bajo presión."

> "Los subtests `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock` y `NC.recall` son claros como tareas, pero no como interpretación: una entrevista breve no me permite decidir si C08 es pseudodemencia, depresión o neurocognitivo incipiente."

> "`NM.estereotipia` con especificador espontáneo me preocupa. En M20, un tic/desarrollo terminó pareciendo extrapiramidal orgánico. Necesito un ancla: agudo/de novo, catatónico, farmacológico o crónico."

> "`F7.testing`, `I.insight` y `E.egodistonia` se pisan. En psicosis franca los calificaría bien; en TOC pobre insight, personalidad, manía o delirio encapsulado, la dirección se vuelve menos obvia."

> "Los negativos (`F1.expresividad`, `F3.drive`, `F3.anticipación`, `P2.afiliación`) se parecen demasiado a depresión, cannabis, esquizoide y frontalidad. A07 y N10 son los casos donde más desacuerdo esperaría."

> "Los campos `FUN.psp_*` son clínicamente necesarios, pero si los lleno solo con lo visto hoy puedo sobrediagnosticar gravedad de estado y perder la línea basal."

## Patrones de error esperados

1. **Error de signo en conciencia/arousal:** convertir `NC.conciencia=+1/+2` en "conciencia alterada orgánica" cuando clínicamente puede ser hipervigilancia ansiosa. Riesgo alto por cuarentena falsa y lectura de delirium.

2. **Subponderación de cognición crónica:** puntuar deterioro en `NC.*` pero no traducirlo a sospecha orgánica cuando hay edad tardía, curso progresivo o cambio de personalidad. Riesgo alto por falsos negativos en F04, F09, F11, C08, K14 y N08.

3. **Motor sin etiología:** registrar `NM.estereotipia` o `NM.diskinesia` sin decidir si es tic, catatonía, extrapiramidalismo, discinesia crónica o fenómeno del desarrollo. Riesgo alto por rule-in orgánico falso como M20.

4. **Atractor maniforme/externalizante:** confundir activación, ansiedad, frontalidad, desorganización y demencia conductual cuando suben `G.arousal`, `F2.velocidad`, `F3.drive`, `P1.dominancia` o baja `J.juicio`. Aparece en D01, F03, F04, F09 y N08.

5. **Atractor neurocognitivo/delirium en ansiedad/trauma:** pánico, agorafobia y TEPT con `G.arousal`, `G.interocepcion` y `F6.amenaza` altos pueden parecer delirium hiperactivo si no se protege la interpretación clínica. Aparece en D02, D04, E01 y K11.

6. **Colapso negativo-depresivo:** `F1.expresividad`, `F2.velocidad`, `F3.drive`, `F3.anticipación`, `P2.afiliación` y `G.coherencia` bajos pueden terminar como depresión/internalizante aunque el esperado sea negativo/desapego. Aparece en A07.

7. **Insuficiente separación estado/rasgo:** `P1.dominancia`, `P2.afiliación`, `F7.auto-mentalización`, `F7.mentalización-otro`, `I.insight` y `E.egodistonia` exigen datos longitudinales; en entrevista breve pueden sobrerrepresentar el estado actual.

8. **Riesgo explícito bien capturado, riesgo ambiguo más frágil:** `EXT.plan_suicida`, `EXT.medios`, `EXT.intento_previo` y `EXT.soporte` funcionan bien en casos claros; el desacuerdo surge con negación, discrepancia entre Historia y pMSE, o riesgo heteroagresivo.

## Campos de alto desacuerdo por tipo de dificultad

| Tipo solicitado | Campos pMSE más afectados | Lectura de la cohorte |
|---|---|---|
| Ambigüedad semántica | `F7.testing`, `I.insight`, `E.egodistonia`, `J.juicio`, `G.coherencia`, `F4.experiencia`, `F4.contenido` | Difícil separar realidad, insight, convicción, juicio y egosintonía en TOC, delirios encapsulados, manía y personalidad. |
| Anclaje clínico insuficiente | `NM.estereotipia`, `NM.diskinesia`, `NM.tic`, `NM.acatisia`, `NM.parkinsonismo`, `NM.tremor`, `F6.*` | Los expertos piden ejemplos operativos por valor y por etiología, especialmente para movimientos anormales. |
| Observabilidad en entrevista breve | `NC.*`, `FUN.psp_*`, `G.sueno-ritmo`, `G.interocepcion`, `EXT.*` | Requieren prueba, colateral o tiempo; si se fuerzan en una sola entrevista, baja la confiabilidad. |
| Confusión de dirección (+/-) | `NC.conciencia`, `G.arousal`, `F1.expresividad`, `F2.velocidad`, `F3.drive`, `F3.anticipación`, `F6.autoevaluación`, `E.egodistonia` | El polo positivo no siempre significa "mejor"; el polo negativo no siempre significa "peor" en el mismo sentido clínico. |
| Necesidad de integración longitudinal | `NC.*`, `P1.dominancia`, `P2.afiliación`, `F7.auto-mentalización`, `F7.mentalización-otro`, `FUN.psp_*`, `I.insight` | La calificación adecuada depende de edad de inicio, curso, funcionamiento premórbido y progresión. |
| Riesgo clínico de calificar mal | `NC.conciencia`, `NC.*`, `NM.estereotipia`, `NM.diskinesia`, `F7.testing`, `J.juicio`, `EXT.plan_suicida`, `EXT.medios`, `EXT.hx_violencia` | Un error cambia gate, cuarentena, organicidad, 3ST o decisión de manejo. |

## Recomendaciones de entrenamiento y UX

1. **Anclar dirección en cada fila difícil.** Mostrar microtexto para `NC.conciencia`, `G.arousal`, `E.egodistonia`, `F6.autoevaluación`, `F1.expresividad` y `F2.velocidad`: qué significa `-2`, `0`, `+2` y cuál polo aumenta riesgo.

2. **Separar "observado" de "inferido".** Para `NC.*`, `FUN.psp_*`, `P1.dominancia`, `P2.afiliación` y `F7.*`, agregar un selector de confianza o fuente: entrevista directa, prueba breve, colateral, historia previa.

3. **Forzar especificador etiológico en motor positivo.** Si `NM.estereotipia`, `NM.diskinesia`, `NM.tic`, `NM.acatisia`, `NM.parkinsonismo` o `NM.tremor` no son 0, pedir etiología y temporalidad: agudo/de novo, farmacológico, catatónico, tic/desarrollo, tardío/crónico, funcional.

4. **Advertencia contextual para `NC.conciencia=+1/+2`.** UX recomendada: "hipervigilancia/hiperarousal no equivale a conciencia reducida; gate orgánico duro solo si reducción/fluctuación o desorientación".

5. **Panel de integración longitudinal.** Cuando haya `NC.* <= -1`, edad de inicio tardía, `FUN.psp_*` bajo o historia progresiva, mostrar recordatorio: "considerar causa neurocognitiva/estructural aunque `NC.conciencia=0`".

6. **Casos de calibración obligatorios.** Entrenar con pares contrastivos: K11 vs delirium hiperactivo, M20 vs catatonía/extrapiramidalismo, A07 vs C04/N10, F04/F09/N08 vs manía, D02/E01 vs delirium.

7. **Reglas de discrepancia para riesgo.** Si `EXT.*` y la Historia divergen, mostrar ambas fuentes y escalar al mayor riesgo hasta aclaración, como ya ocurre en K05/K06.

8. **Auditoría de macrofenotipo visible al evaluador.** Cuando el macro salga "Activación / Externalizante / Sustancias" o "Neurodesarrollo / Neurocognitivo / Motor" por arousal/interocepción/cognición, listar los 5 ítems pMSE que más arrastraron la clasificación. Eso permitiría corregir errores de entrada antes de cerrar.

## Conclusión

El pMSE es calificable por expertos, pero no todos sus campos tienen la misma confiabilidad sin entrenamiento. La cohorte identifica un núcleo de alto desacuerdo en conciencia/arousal, cognición breve, motor/etiología, insight-testing-egodistonía y funcionalidad PSP. El riesgo principal es clínico: una puntuación aparentemente correcta puede inducir cuarentena falsa, perder organicidad crónica o mover el macrofenotipo hacia manía/delirium cuando el caso es ansiedad, trauma, neurocognición lenta o frontalidad.
