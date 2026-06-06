# Cohorte estudiantil pMSE: dificultades de calificacion

**Workspace:** `3-output/unified-intake/`  
**Instrumento evaluado:** pMSE dentro de `intake-unificado.html`  
**Rol simulado:** cohorte de 100 estudiantes  
**Fecha:** 2026-06-01  
**Base local revisada:** `stress/schema.json`, `stress/REPORTE-STRESS-100.md`, `stress/results.json`, `stress/audit-rows.json`, `intake-unificado.html` y catalogo pMSE en `3-output/bmse/book-bmse/proposal/bmse-data.js`.

Este reporte no crea 100 evaluaciones individuales. Sintetiza, como cohorte, donde seria esperable mayor desacuerdo al puntuar los IDs reales del pMSE, usando los 100 casos del stress-test como matriz de exposicion clinica.

## Resumen ejecutivo

Los estudiantes no tendrian el mayor problema con los campos de seguridad cerrados: `EXT.plan_suicida`, `EXT.medios`, `EXT.intento_previo`, `EXT.soporte` y el resultado 3ST aparecen bien contenidos por el motor en el stress-test. La dificultad principal aparece cuando deben traducir fenomenologia clinica breve a una escala bipolar `-2` a `+2`, especialmente cuando un mismo signo puede significar organicidad, ansiedad, mania, depresion, neurodesarrollo o rasgos de personalidad.

La zona mas riesgosa es **organicidad cronica con conciencia preservada**. En el stress-test, casos como `F04`, `F08`, `F09`, `F11`, `C08`, `N08`, `K14` y `L02` no escalan adecuadamente la organicidad pese a señales clinicas relevantes. Para estudiantes, esto se traduce en dudas al puntuar `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall`, `F1.expresividad`, `F3.drive`, `J.juicio` e `I.insight`: ven "depresion", "psicosis" o "personalidad" antes que patron neurocognitivo, inicio tardio o cambio conductual organico.

Tambien destaca un problema de direccion: `NC.conciencia=+2` en `K11` representa hipervigilancia, pero el gate de validez del intake trata `NC.conciencia != 0` como cuarentena organica. La cohorte tenderia a sobrerreferir hiperarousal ansioso como delirium si no se entrena la diferencia entre polo negativo, `-1/-2`, y polo positivo, `+1/+2`.

## Tabla rankeada de items/dominios dificiles

| Rank | IDs pMSE | Dificultad dominante | Evidencia local que dispara la preocupacion | Error tipico esperado en estudiantes | Riesgo clinico |
|---:|---|---|---|---|---|
| 1 | `NC.conciencia` | Confusion de direccion (+/-) + riesgo clinico | `K11` marca hipervigilancia `+2`; el reporte describe gate por `NC.conciencia != 0` y cuarentena falsa | Puntuar hiperalerta ansiosa como "alteracion de conciencia" equivalente a obnubilacion | Alto: sobrediagnostico de delirium o cuarentena innecesaria |
| 2 | `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall` | Anclaje clinico insuficiente + observabilidad en entrevista breve | `F04`, `C08`, `F09`, `N08` quedan con organicidad baja pese a senales cognitivas; `F03` con NC todos en `-2` cae en macro no neurocognitivo | No administrar pruebas bedside por falta de tiempo; atribuir fallas a depresion, ansiedad o bajo esfuerzo | Alto: falso negativo de organicidad cronica |
| 3 | `F1.expresividad`, `F3.tono`, `F3.drive`, `P2.afiliación` | Ambiguedad semantica + necesidad longitudinal | Casos `A07`, `K12`, `N10` se mueven hacia depresivo/internalizante o activacion pese a esperarse negativo/desapego | Confundir sintomas negativos con depresion, timidez, personalidad esquizoide o consumo | Medio-alto: tratamiento y formulacion equivocados |
| 4 | `F7.testing`, `F4.contenido`, `F4.experiencia`, `I.insight` | Ambiguedad semantica + umbral psicotico | Psicosis positiva clasifica bien, pero depresion psicotica, CHR-P y creencias sobrevaloradas exigen umbral fino | Puntuar toda conviccion rara como delusion `+/-2`, o minimizar psicosis si el relato es ordenado | Alto: riesgo de perder psicosis o sobrediagnosticarla |
| 5 | `F6.amenaza`, `G.arousal`, `F2.velocidad`, `G.sueno-ritmo`, `F6.animo-meta` | Confusion entre ansiedad, mania y agitacion | `D01`, `D03` caen en macro "Activacion / Externalizante / Sustancias"; `D02` cae en neurocognitivo/delirium hiperactivo | Leer panico/hipervigilancia como mania, o activacion maniaca como ansiedad | Medio-alto: riesgo farmacologico y de disposicion |
| 6 | `NM.tic`, `NM.estereotipia`, `NM.diskinesia`, `NM.parkinsonismo`, `NM.tremor` | Anclaje clinico insuficiente + necesidad longitudinal | `M20` Tourette/tics dispara rule-in organico por `NM.estereotipia: Espontanea`; F2 del reporte | Marcar cualquier movimiento espontaneo como extrapiramidalismo no farmacologico | Medio-alto: workup innecesario o interpretacion neurologica pobre |
| 7 | `G.coherencia`, `F5.regulación`, `F7.auto-mentalización`, `F7.mentalización-otro` | Observabilidad en entrevista breve + semantica abstracta | `A06` desorganizada se va a activacion; `H02` y `I01` generan mezclas neurodesarrollo/desregulacion | Usar "me cae raro" como proxy de mentalizacion o coherencia | Medio: baja confiabilidad interevaluador |
| 8 | `FUN.psp_utiles`, `FUN.psp_relaciones`, `FUN.psp_autocuidado`, `FUN.psp_disruptivas` | Necesidad de integracion longitudinal | PSP falla o advierte en muchos casos de psicosis/depresion; funcion actual vs basal no siempre visible | Puntuar deterioro actual sin comparar con funcionamiento premorbido | Medio: severidad inflada o infravalorada |
| 9 | `J.juicio`, `E.egodistonia`, `I.insight` | Ambiguedad semantica + integracion clinica | Son de los campos con mas variacion en los 100 casos (`I.insight` no basal en 73/100; `E.egodistonia` en 67/100) | Confundir desacuerdo con falta de insight; confundir egosintonia cultural con patologia | Medio-alto: capacidad, adherencia y riesgo mal estimados |
| 10 | `EXT.plan_suicida`, `EXT.medios`, `EXT.intento_previo`, `EXT.soporte`, `EXT.hx_violencia`, `EXT.bvc_*` | Riesgo clinico de calificar mal | Safety/3ST fue 100% en stress-test; adversariales `K05`, `K06`, `K07`, `N02`, `N03` muestran triangulacion | Campos faciles si se preguntan, pero se omiten por incomodidad o cierre prematuro | Alto por consecuencia, aunque no por complejidad tecnica |

## Comentarios representativos de la cohorte

- "En `NC.conciencia` no sabia si `+2` era peor que `-1`. Si esta muy alerta por panico, el sistema lo trata como si el fenotipo no fuera interpretable."
- "Los subtests `NC.tmt` y `NC.clock` parecen objetivos, pero en entrevista breve no siempre los hago; entonces termino poniendo `0` por omision."
- "Me cuesta separar `F1.expresividad=-2` por sintomas negativos de `F3.tono=-2` depresivo. En `A07` y `K12` senti que todo se parecia a depresion."
- "En `F7.testing`, una creencia religiosa/cultural intensa me hizo dudar entre `0`, `-1` y `-2`. Necesito ejemplos de creencia inusual, idea sobrevalorada y delusion."
- "Los movimientos `NM.tic`, `NM.estereotipia` y `NM.diskinesia` me parecen faciles cuando son obvios, pero no se si importan igual si son de toda la vida."
- "En `F6.animo-meta`, `G.sueno-ritmo` y `F2.velocidad` confundi ansiedad activada con hipomania. Me faltan anclas de duracion y cambio respecto al basal."
- "Para `FUN.psp_utiles` y `FUN.psp_relaciones`, si no pregunto funcionamiento previo, solo veo el estado actual y castigo de mas."
- "En `I.insight` marque bajo insight cuando el paciente no aceptaba mi hipotesis, pero despues vi que podia reconocer sufrimiento y pedir ayuda."

## Patrones de error esperados

1. **Normal por omision.** Los estudiantes tienden a dejar `0` en `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall` cuando no administran la prueba. Esto reduce sensibilidad a casos como `F04`, `C08`, `F09` y `N08`.

2. **Simetria falsa de la escala.** Se interpreta cualquier desviacion de `0` como el mismo tipo de alarma. El ejemplo critico es `NC.conciencia`: `-1/-2` sugieren disminucion de vigilancia; `+1/+2` sugieren hiperalerta/hipervigilancia. No deberian tener el mismo efecto clinico.

3. **Atractor depresivo para negativos.** `F1.expresividad`, `F3.tono`, `F3.drive`, `P2.afiliación` y `FUN.psp_relaciones` son leidos como depresion cuando el caso exige diferenciar sintomas negativos, desapego, autismo adulto, consumo o cambio organico.

4. **Atractor maniaco/externalizante para activacion.** `F2.velocidad`, `G.arousal`, `G.sueno-ritmo`, `F6.animo-meta` y `P1.dominancia` pueden empujar ansiedad, TEPT, panico o desorganizacion hacia "Activacion / Externalizante / Sustancias", como se observa en entradas ansiosas del stress-test.

5. **Movimiento sin temporalidad.** En `NM.estereotipia`, `NM.diskinesia`, `NM.parkinsonismo`, `NM.tremor` y `NM.tic`, el error es no preguntar si el signo es agudo/de novo, farmacologico, cronico, del desarrollo o presenciado. `M20` muestra el costo de no distinguir tic/neurodesarrollo de extrapiramidalismo organico agudo.

6. **Juicio clinico usado como impresion global.** `J.juicio`, `I.insight` y `E.egodistonia` se puntuan por simpatia, cooperacion o acuerdo con el entrevistador, no por evidencia observable.

7. **Riesgo preguntado tarde.** Aunque los campos `EXT.*` funcionaron bien en el stress-test, la cohorte reporta incomodidad para preguntar plan, medios, intento previo, violencia y soporte. El error no es conceptual sino de entrevista.

## Campos de alto desacuerdo probable

- **Muy alto desacuerdo:** `NC.conciencia`, `F7.testing`, `F4.contenido`, `I.insight`, `J.juicio`, `F1.expresividad`, `F3.drive`, `G.arousal`.
- **Alto desacuerdo por baja observabilidad:** `NC.tmt`, `NC.clock`, `NC.recall`, `NM.luria`, `NM.estereotipia`, `FUN.psp_utiles`, `FUN.psp_relaciones`.
- **Alto desacuerdo por direccion bipolar:** `F2.velocidad`, `F3.tono`, `F6.animo-meta`, `G.sueno-ritmo`, `P1.dominancia`, `P2.afiliación`, `E.egodistonia`.
- **Bajo desacuerdo si se pregunta directamente, alto riesgo si se omite:** `EXT.plan_suicida`, `EXT.medios`, `EXT.intento_previo`, `EXT.soporte`, `EXT.hx_violencia`, `EXT.bvc_amenaza_verbal`, `EXT.bvc_objetos`.

## Recomendaciones de entrenamiento

1. **Entrenar primero la direccion de los polos.** Usar viñetas contrastivas para `NC.conciencia=-1` vs `NC.conciencia=+2`, `F2.velocidad=-2` vs `+2`, `F3.drive=-2` vs `+2`, `F6.animo-meta=-2` vs `+2`.

2. **Hacer obligatorios los cinco mini-tests NC cuando exista edad tardia, cambio de personalidad, queja cognitiva o curso atipico.** Enfatizar que `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock` y `NC.recall` no son decorativos: son la principal defensa contra falso negativo de organicidad cronica.

3. **Usar pares de casos de oro.** Comparar `A07` vs depresion mayor, `D02` vs delirium hiperactivo, `M20` vs extrapiramidalismo agudo, `F04/F09/N08` vs trastornos primarios de personalidad o mania.

4. **Separar fenomeno, mecanismo y diagnostico.** El estudiante debe puntuar lo observable en `F1.expresividad`, `F4.contenido`, `F7.testing` o `NM.tic` antes de decidir si es depresivo, psicotico, organico, farmacologico o del neurodesarrollo.

5. **Practicar entrevista de riesgo como rutina, no como excepcion.** `EXT.plan_suicida`, `EXT.medios`, `EXT.intento_previo`, `EXT.soporte` y `EXT.hx_violencia` deben tener guiones breves y normalizados.

## Recomendaciones UX para el intake

1. **Mostrar advertencia direccional en `NC.conciencia`.** Si se elige `+1/+2`, la UI deberia decir "hiperalerta/hipervigilancia: no equivale a obnubilacion" y no mezclarlo visualmente con `-1/-2`.

2. **Distinguir `0` observado vs `0` por sweep.** Para subtests como `NC.tmt`, `NC.clock` o `NM.luria`, el usuario deberia confirmar si realmente administro la prueba.

3. **Agregar micro-anclas al lado de los scores dificiles.** Especialmente en `F7.testing`, `F4.contenido`, `I.insight`, `J.juicio`, `F1.expresividad`, `F3.drive` y `G.arousal`.

4. **Pedir temporalidad en motor.** En `NM.estereotipia`, `NM.diskinesia`, `NM.parkinsonismo`, `NM.tremor` y `NM.tic`, la UI deberia solicitar "agudo/de novo", "cronico", "farmacologico" o "del desarrollo".

5. **Vincular PSP a basal.** En `FUN.psp_utiles`, `FUN.psp_relaciones`, `FUN.psp_autocuidado` y `FUN.psp_disruptivas`, mostrar una pregunta puente: "comparado con su mejor funcionamiento habitual, esto es nuevo, cronico o fluctuante?"

6. **Resaltar red flags por edad e inicio.** Si historia/identidad indica inicio >40-50, primer episodio tardio o cambio conductual en adulto mayor, el pMSE deberia empujar al evaluador a revisar `NC.*`, `J.juicio`, `I.insight`, `F1.expresividad` y `F3.drive` antes de cerrar organicidad baja.

## Cierre

La cohorte estudiantil probablemente puede completar el pMSE, pero necesita entrenamiento explicito en tres operaciones: puntuar polos, no diagnosticos; observar o administrar antes de marcar `0`; e integrar temporalidad/basal antes de interpretar organicidad, negatividad, ansiedad, mania o riesgo. El cuello de botella no es la cantidad de items, sino la traduccion entre entrevista breve y anclas clinicas finas.
