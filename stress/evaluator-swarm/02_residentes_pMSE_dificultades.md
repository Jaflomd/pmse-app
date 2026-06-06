# Reporte 02 · Residentes de psiquiatria evaluando pMSE

**Workspace:** `3-output/unified-intake/`  
**Instrumento revisado:** pMSE dentro de `intake-unificado.html`  
**Cohorte simulada:** 100 residentes de psiquiatria, con lectura de casos completos del stress-test v2  
**Fuentes locales:** `stress/schema.json`, `stress/REPORTE-STRESS-100.md`, `stress/results.json`, `stress/audit-rows.json`, `intake-unificado.html`

## Resumen ejecutivo

La cohorte no reporta dificultad uniforme en todo el pMSE. Los items basales y observables de entrevista breve fueron entendidos con relativa facilidad, pero los residentes tienden a perder confiabilidad cuando el item exige separar estado actual, curso longitudinal y significado clinico del polo puntuado.

Los focos de mayor desacuerdo fueron: `NC.conciencia`, el perfil neurocognitivo bedside (`NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall`), `F1.expresividad`, `F2.velocidad`, `F3.drive`, `F4.experiencia`, `F4.contenido`, `F7.testing`, `F7.auto-mentalización`, `F7.mentalización-otro`, items neuromotores con etiologia (`NM.estereotipia`, `NM.diskinesia`, `NM.acatisia`, `NM.parkinsonismo`) y funcionalidad PSP (`FUN.psp_utiles`, `FUN.psp_relaciones`, `FUN.psp_autocuidado`, `FUN.psp_disruptivas`).

La razon principal no fue falta de interes, sino mezcla de seis fuentes de dificultad: ambiguedad semantica, anclaje clinico insuficiente, baja observabilidad en entrevista breve, confusion de direccion `+/-`, necesidad de integracion longitudinal y riesgo clinico de calificar mal. La dificultad mas peligrosa fue `NC.conciencia`: el stress-test muestra que `K11` con `NC.conciencia=+2` queda en cuarentena organica alta, aunque el caso era hipervigilancia sin delirium. En la cohorte, ese mismo borde produjo el mayor desacuerdo conceptual: muchos residentes leen `+2` como "mas alterado" sin distinguir hiperarousal de disminucion/fluctuacion de conciencia.

## Tabla rankeada de items y dominios dificiles

| Rank | ID pMSE / dominio | Dificultad esperada en 100 residentes | Tipo dominante de dificultad | Por que resulta dificil | Riesgo clinico si se califica mal |
|---:|---|---:|---|---|---|
| 1 | `NC.conciencia` | 64/100 | Confusion de direccion `+/-`; riesgo clinico | El item opera como compuerta. `-1` y delirium son de alto riesgo, pero `+2` puede representar hipervigilancia/ansiedad. El caso `K11` ilustra el error: hipervigilancia sin delirium termino en gate organico alto. | Sobre-cuarentena por ansiedad o, en el otro extremo, no detectar delirium hipoactivo. |
| 2 | `F7.testing` | 59/100 | Ambiguedad semantica; observabilidad breve | "Reality testing" se confunde con insight, juicio, conviccion delirante, suspicacia y adherencia. En psicosis, ansiedad intensa y disociacion los residentes no siempre saben si puntuar contenido, conviccion o conducta. | Subestimar psicosis activa o sobrediagnosticar perdida de realidad en ansiedad/panico. |
| 3 | `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall` | 56/100 | Anclaje clinico insuficiente; integracion longitudinal | Los subtests tienen umbrales concretos, pero la interpretacion exige educacion, idioma, depresion, sedacion y edad. En `F03`, `F04`, `C08`, `F14`, `K20` el motor muestra que lo neurocognitivo puede quedar subponderado o absorbido por "Activacion / Externalizante". | No escalar organicidad cronica/estructural pese a deterioro cognitivo. |
| 4 | `F1.expresividad` | 51/100 | Ambiguedad semantica; anclaje clinico | El polo negativo se confunde entre sintomas negativos, depresion, catatonia, neurocognicion, disociacion y rasgos del desarrollo. El reporte de stress identifica "pobreza del habla" como senal organica posible, lo que aumenta la carga interpretativa. | Confundir depresion retardada, negativos primarios y organicidad frontal. |
| 5 | `NM.estereotipia`, `NM.diskinesia`, `NM.parkinsonismo` | 48/100 | Necesidad de etiologia; riesgo clinico | El score no basta: los especificadores "Espontanea", "Farmacologica", "Tardia" cambian la lectura. `M20` muestra falso rule-in organico por `NM.estereotipia` espontanea en tics/Tourette. | Enviar a workup organico urgente por fenomenos cronicos del neurodesarrollo o no reconocer parkinsonismo espontaneo. |
| 6 | `F2.velocidad` y `NM.acatisia` | 46/100 | Observabilidad breve; confusion ansiedad-motor | Agitacion ansiosa, acatisia, mania, consumo y amenaza conductual se parecen en una entrevista corta. La acatisia exige inquietud subjetiva mas signos objetivos; si se etiqueta como ansiedad se puede aumentar antipsicotico. | Iatrogenia por intensificar antipsicotico; subestimar riesgo suicida asociado a acatisia severa. |
| 7 | `F3.drive`, `F3.anticipación`, `F3.tono` | 44/100 | Confusion de direccion `+/-`; integracion longitudinal | Bajo drive puede ser depresion, negativos, cannabis, neurocognicion o rasgo basal. Alto drive puede ser mania, ansiedad o sobreactivacion compensatoria. | Clasificar mal depresion/negativos/mania y alimentar macrofenotipos erroneos. |
| 8 | `F4.experiencia`, `F4.contenido` | 42/100 | Ambiguedad semantica; anclaje fenomenologico | Los residentes mezclan modalidad perceptiva, contenido delirante, disociacion, intrusiones y creencias culturalmente moduladas. El stress-test muestra psicosis bien cubierta, pero bordes organicos tardios (`F11`, `L02`) siguen siendo dificiles. | Leer psicosis tardia como primaria sin sospecha organica o medicalizar experiencias no psicoticas. |
| 9 | `F7.auto-mentalización`, `F7.mentalización-otro` | 40/100 | Ambiguedad semantica; observabilidad breve | Cuesta separar mentalizacion de insight, empatia, alexitimia, suspicacia, narcisismo y autismo adulto. | Sobrediagnosticar trastorno de personalidad o no reconocer TEA/TDAH/trauma. |
| 10 | `J.juicio`, `I.insight`, `E.egodistonia` | 38/100 | Ambiguedad semantica; riesgo clinico | Son constructos cercanos pero no equivalentes. En casos de suicidio, violencia, capacidad y psicosis, los residentes tienden a hacer una impresion global y repetirla en los tres campos. | Capacidad decisional mal estimada; riesgo subestimado por "buen insight" superficial. |
| 11 | `G.arousal`, `G.coherencia`, `G.sueno-ritmo`, `G.interocepcion` | 35/100 | Observabilidad breve; direccion `+/-` | Arousal y sueno se puntuan por relato, observacion y contexto. Interocepcion se confunde con somatizacion, panico, trauma o psicosis corporal. | Ansiedad/panico clasificados como activacion maniforme o neurocognitiva. |
| 12 | `FUN.psp_utiles`, `FUN.psp_relaciones`, `FUN.psp_autocuidado`, `FUN.psp_disruptivas` | 34/100 | Direccion bipolar; integracion longitudinal | Los polos negativos y positivos pueden ser patologicos: aislamiento vs fusion, abandono vs hipercontrol, autoagresividad vs heteroagresividad. Requiere historia, no solo entrevista actual. | Deterioro funcional infraestimado o asignado al polo equivocado. |
| 13 | `EXT.plan_suicida`, `EXT.medios`, `EXT.intento_previo`, `EXT.soporte` | 29/100 | Fuente externa; riesgo clinico | Los residentes entienden la gravedad, pero dudan si estos inputs "pertenecen" al pMSE porque no son estado mental observado. El stress-test valida 3ST y seguridad, pero exige triangulacion con Historia. | Falso verde si el bMSE esta tranquilo pero Historia/EXT estan en rojo. |
| 14 | `EXT.hx_violencia`, `EXT.bvc_ruidos`, `EXT.bvc_amenaza_verbal`, `EXT.bvc_objetos` | 27/100 | Observabilidad por ventana temporal | El marco de 24 horas del BVC no siempre coincide con la entrevista. Los residentes mezclan historia lejana, amenazas actuales y conducta disruptiva observada. | Sobreestimar o subestimar riesgo heteroagresivo agudo. |
| 15 | `EXT.decision_capacidad`, `EXT.rechazo_ayuda`, `EXT.sustancias` | 25/100 | Anclaje clinico insuficiente | `EXT.decision_capacidad` exige decision especifica; sin ella no hay "capacidad global". `EXT.rechazo_ayuda` se confunde con bajo insight, depresion o rasgo oposicionista. | Evaluaciones de capacidad invalidas; negligencia o intoxicacion mal ponderadas. |

## Comentarios representativos de residentes

- "En `NC.conciencia` me cuesta saber si el paciente ansioso y superalerta va en `+2` o si eso debe activar la misma alarma que un delirium. El caso tipo `K11` me parece el borde mas peligroso."
- "`F7.testing` se me cruza con `I.insight` y `J.juicio`. Si el paciente acepta medicacion pero mantiene una idea delirante, no se donde poner el peso."
- "Los subtests `NC.tmt` y `NC.recall` son faciles de administrar, pero dificiles de interpretar en depresion severa, baja escolaridad o adulto mayor."
- "En `F1.expresividad`, un paciente con depresion, sintomas negativos y rasgos autistas puede verse igual en cinco minutos."
- "Con `NM.estereotipia` no basta marcar presente. Si el movimiento es de toda la vida, por TEA o Tourette, no deberia tener el mismo valor que algo neurologico de novo."
- "`FUN.psp_disruptivas` me obliga a pensar en dos direcciones de dano: autoagresion y heteroagresion. Me parece util, pero es facil equivocarse de polo."
- "`EXT.decision_capacidad` me hizo dar cuenta de que no puedo evaluar capacidad si no se que decision concreta esta tomando el paciente."

## Patrones de error observados en la cohorte simulada

1. **Colapso de constructos cercanos.** `F7.testing`, `I.insight`, `J.juicio` y `E.egodistonia` fueron puntuados como si fueran una sola impresion global. El error tipico fue "si reconoce enfermedad, entonces todo normal", aun con alteracion del testing de realidad.

2. **Lectura lineal de escalas bipolares.** En `NC.conciencia`, `FUN.psp_*`, `F2.velocidad`, `F3.drive` y `P2.afiliación`, varios residentes asumieron que `+` siempre significa "mas grave" y `-` siempre "menos activo". En realidad ambos polos pueden ser clinicamente relevantes.

3. **Sobredependencia de lo observable en cinco minutos.** Items como `NC.recall`, `NC.tmt`, `F1.expresividad`, `F3.drive`, `G.sueno-ritmo` y `FUN.psp_*` requieren contexto. Cuando la entrevista fue breve, la cohorte tendio a normalizar por defecto.

4. **Subdeteccion de organicidad lenta.** Los casos `F04`, `F08`, `F09`, `F11`, `C08`, `N08`, `L02` y `K14` en el stress-test muestran organicidad cronica/estructural con conciencia preservada y puntajes bajos de organicidad. Para residentes, el patron dificil es exactamente ese: neurocognicion o cambio conductual tardio sin delirium evidente.

5. **Falso rule-in por movimiento "espontaneo".** `NM.estereotipia` y `NM.diskinesia` generaron errores cuando el residente no pregunto edad de inicio, curso, exposicion a antipsicoticos o historia del desarrollo. `M20` es el ejemplo local de Tourette/tics que puede activar una lectura organica excesiva.

6. **Confusion ansiedad/mania/acatisia.** `F2.velocidad`, `G.arousal`, `F6.amenaza`, `F6.frustración` y `NM.acatisia` se mezclaron en cuadros de panico, mania, intoxicacion y agitacion. El error mas riesgoso fue etiquetar acatisia como ansiedad.

7. **Riesgo triangulado incompleto.** Aunque el stress-test valida seguridad y 3ST, los residentes tienden a confiar demasiado en la apariencia actual. Casos adversariales como `K05` y `K06` obligan a triangular pMSE, Historia y EXT.

## Campos de alto desacuerdo esperable

| Campo | Desacuerdo esperado | Error mas frecuente | Categoria de dificultad |
|---|---:|---|---|
| `NC.conciencia` | Muy alto | Tratar `+2` igual que delirium | Direccion `+/-`; riesgo clinico |
| `F7.testing` | Muy alto | Confundir con insight/juicio | Ambiguedad semantica |
| `NC.tmt`, `NC.recall` | Alto | No ajustar por depresion, edad, educacion o sedacion | Anclaje clinico; longitudinal |
| `F1.expresividad` | Alto | Confundir negativos, depresion y neurodesarrollo | Ambiguedad semantica |
| `NM.estereotipia` | Alto | No diferenciar espontanea cronica de de novo | Integracion longitudinal |
| `NM.acatisia` | Alto | Puntuar como ansiedad/agresividad | Observabilidad breve; riesgo clinico |
| `FUN.psp_disruptivas` | Medio-alto | Mezclar autoagresion y heteroagresion | Direccion bipolar |
| `EXT.decision_capacidad` | Medio-alto | Evaluar "capacidad global" | Anclaje clinico insuficiente |

## Recomendaciones de entrenamiento

1. Entrenar `NC.conciencia` como compuerta con tres escenarios contrastados: delirium hipoactivo (`F02`), delirium hiperactivo (`F01`) e hipervigilancia ansiosa (`K11`). La regla docente debe ser explicita: hiperarousal no equivale automaticamente a delirium.

2. Crear una mini-rubrica para diferenciar `F7.testing`, `I.insight`, `J.juicio` y `E.egodistonia`: realidad compartida, conciencia de enfermedad, decision practica y malestar/ajeneidad no son sinonimos.

3. Practicar neurocognicion con casos de organicidad lenta: `F04`, `C08`, `F08`, `F09`, `F11`, `N08`, `L02`, `K20`. El objetivo no es solo administrar `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall`, sino traducir patrones en sospecha clinica.

4. Separar movimiento, ansiedad y activacion en entrenamiento: usar `NM.acatisia`, `NM.parkinsonismo`, `NM.estereotipia`, `NM.diskinesia`, `F2.velocidad` y `G.arousal` con videos o viñetas. La pregunta clave para acatisia debe incluir inquietud interna subjetiva.

5. Enseñar escalas bipolares con ejemplos de ambos polos patologicos: `FUN.psp_relaciones` (aislamiento vs fusion), `FUN.psp_autocuidado` (abandono vs hipercontrol), `FUN.psp_disruptivas` (autoagresividad vs heteroagresividad), `P2.afiliación` (desapego vs dependencia).

6. Hacer ejercicios de triangulacion de riesgo con `EXT.plan_suicida`, `EXT.medios`, `EXT.intento_previo`, `EXT.soporte`, `EXT.hx_violencia` y BVC. La consigna debe forzar discrepancias entre apariencia actual e Historia, como en `K05` y `K06`.

## Recomendaciones UX para el pMSE

1. En `NC.conciencia`, mostrar una advertencia contextual: "`+1/+2` = hipervigilancia/hiperarousal; no activar delirium sin fluctuacion, desorientacion o reduccion de conciencia". Esto atacaria directamente el error observado en `K11`.

2. En `F7.testing`, agregar microdefiniciones visibles junto a `I.insight` y `J.juicio`, para evitar que el residente duplique la misma impresion en tres campos.

3. En `NC.*`, incluir un pequeño panel "interpretar con" edad, educacion, idioma, sedacion, depresion y basal previo. El score bruto no deberia sentirse autosuficiente.

4. En `NM.estereotipia`, `NM.diskinesia` y `NM.parkinsonismo`, hacer obligatoria la pregunta de curso/etiologia cuando el score sea distinto de 0: espontaneo de novo, cronico del desarrollo, tardio por antipsicotico o farmacologico agudo.

5. En `FUN.psp_*`, mostrar visualmente que ambos extremos son disfuncion, no una escala simple de gravedad ascendente.

6. En `EXT.decision_capacidad`, bloquear o marcar como incompleta la evaluacion si no hay decision especifica declarada.

7. Para items de riesgo (`EXT.*`, `FUN.psp_disruptivas`, `NM.acatisia`, `NC.conciencia`), pedir una nota breve cuando el score activa alerta. Esa nota sirve como entrenamiento y como trazabilidad clinica.

## Cierre

Desde la mirada de 100 residentes, el pMSE es usable pero exige calibracion. Los items mas dificiles no son los mas largos, sino los que obligan a distinguir fenomenos parecidos con consecuencias distintas: delirium vs hipervigilancia, psicosis vs insight parcial, retardo depresivo vs negativos, organicidad cronica vs cuadro primario, acatisia vs ansiedad, y funcionalidad por deficit vs exceso. La prioridad docente y UX deberia ser reducir esos bordes, porque ahi se concentran tanto el desacuerdo como el riesgo clinico.
