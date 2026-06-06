# Cohorte 03 · Psiquiatras formados evaluando pMSE

**Instrumento evaluado:** pMSE dentro de `3-output/unified-intake/intake-unificado.html`  
**Simulación:** n=100 psiquiatras formados, con experiencia clínica general y familiaridad variable con instrumentos dimensionales.  
**Fuentes locales usadas:** `stress/schema.json`, `stress/REPORTE-STRESS-100.md`, `stress/results.json`, `stress/audit-rows.json` y verificación puntual de `intake-unificado.html`.  
**Pregunta:** qué partes del pMSE resultan difíciles de calificar y por qué.

## Resumen ejecutivo

La cohorte no encontró la mayor dificultad en reconocer cuadros francos de psicosis, manía, depresión severa o riesgo suicida agudo. El stress-test muestra que esos núcleos funcionaron bien: safety/3ST, suicidalidad lifetime y los fenotipos de psicosis/manía/depresión fueron robustos en la mayoría de los 100 casos.

La dificultad central aparece cuando el pMSE exige decidir si un signo observado en entrevista breve representa estado mental primario, organicidad crónica, neurodesarrollo, rasgo longitudinal o efecto situacional. Los campos más difíciles fueron `NC.conciencia`, los subtests `NC.*`, el bloque motor `NM.*`, los negativos/avolitivos `F1.expresividad`, `F2.velocidad`, `F3.drive`, los metacognitivos `F7.*`, y la traducción funcional `FUN.psp_*`.

El hallazgo más riesgoso para psiquiatras formados es la falsa tranquilidad ante organicidad lenta con `NC.conciencia=0`. En casos como F04, F08, F09, F11, C08, K14, L02 y N08, el stress-test documenta organicidad baja o no cuarentenada pese a edad de inicio tardía, cambio conductual, cognición alterada o lesión estructural probable. La cohorte tendería a reproducir ese problema si el formulario no fuerza integración longitudinal.

La segunda dificultad es de dirección: varios clínicos interpretan `+2` como "más patológico" y `-2` como "menos", pero en pMSE la dirección depende del dominio. `NC.conciencia=+2` en K11 produjo cuarentena por hipervigilancia ansiosa, mientras que reducciones en `F1.expresividad`, `F2.velocidad` o `F3.drive` pueden significar depresión, negativos, catatonía, delirium hipoactivo o neurocognición.

## Tabla rankeada de ítems/dominios difíciles

| Rank | Ítems/dominio pMSE | Dificultad dominante | Desacuerdo esperado en n=100 | Evidencia local y ejemplos | Riesgo clínico |
|---:|---|---|---:|---|---|
| 1 | `NC.conciencia` | Confusión de dirección (+/-) + riesgo clínico | 38-45/100 | K11: `NC.conciencia=+2` por hipervigilancia ansiosa terminó como gate/cuarentena; el HTML explicita que `NC.conciencia != 0` activa descartar delirium/organicidad. | Alto: falso delirium en ansiedad/pánico o falsa seguridad si solo se mira conciencia preservada. |
| 2 | `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall` | Observabilidad breve + integración longitudinal | 35-42/100 | F03 con NC todos deteriorados fue clasificado macro como "Activación / Externalizante / Sustancias"; F04, C08 y otros cuadros orgánicos crónicos no subieron organicidad de forma suficiente. | Alto: perder demencia, pseudodemencia, tumor frontal, psicosis tardía u organicidad lenta. |
| 3 | `F1.expresividad`, `F2.velocidad`, `F3.drive`, `F3.anticipación` | Ambigüedad semántica entre depresión, negativos, catatonía y enlentecimiento orgánico | 32-40/100 | A07 terminó como internalizante/depresivo pese a expectativa "negativo/desapego"; N10 como negativo/consumo también cae en zona gris. | Alto-medio: sobrediagnóstico depresivo o subdetección de negativos/catatonía. |
| 4 | `NM.estereotipia`, `NM.diskinesia`, `NM.tic`, `NM.parkinsonismo`, `NM.acatisia`, `NM.tremor` | Anclaje clínico insuficiente + etiología del especificador | 30-38/100 | M20: Tourette/tics con estereotipia "Espontánea" disparó rule-in orgánico/extrapiramidalismo no farmacológico. | Alto: cuarentena orgánica falsa o no distinguir tics, discinesia tardía y extrapiramidalismo agudo. |
| 5 | `F7.testing`, `F7.auto-mentalización`, `F7.mentalización-otro` | Ambigüedad semántica + necesidad de entrevista extendida | 28-36/100 | El schema incluye estos tres campos, pero los resultados muestran que psicótico, esquizotípico, personalidad y ansiedad pueden converger en baja metacognición/insight sin una regla de anclaje clara. | Medio-alto: confundir realidad alterada, rigidez de personalidad, alexitimia y trauma. |
| 6 | `G.arousal`, `G.coherencia`, `G.sueno-ritmo`, `G.interocepcion` | Observabilidad breve + dirección | 27-34/100 | D01/D02 y K11 muestran que arousal/interocepción ansiosa pueden arrastrar fenotipo hacia activación o neurocognitivo/delirium. | Medio-alto: medicalizar pánico como delirium o manía, o banalizar activación peligrosa. |
| 7 | `I.insight`, `J.juicio`, `E.egodistonia` | Ambigüedad entre rasgo, estado y cultura clínica del evaluador | 25-32/100 | En psicosis, personalidad, TOC y cuadros orgánicos estos campos cambian sentido según contenido y curso; N08 y F04 muestran que juicio bajo/desinhibición pueden leerse como manía primaria. | Medio-alto: decisiones de capacidad, adherencia y seguridad mal ponderadas. |
| 8 | `F4.experiencia`, `F4.contenido`, `F6.amenaza` | Anclaje fenomenológico insuficiente | 22-30/100 | A06 desorganizada y varios cuadros psicóticos/ansiosos se mueven entre saliencia, amenaza, disociación y contenido anómalo. | Medio: sobrediagnóstico de psicosis o subdetección de fenómenos psicóticos sutiles. |
| 9 | `F6.frustración`, `F6.animo-meta`, `F6.autoevaluación`, `F6.desesperanza` | Solapamiento afectivo + riesgo suicida indirecto | 20-28/100 | Safety/3ST funciona bien, pero el pMSE afectivo puede no separar desesperanza depresiva, irritabilidad mixta y frustración externalizante. | Medio: graduación inestable de severidad y 3ST amarillo. |
| 10 | `P1.dominancia`, `P2.afiliación` | Rasgo vs estado + sesgo cultural/interpersonal | 18-26/100 | F04, I02/I03/I04 y N08 muestran que dominancia/afiliación pueden representar personalidad, manía, DFT, trauma o estilo defensivo. | Medio: etiquetado de personalidad donde hay trastorno de estado u organicidad. |
| 11 | `FUN.psp_utiles`, `FUN.psp_relaciones`, `FUN.psp_autocuidado`, `FUN.psp_disruptivas` | Integración longitudinal + dependencia de informantes | 18-25/100 | PSP aparece fail/warn en depresiones, psicosis, demencias y riesgo conductual; en entrevista breve cuesta separar deterioro basal de deterioro actual. | Medio-alto: subestimar discapacidad o sobredimensionar gravedad por crisis puntual. |

## Comentarios representativos de la cohorte

> "Con `NC.conciencia` necesito que el instrumento me recuerde que +2 no es lo mismo que -2. En urgencias, un paciente hipervigilante por pánico puede parecer 'alterado', pero no es delirium."

> "Los `NC.*` son fáciles cuando hago pruebas formales, pero en una entrevista psiquiátrica breve termino inferiendo fluencia, memoria o TMT por impresión general. Ahí el desacuerdo sube."

> "`F1.expresividad=-2` y `F3.drive=-2` me dejan con la duda clásica: depresión severa, síntomas negativos, catatonía hipoactiva, consumo de cannabis o demencia. Sin curso longitudinal, marco lo que veo y puedo equivocarme."

> "En `NM.estereotipia` y `NM.diskinesia` me falta una decisión guiada: ¿es tic del neurodesarrollo, discinesia tardía, catatonía o extrapiramidalismo nuevo? El especificador de etiología pesa demasiado."

> "`F7.testing` suena simple, pero no todos llamamos 'testing de realidad' a lo mismo. En esquizotipia, trauma, insight parcial y delirios encapsulados se vuelve muy dependiente del evaluador."

> "Los `FUN.psp_*` se sienten más longitudinales que de estado mental. Si solo tengo la entrevista de hoy, puedo castigar autocuidado o relaciones por una crisis transitoria."

## Patrones de error esperados

1. **Organicidad crónica subcalificada con conciencia preservada.**  
   Psiquiatras formados tienden a confiar en `NC.conciencia=0` si el paciente está vigil y orientado. Esto reproduce la falla F1 del stress-test: F04, F08, F09, F11, C08, K14, L02 y N08 mantienen probabilidad orgánica baja o no cuarentenan pese a señales de inicio tardío, deterioro cognitivo, cambio conductual o lesión probable.

2. **Hipervigilancia confundida con alteración de conciencia.**  
   En K11, `NC.conciencia=+2` se comporta como gatillo de delirium. La cohorte anticipa errores cuando el formulario no separa explícitamente "aumento de alerta/arousal" de "disminución/fluctuación de conciencia".

3. **Negativos confundidos con depresión o avolición inespecífica.**  
   `F1.expresividad`, `F2.velocidad`, `F3.drive`, `F3.anticipación` y `P2.afiliación` concentran desacuerdo. A07 fue leído como internalizante/depresivo aunque el esperado era negativo/desapego; N10 mezcla consumo, negativos y síndrome amotivacional.

4. **Desorganización absorbida por activación/externalización.**  
   A06 fue clasificado como "Activación / Externalizante / Sustancias" frente a expectativa desorganizado/neurocognitivo. El problema práctico está en `G.coherencia`, `NC.fluencia`, `NC.recall`, `F4.contenido`, `I.insight` y la falta de anclajes observables de desorganización.

5. **Motor espontáneo leído como extrapiramidalismo orgánico.**  
   M20 muestra que `NM.estereotipia` con etiología "Espontánea" puede disparar un rule-in orgánico. La cohorte lo atribuye a falta de separación entre tic crónico, neurodesarrollo, catatonía, discinesia tardía y extrapiramidalismo agudo.

6. **Ansiedad/pánico desplazados hacia activación o neurocognitivo.**  
   D01/D02 y K11 señalan que `G.arousal`, `G.interocepcion`, `F6.amenaza`, `NC.conciencia` y `F2.velocidad` pueden parecer activación maniforme o delirium hiperactivo si no hay anclajes de miedo/interocepción.

7. **PSP usado como severidad global en vez de funcionamiento situado.**  
   `FUN.psp_utiles`, `FUN.psp_relaciones`, `FUN.psp_autocuidado` y `FUN.psp_disruptivas` se vuelven difíciles cuando el evaluador no sabe si debe puntuar basal, última semana, episodio actual o peor momento.

## Dificultad por categoría solicitada

| Categoría | Ítems más afectados | Cómo se manifiesta en psiquiatras formados |
|---|---|---|
| Ambigüedad semántica | `F7.testing`, `F7.auto-mentalización`, `F7.mentalización-otro`, `I.insight`, `E.egodistonia`, `J.juicio` | Diferentes escuelas clínicas usan los términos con fronteras distintas; el mismo paciente puede recibir baja realidad, bajo insight o baja mentalización. |
| Anclaje clínico insuficiente | `NM.estereotipia`, `NM.diskinesia`, `F1.expresividad`, `F2.velocidad`, `G.coherencia` | Falta una microguía con ejemplos de entrevista y contraejemplos: tic vs estereotipia, negativo vs deprimido, incoherencia vs pobreza verbal. |
| Observabilidad en entrevista breve | `NC.tmt`, `NC.clock`, `NC.digit`, `NC.recall`, `FUN.psp_*` | Si no se administran tareas o no hay informante, el evaluador infiere desde impresión global. Esto aumenta variabilidad incluso en especialistas. |
| Confusión de dirección (+/-) | `NC.conciencia`, `F2.velocidad`, `G.arousal`, `F1.expresividad`, `P2.afiliación` | El signo no siempre significa "más enfermedad"; puede indicar aumento, disminución, hipervigilancia, enlentecimiento, retraimiento o desinhibición. |
| Necesidad de integración longitudinal | `NC.*`, `FUN.psp_*`, `P1.dominancia`, `P2.afiliación`, `J.juicio`, `I.insight` | El pMSE capta estado, pero varios dominios requieren línea de base, edad de inicio, curso y cambio respecto al funcionamiento premórbido. |
| Riesgo clínico de calificar mal | `NC.conciencia`, `NC.*`, `NM.*`, `F6.desesperanza`, `EXT.plan_suicida`, `EXT.medios`, `FUN.psp_disruptivas` | Error puede cambiar gate orgánico, cuarentena, riesgo suicida/heteroagresivo, capacidad o necesidad de workup médico. |

## Campos de alto desacuerdo esperados

- **Muy alto desacuerdo:** `NC.conciencia`, `NC.fluencia`, `NC.tmt`, `NC.clock`, `NC.recall`, `F1.expresividad`, `F2.velocidad`, `F3.drive`, `NM.estereotipia`, `NM.diskinesia`, `F7.testing`.
- **Alto desacuerdo:** `G.arousal`, `G.coherencia`, `G.interocepcion`, `I.insight`, `J.juicio`, `P2.afiliación`, `FUN.psp_autocuidado`, `FUN.psp_disruptivas`.
- **Desacuerdo moderado pero clínicamente relevante:** `F6.desesperanza`, `F6.frustración`, `F6.animo-meta`, `F4.experiencia`, `F4.contenido`, `P1.dominancia`.

## Recomendaciones de entrenamiento

1. **Entrenar primero el eje de dirección.**  
   Usar viñetas cortas para `NC.conciencia`: delirium hipoactivo (-1/-2), hipervigilancia ansiosa (+1/+2), orientación intacta (0), fluctuación. La regla pedagógica debe ser: no todo `NC.conciencia != 0` equivale a delirium.

2. **Separar cinco perfiles de baja expresividad/drive.**  
   Crear ejercicios comparativos para `F1.expresividad`, `F2.velocidad`, `F3.drive` y `F3.anticipación`: depresión melancólica, síntomas negativos, catatonía, delirium hipoactivo y consumo/cannabis-amotivacional.

3. **Hacer obligatorio el "antes vs ahora" en organicidad lenta.**  
   Para `NC.*`, `J.juicio`, `I.insight`, `P1.dominancia`, `P2.afiliación` y `FUN.psp_*`, entrenar a no calificar solo la foto clínica. Deben preguntarse edad de inicio, curso, informante, cambio respecto a basal y progresión.

4. **Estandarizar el bloque motor con árbol de decisión.**  
   Antes de aceptar `NM.estereotipia`, `NM.diskinesia`, `NM.tic`, `NM.parkinsonismo`, `NM.acatisia` o `NM.tremor` como orgánico agudo, exigir: inicio, exposición farmacológica, cronicidad, suprimibilidad, urgencia, fluctuación y relación con neurodesarrollo.

5. **Calibrar `F7.*` con ejemplos fenomenológicos.**  
   `F7.testing`, `F7.auto-mentalización` y `F7.mentalización-otro` necesitan anclas: delirante, obsesivo egodistónico, trauma/disociación, personalidad, TEA y insight parcial.

6. **Usar doble puntuación en PSP.**  
   Para `FUN.psp_utiles`, `FUN.psp_relaciones`, `FUN.psp_autocuidado` y `FUN.psp_disruptivas`, entrenar dos preguntas: funcionamiento basal y funcionamiento del episodio actual. Si difieren, registrar la fuente del puntaje.

## Recomendaciones UX

1. **Mostrar tooltips de dirección por ítem.**  
   Especialmente en `NC.conciencia`, `F2.velocidad`, `G.arousal`, `F1.expresividad`, `F3.drive` y `P2.afiliación`: explicar qué significa -2, -1, 0, +1, +2 con ejemplos clínicos breves.

2. **Cambiar el gate de conciencia en la interfaz.**  
   El texto actual indica cuarentena si `NC.conciencia != 0`. Para reducir errores tipo K11, separar visualmente: "conciencia reducida/fluctuante" versus "hipervigilancia/arousal aumentado".

3. **Agregar advertencias contextuales para organicidad crónica.**  
   Si hay `NC.* <= -1`, edad de inicio >40, `FUN.psp_autocuidado <= -1`, cambio de personalidad o curso progresivo, mostrar un aviso de "organicidad lenta posible" aunque `NC.conciencia=0`.

4. **Forzar especificadores en `NM.*` antes de rule-in.**  
   Si `NM.estereotipia` o `NM.diskinesia` se marcan como espontáneas, pedir cronicidad, edad de inicio, exposición a antipsicóticos y patrón de tic/catatonia antes de activar rule-in orgánico.

5. **Anclar `F7.testing` con botones de contexto.**  
   Añadir opciones tipo "delirante", "obsesivo/egodistónico", "disociativo", "personalidad/rigidez", "neurodesarrollo" ayudaría a que el mismo puntaje no se interprete igual en todos los pacientes.

6. **Separar PSP basal y PSP actual.**  
   En `FUN.psp_*`, incluir dos columnas o un selector de ventana temporal. Esto evita que un episodio agudo borre funcionamiento premórbido o que un deterioro crónico se minimice por una entrevista ordenada.

## Conclusión

Para psiquiatras formados, el pMSE es clínicamente legible en dominios sindrómicos francos, pero difícil en los bordes donde el examen mental se vuelve inferencial: cognición breve, conciencia/arousal, negativos, motor, metacognición y PSP. La prioridad de entrenamiento y UX debería ser reducir errores de dirección y forzar integración longitudinal, porque esos dos mecanismos explican los desacuerdos con mayor riesgo clínico observados en el stress-test de 100 casos.
