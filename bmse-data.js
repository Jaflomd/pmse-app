// bmse-data.js — Catálogo compartido de dimensiones bMSE
// Generado desde bmse-scorer-v2.html. NO editar manualmente: re-extraer al actualizar v2.

const DIMS = [
  {
    id:'NC.conciencia', code:'NC', title:'Conciencia', type:'gate',
    scores:{
      '-2':'Coma / estupor',
      '-1':'Obnubilación',
      '0':'Vigilia normal',
      '+1':'Hiperalerta',
      '+2':'Hipervigilancia con interferencia'
    },
    details:{
      '-2':{
        nivel:'Coma / estupor',
        loQueVes:'Ojos cerrados. No responde a voz. Postura flácida o decorticada. Requiere estímulo intenso.',
        loQueDice:'No verbaliza, o sonidos ininteligibles.',
        contra:'Urgencia médica. El clínico evalúa estado vital, no estado mental.',
        clasica:'AMDP: 1 grave (vigilancia disminuida grave), 2 (obnubilación). ICD-11: MB20.0 (estupor), MB20.1 (coma). Fish: Delirium, Estupor, Coma, Torpor, Mutismo. Eguíluz: Delirium, Estupor, Coma, Obnubilación, Somnolencia, Sopor.'
      },
      '-1':{
        nivel:'Obnubilación',
        loQueVes:'Somnoliento. Parpadeo lento. Latencia de respuesta aumentada. Se duerme si no se estimula. Confuso al despertar.',
        loQueDice:'"¿Qué?..." Respuestas con latencia. Pierde el hilo. "Me cuesta pensar".',
        contra:'Preocupación: "¿lo estoy perdiendo?" Necesidad de repetir, hablar más fuerte.',
        clasica:'AMDP: 1 leve (vigilancia disminuida leve), 3 (estrechamiento). Fish: Confusión. Eguíluz: Obnubilación, Somnolencia.'
      },
      '0':{
        nivel:'Vigilia normal',
        loQueVes:'Despierto, contacto visual adecuado, responde en tiempo proporcionado.',
        loQueDice:'Responde con fluidez y coherencia.',
        contra:'Cómoda, fluida.',
        clasica:''
      },
      '+1':{
        nivel:'Hiperalerta',
        loQueVes:'Ojos muy abiertos. Scanning visual del entorno. Movimientos de orientación frecuentes. Respuestas rápidas, quizá precipitadas.',
        loQueDice:'"No puedo relajarme." "Estoy muy alerta." Respuestas rápidas pero coherentes.',
        contra:'El clínico nota la tensión del paciente. Leve contagio de alerta.',
        clasica:'AMDP: 4 (expansión de conciencia). Eguíluz: Hipervigilia, Hiperfrenia.'
      },
      '+2':{
        nivel:'Hipervigilancia con interferencia',
        loQueVes:'Scanning constante. Postura de alerta rígida. No puede cerrar los ojos. Agotamiento visible pero no logra descansar. Startle ante estímulos menores.',
        loQueDice:'"No puedo dormir." "No puedo apagar mi cabeza." "Siento que no puedo bajar la guardia." O no puede articular por agotamiento.',
        contra:'El clínico se siente observado. Incomodidad ante la intensidad. Impulso de tranquilizar.',
        clasica:'Eguíluz: Hipervigilia, Hiperfrenia. Reischies-2025: ch04 (hipervigilancia-hiperactivación).'
      }
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','1 grave, 2 (obnubilación)','1 leve, 3 (estrechamiento)','—','4 (expansión de conciencia)','— (no captura)'],
        ['ICD-11','MB20.0 (estupor), MB20.1 (coma)','MB21.5 (distractibilidad)','—','—','—'],
        ['DSM-5','Delirium, NCD mayor','Delirium','—','—','—'],
        ['Fish (2019)','Delirium, Estupor, Coma, Estado crepuscular, Torpor, Mutismo','Confusión','—','—','—'],
        ['Eguíluz (2005)','Delirium, Estupor, Coma, Obnubilación, Somnolencia, Sopor','Obnubilación, Somnolencia','—','Hipervigilia, Hiperfrenia','Hipervigilia, Hiperfrenia'],
        ['Reischies-2025','ch08 (obnubilación-somnolencia, obnubilación-delirium)','ch08 (conciencia estrechada)','—','ch08 (alteración experiencia consciente)','ch04 (hipervigilancia)']
      ]
    },
    guide:['¿El paciente está despierto espontáneamente? Si no: estímulo verbal → táctil → nociceptivo','¿Mantiene vigilia durante la entrevista sin estímulo?','¿La alerta es proporcionada al contexto?','¿Ha estado más somnoliento o confuso de lo habitual?','¿Puede relajarse? ¿Puede dormir? ¿Siente que no puede apagar su alerta?','¿Hay momentos del día en que está más lúcido y otros más confuso?','Orientación: ¿Qué día es hoy? ¿Dónde estamos? ¿Cómo se llama?'],
    specifiers:[
      {id:'CONF',type:'checkbox',label:'[CONF] Fluctuante o desorientado',showWhen:'+1,+2'}
    ]
  },
  {
    id:'NC.perfil', code:'NC', title:'Perfil Neurocognitivo Bedside', type:'multitest',
    tests:[
      {
        id:'NC.fluencia', label:'Fluencia semántica',
        instruction:'"Dígame todos los animales que pueda en 60 segundos"',
        scores:{'0':'≥18 animales (normal)','-1':'12–17 animales (leve)','-2':'<12 animales (déficit)'},
        specifiers:[
          {id:'fl_total',type:'text',label:'Total',placeholder:'Número total'},
          {id:'fl_clusters',type:'text',label:'Clusters',placeholder:'Ej: 3 clusters'},
          {id:'fl_switches',type:'text',label:'Switches',placeholder:'Ej: 8 switches'},
          {id:'fl_intrusiones',type:'checkbox',label:'Intrusiones'},
          {id:'fl_perseveraciones',type:'checkbox',label:'Perseveraciones'}
        ],
        circuito:'Temporal lateral (almacén semántico) + Frontal (búsqueda estratégica: clustering/switching). DA frontal modula switching.',
        precision:'Clusters bajos + switches altos = perfil frontal (SSD). Clusters altos + switches bajos = perfil temporal (Alzheimer). Intrusiones = desinhibición frontal.'
      },
      {
        id:'NC.digit', label:'Digit span',
        instruction:'Forward: repetir secuencia (5-8-2-6-4). Backward: repetir al revés (7-2-9).',
        scores:{'0':'6F / 4B (normal)','-1':'5F / 3B (leve)','-2':'≤4F / ≤2B (déficit)'},
        specifiers:[
          {id:'dig_f',type:'text',label:'Forward',placeholder:'Ej: 5'},
          {id:'dig_b',type:'text',label:'Backward',placeholder:'Ej: 3'},
          {id:'dig_ratio',type:'checkbox',label:'Ratio F-B anormal (>2)'}
        ],
        circuito:'Forward: loop fonológico (Broca + parietal inf.). Backward: ejecutivo central (DLPFC) + actualización WM. Ratio F-B alto = déficit ejecutivo selectivo.',
        precision:'Forward bajo = atención básica afectada (delirium, sedación). Backward bajo con Forward ok = déficit ejecutivo puro (SSD, depresión). Ambos bajos = compromiso global.'
      },
      {
        id:'NC.tmt', label:'TMT (oral)',
        instruction:'"Cuente alternando números y letras: 1-A-2-B-3-C..." (cronometrar)',
        scores:{'0':'A <30s, B <75s (normal)','-1':'Ratio B/A >3.0 (leve)','-2':'B >180s (déficit)'},
        specifiers:[
          {id:'tmt_a',type:'text',label:'TMT-A',placeholder:'Segundos'},
          {id:'tmt_b',type:'text',label:'TMT-B',placeholder:'Segundos'},
          {id:'tmt_ratio',type:'text',label:'Ratio B/A',placeholder:'Ej: 3.2'},
          {id:'tmt_errores',type:'text',label:'Errores',placeholder:'Tipo: secuencia, omisión'}
        ],
        circuito:'TMT-A: velocidad de procesamiento (parietal + motor). TMT-B: set-shifting (DLPFC + cingulado anterior). Ratio B/A aísla el componente ejecutivo controlando velocidad.',
        precision:'A lento + B lento = enlentecimiento global (depresión, sedación → F2). A normal + B lento = déficit set-shifting selectivo (SSD, TOC). Errores de secuencia = desinhibición frontal.'
      },
      {
        id:'NC.clock', label:'Clock Drawing',
        instruction:'"Dibuje un reloj que marque las 11:10"',
        scores:{'0':'Normal','-1':'Error menor','-2':'Errores graves'},
        specifiers:[
          {id:'clk_neglect',type:'checkbox',label:'[Neglect] Hemiinatención espacial'},
          {id:'clk_planif',type:'checkbox',label:'[Planificación] Números mal distribuidos'},
          {id:'clk_abstraccion',type:'checkbox',label:'[Abstracción] Literal (escribe "11:10")'},
          {id:'clk_visuoesp',type:'checkbox',label:'[Visuoespacial] Distorsión del círculo/manecillas'}
        ],
        circuito:'Integra: parietal (visuoespacial), frontal (planificación), temporal (semántico: concepto de reloj). Neglect → lesión parietal derecha. Abstracción literal → frontal.',
        precision:'Neglect unilateral = screening ACV derecho. Números agrupados 12-6 = déficit planificación frontal (demencia frontal). "11:10" literal = fallo abstracción (Alzheimer moderado). Visuoespacial puro = parietal/occipital.'
      },
      {
        id:'NC.recall', label:'3-Word Recall',
        instruction:'"Repita: CASA, ÁRBOL, PELOTA" → preguntar a los 3-5 min. Si falla: dar cues categóricas.',
        scores:{'0':'3/3 libre (normal)','-1':'2/3 libre, cues mejora (leve)','-2':'≤1/3 libre (déficit)'},
        specifiers:[
          {id:'rec_tipo',type:'radio',label:'Tipo de déficit',options:['Retrieval↓ (cues mejora)','Encoding↓ (cues no mejora)','Registro falla']},
          {id:'rec_intrusiones',type:'checkbox',label:'Intrusiones (confabulación)'},
          {id:'rec_falso_reconocimiento',type:'checkbox',label:'Falso reconocimiento'}
        ],
        circuito:'Registro: atención (frontal) + encoding (hipocampo). Consolidación: hipocampo → neocorteza. Retrieval: frontal (búsqueda estratégica) + hipocampo (acceso directo).',
        precision:'Encoding↓ (cues no mejora) = hipocampal → Alzheimer (sensibilidad 85%). Retrieval↓ (cues mejora) = frontal-subcortical → depresión, vascular, SSD. Intrusiones + falso reconocimiento = DLB, confabulación frontal. Registro falla = atención → delirium, TDAH.'
      }
    ],
    guide:['Administrar los 5 tests en orden. Tiempo total: 5-8 minutos.','Registrar score + especificadores para cada test individualmente.','El perfil de déficits (no el score global) informa el diferencial.'],
    frameworks:{
      headers:['Test','Evalúa','Circuito','Score −2','Score −1','Score 0'],
      rows:[
        ['Fluencia','Lenguaje + ejecutivo','Temporal + Frontal','<12','12-17','≥18'],
        ['Digit span','Atención + WM','Loop fonológico + DLPFC','≤4F/≤2B','5F/3B','6F/4B'],
        ['TMT','Velocidad + set-shifting','Parietal + DLPFC + ACC','B >180s','Ratio >3.0','A<30s B<75s'],
        ['Clock','Visuoespacial + planificación','Parietal + Frontal + Temporal','Errores graves','Error menor','Normal'],
        ['3-Word Recall','Memoria episódica','Hipocampo + Frontal','≤1/3','2/3 + cues ok','3/3']
      ]
    }
  },
  {
    id:'F1.expresividad', code:'F1', title:'Expresividad comunicativa', type:'bipolar',
    scores:{'-2':'Aplanamiento marcado','-1':'Expresividad restringida','0':'Expresividad proporcional','+1':'Expansividad / teatralidad regulable','+2':'Labilidad / desborde expresivo'},
    instruction:'Evalúe la salida comunicativa observable: rostro, prosodia, gestos, mirada y timing expresivo. No puntúa emoción subjetiva ni regulación emocional; si el problema es control del afecto, cruce E.regulación.',
    details:{
      '-2':{nivel:'Aplanamiento marcado',loQueVes:'Rostro casi inmóvil, voz monótona, gestos mínimos o ausentes, mirada fija/vacía o contacto visual muy pobre. No cambia con material emocional claro.',loQueDice:'Respuestas breves o sin entonación afectiva, aunque el contenido sea triste, amenazante o relevante.',contra:'El clínico puede sentir distancia, baja reciprocidad o necesidad de "empujar" la comunicación.',clasica:'AMDP: afecto embotado. DSM-5: diminished emotional expression. Fish: aplanamiento/embotamiento.'},
      '-1':{nivel:'Expresividad restringida',loQueVes:'Rango reducido pero presente: sonrisa breve, prosodia baja, gestos escasos, mirada social limitada. Se enciende algo con apoyo o temas específicos.',loQueDice:'Comunicación comprensible, pero con poco color emocional.',contra:'El clínico nota apagamiento, pero todavía hay respuesta expresiva.',clasica:'AMDP: afecto embotado leve. HiTOP/Forbes: inexpressivity.'},
      '0':{nivel:'Expresividad proporcional',loQueVes:'Rostro, voz, gesto y mirada varían con el contenido y el contexto. La expresión ayuda a entender la emoción sin dominar la entrevista.',loQueDice:'Comunicación afectivamente congruente y modulada.',contra:'Reciprocidad natural; el clínico no siente ni vacío expresivo ni actuación.',clasica:''},
      '+1':{nivel:'Expansividad / teatralidad regulable',loQueVes:'Expresión amplificada: gestos grandes, prosodia dramática, risa/llanto fácil o estilo teatral, pero todavía congruente y redirigible.',loQueDice:'Relato con énfasis emocional alto, metáforas, dramatización o familiaridad expresiva.',contra:'El clínico siente intensidad o performance, pero la alianza sigue manejable.',clasica:'Expansividad afectiva, histrionismo/teatralidad si rasgo; manía sólo si cruza con F3/F6/G.'},
      '+2':{nivel:'Labilidad / desborde expresivo',loQueVes:'Cambios rápidos, desproporcionados o poco modulables: risa-llanto-irritación en segundos, expresión incongruente o que sobrepasa el contenido.',loQueDice:'Expresión emocional difícil de contener o incongruente con lo narrado.',contra:'El clínico se activa para contener, pausar o reorganizar la entrevista.',clasica:'AMDP: labilidad/incontinencia afectiva. Fish: labilidad/excitación. Cruzar E.regulación si hay falla de control.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','61 afecto embotado','61 leve','—','expansividad/euforia expresiva','labilidad/incontinencia afectiva'],
        ['ICD-11','afecto reducido / pobreza expresiva','—','—','sociabilidad/expansividad si contexto','ira/labilidad si contexto'],
        ['DSM-5','SZ diminished emotional expression','—','—','expansive affect si manía','lability si TLP/manía/pseudobulbar'],
        ['Fish (2019)','Aplanamiento, embotamiento','—','—','Teatralidad/expansividad','Excitación, labilidad'],
        ['HiTOP / Forbes','Inexpressivity','Detachment','—','Exuberance / theatricality','Affect lability']
      ]
    },
    guide:['Observe rostro, prosodia, gestualidad, mirada y timing expresivo durante toda la entrevista.','¿La expresión cambia cuando el contenido cambia?','¿La intensidad expresiva ayuda a comunicar o domina/incongruye con el contenido?','Separadores: emoción subjetiva = F6; control del afecto = E.regulación; velocidad del habla = F2.'],
    specifiers:[
      {id:'canal',type:'radio',label:'Canal afectado',options:['[facial]','[vocal]','[gestual]','[contacto visual]','[global]'],showWhen:'!=0'},
      {id:'mecanismo_neg',type:'radio',label:'Mecanismo (polo −)',options:['[negativos]','[depresivo]','[neurológico]','[disociativo]','[developmental]'],showWhen:'<0'},
      {id:'mecanismo_pos',type:'radio',label:'Mecanismo (polo +)',options:['[maníaco]','[labile]','[teatral]','[pseudobulbar]'],showWhen:'>0'}
    ]
  },
  {
    id:'F2.velocidad', code:'F2', title:'Velocidad psicomotora / output motor-verbal', type:'bipolar',
    scores:{'-2':'Retardo psicomotor marcado','-1':'Enlentecimiento psicomotor','0':'Ritmo proporcional','+1':'Activación psicomotora regulable','+2':'Agitación psicomotora / presión de output'},
    instruction:'Evalúe velocidad observable del cuerpo y del output verbal. No puntúa velocidad subjetiva del pensamiento (F4 experiencia), atención ejecutiva (F5), energía/drive (F3) ni arousal fisiológico (G).',
    details:{
      '-2':{nivel:'Retardo psicomotor marcado',loQueVes:'Latencia de respuesta sostenida, movimientos lentos, voz baja o output verbal escaso. Interfiere la entrevista o AVDs. Puede parecer estupor/mutismo motor si es extremo.',loQueDice:'Responde tarde, con pausas largas o poco output; no necesariamente reporta pensamientos lentos.',contra:'Frustración empática; impulso de completar frases o mover la entrevista por el paciente.',clasica:'AMDP: hipocinesia. ICD-11: retardo psicomotor/bradifrenia. Fish: retardo psicomotor, acinesia, estupor. Forbes: deterioro psicomotor.'},
      '-1':{nivel:'Enlentecimiento psicomotor',loQueVes:'Ritmo corporal o verbal más lento de lo esperado, pero comprensible y funcional con tiempo. Pausas aumentadas, gestos lentos, inicio motor demorado.',loQueDice:'Respuestas algo lentas; puede decir "me cuesta arrancar" o no notarlo.',contra:'El clínico nota latencia, pero no necesita contener ni interrumpir.',clasica:'Retardo psicomotor leve; bradifasia/bradicinesia si predomina output verbal o motor.'},
      '0':{nivel:'Ritmo proporcional',loQueVes:'Velocidad corporal, latencia y output verbal proporcionales al contexto, edad, cultura y situación clínica.',loQueDice:'Fluidez suficiente sin presión ni enlentecimiento clínico.',contra:'Ritmo natural de entrevista.',clasica:''},
      '+1':{nivel:'Activación psicomotora regulable',loQueVes:'Movimiento, gesticulación, habla o cambios posturales aumentados, pero puede frenar, escuchar y redirigirse.',loQueDice:'Habla más rápido o se mueve más de lo habitual, con coherencia y turnos recuperables.',contra:'El clínico siente energía o prisa, pero puede mantener el encuadre.',clasica:'Inquietud motora, agitación leve, habla acelerada regulable. Cruzar G.arousal, F3.drive, F4.experiencia según corresponda.'},
      '+2':{nivel:'Agitación psicomotora / presión de output',loQueVes:'No puede permanecer quieto, pacing, inquietud motora intensa, habla presionada o output verbal difícil de interrumpir. La velocidad interfiere la entrevista.',loQueDice:'Habla muy rápido, encima del entrevistador, o el cuerpo no se detiene.',contra:'El clínico siente necesidad de bajar ritmo, contener o priorizar seguridad.',clasica:'AMDP: agitación motora/logorrea. ICD-11: agitación psicomotora/habla presionada. Fish: excitación psicomotora.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','136 hipocinesia','hipocinesia leve','—','impulso aumentado / inquietud','83 agitación motora, 88 logorrea'],
        ['ICD-11','MB23.N retardo, MB23.3 bradifrenia','—','—','—','MB23.M agitación, MB23.L habla presionada'],
        ['Fish (2019)','Retardo psicomotor, Estupor, Acinesia','Obstrucción','—','—','Excitación psicomotora, Paracinesia'],
        ['Vallejo (2025)','Retardo psicomotor, Estupor','—','—','Agitación psicomotora','Agitación psicomotora'],
        ['Eguíluz (2005)','Estupor recurrente, Acinesia psíquica, Bradifasia','Bradifasia','—','—','—'],
        ['Forbes (2024)','Deterioro psicomotor','—','—','Inquietud motora','Agitación, Habla presionada']
      ]
    },
    guide:['Observe latencia de respuesta, velocidad del habla y cantidad de movimiento espontáneo.','¿El cuerpo y el output verbal van lentos, proporcionales o acelerados?','¿Puede pausar, escuchar y redirigirse?','Separadores: pensamiento subjetivo rápido/lento = F4 experiencia; atención/set-shifting = F5; activación fisiológica = G.arousal; energía dirigida a metas = F3.drive.'],
    specifiers:[
      {id:'motor',type:'checkbox',label:'[motor] velocidad corporal'},
      {id:'lenguaje',type:'checkbox',label:'[verbal] velocidad/output del habla'},
      {id:'pensamiento_no',type:'checkbox',label:'Pensamiento subjetivo implicado → puntuar también F4 experiencia'},
      {id:'agresivo',type:'checkbox',label:'[conducta agresiva] (solo +2)',showWhen:'==+2'}
    ]
  },
  {
    id:'F2.sensorial', code:'F2', title:'Integración sensorial', type:'bipolar',
    scores:{'-2':'Embotamiento sensorial','-1':'Hipoestesia / desrealización','0':'Procesamiento normal','+1':'Tipo 1 · hipervigilancia perceptiva','+2':'Tipo 2 · fenómeno perceptivo formado'},
    details:{
      '-2':{nivel:'Embotamiento sensorial',loQueVes:'No procesa input externo. No responde a estímulos sensoriales relevantes. Mundo interno domina. "Como si no estuviera aquí".',loQueDice:'No responde a voz/ruido. Mirada vacía. Analgesia.',contra:'Preocupación: "no está aquí". Urgencia de reactivar.',clasica:'AMDP: 51 (alucinaciones corporales — ausencia respuesta). Fish: Estupor (sin respuesta sensorial). Forbes: Embotamiento sensorial, anestesia.'},
      '-1':{nivel:'Hipoestesia / desrealización',loQueVes:'Mundo externo amortiguado: "todo suena lejano", "los colores están apagados", "como detrás de vidrio".',loQueDice:'"Todo se siente lejano." "Los colores están apagados." "Como detrás de vidrio."',contra:'Sensación de distancia. El paciente parece presente pero desconectado.',clasica:'Fish: Despersonalización/desrealización sensorial. Forbes: Embotamiento sensorial.'},
      '0':{nivel:'Procesamiento normal',loQueVes:'Percibe lo relevante, filtra lo irrelevante. Intensidad sensorial proporcional al estímulo.',loQueDice:'No reporta anomalía sensorial.',contra:'Entrevista cómoda.',clasica:''},
      '+1':{nivel:'Tipo 1 · hipervigilancia perceptiva',loQueVes:'Señales ambiguas amplificadas: hiperacusia, fotosensibilidad, sombras, murmullos, roces, olores o sabores dudosos. El fenómeno es fugaz, periférico o corregible.',loQueDice:'"Los ruidos me molestan mucho." "A veces veo sombras." "Siento roces/hormigueos." "Me llega un olor raro, pero no sé."',contra:'El clínico nota sensibilidad exagerada o búsqueda de señales ambiguas.',clasica:'RDoC: Perception construct. Fish: Pseudoalucinación, Ilusión. DSM-5-TR: Attenuated psychosis syndrome. Equivalente: SOR (Sensory Over-Responsivity).'},
      '+2':{nivel:'Tipo 2 · fenómeno perceptivo formado',loQueVes:'Experiencia formada, autónoma o con cualidad perceptiva clara: voces, figuras/escenas, tacto definido o olor/sabor sin fuente. Puede generar conducta en respuesta.',loQueDice:'"Escucho voces claras." "Veo una figura/persona." "Siento que me tocan o algo se mueve bajo la piel." "Huelo/saboreo algo que no está."',contra:'Alarma: quiebre perceptivo. Evaluar F7 simultáneamente.',clasica:'AMDP: 46-51 (alucinaciones por modalidad). ICD-11: MB27.2 (alucinaciones). DSM-5-TR: SZ criterio A.2. Fish: Alucinación, Alucinosis. Concepto vinculado: aberrant salience (Kapur 2003).'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','51 (ausencia respuesta)','—','—','—','46-51 (alucinaciones por modalidad)'],
        ['ICD-11','—','—','—','—','MB27.2 (alucinaciones), MB27.20-27.25'],
        ['DSM-5','—','—','—','Attenuated psychosis syndrome','SZ criterio A.2 (hallucinations)'],
        ['Fish (2019)','Estupor (sin respuesta sensorial)','—','—','Pseudoalucinación, Ilusión','Alucinación, Alucinosis'],
        ['RDoC','—','—','—','Perception construct (auditory, visual)','Perception construct (distorted)'],
        ['Forbes (2024)','Embotamiento sensorial, anestesia','—','—','Sensibilidad sensorial, hiperacusia','Alucinaciones']
      ]
    },
    guide:['¿Los ruidos le molestan más de lo normal? ¿Las luces?','¿Siente que el mundo se ve lejano, apagado, como detrás de vidrio?','¿Ha visto sombras, oído murmullos o sentido presencias?','¿Escucha voces o ve cosas que otros no ven?','¿Siente cosas en el cuerpo sin causa (hormigueo, ser tocado)?','¿Percibe olores o sabores sin fuente?'],
    specifiers:[
      {id:'sens_modal',type:'multiselect',label:'Modalidad',options:['[auditiva]','[visual]','[somático-táctil]','[olfatorio-gustativa]'],showWhen:'>0'},
      {id:'sens_mec_neg',type:'radio',label:'Mecanismo (polo −)',options:['[disociativo]','[depresivo]','[catatónico]','[neurológico]'],showWhen:'<0'},
      {id:'sens_mec_pos',type:'radio',label:'Mecanismo (polo +)',options:['[SOR]','[PLEs]','[alucinatorio]','[intoxicación]'],showWhen:'>0'}
    ]
  },
  {
    id:'NM.coordinación', code:'NM', title:'Perfil Neuromotor', type:'multitest',
    tests:[
      {
        id:'NM.luria', label:'Puño-canto-palma (Luria)',
        instruction:'Demostrar secuencia puño→canto→palma 3 veces, pedir al paciente que repita 5 ciclos. Cronometrar 30s.',
        scores:{'0':'Secuencia fluida','-1':'Errores aislados, autocorrige','-2':'Falla secuencia, persevera o no puede'},
        specifiers:[
          {id:'lur_perseveracion',type:'checkbox',label:'Persevera en un paso'},
          {id:'lur_simplifica',type:'checkbox',label:'Simplifica la secuencia'}
        ],
        circuito:'Corteza premotora (secuenciación) + ganglios basales (switching motor) + DLPFC (planificación). Falla = disfunción fronto-estriatal.',
        precision:'Falla Luria en primer episodio psicótico: predictor de peor outcome funcional (Dazzan 2004). Perseveración = frontal. Simplificación = prefrontal.'
      },
      {
        id:'NM.dismetria', label:'Dedo-nariz (dismetría)',
        instruction:'Ojos cerrados: tocar punta de la nariz → dedo del examinador, alternar 5 veces cada mano. 20s.',
        scores:{'0':'Preciso','-1':'Leve sobrepaso o temblor terminal','-2':'Dismetría franca, sobrepaso consistente'},
        specifiers:[
          {id:'dis_lado',type:'radio',label:'Lateralidad',options:['Bilateral','Derecho','Izquierdo']}
        ],
        circuito:'Cerebelo (hemisferios cerebelosos ipsilaterales). Dismetría unilateral = lesión cerebelosa ipsilateral. Bilateral = tóxica, degenerativa o farmacológica.',
        precision:'Dismetría nueva + cefalea = urgencia neurológica (lesión fosa posterior). Dismetría + tremor intencional = cerebeloso. Dismetría bilateral + nistagmo = intoxicación (OH, fenitoína, litio).'
      },
      {
        id:'NM.alternancia', label:'Alternancia rápida',
        instruction:'Pronación-supinación rápida ambas manos, 20s. Observar ritmo, amplitud, synkinesias contralaterales.',
        scores:{'0':'Fluida y simétrica','-1':'Leve irregularidad o asimetría','-2':'Disdiadococinesia franca'},
        specifiers:[
          {id:'alt_synkinesias',type:'checkbox',label:'Synkinesias contralaterales'},
          {id:'alt_asimetria',type:'radio',label:'Asimetría',options:['Simétrica','Peor derecha','Peor izquierda']}
        ],
        circuito:'Cerebelo (timing + ritmo). Cuerpo calloso (inhibición contralateral → synkinesias = inmadurez o lesión callosa). Corteza premotora.',
        precision:'Synkinesias prominentes en adulto = NSS (SSD, TEA). Disdiadococinesia unilateral = cerebelosa ipsilateral. Bilateral = difusa (degenerativa, tóxica).'
      },
      {
        id:'NM.tandem', label:'Marcha tándem',
        instruction:'Caminar 10 pasos talón-punta en línea recta. Si ambulatorio. 30s.',
        scores:{'0':'Estable','-1':'Leve inestabilidad, se recupera','-2':'No puede completar, desequilibrio franco'},
        specifiers:[
          {id:'tan_lateraliza',type:'radio',label:'Lateralización',options:['No lateraliza','Cae a derecha','Cae a izquierda']}
        ],
        circuito:'Vermis cerebeloso (equilibrio axial) + propioceptivo (cordones posteriores) + vestibular. Lateralización = lesión cerebelosa ipsilateral.',
        precision:'Tándem inestable + Romberg positivo = propioceptivo (B12, sífilis). Tándem inestable + Romberg negativo = cerebeloso. Tándem inestable + base amplia = vermis (OH crónico).'
      },
      {
        id:'NM.parakinesia_iterativa', label:'Parakinesia iterativa',
        includes:'estereotipias, perseveraciones, verbigeración, ecolalia/ecopraxia',
        window:'Entrevista o últimos 7 días',
        instruction:'Puntuar sólo si está presente durante la entrevista o fue observado/informado en los últimos 7 días. Repetición anómala de actos motores o verbales.',
        scores:{'0':'Ausente','-1':'Sutil / intermitente','-2':'Recurrente / difícil de interrumpir'},
        specifiers:[
          {id:'para_iter_fenomeno',type:'radio',label:'Fenómeno',options:['Estereotipia','Perseveración','Verbigeración','Ecolalia/ecopraxia','Otro repetitivo']},
          {id:'para_iter_fuente',type:'radio',label:'Fuente',options:['Entrevista','Últimos 7 días','Ambos']}
        ],
        circuito:'Circuitos cortico-estriado-talámicos + control ejecutivo. El núcleo es la repetición pegajosa: el acto vuelve aunque ya no sea funcional.',
        precision:'No puntuar por historia remota aislada. Diferenciar de tic por suprimibilidad/premonición y de compulsión por finalidad ansiolítica.'
      },
      {
        id:'NM.parakinesia_odd', label:'Parakinesia odd / bizarra',
        includes:'mannerisms, grimacing, posturas raras, gestos idiosincráticos, motilidad bizarra',
        window:'Entrevista o últimos 7 días',
        instruction:'Puntuar sólo si está presente durante la entrevista o fue observado/informado en los últimos 7 días. La forma del movimiento es extraña, incongruente o no funcional.',
        scores:{'0':'Forma motora proporcional','-1':'Gesto/postura rara breve o dudosa','-2':'Bizarra clara, sostenida o repetida'},
        specifiers:[
          {id:'para_odd_fenomeno',type:'radio',label:'Fenómeno',options:['Mannerism','Grimacing','Postura rara','Gesto idiosincrático','Motilidad bizarra']},
          {id:'para_odd_fuente',type:'radio',label:'Fuente',options:['Entrevista','Últimos 7 días','Ambos']}
        ],
        circuito:'Integración premotora, ganglios basales y saliencia social. El núcleo es la forma extraña del acto, más que su velocidad o frecuencia.',
        precision:'No confundir con estilo cultural, manierismo habitual o expresividad teatral si la forma conserva finalidad social clara.'
      },
      {
        id:'NM.parakinesia_volicional', label:'Parakinesia volicional / automática',
        includes:'obediencia automática, mitgehen/mitmachen, ambitendencia, flexibilidad cérea, catalepsia, grasp reflex',
        window:'Entrevista o últimos 7 días',
        instruction:'Puntuar si se observa en la entrevista o fue observado/informado en los últimos 7 días. Alteración de agencia motora: responde demasiado, muy poco o de modo paradójico a la consigna.',
        scores:{'0':'Agencia motora normal','-1':'Fenómeno leve o ambiguo','-2':'Claro, reproducible o dominante'},
        specifiers:[
          {id:'para_vol_fenomeno',type:'radio',label:'Fenómeno',options:['Obediencia automática','Mitgehen/mitmachen','Ambitendencia','Flexibilidad cérea/catalepsia','Grasp reflex']},
          {id:'para_vol_fuente',type:'radio',label:'Fuente',options:['Entrevista','Últimos 7 días','Ambos']}
        ],
        circuito:'SMA/ACC, ganglios basales y redes de agencia/inhibición. El núcleo es la pérdida de autoría flexible sobre el acto motor.',
        precision:'Debe probarse con maniobra simple cuando sea seguro. Si es agudo/de novo y clínicamente dominante, evaluar síndrome catatónico y causas médicas.'
      },
      {
        id:'NM.tic', label:'Tics',
        instruction:'Observar durante entrevista. Movimientos rápidos, súbitos, no-rítmicos, parcialmente suprimibles.',
        scores:{'0':'Ausente','-1':'Sutil / infrecuente','-2':'Franco / múltiple / vocal'},
        specifiers:[
          {id:'tic_tipo',type:'radio',label:'Tipo',options:['Motor simple','Motor complejo','Vocal simple','Vocal complejo','Múltiples']},
          {id:'tic_temp',type:'radio',label:'Temporalidad',options:['Infancia/neurodesarrollo','Agudo/de novo','Funcional/variable','Farmacológico']},
          {id:'tic_loc',type:'text',label:'Localización',placeholder:'Ej: facial, cervical, extremidades'}
        ],
        circuito:'Loop CSTC (corteza motora → estriado → tálamo). DA estriatal. Disfunción inhibición motora cortical.',
        precision:'Tics + obsesiones = evaluar Tourette. Tics de novo en adulto = descartar farmacológico (estimulantes, AP) o neurológico.'
      },
      {
        id:'NM.diskinesia', label:'Diskinesia',
        instruction:'Examinar boca, lengua, dedos. Movimientos irregulares, no suprimibles, coreiformes.',
        scores:{'0':'Ausente','-1':'Movimientos dudosos','-2':'Diskinesia clara'},
        specifiers:[
          {id:'dk_etiologia',type:'radio',label:'Etiología',options:['Tardía (AP)','Espontánea ⚠️']},
          {id:'dk_temp',type:'radio',label:'Temporalidad',options:['Aguda/de novo','Crónica/progresiva','Farmacológica/tardía','Funcional/variable']},
          {id:'dk_loc',type:'radio',label:'Distribución',options:['Orofacial','Extremidades','Tronco','Generalizada']}
        ],
        circuito:'DA nigroestriatal: supersensibilidad D2 post-bloqueo crónico (tardía). Espontánea = Huntington, Wilson, neurodegenerativo.',
        precision:'Tardía: AIMS score, considerar VMAT2 inhibidores (valbenazina, deutetrabenazina). Espontánea ⚠️ = neurología urgente.'
      },
      {
        id:'NM.distonia', label:'Distonía',
        instruction:'Posturas sostenidas anormales. Tortícolis, retrocolis, blefaroespasmo, opistótonos.',
        scores:{'0':'Ausente','-1':'Sutil / intermitente','-2':'Sostenida / incapacitante'},
        specifiers:[
          {id:'dst_tipo',type:'radio',label:'Tipo',options:['Aguda','Tardía']},
          {id:'dst_loc',type:'text',label:'Localización',placeholder:'Ej: cervical, mandibular, ocular'}
        ],
        circuito:'Ganglios basales (desbalance DA/ACh). Aguda = bloqueo D2 agudo. Tardía = neuroplasticidad post-AP crónico.',
        precision:'Aguda = emergencia → biperideno IM/IV. Tardía = cambiar AP, considerar toxina botulínica focal.'
      },
      {
        id:'NM.acatisia', label:'Acatisia',
        instruction:'Preguntar: "¿Siente inquietud interna, necesidad de moverse?" Observar: cruce/descruce piernas, marching in place.',
        scores:{'0':'Ausente','-1':'Subjetiva sin objetiva','-2':'Subjetiva + objetiva'},
        specifiers:[
          {id:'ak_tipo',type:'radio',label:'Tipo',options:['Subjetiva (siente pero no se ve)','Objetiva (se ve pero no siente)','Mixta (siente + se ve)']},
          {id:'ak_etiologia',type:'radio',label:'Etiología',options:['Farmacológica (AP/ISRS)','Ansiosa/agitación','Neurológica','Funcional']},
          {id:'ak_temp',type:'radio',label:'Temporalidad',options:['Aguda/de novo','Crónica','Intermitente']}
        ],
        circuito:'DA mesocortical + proyecciones frontales. Bloqueo D2 → desinhibición motora + disforia subjetiva. Diferente de ansiedad (no hay worry).',
        precision:'Frecuentemente confundida con ansiedad → aumentar AP empeora. Tratamiento: propranolol, mirtazapina, reducir AP. Acatisia severa = factor de riesgo suicidio (asociación documentada).'
      },
      {
        id:'NM.parkinsonismo', label:'Parkinsonismo',
        instruction:'Observar: bradicinesia, rigidez (rueda dentada), tremor reposo, hipomimia, marcha festinante.',
        scores:{'0':'Ausente','-1':'Signos aislados leves','-2':'Síndrome parkinsoniano claro'},
        specifiers:[
          {id:'pk_etiologia',type:'radio',label:'Etiología',options:['Espontáneo ⚠️','Farmacológico (AP)']},
          {id:'pk_temp',type:'radio',label:'Temporalidad',options:['Agudo/de novo','Crónico/progresivo','Farmacológico','Funcional/variable']},
          {id:'pk_signos',type:'text',label:'Signos',placeholder:'Ej: rigidez, bradicinesia, tremor'}
        ],
        circuito:'DA nigroestriatal ↓↓. Vía directa hipoactiva → acinesia. Vía indirecta hiperactiva → rigidez.',
        precision:'⚠️ Espontáneo sin AP = PET scan DA, evaluar Parkinson, DLB, PSP. Farmacológico = reducir AP o agregar anticolinérgico. Asimetría prominente favorece degenerativo sobre farmacológico.'
      },
      {
        id:'NM.tremor', label:'Tremor',
        instruction:'Observar en reposo (manos en regazo), postura (brazos extendidos), intención (dedo-nariz).',
        scores:{'0':'Ausente','-1':'Fino / intermitente','-2':'Grueso / constante'},
        specifiers:[
          {id:'tr_tipo',type:'radio',label:'Tipo',options:['Reposo','Postural','Intencional','Mixto']},
          {id:'tr_etiologia',type:'radio',label:'Etiología',options:['Fisiológico/ansioso','Farmacológico','Neurológico','Funcional']},
          {id:'tr_temp',type:'radio',label:'Temporalidad',options:['Agudo/de novo','Crónico/progresivo','Intermitente']},
          {id:'tr_loc',type:'radio',label:'Distribución',options:['Manos','Generalizado','Cefálico','Mandibular']}
        ],
        circuito:'Reposo = ganglios basales (Parkinson). Postural = cerebelo + periférico (esencial, fisiológico, litio). Intencional = cerebelo (lesión hemisférica).',
        precision:'Reposo + bradicinesia + rigidez = parkinsonismo → ver NM.parkinsonismo. Postural fino nuevo = litio, valproato, ISRS → niveles séricos. Intencional = cerebeloso → neurología.'
      }
    ],
    guide:['Coordinación: 4 tests rápidos (Luria, dedo-nariz, alternancia, tándem) — 3 min total.','Parakinesia: puntuar estado actual si está presente en entrevista o últimos 7 días; no lifetime.','Involuntarios: observar durante TODA la entrevista, puntuar al final.','⚠️ Espontáneo (sin AP) = derivar a neurología.','Farmacológico = registrar AP actual, dosis, duración.'],
    frameworks:{
      headers:['Sección','Tests','Circuito','Frameworks'],
      rows:[
        ['Coordinación','Luria, Dismetría, Alternancia, Tándem','Cerebelo + GB + Premotora + Cuerpo calloso','Reischies ch05. No en AMDP/DSM-5.'],
        ['Parakinesia','Iterativa, Odd/bizarra, Volicional/automática','CSTC + SMA/ACC + redes de agencia/inhibición','Catatonia spectrum: iterative, odd, volitional. BFCRS/Northoff/CASH-derived factors.'],
        ['Involuntarios','Tic, Diskinesia, Distonía, Acatisia, Parkinsonismo, Tremor','GB (DA nigroestriatal) + Cerebelo + CSTC','AMDP 87-90. ICD-11 MB22.2-8. DSM-5 SEP/tics. Forbes: Tremors.']
      ]
    }
  },
  {
    id:'F5.regulación', code:'F5', title:'Regulación atencional ejecutiva', type:'bipolar',
    scores:{'-2':'No sostiene / no inhibe','-1':'Sostén frágil','0':'Control flexible','+1':'Sobrecontrol / set rígido','+2':'Perseveración atencional'},
    details:{
      '-2':{nivel:'No sostiene / no inhibe',loQueVes:'No puede mantener la consigna ni inhibir distractores o respuestas automáticas. Pierde el hilo, responde antes de procesar, requiere repetición constante o no completa una operación mental breve.',loQueDice:'"No puedo mantenerlo en la cabeza." "Se me va." "¿Qué me preguntaba?"',contra:'El clínico tiene que simplificar, repetir y contener impulsos de respuesta. Diferenciar de bajo esfuerzo, sedación, delirium o bajo nivel educativo.',wm:'Memoria de trabajo colapsada + control inhibitorio insuficiente: la información no se mantiene online y la interferencia entra sin filtro.',clasica:'AMDP: 10 (concentración alterada grave). Fish: Aprosexia. Vallejo: Aprosexia. Eguíluz: Aprosexia. DSM-5: TDAH inatención, Delirium. ICD-11: MB21.5 (distractibilidad).'},
      '-1':{nivel:'Sostén frágil',loQueVes:'Mantiene la tarea con esfuerzo, pero pierde detalles, necesita repetición o falla cuando aumenta la carga de memoria de trabajo. Inhibe parcialmente respuestas automáticas.',loQueDice:'"A veces pierdo el hilo." "Si me lo repite, puedo." "Me cuesta cuando son varias cosas."',contra:'Puede parecer ansiedad o poca colaboración; puntuar por desempeño observable y recuperación con redirección.',wm:'Memoria de trabajo vulnerable; inhibición parcial; el sistema sostiene si la demanda es baja o está estructurada.',clasica:'AMDP: 9 (apercepción alterada), 10 (leve). Fish: Hipoprosexia. Vallejo: Hipoprosexia. Eguíluz: Hipoprosexia.'},
      '0':{nivel:'Control flexible',loQueVes:'Mantiene información online, inhibe interferencias, cambia de set y recupera el foco según la demanda de la entrevista o la prueba.',loQueDice:'Puede seguir una consigna de varios pasos, corregirse, esperar turno, cambiar de tema cuando corresponde y reconocer si no retuvo algo.',contra:'No requiere rendimiento perfecto; puede fallar si la carga es alta, pero usa estrategias y se recupera proporcionalmente.',wm:'Memoria de trabajo e inhibición calibradas: sostiene, manipula, inhibe, actualiza y cambia de set de forma flexible.',clasica:''},
      '+1':{nivel:'Sobrecontrol / set rígido',loQueVes:'Mantiene el foco, pero le cuesta soltarlo o actualizar la consigna. Se queda en una regla, orden o prioridad, aunque todavía puede flexibilizar con redirección.',loQueDice:'"Déjeme terminar." "Necesito hacerlo en orden." "Me cuesta cambiar si ya empecé."',contra:'Puede parecer buena concentración; el problema es la actualización pobre y el costo para cambiar de set.',wm:'Gate demasiado cerrado: inhibe de más, mantiene el set previo y actualiza con lentitud.',clasica:'AMDP: 18 (pensamiento restringido). Fish: Hiperprosexia. Vallejo: Hiperprosexia. Eguíluz: Hiperprosexia.'},
      '+2':{nivel:'Perseveración atencional',loQueVes:'No cambia de set pese a la consigna. Persevera en una respuesta, regla, tema o secuencia; ignora información nueva o la fuerza a encajar en el set previo.',loQueDice:'"Solo puedo seguir con esto." O no reporta dificultad y continúa perseverando.',contra:'La entrevista se atasca: redirecciones claras no actualizan la conducta. Diferenciar de convicción delirante: aquí el foco es control ejecutivo, no contenido de creencia.',wm:'Memoria de trabajo rígida + inhibición excesiva del cambio: mantiene demasiado y actualiza demasiado poco.',clasica:'AMDP: 18 (grave), 19 (perseveración). Fish: Perseveración. Vallejo: Paraprosexia. Eguíluz: Paraprosexia. DSM-5: TOC, TEA restricted. ICD-11: MB21.9 (perseveración).'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','10 grave','9, 10 leve','—','18','18 grave, 19'],
        ['Fish (2019)','Aprosexia','Hipoprosexia','—','Hiperprosexia','Perseveración'],
        ['Vallejo (2025)','Aprosexia','Hipoprosexia','—','Hiperprosexia','Paraprosexia'],
        ['Eguíluz (2005)','Aprosexia','Hipoprosexia','—','Hiperprosexia','Paraprosexia'],
        ['DSM-5','TDAH inatención, Delirium','—','—','—','TOC, TEA restricted'],
        ['ICD-11','MB21.5 distractibilidad','—','—','—','MB21.9 perseveración']
      ]
    },
    guide:['Evalúe atención como memoria de trabajo + control inhibitorio: sostener, manipular, inhibir, actualizar y cambiar de set.','Digit span backward: "Repita al revés: 7-2-9".','Consigna de varios pasos: "Tome el papel, dóblelo y colóquelo sobre la mesa".','Observe si espera turno, inhibe respuestas automáticas y vuelve al foco tras una interrupción.','Cambio de set: si estaba contando una historia, ¿puede detenerse y responder una pregunta nueva?'],
    specifiers:[
      {id:'f5_componente',type:'radio',label:'Componente dominante',options:['Memoria de trabajo','Control inhibitorio','Cambio de set','Mixto'],showWhen:'!=0'},
      {id:'f5_evidencia',type:'radio',label:'Evidencia principal',options:['Entrevista','Digit backward','Consigna de varios pasos','Cambio de set','Mixta'],showWhen:'!=0'}
    ]
  },
  {
    id:'F3.tono', code:'F3', title:'Tono hedónico consumatorio (liking)', type:'bipolar',
    scores:{'-2':'Anhedonia profunda','-1':'Hipohedonia selectiva','0':'Placer proporcional','+1':'Reasignación incipiente','+2':'Hedonic shift consolidado'},
    instruction:'Evalúe al final del trío F3: placer consumatorio cuando la persona ya está en contacto con la actividad o estímulo. No infiera bajo tono si nunca inicia por falta de energía (F3.drive) o si no espera recompensa (F3.anticipación).',
    details:{
      '-2':{nivel:'Anhedonia profunda',loQueVes:'Flat ante estímulos placenteros. Come sin reacción. No responde a humor, música, contacto.',loQueDice:'"No me sabe a nada." "No siento nada cuando..." "Antes me gustaba pero ya no."',contra:'Impotencia: nada que el clínico ofrezca genera resonancia.',clasica:'AMDP: 60 (pérdida sentimientos), 63 (ánimo deprimido grave). ICD-11: MB24.2 (anhedonia). DSM-5: MDD.'},
      '-1':{nivel:'Hipohedonia selectiva',loQueVes:'Reactividad reducida en contextos específicos.',loQueDice:'"Ya no disfruto [área] como antes, pero [otra] todavía está bien."',contra:'Preocupación calibrada.',clasica:'AMDP: 62 (pérdida vitalidad), 67 (disforia). ICD-11: MB24.5 leve.'},
      '0':{nivel:'Placer proporcional',loQueVes:'Sonríe al hablar de cosas placenteras. Expresión congruente.',loQueDice:'"Sí, disfruté la cena." Proporcional.',contra:'Entrevista cómoda.',clasica:''},
      '+1':{nivel:'Reasignación incipiente',loQueVes:'Rechaza recompensas normales sutilmente. Reporta calma con restricción/ejercicio excesivo. Ambivalente.',loQueDice:'"No tengo hambre pero me siento bien sin comer." "Correr hasta que duele me calma." Minimiza lo nuevo.',contra:'Confusión: "¿por qué rechaza cosas que le gustarían?"',clasica:''},
      '+2':{nivel:'Hedonic shift consolidado',loQueVes:'Busca activamente el estímulo aversivo. Evita estímulos normalmente placenteros. La conducta aversiva es ego-sintónica.',loQueDice:'"No necesito comer, me siento mejor así." "Cortarme me hace sentir viva." El estímulo aversivo es preferido al placentero.',contra:'Alarma: la conducta dañina es vivida como placentera — no hay motivación intrínseca para cambiar.',clasica:'DSM-5: AN (restricción reforzante), NSSI.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','60 (pérdida sentimientos), 63 (ánimo deprimido grave)','62 (pérdida vitalidad), 67 (disforia)','—','—','—'],
        ['ICD-11','MB24.2 (anhedonia), MB24.5 (ánimo deprimido)','MB24.5 leve, MB24.7 (disforia)','—','—','—'],
        ['DSM-5','MDD, SZ (aplanamiento)','Distimia','—','—','AN, NSSI'],
        ['RDoC PVS','Reward Responsiveness ausente','Atenuada','—','—','No capturado (GAP)']
      ]
    },
    guide:['Tercero, consumo: cuando ya hace la actividad o recibe el estímulo, ¿lo disfruta?','¿La comida, música, contacto, conversación o sexo le producen placer en el momento?','¿Puede disfrutar si alguien lo lleva o si la actividad ocurre, aunque no la busque?','Si nunca inicia por falta de energía o expectativa, no asuma anhedonia consumatoria sin evidencia directa.'],
    specifiers:[
      {id:'target',type:'radio',label:'Target hedónico (+1/+2)',options:['Restricción','Dolor','Purga','Ejercicio excesivo','Riesgo','Otro'],showWhen:'>0'}
    ]
  },
  {
    id:'F3.anticipación', code:'F3', title:'Anticipación hedónica (wanting)', type:'bipolar',
    scores:{'-2':'Anticipación ausente','-1':'Anticipación atenuada','0':'Anticipación calibrada','+1':'Anticipación inflada','+2':'Prior crónicamente inflado'},
    instruction:'Evalúe después de drive: expectativa de recompensa antes de actuar. Aquí importa si algo le provoca, si espera que valga la pena o si la expectativa está inflada; no es energía de ejecución ni placer durante el consumo.',
    details:{
      '-2':{nivel:'Anticipación ausente',loQueVes:'No hace planes. Rechaza invitaciones. Agenda vacía. No inicia actividades placenteras aunque estén disponibles.',loQueDice:'"Para qué, si da igual." "No quiero nada." No nombra algo que espere con ganas.',contra:'',clasica:'AMDP: 80 (falta impulso), 10 (apatía). ICD-11: MB24.4 (apatía), MB22.0 (avolición). Fish: Anhedonia, Apatía.'},
      '-1':{nivel:'Anticipación atenuada',loQueVes:'Acepta planes de otros pero no genera los suyos. No se le iluminan los ojos al hablar del futuro.',loQueDice:'"Probablemente no lo disfrute." "No creo que valga la pena, pero bueno." Acepta con desgano.',contra:'',clasica:'AMDP: 62 (pérdida vitalidad). DSM-5: Distimia.'},
      '0':{nivel:'Anticipación calibrada',loQueVes:'Habla de planes con tono proporcional. Equilibrio entre anticipar y hacer.',loQueDice:'"Sí, tengo ganas de ir." "Estoy esperando el viernes." Proporcional.',contra:'',clasica:''},
      '+1':{nivel:'Anticipación inflada',loQueVes:'Habla rápido sobre planes futuros. Más energizado al planificar que al ejecutar. Empezó 3 cosas esta semana.',loQueDice:'"Va a ser INCREÍBLE." "Este negocio va a cambiar todo." Planifica en exceso alrededor de la expectativa.',contra:'',clasica:'AMDP: 66 (euforia leve), 82 (impulso aumentado leve). ICD-11: MB24.8 (ánimo elevado). DSM-5: Hipomanía.'},
      '+2':{nivel:'Prior crónicamente inflado / wanting >> liking',loQueVes:'Agenda repleta de planes grandiosos. Invirtió dinero que no tiene. No explica por qué esta vez será diferente.',loQueDice:'"Esto va a ser lo mejor que me ha pasado." Múltiples proyectos simultáneos, todos "seguros."',contra:'',clasica:'AMDP: 66 (euforia), 82 (impulso aumentado grave). ICD-11: MB24.9 (euforia). DSM-5: Manía, Gambling, SUDs.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','80 (falta impulso), 10 (apatía)','62 (pérdida vitalidad)','—','66 (euforia leve), 82 (impulso↑)','66 (euforia), 82 (impulso↑ grave)'],
        ['ICD-11','MB24.4 (apatía), MB22.0 (avolición)','—','—','MB24.8 (ánimo elevado)','MB24.9 (euforia), MB22.5 (actividad↑)'],
        ['DSM-5','MDD (anhedonia), SZ (avolición)','Distimia','—','Hipomanía','Manía, Gambling, SUDs'],
        ['Fish (2019)','Anhedonia, Apatía','Anhedonia','—','Manía','Manía, Éxtasis'],
        ['Vallejo (2025)','Anhedonia, Apatía, Abulia','Anhedonia','—','Alegría patológica','Alegría patológica']
      ]
    },
    guide:['Segundo, expectativa: si tuviera energía suficiente, ¿hay algo que le provoque o espere con ganas?','¿Qué plan le parece que valdría la pena esta semana?','¿Puede anticipar que algo será placentero, aunque luego le cueste iniciarlo?','Detector: nada provoca = bajo; expectativa proporcionada y específica = 0; avalancha de planes/expectativas irreales = alto.']
  },
  {
    id:'F3.drive', code:'F3', title:'Drive / energía motivacional', type:'bipolar',
    scores:{'-2':'Energía / arranque ausente','-1':'Energía reducida','0':'Energía proporcional','+1':'Energía elevada dirigida a metas','+2':'Energía desregulada'},
    instruction:'Evalúe primero: energía y empuje para iniciar y sostener conducta. Drive no es disfrute ni expectativa de recompensa; es si puede arrancar, persistir y dirigir actividad hacia una meta.',
    details:{
      '-2':{nivel:'Energía / arranque ausente (avolición)',loQueVes:'No se levanta sin empuje externo. AVD deterioradas. No inicia acciones básicas ni metas aunque pueda reconocer que serían útiles.',loQueDice:'"No tengo energía." "No arranco." "Quiero pero no puedo." "Me quedo pegado."',contra:'Impotencia o frustración empática: el clínico siente que empuja desde afuera.',clasica:'AMDP: 80 (falta grave), 81 (inhibición grave). ICD-11: MB22.0 (avolición), MB24.4 (apatía). DSM-5: SZ negativos, MDD.'},
      '-1':{nivel:'Energía reducida / iniciación frágil',loQueVes:'Inicia actividades con demora, las deja incompletas o sólo funciona con estructura externa. Esfuerzo visible para sostener conducta.',loQueDice:'"Me cuesta arrancar." "Empiezo cosas pero las dejo." "Todo me cansa." "Si me empujan, puedo un poco."',contra:'Preocupación: el clínico ofrece estructura y el paciente responde parcialmente.',clasica:'AMDP: 80 leve, 81 leve, 62, 105. ICD-11: MG22 (fatiga). DSM-5: Distimia.'},
      '0':{nivel:'Energía proporcional',loQueVes:'Inicia y sostiene actividades proporcionales al contexto, con pausas y recuperación esperables. Completa tareas básicas o metas realistas.',loQueDice:'"Hice lo que tenía que hacer." "Me canso normal, pero funciono." Proporcional.',contra:'Entrevista cómoda.',clasica:''},
      '+1':{nivel:'Energía elevada dirigida a metas',loQueVes:'Aumenta actividad dirigida a metas. Energía sostenida, varios proyectos o tareas, pero todavía acepta feedback y puede frenar.',loQueDice:'"Tengo mucha energía." "Estoy haciendo varias cosas." "No me canso tanto." Acepta que quizá es mucho si se le señala.',contra:'Energía contagiosa pero contenible. El clínico puede reconducir.',clasica:'AMDP: 82 leve (impulso aumentado). ICD-11: MB22.4 (energía aumentada). DSM-5: BD hipomanía.'},
      '+2':{nivel:'Energía desregulada / actividad imparable',loQueVes:'Actividad excesiva dirigida a metas o aparentemente dirigida a metas, persiste pese a daño, límites o fatiga. No puede frenar ante consecuencias.',loQueDice:'"Duermo 3 horas y es suficiente." "Tengo 5 proyectos y todos van a funcionar." "No puedo parar ahora." Minimiza consecuencias.',contra:'Agotamiento del clínico. Los límites rebotan.',clasica:'AMDP: 82 grave. ICD-11: MB22.5 (actividad dirigida a metas aumentada). DSM-5: BD manía.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','80 (falta grave), 81 (inhibición grave)','80 leve, 81 leve, 62, 105','—','82 leve (impulso↑)','82 grave (impulso↑)'],
        ['ICD-11','MB22.0 (avolición), MB24.4 (apatía)','MG22 (fatiga)','—','MB22.4 (energía↑)','MB22.5 (actividad dirigida a metas↑)'],
        ['DSM-5','SZ negativos, MDD','Distimia','—','BD hipomanía','BD manía: "abnormally increased goal-directed activity"'],
        ['RDoC PVS','Approach Motivation ausente','Atenuada','—','Elevada','Excesiva, Effort Valuation ausente']
      ]
    },
    guide:['Primero, energía: ¿tiene energía para arrancar y sostener lo básico o una meta concreta?','En las últimas 24-72h, ¿qué empezó y qué logró terminar?','Si dice "quiero pero no puedo", piense drive bajo por inhibición, no anticipación baja.','Si hay energía alta, pregunte si puede frenar y si la actividad sigue siendo dirigida a metas.'],
    specifiers:[
      {id:'drive_neg',type:'radio',label:'Polo negativo: tipo',options:['[F] Falta (no quiere)','[I] Inhibición (quiere pero no puede)','[M] Mixto'],showWhen:'<0'},
      {id:'drive_pos',type:'radio',label:'Polo positivo: fuente',options:['[R] Reward-driven','[D] Desinhibición','[M] Mixto'],showWhen:'>0'}
    ]
  },
  {
    id:'F4.experiencia', code:'F4', title:'Experiencia del pensamiento', type:'bipolar',
    scores:{'-2':'Bloqueo / vacío','-1':'Flujo lento subjetivo','0':'Proporcional','+1':'Flujo acelerado','+2':'Presión / crowding'},
    instruction:'Puntúe la vivencia subjetiva del flujo del pensamiento: continuidad, velocidad sentida, presión interna y cantidad simultánea de pensamientos. No puntúe aquí el contenido de la idea (F4 contenido), la capacidad de sostener/inhibir/cambiar set (F5) ni la velocidad observable del habla o movimiento (F2).',
    details:{
      '-2':{nivel:'Bloqueo / vacío (Gedankenabreißen)',loQueVes:'El hilo se corta o desaparece: pausa súbita, frase abandonada, mirada de búsqueda o silencio porque "no hay pensamiento". Puede ocurrir aunque la atención básica esté preservada.',loQueDice:'"Se me corta." "Mi mente queda en blanco." "Iba a decir algo y desapareció." "No hay nada en mi cabeza."',contra:'No confundir con distractibilidad, bajo esfuerzo o falta de respuesta por ansiedad. Si no sostiene consigna o se distrae, puntuar F5; si el problema es pobreza del habla, puntuar F1/F2 según corresponda.',clasica:'AMDP: 23 (Gedankenabreißen). Fish: Bloqueo pensamiento, Inhibición pensamiento.'},
      '-1':{nivel:'Flujo lento subjetivo',loQueVes:'Genera pensamiento con demora y esfuerzo: tarda en encontrar ideas, dice que todo va pesado o lento, pero puede sostener la consigna si se le da tiempo.',loQueDice:'"Pienso lento." "Me cuesta arrancar las ideas." "Mi cabeza está espesa." "Los pensamientos salen con esfuerzo."',contra:'No usar como sinónimo de mala concentración. Si falla memoria de trabajo, inhibición o cambio de set, eso es F5. Si lo observable principal es bradifasia/retardo motor, eso es F2.',clasica:'AMDP: 15 (enlentecido subjetivo), 17 (constreñido). Reischies: ch10 (thinking retarded).'},
      '0':{nivel:'Flujo proporcional',loQueVes:'El paciente describe continuidad, velocidad y control del flujo como acordes al contexto. Puede pensar, pausar, retomar y elegir una línea de pensamiento.',loQueDice:'No reporta bloqueo, lentitud subjetiva, aceleración ni presión interna del pensamiento.',contra:'No exige discurso perfecto: puede haber preocupación, tristeza o ansiedad con flujo proporcional.',clasica:''},
      '+1':{nivel:'Flujo acelerado dirigible',loQueVes:'Ideas llegan rápido, asociaciones aumentadas o saltos de tema, pero todavía puede seleccionar, pausar y volver al hilo con redirección.',loQueDice:'"Mi cabeza va rápido." "Salto de una idea a otra." "Tengo muchas ideas, pero puedo ordenarlas si paro."',contra:'No puntuar sólo por hablar rápido: si es velocidad observable sin presión interna, F2. No puntuar por worry/rumiación de un tema: eso va en F4 contenido.',clasica:'AMDP: 21 (acelerado). Reischies: ch10 (acceleration). SCIP: M4 (racing thoughts=1).'},
      '+2':{nivel:'Presión / crowding (Gedankendrängen)',loQueVes:'Presión interna: pensamientos entran a la vez, compiten, se amontonan o no puede detenerlos/elegir uno. Puede acompañarse de habla presionada, pero el ancla es la vivencia de presión/crowding.',loQueDice:'"No puedo parar de pensar." "Me vienen todos a la vez." "Mi cabeza está llena." "Los pensamientos me atropellan." Racing thoughts / thought pressure.',contra:'Si el problema principal es una creencia fija, obsesión o delusión, puntuar F4 contenido además o en lugar de esto. Si no puede inhibir/cambiar de tarea, puntuar F5.',clasica:'AMDP: 22 (Gedankendrängen). ICD-11: MB24.C (thought pressure). Reischies: ch10 (pressure of thought). Fish: Fuga de ideas.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','23 (Gedankenabreißen)','15 (enlentecido), 17 (constreñido)','—','21 (acelerado)','22 (Gedankendrängen)'],
        ['ICD-11','—','—','—','—','MB24.C (thought pressure)'],
        ['Reischies-2025','ch10 (thinking inhibited)','ch10 (thinking retarded)','—','ch10 (acceleration)','ch10 (pressure of thought)'],
        ['Fish (2019)','Bloqueo pensamiento','Inhibición pensamiento','—','—','Fuga de ideas']
      ]
    },
    guide:[
      'Primero pregunte por la forma/flujo, no por el tema: "¿Cómo se siente el movimiento de sus pensamientos?"',
      'Continuidad: "¿Se le corta el pensamiento o la mente queda en blanco?"',
      'Velocidad sentida: "¿Sus pensamientos van más lentos o más rápidos de lo habitual?"',
      'Presión/crowding: "¿Vienen muchos pensamientos a la vez o siente que no puede detenerlos?"',
      'Separadores: F5 = sostener/inhibir/cambiar set; F4 contenido = tema/convicción/intrusión; F2 = velocidad observable del habla o movimiento.'
    ],
    specifiers:[
      {id:'mind-wandering',type:'checkbox',label:'[mind-wandering] (TDAH)'},
      {id:'racing',type:'checkbox',label:'[racing] (manía)'},
      {id:'worry-loop',type:'checkbox',label:'[worry-loop] (ansiedad)'},
      {id:'interference',type:'checkbox',label:'[interference] (psicosis prodrómica)'},
      {id:'rumination',type:'checkbox',label:'[rumination] (depresión/PTSD)'},
      {id:'depresivo',type:'checkbox',label:'[depresivo]'},
      {id:'disociativo',type:'checkbox',label:'[disociativo]'},
      {id:'blocking',type:'checkbox',label:'[blocking] (SZ)'},
      {id:'cognitivo',type:'checkbox',label:'[cognitivo] (brain fog)'}
    ]
  },
  {
    id:'F4.contenido', code:'F4', title:'Contenido del pensamiento', type:'conviction',
    scores:{'0':'Normal','1':'Preocupación','2':'Rumiación / obsesión','3':'Idea sobrevalorada / creencia inusual','4':'Extreme overvalued ideation / delusión'},
    details:{
      '0':{nivel:'Normal',loQueVes:'Creencia flexible, insight preservado, modificable con evidencia.',loQueDice:'',contra:'',clasica:'BABS aprox. 0-3.'},
      '1':{nivel:'Preocupación',loQueVes:'Tema recurrente, ego-sintónica, sin disrupción funcional significativa, modulable con distracción.',loQueDice:'"Preocuparme me protege."',contra:'',clasica:'BABS 4-7. AMDP: 27 (suspicacia), 28 (hipocondría).'},
      '2':{nivel:'Rumiación / obsesión',loQueVes:'Pensamiento intrusivo recurrente: secuestrante y autocastigante (rumiación) o egodistónico con urgencia de neutralizar (obsesión). Insight preservado parcialmente.',loQueDice:'Rumiación: "No puedo parar de darle vueltas." Obsesión: "Sé que es irracional pero no puedo dejar de pensarlo."',contra:'',clasica:'BABS 8-12. AMDP: 20 (rumiación), 30-31 (obsesiones/compulsiones). ICD-11: MB24.E (rumiación), MB26.5 (obsesiones).'},
      '3':{nivel:'Idea sobrevalorada / creencia inusual',loQueVes:'Convicción alta con insight parcial/pobre: puede ser una idea sobrevalorada defendida o una creencia inusual todavía no fija.',loQueDice:'"Esto ES verdad." Acepta posibilidad lógica de error pero no la cree, o la creencia ya toma cualidad inusual.',contra:'',clasica:'BABS 13-17. AMDP: ZP10 (sobrevalorada). ICD-11: MB26.6. Fish: Idea sobrevalorada.'},
      '4':{nivel:'Extreme overvalued ideation / delusión',loQueVes:'Convicción absoluta o casi absoluta: extreme overvalued ideation si conserva alguna corrigibilidad, delusión si es incorrigible y rompe consenso.',loQueDice:'Certeza total o casi total. Rechaza refutación, o defiende la idea como identidad/verdad nuclear.',contra:'',clasica:'BABS 18-24. AMDP: 36-46 (delirios), 55-58 (Schneider 1R). ICD-11: MB26.0 (delusiones). Fish: Delirio, Capgras, Cotard, Fregoli.'}
    },
    frameworks:{
      headers:['','Nivel 1','Nivel 2','Nivel 3','Nivel 4'],
      rows:[
        ['AMDP 9e','27 (suspicacia), 28 (hipocondría)','20 (rumiación), 30-31 (obsesiones)','ZP10 (sobrevalorada)','36-46 (delirios), 55-58 (Schneider 1R)'],
        ['ICD-11','MB26.8-9 (referencia, suspicacia)','MB24.E (rumiación), MB26.5 (obsesiones)','MB26.6 (sobrevalorada)','MB26.0 (delusiones), MB26.1 (influencia)'],
        ['Fish (2019)','—','Obsesión, Compulsión','Idea sobrevalorada','Delirio, Capgras, Cotard, Fregoli, Clérambault'],
        ['HiTOP','Health Anxiety, Mistrust','—','Disease Conviction, Grandiosity','Delusions']
      ]
    },
    guide:['¿Hay alguna idea que lo preocupe mucho?','¿Qué tan seguro está de eso?','¿Podría estar equivocado? (insight)','0→1: frecuencia + interferencia. 1→2: ego-distonía. 2→3: insight. 3→4: corregibilidad.'],
    specifiers:[
      {id:'contenido_tema',type:'multiselect',label:'Tema(s)',options:['Persecutorio','Referencia','Grandeza','Somático/hipocondríaco','Culpa/ruina','Celotipia','Nihilista','Religioso/místico','Erotomaníaco','Control/pasividad','Contaminación','Daño/agresión','Simetría/orden','Muerte/enfermedad','Identidad/cuerpo'],showWhen:'>=1'},
      {id:'contenido_dimension_obsesiva',type:'radio',label:'Dimensión obsesiva',options:['Contaminación','Daño / agresión','Sexual / tabú','Religiosa / escrupulosidad','Simetría / orden','Duda / comprobación','Somática / salud','Relacional','Acumulación','Otra'],showWhen:'==2'},
      {id:'contenido_dominio_sobrevalorado',type:'radio',label:'Dominio sobrevalorado',options:['Corporal / imagen','Peso / alimentación','Salud / enfermedad','Moral / religioso','Celos / relación','Identidad / estatus','Justicia / agravio','Seguridad / amenaza','Ideológico / político','Otro'],showWhen:'>=3'},
      {id:'contenido_tipo_delusion',type:'multiselect',label:'Tipo de delusión',options:['Persecutoria / daño','Referencia','Grandiosa / misión','Religiosa / mística','Somática','Celotípica','Erotomaníaca','Culpa / pecado / ruina','Nihilista','Identidad / transformación','Pensamiento transmitido / insertado / robado (Schneider)','Influencia / control externo (Schneider)','Capgras','Cotard','Fregoli','Intermetamorfosis','Paramnesia reduplicativa','Parasitosis delirante','Licantropía clínica','Otro'],showWhen:'==4'}
    ]
  },
  {
    id:'F6.amenaza', code:'F6', title:'Amenaza / vigilancia', type:'bipolar',
    scores:{'-2':'Temerario / alarma ausente','-1':'Baja cautela / subdetección','0':'Alarma proporcional','+1':'Ansiedad / alerta anticipatoria','+2':'Hipervigilancia / amenaza dominante'},
    instruction:'Evalúe calibración del sistema de amenaza en el momento y la última semana. No clasifica ansiedad, trauma o paranoia; sólo gradúa si la alarma está baja, proporcional o excesiva.',
    details:{
      '-2':{nivel:'Temerario / alarma ausente',loQueVes:'Minimiza peligro evidente, se expone sin cautela o actúa como si las consecuencias físicas/sociales no existieran.',loQueDice:'"No va a pasar nada." "No me da miedo." "Eso no es riesgoso." No reporta preocupación ante riesgo claro.',contra:'Preocupación por el paciente: "no mide el peligro".',clasica:'TriPM Boldness alto como rasgo posible; en pMSE se puntúa el estado de alarma baja, no el diagnóstico.'},
      '-1':{nivel:'Baja cautela / subdetección',loQueVes:'Reconoce riesgos sólo si se le señalan. Puede actuar con descuido o poca anticipación, sin exposición claramente temeraria.',loQueDice:'"Sí, quizá es riesgoso, pero no creo que pase." "No lo había pensado." Minimiza parcialmente.',contra:'Leve incomodidad: el clínico siente que debería anticipar más.',clasica:''},
      '0':{nivel:'Alarma proporcional',loQueVes:'Detecta riesgos reales, se cuida sin sobrevigilar y puede relajarse cuando el contexto es seguro.',loQueDice:'"Me preocupa, pero lo puedo manejar." "Sé qué hacer si pasa." Evalúa peligro y seguridad con flexibilidad.',contra:'Entrevista cómoda; el clínico no siente que deba activar ni contener la alarma.',clasica:''},
      '+1':{nivel:'Ansiedad / alerta anticipatoria',loQueVes:'Preocupación, tensión o evitación aumentada. Escanea posibles problemas, pero puede modularse con explicación, evidencia o apoyo.',loQueDice:'"¿Y si pasa algo?" "Estoy pendiente." "Me cuesta relajarme." "Necesito asegurarme."',contra:'El clínico siente la tensión y tiende a tranquilizar, pero la alarma baja parcialmente.',clasica:'AMDP: ansiedad leve-moderada. ICD-11: MB24.0 (ansiedad). RDoC: Potential Threat.'},
      '+2':{nivel:'Hipervigilancia / amenaza dominante',loQueVes:'Alarma intensa o sostenida. Interpreta el entorno como peligroso, cuesta tranquilizarlo, evita, controla o se defiende de forma rígida.',loQueDice:'"No puedo bajar la guardia." "Algo malo va a pasar." "No estoy seguro en ningún lugar." Puede responder con escape, control o defensa.',contra:'Contagio de alarma: el clínico se activa, baja la voz, reorganiza el encuadre o evalúa seguridad.',clasica:'AMDP: ansiedad grave / hipervigilancia. ICD-11: MB24.0 grave. RDoC: Sustained Threat / Potential Threat.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','—','—','—','70 (ansiedad leve-moderada)','70 (ansiedad grave / hipervigilancia clínica)'],
        ['ICD-11','—','—','—','MB24.0 (ansiedad)','MB24.0 grave (ansiedad dominante / hiperalerta)'],
        ['DSM-5','— (boldness no es dx)','—','—','Ansiedad / worry','Ansiedad severa, hipervigilancia, evitación rígida'],
        ['RDoC','Threat calibración baja','Threat calibración baja','—','Potential Threat','Potential / Sustained Threat'],
        ['HiTOP','—','—','—','Anxious worry','Anxious worry severo / hipervigilancia']
      ]
    },
    guide:[
      'En la última semana, ¿qué tan seguro o amenazante le ha parecido el entorno?',
      '¿Se ha expuesto a riesgos que otros verían evidentes?',
      '¿Ha estado más preocupado, alerta o pendiente de señales de peligro?',
      'Cuando alguien le dice que está seguro, ¿puede bajar la alarma o sigue igual?'
    ]
  },
  {
    id:'F6.frustración', code:'F6', title:'Frustración / error de predicción', type:'bipolar',
    scores:{'-2':'Indefensión / error silente','-1':'Resignación prematura','0':'Corrección flexible','+1':'Irritabilidad / error amplificado','+2':'Explosividad / secuestro por el error'},
    instruction:'Evalúe cómo responde la persona cuando la realidad no coincide con lo esperado: bloqueo, límite, demora, pérdida, rechazo o no-recompensa. No mide agresión; si hay daño, amenaza o violencia, puntúe además A4/OAS.',
    details:{
      '-2':{nivel:'Indefensión / error silente',loQueVes:'El obstáculo no moviliza corrección. Se apaga, se rinde, abandona necesidades o metas aun cuando el problema podría intentarse resolver.',loQueDice:'"Da igual." "No puedo hacer nada." "Ya fue." "Para qué intentarlo."',contra:'Alarma clínica: el clínico siente que el paciente no registra posibilidad de reparación o agencia.',clasica:'RDoC: Frustrative Nonreward atenuado / learned helplessness. AMDP: apatía/abulia si es persistente. Distinguir de F3.drive bajo.'},
      '-1':{nivel:'Resignación prematura',loQueVes:'Detecta el bloqueo, pero se retira antes de intentar reparar, negociar o insistir. Tolera frustración apagándose o evitando.',loQueDice:'"Mejor lo dejo." "No quiero problema." "No vale la pena pelear." "Si me dicen que no, ya está."',contra:'Preocupación suave: parece ceder demasiado rápido ante errores corregibles.',clasica:'Frustrative Nonreward bajo: respuesta de retirada ante no-recompensa.'},
      '0':{nivel:'Corrección flexible del error',loQueVes:'Se molesta si corresponde, pero ajusta expectativa, estrategia o conducta. Puede esperar, negociar, pedir ayuda, reparar o probar otra vía.',loQueDice:'"Me frustró, pero busqué otra forma." "Me molestó y lo conversé." "Cambié el plan."',contra:'Entrevista fluida; el clínico percibe agencia y flexibilidad.',clasica:'Predicción-error calibrado: actualización flexible de expectativa y conducta.'},
      '+1':{nivel:'Irritabilidad / error amplificado',loQueVes:'Contratiempos pequeños se sienten grandes. Queja, impaciencia, tono cortante o tensión sostenida; todavía puede modularse.',loQueDice:'"Me molesta todo." "No soporto esperar." "Nada sale como quiero." "Me cuesta calmarme."',contra:'El clínico siente tensión, prisa o necesidad de manejar la irritación.',clasica:'AMDP: 68 (irritabilidad). ICD-11: ira/irritabilidad. HiTOP: Irritability. RDoC: Frustrative Nonreward elevado.'},
      '+2':{nivel:'Explosividad / secuestro por el error',loQueVes:'El bloqueo toma el sistema: estalla ante límites, negativas o demoras. Pérdida de control verbal/conductual; si hay amenaza o daño, abrir A4/OAS.',loQueDice:'"Me saco de quicio." "No aguanto que me digan que no." "Exploté." "No pude parar."',contra:'Miedo, irritación o impulso de controlar/terminar la entrevista; el encuadre se siente frágil.',clasica:'AMDP: irritabilidad severa/agresividad si hay conducta. ICD-11: ira/agitación/agresión según expresión. RDoC: Frustrative Nonreward exagerado.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','apatía/abulia si persistente','—','—','68 (irritabilidad)','68 severa; 94 sólo si hay agresión'],
        ['ICD-11','apatía/avolición si persistente','—','—','ira/irritabilidad','ira severa; agresión sólo si conducta'],
        ['DSM-5','depresión/SZ negativos si persistente','—','—','irritabilidad transdiagnóstica','DMDD/TLP/TEI sólo según contexto'],
        ['RDoC NVS','Frustrative Nonreward bajo / helplessness','FNR atenuado','—','FNR elevado','FNR exagerado'],
        ['HiTOP','Low agency / detachment si persistente','—','—','Irritability','Irritability severo / externalizing si hay conducta']
      ]
    },
    guide:[
      'Cuando algo no sale como esperaba, ¿qué pasa en usted?',
      '¿Se apaga, se adapta, insiste o explota?',
      '¿Qué ocurrió la última vez que alguien le dijo que no?',
      '¿Puede corregir el plan o queda tomado por la irritación?',
      'Si hubo amenaza, daño o violencia, puntúe además A4/OAS.'
    ]
  },
  {
    id:'F6.animo-meta', code:'F6', title:'Ánimo-meta', type:'bipolar',
    scores:{'-2':'Loss extremo','-1':'Loss moderado','0':'Proporcional','+1':'Elation','+2':'Euforia'},
    details:{
      '-2':{nivel:'Loss extremo',loQueVes:'Polo negativo severo. Seleccionar canal depresivo, ansioso, o ambos: tristeza vital/grief y/o ansiedad extrema ante pérdida inminente.',loQueDice:'Depresivo: "No siento nada." "Todo se acabó." Ansioso: "Lo voy a perder." "No puedo tolerar que se vaya / que ocurra." Puede coexistir.',contra:'ALARMA: evaluar riesgo suicida si colapso prospectivo; evaluar pánico de separación/abandono si predominan amenaza y urgencia de vínculo.',clasica:'RDoC: Loss + Potential/Sustained Threat. AMDP: 63 grave, 70 ansiedad grave. ICD-11: MB24.5 depressed mood, MB24.0 anxiety.'},
      '-1':{nivel:'Loss moderado',loQueVes:'Polo negativo moderado. Seleccionar canal depresivo, ansioso, o ambos: desánimo y/o ansiedad anticipatoria ante pérdida.',loQueDice:'Depresivo: "Me cuesta todo." "No creo que mejore." Ansioso: "¿Y si lo pierdo?" "Estoy en alerta por si pasa." Puede coexistir.',contra:'Preocupación calibrada: distinguir desaliento depresivo de alarma anticipatoria, o documentar ambos.',clasica:'RDoC: Loss incipiente + Potential Threat. AMDP: 63 leve, 70 leve. ICD-11: MB22.2 desmoralización, MB24.0 anxiety.'},
      '0':{nivel:'Proporcional',loQueVes:'Ánimo proporcional al contexto. Oscilante según eventos. Capacidad de sentir tristeza Y alegría según corresponda.',loQueDice:'Respuestas afectivas proporcionales. Puede hablar de cosas buenas y malas con tono congruente.',contra:'Entrevista cómoda, fluida.',clasica:''},
      '+1':{nivel:'Elation',loQueVes:'Progreso percibido como excelente. Optimismo, sensación de logro, energía. Puede ser adaptativo o inicio de escalada.',loQueDice:'"Todo está saliendo bien." "Me siento muy bien." "Tengo mucha energía." Optimismo que puede ser proporcionado o excesivo.',contra:'Energía contagiosa. El clínico monitorea si escala.',clasica:'AMDP: 72 (autoestima aumentada leve). ICD-11: MB24.8 (ánimo elevado). Forbes: Elated mood.'},
      '+2':{nivel:'Euforia',loQueVes:'Comparador descalibrado: evalúa todo como éxito. Euforia, expansividad, grandiosidad, elevated mood. Gasta como si tuviera infinito.',loQueDice:'"Todo es INCREÍBLE." "Soy invencible." "Nunca me he sentido mejor." Minimiza consecuencias.',contra:'El clínico siente que el paciente "está en otro planeta." Los familiares confirman cambio.',clasica:'AMDP: 66 (euforia), 45 (delirios grandeza), 72 (autoestima exagerada grave). ICD-11: MB24.6 (elevated mood), MB26.2 (grandiosidad). Fish: Manía, Éxtasis, Expansividad. Vallejo: Alegría patológica. DSM-5: Criterio A BD-I (elevated/expansive mood). Forbes: Elated mood, expansive mood.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','63 grave, 60 (pérdida sentimientos), 62, 70 (quejumbrería)','63 leve, 64 (desesperanza)','—','72 (autoestima↑ leve)','66 (euforia), 45 (delirios grandeza), 72 grave'],
        ['ICD-11 MB','MB24.5 (depressed mood), MB23.A (llanto)','MB22.2 (desmoralización), MB22.3 (desesperanza)','—','—','MB24.6 (elevated mood), MB26.2 (grandiosidad)'],
        ['HiTOP-SR','Ánimo deprimido, Distress-Dysphoria, Lasitud','—','Bienestar','—','Grandiosidad'],
        ['Fish (2019)','Tristeza vital, Depresión endógena','—','—','—','Manía, Éxtasis, Expansividad'],
        ['Vallejo (2025)','Tristeza patológica','—','—','—','Alegría patológica'],
        ['DSM-5','Criterio A1 MDD (depressed mood)','—','—','—','Criterio A BD-I (elevated/expansive mood)'],
        ['Forbes (2024)','Ánimo deprimido, vacío','—','—','—','Elated mood, expansive mood']
      ]
    },
    guide:['¿Cómo se ha sentido de ánimo?','Si está en polo negativo: ¿predomina tristeza/desánimo, alarma por pérdida/abandono, o ambos?','¿Siente que las cosas van bien en su vida? ¿Hacia dónde van?','¿Siente que todo le sale bien, que tiene una energía especial?','¿Ha perdido a alguien importante recientemente? ¿Cómo lo lleva?','¿Siente que la tristeza es "física", como un peso en el cuerpo?'],
    specifiers:[
      {id:'loss_dep',type:'radio',label:'Canal depresivo (polo −)',options:['-1 Desánimo','-2 Tristeza vital / grief'],showWhen:'<0'},
      {id:'loss_anx',type:'radio',label:'Canal ansioso (polo −)',options:['-1 Ansiedad anticipatoria / alarma de pérdida','-2 Ansiedad extrema / pérdida inminente'],showWhen:'<0'},
      {id:'animo_meta',type:'radio',label:'Tipo de meta',options:['[relacional]','[identitaria]','[funcional]','[vital]'],showWhen:'!=0'},
      {id:'animo_temp',type:'radio',label:'Temporalidad',options:['[agudo]','[crónico]','[cíclico]'],showWhen:'!=0'}
    ]
  },
  {
    id:'F6.autoevaluación', code:'F6', title:'Autoevaluación / valor del self', type:'bipolar',
    scores:{'-2':'Worthlessness / culpa nuclear','-1':'Autoevaluación negativa','0':'Autoevaluación realista','+1':'Autoestima elevada / autoafirmación rígida','+2':'Grandiosidad afectiva / invulnerabilidad'},
    instruction:'Evalúe la carga afectiva del self: valor personal, culpa, vergüenza, derecho, superioridad o invulnerabilidad. No puntúe aquí una creencia fija; si culpa o grandeza son incorregibles, puntúe además F4 contenido.',
    details:{
      '-2':{nivel:'Worthlessness / culpa nuclear',loQueVes:'El self aparece como defectuoso, imperdonable, carga o moralmente arruinado. La autovaloración negativa permea casi todo.',loQueDice:'"Soy una carga." "No merezco nada." "Todo es mi culpa." "Estoy mal como persona."',contra:'Alarma empática: evaluar riesgo suicida si el valor personal colapsa o aparece deseo de castigo.',clasica:'AMDP: culpa grave/insuficiencia; ICD-11: culpa/worthlessness; DSM-5: MDD A7; Forbes: autodenigración, ser carga.'},
      '-1':{nivel:'Autoevaluación negativa',loQueVes:'Autocrítica, vergüenza o inferioridad excesiva, pero parcial y modulable. Puede reconocer algún valor si se explora.',loQueDice:'"No soy suficiente." "Fallé." "Me cuesta verme bien." "Siento vergüenza de mí."',contra:'El clínico intenta matizar y nota que algo de evidencia positiva todavía entra.',clasica:'AMDP: sentimientos de insuficiencia. HiTOP: distress, shame/guilt.'},
      '0':{nivel:'Autoevaluación realista',loQueVes:'Reconoce fortalezas y límites. Puede aceptar responsabilidad sin colapsar en culpa, y logros sin inflarse.',loQueDice:'"Tengo cosas buenas y cosas por mejorar." "Me equivoqué, pero puedo repararlo." "Me fue bien, aunque no soy perfecto."',contra:'Entrevista flexible; el self tolera complejidad.',clasica:''},
      '+1':{nivel:'Autoestima elevada / autoafirmación rígida',loQueVes:'Confianza alta, sensación de ser especial o merecer más. Todavía puede corregir, considerar evidencia y reconocer límites.',loQueDice:'"Soy muy capaz." "Sé que valgo más." "Soy especial en esto." "Merezco que me reconozcan."',contra:'El clínico percibe autoafirmación intensa, pero aún negociable.',clasica:'AMDP: autoestima aumentada leve; HiTOP/Forbes: grandiosidad leve/derecho si interfiere.'},
      '+2':{nivel:'Grandiosidad afectiva / invulnerabilidad',loQueVes:'El self se siente superior, excepcional, intocable o con derecho especial. No necesita ser delirio; si es fijo/incorregible, puntuar F4 contenido.',loQueDice:'"Soy superior." "Soy invulnerable." "No aplican las reglas para mí." "Merezco trato especial."',contra:'El clínico siente distancia, irritación o que la evidencia no alcanza a modular la autoimagen.',clasica:'AMDP: autoestima exagerada/grandiosidad afectiva. ICD-11/DSM-5: grandiosidad según contexto. Forbes: grandiosidad y derecho.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','culpa grave / insuficiencia nuclear','71 (insuficiencia)','—','72 (autoestima↑ leve)','72 grave; 45 sólo si contenido delirante'],
        ['ICD-11','culpa / worthlessness','—','—','—','grandiosidad según contexto; delusión sólo si F4'],
        ['DSM-5','MDD A7 (worthlessness/guilt)','—','—','—','BD-I B1 (grandiosity) según contexto'],
        ['HiTOP','Vergüenza/Culpa, Distress','Distress / baja autoestima','Bienestar flexible','Grandiosidad leve','Grandiosidad / derecho'],
        ['Forbes (2024)','Autodenigración, "ser carga"','—','—','—','Grandiosidad y derecho']
      ]
    },
    guide:[
      'Cuando piensa en usted mismo, ¿qué siente que vale como persona?',
      '¿Se siente una carga, culpable o defectuoso?',
      '¿Puede reconocer errores sin sentir que usted entero está mal?',
      '¿Se ha sentido superior, invulnerable o destinado a algo especial?',
      'Si alguien lo contradice, ¿puede considerar que puede estar equivocado?',
      'Separadores: F4 = creencia fija; F6 ánimo-meta = estado/progreso vital; P1 = posición frente a otros; aquí = carga afectiva del self.'
    ],
    specifiers:[
      {id:'autoeval_neg',type:'radio',label:'Tipo (polo −)',options:['[worthlessness]','[culpa]','[vergüenza]','[carga]'],showWhen:'<0'},
      {id:'autoeval_pos',type:'radio',label:'Tipo (polo +)',options:['[inflada]','[grandiosa]','[invulnerable]','[derecho especial]'],showWhen:'>0'}
    ]
  },
  {
    id:'F6.desesperanza', code:'F6', title:'Prospectiva / modelo de futuro', type:'bipolar',
    scores:{'-2':'Colapso prospectivo','-1':'Horizonte recortado','0':'Prospectiva calibrada','+1':'Sesgo optimista rígido','+2':'Prospección grandiosa / invulnerable'},
    instruction:'Evalúe si la persona puede representar un futuro posible y con valencia flexible. No mide deseo de morir, plan, intención ni capacidad suicida; si la muerte aparece como salida, alivio o plan, abra outcome suicidio.',
    details:{
      '-2':{nivel:'Colapso prospectivo',loQueVes:'El futuro positivo no aparece. Puede haber blanco, apagamiento, "no sé", o un futuro completamente negativo sin salida.',loQueDice:'"No veo nada." "Nada va a cambiar." "No hay salida." "No puedo imaginar algo bueno."',contra:'Alarma clínica: el futuro está colapsado, pero suicidio se evalúa aparte si aparece muerte como posibilidad o salida.',clasica:'AMDP: desesperanza grave. ICD-11: hopelessness/pesimismo. DSM-5: MDD severa/PTSD foreshortened future según contexto.'},
      '-1':{nivel:'Horizonte recortado',loQueVes:'Puede imaginar futuro, pero pobre, corto, rígido o con muy baja probabilidad de mejora. No menciona futuro espontáneamente o lo evita.',loQueDice:'"Dudo que mejore." "No sé qué esperar." "Sólo pienso en pasar el día." "Algo podría mejorar, pero no lo siento probable."',contra:'Preocupación: el mundo temporal del paciente se achica.',clasica:'AMDP: desesperanza leve/pesimismo. ICD-11: pesimismo.'},
      '0':{nivel:'Prospectiva calibrada',loQueVes:'Puede imaginar escenarios positivos y negativos con flexibilidad y probabilidades razonables. Puede planear sin negar riesgos.',loQueDice:'"Hay cosas que pueden salir bien y otras no." "Tengo un plan, pero veremos." "Puedo imaginar opciones."',contra:'Entrevista cómoda; el futuro tiene textura y probabilidades.',clasica:''},
      '+1':{nivel:'Sesgo optimista rígido',loQueVes:'Futuro demasiado positivo, minimiza obstáculos o señales adversas, pero aún puede corregir y ajustar expectativas.',loQueDice:'"Seguro todo mejora." "No va a pasar nada malo." "Lo resolveré fácil." Minimiza riesgos reales.',contra:'Comodidad con reserva: el optimismo parece poco permeable a costos.',clasica:'Sesgo optimista elevado; cruzar con F3 anticipación/drive y F6 ánimo-meta.'},
      '+2':{nivel:'Prospección grandiosa / invulnerable',loQueVes:'Futuro excepcional, destinado, garantizado o desconectado de capacidades reales. Planes expansivos sin freno ni cálculo de riesgo.',loQueDice:'"Todo va a salir increíble." "Tengo un destino." "Estoy destinado a algo enorme." "Nada puede fallar."',contra:'El clínico siente que el futuro descrito no es posible con las condiciones actuales.',clasica:'AMDP: autoestima aumentada/grandiosidad si aplica. ICD-11/DSM-5: grandiosidad/manía según contexto; delirio sólo si F4.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','64 (desesperanza grave)','64 leve / pesimismo','—','optimismo poco calibrado','72 autoestima↑; 45 sólo si F4'],
        ['ICD-11','MB22.3 (hopelessness)','MB28.D (pesimismo)','—','—','grandiosidad/manía según contexto'],
        ['DSM-5','MDD severa, PTSD D4 (foreshortened future)','MDD/distimia según contexto','—','—','BD manía según contexto'],
        ['RDoC','Loss / Sustained Threat','Loss incipiente','—','Positive Valence elevado','Approach sin freno']
      ]
    },
    guide:[
      'Dígame tres cosas buenas que podrían pasar esta semana.',
      'Ahora tres cosas malas.',
      '¿Cuál de esas siente más probable?',
      'Cuando piensa en un año, ¿aparece una imagen o queda en blanco?',
      '¿La muerte aparece como posibilidad, alivio o plan? Si sí, abrir outcome suicidio.'
    ],
    specifiers:[
      {id:'desesperanza_type',type:'radio',label:'Tipo de colapso prospectivo',options:['Vacío prospectivo','Negativo activo','Mixto'],showWhen:'<0'}
    ]
  },
  {
    id:'F7.testing', code:'F7', title:'Testing de realidad', type:'bipolar',
    scores:{'-2':'Pérdida franca de testing','-1':'Testing permeable / distorsión','0':'Preservado','+1':'Sobreprueba / duda perceptiva','+2':'Sobreprueba compulsiva / incompletitud'},
    details:{
      '-2':{nivel:'Pérdida franca de testing (JTC + externalizing bias)',loQueVes:'No corrige creencias o percepciones frente a evidencia consensual inmediata. F4 fijo o F2 formado ganan más peso si F7=-2. Beads task ≤2 draws.',loQueDice:'Contenido delirante con convicción total. O reporta percepciones que otros no comparten como realidad externa.',contra:'Alarma: quiebre psicótico. El clínico evalúa riesgo + contenido.',clasica:'AMDP: 33-52 (delirios, alucinaciones). ICD-11: MB26.0 (delusiones), MB27.2 (alucinaciones). SCIP: HAL1-9 (alucinaciones), DEL1-9 (delirios). Forbes: Delirios, Experiencias inusuales. Reischies: ch12 (alucinaciones), ch14 (delirios). Fish: Delirio, Delirio primario, Humor delirante, Percepción delirante, Alucinación. Vallejo: Delirio, Alucinación. Eguíluz: Alucinación, Alucinosis, Delirio.',circuito:'Salience network hiperactiva (ínsula anterior + ACC): señales internas reciben peso de señal externa. OFC: fallo reality filtering (Schnider, 210-330ms). DA mesolímbica ↑↑ (saliencia aberrante, Kapur 2003). Glutamato: hipofunción NMDA cortical.',precision:'F7 no reemplaza F4/F2: los potencia. F4≥4 + F7=-2 = evidencia convergente fuerte; F2+2 + F7=-2 = fenómeno perceptivo tomado como realidad. JTC: beads task ≤2 draws. CBTp/MCT target JTC + BADE.'},
      '-1':{nivel:'Testing permeable / distorsión (BADE + liberal acceptance)',loQueVes:'Acepta ilusiones, ideas sobrevaloradas o pseudoalucinaciones, pero todavía duda o corrige parcialmente. F4/F2 atenuados ganan significado si F7=-1. Beads task 3-4.',loQueDice:'Reconoce parcialmente que puede estar equivocado. "Quizá me lo imagino, pero me parece real."',contra:'Incomodidad sutil: ¿PLEs, pródromo, trauma o disociación?',clasica:'AMDP: 47 (ilusiones), ZP10 (ideas sobrevaloradas), 53-54 (desrealización/despersonalización). ICD-11: MB26.6, MB27.0-1 (dp/dr). Reischies: ch08 (alteración experiencia consciente), ch12 (ilusión), ch13 (despersonalización), ch14 (idea sobrevalorada). Fish: Pseudoalucinación, Ilusión, Idea sobrevalorada, Pareidolia. Vallejo: Ilusión, Idea sobrevalorada, Despersonalización.',circuito:'Salience network parcialmente disfuncional. mPFC anterior: reducción señal source monitoring. Default mode network hiperconectividad: propensión a fantasía. DA: desregulación parcial. 5-HT2A/DA desbalance.',precision:'F7=-1 convierte F4/F2 leves en evidencia de vulnerabilidad, no en psicosis franca por sí solo. Attenuated psychosis syndrome: monitoreo longitudinal; distinguir por distress, decline funcional y persistencia BADE.'},
      '0':{nivel:'Preservado (calibración metacognitiva)',loQueVes:'Discrimina interno/externo, confianza proporcional, corrige errores. Beads task 5-8.',loQueDice:'',contra:'Entrevista cómoda.',clasica:'',circuito:'Salience network calibrada. OFC reality filtering funcional. Balance DMN ↔ task-positive network.',precision:''},
      '+1':{nivel:'Sobreprueba / duda perceptiva (confianza metacognitiva ↓)',loQueVes:'Corrige, pero necesita confirmación externa; checking ocasional. Potencia F4 obsesión/duda y F2 tipo 1 como patrón de sobreverificación. Beads task 9-12.',loQueDice:'"¿Eso realmente pasó?" "Necesito verificar." "No estoy seguro de lo que vi/oí."',contra:'Paciencia requerida: el paciente necesita confirmación repetida.',clasica:'AMDP: 27 (suspicacia), 30-31 (obsesiones-compulsiones checking). ICD-11: MB26.9 (suspicacia), MB25.0-1 (obsesiones). HiTOP: Mistrust, Doubt. SCIP: OCD3 (compulsiones verificación). Fish: Obsesión, Compulsión. Reischies: ch11 (suspicacia), ch10 (compulsiones verificación).',circuito:'Loop CSTC hiperactivado en verificación. DLPFC: sobre-monitoreo de errores. ACC: señal de error persistente ("algo no está bien"). 5-HT: desbalance CSTC (base ISRS).',precision:'F7 positivo no es mejor testing: es exceso de testing. Si F4 obsesión/rumiación + F7>0, aumenta evidencia de duda/checking; si F2 tipo 1 + F7>0, aumenta evidencia de hipervigilancia perceptiva.'},
      '+2':{nivel:'Sobreprueba compulsiva / incompletitud (NJRE + señal que no se apaga)',loQueVes:'Nada confirma suficiente: checking compulsivo, incompletitud sensorial (NJRE), parálisis decisional. Potencia obsesiones, just-right y F2 tipo 1. Beads task >12.',loQueDice:'"Algo no está bien pero no sé qué." "Necesito verificar una y otra vez." "No siento que esté completo."',contra:'Exasperación: nada satisface al paciente. El clínico siente que el loop no tiene salida.',clasica:'AMDP: 30-31 (obsesiones just-right). ICD-11: MB25.0-1 (severo). HiTOP: Suspicacia, Perfeccionismo patológico. SCIP: DEL5-7, OCD1-4 (severas). Fish: Obsesión severa. Reischies: ch10 (compulsiones).',circuito:'Ínsula medio-posterior hiperactiva: señal interoceptiva de incompletitud que no se apaga (Brown & Stern 2018). Loop CSTC refractario a habituación. OFC: hiperfiltro — reality filtering nunca confirma "suficiente". Cerebelo lobule VI: compartido con reality monitoring (Lavallé 2023). 5-HT: desbalance CSTC refractario. Posible componente glutamatérgico insular.',precision:'TOC severo NJRE-driven: ISRS alta dosis + ERP con target incompletitud. YBOCS ≥24 con just-right predominante. Considerar potenciación si refractario. F7=+2 potencia F4 obsesiva y F2 hipervigilante; no debe usarse como evidencia de delusión.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','33-52 (delirios, alucinaciones)','47 (ilusiones), ZP10 (sobrevaloradas)','—','27 (suspicacia), 30-31 (checking)','30-31 (just-right)'],
        ['ICD-11','MB26.0 (delusiones), MB27.2 (alucinaciones)','MB26.6, MB27.0-1 (dp/dr)','—','MB26.9, MB25.0-1 (obsesiones)','MB26.7-8, MB25 (severo)'],
        ['Fish (2019)','Delirio, Alucinación','Pseudoalucinación, Ilusión, Idea sobrevalorada','—','Obsesión, Compulsión','Obsesión severa'],
        ['HiTOP','Distorsión realidad, Delirios, Alucinaciones','Excentricidad, Fantasía','—','Mistrust, Doubt','Suspicacia, Perfeccionismo patológico']
      ]
    },
    guide:['Ante evidencia o consenso inmediato, ¿corrige, duda, negocia o se aferra?','¿Ha tenido experiencias que otros no comparten?','¿Escucha o ve cosas que otros no?','¿Siente que necesita verificar las cosas repetidamente?','¿Siente que algo no está bien pero no puede identificar qué?','Cruce siempre F7 con F4 contenido y F2 sensorial: F7 potencia la interpretación, no reemplaza el fenómeno.']
  },
  {
    id:'F7.coherencia-autobiografica', code:'F7', title:'Coherencia autobiográfica', type:'bipolar',
    scores:{'-2':'Reliving / desanclaje temporal','-1':'Intrusión / laguna parcial','0':'Narrativa integradora','+1':'Relleno / sobreinferencia','+2':'Confabulación autobiográfica'},
    details:{
      '-2':{nivel:'Reliving / desanclaje temporal',loQueVes:'El recuerdo no se vive como recuerdo: una escena, sensación o fragmento autobiográfico se impone como presente. Puede haber flashback, fuga, laguna disociativa severa o pérdida del aquí-ahora.',loQueDice:'"Sé que pasó, pero lo vivo como si estuviera pasando ahora." "Me voy a ese momento." "No puedo ubicarlo; estoy allá otra vez."',contra:'Riesgo de confundir trauma/disociación con psicosis si no se pregunta por anclaje temporal. La clave es pasado vivido como ahora, no una creencia delirante primaria.',clasica:'DSM-5: PTSD criterio B, flashbacks, subtipo disociativo. ICD-11: PTSD/CPTSD re-experiencing in the present. Fish: estados disociativos, déjà vécu patológico. No equivale a confabulación.',circuito:'Hipocampo-vmPFC hipoancla contexto temporal; amígdala/salience hiperetiqueta fragmentos como actuales; DMN autobiográfica se desorganiza; LC-NE aumenta presentness y ganancia sensorial.',precision:'Evaluar presentness, disparadores, modalidad, orientación durante el episodio y recuperación. Si se desorienta durante el fenómeno, cruzar con conciencia y arousal.'},
      '-1':{nivel:'Intrusión / laguna parcial',loQueVes:'Recuerdos intrusivos, huecos o fragmentos autobiográficos incompletos, con anclaje temporal todavía disponible. Puede reconstruir con apoyo y conserva la frase clave: "sé que es pasado".',loQueDice:'"Me viene, pero sé que es un recuerdo." "Hay huecos." "Puedo ordenar la historia si voy despacio."',contra:'No puntuar como -2 si mantiene orientación y recupera continuidad con grounding o preguntas abiertas. No sugerir contenido al ordenar la narrativa.',clasica:'PTSD/CPTSD con intrusiones parciales, amnesia disociativa parcial, lagunas autobiográficas con insight temporal conservado.',circuito:'Hipocampo-vmPFC parcialmente desacoplado; salience elevada pero modulable; DMN autobiográfica conserva integración parcial.',precision:'Registrar frecuencia, interferencia, modalidad y cuánto recupera la continuidad tras anclaje.'},
      '0':{nivel:'Narrativa integradora',loQueVes:'Integra episodios personales en una continuidad temporal flexible. Puede distinguir hecho, recuerdo, interpretación, imaginación, inferencia y duda; tolera incertidumbre sin rellenarla ni fragmentarse.',loQueDice:'"Eso fue antes; ahora estoy aquí." "No recuerdo esa parte." "Creo que fue así, pero no estoy seguro." "Esto es mi interpretación, no un dato."',contra:'No significa relato perfecto ni memoria exhaustiva. Puede tener lagunas normales si las reconoce como lagunas y no las rellena con certeza.',clasica:'Integración autobiográfica preservada: diferenciación pasado-presente, monitoreo de fuente y corrección ante nueva evidencia.',circuito:'Hipocampo-vmPFC contextualiza episodios; DMN autobiográfica organiza continuidad; CEN permite monitoreo narrativo y tolerancia a la duda.',precision:'El 0 es activo/integrador: reconoce límites de memoria y mantiene continuidad del self sin reliving ni confabulación.'},
      '+1':{nivel:'Relleno / sobreinferencia',loQueVes:'Llena huecos con inferencias plausibles, detalles dudosos o mezcla de fuentes. La narrativa parece continua, pero algunas partes son deducidas; corrige si se le muestra evidencia o reconoce incertidumbre.',loQueDice:'"Creo que fue así." "Ahora que lo dice, puede que lo esté mezclando." "Lo estoy deduciendo."',contra:'Diferenciar de mentira consciente: aquí el problema es etiquetar una inferencia como recuerdo. Cuidado con preguntas sugestivas: pueden cristalizar el relleno.',clasica:'Falso reconocimiento leve, source-memory error, intrusiones mnésicas no delirantes. Puede aparecer con ansiedad, trauma, deterioro cognitivo leve o entrevistas muy directivas.',circuito:'Hipocampo-vmPFC con source monitoring débil; CEN compensa parcialmente; DMN completa huecos narrativos.',precision:'Pedir fuente del dato, certeza y reacción ante corrección. Cruzar con NC.recall y funcionamiento ejecutivo si hay duda.'},
      '+2':{nivel:'Confabulación autobiográfica',loQueVes:'Construye o sostiene una historia autobiográfica falsa o mal ensamblada sin intención de engañar, con alta certeza y baja corrección. Puede mezclar tiempos/personas o crear continuidad ficticia.',loQueDice:'Narra detalles con seguridad pese a contradicción objetiva, informantes o registros. No reconoce el relleno como inferencia.',contra:'Puede sonar coherente y convincente; la falla es de memoria/source monitoring, no necesariamente delirio. Requiere contraste cuidadoso con datos externos.',clasica:'Fish/Vallejo: confabulación. Síndrome amnésico, daño orbitofrontal/vmPFC, Korsakoff, TCE, demencias, delirium en recuperación. No es mentira ni delirio primario por sí mismo.',circuito:'Hipocampo-PFC: source memory y anclaje episódico fallan; vmPFC/OFC no inhibe memorias o inferencias irrelevantes; DMN sobreconstruye continuidad narrativa; CEN monitorea débilmente.',precision:'Contrastar con informante/registro, evaluar NC.recall, funciones ejecutivas y fluctuación. Si es aguda o nueva: considerar etiología neurológica, tóxica, metabólica o delirium.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP / Fish','Estados disociativos, déjà vécu patológico','Lagunas / intrusiones con insight','—','Falso reconocimiento, mezcla de fuentes','Confabulación'],
        ['ICD-11','PTSD/CPTSD re-experiencing in the present, amnesia disociativa','Intrusiones traumáticas parciales','—','Errores de memoria / source monitoring','Síndrome amnésico, delirium/NCD si aplica'],
        ['DSM-5','PTSD B3/B4, subtipo disociativo','PTSD intrusiones con insight','—','Falso reconocimiento / memoria sugestible','Neurocognitive disorder, delirium, amnestic disorder si aplica'],
        ['RDoC','Declarative Memory + Self Knowledge desintegrados','Declarative Memory vulnerable','—','Source memory débil','Declarative Memory + Cognitive Control alterados'],
        ['HiTOP','Experiencias disociativas / trauma intrusivo','Experiencias disociativas leves','—','Cognición/memoria autobiográfica alterada','Thought disorder / memoria autobiográfica alterada']
      ]
    },
    guide:['¿Puede ubicar lo vivido en una narrativa temporal verificable?','¿Lo que aparece se siente como recuerdo, imagen, sensación corporal o escena presente?','Cuando ocurre, ¿sabe que está en el presente o lo vive como ahora?','¿Hay huecos de memoria o partes que otros recuerdan distinto?','¿Puede decir qué es dato, qué es interpretación y qué no recuerda?'],
    specifiers:[
      {id:'auto_mem_tipo',type:'radio',label:'Fenómeno principal',options:['[reliving] Flashback','[intrusion] Recuerdo intrusivo','[laguna] Laguna/amnesia','[relleno] Relleno inferencial','[confab] Confabulación'],showWhen:'!=0'},
      {id:'auto_mem_modalidad',type:'radio',label:'Modalidad dominante',options:['Visual','Auditiva','Somática','Emocional','Narrativa','Multimodal'],showWhen:'!=0'},
      {id:'auto_mem_presentness',type:'radio',label:'Presentness',options:['Sabe que es pasado','Oscila pasado-presente','Lo vive como ahora','No ubicable'],showWhen:'<0'},
      {id:'auto_mem_source',type:'radio',label:'Fuente / verificación',options:['Paciente','Informante','Registro','Mixta','No verificable'],showWhen:'!=0'}
    ]
  },
  {
    id:'F7.auto-mentalización', code:'F7', title:'Auto-mentalización / lectura interna', type:'bipolar',
    scores:{'-2':'Opacidad interna','-1':'Lectura interna concreta','0':'Auto-mentalización calibrada','+1':'Sobre-reflexión / intelectualización','+2':'Pseudo-insight / hipermentalización del self'},
    instruction:'Evalúe cómo entiende sus propios estados internos: emociones, deseos, motivos, conflicto, cuerpo y conducta. No puntúa identidad/presentación social; eso va en F7 self-integración. No puntúa convicción fija; eso va en F4/F7 testing.',
    details:{
      '-2':{nivel:'Opacidad interna',loQueVes:'No puede representar estados internos propios. Afecto, impulso o conducta ocurren sin nombre, motivo ni enlace con contexto.',loQueDice:'"No sé qué siento." "No sé por qué hice eso." "Sólo me pasa." "Estoy mal, pero no sé de qué."',contra:'El clínico se vuelve traductor del estado interno y debe ofrecer muchas hipótesis básicas.',clasica:'RFQ: incertidumbre alta sobre estados mentales. CAMSQ: baja certeza calibrada sobre estados propios. MAS-A: self-reflectivity muy baja.'},
      '-1':{nivel:'Lectura interna concreta',loQueVes:'Identifica estados simples, pero no los conecta bien con deseo, conflicto, relación, cuerpo o conducta. Usa etiquetas globales o resultados.',loQueDice:'"Estoy bien/mal." "Me enojé porque pasó." "Soy así." "No sé qué quería, sólo reaccioné."',contra:'La entrevista avanza si se usan ejemplos conductuales y anclajes corporales.',clasica:'Mentalización baja pero no ausente; alexitimia/conciencia emocional baja si predomina dificultad afectiva.'},
      '0':{nivel:'Auto-mentalización calibrada',loQueVes:'Nombra estados internos, los conecta con contexto y conducta, tolera incertidumbre y corrige hipótesis sobre sí mismo.',loQueDice:'"Creo que estaba dolido y por eso respondí así." "No estoy seguro, pero puede ser..." "Me doy cuenta de que cambió cuando..."',contra:'El clínico siente que puede pensar con el paciente, no por el paciente.',clasica:'RFQ/CAMSQ: certeza moderada y flexible. MAS-A: self-reflectivity integrada. BCIS: buena self-reflectiveness sin self-certainty rígida.'},
      '+1':{nivel:'Sobre-reflexión / intelectualización',loQueVes:'Explica mucho, regula poco. Usa teoría, etiquetas diagnósticas o análisis excesivo; la reflexión se vuelve rumiativa o defensiva.',loQueDice:'"Ya lo analicé mil veces." "Sé que es mi apego/trauma/esquema." "Entiendo todo, pero no cambia nada."',contra:'El clínico escucha insight verbal, pero nota poca conexión afectiva o conductual.',clasica:'SRIS/rumination: reflexión que puede volverse improductiva. BCIS: self-reflectiveness alta con riesgo de duda estéril.'},
      '+2':{nivel:'Pseudo-insight / hipermentalización del self',loQueVes:'Narrativa psicológica elaborada, cerrada y convincente, pero rígida, no verificable o desconectada de afecto/conducta. Parece insight, no actualiza.',loQueDice:'"Sé exactamente por qué soy así." "Todo se explica por X." "No hay otra posibilidad." "Ya entendí mi mente completamente."',contra:'El clínico siente que la explicación está blindada: mucha coherencia aparente, poca apertura y poco cambio.',clasica:'RFQ: certeza excesiva sobre estados mentales. CAMSQ: hipercerteza. BCIS: self-certainty alta con self-reflectiveness pobre. Hypermentalizing/pseudo-mentalizing.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['RFQ / CAMSQ','Incertidumbre extrema','Baja lectura propia','Certeza flexible','Certeza alta / análisis excesivo','Hipercerteza'],
        ['MAS-A','Self-reflectivity fragmentaria','Self-reflectivity concreta','Self-reflectivity integrada','Metacognición sobreelaborada','Narrativa rígida no actualiza'],
        ['BCIS','Self-reflectiveness baja','Self-reflectiveness parcial','Reflectiveness > certainty','Reflectiveness rumiativa','Self-certainty rígida'],
        ['Clínica','Alexitimia/opacidad','Concreción afectiva','Mentalización calibrada','Intelectualización','Pseudo-insight / pseudo-mentalizing']
      ]
    },
    guide:[
      '¿Puede identificar qué siente en este momento?',
      '¿Qué cree que quería, necesitaba o temía cuando actuó así?',
      '¿Puede estar equivocado sobre esa explicación de sí mismo?',
      '¿Entenderlo le ayuda a regularse o sólo le da más vueltas?',
      'Separador: si el problema es no saber quién es o actuar un personaje, puntúe F7 self-integración.'
    ],
    specifiers:[
      {id:'auto_ment_neg',type:'radio',label:'Polo −',options:['[opacidad emocional]','[opacidad motivacional]','[concreto/corporal]','[reactivo sin motivo]'],showWhen:'<0'},
      {id:'auto_ment_pos',type:'radio',label:'Polo +',options:['[intelectualización]','[rumiación psicológica]','[jerga diagnóstica]','[pseudo-insight cerrado]'],showWhen:'>0'}
    ]
  },
  {
    id:'F7.self-integracion', code:'F7', title:'Integración / presentación del self', type:'bipolar',
    scores:{'-2':'Vacío / difusión / irrealidad','-1':'Self inestable / fragmentado','0':'Self integrado flexible','+1':'Masking / sobrecontrol social','+2':'Personaje rígido / falso self dominante'},
    instruction:'Evalúe continuidad, autenticidad y presentación del self a través de contextos. No puntúa qué tan bien explica sus emociones; eso va en F7 auto-mentalización.',
    details:{
      '-2':{nivel:'Vacío / difusión / irrealidad',loQueVes:'Colapso de continuidad o autenticidad: vacío, irrealidad, discontinuidad marcada, fusión con emoción o vínculo. Puede no sostener una representación estable de sí.',loQueDice:'"No sé quién soy." "No soy real." "Estoy vacío." "Si no estoy con alguien, no existo." "Soy sólo lo que siento ahora."',contra:'El clínico siente urgencia de anclar. Cuidado: irrealidad del self no equivale a psicosis si testing está preservado.',clasica:'LPFS/AMPD: identidad severamente alterada. AIDA/SCCS: difusión o baja claridad del self. Disociación/despersonalización si domina irrealidad.'},
      '-1':{nivel:'Self inestable / fragmentado por contexto',loQueVes:'Valores, gustos, metas, estilo o presentación cambian mucho según vínculo/situación. Hay continuidad parcial, pero el self depende de validación o contexto.',loQueDice:'"Cambio según con quién estoy." "No sé qué quiero si nadie me guía." "Me pierdo en las relaciones." "A veces soy otra persona."',contra:'El clínico percibe fragilidad identitaria detrás de síntomas afectivos o interpersonales.',clasica:'LPFS/STiP: identity/self-direction alterados. SCCS baja. AIDA: difusión identitaria.'},
      '0':{nivel:'Self integrado flexible',loQueVes:'Continuidad autobiográfica y afectiva suficiente. Puede cambiar de rol sin perder autenticidad. Tolera duda y adaptación sin colapso.',loQueDice:'"Sé quién soy en general, aunque a veces dude." "Puedo adaptarme sin dejar de sentirme yo." "Tengo partes distintas, pero siguen siendo mías."',contra:'Entrevista fluida: el self no se desorganiza ni necesita performar constantemente.',clasica:'LPFS: identidad/self-direction preservadas; claridad del self suficiente.'},
      '+1':{nivel:'Masking / sobrecontrol social',loQueVes:'Monitorea cómo debe parecer. Usa guiones sociales, corrige expresión, oculta necesidades sensoriales/emocionales o inhibe espontaneidad. Hay costo regulatorio.',loQueDice:'"Actúo normal." "Copio cómo se supone que debo responder." "Ensayo lo que digo." "Después de socializar quedo agotado."',contra:'El clínico percibe competencia social costosa, demasiado cuidada o poco espontánea.',clasica:'CAT-Q: compensation/masking/assimilation. Camouflaging autista; sobrecontrol social; fawn/appeasement si trauma.'},
      '+2':{nivel:'Personaje rígido / falso self dominante',loQueVes:'La presentación sustituye al self. El rol se come a la persona: no puede bajar la máscara, se desconecta del deseo propio o vive desde un personaje social.',loQueDice:'"No sé qué quiero si dejo de actuar." "Tengo una versión para cada contexto." "Mi vida es mantener el personaje." "No puedo apagarlo."',contra:'El clínico siente un self muy competente pero poco habitado; puede aparecer agotamiento o alienación.',clasica:'Camouflaging severo/burnout; sobrecontrol crónico; falso self/personaje social dominante.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['LPFS / STiP-5.1','Identity impairment grave','Identity/self-direction alterados','Integrado','Sobrecontrol de presentación','Rol rígido dominante'],
        ['SCCS / AIDA','Claridad muy baja / difusión','Claridad baja / fragmentación','Claridad suficiente','Autenticidad costosa','Falso self dominante'],
        ['CAT-Q','—','—','—','Compensation / masking / assimilation','Camouflaging severo + burnout'],
        ['RDoC','Self Knowledge + Agency desintegrados','Self Knowledge vulnerable','Self Knowledge flexible','Social Communication compensatoria','Cognitive Control sobre self-presentation']
      ]
    },
    guide:[
      'Cuando no está reaccionando a otros, ¿quién siente que es?',
      '¿Su sentido de sí cambia según la relación o el contexto?',
      '¿Se siente vacío, irreal, fragmentado o sin continuidad?',
      '¿Siente que actúa o enmascara para parecer normal? ¿Qué costo tiene?',
      'Separador: si puede explicar mucho su mundo interno pero vive desde un personaje, puntúe aquí el personaje y en auto-mentalización el estilo explicativo.'
    ],
    specifiers:[
      {id:'self_polo_neg',type:'radio',label:'Polo −',options:['[vacío]','[irreal]','[fragmentado]','[dependiente del vínculo]','[disociativo]'],showWhen:'<0'},
      {id:'self_polo_pos',type:'radio',label:'Polo +',options:['[masking TEA]','[sobrecontrol]','[fawn/appeasement]','[personaje social]','[falso self]'],showWhen:'>0'},
      {id:'self_costo',type:'checkbox',label:'Burnout / costo regulatorio por sostener presentación',showWhen:'>0'}
    ]
  },
  {
    id:'F7.mentalización-otro', code:'F7', title:'Mentalización del otro', type:'bipolar',
    scores:{'-2':'Opacidad total','-1':'Lectura parcial / literal','0':'Calibrado','+1':'Sobre-lectura leve','+2':'Hypermentalizing'},
    details:{
      '-2':{nivel:'Opacidad total',loQueVes:'El otro es inaccesible mentalmente. No infiere qué piensa/siente/quiere.',loQueDice:'No puede describir estados mentales de otros.',contra:'',clasica:'AMDP: 92 (aislamiento social). ICD-11: MB23.Q (retraimiento social). Fish: Aplanamiento afectivo, Embotamiento (componente social). HiTOP: Distanciamiento social.'},
      '-1':{nivel:'Lectura parcial / literal',loQueVes:'Infiere emociones básicas pero no intenciones, sarcasmo, faux pas. Literal, concreto.',loQueDice:'Interpreta todo de manera literal.',contra:'',clasica:'AMDP: 92 leve.'},
      '0':{nivel:'Calibrado',loQueVes:'Infiere estados mentales del otro con precisión proporcional a la evidencia social.',loQueDice:'Describe motivaciones de otros con matiz y proporción.',contra:'',clasica:''},
      '+1':{nivel:'Sobre-lectura leve',loQueVes:'Tiende a atribuir intenciones/emociones al otro más allá de lo observable. Suspicacia, hiperatribución.',loQueDice:'"Yo sé lo que realmente quería." Interpreta más allá de señales.',contra:'',clasica:'AMDP: 27 (suspicacia). ICD-11: MB26.9 (suspicacia). HiTOP: Mistrust, Suspicacia.'},
      '+2':{nivel:'Hypermentalizing',loQueVes:'Certeza sobre lo que el otro piensa/siente sin evidencia. Sobreatribuye motivos complejos.',loQueDice:'"Sé exactamente por qué hizo eso." Inventa lectura con total confianza.',contra:'',clasica:'AMDP: 27 grave, 39-41 (delirios referencia, persecución, celos). ICD-11: MB26.7 (ideación paranoide), MB26.8 (referencia). Fish: Delirio, Capgras, Fregoli, Othello.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','92 (aislamiento social)','92 leve','—','27 (suspicacia)','27 grave, 39-41 (delirios referencia, persecución, celos)'],
        ['ICD-11','MB23.Q (retraimiento social)','MB23.Q leve','—','MB26.9 (suspicacia)','MB26.7 (paranoia), MB26.8 (referencia)'],
        ['Fish (2019)','Aplanamiento afectivo (social)','—','—','—','Delirio, Capgras, Fregoli, Othello, Clérambault'],
        ['HiTOP','Distanciamiento social','—','—','Mistrust, Suspicacia','Suspicacia, Hipervigilancia']
      ]
    },
    guide:['¿Entiende lo que otros sienten?','¿Siente que otros tienen intenciones ocultas?','¿Le cuesta saber si alguien está siendo sarcástico o en serio?']
  },
  {
    id:'E.regulación', code:'E', title:'Regulación emocional / control afectivo', type:'bipolar',
    scores:{'-2':'Desborde / mis-regulación franca','-1':'Regulación frágil / tardía','0':'Regulación flexible','+1':'Sobrecontrol costoso','+2':'Sobrecontrol rígido / colapso posible'},
    instruction:'Evalúe la estrategia de regulación cuando aparece emoción intensa. El polo negativo es desborde o estrategia insuficiente; el polo positivo es supresión rígida/sobrecontrol, incluyendo riesgo de colapso cuando el control ya no se sostiene.',
    details:{
      '-2':{nivel:'Desborde / mis-regulación franca',loQueVes:'La emoción inunda y dirige la conducta. Transición rápida 0→100, labilidad desproporcionada, impulsos o expresión afectiva que no logra modular ni redirigir.',loQueDice:'"Exploto y no puedo parar." "Me gana." "Paso de 0 a 100." "Cuando me agarra, hago cosas que después lamento."',contra:'Alarma; urgencia de contener, pausar o asegurar el encuadre.',clasica:'AMDP: labilidad/incontinencia afectiva. DSM-5: TLP crit.6, DMDD, manía según contexto. RDoC: control cognitivo insuficiente sobre valencia/arousal. HiTOP/Forbes: desinhibición, afecto negativo externalizado.'},
      '-1':{nivel:'Regulación frágil / tardía',loQueVes:'Hay estrategia regulatoria, pero llega tarde, exige demasiado esfuerzo o queda incompleta. Se desborda bajo carga moderada y suele requerir apoyo externo.',loQueDice:'"Me cuesta calmarme." "Lo logro, pero me agota." "Después reacciono." "Necesito que alguien me saque de ahí."',contra:'Sensación de fragilidad: el clínico nota que la regulación depende mucho del contexto.',clasica:'Labilidad leve, regulación emocional frágil, baja tolerancia a carga afectiva.'},
      '0':{nivel:'Regulación flexible',loQueVes:'Siente, nombra, modula, expresa o posterga según contexto. Cambia de estrategia: pausa, pide ayuda, habla, se retira, reevalúa o actúa cuando corresponde.',loQueDice:'"Me afectó, hice X y bajó." "Me molestó y lo hablé." "Necesité tiempo antes de responder." "Pude elegir qué hacer."',contra:'Entrevista fluida; la emoción circula sin inundar ni congelarse.',clasica:'Repertorio regulatorio flexible; selección de estrategia sensible al contexto.'},
      '+1':{nivel:'Sobrecontrol costoso',loQueVes:'Controla de más. Se muestra demasiado compuesto para el contenido, inhibe expresión, ensaya respuestas o corta el afecto. Todavía puede acceder a emoción si hay seguridad.',loQueDice:'"Prefiero no sentir eso." "Lo manejo solo." "No quiero perder el control." "Me lo guardo y sigo funcionando."',contra:'Distancia, formalidad o frialdad con sensación de costo interno.',clasica:'Supresión expresiva, anankastia leve, overcontrol incipiente, posible masking/sobrecontrol social si cruza F7 self.'},
      '+2':{nivel:'Sobrecontrol rígido / colapso posible',loQueVes:'Supresión crónica y rígida. Afecto constreñido o inaccesible ante material que lo justifica. Puede sostenerse como control perfecto hasta quebrarse en desborde, shutdown o conducta impulsiva.',loQueDice:'"No siento nada." "Sentir no sirve." "Si me permito sentir, me desarmo." "Aguanto hasta que exploto/desaparezco."',contra:'Inquietud: el clínico siente que hay afecto encapsulado, posible alexitimia/disociación u overcontrol con riesgo de quiebre.',clasica:'RO-DBT: overcontrol maladaptativo. AMDP/Fish: rigidez afectiva/afecto constreñido. ICD-11: anankastia/detachment si rasgo. DSM-5: OCPD, anorexia restrictiva según contexto.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','68 labilidad, 67 incontinencia','68 leve','—','afecto inhibido','afecto rígido/constreñido'],
        ['ICD-11','inestabilidad emocional','regulación frágil','—','anankastia/detachment leve','anankastia/detachment rígido'],
        ['DSM-5','TLP crit.6, DMDD, manía','—','—','OCPD traits / supresión','OCPD, anorexia restrictiva si aplica'],
        ['RDoC','Cognitive Control ↓ sobre arousal/valencia','control tardío','control flexible','Cognitive Control ↑ costoso','Cognitive Control rígido + collapse risk'],
        ['RO-DBT / Gross','desborde / modulación insuficiente','estrategia tardía','selección flexible','supresión expresiva costosa','overcontrol maladaptativo'],
        ['HiTOP / Forbes','Afecto neg. externalizado, desinhibición','labilidad','—','Constraint / overcontrol','overcontrol + desapego/malestar']
      ]
    },
    guide:[
      'Cuando una emoción fuerte aparece, ¿la expresa, la modula, la corta, la guarda o se desconecta?',
      '¿Le dicen que es muy explosivo/reactivo, o más bien demasiado controlado/frío?',
      'La última vez que algo lo afectó mucho, ¿qué hizo para regularse y cuánto tardó en bajar?',
      '¿Puede cambiar de estrategia según la situación o usa siempre la misma?',
      'Si aguanta mucho: ¿qué pasa cuando ya no puede sostener el control?'
    ],
    specifiers:[
      {id:'reg_neg',type:'radio',label:'Polo −',showWhen:'<0',options:['[desborde]','[labilidad]','[impulsividad afectiva]','[estrategia tardía]','[depende de contención externa]']},
      {id:'reg_pos',type:'radio',label:'Polo +',showWhen:'>0',options:['[supresión]','[intelectualización]','[control conductual rígido]','[desconexión/numbing]','[sobrecontrol interpersonal]']},
      {id:'reg_collapse',type:'checkbox',label:'Colapso del overcontrol: +2→−2 ante trigger; registrar disparador y secuencia',showWhen:'>0'},
      {id:'dominio',type:'checkbox',label:'[vital] afecta decisiones, vínculos, salud o seguridad'}
    ]
  },
  {
    id:'G.arousal', code:'G', title:'Arousal / activación fisiológica', type:'bipolar',
    scores:{'-2':'Shutdown / hipoarousal marcado','-1':'Activación baja','0':'Activación proporcional','+1':'Hiperactivación regulable','+2':'Hyperarousal dominante'},
    instruction:'Evalúe nivel de activación fisiológica y alerta corporal durante la entrevista y la última semana. No puntúa conciencia (NC), amenaza/ansiedad (F6), velocidad psicomotora (F2), energía/drive (F3) ni sustancias; sólo marca activación corporal.',
    details:{
      '-2':{nivel:'Shutdown / hipoarousal marcado',loQueVes:'Cuerpo apagado: bajo tono, mirada perdida, voz muy baja, latencia amplia o desconexión corporal. Responde, pero con activación mínima. Conciencia debe estar preservada.',loQueDice:'"Estoy apagado." "Mi cuerpo no responde." Respuestas mínimas o muy lentas.',contra:'El clínico intenta reactivar o anclar. Si hay somnolencia/obnubilación real, puntuar NC en vez de G.',clasica:'RDoC Arousal: extremo hipo. Diferenciar de NC, F2 y G.sueño sin añadir etiología al score.'},
      '-1':{nivel:'Activación baja',loQueVes:'Alerta corporal baja: cansancio, baja energía autonómica, monotonía o latencia ocasional. Responde a estímulo directo y se sostiene con estructura.',loQueDice:'"Estoy cansado." "Estoy lento." "Me cuesta activarme."',contra:'El clínico nota baja activación, pero la entrevista avanza.',clasica:'Hipoarousal leve. El score no decide causa.'},
      '0':{nivel:'Activación proporcional',loQueVes:'Nivel de alerta y activación corporal adecuado al contexto. Puede activarse o calmarse de forma flexible.',loQueDice:'Sin queja relevante de apagamiento o aceleración corporal.',contra:'Timing corporal cómodo.',clasica:''},
      '+1':{nivel:'Hiperactivación regulable',loQueVes:'Alerta corporal aumentada: tensión muscular, inquietud, sudoración leve, sobresalto, escaneo o aceleración, pero baja con consigna o pausa.',loQueDice:'"Estoy acelerado." "No puedo relajarme del todo." "Estoy con el cuerpo prendido."',contra:'El clínico siente activación, pero puede modularla con encuadre.',clasica:'Hyperarousal leve. G sólo puntúa activación.'},
      '+2':{nivel:'Hyperarousal dominante',loQueVes:'Activación intensa y sostenida: no se calma, sobresalto marcado, tensión autonómica, respiración/ritmo elevados, escaneo continuo o sobreestimulación que interfiere la entrevista.',loQueDice:'"No puedo bajar." "Mi cuerpo no para." "Estoy en alerta todo el tiempo."',contra:'El clínico baja estímulos, reduce demandas y evalúa seguridad si corresponde.',clasica:'RDoC Arousal extremo hiper. Diferenciar de F2, F3, F6 y NC sin convertirlos en especificadores.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['RDoC','Arousal hipo extremo','Arousal bajo','—','Arousal alto regulable','Arousal hiper dominante'],
        ['Separadores','NC si conciencia alterada','F2 si lentitud motora','—','F6 si amenaza subjetiva','F2 si agitación motora'],
        ['Clave rater','cuerpo apagado','activación baja','proporcional','activación alta regulable','activación alta dominante']
      ]
    },
    guide:[
      'Observe activación corporal: alerta, tensión muscular, respiración, sudoración, sobresalto, escaneo y capacidad de calmarse.',
      'Distinción crítica: G.arousal −2 = conciencia preservada con cuerpo apagado; NC alterada = problema de conciencia.',
      'Si está acelerado, puntúe aquí sólo el cuerpo prendido; pensamiento rápido, amenaza, drive o motor van en sus items.',
      'Si está apagado, puntúe aquí sólo baja activación corporal; conciencia, sueño y velocidad motora van en sus items.'
    ],
    specifiers:[
      {id:'arousal_temp',type:'radio',label:'Temporal',options:['[alternante]','[sostenido]','[reactivo]'],showWhen:'!=0'}
    ]
  },
  {
    id:'G.coherencia', code:'G', title:'Coherencia global', type:'bipolar',
    scores:{'-2':'Desorganización global','-1':'Coherencia frágil','0':'Integración global','+1':'Sobreorganización rígida','+2':'Sistema cerrado / ritualizado'},
    details:{
      '-2':{nivel:'Desorganización global',loQueVes:'El output pierde estructura compartible: pensamiento, conducta o afecto no se integran en una escena clínica comprensible. No se puede seguir el hilo, anticipar la conducta o conectar afecto con contenido/contexto.',loQueDice:'Discurso incoherente, descarrilado, neologismos, respuestas sin relación o conducta claramente desorganizada.',contra:'No usar como "rareza general" ni como severidad global. Puntuar aquí sólo si falla la integración entre canales de salida mental-conductual.',clasica:'AMDP: 24 (incoherencia), 25 (bloqueo discursivo), ZP1 (neologismos). ICD-11: MB23.H (incoherent speech), MB23.6 (disorganized behaviour). DSM-5: A.3 y A.4. Fish: Esquizofasia, Descarrilamiento.'},
      '-1':{nivel:'Coherencia frágil',loQueVes:'Hay saltos, incongruencias, tangencialidad, conducta algo inapropiada o afecto parcialmente desacoplado, pero el entrevistador puede reconstruir el hilo con estructura externa.',loQueDice:'Pierde el hilo, se va por ramas o muestra incongruencias parciales, pero vuelve con ayuda.',contra:'No confundir con estilo narrativo detallado, ansiedad o baja escolaridad si la integración global se mantiene.',clasica:'AMDP: 19 (perseveración), 26 (circunstancialidad). ICD-11: MB21.9 (perseveración). Fish: Circunstancialidad, Vorbeireden.'},
      '0':{nivel:'Integración global',loQueVes:'Pensamiento, afecto y conducta son suficientemente congruentes entre sí y con el contexto. El paciente puede tener síntomas, pero sus salidas se organizan en una escena clínica comprensible.',loQueDice:'Discurso comprensible, conducta dirigida a metas y afecto proporcional o explicable por el contenido/contexto.',contra:'No exige ausencia de síntomas. Una delusión, ansiedad intensa o tristeza pueden coexistir con G=0 si el output global sigue integrado.',clasica:''},
      '+1':{nivel:'Sobreorganización rígida',loQueVes:'La salida está demasiado ordenada, controlada, ritualizada o circunstancial. Hay integración, pero con baja flexibilidad contextual: cuesta resumir, desviarse del orden o tolerar ambigüedad.',loQueDice:'Respuestas excesivamente detalladas, guionadas o concretas. "Necesito decirlo en orden." "Espere, falta una parte."',contra:'Puede parecer "muy coherente"; el problema es rigidez, no desorganización. Diferenciar de F5: aquí afecta la gestalt de pensamiento-conducta-afecto, no sólo el cambio de set.',clasica:'AMDP: 26 (circunstancialidad), 18 (restringido). Fish: Perseveración, Concretismo.'},
      '+2':{nivel:'Sistema cerrado / ritualizado',loQueVes:'Una lógica interna, regla, guion o ritual domina pensamiento, conducta y afecto. No responde a redirección contextual: todo se fuerza a encajar dentro del sistema.',loQueDice:'Respuestas como script, rituales conductuales, necesidad de completar secuencias o reglas antes de poder participar. No acepta cambio de marco.',contra:'No es automáticamente TOC, TEA o delirio. Puntuar la pérdida de flexibilidad global del sistema de salida, no el diagnóstico ni el contenido.',clasica:'AMDP: 19 (perseveración), 18 (restringido). ICD-11: MB21.9 (perseveración severa).'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','24 (incoherencia), 25 (bloqueo), ZP1 (neologismos)','19 (perseveración), 26 (circunstancialidad)','—','26, 18 (restringido)','19 (perseveración), 18'],
        ['ICD-11','MB23.H (incoherent speech), MB23.6','MB21.9 (perseveración)','—','MB25.00 (circunstancialidad)','MB21.9 severa'],
        ['DSM-5','A.3 (disorganized speech), A.4 (behavior)','—','—','—','—'],
        ['Fish (2019)','Esquizofasia, Descarrilamiento, TFP','Circunstancialidad, Vorbeireden','—','Perseveración, Concretismo','Perseveración'],
        ['HiTOP','Thought Disorder: Disorganization','—','—','—','Detachment / Restricted']
      ]
    },
    guide:['Mida integración global de salida mental-conductual: pensamiento, afecto y conducta.','¿Se puede seguir el hilo y entender la escena clínica como un todo?','¿El afecto encaja con el contenido y el contexto?','¿La conducta se dirige a metas compartibles o se fragmenta/ritualiza?','No puntúe rareza general, severidad diagnóstica ni contenido psicótico: puntúe integración vs fragmentación/rigidez.'],
    specifiers:[
      {id:'canal_P',type:'checkbox',label:'[P] Pensamiento desorganizado/rígido'},
      {id:'canal_C',type:'checkbox',label:'[C] Conducta desorganizada/ritualizada'},
      {id:'canal_A',type:'checkbox',label:'[A] Afecto incongruente/restringido'}
    ]
  },
  {
    id:'G.sueno-ritmo', code:'G', title:'Sueño-ritmo', type:'bipolar',
    scores:{'-2':'Hipersomnia / inercia severa','-1':'Hipersomnia / no reparador leve','0':'Sueño regulador','+1':'Insomnio / reducción leve','+2':'Insomnio severo / necesidad reducida marcada'},
    details:{
      '-2':{nivel:'Hipersomnia / inercia severa',loQueVes:'Sueño excesivo, inercia marcada, sueño no reparador severo o fase adelantada con deterioro. Puede dormir >10h, pasar gran parte del día en cama o despertar muy temprano con imposibilidad de recuperar sueño.',loQueDice:'"Duermo todo el día y no descanso." "Me despierto a las 3AM y no puedo volver a dormir." "Las mañanas son lo peor."',contra:'No puntúa simple cansancio: puntúa desregulación sueño-circadiana con impacto. Pensar en melancolía si hay patrón matutino marcado.',clasica:'AMDP: 105 (cansancio), hipersomnia implícita. Forbes: Hipersomnia, dificultad despertar. RDoC: Sleep-Wakefulness + Circadian Rhythms.'},
      '-1':{nivel:'Hipersomnia / no reparador leve',loQueVes:'Duerme más de lo habitual, despierta pesado, presenta fragmentación leve, fase adelantada leve o sueño parcialmente no reparador, con funcionalidad aún parcialmente conservada.',loQueDice:'"Duermo mucho pero no descanso." "Las mañanas me cuestan." "Me siento pesado al despertar."',contra:'Preocupación leve: el sueño ya no está cumpliendo bien su función reparadora o sincronizadora.',clasica:''},
      '0':{nivel:'Sueño regulador',loQueVes:'Cantidad, continuidad, timing y calidad suficientemente restaurativos para su contexto. El sueño ayuda a regular energía, ánimo y funcionamiento diurno.',loQueDice:'"Duermo bien." "Me despierto descansado." Sin queja relevante ni desacople sueño-energía.',contra:'No exige 8 horas exactas: exige sueño proporcional, reparador y sincronizado con la vida del paciente.',clasica:''},
      '+1':{nivel:'Insomnio / reducción leve',loQueVes:'Insomnio leve, despertares, latencia prolongada o reducción leve de sueño. Puede ser insomnio con queja o menor necesidad de sueño todavía no marcada.',loQueDice:'"Me cuesta dormir." "Me despierto varias veces." O "duermo menos y estoy bien".',contra:'Separar insomnio con queja de necesidad reducida sin queja: clínicamente no significan lo mismo.',clasica:'AMDP: 101 (conciliación), 102 (interrumpido), 103 (acortado). Forbes: Insomnio.'},
      '+2':{nivel:'Insomnio severo / necesidad reducida marcada',loQueVes:'Insomnio severo, <4h totales, fase retrasada extrema, ritmo muy irregular o necesidad de sueño reducida marcada sin fatiga proporcional.',loQueDice:'"No puedo dormir nada." O "no necesito dormir, duermo 3 horas y estoy perfecto".',contra:'Alarma si hay necesidad reducida sin queja: puede ser firma maniforme. Cruzar con F6 ánimo-meta, drive y velocidad.',clasica:'AMDP: 104 (despertar precoz) + 103 (acortado sin queja). Forbes: sueño acortado, irregularidad.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP','105 (cansancio), hipersomnia','—','—','101 (conciliación), 102 (interrumpido), 103 (acortado)','104 (despertar precoz) + 103 sin queja'],
        ['Forbes','Hipersomnia, dificultad despertar','—','—','Insomnio','Irregularidad, sueño acortado'],
        ['RDoC','Sleep-Wakefulness + Circadian Rhythms','—','—','—','—']
      ]
    },
    guide:['Evalúe regulación sueño-circadiana: cantidad, continuidad, timing, calidad reparadora y energía diurna.','¿Cuántas horas duerme? ¿Es suficiente para usted?','¿A qué hora se duerme y a qué hora se despierta?','¿Se despierta descansado o con inercia?','¿Se despierta varias veces durante la noche?','¿Ha reducido sus horas de sueño sin sentirse cansado?','¿Hay pesadillas, fase adelantada/retrasada o ritmo irregular?'],
    specifiers:[
      {id:'sueno_cant',type:'radio',label:'Cantidad',options:['[hipersomnia]','[insomnio-con-queja]','[reducida-sin-queja]','[fragmentado]'],showWhen:'!=0'},
      {id:'sueno_insomnio_inicio',type:'checkbox',label:'Insomnio de inicio / conciliación',showWhen:'insomnio-con-queja'},
      {id:'sueno_insomnio_mantenimiento',type:'checkbox',label:'Insomnio de mantenimiento / despertares',showWhen:'insomnio-con-queja'},
      {id:'sueno_insomnio_despertar_precoz',type:'checkbox',label:'Despertar precoz / terminal',showWhen:'insomnio-con-queja'},
      {id:'sueno_timing',type:'radio',label:'Timing',options:['[adelantado]','[retrasado]','[irregular]'],showWhen:'!=0'},
      {id:'sueno_calidad',type:'radio',label:'Calidad',options:['[no-reparador]','[pesadillas]'],showWhen:'!=0'},
      {id:'sueno_diurno',type:'radio',label:'Variación diurna',options:['[matutino]','[vespertino]'],showWhen:'!=0'},
      {id:'sueno_queja',type:'radio',label:'Queja',options:['[con-queja]','[sin-queja]'],showWhen:'!=0'}
    ]
  },
  {
    id:'G.interocepcion', code:'G', title:'Interocepción', type:'bipolar',
    scores:{'-2':'Desconexión interoceptiva','-1':'Señal corporal atenuada','0':'Calibración interoceptiva','+1':'Amplificación interoceptiva','+2':'Captura somática'},
    details:{
      '-2':{nivel:'Desconexión interoceptiva',loQueVes:'No detecta señales corporales relevantes o las detecta demasiado tarde: hambre, sed, dolor, fatiga, sueño, tensión o activación autonómica. Puede haber negligencia corporal, desconexión disociativa o alexisomia.',loQueDice:'"No siento nada en el cuerpo." "Se me olvida comer/tomar agua." "No noto cansancio hasta que colapso."',contra:'No puntuar ausencia de queja como normal si hay señales corporales ignoradas, necesidades básicas no registradas o daño por no detectar el cuerpo.',clasica:'Reischies: sentimientos vitales/alexisomia. Garfinkel: baja precisión o baja conciencia interoceptiva. MAIA: baja noticing/body listening/body trust.'},
      '-1':{nivel:'Señal corporal atenuada',loQueVes:'Detecta señales internas con poca precisión, tarde o sólo cuando son intensas. Necesita claves externas para reconocer hambre, dolor, tensión, fatiga o activación.',loQueDice:'"Me doy cuenta tarde." "No sé si es hambre, ansiedad o cansancio." "Necesito que otros me digan que pare/descanse."',contra:'Puede parecer depresión, alexitimia, TDAH o disociación; puntuar aquí sólo la lectura corporal atenuada.',clasica:'AMDP: 62 (sentimientos vitales). Reischies: perturbación de sentimientos vitales. MAIA: baja noticing y baja atención regulada al cuerpo.'},
      '0':{nivel:'Calibración interoceptiva',loQueVes:'Detecta señales corporales, las interpreta proporcionalmente y actúa de forma flexible. Puede distinguir sensación, emoción, interpretación y posible enfermedad.',loQueDice:'"Siento palpitaciones, probablemente ansiedad, pero si cambia lo reviso." "Tengo hambre/cansancio/dolor y sé qué hacer." "No estoy seguro; voy a observar."',contra:'No significa ausencia de síntomas. Una señal médica real, dolor o ansiedad pueden ser G=0 si la lectura y la conducta son proporcionales.',clasica:'Interocepción calibrada: sensing + interpreting + integrating internal signals (Khalsa 2018). Diferencia precisión, sensibility y awareness (Garfinkel).'},
      '+1':{nivel:'Amplificación interoceptiva',loQueVes:'Señales normales, ambiguas o leves se sienten demasiado intensas, alarmantes o clínicamente relevantes. Hay hipervigilancia corporal, pero todavía puede dudar, corregir o modular.',loQueDice:'"Noto cada cambio en mi cuerpo." "Me asusto, pero sé que puede ser ansiedad." "Lo chequeo, aunque después se me pasa."',contra:'No puntuar intensidad del síntoma médico; puntuar amplificación de la señal o de su saliencia. Si el significado es peligro, cruzar F6 amenaza.',clasica:'Somatosensory amplification, bodily distress/somatic preoccupation. MAIA distingue atención corporal adaptativa de preocupación/catastrofización.'},
      '+2':{nivel:'Captura somática',loQueVes:'La señal corporal domina atención, conducta o creencia. La persona queda gobernada por monitoreo corporal, chequeo, evitación, demanda médica o interpretación rígida/catastrófica.',loQueDice:'"No puedo dejar de revisar mi cuerpo." "Esto prueba que algo grave pasa." "Mi cuerpo no me deja vivir."',contra:'Si la interpretación es fija o incorregible, puntuar además F4 contenido/F7 testing. Interocepción marca que la puerta de entrada del fenómeno es corporal.',clasica:'Pánico somático, somatic symptom/illness anxiety, bodily distress, conversión/formicación/Ekbom si aplica. ICD-11: pánico/síntomas corporales según contexto.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','—','62 (sentimientos vitales), 121 (visión borrosa)','—','108-130 (27 items somáticos)','113, 122, 131, ZP1'],
        ['ICD-11 MB','—','—','—','—','MB23.H (ataque pánico)'],
        ['HiTOP-SR','—','—','—','Bodily Distress, Somatic Preoccupation','Conversion Symptoms'],
        ['Forbes-2024','—','—','—','Aches/pains, Bloating, GI distress, Headaches, Hot flushes','Tremors, Abnormal pupil size'],
        ['SCIP','—','—','—','GAD3, S25-26, OCD7','PAN5 (16 autonomic symptoms)'],
        ['Reischies-2025','ch11 (alexitimia)','ch11 (perturbación vital), ch11 (somatización leve)','—','ch11 (somatización), ch11 (quejumbroso)','—'],
        ['Fish (2019)','—','—','—','—','Ansiedad, Pánico, Briquet, Ekbom, Formicación'],
        ['Vallejo (2025)','Alexitimia','—','—','—','Ansiedad, Histeria'],
        ['Eguíluz (2005)','—','—','—','—','Ansiedad'],
        ['RDoC','Interoception (hypo)','—','—','—','Interoception (hyper), Arousal/Interoceptive Sensory Processing']
      ]
    },
    guide:['Evalúa calibración cuerpo-señal: detección, interpretación y conducta proporcional ante señales internas. No puntúa presencia ni gravedad médica del síntoma.','¿Nota hambre, sed, dolor, cansancio, tensión o palpitaciones a tiempo?','Cuando nota una señal corporal, ¿puede distinguir sensación, emoción, interpretación y enfermedad posible?','¿La señal corporal guía una conducta proporcional o captura atención, chequeo, evitación o demanda médica?','Diferenciales: peligro = F6 amenaza; creencia corporal = F4 contenido; incorregibilidad = F7 testing.'],
    specifiers:[
      {id:'int_A',type:'checkbox',label:'[A] Autonómico observable'},
      {id:'int_S',type:'checkbox',label:'[S] Somático subjetivo'},
      {id:'int_D',type:'checkbox',label:'[D] Discrepancia (A≠S)'},
      {id:'int_contenido',type:'radio',label:'Contenido somático',options:['[GI] gastro','[CV] cardio','[MS] músculo','[TA] termoreg','[NE] neuro'],showWhen:'>0'},
      {id:'int_mec',type:'radio',label:'Mecanismo',options:['[detección baja]','[amplificación]','[interpretación top-down]','[señal bottom-up real]','[mixto]'],showWhen:'!=0'}
    ]
  },
  {
    id:'G.apetito', code:'G', title:'Apetito-ingesta / hambre-saciedad', type:'bipolar',
    scores:{'-2':'Ingesta marcadamente reducida','-1':'Apetito / ingesta reducida','0':'Hambre-saciedad regulada','+1':'Apetito aumentado / antojos','+2':'Pérdida de control / hiperfagia'},
    instruction:'Evalúe cambio de hambre, saciedad, ingesta y peso. No decida etiología desde el score: restricción intencional, enfermedad médica, fármacos, depresión, interocepción y atracón van como especificadores o cruces.',
    details:{
      '-2':{nivel:'Ingesta marcadamente reducida',loQueVes:'Come muy poco, salta múltiples comidas, pierde peso clínicamente relevante o hay riesgo de deshidratación/malnutrición. Puede no registrar hambre o no poder comer.',loQueDice:'"No tengo hambre." "Como por obligación." "Se me olvida comer." "No puedo con la comida."',contra:'Alarma clínica: verificar peso, hidratación, causa médica/fármacos y seguridad.',clasica:'DSM-5-TR: cambio marcado de apetito/peso; melancolía si contexto. Diferenciar restricción intencional, caquexia médica e interocepción baja.'},
      '-1':{nivel:'Apetito / ingesta reducida',loQueVes:'Come menos de lo habitual, porciones reducidas, menor interés por comida o baja de peso leve. Funciona, pero el patrón cambió.',loQueDice:'"Como menos." "Me lleno rápido." "La comida no me provoca." "He bajado algo de peso."',contra:'Preocupación leve; pedir duración, peso y relación con ánimo, cuerpo o enfermedad.',clasica:'Disminución de apetito/ingesta transdiagnóstica.'},
      '0':{nivel:'Hambre-saciedad regulada',loQueVes:'Hambre, saciedad, cantidad y timing de comida proporcionales a actividad y contexto. Peso estable o cambio explicado.',loQueDice:'Sin queja relevante de apetito, control o peso.',contra:'No exige dieta perfecta: exige regulación suficiente.',clasica:''},
      '+1':{nivel:'Apetito aumentado / antojos',loQueVes:'Come más de lo habitual, picotea, tiene antojos o usa comida para regular emoción. Puede haber ganancia leve de peso, sin pérdida franca de control.',loQueDice:'"Tengo más hambre." "Se me antojan dulces." "Como por ansiedad/aburrimiento."',contra:'Pedir fármacos, sueño, ánimo, estrés y patrón horario.',clasica:'Aumento de apetito/peso; patrón atípico/estacional o iatrogénico si contexto.'},
      '+2':{nivel:'Pérdida de control / hiperfagia',loQueVes:'Atracones, come sin hambre o sigue comiendo pese a saciedad, ocultamiento, malestar posterior o ganancia rápida de peso. La ingesta domina conducta.',loQueDice:'"No puedo parar." "Como aunque esté lleno." "Como a escondidas." "Pierdo el control."',contra:'Distinguir atracón, fármaco, craving hedónico, ansiedad e interocepción/saciedad alterada.',clasica:'BED/BN si patrón cumple criterios; hiperfagia iatrogénica o atípica según contexto.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['DSM-5-TR','pérdida marcada apetito/peso','disminución apetito','—','aumento apetito/peso','atracón / aumento marcado'],
        ['ICD-11','malnutrición/condición médica si aplica','—','—','—','trastorno por atracón si patrón'],
        ['RDoC','homeostasis/interocepción baja','homeostático bajo','—','reward/craving','reward + control/saciedad'],
        ['Clave rater','cantidad + peso + riesgo','menos que baseline','baseline','más que baseline','pérdida de control']
      ]
    },
    guide:[
      '¿Cómo ha estado su apetito? ¿Come más o menos de lo habitual?',
      '¿Ha cambiado de peso sin proponérselo? ¿Cuánto y en cuánto tiempo?',
      '¿Siente hambre? ¿La comida le sabe/le apetece como antes?',
      'Si come menos: ¿no tiene hambre, no puede comer, o decide restringir?',
      'Si come más: ¿hay antojos, come por emoción, o pierde el control y no puede parar?',
      '¿Toma algún medicamento nuevo (antipsicótico, mirtazapina) que pueda afectar el apetito?'
    ],
    specifiers:[
      {id:'apetito_neg',type:'radio',label:'Contexto polo −',options:['[sin hambre]','[no puede comer]','[restricción intencional]','[médico/inflamatorio]','[iatrogénico]','[interoceptivo] no detecta hambre'],showWhen:'<0'},
      {id:'apetito_pos',type:'radio',label:'Contexto polo +',options:['[antojos]','[emocional]','[atracón] pérdida de control','[iatrogénico]','[hedónico/reward]','[saciedad baja]'],showWhen:'>0'},
      {id:'apetito_ego',type:'radio',label:'Relación con el yo (polo −)',options:['[ego-distónico] lo vive como pérdida','[ego-sintónico] lo valora → cruzar F3.tono/F4 contenido'],showWhen:'<0'},
      {id:'apetito_peso',type:'radio',label:'Cambio de peso',options:['[estable]','[pérdida <5%]','[pérdida ≥5%/mes]','[ganancia <5%]','[ganancia ≥5%/mes]'],showWhen:'!=0'},
      {id:'apetito_fuente',type:'radio',label:'Fuente del dato',options:['Paciente','Informante','Registro/peso medido'],showWhen:'!=0'}
    ]
  },
  {
    id:'P', code:'P', title:'Estado interpersonal', type:'two_axis',
    axes:[
      {id:'P1.dominancia',label:'P1 Control de la interacción',scores:{'-2':'Sumisión inhibida','-1':'Deferencia / complacencia','0':'Agencia recíproca','+1':'Conducción activa regulable','+2':'Dominancia rígida'}},
      {id:'P2.afiliación',label:'P2 Tono afiliativo',scores:{'-2':'Hostilidad / amenaza interpersonal','-1':'Distancia fría','0':'Afiliación proporcional','+1':'Afiliación intensa','+2':'Fusión / afiliación intrusiva'}}
    ],
    instruction:'Evalúe la dinámica interpersonal durante la entrevista. P1 mide quién controla ritmo/agenda/límites; P2 mide tono de acercamiento-distancia. No puntúa rasgo de personalidad aislado ni calidad moral del vínculo.',
    details_p1:{
      '-2':{nivel:'Sumisión inhibida',loQueVes:'No inicia, no opina, no pide aclaración ni defiende necesidades. Cede el control completo de ritmo, agenda y límites.',loQueDice:'"Como usted diga." "No sé, usted dígame." Acuerdo automático incluso ante dudas.',contra:'El clínico siente que decide por el paciente; riesgo de consentimiento superficial.',clasica:'HiTOP/AMPD: submissiveness/dependence si persistente. Diferenciar de respeto cultural o ansiedad situacional.'},
      '-1':{nivel:'Deferencia / complacencia',loQueVes:'Busca aprobación, suaviza desacuerdo, minimiza necesidades o usa sonrisa apaciguadora. Puede expresar preferencia si se le invita.',loQueDice:'"¿Está bien si digo...?" "No quiero molestar." "Lo que usted crea."',contra:'El clínico debe invitar explícitamente a disentir o elegir.',clasica:'Sumisión leve, appeasement/fawn si contexto traumático.'},
      '0':{nivel:'Agencia recíproca',loQueVes:'Turnos equilibrados. Puede responder, preguntar, proponer, aceptar límites y disentir sin romper la alianza.',loQueDice:'Expresa necesidades y acepta el marco con flexibilidad.',contra:'Alianza cooperativa y simétrica dentro del rol clínico.',clasica:''},
      '+1':{nivel:'Conducción activa regulable',loQueVes:'Trae agenda, redirige, interrumpe o propone soluciones, pero puede escuchar y negociar cuando se marca el encuadre.',loQueDice:'"Quiero empezar por..." "Creo que deberíamos..." Acepta input si se le devuelve.',contra:'El clínico ajusta límites sin perder alianza.',clasica:'Dominancia/agenticidad elevada, no patológica si es flexible.'},
      '+2':{nivel:'Dominancia rígida',loQueVes:'Impone marco, ritmo o tema. Descalifica alternativas, no tolera límites o intenta controlar la entrevista.',loQueDice:'"Usted no entiende." "Hágalo así." "No voy a responder eso." Demandas o amenazas veladas.',contra:'El clínico siente presión, irritación o necesidad de proteger el encuadre.',clasica:'HiTOP: dominance/manipulativeness. AMPD: antagonism si patrón; grandiosidad sólo si cruza F6/F4.'}
    },
    details_p2:{
      '-2':{nivel:'Hostilidad / amenaza interpersonal',loQueVes:'Desprecio, suspicacia, ataque verbal/gestual o trato del otro como enemigo. La relación clínica se vuelve defensiva o amenazante.',loQueDice:'Sarcasmo, acusaciones, descalificación directa, amenazas o lectura hostil del encuadre.',contra:'Alianza en riesgo; el clínico siente irritación, temor o necesidad de seguridad.',clasica:'AMDP: agresividad/irritabilidad. HiTOP: hostility/mistrust. Si hay amenaza/daño, puntuar A4/OAS.'},
      '-1':{nivel:'Distancia fría',loQueVes:'Cortés pero desconectado, poco recíproco, indiferente o evitativo. No hay ataque, pero tampoco acercamiento afectivo.',loQueDice:'Respuestas breves, tono plano, poca curiosidad interpersonal.',contra:'Alianza superficial; el clínico siente distancia o bajo contacto.',clasica:'Detachment/interpersonal withdrawal si patrón.'},
      '0':{nivel:'Afiliación proporcional',loQueVes:'Calidez y distancia adecuadas al contexto clínico. Responde a la oferta relacional sin invadir ni rechazar.',loQueDice:'Coopera, agradece o discrepa con tono proporcional.',contra:'Alianza funcional.',clasica:''},
      '+1':{nivel:'Afiliación intensa',loQueVes:'Busca conexión activamente, se autorrevela rápido, pregunta por el clínico o aumenta familiaridad. Todavía respeta límites.',loQueDice:'"Me cae muy bien." "Nunca le conté esto a nadie." Preguntas personales leves.',contra:'Alianza positiva con vigilancia de límites.',clasica:'Sociabilidad elevada, dependencia leve o búsqueda de contención según contexto.'},
      '+2':{nivel:'Fusión / afiliación intrusiva',loQueVes:'No tolera distancia: idealiza, busca relación especial, cruza límites, exige disponibilidad o se angustia ante separación.',loQueDice:'"Usted es el único que me entiende." "No me deje." Contacto físico/invasión o demanda de vínculo especial.',contra:'Alianza pseudopositiva; riesgo de dependencia iatrogénica o ruptura al poner límites.',clasica:'Separation insecurity/dependence si patrón; sociabilidad aumentada si manía; fusión vincular si TLP.'}
    },
    frameworks:{
      headers:['','P1 −2 (sumiso)','P1 +2 (dominante)','P2 −2 (hostil)','P2 +2 (afiliativo excesivo)'],
      rows:[
        ['AMPD / LPFS','sumisión/dependencia','dominancia/manipulación','hostilidad/callosidad','separation insecurity'],
        ['HiTOP','Submissiveness','Dominance / antagonism','Hostility / mistrust','Dependency / social closeness elevada'],
        ['ICD-11','sumisión si rasgo','grandiosidad si contexto','agresión/suspicacia si contexto','sociabilidad aumentada si contexto'],
        ['Rater','control cedido','control impuesto','otro como amenaza','distancia no tolerada']
      ]
    },
    guide:['Observe la dinámica de la entrevista: ¿quién controla ritmo, agenda y límites?','Observe tono afiliativo: ¿rechaza, mantiene distancia, conecta, intensifica o fusiona?','¿Puede aceptar límites sin colapsar, atacar o invadir?','No puntúe cooperación cultural como sumisión ni calidez como fusión si respeta límites.'],
    specifiers:[
      {id:'spin',type:'radio',label:'P3 Estabilidad / spin',options:['Estable','Oscilante','Cambia con límites','Cambia con amenaza','Cambia con validación'],showWhen:'always'}
    ]
  },
  {
    id:'META.enfermedad', code:'META', title:'Meta-evaluación de enfermedad', type:'multitest',
    guide:[
      'Las 3 dims META se evalúan globalmente sobre la condición del paciente, no síntoma-por-síntoma (Marková-Berrios: "insight INTO enfermedad" como concepto relacional).',
      '⚠ Configuración peligrosa: Insight ausente + Egosintónico extremo = riesgo silente (no señaliza, no pide ayuda). Empíricamente: comorbilidad ego-syntonic alarga duration of untreated illness (Girone 2026).',
      'Feeders directos de outcomes Capa 2 (riesgo a sí, riesgo a otros, capacidad para X).'
    ],
    tests:[
      {
        id:'J.juicio', label:'Juicio práctico',
        instruction:'¿Razona consecuencias, alternativas y riesgos de una decisión aquí y ahora? No puntúa si está de acuerdo con el clínico; puntúa la calidad del razonamiento práctico observado o probado.',
        scores:{'0':'Intacto: anticipa consecuencias relevantes, compara opciones y ajusta conducta','-1':'Parcial: identifica algunas consecuencias, pero omite riesgos importantes o razona de forma inconsistente','-2':'Grave: no anticipa consecuencias, toma decisiones peligrosas, impulsivas o desorganizadas pese a riesgos evidentes'},
        circuito:'PFC ventromedial (valoración afectiva) + DLPFC (control cognitivo) + OFC (anticipación consecuencias). Lesiones frontales y trastornos psicóticos comprometen la red.',
        precision:'Feeder principal de Capacidad para X (Capa 2). Refs: Grisso, Appelbaum & Hill-Fotouhi 1997 — MacCAT-T usa esta misma escala 0-2 ordinal (DOI 10.1176/ps.48.11.1415). Etchells 1999 — Aid to Capacity Evaluation (DOI 10.1046/j.1525-1497.1999.00277.x).'
      },
      {
        id:'I.insight', label:'Insight sobre condición',
        instruction:'¿Reconoce que hay un problema clínico? ¿Vincula síntomas actuales con ese problema? ¿Acepta necesidad de ayuda o tratamiento? No puntúa verdad/falsedad de la creencia; puntúa conciencia clínica y disposición a ayuda.',
        scores:{'0':'Pleno: reconoce problema clínico, vincula síntomas y acepta ayuda/tratamiento','-1':'Parcial: reconoce síntomas, malestar o necesidad de ayuda, pero la atribución es incompleta, fluctuante o no integrada','-2':'Ausente: niega problema clínico o atribuye todo a causas externas/no clínicas, sin reconocer necesidad de ayuda'},
        circuito:'Central Midline Structures (CMS): dorsomedial PFC + precuneus + posterior cingulate. Mentalización + metacognición. En esquizofrenia: hipoactivación dmPFC durante self-evaluation (Bedford 2012, DOI 10.1186/1471-244X-12-106).',
        precision:'Feeder de Riesgo a sí (no se cuida) + Capacidad para X (no aprecia su situación). Refs: Birchwood 1994 — Insight Scale 3 factores: awareness, need-for-treatment, attribution (DOI 10.1111/j.1600-0447.1994.tb01487.x). Raffard 2008 — 50-80% de pts esquizofrenia no creen tener trastorno; SUMD-Amador (DOI 10.1016/j.encep.2007.10.008). Marková-Berrios 1992 — insight como continuo relacional (DOI 10.1192/bjp.160.6.850). Rose & Harvey 2024 — anosognosia en EZ: Introspective Accuracy vs Bias (DOI 10.1017/S1092852924002323).'
      },
      {
        id:'E.egodistonia', label:'Egodistonía / egosintonía del estado', scoreKeys:['-2','-1','0','+1','+2'],
        instruction:'¿Cómo vive subjetivamente su estado actual? ¿Le molesta y lo rechaza, o está alineado/identificado con él? Item subjetivo: mide carga vivida y alineación con el yo, independiente de insight, testing y funcionalidad.',
        scores:{
          '-2':'Egodistónico extremo: sufrimiento intenso, rechazo del estado, urgencia de cambio',
          '-1':'Egodistónico: incómodo con su estado, desea mejorar',
          '0':'Ambivalente: mezcla de malestar, beneficio o identificación parcial',
          '+1':'Egosintónico: alineado con su estado, poca demanda de cambio',
          '+2':'Egosintónico extremo: identificado con el estado, sin alarma subjetiva. Si I=ausente → ALARMA de riesgo silente'
        },
        circuito:'Cingulado anterior (saliencia emocional del distrés) + ínsula (interocepción del sufrimiento) + PFC (valoración del problema como tal). En egosintonía con insight bajo, esta red está subactivada — el paciente no genera la señal interna que motiva búsqueda de ayuda.',
        precision:'Cuadrante peligroso operacionalizable: E=+2 + I=-2 → riesgo silente (no señaliza). Girone et al. 2026 — comorbilidad OCPD egosintónica → DUI 9.2 vs 6.1 años en TOC (DOI 10.1016/j.jpsychires.2026.03.029). O\'Connor & Aardema 2003 — egodistonía en TOC vía inferential confusion (DOI 10.2466/pr0.2003.93.1.227). Catapano 2009 — DSM-5 poor-insight TOC predice peor respuesta a SRI (DOI 10.1016/j.pnpbp.2009.12.007). Feeder de Riesgo a sí + Capacidad para X.'
      }
    ]
  },
  {
    id:'FUN.funcionalidad', code:'FUN', title:'PSP — Funcionalidad (Input externo)', type:'multitest',
    guide:[
      '⚠ INPUT EXTERNO — NO es estado observable (Capa 1). NO se infiere desde síntomas. Entra de afuera: información del paciente y/o informantes.',
      'Califica las 4 áreas operacionales del PSP por separado. El score global se calcula como la peor área (Morosini 2000: el principio del PSP es que la severidad mayor en cualquier área determina el rango global).',
      'Funciona como feeder de outcomes Capa 2 (Riesgo, Capacidad para X). Vista derivada futura: 2×2 funcionalidad × egodistonía.',
      'Ref: Morosini PL et al. 2000 (PMID 10782554) — PSP supera a SOFAS en validez y confiabilidad inter-rater.'
    ],
    tests:[
      {
        id:'FUN.psp_utiles', label:'A1 · Actividades socialmente útiles', scoreKeys:['-2','-1','0','+1','+2'],
        instruction:'Trabajo, estudio, voluntariado, tareas del hogar. Puntúe sostenibilidad, flexibilidad y costo: más actividad no siempre es mejor función.',
        scores:{
          '-2':'Abandono funcional grave: no sostiene trabajo, estudio, voluntariado o tareas básicas. Bajas prolongadas, abandono completo o dependencia marcada de ayuda externa.',
          '-1':'Reducción funcional: baja rendimiento, ausencias, procrastinación, pérdida parcial de rol o dificultad para sostener la carga habitual. Mantiene actividad parcial.',
          '0':'Función proporcional: actividad útil acorde a contexto, energía y responsabilidades; sostenible, flexible y sin costo clínico significativo.',
          '+1':'Sobreinversión funcional: exceso de trabajo/estudio/tareas con costo leve en sueño, vínculos, salud o flexibilidad. Productivo, pero le cuesta parar.',
          '+2':'Hiperfunción patológica: actividad útil domina identidad y conducta; workaholism/overcontrol con deterioro en salud, vínculos, sueño o juicio. No puede detenerse sin angustia o desorganización.'
        },
        specifiers:[
          {id:'a1_note',type:'text',label:'Detalle',placeholder:'Ej: bajas 5 días último mes / 14h trabajo diario'},
          {id:'source',type:'radio',label:'Fuente del dato (válida para todas las áreas)',options:['Paciente','Informante','Observación clínica','Combinada']},
          {id:'psp_total',type:'text',label:'PSP 0-100 (opcional)',placeholder:'Ej: 65'}
        ]
      },
      {
        id:'FUN.psp_relaciones', label:'A2 · Relaciones personales y sociales', scoreKeys:['-2','-1','0','+1','+2'],
        instruction:'Familia, amigos, pareja, comunidad. Puntúe calidad, reciprocidad, autonomía y costo del vínculo: más contacto no siempre es mejor relación.',
        scores:{
          '-2':'Aislamiento / ruptura grave: sin vínculos significativos, pérdida marcada de red, conflictos severos sostenidos o relaciones dominadas por daño, coerción o soledad extrema.',
          '-1':'Retracción / vínculo frágil: evita contacto, reduce participación social, aumenta conflicto o distancia. Conserva algunos vínculos funcionales, pero con menor reciprocidad o apoyo.',
          '0':'Vínculo proporcional: relaciones suficientemente recíprocas, flexibles y sostenibles. Puede acercarse, tomar distancia, pedir apoyo y respetar límites.',
          '+1':'Sobreinvolucramiento relacional: contacto excesivo, búsqueda alta de validación, dificultad para tolerar distancia o límites, con costo leve para el self o el otro.',
          '+2':'Fusión / dependencia patológica: no tolera separación o soledad; demandas constantes, control, idealización-devaluación o pánico ante distancia. El vínculo daña autonomía, cuidado propio o funcionamiento del otro.'
        },
        specifiers:[{id:'a2_note',type:'text',label:'Detalle',placeholder:'Ej: aislado / fusional con pareja, llama 30 veces al día'}]
      },
      {
        id:'FUN.psp_autocuidado', label:'A3 · Autocuidado', scoreKeys:['-2','-1','0','+1','+2'],
        instruction:'Higiene, alimentación, sueño, salud física, medicación y finanzas. Puntúe sostenibilidad y proporcionalidad: más autocuidado no siempre es mejor cuidado.',
        scores:{
          '-2':'Abandono de autocuidado grave: higiene, alimentación, sueño, medicación, salud física o finanzas colapsan con deterioro visible, riesgo médico o dependencia marcada de terceros.',
          '-1':'Descuido de autocuidado: higiene irregular, alimentación errática, sueño desordenado, abandono parcial de medicación, descuido financiero o atención tardía de salud.',
          '0':'Autocuidado proporcional: atiende necesidades básicas y salud de forma suficientemente flexible, sostenible y ajustada al contexto.',
          '+1':'Hipercontrol de autocuidado: rutinas, chequeos, dietas, higiene, medicación o finanzas más rígidas de lo necesario, con costo leve en tiempo, flexibilidad o tranquilidad.',
          '+2':'Autocuidado disfuncional por exceso: rituales dominantes, dietas restrictivas extremas, chequeo somático constante, control financiero compulsivo o hiperhigiene que deteriora salud, vínculos o funcionamiento.'
        },
        specifiers:[{id:'a3_note',type:'text',label:'Detalle',placeholder:'Ej: sin ducha 2 sem / 4h ducha diaria'}]
      },
      {
        id:'FUN.psp_disruptivas', label:'A4 · Conductas problemáticas / OAS', scoreKeys:['0','+1'],
        includes:'OAS/MOAS: verbal, objetos/propiedad, autoagresión y física a otros. Dominios no excluyentes.',
        window:'Última semana',
        instruction:'Ventana: última semana. Puntúe OAS/MOAS por dominios no excluyentes: verbal, objetos/propiedad, autoagresión y física a otros. El score final es ponderado; se separa hetero vs auto para matrices.',
        scores:{
          '0':'Sin agresión observable o reportada en la última semana.',
          '+1':'OAS presente: agresión verbal, objetos/propiedad, autoagresión o física a otros. Cuantifique en la matriz.'
        },
        specifiers:[{id:'a4_note',type:'text',label:'Detalle',placeholder:'Ej: insultos diarios / rompió puerta / cortes superficiales'}]
      },
    ]
  },
  {
    id:'EXT.inputs', code:'EXT', title:'Inputs externos para outcomes (Capa 2)', type:'multitest',
    guide:[
      '⚠ INPUTS EXTERNOS — Datos que el clínico no observa directamente pero que alimentan los outcomes de Capa 2.',
      'Estos NO son estado mental. Vienen de la entrevista clínica, historia, informantes, registro previo.',
      'Cada outcome (Suicidio / Agresividad / Negligencia / Capacidad) consume un subset de estos inputs + feeders de estado.'
    ],
    tests:[
      {
        id:'EXT.plan_suicida', label:'Plan suicida', scoreKeys:['NO','VAGO','ESPEC'],
        instruction:'¿El paciente ha mencionado un plan suicida? Reportado por él mismo, familia, o registrado previamente.',
        scores:{
          'NO':'Sin plan reportado',
          'VAGO':'Ideación o plan vago (sin método/lugar/tiempo concretos)',
          'ESPEC':'Plan específico (método, lugar o momento definidos)'
        },
        specifiers:[{id:'plan_note',type:'text',label:'Detalle',placeholder:'Ej: ahorcamiento en casa la próxima semana'}]
      },
      {
        id:'EXT.medios', label:'Acceso a medios letales', scoreKeys:['NO','SI'],
        instruction:'¿Tiene acceso a medios letales (arma, fármacos en exceso, lugar peligroso)?',
        scores:{'NO':'Sin acceso conocido','SI':'Acceso confirmado'},
        specifiers:[{id:'medios_tipo',type:'text',label:'Tipo',placeholder:'Ej: pistola en casa'}]
      },
      {
        id:'EXT.intento_previo', label:'Intento suicida previo', scoreKeys:['NO','LEJANO','RECIENTE'],
        instruction:'¿Tiene historia de intento suicida? Reciente = últimos 12 meses.',
        scores:{
          'NO':'Sin intentos previos',
          'LEJANO':'Intento(s) lejano(s) (>12 meses)',
          'RECIENTE':'Intento reciente (<12 meses)'
        },
        specifiers:[{id:'intento_metodo',type:'text',label:'Método y fecha',placeholder:'Ej: sobredosis hace 6 meses'}]
      },
      {
        id:'EXT.soporte', label:'Red de soporte social', scoreKeys:['ADEC','MIN','AUS'],
        instruction:'¿Cuenta con red social que lo cuide, contenga, busque ayuda por él?',
        scores:{
          'ADEC':'Adecuado (familia/red activa y disponible)',
          'MIN':'Mínimo (algún vínculo pero limitado)',
          'AUS':'Ausente (aislado, sin red de contención)'
        },
        specifiers:[{id:'soporte_note',type:'text',label:'Detalle',placeholder:'Ej: solo madre, vive solo'}]
      },
      {
        id:'EXT.hx_violencia', label:'Historia de violencia a otros', scoreKeys:['NO','LEJANA','RECIENTE'],
        instruction:'¿Tiene historia de agresión física o amenazas a terceros? Predictor más fuerte de riesgo a otros.',
        scores:{
          'NO':'Sin historia',
          'LEJANA':'Historia lejana (>12 meses)',
          'RECIENTE':'Episodios recientes (<12 meses)'
        },
        specifiers:[{id:'hx_violencia_tipo',type:'text',label:'Detalle',placeholder:'Ej: lesiones a esposa, hace 3 meses'}]
      },
      {
        id:'EXT.sustancias', label:'Uso de sustancias activo', scoreKeys:['NO','OCASIONAL','ACTIVO'],
        instruction:'¿Hay consumo activo de alcohol o drogas que potencie impulsividad?',
        scores:{
          'NO':'Sin consumo problemático',
          'OCASIONAL':'Consumo ocasional, no intoxicación al momento',
          'ACTIVO':'Intoxicación actual o consumo diario problemático'
        },
        specifiers:[{id:'sust_tipo',type:'text',label:'Sustancia',placeholder:'Ej: alcohol diario'}]
      },
      {
        id:'EXT.decision_capacidad', label:'Capacidad para decisión específica', scoreKeys:['SIN','DECLARADA'],
        instruction:'Si es necesario evaluar capacidad, ancle a una o más decisiones concretas y puntúe Comprensión, Apreciación, Razonamiento y Expresión de elección. Sin X declarada, capacidad NO computa.',
        scores:{
          'SIN':'No requiere evaluar capacidad / sin decisión específica',
          'DECLARADA':'Sí requiere evaluar capacidad para X'
        },
        specifiers:[
          {id:'decision_text',type:'text',label:'Decisión',placeholder:'Ej: consentir TEC; alta voluntaria; rechazar antipsicóticos'}
        ]
      },
      // === BVC items (Brøset Violence Checklist — Woods 2002, DOI 10.1034/j.1600-0447.106.s412.22.x) ===
      // Confusión y frustración se derivan de NC.conciencia y F6.frustración. Estos 3 son externos al MSE.
      {
        id:'EXT.bvc_ruidos', label:'BVC · Ruidos / agitación auditiva (24h)', scoreKeys:['NO','SI'],
        instruction:'BVC item: ¿el paciente habla muy fuerte, grita, golpea, hace ruido agitado? Ventana últimas 24h. AUC 0.89 (Russell-Babin 2025).',
        scores:{'NO':'No registrado','SI':'Sí — agitación auditiva documentada'},
        specifiers:[{id:'bvc_ruidos_note',type:'text',label:'Detalle',placeholder:'Ej: gritos en pasillo madrugada'}]
      },
      {
        id:'EXT.bvc_amenaza_verbal', label:'BVC · Amenazas verbales (24h)', scoreKeys:['NO','SI'],
        instruction:'BVC item: ¿amenazas verbales explícitas a personal, familia o terceros en las últimas 24h?',
        scores:{'NO':'No','SI':'Sí — amenaza verbal explícita'},
        specifiers:[{id:'bvc_av_note',type:'text',label:'Detalle',placeholder:'Ej: "te voy a matar" a enfermera'}]
      },
      {
        id:'EXT.bvc_objetos', label:'BVC · Ataque a objetos (24h)', scoreKeys:['NO','SI'],
        instruction:'BVC item: ¿el paciente ha atacado objetos (puerta, mobiliario, ventanas, propiedad) en las últimas 24h?',
        scores:{'NO':'No','SI':'Sí — ataque a objetos documentado'},
        specifiers:[{id:'bvc_obj_note',type:'text',label:'Detalle',placeholder:'Ej: rompió silla, golpeó pared'}]
      },
      // === Refusal of help (Diogenes-style — Lahera 2006, Furtos 2015, Proctor 2021) ===
      {
        id:'EXT.rechazo_ayuda', label:'Rechazo de ayuda ofrecida', scoreKeys:['NO','PASIVO','ACTIVO'],
        instruction:'¿El paciente rechaza ayuda ofrecida? Sello distintivo del patrón Diogenes (Lahera 2006). El rechazo activo + autodescuido + sin malestar = configuración clínica clásica.',
        scores:{
          'NO':'Acepta ayuda ofrecida',
          'PASIVO':'Rechazo pasivo (no asiste a citas, no toma medicación, sin oposición verbal)',
          'ACTIVO':'Rechazo activo (rechaza explícitamente, expulsa al ayudante, "déjenme en paz")'
        },
        specifiers:[{id:'rechazo_note',type:'text',label:'Detalle',placeholder:'Ej: rechazó internación 3 veces este mes'}]
      }
    ]
  }
];

const PSP_SPLIT_CHANNELS = {
  'FUN.psp_utiles': {
    neg:{id:'FUN.psp_utiles_deficit', spec:'psp_deficit', label:'déficit funcional'},
    pos:{id:'FUN.psp_utiles_exceso', spec:'psp_exceso', label:'hiperfunción compensatoria'}
  },
  'FUN.psp_relaciones': {
    neg:{id:'FUN.psp_relaciones_aislamiento', spec:'psp_aislamiento', label:'aislamiento / ruptura'},
    pos:{id:'FUN.psp_relaciones_fusion', spec:'psp_fusion', label:'fusión / dependencia'}
  },
  'FUN.psp_autocuidado': {
    neg:{id:'FUN.psp_autocuidado_descuido', spec:'psp_descuido', label:'descuido / abandono'},
    pos:[
      {id:'FUN.psp_autocuidado_rituales', spec:'psp_rituales', label:'rituales / compulsiones'},
      {id:'FUN.psp_autocuidado_alimentacion', spec:'psp_alimentacion', label:'alimentación rígida'},
      {id:'FUN.psp_autocuidado_somatico', spec:'psp_somatico', label:'sobrechequeo somático'},
      {id:'FUN.psp_autocuidado_otro', spec:'psp_otro_exceso', label:'otros excesos de autocuidado'}
    ]
  },
  'FUN.psp_disruptivas': {
    neg:{id:'FUN.psp_disruptivas_auto', spec:'psp_autoagresion', label:'autoagresividad'},
    pos:{id:'FUN.psp_disruptivas_hetero', spec:'psp_heteroagresion', label:'heteroagresividad'}
  }
};

const CONTENT_SPLIT_CHANNELS = [
  {key:'preocupacion', id:'F4.contenido-preocupacion', spec:'contenido_preocupacion', score:'1', level:1, label:'preocupación', chip:'Preocupación'},
  {key:'rumiacion', id:'F4.contenido-rumiacion', spec:'contenido_rumiacion', score:'2', level:2, label:'rumiación', chip:'Rumiación'},
  {key:'obsesion', id:'F4.contenido-obsesion', spec:'contenido_obsesion', score:'2', level:2, label:'obsesión', chip:'Obsesión'},
  {key:'sobrevalorada', id:'F4.contenido-sobrevalorada', spec:'contenido_sobrevalorada', score:'3', level:3, label:'idea sobrevalorada', chip:'Idea sobrevalorada'},
  {key:'creencia-inusual', id:'F4.contenido-creencia-inusual', spec:'contenido_creencia_inusual', score:'3', level:3, label:'creencia inusual', chip:'Creencia inusual'},
  {key:'extrema-sobrevalorada', id:'F4.contenido-extrema-sobrevalorada', spec:'contenido_extrema_sobrevalorada', score:'4', level:4, label:'extreme overvalued ideation', chip:'Extreme overvalued ideation'},
  {key:'delusion', id:'F4.contenido-delusion', spec:'contenido_delusion', score:'4', level:4, label:'delusión', chip:'Delusión'}
];

const VIRTUAL_SCORE_DEFINITIONS = {
  'F4.contenido-preocupacion': {
    label:'Contenido: preocupación',
    scores:{'1':'Preocupación'},
    details:{'1':{nivel:'Preocupación'}}
  },
  'F4.contenido-rumiacion': {
    label:'Contenido: rumiación',
    scores:{'2':'Rumiación'},
    details:{'2':{nivel:'Rumiación'}}
  },
  'F4.contenido-obsesion': {
    label:'Contenido: obsesión',
    scores:{'2':'Obsesión'},
    details:{'2':{nivel:'Obsesión'}}
  },
  'F4.contenido-sobrevalorada': {
    label:'Contenido: idea sobrevalorada',
    scores:{'3':'Idea sobrevalorada'},
    details:{'3':{nivel:'Idea sobrevalorada'}}
  },
  'F4.contenido-creencia-inusual': {
    label:'Contenido: creencia inusual',
    scores:{'3':'Creencia inusual'},
    details:{'3':{nivel:'Creencia inusual'}}
  },
  'F4.contenido-extrema-sobrevalorada': {
    label:'Contenido: extreme overvalued ideation',
    scores:{'4':'Extreme overvalued ideation'},
    details:{'4':{nivel:'Extreme overvalued ideation'}}
  },
  'F4.contenido-delusion': {
    label:'Contenido: delusión',
    scores:{'4':'Delusión'},
    details:{'4':{nivel:'Delusión'}}
  },
  'F2.sensorial-auditiva': {
    label:'Percepción: auditiva',
    scores:{'+1':'Tipo 1 · hipervigilancia auditiva','+2':'Tipo 2 · voz / pensamiento sonorizado'},
    details:{
      '+1':{nivel:'Hipervigilancia auditiva'},
      '+2':{nivel:'Voz / pensamiento sonorizado'}
    }
  },
  'F2.sensorial-visual': {
    label:'Percepción: visual',
    scores:{'+1':'Tipo 1 · hipervigilancia visual','+2':'Tipo 2 · imagen / escena formada'},
    details:{
      '+1':{nivel:'Hipervigilancia visual'},
      '+2':{nivel:'Imagen / escena formada'}
    }
  },
  'F2.sensorial-somatico-tactil': {
    label:'Percepción: somático-táctil',
    scores:{'+1':'Tipo 1 · hipervigilancia somático-táctil','+2':'Tipo 2 · sensación somático-táctil formada'},
    details:{
      '+1':{nivel:'Hipervigilancia somático-táctil'},
      '+2':{nivel:'Sensación somático-táctil formada'}
    }
  },
  'F2.sensorial-olfatorio-gustativo': {
    label:'Percepción: olfatorio-gustativa',
    scores:{'+1':'Tipo 1 · olor/sabor ambiguo','+2':'Tipo 2 · olor/sabor sin fuente'},
    details:{
      '+1':{nivel:'Olor/sabor ambiguo'},
      '+2':{nivel:'Olor/sabor sin fuente'}
    }
  },
  'F6.loss-depresivo': {
    label:'Loss depresivo',
    scores:{'-2':'Tristeza vital / grief','-1':'Desánimo'},
    details:{
      '-2':{nivel:'Tristeza vital / grief'},
      '-1':{nivel:'Desánimo'}
    }
  },
  'F6.loss-ansioso': {
    label:'Loss ansioso',
    scores:{'-2':'Ansiedad extrema / pérdida inminente','-1':'Ansiedad anticipatoria / alarma de pérdida'},
    details:{
      '-2':{nivel:'Ansiedad extrema / pérdida inminente'},
      '-1':{nivel:'Ansiedad anticipatoria / alarma de pérdida'}
    }
  },
  'G.sueno-insomnio': {
    label:'Sueño: insomnio',
    scores:{'+1':'Insomnio leve','+2':'Insomnio severo'},
    details:{
      '+1':{nivel:'Insomnio leve'},
      '+2':{nivel:'Insomnio severo'}
    }
  },
  'G.sueno-necesidad-reducida': {
    label:'Sueño: necesidad reducida',
    scores:{'+1':'Reducción leve de necesidad de sueño','+2':'Reducción severa de necesidad de sueño'},
    details:{
      '+1':{nivel:'Reducción leve de necesidad de sueño'},
      '+2':{nivel:'Reducción severa de necesidad de sueño'}
    }
  },
  'FUN.psp_utiles_deficit': {
    label:'A1 déficit funcional',
    scores:{'-2':'Abandono funcional grave','-1':'Productividad reducida'},
    details:{'-2':{nivel:'Abandono funcional grave'},'-1':{nivel:'Productividad reducida'}}
  },
  'FUN.psp_utiles_exceso': {
    label:'A1 hiperfunción compensatoria',
    scores:{'+1':'Hiperactividad laboral compensatoria','+2':'Workaholic patológico'},
    details:{'+1':{nivel:'Hiperactividad laboral compensatoria'},'+2':{nivel:'Workaholic patológico'}}
  },
  'FUN.psp_relaciones_aislamiento': {
    label:'A2 aislamiento / ruptura',
    scores:{'-2':'Aislamiento marcado / ruptura','-1':'Retracción visible'},
    details:{'-2':{nivel:'Aislamiento marcado / ruptura'},'-1':{nivel:'Retracción visible'}}
  },
  'FUN.psp_relaciones_fusion': {
    label:'A2 fusión / dependencia',
    scores:{'+1':'Sobreinvolucramiento','+2':'Fusional / dependencia patológica'},
    details:{'+1':{nivel:'Sobreinvolucramiento'},'+2':{nivel:'Fusional / dependencia patológica'}}
  },
  'FUN.psp_autocuidado_descuido': {
    label:'A3 descuido / abandono',
    scores:{'-2':'Autodescuido grave','-1':'Descuido visible'},
    details:{'-2':{nivel:'Autodescuido grave'},'-1':{nivel:'Descuido visible'}}
  },
  'FUN.psp_autocuidado_rituales': {
    label:'A3 rituales / compulsiones',
    scores:{'+1':'Rituales rígidos','+2':'Rituales dominantes'},
    details:{'+1':{nivel:'Rituales rígidos'},'+2':{nivel:'Rituales dominantes'}}
  },
  'FUN.psp_autocuidado_alimentacion': {
    label:'A3 alimentación rígida',
    scores:{'+1':'Rituales de alimentación rígidos','+2':'Dietas restrictivas extremas'},
    details:{'+1':{nivel:'Rituales de alimentación rígidos'},'+2':{nivel:'Dietas restrictivas extremas'}}
  },
  'FUN.psp_autocuidado_somatico': {
    label:'A3 sobrechequeo somático',
    scores:{'+1':'Sobrechequeo somático','+2':'Hipervigilancia somática'},
    details:{'+1':{nivel:'Sobrechequeo somático'},'+2':{nivel:'Hipervigilancia somática'}}
  },
  'FUN.psp_autocuidado_otro': {
    label:'A3 otros excesos de autocuidado',
    scores:{'+1':'Autocuidado excesivo','+2':'Autocuidado disfuncional por exceso'},
    details:{'+1':{nivel:'Autocuidado excesivo'},'+2':{nivel:'Autocuidado disfuncional por exceso'}}
  },
  'FUN.psp_disruptivas_auto': {
    label:'A4 autoagresividad',
    scores:{'-2':'Autoagresividad grave','-1':'Autoagresividad leve'},
    details:{'-2':{nivel:'Autoagresividad grave'},'-1':{nivel:'Autoagresividad leve'}}
  },
  'FUN.psp_disruptivas_hetero': {
    label:'A4 heteroagresividad',
    scores:{'+1':'Heteroagresividad leve','+2':'Heteroagresividad grave'},
    details:{'+1':{nivel:'Heteroagresividad leve'},'+2':{nivel:'Heteroagresividad grave'}}
  },
  'FUN.oas_hetero_total': {
    label:'A4 OAS hetero ponderado',
    scores:Object.fromEntries([['0','0/28'], ...Array.from({length:28}, (_,i) => [`+${i + 1}`, `${i + 1}/28`])]),
    details:{}
  },
  'FUN.oas_auto_total': {
    label:'A4 OAS autoagresión ponderado',
    scores:Object.fromEntries([['0','0/12'], ...Array.from({length:12}, (_,i) => [`+${i + 1}`, `${i + 1}/12`])]),
    details:{}
  }
};

function interpersonalStyleProfile() {
  const readScore = id => {
    const v = (typeof state !== 'undefined' && state[id]) ? state[id].score : null;
    if (v === null || v === undefined || v === 'NE') return null;
    const n = parseInt(v, 10);
    return Number.isNaN(n) ? null : n;
  };
  const c = readScore('P1.dominancia');
  const a = readScore('P2.afiliación');
  const d = readScore('F3.drive');
  const threat = readScore('F6.amenaza');
  const frustration = readScore('F6.frustración');
  const selfValue = readScore('F6.autoevaluación');
  const selfIntegration = readScore('F7.self-integracion');
  const otherMent = readScore('F7.mentalización-otro');
  const emotionReg = readScore('E.regulación');
  const expressivity = readScore('F1.expresividad');
  const coherence = readScore('G.coherencia');
  const oas = readScore('FUN.oas_hetero_total');
  const pspRelFusion = readScore('FUN.psp_relaciones_fusion');
  const pspRelIso = readScore('FUN.psp_relaciones_aislamiento');
  const spin = (typeof state !== 'undefined' && state.P?.specifiers?.spin) || '';

  const evaluated = c !== null || a !== null;
  if (!evaluated) return null;

  const cBucket = c === null || c === 0 ? 'neutral' : c > 0 ? 'high' : 'low';
  const aBucket = a === null || a === 0 ? 'neutral' : a > 0 ? 'high' : 'low';
  const dBucket = d === null || d === 0 ? 'mid' : d > 0 ? 'high' : 'low';
  const byDrive = (low, mid, high) => dBucket === 'low' ? low : dBucket === 'high' ? high : mid;

  let field = 'campo interpersonal calibrado';
  let fieldShort = 'recíproco';
  let adjectives = ['recíproco','colaborativo','calibrado'];
  let trace = 'control y afiliación proporcionales';

  if (cBucket === 'high' && aBucket === 'low') {
    field = 'dominante-hostil';
    fieldShort = 'alto control + baja afiliación';
    adjectives = byDrive(
      ['frío','suspicaz','negativista','obstruccionista','controlador pasivo'],
      ['crítico','controlador','desconfiado','rígido','hostil'],
      ['combativo','intimidante','confrontativo','expansivo-hostil','dominante']
    );
    trace = 'baja afiliación con control alto';
  } else if (cBucket === 'high' && aBucket === 'high') {
    field = 'dominante-afiliativo';
    fieldShort = 'alto control + alta afiliación';
    adjectives = byDrive(
      ['protector','controlador-cercano','intrusivo suave','pegado al encuadre'],
      ['directivo','envolvente','persuasivo','familiar','controlador'],
      ['expansivo','seductor','invasivo','demandante','capturante']
    );
    trace = 'control alto con acercamiento intenso';
  } else if (cBucket === 'low' && aBucket === 'high') {
    field = 'sumiso-fusional';
    fieldShort = 'bajo control + alta afiliación';
    adjectives = byDrive(
      ['complaciente','apegado','dependiente','inhibido','busca aprobación'],
      ['deferente','necesitado','fusional','sensible al abandono','complaciente'],
      ['demandante','ansioso-vincular','dramático','pegajoso','urgente']
    );
    trace = 'control cedido con afiliación intensa';
  } else if (cBucket === 'low' && aBucket === 'low') {
    field = 'retirado-defensivo';
    fieldShort = 'bajo control + baja afiliación';
    adjectives = byDrive(
      ['inhibido','apagado','evitativo','retraído','sumiso-distante'],
      ['distante','defensivo','evitativo','poco recíproco','cerrado'],
      ['reactivo-evitativo','tenso','defensivo','suspicaz','escapista']
    );
    trace = 'control cedido con bajo acercamiento';
  } else if (cBucket === 'high') {
    field = 'agentivo-controlador';
    fieldShort = 'alto control con afiliación neutra';
    adjectives = byDrive(
      ['ordenado','controlador','reservado','rígido'],
      ['directivo','controlador','seguro','conductor'],
      ['expansivo','dominante','acelerado','impositivo']
    );
    trace = 'control alto sin cambio afiliativo marcado';
  } else if (cBucket === 'low') {
    field = 'deferente-inhibido';
    fieldShort = 'bajo control con afiliación neutra';
    adjectives = byDrive(
      ['inhibido','deferente','pasivo','apagado'],
      ['complaciente','deferente','poco asertivo','inseguro'],
      ['apresurado por agradar','inseguro','dependiente','reactivo']
    );
    trace = 'control cedido sin cambio afiliativo marcado';
  } else if (aBucket === 'low') {
    field = a !== null && a <= -2 ? 'hostil-distante' : 'distante-frío';
    fieldShort = 'baja afiliación con control neutro';
    adjectives = byDrive(
      ['frío','retraído','reservado','desconectado'],
      ['distante','desconfiado','poco recíproco','frío'],
      ['defensivo','irritable','suspicaz','reactivo']
    );
    trace = 'baja afiliación sin dominancia marcada';
  } else if (aBucket === 'high') {
    field = a !== null && a >= 2 ? 'fusional-intrusivo' : 'afiliativo-intenso';
    fieldShort = 'alta afiliación con control neutro';
    adjectives = byDrive(
      ['cercano','busca contención','dependiente suave','apegado'],
      ['cálido','intenso','familiar','busca conexión'],
      ['efusivo','demandante','invasivo','capturante']
    );
    trace = 'alta afiliación sin dominancia marcada';
  }

  const patterns = [];
  const addPattern = (name, cond, why, confidence) => {
    if (cond) patterns.push({name, why, confidence: confidence || 'posible'});
  };
  addPattern(
    'paranoide-like / suspicaz',
    a !== null && a < 0 && c !== null && c > 0 && ((threat !== null && threat >= 1) || (otherMent !== null && otherMent >= 1)),
    'baja afiliación + alto control + amenaza/sobrelectura del otro',
    (threat !== null && threat >= 2) || (otherMent !== null && otherMent >= 2) ? 'probable' : 'posible'
  );
  addPattern(
    'negativista-obstruccionista',
    a !== null && a < 0 && c !== null && c > 0 && (d === null || d <= 0) && !(oas !== null && oas > 0),
    'dominante-hostil con drive bajo/medio y sin heteroagresión cuantificada',
    'posible'
  );
  addPattern(
    'narcisiforme / antagónico',
    c !== null && c > 0 && (d !== null && d > 0) && (selfValue !== null && selfValue > 0) && (a === null || a <= 0),
    'control alto + drive alto + autoevaluación elevada/invulnerable',
    selfValue >= 2 ? 'probable' : 'posible'
  );
  addPattern(
    'antisocial-like / externalizante',
    a !== null && a < 0 && c !== null && c > 0 && ((oas !== null && oas > 0) || (frustration !== null && frustration >= 2)),
    'baja afiliación + control alto + agresión/frustración explosiva',
    (oas !== null && oas >= 8) ? 'probable' : 'posible'
  );
  addPattern(
    'límite-like / inestable vincular',
    a !== null && a > 0 && ((emotionReg !== null && emotionReg < 0) || (selfIntegration !== null && selfIntegration < 0) || /Oscilante|límites|amenaza|validación/i.test(spin)),
    'afiliación intensa/fusional + regulación/self/spin inestable',
    (a >= 2 && ((emotionReg !== null && emotionReg <= -2) || (selfIntegration !== null && selfIntegration <= -2))) ? 'probable' : 'posible'
  );
  addPattern(
    'dependiente-fusional',
    a !== null && a > 0 && c !== null && c < 0,
    'alta afiliación + control cedido/complaciente',
    a >= 2 || (pspRelFusion !== null && pspRelFusion > 0) ? 'probable' : 'posible'
  );
  addPattern(
    'evitativo/desapegado',
    a !== null && a < 0 && (c === null || c <= 0) && (d === null || d <= 0),
    'baja afiliación + bajo/neutral control + drive bajo/medio',
    (pspRelIso !== null && pspRelIso < 0) || (expressivity !== null && expressivity < 0) ? 'probable' : 'posible'
  );
  addPattern(
    'histrioniforme / expresivo-vincular',
    a !== null && a > 0 && d !== null && d > 0 && expressivity !== null && expressivity > 0,
    'alta afiliación + drive alto + expresividad aumentada',
    expressivity >= 2 ? 'probable' : 'posible'
  );
  addPattern(
    'anancástico / sobrecontrolado',
    c !== null && c > 0 && (a === null || a <= 0) && ((emotionReg !== null && emotionReg > 0) || (coherence !== null && coherence > 0)),
    'control alto + baja afiliación/neutra + sobrecontrol o rigidez global',
    (emotionReg !== null && emotionReg >= 2) || (coherence !== null && coherence >= 2) ? 'probable' : 'posible'
  );

  return {
    evaluated,
    control:c,
    affiliation:a,
    drive:d,
    field,
    fieldShort,
    trace,
    adjectives:[...new Set(adjectives)],
    patterns,
    driveLabel:d === null ? 'drive no puntuado' : d < 0 ? 'drive bajo' : d > 0 ? 'drive alto' : 'drive proporcional',
    summary:`${field}: ${[...new Set(adjectives)].slice(0, 5).join(', ')}.`
  };
}

// ── REORDER DIMS ──
const DIM_ORDER = [
  'NC.conciencia','G.arousal','F2.velocidad','F1.expresividad','E.regulación','G.coherencia',
  'F3.drive','F3.anticipación','F3.tono',
  'F6.amenaza','F6.frustración','F6.animo-meta','F6.autoevaluación','F6.desesperanza',
  'F4.experiencia','F4.contenido','F2.sensorial','F7.testing',
  'F7.coherencia-autobiografica','F7.auto-mentalización','F7.self-integracion','F7.mentalización-otro','P',
  'F5.regulación','NC.perfil',
  'NM.coordinación',
  'G.sueno-ritmo','G.interocepcion','G.apetito',
  'FUN.funcionalidad',
  'META.enfermedad',
  'EXT.inputs'
];

// ─── Forbes 2024 map + groups ───
// Forbes 2024 aporta los subfactores visibles. Personality Function se conserva
// como capa clínica propia: LPFS Self + LPFS Interpersonal.
const HITOP_MAP = {
  // Personality Function / LPFS
  'LPFS\nSelf': [{id:'F7.self-integracion',abs:true,w:1.2},{id:'F7.auto-mentalización',abs:true,w:1.0},{id:'F4.contenido-creencia-inusual',pathValue:1,w:0.45,role:'bridge'},{id:'F4.contenido-extrema-sobrevalorada',pathValue:2,w:0.9,role:'central'},{id:'F4.contenido-delusion',pathValue:2,w:0.75,role:'bridge'},{id:'J.juicio',inv:true,w:0.85}],
  'LPFS\nInterpersonal': [{id:'F7.mentalización-otro',abs:true,w:1.0},{id:'FUN.psp_relaciones',abs:true,w:1.0},{id:'P2.afiliación',abs:true,w:0.9}],

  // Forbes: Disfunción emocional > Internalizante
  'Malestar': [{id:'F6.loss-depresivo',inv:true,w:1.1},{id:'F6.loss-ansioso',inv:true,w:0.8},{id:'F6.animo-meta',inv:true,w:0.55},{id:'F6.frustración',inv:true,w:0.35},{id:'F6.desesperanza',inv:true,w:0.9},{id:'F6.autoevaluación',inv:true,w:0.8},{id:'F3.tono',inv:true,w:0.75},{id:'F3.drive',inv:true,w:0.45},{id:'F3.anticipación',inv:true,w:0.55,role:'bridge'},{id:'F4.contenido-rumiacion',pathValue:1,w:0.65,role:'bridge'},{id:'G.apetito',abs:true,w:0.3},{id:'E.egodistonia',inv:true,pole:'neg',w:0.35},{id:'FUN.oas_auto_total',scaleMax:12,minPath:0.01,w:0.65,role:'bridge'},{id:'FUN.psp_disruptivas_auto',inv:true,w:0.65,role:'bridge'},{id:'E.regulación',pole:'pos',w:0.4}],
  'Miedo': [{id:'F6.amenaza',w:1.1},{id:'F4.contenido-preocupacion',pathValue:1,w:0.55,role:'bridge'},{id:'F4.contenido-obsesion',pathValue:1,w:0.45,role:'bridge'},{id:'G.arousal',pole:'pos',w:0.55},{id:'G.interocepcion',pole:'pos',w:0.4},{id:'F7.mentalización-otro',pole:'pos',w:0.25}],
  'Aislamiento\nSocial': [{id:'FUN.psp_relaciones',inv:true,w:0.9},{id:'P2.afiliación',inv:true,pole:'neg',w:0.65},{id:'F1.expresividad',inv:true,w:0.6},{id:'F7.mentalización-otro',inv:true,pole:'neg',w:0.45},{id:'F3.tono',inv:true,w:0.35}],
  'Sueño desreg.\n+ Trauma': [{id:'G.sueno-ritmo',inv:true,pole:'neg',w:0.75,gate:'traumaSleep'},{id:'G.sueno-insomnio',pole:'pos',w:1.0,gate:'traumaSleep'},{id:'F6.amenaza',w:0.45,gate:'traumaSleep'},{id:'G.arousal',abs:true,w:0.4,gate:'traumaSleep'},{id:'F7.coherencia-autobiografica',inv:true,pole:'neg',w:0.75,gate:'traumaSleep'}],

  // Forbes: Disfunción emocional > Patología alimentaria
  'Patología\nAlimentaria': [{id:'F3.tono',abs:true,spec:'target',specRequired:true,specIn:['Restricción','Purga','Ejercicio excesivo']},{id:'FUN.psp_autocuidado_alimentacion',pole:'pos',w:0.85},{id:'G.interocepcion',abs:true,w:0.35}],

  // Forbes: Disfunción emocional > Somatomorfo
  'Síntomas\nSomáticos': [{id:'G.interocepcion',pole:'pos',w:1.1},{id:'F2.sensorial',abs:true,w:0.35},{id:'F2.sensorial-somatico-tactil',pathValue:1,w:0.55},{id:'F2.sensorial-olfatorio-gustativo',pathValue:1,w:0.45},{id:'FUN.psp_autocuidado_somatico',pole:'pos',w:0.75}],
  'Sueño\nDesregulado': [{id:'G.sueno-ritmo',abs:true,w:0.8},{id:'G.sueno-insomnio',pole:'pos',w:1.0},{id:'G.sueno-necesidad-reducida',pole:'pos',w:0.65},{id:'G.arousal',abs:true,w:0.35}],
  'Alimentación\nDesregulada': [{id:'F3.tono',abs:true,w:0.65},{id:'G.apetito',abs:true,w:0.7},{id:'G.interocepcion',abs:true,w:0.45},{id:'FUN.psp_autocuidado_alimentacion',pole:'pos',w:0.75}],

  // Forbes: Disfunción emocional > Trastorno del pensamiento
  'Psicosis\nPositiva': [{id:'F7.testing',inv:true,w:1.1},{id:'F4.contenido-creencia-inusual',pathValue:1,w:0.85,role:'central'},{id:'F4.contenido-sobrevalorada',pathValue:1,w:0.55,role:'bridge'},{id:'F4.contenido-extrema-sobrevalorada',pathValue:2,w:0.8,role:'bridge'},{id:'F4.contenido-delusion',pathValue:2,w:1.1,role:'central'},{id:'F4.experiencia',abs:true,w:0.45},{id:'F2.sensorial-auditiva',pathValue:1,w:0.55,role:'bridge'},{id:'F2.sensorial-visual',pathValue:1,w:0.55,role:'bridge'},{id:'F2.sensorial-somatico-tactil',pathValue:1,w:0.45,role:'bridge'},{id:'F2.sensorial-olfatorio-gustativo',pathValue:1,w:0.45,role:'bridge'},{id:'I.insight',inv:true,w:0.5}],
  'Experiencias\nDisociativas': [{id:'F7.auto-mentalización',inv:true,w:0.9},{id:'F7.self-integracion',inv:true,pole:'neg',minPath:2,w:0.9},{id:'F7.coherencia-autobiografica',inv:true,pole:'neg',w:1.1},{id:'NC.conciencia',abs:true,w:0.5},{id:'G.arousal',inv:true,pole:'neg',w:0.35}],
  'Pérdida control\ncorporal': [{id:'NM.luria',abs:true,w:0.35},{id:'NM.dismetria',abs:true,w:0.4},{id:'NM.alternancia',abs:true,w:0.4},{id:'NM.tandem',abs:true,w:0.4},{id:'NM.parkinsonismo',abs:true,w:0.45}],
  'Sínt. físicos\nincontrolables': [{id:'F2.sensorial',abs:true,w:0.45},{id:'NM.tic',abs:true,w:0.5},{id:'NM.diskinesia',abs:true,w:0.5},{id:'NM.distonia',abs:true,w:0.55},{id:'NM.acatisia',abs:true,w:0.55},{id:'NM.parkinsonismo',abs:true,w:0.55},{id:'NM.tremor',abs:true,w:0.5}],

  // Forbes add-on: psicopatología motora como sección propia.
  'Hiper\nMotora': [{id:'F2.velocidad',pole:'pos',w:1.0,role:'central'},{id:'G.arousal',pole:'pos',w:0.35,role:'bridge'},{id:'NM.acatisia',inv:true,w:0.65,role:'bridge'}],
  'Hipo\nMotora': [{id:'F2.velocidad',inv:true,pole:'neg',w:1.0,role:'central'},{id:'F1.expresividad',inv:true,pole:'neg',w:0.45,role:'bridge'},{id:'NM.parkinsonismo',inv:true,w:0.65,role:'bridge'}],
  'Parakinesia': [{id:'NM.parakinesia_iterativa',inv:true,w:0.9,role:'central'},{id:'NM.parakinesia_odd',inv:true,w:0.95,role:'central'},{id:'NM.parakinesia_volicional',inv:true,w:1.0,role:'central'}],

  // Forbes: Dificultades neurodevelopmentales y cognitivas
  'Sensación alt.\n+ control atenc.': [{id:'F5.regulación',abs:true,w:0.85},{id:'F2.sensorial',abs:true,w:0.75},{id:'G.interocepcion',abs:true,w:0.25}],
  'Deterioro\nNeurocognitivo': [{id:'NC.fluencia',abs:true},{id:'NC.digit',abs:true},{id:'NC.tmt',abs:true},{id:'NC.clock',abs:true},{id:'NC.recall',abs:true},{id:'J.juicio',inv:true,w:0.8},{id:'I.insight',inv:true,w:0.6},{id:'NM.luria',abs:true,w:0.45},{id:'NM.dismetria',abs:true,w:0.3},{id:'NM.alternancia',abs:true,w:0.45},{id:'NM.tandem',abs:true,w:0.3}],
  'Dificultades\nOrganización': [{id:'G.coherencia',inv:true,pole:'neg',w:0.65},{id:'F5.regulación',inv:true,pole:'neg',w:0.55},{id:'FUN.psp_autocuidado',inv:true,pole:'neg',w:0.45},{id:'FUN.psp_utiles',inv:true,pole:'neg',w:0.45}],
  'Olvido': [{id:'NC.recall',abs:true,w:1.0},{id:'NC.digit',abs:true,w:0.45},{id:'F7.coherencia-autobiografica',pole:'pos',w:0.55}],
  'Comportamiento\nRitualizado': [{id:'F7.testing',pole:'pos',w:0.6},{id:'F4.contenido-obsesion',pathValue:1,w:0.7,role:'bridge'},{id:'F4.contenido-sobrevalorada',pathValue:1,w:0.65,role:'bridge'},{id:'F5.regulación',abs:true,w:0.55},{id:'G.coherencia',pole:'pos',w:0.65},{id:'FUN.psp_autocuidado',pole:'pos',w:0.45,role:'bridge'},{id:'FUN.psp_autocuidado_rituales',pole:'pos',w:0.85},{id:'FUN.psp_autocuidado_otro',pole:'pos',w:0.45}],
  'Dificultades\nComunicación social': [{id:'F1.expresividad',inv:true,w:0.9},{id:'F7.mentalización-otro',inv:true,w:0.75},{id:'G.coherencia',inv:true,w:0.5},{id:'P2.afiliación',abs:true,w:0.35}],

  // Forbes: Externalizante, manía y desapego > Externalizante
  'Afecto neg.\nexternalizado': [{id:'F6.frustración',w:1.0},{id:'P2.afiliación',inv:true,pole:'neg',w:0.45},{id:'FUN.psp_disruptivas',pole:'pos',w:0.45,role:'bridge'},{id:'FUN.psp_disruptivas_hetero',pole:'pos',w:0.75,role:'central'},{id:'FUN.oas_hetero_total',scaleMax:28,minPath:0.01,w:0.75,role:'central'},{id:'E.regulación',inv:true,w:0.5}],
  'Antagonismo': [{id:'F6.autoevaluación',pole:'pos',w:0.85},{id:'P1.dominancia',pole:'pos',w:0.8},{id:'F7.mentalización-otro',pole:'pos',w:0.45},{id:'FUN.oas_hetero_total',scaleMax:28,minPath:0.1,w:0.4,role:'bridge'}],
  'Comportamiento\nAntisocial': [{id:'FUN.oas_hetero_total',scaleMax:28,minPath:0.01,w:1.0,role:'central'},{id:'FUN.psp_disruptivas_hetero',pole:'pos',w:0.75,role:'central'},{id:'FUN.psp_disruptivas',pole:'pos',w:0.45,role:'bridge'},{id:'P2.afiliación',inv:true,pole:'neg',w:0.55},{id:'F6.frustración',w:0.55},{id:'F3.drive',w:0.35}],
  'Desinhibición': [{id:'F3.drive',w:0.75},{id:'F2.velocidad',w:0.5},{id:'F6.amenaza',inv:true,pole:'neg',w:0.55},{id:'FUN.psp_utiles',pole:'pos',w:0.45},{id:'FUN.psp_disruptivas',pole:'pos',w:0.35,role:'bridge'},{id:'FUN.oas_hetero_total',scaleMax:28,minPath:0.01,w:0.35,role:'bridge'},{id:'E.regulación',inv:true,w:0.6}],
  'Insensibilidad': [{id:'F7.mentalización-otro',inv:true,pole:'neg',w:0.9},{id:'F1.expresividad',inv:true,w:0.55},{id:'F6.amenaza',inv:true,pole:'neg',w:0.45}],

  // Forbes: Externalizante, manía y desapego > Manía/Bajo desapego
  'Manía': [{id:'F6.animo-meta',pole:'pos',w:1.05},{id:'F6.desesperanza',pole:'pos',w:0.4},{id:'F3.drive',w:0.8},{id:'F3.anticipación',w:0.65},{id:'F2.velocidad',w:0.55},{id:'G.sueno-necesidad-reducida',pole:'pos',w:0.85},{id:'G.sueno-ritmo',pole:'pos',w:0.35},{id:'G.arousal',pole:'pos',w:0.55},{id:'FUN.psp_utiles',pole:'pos',w:0.5},{id:'FUN.psp_relaciones',pole:'pos',w:0.4},{id:'P1.dominancia',pole:'pos',w:0.4},{id:'P2.afiliación',pole:'pos',w:0.4},{id:'E.egodistonia',pole:'pos',w:0.3},{id:'E.regulación',inv:true,w:0.45}],
  'Desapego': [{id:'F1.expresividad',inv:true,w:0.75},{id:'FUN.psp_relaciones',inv:true,w:0.85},{id:'FUN.psp_utiles',inv:true,w:0.45},{id:'F3.drive',inv:true,w:0.55},{id:'F3.anticipación',inv:true,w:0.45},{id:'F3.tono',inv:true,w:0.4},{id:'F7.mentalización-otro',inv:true,pole:'neg',w:0.5},{id:'P1.dominancia',inv:true,pole:'neg',w:0.35},{id:'P2.afiliación',inv:true,pole:'neg',w:0.55},{id:'G.coherencia',pole:'pos',w:0.25},{id:'E.regulación',pole:'pos',w:0.5}]
};

function stateRawNumber(id) {
  if (typeof state === 'undefined') return null;
  const s = state[id]?.score;
  if (s === null || s === undefined || s === 'NE') return null;
  const raw = parseInt(s, 10);
  return Number.isNaN(raw) ? null : raw;
}

function pspSplitConfig(baseId) {
  return (typeof PSP_SPLIT_CHANNELS !== 'undefined') ? PSP_SPLIT_CHANNELS[baseId] : null;
}

function pspSideChannels(baseId, side) {
  const cfg = pspSplitConfig(baseId);
  if (!cfg || !cfg[side]) return [];
  return Array.isArray(cfg[side]) ? cfg[side] : [cfg[side]];
}

function pspChannelScore(baseId, side) {
  const cfg = pspSplitConfig(baseId);
  if (!cfg) return stateRawNumber(baseId);
  const channelScores = pspSideChannels(baseId, side).map(ch => stateRawNumber(ch.id)).filter(v => v !== null);
  if (channelScores.length) return strongestSignedScore(channelScores);
  const baseRaw = stateRawNumber(baseId);
  if (baseRaw === null) return null;
  if (side === 'neg') return baseRaw < 0 ? baseRaw : null;
  if (side === 'pos') return baseRaw > 0 ? baseRaw : null;
  return baseRaw;
}

function pspBaseHasSplitScores(baseId) {
  const cfg = pspSplitConfig(baseId);
  if (!cfg) return false;
  return ['neg','pos'].some(side => pspSideChannels(baseId, side).some(ch => stateRawNumber(ch.id) !== null));
}

function strongestSignedScore(scores) {
  const vals = scores.filter(v => v !== null && v !== undefined);
  if (!vals.length) return null;
  return vals.sort((a,b) => Math.abs(b) - Math.abs(a) || a - b)[0];
}

function priorityParentsForSource(sourceId) {
  const parents = [];
  if (sourceId === 'F6.loss-depresivo' || sourceId === 'F6.loss-ansioso') parents.push('F6.animo-meta');
  if (sourceId === 'G.sueno-insomnio' || sourceId === 'G.sueno-necesidad-reducida') parents.push('G.sueno-ritmo');
  const pspParent = (typeof constructParentBaseId === 'function') ? constructParentBaseId(sourceId) : null;
  if (pspParent) parents.push(pspParent);
  return parents;
}

function isPrioritySource(sourceId) {
  if (typeof state === 'undefined') return false;
  if (state[sourceId]?.priority) return true;
  return priorityParentsForSource(sourceId).some(id => state[id]?.priority);
}

function priorityWeightForSource(sourceId) {
  return isPrioritySource(sourceId) ? 1.6 : 1;
}

function resolveFeederRaw(d) {
  const cfg = pspSplitConfig(d.id);
  if (!cfg) return stateRawNumber(d.id);
  const neg = pspChannelScore(d.id, 'neg');
  const pos = pspChannelScore(d.id, 'pos');
  const baseRaw = stateRawNumber(d.id);
  if (d.pole === 'neg' || (d.inv && !d.abs)) return neg;
  if (d.pole === 'pos') return pos;
  if (d.abs) return strongestSignedScore([neg, pos, baseRaw]);
  return baseRaw !== null ? baseRaw : strongestSignedScore([neg, pos]);
}

function feederRawAllowed(d, raw) {
  if (raw === null || raw === undefined) return false;
  if (Array.isArray(d.rawIn) && !d.rawIn.map(v => parseInt(v, 10)).includes(raw)) return false;
  if (d.rawMin !== undefined && raw < d.rawMin) return false;
  if (d.rawMax !== undefined && raw > d.rawMax) return false;
  return true;
}

function feederForcedPathValue(d) {
  if (d.pathValue === undefined || d.pathValue === null) return null;
  const n = parseFloat(d.pathValue);
  return Number.isNaN(n) ? null : n;
}

function feederScaledPathValue(d, raw) {
  if (d.scaleMax === undefined || d.scaleMax === null) return null;
  const max = parseFloat(d.scaleMax);
  const min = d.scaleMin === undefined || d.scaleMin === null ? 0 : parseFloat(d.scaleMin);
  if (!Number.isFinite(max) || max <= 0 || !Number.isFinite(min) || max <= min) return null;
  const clipped = Math.max(min, Math.min(max, raw));
  return ((clipped - min) / (max - min)) * 2;
}

function isContentSourceId(id) {
  return id === 'F4.contenido' || String(id || '').startsWith('F4.contenido-');
}

function calcDomainScore(dims) {
  let sum=0, count=0;
  dims.forEach(d => {
    const raw = resolveFeederRaw(d);
    if (raw !== null && raw !== undefined) {
      if (!feederRawAllowed(d, raw)) return;
      let v = 0;
      const forcedPath = feederForcedPathValue(d);
      const scaledPath = feederScaledPathValue(d, raw);
      if (forcedPath !== null) {
        v = Math.abs(forcedPath);
      } else if (scaledPath !== null) {
        v = Math.abs(scaledPath);
      } else if (d.abs) {
        v = Math.abs(raw);
      } else if (d.inv) {
        v = raw < 0 ? Math.abs(raw) : 0;
      } else {
        v = Math.abs(raw);
      }
      sum += v * (d.w||1);
      count += (d.w||1);
    }
  });
  return count > 0 ? Math.min(2, sum/count) : 0;
}

function drawRadar(containerId, domainMap, title, color, groups) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const labels = Object.keys(domainMap);
  const n = labels.length;
  const values = labels.map(l => calcDomainScore(domainMap[l]));
  const rawScores = labels.map(l => {
    const dims = domainMap[l];
    return dims.map(d => {
      const raw = resolveFeederRaw(d);
      return raw !== null ? `${d.id.split('.').pop()}: ${raw>0?'+':''}${raw}${d.inv?' (inv)':''}` : null;
    }).filter(Boolean).join(', ');
  });
  const hasData = values.some(v => v > 0);
  const hasGroups = groups && groups.length > 0;
  const outerPad = hasGroups ? 95 : 65;
  const size = Math.max(480, n * 28) + (hasGroups ? 40 : 0);
  const cx = size/2, cy = size/2, maxR = size/2 - outerPad;
  const angleStep = (2*Math.PI)/n;
  const startAngle = -Math.PI/2;
  function polar(angle, r) { return [cx + r*Math.cos(angle), cy + r*Math.sin(angle)]; }
  function arcPath(r, a1, a2) {
    const [x1,y1] = polar(a1,r);
    const [x2,y2] = polar(a2,r);
    const large = (a2-a1) > Math.PI ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
  }
  let svg = `<div style="text-align:center;margin-bottom:8px;font-family:var(--font-display);font-size:20px">${title}</div>`;
  svg += `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display:block;margin:0 auto;overflow:visible">`;
  // outer group arcs
  if (hasGroups) {
    const arcR = maxR + 26;
    const gap = 0.025;
    groups.forEach(g => {
      const a1 = startAngle + g.from * angleStep - angleStep/2 + gap;
      const a2 = startAngle + g.to * angleStep + angleStep/2 - gap;
      svg += `<path d="${arcPath(arcR, a1, a2)}" fill="none" stroke="${g.color}" stroke-width="5" stroke-linecap="round" opacity="0.5"/>`;
      const midAngle = (a1+a2)/2;
      const [tx,ty] = polar(midAngle, arcR + 18);
      const words = g.name.split(/[\s\/]+/);
      if (words.length <= 2) {
        words.forEach((w,wi) => {
          svg += `<text x="${tx}" y="${ty + (wi-(words.length-1)/2)*10}" text-anchor="middle" dominant-baseline="middle" font-size="8" fill="${g.color}" font-family="var(--font-body)" font-weight="700" letter-spacing="0.03em">${w}</text>`;
        });
      } else {
        svg += `<text x="${tx}" y="${ty}" text-anchor="middle" dominant-baseline="middle" font-size="7" fill="${g.color}" font-family="var(--font-body)" font-weight="700">${g.name}</text>`;
      }
    });
  }
  // inner white circle
  const innerR = maxR * 0.12;
  let innerPts = [];
  for(let i=0;i<n;i++) innerPts.push(polar(startAngle+i*angleStep, innerR).join(','));
  svg += `<polygon points="${innerPts.join(' ')}" fill="#fff" stroke="var(--border)" stroke-width="0.5"/>`;
  // grid rings with labels
  [0.25, 0.5, 0.75, 1].forEach((f,fi) => {
    const r = maxR*f;
    let pts = [];
    for(let i=0;i<n;i++) pts.push(polar(startAngle+i*angleStep, r).join(','));
    const isOuter = f === 1;
    const isMid = f === 0.5;
    svg += `<polygon points="${pts.join(' ')}" fill="none" stroke="${isMid?'#a8a29e':'var(--border)'}" stroke-width="${isOuter?'1':isMid?'1':'0.5'}" ${!isOuter&&!isMid?'stroke-dasharray="2,3"':''}/>`;
    if (isMid || isOuter) {
      const lv = isMid ? '1' : '2';
      svg += `<text x="${cx+3}" y="${cy - r - 2}" font-size="8" fill="#d6d3d1" font-family="var(--font-body)" font-weight="300">${lv}</text>`;
    }
  });
  // spokes + labels
  for(let i=0;i<n;i++) {
    const [x,y] = polar(startAngle+i*angleStep, maxR);
    svg += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--border)" stroke-width="0.4"/>`;
    const labelR = maxR + (hasGroups ? 8 : 28);
    const [lx,ly] = polar(startAngle+i*angleStep, labelR);
    const lines = labels[i].split('\n');
    const fontSize = n > 16 ? 6.5 : n > 12 ? 7 : 8;
    lines.forEach((line, li) => {
      const yOff = ly + (li - (lines.length-1)/2) * (fontSize + 1.5);
      svg += `<text x="${lx}" y="${yOff}" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}" fill="var(--text-muted)" font-family="var(--font-body)" font-weight="500">${line}</text>`;
    });
  }
  // data polygon + hoverable dots
  if (hasData) {
    let pts = [];
    for(let i=0;i<n;i++) {
      const r = (values[i]/2)*maxR;
      pts.push(polar(startAngle+i*angleStep, r).join(','));
    }
    svg += `<polygon points="${pts.join(' ')}" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="1.5"/>`;
    for(let i=0;i<n;i++) {
      const r = (values[i]/2)*maxR;
      const [x,y] = polar(startAngle+i*angleStep, r);
      const label = labels[i].replace(/\n/g,' ');
      const tipId = containerId+'_'+i;
      window['_tip_'+tipId] = `<b>${label}</b>: ${values[i].toFixed(1)} / 2${rawScores[i] ? '<br><span style="opacity:0.7">'+rawScores[i]+'</span>' : ''}`;
      let dotColor = color;
      if (hasGroups) { const g = groups.find(g => i >= g.from && i <= g.to); if (g) dotColor = g.color; }
      svg += `<circle cx="${x}" cy="${y}" r="${values[i]>0?5:2.5}" fill="${values[i]>0?dotColor:'var(--border)'}" style="cursor:pointer" onmouseenter="showRadarTip(event,'${tipId}')" onmouseleave="hideRadarTip()"/>`;
    }
  }
  svg += `</svg>`;
  el.innerHTML = svg;
}

function showRadarTip(e, tipId) {
  const tip = document.getElementById('radarTip');
  tip.innerHTML = window['_tip_'+tipId] || tipId;
  tip.style.display = 'block';
  tip.style.left = (e.clientX + 14) + 'px';
  tip.style.top = (e.clientY - 12) + 'px';
}
function hideRadarTip() {
  document.getElementById('radarTip').style.display = 'none';
}

// bMSE own radar: direct observed dimensions, before outcome/construct inference.
const BMSE_MAP = {
  'Conciencia': [{id:'NC.conciencia'}],
  'Regulación\nEmocional': [{id:'E.regulación'}],
  'Arousal': [{id:'G.arousal'}],
  'Sueño-\nRitmo': [
    {id:'G.sueno-ritmo'},
    {id:'G.sueno-insomnio',tooltipOnly:true},
    {id:'G.sueno-necesidad-reducida',tooltipOnly:true}
  ],
  'Apetito-\nIngesta': [{id:'G.apetito'}],
  'Coherencia\nGlobal': [{id:'G.coherencia'}],
  'Interocepción': [{id:'G.interocepcion'}],
  'Expresividad\nComunicativa': [{id:'F1.expresividad'}],
  'Velocidad\nPsicomotora': [{id:'F2.velocidad'}],
  'Integración\nSensorial': [{id:'F2.sensorial'}],
  'Experiencia del\nPensamiento': [{id:'F4.experiencia'}],
  'Convicción\nde Creencia': [{id:'F4.contenido'}],
  'Regulación\nAtencional': [{id:'F5.regulación'}],
  'Drive\nMotivacional': [{id:'F3.drive'}],
  'Anticipación\nHedónica': [{id:'F3.anticipación'}],
  'Tono\nHedónico': [{id:'F3.tono'}],
  'Amenaza /\nVigilancia': [{id:'F6.amenaza'}],
  'Error de\nPredicción': [{id:'F6.frustración'}],
  'Ánimo\nMeta / Loss': [
    {id:'F6.animo-meta'},
    {id:'F6.loss-depresivo',tooltipOnly:true},
    {id:'F6.loss-ansioso',tooltipOnly:true}
  ],
  'Auto-\nevaluación': [{id:'F6.autoevaluación'}],
  'Prospectiva /\nFuturo': [{id:'F6.desesperanza'}],
  'Testing de\nRealidad': [{id:'F7.testing'}],
  'Coherencia\nAutobiográfica': [{id:'F7.coherencia-autobiografica'}],
  'Lectura\nInterna': [{id:'F7.auto-mentalización'}],
  'Self /\nPresentación': [{id:'F7.self-integracion'}],
  'Mentalización\ndel Otro': [{id:'F7.mentalización-otro'}]
};

const BMSE_GROUPS = [
  {name:'Global',from:0,to:4,color:'#ab9c80'},
  {name:'Psicomotricidad',from:5,to:8,color:'#16a34a'},
  {name:'Pensamiento',from:9,to:11,color:'#7c3aed'},
  {name:'Hedónico',from:12,to:14,color:'#ea580c'},
  {name:'Valencia Negativa',from:15,to:19,color:'#dc2626'},
  {name:'Mentalización',from:20,to:25,color:'#0891b2'}
];
const RDOC_MAP = {
  // ── Negative Valence Systems ──
  'Acute Threat\n(fear)': [{id:'G.arousal',pole:'pos',visual:'activation',w:0.35},{id:'NC.conciencia',abs:true,w:0.2}],
  'Potential Threat\n(anxiety)': [{id:'F6.amenaza',pole:'pos',visual:'activation',w:0.85},{id:'F6.amenaza',inv:true,visual:'deactivation',w:0.35},{id:'F6.loss-ansioso',inv:true,visual:'activation'},{id:'F4.contenido-preocupacion',pathValue:1,visual:'activation',w:0.55},{id:'F4.contenido-obsesion',pathValue:1,visual:'activation',w:0.45},{id:'G.arousal',pole:'pos',visual:'activation',w:0.35}],
  'Sustained\nThreat': [{id:'F6.amenaza',pole:'pos',visual:'activation'},{id:'F6.amenaza',inv:true,visual:'deactivation',w:0.35},{id:'F6.desesperanza',inv:true,visual:'activation'},{id:'G.arousal',pole:'pos',visual:'activation'}],
  'Frustrative\nNonreward': [{id:'F6.frustración',pole:'pos',visual:'activation'},{id:'F6.frustración',inv:true,visual:'deactivation',w:0.65},{id:'FUN.psp_disruptivas',pole:'pos',visual:'activation',w:0.35},{id:'FUN.psp_disruptivas_hetero',pole:'pos',visual:'activation',w:0.55},{id:'FUN.oas_hetero_total',scaleMax:28,minPath:0.01,visual:'activation',w:0.45},{id:'P2.afiliación',inv:true,pole:'neg',visual:'activation',w:0.45}],
  'Loss': [{id:'F6.loss-depresivo',inv:true,visual:'activation'},{id:'F6.loss-ansioso',inv:true,visual:'activation'},{id:'F6.animo-meta',inv:true,visual:'activation',w:0.65},{id:'F6.frustración',inv:true,visual:'deactivation',w:0.35},{id:'F6.desesperanza',inv:true,visual:'activation',w:0.7},{id:'F6.autoevaluación',inv:true,visual:'activation',w:0.6},{id:'F3.tono',inv:true,visual:'activation',w:0.55},{id:'F4.contenido-rumiacion',pathValue:1,visual:'activation',w:0.55},{id:'FUN.psp_relaciones',inv:true,visual:'activation',w:0.45},{id:'FUN.psp_disruptivas_auto',inv:true,visual:'activation',w:0.55},{id:'FUN.oas_auto_total',scaleMax:12,minPath:0.01,visual:'activation',w:0.35}],
  // ── Positive Valence Systems ──
  'Reward\nResponsiveness': [{id:'F3.tono',abs:true},{id:'F6.animo-meta',pole:'pos',w:0.5}],
  'Reward\nAnticipation': [{id:'F3.anticipación',abs:true}],
  'Reward\nValuation': [{id:'F3.tono',abs:true},{id:'F3.anticipación',abs:true},{id:'F6.desesperanza',abs:true},{id:'F6.autoevaluación',pole:'pos',w:0.35}],
  'Effort\nValuation': [{id:'F3.drive',abs:true},{id:'FUN.psp_utiles',pole:'neg',abs:true,w:0.5},{id:'FUN.psp_utiles',pole:'pos',w:0.5}],
  'Approach\nMotivation': [{id:'F3.drive',abs:true},{id:'F3.anticipación',abs:true},{id:'FUN.psp_utiles',pole:'neg',abs:true,w:0.5},{id:'FUN.psp_utiles',pole:'pos',w:0.5}],
  // ── Cognitive Systems ──
  'Attention': [{id:'F5.regulación',abs:true},{id:'NC.conciencia',abs:true,w:0.25}],
  'Perception': [{id:'F2.sensorial',abs:true},{id:'F2.sensorial-auditiva',pathValue:1,w:0.55},{id:'F2.sensorial-visual',pathValue:1,w:0.55},{id:'F2.sensorial-somatico-tactil',pathValue:1,w:0.55},{id:'F2.sensorial-olfatorio-gustativo',pathValue:1,w:0.55},{id:'NC.clock',abs:true,w:0.35}],
  'Language /\nFluency': [{id:'NC.fluencia',inv:true}],
  'Declarative\nMemory': [{id:'NC.recall',inv:true},{id:'F7.coherencia-autobiografica',abs:true,w:0.75}],
  'Working\nMemory': [{id:'NC.digit',inv:true}],
  'Cognitive\nControl': [{id:'F5.regulación',abs:true},{id:'F7.testing',abs:true,w:0.55},{id:'G.coherencia',abs:true,w:0.55},{id:'F4.contenido-obsesion',pathValue:1,visual:'deactivation',w:0.55},{id:'F4.contenido-rumiacion',pathValue:1,visual:'deactivation',w:0.35},{id:'F4.contenido-sobrevalorada',pathValue:1,visual:'deactivation',w:0.55},{id:'F4.contenido-creencia-inusual',pathValue:1,visual:'deactivation',w:0.65},{id:'F4.contenido-extrema-sobrevalorada',pathValue:2,visual:'deactivation',w:0.8},{id:'F4.contenido-delusion',pathValue:2,visual:'deactivation',w:0.9},{id:'FUN.psp_autocuidado_rituales',pole:'pos',visual:'activation',w:0.45},{id:'FUN.psp_autocuidado',pole:'pos',w:0.25},{id:'NC.tmt',inv:true},{id:'NC.clock',abs:true,w:0.55},{id:'J.juicio',inv:true,w:1.0},{id:'NM.luria',inv:true,w:0.35},{id:'NM.alternancia',inv:true,w:0.35},{id:'F7.coherencia-autobiografica',pole:'pos',w:0.5},{id:'E.regulación',inv:true,w:0.6}],
  // ── Social Processes ──
  'Affiliation\n& Attachment': [{id:'P2.afiliación',abs:true},{id:'P1.dominancia',abs:true,w:0.45},{id:'F1.expresividad'},{id:'FUN.psp_relaciones',abs:true,w:0.75}],
  'Social\nCommunication': [{id:'F1.expresividad'},{id:'F7.self-integracion',pole:'pos',w:0.5},{id:'P1.dominancia',abs:true,w:0.65},{id:'P2.afiliación',abs:true,w:0.6}],
  'Self\nKnowledge': [{id:'F7.auto-mentalización',abs:true},{id:'F7.self-integracion',abs:true,w:1.1},{id:'F6.autoevaluación',abs:true,w:0.5},{id:'F4.contenido-extrema-sobrevalorada',pathValue:2,w:0.85},{id:'F4.contenido-delusion',pathValue:2,w:0.65},{id:'F7.coherencia-autobiografica',pole:'neg',inv:true,w:0.75},{id:'I.insight',inv:true,w:1.0},{id:'E.egodistonia',abs:true,w:0.6}],
  'Other\nUnderstanding': [{id:'F7.mentalización-otro',abs:true}],
  // ── Arousal / Regulatory Systems ──
  'Arousal': [{id:'G.arousal',abs:true},{id:'NC.conciencia',abs:true,w:0.45},{id:'E.regulación',abs:true,w:0.4}],
  'Circadian\nRhythms': [{id:'G.sueno-ritmo'},{id:'G.sueno-insomnio',pole:'pos',w:0.75},{id:'G.sueno-necesidad-reducida',pole:'pos',w:0.75}],
  'Sleep-\nWakefulness': [{id:'G.sueno-ritmo',inv:true,pole:'neg',w:0.8},{id:'G.sueno-insomnio',pole:'pos',w:1.0},{id:'G.sueno-necesidad-reducida',pole:'pos',w:1.0}],
  'Interoceptive\nSensory': [{id:'G.interocepcion',abs:true},{id:'G.apetito',abs:true,w:0.5},{id:'FUN.psp_autocuidado_somatico',pole:'pos',w:0.55},{id:'FUN.psp_autocuidado_alimentacion',pole:'pos',w:0.35},{id:'FUN.psp_autocuidado',inv:true,pole:'neg',w:0.35}],
  // ── Sensorimotor Systems ──
  'Motor\nAction': [{id:'F2.velocidad',abs:true},{id:'NM.luria',inv:true},{id:'NM.alternancia',inv:true},{id:'NM.parakinesia_iterativa',inv:true,w:0.55},{id:'NM.parakinesia_odd',inv:true,w:0.55},{id:'NM.parakinesia_volicional',inv:true,w:0.65},{id:'NM.acatisia',abs:true,visual:'activation',w:0.45},{id:'NM.parkinsonismo',inv:true,w:0.65},{id:'NM.tremor',abs:true,visual:'activation',w:0.45},{id:'NM.diskinesia',abs:true,visual:'activation',w:0.45}],
  'Agency\n& Ownership': [{id:'F7.auto-mentalización',abs:true},{id:'F7.self-integracion',abs:true,w:0.8},{id:'F4.experiencia',abs:true},{id:'NM.parakinesia_volicional',inv:true,w:0.6},{id:'F4.contenido-creencia-inusual',pathValue:1,w:0.45},{id:'F4.contenido-delusion',pathValue:2,w:0.55},{id:'J.juicio',inv:true,w:0.8},{id:'I.insight',inv:true,w:0.8},{id:'FUN.psp_autocuidado',abs:true,w:0.45},{id:'FUN.psp_autocuidado_otro',pole:'pos',w:0.35},{id:'F7.coherencia-autobiografica',pole:'neg',inv:true,w:0.5}],
  'Sensorimotor\nDynamics': [{id:'F2.sensorial',abs:true},{id:'NM.dismetria',inv:true},{id:'NM.tandem',inv:true},{id:'NM.parakinesia_iterativa',inv:true,w:0.45},{id:'NM.parakinesia_odd',inv:true,w:0.55},{id:'NM.tic',abs:true,visual:'activation',w:0.4},{id:'NM.distonia',abs:true,visual:'activation',w:0.45},{id:'NM.acatisia',abs:true,visual:'activation',w:0.35},{id:'NM.diskinesia',abs:true,visual:'activation',w:0.4},{id:'NM.parkinsonismo',inv:true,w:0.4},{id:'NM.tremor',abs:true,visual:'activation',w:0.4}]
};
const RDOC_GROUPS = [
  {name:'Negative Valence',from:0,to:4,color:'#dc2626'},
  {name:'Positive Valence',from:5,to:9,color:'#16a34a'},
  {name:'Cognitive Systems',from:10,to:15,color:'#ea580c'},
  {name:'Social Processes',from:16,to:19,color:'#0891b2'},
  {name:'Arousal / Regulatory',from:20,to:23,color:'#7c3aed'},
  {name:'Sensorimotor',from:24,to:26,color:'#ab9c80'}
];
const HITOP_GROUPS = [
  {name:'Personality Function',from:0,to:1,color:'#8f3f71'},
  {name:'Internalizante',from:2,to:5,color:'#0891b2'},
  {name:'Patología alimentaria',from:6,to:6,color:'#c2410c'},
  {name:'Somatomorfo',from:7,to:9,color:'#ea580c'},
  {name:'Trastorno pensamiento',from:10,to:13,color:'#7c3aed'},
  {name:'Psicopatología Motora',from:14,to:16,color:'#0f766e'},
  {name:'Neurodesarrollo / Cognición',from:17,to:22,color:'#57534e'},
  {name:'Externalizante',from:23,to:27,color:'#dc2626'},
  {name:'Manía / Bajo desapego',from:28,to:29,color:'#16a34a'}
];

const HITOP_FEEDER_ROLES = {
  'LPFS Self': {central:['F7.self-integracion','F7.auto-mentalización'], bridge:['J.juicio']},
  'LPFS Interpersonal': {central:['F7.mentalización-otro','FUN.psp_relaciones'], bridge:['P2.afiliación']},
  'Malestar': {central:['F6.loss-depresivo','F6.loss-ansioso'], bridge:['F6.desesperanza','F6.autoevaluación','FUN.oas_auto_total'], complementary:['F3.tono','F3.drive','G.apetito','E.egodistonia','E.regulación']},
  'Miedo': {central:['F6.amenaza'], bridge:['G.arousal'], complementary:['G.interocepcion','F7.mentalización-otro']},
  'Aislamiento Social': {central:['FUN.psp_relaciones','P2.afiliación'], bridge:['F1.expresividad','F7.mentalización-otro'], complementary:['F3.tono']},
  'Sueño desreg. + Trauma': {central:['G.sueno-insomnio','F7.coherencia-autobiografica'], bridge:['F6.amenaza','G.arousal'], complementary:['G.sueno-ritmo']},
  'Patología Alimentaria': {central:['F3.tono','FUN.psp_autocuidado_alimentacion'], bridge:['G.interocepcion']},
  'Síntomas Somáticos': {central:['G.interocepcion'], bridge:['FUN.psp_autocuidado_somatico'], complementary:['F2.sensorial']},
  'Sueño Desregulado': {central:['G.sueno-ritmo','G.sueno-insomnio'], bridge:['G.sueno-necesidad-reducida','G.arousal']},
  'Alimentación Desregulada': {central:['FUN.psp_autocuidado_alimentacion','G.apetito'], bridge:['F3.tono','G.interocepcion']},
  'Psicosis Positiva': {central:['F7.testing','F4.contenido','F4.experiencia'], bridge:['I.insight']},
  'Experiencias Disociativas': {central:['F7.coherencia-autobiografica','F7.auto-mentalización','F7.self-integracion'], bridge:['NC.conciencia'], complementary:['G.arousal']},
  'Pérdida control corporal': {central:['NM.luria','NM.dismetria','NM.alternancia','NM.tandem','NM.parkinsonismo']},
  'Sínt. físicos incontrolables': {central:['NM.tic','NM.diskinesia','NM.distonia','NM.acatisia','NM.parkinsonismo','NM.tremor'], bridge:['F2.sensorial']},
  'Hiper Motora': {central:['F2.velocidad'], bridge:['G.arousal','NM.acatisia']},
  'Hipo Motora': {central:['F2.velocidad'], bridge:['F1.expresividad','NM.parkinsonismo']},
  'Parakinesia': {central:['NM.parakinesia_iterativa','NM.parakinesia_odd','NM.parakinesia_volicional']},
  'Sensación alt. + control atenc.': {central:['F5.regulación','F2.sensorial'], bridge:['G.interocepcion']},
  'Deterioro Neurocognitivo': {central:['NC.fluencia','NC.digit','NC.tmt','NC.clock','NC.recall','J.juicio'], bridge:['I.insight','NM.luria','NM.alternancia'], complementary:['NM.dismetria','NM.tandem']},
  'Dificultades Organización': {central:['G.coherencia','F5.regulación'], bridge:['FUN.psp_autocuidado','FUN.psp_utiles']},
  'Olvido': {central:['NC.recall','NC.digit'], bridge:['F7.coherencia-autobiografica']},
  'Comportamiento Ritualizado': {central:['FUN.psp_autocuidado_rituales','F7.testing','G.coherencia'], bridge:['F5.regulación'], complementary:['FUN.psp_autocuidado_otro']},
  'Dificultades Comunicación social': {central:['F1.expresividad','F7.mentalización-otro'], bridge:['G.coherencia','P2.afiliación']},
  'Afecto neg. externalizado': {central:['F6.frustración','FUN.oas_hetero_total'], bridge:['P2.afiliación']},
  'Antagonismo': {central:['F6.autoevaluación','P1.dominancia'], bridge:['F7.mentalización-otro','FUN.oas_hetero_total']},
  'Comportamiento Antisocial': {central:['FUN.oas_hetero_total'], bridge:['P2.afiliación','F6.frustración'], complementary:['F3.drive']},
  'Desinhibición': {central:['F3.drive','F2.velocidad'], bridge:['F6.amenaza','FUN.psp_utiles','FUN.oas_hetero_total'], complementary:['E.regulación']},
  'Insensibilidad': {central:['F7.mentalización-otro','F1.expresividad'], bridge:['F6.amenaza']},
  'Manía': {central:['F6.animo-meta','G.sueno-necesidad-reducida','F3.drive','F2.velocidad'], bridge:['F3.anticipación','G.arousal','FUN.psp_utiles','FUN.psp_relaciones','P1.dominancia','P2.afiliación'], complementary:['E.egodistonia','E.regulación']},
  'Desapego': {central:['FUN.psp_relaciones','F1.expresividad','P2.afiliación'], bridge:['FUN.psp_utiles','F3.drive','F3.tono','F7.mentalización-otro','P1.dominancia'], complementary:['G.coherencia','E.regulación']}
};

function cleanHiTOPLabel(label) {
  return String(label || '').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
}

function hitopFeederRole(subfactorLabel, feeder, index=0) {
  const cfg = HITOP_FEEDER_ROLES[cleanHiTOPLabel(subfactorLabel)] || null;
  if (cfg?.central?.includes(feeder.id)) return 'central';
  if (cfg?.bridge?.includes(feeder.id)) return 'bridge';
  if (cfg?.complementary?.includes(feeder.id)) return 'complementary';
  if (feeder.role) return feeder.role;
  const w = feeder.w ?? 1;
  if (w >= 0.85 || index === 0) return 'central';
  if (w >= 0.55) return 'bridge';
  return 'complementary';
}

function hitopRoleWeight(role) {
  if (role === 'central') return 1.35;
  if (role === 'bridge') return 1.0;
  return 0.55;
}

function hitopRoleLabel(role) {
  if (role === 'central') return 'nodo central';
  if (role === 'bridge') return 'nodo puente';
  return 'nodo complementario';
}

function hitopPathMagnitude(signal) {
  if (!signal?.evaluated || !signal.signal) return 0;
  const forcedPath = feederForcedPathValue(signal.dim || {});
  if (forcedPath !== null) return Math.max(0, Math.min(2, forcedPath));
  const scaledPath = feederScaledPathValue(signal.dim || {}, signal.raw);
  if (scaledPath !== null) return Math.max(0, Math.min(2, scaledPath));
  if (signal.dim?.id === 'F4.contenido') return signal.raw >= 4 ? 2 : signal.raw >= 3 ? 1 : 0;
  return Math.max(0, Math.min(2, signal.pathVal || 0));
}

function calcHiTOPActivation(feederSignals) {
  const signals = (feederSignals || []).filter(f => f.evaluated && f.signal);
  if (!signals.length) return {status:'none', score:0, central:0, bridge:0, complementary:0};
  const byRole = role => signals.filter(f => f.role === role);
  const maxRole = role => Math.max(0, ...byRole(role).map(hitopPathMagnitude));
  const centralSignals = byRole('central');
  const centralMax = maxRole('central');
  const bridgeMax = maxRole('bridge');
  const compCount = byRole('complementary').length;
  const centralCount = centralSignals.length;
  const wSum = signals.reduce((sum, f) => sum + (f.roleWeight || 1), 0);
  const weighted = wSum ? signals.reduce((sum, f) => sum + hitopPathMagnitude(f) * (f.roleWeight || 1), 0) / wSum : 0;
  const score = Math.max(0, Math.min(2, Math.round(weighted * 10) / 10));
  let status = 'support';
  if (centralMax >= 2 || (centralMax >= 1 && score >= 1.6) || (bridgeMax >= 2 && compCount >= 2)) status = 'extreme';
  else if (centralCount >= 2 && centralMax >= 1) status = 'convergent';
  else if (centralMax >= 1 || (bridgeMax >= 1 && compCount >= 1) || compCount >= 2) status = 'signal';
  return {
    status,
    score,
    central:centralCount,
    bridge:byRole('bridge').length,
    complementary:compCount
  };
}

function hitopActivationTooltip(label, activation) {
  const clean = cleanHiTOPLabel(label);
  if (!activation || activation.status === 'none') return clean;
  if (activation.status === 'extreme') return `${clean} · señal extrema`;
  if (activation.status === 'convergent') return `${clean} · convergencia central: varios nodos centrales leves, sin extremo`;
  if (activation.status === 'signal') return `${clean} · señal central`;
  return `${clean} · apoyo complementario`;
}

function renderRadarBMSE() { drawRadarBipolar('radarBMSE', BMSE_MAP, 'Perfil bMSE', '#0891b2', BMSE_GROUPS, {raw:true}); }

function drawRadarBipolar(containerId, domainMap, title, color, groups, opts={}) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const rawMode = !!opts.raw;
  const labels = Object.keys(domainMap);
  const n = labels.length;
  const labelShort = {
    'Conciencia':'Conciencia',
    'Regulación Emocional':'Reg. emoc.',
    'Velocidad Psicomotora':'Velocidad',
    'Integración Sensorial':'Sensorial',
    'Regulación Atencional':'Atención',
    'Drive Motivacional':'Drive',
    'Anticipación Hedónica':'Anticipación',
    'Tono Hedónico':'Tono',
    'Experiencia del Pensamiento':'Experiencia',
    'Convicción de Creencia':'Convicción',
    'Sensibilidad a Amenaza':'Amenaza',
    'Amenaza / Vigilancia':'Amenaza',
    'Tolerancia a Frustración':'Frustración',
    'Error de Predicción':'Error pred.',
    'Ánimo Meta':'Ánimo',
    'Ánimo Meta / Loss':'Ánimo',
    'Loss Depresivo':'Loss Dep.',
    'Loss Ansioso':'Loss Anx.',
    'Auto-evaluación':'Autoeval.',
    'Visión Prospectiva':'Prospectiva',
    'Prospectiva / Futuro':'Prospectiva',
    'Testing de Realidad':'Realidad',
    'Coherencia Autobiográfica':'Autobio.',
    'Auto-Mentalización':'Auto-ment.',
    'Lectura Interna':'Auto-ment.',
    'Self Integrado':'Self',
    'Self / Presentación':'Self/pres.',
    'Mentalización del Otro':'Otro',
    'Coherencia Global':'Coherencia',
    'Sueño-Ritmo':'Sueño',
    'Expresividad Comunicativa':'Expresividad',
    'Acute Threat (fear)':'Fear',
    'Potential Threat (anxiety)':'Anxiety',
    'Sustained Threat':'Sustained',
    'Frustrative Nonreward':'Nonreward',
    'Loss':'Loss',
    'Reward Responsiveness':'Reward',
    'Reward Anticipation':'Anticipation',
    'Reward Valuation':'Valuation',
    'Effort Valuation':'Effort',
    'Approach Motivation':'Approach',
    'Attention':'Attention',
    'Perception':'Perception',
    'Language / Fluency':'Fluency',
    'Declarative Memory':'Memory',
    'Working Memory':'Work Mem.',
    'Cognitive Control':'Control',
    'Affiliation & Attachment':'Affiliation',
    'Social Communication':'Social Comm.',
    'Self Knowledge':'Self',
    'Other Understanding':'Others',
    'Arousal':'Arousal',
    'Circadian Rhythms':'Circadian',
    'Sleep-Wakefulness':'Sleep',
    'Interoceptive Sensory':'Interoception',
    'Motor Action':'Motor',
    'Agency & Ownership':'Agency',
    'Sensorimotor Dynamics':'Sensorimotor'
  };
  function cleanLabel(label) { return label.replace(/\n/g,' ').replace(/-\s+/g,'-').replace(/\s+/g,' ').trim(); }
  function compactLabel(label) { return labelShort[cleanLabel(label)] || cleanLabel(label); }
  function labelLines(label) {
    const text = compactLabel(label);
    if (text.length <= 12) return [text];
    const parts = text.split(/\s+/);
    if (parts.length === 1) return [text];
    const mid = Math.ceil(parts.length / 2);
    return [parts.slice(0, mid).join(' '), parts.slice(mid).join(' ')];
  }
  function fmtSigned(v) {
    if (v === null || v === undefined) return '';
    const rounded = Math.round(v * 10) / 10;
    const body = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
    return rounded > 0 ? '+' + body : body;
  }
  function radarScoreKey(id, raw) { return id === 'F4.contenido' ? String(raw) : fmtSigned(raw); }
  function feederApplies(d) {
    if (!feederGateApplies(d)) return false;
    if (!d.spec) return true;
    const specVal = state[d.id]?.specifiers?.[d.spec];
    if (!specVal) return !d.specRequired;
    return d.specIn ? d.specIn.includes(specVal) : !!specVal;
  }
  function feederValue(d) {
    if (!feederApplies(d)) return null;
    const raw = resolveFeederRaw(d);
    if (raw === null || raw === undefined) return null;
    if (!feederRawAllowed(d, raw)) return null;
    if (!rawMode) {
      if (d.pole === 'neg' && raw >= 0) return null;
      if (d.pole === 'pos' && raw <= 0) return null;
      if (d.inv && raw >= 0) return null;
      const gatePath = feederForcedPathValue(d);
      const scaledPath = feederScaledPathValue(d, raw);
      if (d.minPath && Math.abs(gatePath !== null ? gatePath : (scaledPath !== null ? scaledPath : raw)) < d.minPath) return null;
    }
    const value = rawMode ? rawRadarValue(d, raw) : radarVisualValue(d, raw);
    const priority = !rawMode && isPrioritySource(d.id);
    return {raw, value, weight:(d.w || 1) * (priority ? priorityWeightForSource(d.id) : 1), priority};
  }
  function rawRadarValue(d, raw) {
    if (d.id === 'F4.contenido') return raw - 2;
    return raw;
  }
  function radarVisualValue(d, raw) {
    const forcedPath = feederForcedPathValue(d);
    if (forcedPath !== null) {
      if (d.visual === 'activation') return Math.abs(forcedPath);
      if (d.visual === 'deactivation') return -Math.abs(forcedPath);
      return forcedPath;
    }
    const scaledPath = feederScaledPathValue(d, raw);
    if (scaledPath !== null) {
      if (d.visual === 'deactivation') return -Math.abs(scaledPath);
      return Math.abs(scaledPath);
    }
    if (d.id === 'F4.contenido') return raw - 2;
    if (d.visual === 'activation') return Math.abs(raw);
    if (d.visual === 'deactivation') return -Math.abs(raw);
    if (d.id === 'G.sueno-insomnio') return -Math.abs(raw);
    if (d.id === 'G.sueno-necesidad-reducida') return Math.abs(raw);
    if (d.id === 'G.sueno-ritmo') {
      if (raw < 0) return Math.abs(raw);
      if (raw > 0) {
        const insomnia = stateRawNumber('G.sueno-insomnio');
        const reduced = stateRawNumber('G.sueno-necesidad-reducida');
        const vals = [];
        if (insomnia > 0) vals.push(-Math.abs(insomnia));
        if (reduced > 0) vals.push(Math.abs(reduced));
        return strongestSignedScore(vals) ?? raw;
      }
    }
    return raw;
  }
  const signedValues = labels.map(l => {
    const dims = domainMap[l];
    const vals = dims.filter(d => !d.tooltipOnly).map(feederValue).filter(Boolean);
    if (!vals.length) return null;
    const totalWeight = vals.reduce((sum, f) => sum + f.weight, 0);
    const weighted = vals.reduce((sum, f) => sum + f.value * f.weight, 0);
    const mean = totalWeight ? weighted / totalWeight : 0;
    return Math.max(-2, Math.min(2, Math.round(mean * 10) / 10));
  });
  const rawScores = labels.map(l => {
    const dims = domainMap[l];
    return dims.map(d => {
      const fv = feederValue(d);
      if (!fv) return null;
      const raw = fv.raw;
      const scoreKey = radarScoreKey(d.id, raw);
      const dimObj = findScoreDefinition(d.id);
      const construct = getConstructEntry(d.id, raw);
      const nivel = construct?.label || dimObj?.details?.[scoreKey]?.nivel || dimObj?.scores?.[scoreKey] || '';
      const name = dimObj?.label || d.id.split('.').pop();
      const pri = fv.priority ? ' [prioridad]' : '';
      return `${name} (${scoreKey})${pri}: ${nivel}`;
    }).filter(Boolean).join('<br>');
  });
  const hasData = signedValues.some(v => v !== null);
  const hasGroups = groups && groups.length > 0;
  const outerPad = hasGroups ? 140 : 92;
  const size = Math.max(720, n * 31) + (hasGroups ? 72 : 0);
  const cx = size/2, cy = size/2, maxR = size/2 - outerPad;
  const angleStep = (2*Math.PI)/n;
  const startAngle = -Math.PI/2;
  function polar(angle, r) { return [cx + r*Math.cos(angle), cy + r*Math.sin(angle)]; }
  function arcPath(r, a1, a2) {
    const [x1,y1] = polar(a1,r);
    const [x2,y2] = polar(a2,r);
    const large = (a2-a1) > Math.PI ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
  }
  const minR = maxR * 0.12;
  function scoreToR(score) { return ((score + 2) / 4) * (maxR - minR) + minR; }

  let svg = `<div style="text-align:center;margin-bottom:2px;font-family:var(--font-display);font-size:20px">${title}</div>`;
  svg += `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display:block;margin:0 auto;overflow:visible">`;

  // group arcs — closed colored ring + legible outer labels
  if (hasGroups) {
    const arcR = maxR + 66;
    // continuous faint track so the ring always reads as a closed circle
    svg += `<circle cx="${cx}" cy="${cy}" r="${arcR}" fill="none" stroke="#3a2d1f" stroke-width="5.4"/>`;
    const gap = 0.012;
    groups.forEach(g => {
      const a1 = startAngle + g.from * angleStep - angleStep/2 + gap;
      const a2 = startAngle + g.to * angleStep + angleStep/2 - gap;
      svg += `<path d="${arcPath(arcR, a1, a2)}" fill="none" stroke="${g.color}" stroke-width="5.2" stroke-linecap="butt" opacity="0.85"/>`;
      const midAngle = (a1+a2)/2;
      const [tx,ty] = polar(midAngle, arcR + 28);
      const words = g.name.split(/[\s\/]+/);
      words.forEach((w,wi) => {
        svg += `<text x="${tx}" y="${ty + (wi-(words.length-1)/2)*9.6}" text-anchor="middle" dominant-baseline="middle" font-size="9.4" fill="${g.color}" font-family="var(--font-body)" font-weight="850" letter-spacing="0.02em">${w}</text>`;
      });
    });
  }

  // 5 rings: -2, -1, 0, +1, +2
  const ringLabels = ['-2','-1','0','+1','+2'];
  // light fill bands for reference
  const zeroR = scoreToR(0);
  const neg1R = scoreToR(-1);
  const pos1R = scoreToR(1);
  const outerR = scoreToR(2);
  // inner shaded band (-1 to +1 = "normal range")
  let bandPts1 = [], bandPts2 = [];
  for(let i=0;i<n;i++) { bandPts1.push(polar(startAngle+i*angleStep, neg1R).join(',')); }
  for(let i=n-1;i>=0;i--) { bandPts2.push(polar(startAngle+i*angleStep, pos1R).join(',')); }
  svg += `<polygon points="${bandPts1.join(' ')} ${bandPts2.join(' ')}" fill="rgba(236,224,203,0.07)" stroke="none"/>`;

  ringLabels.forEach((rl, ri) => {
    const r = scoreToR(ri - 2);
    if (r <= 0) return;
    const isZero = ri === 2;
    const isExtreme = ri === 0 || ri === 4;
    // true closed circle (was a faceted polygon)
    svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${isZero ? '#8a7340' : isExtreme ? '#5a4a31' : '#3f3120'}" stroke-width="${isZero ? '1.15' : isExtreme ? '0.75' : '0.45'}" ${isZero ? '' : 'stroke-dasharray="3,3"'}/>`;
    svg += `<text x="${cx+4}" y="${cy - r - 3}" font-size="9.4" fill="${isZero ? '#d8c194' : '#8f7d5e'}" font-family="var(--font-body)" font-weight="${isZero?'700':'500'}">${rl}</text>`;
  });

  // spokes + PILL labels (cada dimensión = una pill opaca; apilan limpio al solaparse)
  for(let i=0;i<n;i++) {
    const [x,y] = polar(startAngle+i*angleStep, maxR);
    svg += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--border)" stroke-width="0.32" opacity="0.5"/>`;
    const labelR = maxR + (hasGroups ? 36 : 30);
    const [lx,ly] = polar(startAngle+i*angleStep, labelR);
    const lines = labelLines(labels[i]);
    const v = signedValues[i];
    const absV = v === null ? 0 : Math.abs(v);
    const g = groups?.find(g => i >= g.from && i <= g.to);
    const gc = (absV >= 2 && v < 0) ? '#dc2626' : (g?.color || color);
    const active = absV >= 0.5;
    const extreme = absV >= 2;
    const scoreText = active ? fmtSigned(v) : '';
    const fontSize = active ? (n > 22 ? 8.8 : 9.4) : (n > 22 ? 8 : 8.4);
    const fontWeight = extreme ? '680' : active ? '620' : '560';
    // ancho de pill estimado por el renglón más largo (incluye score en el último)
    const lineLens = lines.map((s, li) => s.length + (active && li === lines.length-1 ? scoreText.length + 1.5 : 0));
    const maxLineLen = Math.max(...lineLens);
    const padX = 9, padY = 4.5, lineH = fontSize + 2.5;
    const pillW = Math.ceil(maxLineLen * fontSize * 0.56) + padX*2;
    const pillH = lines.length * lineH + padY*2;
    const pillX = lx - pillW/2, pillY = ly - pillH/2;
    // fondos OPACOS para que las pills se apilen sin transparentarse
    // fondo por SEVERIDAD (|score|): gris → naranja → rojo. Muteados, borde del mismo tono, texto claro.
    const sev = absV >= 1.5 ? 2 : absV >= 0.5 ? 1 : 0;
    const pillFill   = sev===2 ? '#9e2b22' : sev===1 ? '#a86518' : '#000000';
    const pillStroke = sev===2 ? '#b8392f' : sev===1 ? '#bd7322' : '#3f3525';
    const textFill   = sev===2 ? '#ffe9e3' : sev===1 ? '#fff4e8' : '#e6dac4';
    const scoreFill  = textFill;
    svg += `<rect x="${pillX}" y="${pillY}" width="${pillW}" height="${pillH}" rx="${pillH/2}" fill="${pillFill}" stroke="none"/>`;
    lines.forEach((line, li) => {
      const yOff = ly + (li - (lines.length-1)/2) * lineH;
      if (active && li === lines.length-1) {
        svg += `<text x="${lx}" y="${yOff}" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}" font-family="var(--font-body)" font-weight="${fontWeight}" letter-spacing="0.01em"><tspan fill="${textFill}">${line}</tspan><tspan fill="${scoreFill}" font-weight="750"> ${scoreText}</tspan></text>`;
      } else {
        svg += `<text x="${lx}" y="${yOff}" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}" fill="${textFill}" font-family="var(--font-body)" font-weight="${fontWeight}" letter-spacing="0.01em">${line}</text>`;
      }
    });
  }

  // data polygon
  if (hasData) {
    let pts = [];
    let hasAnyPt = false;
    for(let i=0;i<n;i++) {
      const v = signedValues[i];
      const r = v !== null ? scoreToR(v) : scoreToR(0);
      pts.push(polar(startAngle+i*angleStep, r).join(','));
      if (v !== null) hasAnyPt = true;
    }
    if (hasAnyPt) {
      svg += `<polygon points="${pts.join(' ')}" fill="${color}" fill-opacity="0.09" stroke="${color}" stroke-width="1.55" stroke-linejoin="round"/>`;
      svg += `<circle cx="${cx}" cy="${cy}" r="${minR + 8}" fill="#241b11" stroke="#3f3120" stroke-width="0.8"/>`;
      svg += `<text x="${cx}" y="${cy + 3}" text-anchor="middle" font-size="9.5" fill="#a89372" font-family="var(--font-body)" font-weight="700">-2</text>`;
      for(let i=0;i<n;i++) {
        const v = signedValues[i];
        if (v !== null) {
          const r = scoreToR(v);
          const [x,y] = polar(startAngle+i*angleStep, r);
          let dotColor = v === 0 ? '#a8a29e' : v > 0 ? '#7c3aed' : '#dc2626';
          if (groups) { const g = groups.find(g => i >= g.from && i <= g.to); if (g) dotColor = g.color; }
          const label = cleanLabel(labels[i]);
          const tipId = containerId+'_'+i;
          window['_tip_'+tipId] = `<b>${label}</b>: ${fmtSigned(v)}<br><span style="opacity:0.7">${rawScores[i]||''}</span>`;
          const absV = Math.abs(v);
          const dotR = Math.max(3.2, Math.min(6.4, 3.2 + absV * 1.6));
          if (absV >= 1.5 && r > minR + 8) {
            svg += `<circle cx="${x}" cy="${y}" r="${absV >= 2 ? 13 : 9}" fill="${dotColor}" opacity="${absV >= 2 ? '0.24' : '0.14'}" pointer-events="none"/>`;
          }
          const fill = v === 0 ? '#fff' : dotColor;
          const stroke = v === 0 ? '#a8a29e' : '#fff';
          const strokeWidth = absV >= 2 ? 2.7 : 1.6;
          svg += `<circle cx="${x}" cy="${y}" r="${dotR}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" style="cursor:pointer" onmouseenter="showRadarTip(event,'${tipId}')" onmouseleave="hideRadarTip()"/>`;
        }
      }
    }
  }

  svg += `</svg>`;
  el.innerHTML = svg;
}
function renderRadarRDoC() { drawRadarBipolar('radarRDoC', RDOC_MAP, 'Perfil RDoC', '#0891b2', RDOC_GROUPS); }
function findScoreDefinition(id) {
  if (typeof VIRTUAL_SCORE_DEFINITIONS !== 'undefined' && VIRTUAL_SCORE_DEFINITIONS[id]) {
    const v = VIRTUAL_SCORE_DEFINITIONS[id];
    return {label:v.label || id, scores:v.scores || {}, details:v.details || {}};
  }
  for (const d of DIMS) {
    if (d.id === id) return {label:d.title || d.id, scores:d.scores || {}, details:d.details || {}};
    if (d.tests) {
      const t = d.tests.find(test => test.id === id);
      if (t) return {label:t.label || id, scores:t.scores || {}, details:{}};
    }
    if (d.axes) {
      const a = d.axes.find(axis => axis.id === id);
      if (a) {
        const details = id === 'P1.dominancia' ? (d.details_p1 || {}) : (d.details_p2 || {});
        return {label:a.label || id, scores:a.scores || {}, details};
      }
    }
  }
  return {label:id, scores:{}, details:{}};
}
function formatHiTOPRawScore(id, raw) {
  if (id === 'F4.contenido') return String(raw);
  if (id === 'FUN.oas_hetero_total') return `${raw}/28`;
  if (id === 'FUN.oas_auto_total') return `${raw}/12`;
  return (raw > 0 ? '+' : '') + raw;
}
function hitopSeverityLabel(pct) {
  if (pct === 0) return {label:'Sin señal', color:'#16a34a'};
  if (pct <= 50) return {label:'Subclínico', color:'#d97706'};
  if (pct <= 75) return {label:'Elevado', color:'#ea580c'};
  return {label:'Clínico', color:'#dc2626'};
}
// PRD Fase 0 — Per-feeder signal (sin agregación):
// Cada feeder declara dirección patológica. F4.contenido es 'conviction' (0-4 unipolar).
// Otras son bipolares -2..+2 con inv/abs. Sin promedios: invariante 4 "configuraciones, no sumas".

// ─── Pure helpers (extraído de v2) ───
function num(v) { if (v === null || v === undefined || v === 'NE') return null; const n = parseInt(v, 10); return Number.isNaN(n) ? null : n; }
function get(id) { return num(state[id]?.score); }
function getRaw(id) { return state[id]?.score; }
function getSpec(testId, specId) { return state[testId]?.specifiers?.[specId]; }

// ─── Feeder signal (per-feeder, sin agregación) ───
function getFeederSignal(d, contextLabel=null, index=0) {
  const role = contextLabel ? hitopFeederRole(contextLabel, d, index) : (d.role || null);
  const roleWeight = role ? hitopRoleWeight(role) : 1;
  const withRole = signal => ({...signal, role, roleWeight});
  if (!feederGateApplies(d)) {
    return withRole({evaluated:false, ne:false, excluded:true, gateClosed:true, gateLabel:feederGateLabel(d), dim:d});
  }
  if (d.spec) {
    const specVal = state[d.id]?.specifiers?.[d.spec];
    if (!specVal && d.specRequired) return withRole({evaluated:false, ne:false, excluded:true, dim:d});
    if (specVal && d.specIn && !d.specIn.includes(specVal)) return withRole({evaluated:false, ne:false, excluded:true, dim:d});
  }
  const raw = resolveFeederRaw(d);
  const s = state[d.id]?.score;
  if (raw === null || raw === undefined) {
    if (s === 'NE') return withRole({evaluated:false, ne:true, dim:d});
    return withRole({evaluated:false, ne:false, dim:d});
  }
  if (!feederRawAllowed(d, raw)) return withRole({evaluated:false, ne:false, excluded:true, dim:d});
  if (d.pole === 'neg' && raw >= 0) return withRole({evaluated:false, ne:false, excluded:true, dim:d});
  if (d.pole === 'pos' && raw <= 0) return withRole({evaluated:false, ne:false, excluded:true, dim:d});
  let pathVal, sig, extreme;
  const forcedPath = feederForcedPathValue(d);
  if (forcedPath !== null) {
    pathVal = forcedPath;
    sig = pathVal >= 1;
    extreme = pathVal >= 2;
  } else if (d.id === 'F4.contenido') {
    pathVal = raw;
    sig = raw >= 3;
    extreme = raw >= 4;
  } else if (d.inv) {
    pathVal = -raw;
    sig = pathVal >= 1;
    extreme = pathVal >= 2;
  } else if (d.abs) {
    pathVal = Math.abs(raw);
    sig = pathVal >= 1;
    extreme = pathVal >= 2;
  } else {
    const scaledPath = feederScaledPathValue(d, raw);
    pathVal = scaledPath !== null ? scaledPath : raw;
  }
  const minPath = d.minPath || (d.id === 'F4.contenido' ? 3 : 1);
  sig = pathVal >= minPath;
  extreme = d.id === 'F4.contenido' ? pathVal >= 4 : pathVal >= 2;
  return withRole({evaluated:true, ne:false, dim:d, raw, pathVal, signal:sig, extreme});
}

// ─── Capa 2 outcomes (3ST · BVC · PSP · capacidad) ───
function outcomeHasValue(id) {
  const v = state[id]?.score;
  return v !== null && v !== undefined && v !== 'NE';
}

function outcomeSuicidio() {
  const desesp = get('F6.desesperanza');
  const animo = get('F6.animo-meta');
  const drive = get('F3.drive');
  const velo = get('F2.velocidad');
  const autoOas = get('FUN.oas_auto_total');
  // === Pain (3ST): configuración (no max), distingue pico vs carga difusa ===
  // PRD F3: max(.,.,.) colapsa configuración (falla en malestar difuso).
  // PRD F2: declarar dependencia compartida animo-meta entre Pain y FVT.
  const frustracion = get('F6.frustración');
  const amenaza = get('F6.amenaza');
  const animoAsPain = (animo !== null && animo <= -2) ? 2 : 0; // umbral binario heredado
  const painFeeders = [
    { name:'frustración', val: frustracion !== null ? frustracion : 0, label: frustracion !== null ? `frustración=+${frustracion}` : null },
    { name:'amenaza',     val: amenaza !== null ? amenaza : 0,         label: amenaza !== null ? `amenaza=+${amenaza}` : null },
    { name:'animo-meta',  val: animoAsPain,                              label: (animo !== null && animo <= -2) ? `animo-meta=${animo}` : null }
  ];
  const painPico = painFeeders.filter(f => f.val >= 2);
  const painSub  = painFeeders.filter(f => f.val >= 1);
  const dolorPorPico   = painPico.length > 0;
  const dolorPorDifuso = !dolorPorPico && painSub.length >= 2;
  const dolorAlto = dolorPorPico || dolorPorDifuso;
  const dolorTrace = dolorPorPico
    ? `dolor por intensidad (${painPico.map(f => f.label).join(', ')})`
    : dolorPorDifuso
      ? `dolor por carga difusa (${painSub.map(f => f.label).join(' + ')})`
      : 'dolor sub-umbral';
  // F2: animo-meta también alimentará FVT más abajo; recordar para trazar dependencia.
  const animoFedPain = dolorAlto && (animo !== null && animo <= -2);
  // === Connection (3ST): thwarted belongingness ===
  const conexion = pspChannelScore('FUN.psp_relaciones', 'neg'); // negativo = aislamiento
  const soporte = getRaw('EXT.soporte');
  const desconexionGrave = (conexion !== null && conexion <= -2) || soporte === 'AUS';
  // === Capability (3ST): habituación a daño ===
  const intento = getRaw('EXT.intento_previo');
  const medios = getRaw('EXT.medios');
  const plan = getRaw('EXT.plan_suicida');
  const capabilityScore =
    (intento === 'RECIENTE' ? 2 : intento === 'LEJANO' ? 1 : 0) +
    (autoOas !== null && autoOas >= 9 ? 2 : autoOas !== null && autoOas > 0 ? 1 : 0) +
    (medios === 'SI' ? 1 : 0);
  const capabilityAlta = capabilityScore >= 2;

  let signals = [], status = 'green', summary = 'Sin patrón de riesgo letal detectado';
  const hasData = [
    'F6.desesperanza','F6.animo-meta','F6.frustración','F6.amenaza',
    'FUN.psp_relaciones','FUN.psp_disruptivas','EXT.soporte',
    'EXT.intento_previo','EXT.medios','EXT.plan_suicida'
  ].some(outcomeHasValue) || autoOas !== null || conexion !== null;
  if (!hasData) {
    return {
      title: 'Riesgo de suicidio',
      status: 'muted',
      summary: 'Pendiente: faltan feeders de 3ST/FVT o inputs externos.',
      signals: [],
      statusLabel: 'Pendiente'
    };
  }

  // === 3ST Paso 1: Pain + Hopelessness → IDEACIÓN ===
  if (dolorAlto && desesp !== null && desesp <= -2) {
    signals.push(`<b>3ST paso 1 (Klonsky):</b> ${dolorTrace} + desesperanza ${desesp} → ideación activa probable`);
    status = 'yellow';
  }
  // === 3ST Paso 2: Connection falla mitigación → IDEACIÓN SEVERA ===
  if (desconexionGrave && dolorAlto) {
    const reason = conexion !== null && conexion <= -2 ? `aislamiento FUN.A2=${conexion}` : 'soporte ausente';
    signals.push(`<b>3ST paso 2 (Klonsky):</b> desconexión (${reason}) no mitiga el dolor → ideación severa, plan probable`);
    if (status === 'yellow') status = 'red';
    else status = 'yellow';
  }
  // === 3ST Paso 3: Capability → INTENTO ===
  if (capabilityAlta && (dolorAlto || desesp !== null && desesp <= -1)) {
    const cap = [];
    if (intento === 'RECIENTE') cap.push('intento reciente <12m');
    else if (intento === 'LEJANO') cap.push('intento previo');
    if (autoOas !== null && autoOas >= 9) cap.push(`autoagresividad alta (OAS auto=${autoOas}/12)`);
    else if (autoOas !== null && autoOas > 0) cap.push(`autoagresividad presente (OAS auto=${autoOas}/12)`);
    if (medios === 'SI') cap.push('medios letales accesibles');
    signals.push(`<b>3ST paso 3 (Klonsky):</b> capability adquirida — ${cap.join(' + ')} → riesgo de intento`);
    status = 'red';
  }
  // === Plan específico = ROJO independiente ===
  if (plan === 'ESPEC') {
    signals.push('<b>Plan específico declarado</b> — riesgo letal inmediato');
    status = 'red';
  }
  // === FVT (Bryan-Rudd): ventana letal — ánimo bajo + activación↑ ===
  const activacionAlta = (drive !== null && drive >= 1) || (velo !== null && velo >= 1);
  if (animo !== null && animo <= -2 && activacionAlta) {
    let fvtMsg = `<b>FVT (Bryan-Rudd) — ventana letal:</b> ánimo ${animo} + activación↑ (drive=${drive}, velo=${velo}) — energía para ejecutar sobre fondo negro`;
    // PRD F2: si animo-meta también gatilló Pain, declarar dependencia.
    if (animoFedPain) {
      fvtMsg += `<br><i>Nota: paso 1 (Pain) y FVT comparten animo-meta=${animo}; no son señales independientes.</i>`;
    }
    signals.push(fvtMsg);
    if (status !== 'red') status = 'red';
  }

  // Señales sub-críticas (amarillo)
  if (status === 'green') {
    if (desesp !== null && desesp <= -1) { signals.push(`Desesperanza ${desesp}`); status = 'yellow'; }
    if (autoOas !== null && autoOas > 0) { signals.push(`Autoagresividad OAS auto=${autoOas}/12`); status = 'yellow'; }
    if (plan === 'VAGO') { signals.push('Ideación / plan vago'); status = 'yellow'; }
    if (intento === 'LEJANO' && !capabilityAlta) { signals.push('Intento previo lejano (factor crónico)'); status = 'yellow'; }
  }

  if (status === 'red') summary = '⚠ Configuración 3ST/FVT activa. Evaluar contención/internamiento. Documentar traza (no es score: Large 2017 mostró PPV 0.4%).';
  else if (status === 'yellow') summary = 'Pasos 3ST sub-críticos. Reevaluar variabilidad reciente (FVT), plan de seguridad.';
  return { title: 'Riesgo de suicidio', status, summary, signals, statusLabel: status==='red'?'Activo':status==='yellow'?'Vigilar':'Sin señal' };
}

// 3.2 — RIESGO DE AGRESIVIDAD (Brøset Violence Checklist + Fazel-Bonta)
// Refs: Woods 2002 (DOI 10.1034/j.1600-0447.106.s412.22.x), Russell-Babin 2025 (DOI 10.1097/AJN.0000000000000148),
// Ramesh-Fazel 2018 (DOI 10.1016/j.eurpsy.2018.02.007). Crítica risk-score: Fazel 2012 (DOI 10.1136/bmj.e4692, PPV solo 41%).
function outcomeAgresividad() {
  const frustra = get('F6.frustración');
  const contenido = get('F4.contenido');
  const juicio = get('J.juicio');
  const insight = get('I.insight');
  const testing = get('F7.testing');
  const drive = get('F3.drive');
  const moas = get('FUN.oas_hetero_total');
  const conciencia = get('NC.conciencia');
  const hxViol = getRaw('EXT.hx_violencia');
  const sust = getRaw('EXT.sustancias');
  let signals = [], status = 'green', summary = 'Sin patrón de agresividad detectado';
  const hasData = [
    'F6.frustración','F4.contenido','J.juicio','F7.testing',
    'FUN.psp_disruptivas','EXT.hx_violencia','EXT.sustancias',
    'EXT.bvc_ruidos','EXT.bvc_amenaza_verbal','EXT.bvc_objetos'
  ].some(outcomeHasValue) || moas !== null;
  if (!hasData) {
    return {
      title: 'Riesgo de agresividad',
      status: 'muted',
      summary: 'Pendiente: faltan BVC/OAS o feeders de estado.',
      signals: [],
      statusLabel: 'Pendiente'
    };
  }

  // === BVC 6-item (Brøset Violence Checklist, Woods 2002 — predicción <24h, AUC 0.83-0.97) ===
  const bvc = {
    confusion: (conciencia !== null && conciencia <= -1) ? 1 : 0,
    irritabilidad: (frustra !== null && frustra >= 1) ? 1 : 0,
    ruidos: getRaw('EXT.bvc_ruidos') === 'SI' ? 1 : 0,
    amenazaVerbal: getRaw('EXT.bvc_amenaza_verbal') === 'SI' ? 1 : 0,
    amenazaFisica: (moas !== null && moas >= 8) ? 1 : 0,
    ataqueObjetos: getRaw('EXT.bvc_objetos') === 'SI' ? 1 : 0
  };
  const bvcSum = Object.values(bvc).reduce((a,b) => a+b, 0);
  const bvcLabels = {
    confusion: `confusión (NC=${conciencia})`,
    irritabilidad: `irritabilidad (frust=${frustra})`,
    ruidos: 'ruidos/agitación',
    amenazaVerbal: 'amenaza verbal',
    amenazaFisica: `heteroagresión OAS ${moas}/28`,
    ataqueObjetos: 'ataque a objetos'
  };
  const bvcPos = Object.entries(bvc).filter(([_,v]) => v).map(([k,_]) => bvcLabels[k]);
  if (bvcSum >= 2) {
    signals.push(`<b>BVC = ${bvcSum}/6 ⚠ cutoff ≥2:</b> ${bvcPos.join(' + ')} → riesgo agresión 24h (Woods 2002, AUC 0.83-0.97)`);
    status = 'red';
  } else if (bvcSum === 1) {
    signals.push(`BVC = 1/6 sub-umbral: ${bvcPos[0]}`);
    if (status === 'green') status = 'yellow';
  }

  // === Heteroagresividad grave por OAS hetero — independiente del BVC ===
  if (moas !== null && moas >= 16) {
    signals.push(`<b>Heteroagresividad alta</b> en curso (OAS hetero = ${moas}/28) — agresión externa ponderada por canal y severidad`);
    status = 'red';
  }
  else if (moas !== null && moas > 0 && status === 'green') {
    signals.push(`OAS hetero = ${moas}/28`);
    status = 'yellow';
  }
  // === Configuración explosiva (juicio + contenido + sustancias) ===
  const contenidoPersec = contenido !== null && contenido >= 3;
  if (frustra !== null && frustra >= 2 && contenidoPersec && (juicio === -2 || sust === 'ACTIVO')) {
    signals.push(`<b>Configuración explosiva:</b> frustración ${frustra} + contenido persecutorio (F4=${contenido}) + ${juicio===-2?'juicio comprometido':'sustancias activas'}`);
    status = 'red';
  }
  // === Hx violencia = predictor más fuerte (Bonta meta-analysis, Phillips 2005) ===
  if (hxViol === 'RECIENTE') {
    signals.push('<b>Hx violencia reciente</b> (<12m) — predictor individual más fuerte (Phillips 2005)');
    if (status !== 'red') status = 'red';
  }
  if (frustra !== null && frustra >= 2 && sust === 'ACTIVO') {
    signals.push(`<b>Frustración alta + sustancias activas</b> — desinhibición sobre afecto explosivo`);
    if (status !== 'red') status = 'red';
  }

  // Amarillo
  if (status === 'green') {
    if (contenidoPersec) { signals.push(`Contenido persecutorio (F4=${contenido})`); status = 'yellow'; }
    if (juicio !== null && juicio <= -1) { signals.push(`Juicio ${juicio}`); status = 'yellow'; }
    if (hxViol === 'LEJANA') { signals.push('Hx violencia lejana (factor crónico)'); status = 'yellow'; }
  }
  if (status === 'red') summary = '⚠ Configuración BVC + factores. Evaluar contención, advertir terceros si aplica deber legal. PPV de tools ~41% (Fazel 2012): usar traza, no score.';
  else if (status === 'yellow') summary = 'Señales aisladas. Monitorizar BVC en próximas horas, evaluar gatillos.';
  return { title: 'Riesgo de agresividad', status, summary, signals, statusLabel: status==='red'?'Activo':status==='yellow'?'Vigilar':'Sin señal' };
}

// 3.3 — RIESGO DE NEGLIGENCIA / AUTODESCUIDO (Diogenes pattern + cuadrante silente PRD)
// Refs: Lahera 2006 (PMID 17117338), Furtos 2015 (DOI 10.1016/j.spsy.2015.02.005),
// Proctor 2021 (DOI 10.1155/2021/2810137). Sello clínico: "refusal of help" + lack of shame + self-neglect.
function outcomeNegligencia() {
  const insight = get('I.insight');
  const ego = get('E.egodistonia');
  const utiles = pspChannelScore('FUN.psp_utiles', 'neg');
  const rel = pspChannelScore('FUN.psp_relaciones', 'neg');
  const autocuidado = pspChannelScore('FUN.psp_autocuidado', 'neg');
  const drive = get('F3.drive');
  const soporte = getRaw('EXT.soporte');
  const rechazo = getRaw('EXT.rechazo_ayuda');
  let signals = [], status = 'green', summary = 'Sin patrón de autodescuido';
  const hasData = [
    'I.insight','E.egodistonia','FUN.psp_utiles','FUN.psp_relaciones',
    'FUN.psp_autocuidado','F3.drive','EXT.soporte','EXT.rechazo_ayuda'
  ].some(outcomeHasValue) || utiles !== null || rel !== null || autocuidado !== null;
  if (!hasData) {
    return {
      title: 'Riesgo de negligencia',
      status: 'muted',
      summary: 'Pendiente: faltan funcionalidad, insight, soporte o rechazo de ayuda.',
      signals: [],
      statusLabel: 'Pendiente'
    };
  }

  // === Patrón Diogenes clásico (Lahera 2006, Proctor 2021) ===
  // Refusal of help activo + autodescuido + lack of shame = sello clínico
  if (rechazo === 'ACTIVO' && autocuidado !== null && autocuidado <= -2 && ego !== null && ego >= 1) {
    signals.push(`<b>Patrón Diogenes (Lahera 2006):</b> rechazo ACTIVO de ayuda + autodescuido grave (A3=${autocuidado}) + sin malestar subjetivo (E=+${ego}) — "lack of concern" característico (Proctor 2021)`);
    status = 'red';
  }
  // No adherencia con anosognosia (refusal pasivo + insight ausente)
  if (rechazo === 'PASIVO' && insight !== null && insight <= -1) {
    signals.push(`<b>No adherencia + insight bajo:</b> rechazo PASIVO (no asiste a citas, no toma medicación) + I=${insight} → anosognosia funcional, sin alarma del paciente`);
    if (status !== 'red') status = 'red';
  }
  // === Cuadrante silente (PRD): egosintónico + insight ausente ===
  if (ego !== null && ego >= 2 && insight !== null && insight <= -2) {
    signals.push(`<b>Cuadrante silente:</b> egosintónico extremo (E=+${ego}) + insight ausente (I=${insight}) — el paciente no señaliza, no pide ayuda`);
    if (status !== 'red') status = 'red';
  }
  // === Autodescuido grave + insight bajo ===
  if (autocuidado !== null && autocuidado <= -2 && insight !== null && insight <= -1) {
    signals.push(`<b>Autodescuido grave + insight bajo:</b> PSP A3=${autocuidado} + I=${insight} — no reconoce el déficit`);
    if (status !== 'red') status = 'red';
  }
  // === Autodescuido sin red ===
  if (autocuidado !== null && autocuidado <= -2 && soporte === 'AUS') {
    signals.push('<b>Autodescuido grave sin red de soporte</b> — nadie compensa el déficit');
    if (status !== 'red') status = 'red';
  }
  // === Colapso funcional multi-área ===
  const areasGraves = [utiles, rel, autocuidado].filter(v => v !== null && v <= -2).length;
  if (areasGraves >= 2 && soporte === 'AUS') {
    signals.push(`<b>Colapso funcional multi-área:</b> ${areasGraves} áreas PSP en déficit grave + soporte ausente — abandono multi-dominio`);
    if (status !== 'red') status = 'red';
  }

  // Amarillo
  if (status === 'green') {
    if (rechazo === 'PASIVO') { signals.push('Rechazo pasivo de ayuda'); status = 'yellow'; }
    if (autocuidado !== null && autocuidado <= -1) { signals.push(`Autocuidado ${autocuidado}`); status = 'yellow'; }
    if (utiles !== null && utiles <= -2) { signals.push(`Actividades útiles ${utiles}`); status = 'yellow'; }
    if (rel !== null && rel <= -2) { signals.push(`Relaciones ${rel}`); status = 'yellow'; }
    if (insight !== null && insight <= -1) { signals.push(`Insight ${insight}`); status = 'yellow'; }
    if (ego !== null && ego >= 1) { signals.push(`Egosintónico (E=+${ego})`); status = 'yellow'; }
    if (drive !== null && drive <= -2) { signals.push(`Drive abulia (${drive})`); status = 'yellow'; }
  }
  if (status === 'red') summary = '⚠ Riesgo silente: no pedirá ayuda. Activar red de soporte, hospitalización si déficits ponen vida en riesgo.';
  else if (status === 'yellow') summary = 'Señales de autodescuido emergente. Reforzar adherencia y red.';
  return { title: 'Riesgo de negligencia', status, summary, signals, statusLabel: status==='red'?'Activo':status==='yellow'?'Vigilar':'Sin señal' };
}

// 3.4 — CAPACIDAD PARA [X] (Appelbaum-Grisso 1988 + diferenciación Owen 2008)
// Refs: Appelbaum-Grisso 1988 NEJM (DOI 10.1056/NEJM198812223192504),
// Grisso-Appelbaum 1997 MacCAT-T (DOI 10.1176/ps.48.11.1415), Owen 2008 (DOI 10.1017/S0033291708004637).
// Owen 2008: insight = mejor discriminator en psicosis/BPAD; en no-psicóticos depressed mood discrimina, insight no.
const CAPACITY_OUTCOME_DECISIONS = [
  { key:'aceptar_hosp', label:'Aceptar hospitalización' },
  { key:'rechazar_hosp', label:'Rechazar hospitalización' },
  { key:'aceptar_medicacion', label:'Aceptar medicación' },
  { key:'rechazar_medicacion', label:'Rechazar medicación' },
  { key:'consentir_proc', label:'Consentir procedimiento' },
  { key:'alta_voluntaria', label:'Alta voluntaria' },
  { key:'manejo_dinero', label:'Manejo de dinero' },
  { key:'vivir_solo', label:'Vivir solo' },
  { key:'otro', label:'Otro' }
];
const CAPACITY_OUTCOME_SKILLS = [
  { key:'comprension', label:'Comprensión' },
  { key:'apreciacion', label:'Apreciación' },
  { key:'razonamiento', label:'Razonamiento' },
  { key:'eleccion', label:'Expresión de elección' }
];
function capacityOutcomeSpecs() {
  return state['EXT.decision_capacidad']?.specifiers || {};
}
function capacityOutcomeSelectedKeys() {
  const specs = capacityOutcomeSpecs();
  const valid = new Set(CAPACITY_OUTCOME_DECISIONS.map(d => d.key));
  const raw = Array.isArray(specs.cap_decisions) ? specs.cap_decisions.slice() : [];
  if (!raw.length && String(specs.decision_text || '').trim()) raw.push('otro');
  const seen = new Set();
  return raw.filter(k => valid.has(k) && !seen.has(k) && seen.add(k));
}
function capacityOutcomeDecisionLabel(key) {
  if (key === 'otro') return String(capacityOutcomeSpecs().decision_text || '').trim() || 'Otra decisión';
  return CAPACITY_OUTCOME_DECISIONS.find(d => d.key === key)?.label || key;
}
function capacityOutcomeSkillKey(decisionKey, skillKey) {
  return `cap_${decisionKey}_${skillKey}`;
}
function outcomeCapacidad() {
  const rawCapacity = getRaw('EXT.decision_capacidad');
  const specs = capacityOutcomeSpecs();
  const decisionKeys = capacityOutcomeSelectedKeys();
  const decisionLabels = decisionKeys.map(capacityOutcomeDecisionLabel);
  const decisionDeclared = rawCapacity === 'DECLARADA' && decisionKeys.length;
  const insight = get('I.insight');
  const juicio = get('J.juicio');
  const testing = get('F7.testing');
  const contenido = get('F4.contenido');
  const animoMeta = get('F6.animo-meta');
  if (!decisionDeclared) {
    return {
      title: 'Capacidad para [X]',
      status: 'muted',
      summary: 'Sin decisión específica declarada. Capacidad NO computa: no existe capacidad global.',
      signals: [],
      statusLabel: 'Sin decisión'
    };
  }

  const psicosisActiva = (testing !== null && testing <= -1) || (contenido !== null && contenido >= 3);
  const depresionSevera = animoMeta !== null && animoMeta <= -2;
  const patron = psicosisActiva ? 'psicosis' : depresionSevera ? 'depresion' : 'otro';

  let signals = [], status = 'green', hasMissing = false, hasPartial = false, hasNo = false;
  const decisionText = decisionLabels.join(' · ');
  signals.push(`<b>Decisión(es) evaluada(s):</b> ${decisionText}`);
  signals.push('<i>Las 4 habilidades son el criterio primario; insight, testing, contenido, ánimo y juicio son evidencia convergente.</i>');

  decisionKeys.forEach(key => {
    if (key === 'otro' && !String(specs.decision_text || '').trim()) hasMissing = true;
    const parts = CAPACITY_OUTCOME_SKILLS.map(skill => {
      const val = specs[capacityOutcomeSkillKey(key, skill.key)] || '';
      if (val === 'NO') hasNo = true;
      else if (val === 'PARCIAL') hasPartial = true;
      else if (!val) hasMissing = true;
      return `${skill.label}: <b>${val || 'pendiente'}</b>`;
    });
    signals.push(`<b>${capacityOutcomeDecisionLabel(key)}:</b> ${parts.join(' · ')}`);
  });

  if (hasNo) status = 'red';
  else if (hasPartial || hasMissing) status = 'yellow';

  const addFeeder = (message) => {
    signals.push(message);
    if (status === 'green') status = 'yellow';
  };

  signals.push(`<i>Patrón subyacente probable: <b>${patron}</b> — Owen 2008 sugiere feeders distintos según patrón clínico.</i>`);
  if (patron === 'psicosis') {
    if (insight !== null && insight <= -2) {
      addFeeder(`<b>Feeder de apreciación:</b> insight ${insight} en patrón psicótico; explorar si la decisión le concierne.`);
    }
    if (testing !== null && testing <= -2) {
      addFeeder(`<b>Feeder de apreciación:</b> testing F7=${testing}; verificar si la realidad clínica se integra en la decisión.`);
    }
    if (contenido !== null && contenido >= 4) {
      addFeeder(`<b>Feeder de apreciación:</b> contenido F4=${contenido}; revisar si la decisión está filtrada por delusión.`);
    }
  } else if (patron === 'depresion') {
    addFeeder(`<b>Feeder afectivo:</b> animo-meta=${animoMeta}; revisar sesgo prospectivo, culpa o desesperanza en la elección.`);
    if (insight !== null && insight <= -2) {
      signals.push(`Insight ${insight} presente; en depresión no psicótica no debe reemplazar la evaluación de habilidades.`);
    }
  } else {
    if (insight !== null && insight <= -2) {
      addFeeder(`<b>Feeder de apreciación:</b> insight ${insight}; revisar aplicación personal de la información.`);
    }
  }

  if (juicio !== null && juicio <= -2) {
    addFeeder(`<b>Feeder de razonamiento:</b> juicio ${juicio}; documentar comparación de opciones, riesgos y consecuencias.`);
  }
  if (status === 'green' && juicio !== null && juicio === -1) {
    addFeeder(`Feeder de razonamiento parcial: juicio ${juicio}.`);
  }

  let summary = `Capacidad preservada para: <b>${decisionText}</b>.`;
  if (status === 'red') {
    summary = `⚠ Capacidad COMPROMETIDA para: <b>${decisionText}</b>. Hay al menos una habilidad marcada como No.`;
  } else if (status === 'yellow' && hasMissing) {
    summary = `Evaluación de capacidad INCOMPLETA para: <b>${decisionText}</b>. Faltan habilidades por puntuar.`;
  } else if (status === 'yellow' && hasPartial) {
    summary = `Capacidad DUDOSA para: <b>${decisionText}</b>. Hay al menos una habilidad parcial.`;
  } else if (status === 'yellow') {
    summary = `Capacidad probablemente preservada para: <b>${decisionText}</b>, con feeders clínicos que requieren documentación explícita.`;
  }
  return { title: 'Capacidad para decisión específica', status, summary, signals, statusLabel: status==='red'?'Comprometida':status==='yellow'?'Dudosa':status==='muted'?'Sin decisión':'Preservada' };
}

function outcomeFmtScore(v) {
  if (v === null || v === undefined) return '';
  return v > 0 ? `+${v}` : String(v);
}

function outcomeLevel(id, raw) {
  const key = id === 'F4.contenido' ? String(raw) : outcomeFmtScore(raw);
  const def = findScoreDefinition(id);
  return def?.details?.[key]?.nivel || def?.scores?.[key] || '';
}

function outcomeFunctionalRaw(baseId) {
  const neg = pspChannelScore(baseId, 'neg');
  const pos = pspChannelScore(baseId, 'pos');
  const base = stateRawNumber(baseId);
  return strongestSignedScore([neg, pos, base]);
}

function outcomeCognicion() {
  const tests = [
    ['NC.fluencia','Fluencia'],
    ['NC.digit','Digit span'],
    ['NC.tmt','TMT oral'],
    ['NC.clock','Clock'],
    ['NC.recall','Recall']
  ];
  const vals = tests.map(([id, label]) => ({id, label, raw:get(id)})).filter(x => x.raw !== null);
  const juicio = get('J.juicio');
  const insight = get('I.insight');
  const severe = vals.filter(x => x.raw <= -2);
  const mild = vals.filter(x => x.raw === -1);
  let signals = [];

  vals.forEach(x => {
    if (x.raw !== 0) signals.push(`${x.label} ${outcomeFmtScore(x.raw)} — ${outcomeLevel(x.id, x.raw)}`);
  });
  if (juicio !== null && juicio < 0) signals.push(`Juicio ${outcomeFmtScore(juicio)} — ${outcomeLevel('J.juicio', juicio)}`);
  if (insight !== null && insight < 0) signals.push(`Insight ${outcomeFmtScore(insight)} — ${outcomeLevel('I.insight', insight)}`);

  if (!vals.length && juicio === null && insight === null) {
    return {
      title:'Cognición',
      status:'muted',
      summary:'Sin perfil neurocognitivo/juicio/insight evaluado todavía.',
      signals:[],
      statusLabel:'Sin datos'
    };
  }

  let status = 'green';
  if (severe.length >= 2 || (severe.length >= 1 && (juicio <= -2 || insight <= -2))) status = 'red';
  else if (severe.length >= 1 || mild.length >= 2 || juicio <= -2) status = 'yellow';
  else if (mild.length >= 1 || juicio === -1 || insight === -1) status = 'yellow';

  let summary = 'Perfil cognitivo bedside sin déficit significativo detectado.';
  if (status === 'red') summary = 'Compromiso cognitivo clínicamente relevante. Integrar con funcionamiento, delirium/neurocognitivo y capacidad específica.';
  else if (status === 'yellow') summary = 'Señales cognitivas leves o focales. Conviene repetir bedside, contrastar basal y monitorizar evolución.';
  return {
    title:'Cognición',
    status,
    summary,
    signals,
    statusLabel: status === 'red' ? 'Comprometida' : status === 'yellow' ? 'Vigilar' : 'Conservada'
  };
}

function outcomeFuncionalidad() {
  const domains = [
    ['FUN.psp_utiles','A1 · Actividades útiles'],
    ['FUN.psp_relaciones','A2 · Relaciones'],
    ['FUN.psp_autocuidado','A3 · Autocuidado'],
    ['FUN.psp_disruptivas','A4 · Conductas']
  ].map(([id, label]) => ({id, label, raw:outcomeFunctionalRaw(id)}));
  const evaluated = domains.filter(x => x.raw !== null);
  if (!evaluated.length) {
    return {
      title:'Funcionalidad',
      status:'muted',
      summary:'Sin PSP/funcionamiento evaluado todavía.',
      signals:[],
      statusLabel:'Sin datos'
    };
  }

  const severe = evaluated.filter(x => Math.abs(x.raw) >= 2);
  const moderate = evaluated.filter(x => Math.abs(x.raw) === 1);
  const signals = evaluated
    .filter(x => x.raw !== 0)
    .map(x => `${x.label} ${outcomeFmtScore(x.raw)} — ${outcomeLevel(x.id, x.raw)}`);

  let status = 'green';
  if (severe.length >= 1) status = 'red';
  else if (moderate.length >= 1) status = 'yellow';

  let summary = 'Funcionamiento global preservado en áreas PSP evaluadas.';
  if (status === 'red') summary = 'Deterioro funcional severo en al menos un dominio PSP. Priorizar soporte, plan de cuidados y trazabilidad del área afectada.';
  else if (status === 'yellow') summary = 'Alteración funcional leve/moderada. Monitorizar trayectoria y compensadores.';
  return {
    title:'Funcionalidad',
    status,
    summary,
    signals,
    statusLabel: status === 'red' ? 'Deteriorada' : status === 'yellow' ? 'Alterada' : 'Preservada'
  };
}

// ─── MSE Narrative Report (output clínico texto plano para copy-paste) ───
// Genera prosa fluida de 1-3 párrafos integrando todas las dimensiones puntuadas.
// Omite dimensiones no puntuadas (NE o vacías). Integra outcomes Capa 2.
function generateMSEReport() {
  const sc = id => {
    const v = state[id]?.score;
    return (v === null || v === undefined || v === 'NE') ? null : v;
  };
  const lvl = (id, key) => {
    const d = DIMS.find(x => x.id === id);
    if (!d || !d.scores) return null;
    return d.scores[key] || null;
  };
  const lvlMt = (testId, key) => {
    for (const d of DIMS) {
      if (d.type !== 'multitest') continue;
      const t = (d.tests || []).find(x => x.id === testId);
      if (t) return t.scores?.[key] || null;
    }
    return null;
  };
  const lvlAx = (axId, key) => {
    for (const d of DIMS) {
      if (d.type !== 'two_axis') continue;
      const a = (d.axes || []).find(x => x.id === axId);
      if (a) return a.scores?.[key] || null;
    }
    return null;
  };
  const parts = [];
  const fragments = [];

  // ── 1. APARIENCIA / CONCIENCIA ──
  const nc = sc('NC.conciencia');
  if (nc !== null) {
    let s = '';
    if (String(nc) === '0') s = 'Paciente en vigilia normal, contacto visual adecuado';
    else if (String(nc) === '-1') s = 'Paciente obnubilado (somnolencia, latencia de respuesta aumentada)';
    else if (String(nc) === '-2') s = 'Paciente en estupor/coma — requiere evaluación médica urgente';
    else if (String(nc) === '+1') s = 'Paciente hiperalerta (ojos abiertos, scanning visual)';
    else if (String(nc) === '+2') s = 'Hipervigilancia con interferencia (alerta sostenida, agotamiento)';
    // Orientación/confusión via specifier único; F/O:* quedan como compatibilidad legacy.
    const specs = state['NC.conciencia']?.specifiers || {};
    const desor = [];
    if (specs['O:T']) desor.push('temporal');
    if (specs['O:E']) desor.push('espacial');
    if (specs['O:P']) desor.push('en persona');
    const conf = !!(specs.CONF || specs.F || specs['O:T'] || specs['O:E'] || specs['O:P']);
    if (desor.length) s += `, desorientado ${desor.join(', ')}`;
    else if (String(nc) === '0') s += ', orientado en tiempo, espacio y persona';
    else if ((String(nc) === '+1' || String(nc) === '+2') && conf) s += ', fluctuante o desorientado';
    else if (String(nc) === '+1' || String(nc) === '+2') s += ', orientado y sin fluctuación consignada';
    if (specs['F']) s += '; curso fluctuante';
    fragments.push(s + '.');
  }

  // ── 2. PSICOMOTRICIDAD ──
  const f2v = sc('F2.velocidad');
  const f2s = sc('F2.sensorial');
  const psicoFrags = [];
  if (f2v !== null) {
    const n = parseInt(f2v, 10);
    if (n === 0) psicoFrags.push('sin alteraciones psicomotoras gruesas');
    else if (n < 0) psicoFrags.push(`retardo psicomotor ${n === -2 ? 'severo' : 'leve'}`);
    else if (n > 0) psicoFrags.push(`activación psicomotora ${n === 2 ? 'severa' : 'leve'}`);
  }
  if (f2s !== null && String(f2s) !== '0') {
    const lab = (lvl('F2.sensorial', f2s) || '').toLowerCase();
    if (lab) psicoFrags.push(`integración sensorial: ${lab}`);
  }
  // Motoras NM (multitest)
  const motorAlt = [];
  const motorTests = [
    ['NM.parakinesia_iterativa','parakinesia iterativa'],
    ['NM.parakinesia_odd','parakinesia bizarra'],
    ['NM.parakinesia_volicional','parakinesia volicional/automática'],
    ['NM.tic','tics'],
    ['NM.diskinesia','diskinesia'],['NM.distonia','distonía'],
    ['NM.acatisia','acatisia'],['NM.parkinsonismo','parkinsonismo'],
    ['NM.tremor','temblor']
  ];
  motorTests.forEach(([id, name]) => {
    const v = sc(id);
    if (v !== null && String(v) !== '0') {
      const n = parseInt(v, 10);
      motorAlt.push(`${name} ${n === -2 ? 'franca' : 'leve'}`);
    }
  });
  if (motorAlt.length) psicoFrags.push(motorAlt.join(', '));
  if (psicoFrags.length) fragments.push(capitalizeFirst(psicoFrags.join('; ')) + '.');

  // ── 3. EXPRESIVIDAD / AFECTO ──
  const f1 = sc('F1.expresividad');
  if (f1 !== null) {
    const lab = (lvl('F1.expresividad', f1) || '').toLowerCase();
    if (lab) fragments.push(`Expresividad ${lab}.`);
  }

  // ── 4. ÁNIMO Y VALENCIA NEGATIVA ──
  const animo = sc('F6.animo-meta');
  const tono = sc('F3.tono');
  const f6Frags = [];
  if (animo !== null) {
    const n = parseInt(animo, 10);
    const lossDep = sc('F6.loss-depresivo');
    const lossAnx = sc('F6.loss-ansioso');
    const lossParts = [];
    if (lossDep !== null) lossParts.push(parseInt(lossDep, 10) === -2 ? 'loss depresivo severo/tristeza vital' : 'loss depresivo moderado/desánimo');
    if (lossAnx !== null) lossParts.push(parseInt(lossAnx, 10) === -2 ? 'loss ansioso severo/pérdida inminente' : 'loss ansioso moderado/alarma anticipatoria');
    if (n === 0) f6Frags.push('ánimo eutímico');
    else if (n < 0 && lossParts.length) f6Frags.push(lossParts.join(' + '));
    else if (n === -1) f6Frags.push('polo negativo moderado de ánimo/loss');
    else if (n === -2) f6Frags.push('polo negativo severo de ánimo/loss');
    else if (n === 1) f6Frags.push('ánimo elevado');
    else if (n === 2) f6Frags.push('ánimo expansivo/maníaco');
  }
  if (tono !== null) {
    const n = parseInt(tono, 10);
    if (n === 0) f6Frags.push('tono hedónico preservado');
    else if (n < 0) f6Frags.push(`anhedonia ${n === -2 ? 'marcada' : 'leve'}`);
  }
  const amenaza = sc('F6.amenaza');
  if (amenaza !== null && parseInt(amenaza, 10) > 0) {
    f6Frags.push(`ansiedad/amenaza ${parseInt(amenaza, 10) === 2 ? 'severa' : 'leve'}`);
  }
  const frustra = sc('F6.frustración');
  if (frustra !== null && parseInt(frustra, 10) > 0) {
    f6Frags.push(`irritabilidad/frustración ${parseInt(frustra, 10) === 2 ? 'severa' : 'leve'}`);
  }
  const desesp = sc('F6.desesperanza');
  if (desesp !== null && parseInt(desesp, 10) < 0) {
    f6Frags.push(`desesperanza ${parseInt(desesp, 10) === -2 ? 'severa' : 'leve'}`);
  }
  const autoeval = sc('F6.autoevaluación');
  if (autoeval !== null && parseInt(autoeval, 10) < 0) {
    f6Frags.push(`autoevaluación negativa ${parseInt(autoeval, 10) === -2 ? 'severa' : 'leve'}`);
  }
  if (f6Frags.length) fragments.push(capitalizeFirst(f6Frags.join(', ')) + '.');

  // ── 5. ATENCIÓN ──
  const f5 = sc('F5.regulación');
  if (f5 !== null && String(f5) !== '0') {
    const lab = (lvl('F5.regulación', f5) || '').toLowerCase();
    if (lab) fragments.push(`Atención: ${lab}.`);
  }

  // ── 6. PENSAMIENTO ──
  const f4e = sc('F4.experiencia');
  const f4c = sc('F4.contenido');
  const pensFrags = [];
  if (f4e !== null) {
    const n = parseInt(f4e, 10);
    if (n === 0) pensFrags.push('flujo subjetivo del pensamiento proporcional');
    else if (n === -2) pensFrags.push('bloqueo o vacío subjetivo del pensamiento');
    else if (n === -1) pensFrags.push('flujo subjetivo del pensamiento enlentecido');
    else if (n === 1) pensFrags.push('flujo subjetivo del pensamiento acelerado pero dirigible');
    else if (n === 2) pensFrags.push('presión o crowding subjetivo del pensamiento');
  }
  if (f4c !== null) {
    const n = parseInt(f4c, 10);
    if (n === 0) pensFrags.push('contenido sin alteraciones');
    else if (n >= 3) pensFrags.push(`contenido del pensamiento alterado (delirante, convicción nivel ${n}/4)`);
    else if (n > 0) pensFrags.push(`contenido del pensamiento con ideas inusuales (nivel ${n}/4)`);
  }
  if (pensFrags.length) fragments.push(capitalizeFirst(pensFrags.join(', ')) + '.');

  // ── 7. MENTALIZACIÓN / INSIGHT / JUICIO ──
  const f7t = sc('F7.testing');
  const f7autoBio = sc('F7.coherencia-autobiografica');
  const f7autoMent = sc('F7.auto-mentalización');
  const f7self = sc('F7.self-integracion');
  const insight = sc('I.insight');
  const juicio = sc('J.juicio');
  const ego = sc('E.egodistonia');
  const ereg = sc('E.regulación');
  const mentFrags = [];
  if (f7t !== null) {
    const n = parseInt(f7t, 10);
    if (n === 0) mentFrags.push('testing de realidad preservado');
    else if (n < 0) mentFrags.push(`testing de realidad comprometido (${n === -2 ? 'pérdida franca' : 'dudoso'})`);
    else mentFrags.push(`sobreprueba de realidad (${n === 2 ? 'checking/incompletitud' : 'duda/verificación'})`);
  }
  if (f7autoBio !== null) {
    const n = parseInt(f7autoBio, 10);
    if (n === 0) mentFrags.push('coherencia autobiográfica integrada');
    else if (n < 0) mentFrags.push(`coherencia autobiográfica fragmentada (${n === -2 ? 'reliving/flashbacks' : 'intrusiones o lagunas parciales'})`);
    else if (n > 0) mentFrags.push(`coherencia autobiográfica sobreconstruida (${n === 2 ? 'confabulación' : 'relleno inferencial corregible'})`);
  }
  if (f7autoMent !== null) {
    const n = parseInt(f7autoMent, 10);
    if (n === 0) mentFrags.push('auto-mentalización calibrada');
    else if (n < 0) mentFrags.push(`lectura interna reducida (${n === -2 ? 'opacidad interna' : 'concreción afectiva/motivacional'})`);
    else if (n > 0) mentFrags.push(`lectura interna excesiva (${n === 2 ? 'pseudo-insight/hipermentalización' : 'sobre-reflexión/intelectualización'})`);
  }
  if (f7self !== null) {
    const n = parseInt(f7self, 10);
    if (n === 0) mentFrags.push('self integrado y flexible');
    else if (n < 0) mentFrags.push(`self ${n === -2 ? 'vacío/difuso/irreal' : 'inestable o fragmentado por contexto'}`);
    else if (n > 0) mentFrags.push(`self ${n === 2 ? 'en personaje rígido/falso self' : 'con masking o sobrecontrol social'}`);
  }
  if (insight !== null) {
    const n = parseInt(insight, 10);
    if (n === 0) mentFrags.push('insight pleno');
    else if (n === -1) mentFrags.push('insight parcial');
    else if (n === -2) mentFrags.push('anosognosia (insight ausente)');
  }
  if (juicio !== null) {
    const n = parseInt(juicio, 10);
    if (n === 0) mentFrags.push('juicio conservado');
    else if (n === -1) mentFrags.push('juicio parcialmente comprometido');
    else if (n === -2) mentFrags.push('juicio gravemente comprometido');
  }
  if (ego !== null) {
    const n = parseInt(ego, 10);
    if (n === -2) mentFrags.push('cuadro egodistónico extremo');
    else if (n === -1) mentFrags.push('cuadro egodistónico');
    else if (n === 1) mentFrags.push('cuadro egosintónico');
    else if (n === 2) mentFrags.push('cuadro egosintónico extremo (alarma de riesgo silente)');
  }
  if (ereg !== null) {
    const n = parseInt(ereg, 10);
    if (n === 0) mentFrags.push('regulación emocional flexible');
    else if (n < 0) mentFrags.push(`regulación emocional por desborde (${n === -2 ? 'mis-regulación franca' : 'frágil/tardía'})`);
    else if (n > 0) mentFrags.push(`regulación emocional por sobrecontrol (${n === 2 ? 'rígido con riesgo de colapso' : 'costoso'})`);
  }
  if (mentFrags.length) fragments.push(capitalizeFirst(mentFrags.join('; ')) + '.');

  // ── 8. FUNCIONALIDAD (PSP) ──
  const a1 = sc('FUN.psp_utiles');
  const a2 = sc('FUN.psp_relaciones');
  const a3 = sc('FUN.psp_autocuidado');
  const a4 = sc('FUN.psp_disruptivas');
  const psp = [];
  const pspAlt = (id, area) => {
    if (id === 'FUN.psp_disruptivas') {
      const hetero = sc('FUN.oas_hetero_total') || 0;
      const auto = sc('FUN.oas_auto_total') || 0;
      const total = hetero + auto;
      return total > 0 ? `conductas problemáticas OAS ${total}/40 (hetero ${hetero}/28; auto ${auto}/12)` : null;
    }
    const v = sc(id);
    if (v === null || String(v) === '0') return null;
    const n = parseInt(v, 10);
    return `${area} ${n === -2 ? 'gravemente comprometida' : n === -1 ? 'levemente reducida' : n === 1 ? 'levemente hiperactiva' : 'hipertrofiada'}`;
  };
  [['FUN.psp_utiles','actividades útiles'],['FUN.psp_relaciones','relaciones'],['FUN.psp_autocuidado','autocuidado'],['FUN.psp_disruptivas','conductas']].forEach(([id, area]) => {
    const f = pspAlt(id, area);
    if (f) psp.push(f);
  });
  if (psp.length) fragments.push(`Funcionalidad (PSP): ${psp.join(', ')}.`);

  // ── 9. NEUROCOGNITIVO BEDSIDE ──
  const nc_alt = [];
  const nc_tests = [['NC.fluencia','fluencia semántica'],['NC.digit','digit span'],['NC.tmt','TMT oral'],['NC.clock','clock drawing'],['NC.recall','recall 3 palabras']];
  nc_tests.forEach(([id, name]) => {
    const v = sc(id);
    if (v !== null && String(v) !== '0') {
      const n = parseInt(v, 10);
      nc_alt.push(`${name} ${n === -2 ? 'deficitario' : 'leve'}`);
    }
  });
  if (nc_alt.length) fragments.push(`Perfil neurocognitivo bedside: ${nc_alt.join(', ')}.`);

  // ── 10. INTERPERSONAL (P) ──
  const ipProfile = typeof interpersonalStyleProfile === 'function' ? interpersonalStyleProfile() : null;
  if (ipProfile?.evaluated) {
    const bits = [`${ipProfile.field} (${ipProfile.driveLabel})`];
    if (ipProfile.adjectives?.length) bits.push(`adjetivos: ${ipProfile.adjectives.slice(0, 5).join(', ')}`);
    if (ipProfile.patterns?.length) {
      bits.push(`personalidad posible: ${ipProfile.patterns.slice(0, 3).map(p => `${p.name} ${p.confidence}`).join('; ')}`);
    }
    fragments.push(`Patrón interpersonal: ${bits.join('; ')}.`);
  }

  parts.push(fragments.join(' '));

  // ── 11. OUTCOMES CAPA 2 (RIESGOS) ──
  try {
    const outcomes = [outcomeSuicidio(), outcomeAgresividad(), outcomeNegligencia(), outcomeCapacidad()];
    const riskParts = [];
    outcomes.forEach(o => {
      const lbl = (o.statusLabel || '').toLowerCase();
      if (o.status === 'green') return; // omit clean
      const title = o.title.toLowerCase().replace('riesgo de ', '').replace('capacidad para decisión específica', 'capacidad');
      riskParts.push(`${title}: ${lbl}`);
    });
    if (riskParts.length) {
      parts.push('Riesgos (Capa 2): ' + riskParts.join('; ') + '. Documentar traza en historia.');
    }
  } catch (e) { /* outcomes silently skip if state incomplete */ }

  return parts.filter(Boolean).join('\n\n');
}

function capitalizeFirst(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ─── BRAIN INFERENCE MODULE (extraído de v2) ───
// ── BRAIN INFERENCE MODULE ───────────────────────────────────
// Inferencia probabilistica de redes/circuitos desde el perfil bMSE.
// Honestidad epistemica: priors clinico-neurocientificos, NO medicion.
// ══════════════════════════════════════════════════════════════

// 8 redes/circuitos diana. Coordenadas en porcentaje del viewBox SVG
// para una vista sagital estilizada del cerebro.
const BRAIN_NETS = [
  { id:'CEN',     short:'FPN',     name:'FPN / Central Executive',       abbr:'dlPFC+parietal',      x:22, y:30, desc:'Hub: dlPFC + parietal posterior. Manipulacion de informacion, working memory, control inhibitorio y atencion top-down' },
  { id:'DMN',     short:'DMN',     name:'DMN / Self',                    abbr:'mPFC+PCC+precuneus',  x:62, y:26, desc:'Hub: mPFC + PCC + precuneus. Procesamiento autorreferencial, memoria autobiografica y cognicion social' },
  { id:'SAL',     short:'VAN',     name:'VAN / Salience',                abbr:'insula ant.+dACC',    x:40, y:42, desc:'Hub: insula anterior + dACC. Deteccion de relevancia y switch funcional DMN-FPN' },
  { id:'DA_STR',  short:'FST',     name:'FST / Motor',                   abbr:'caudado+SMA',         x:34, y:54, desc:'Hub: caudado + SMA. Seleccion de acciones motoras, secuenciacion cognitiva y loops frontoestriatales' },
  { id:'MESO',    short:'MSL',     name:'MSL / Reward',                  abbr:'VTA->NAcc',           x:48, y:60, desc:'Hub: VTA -> NAcc. Valor predictivo, wanting, motivacion y aprendizaje por recompensa' },
  { id:'OFC_AMY', short:'VAM',     name:'VAM / OFC-Amygdala',            abbr:'OFC+vmPFC+AMY',       x:26, y:64, desc:'Nodo de valor afectivo: OFC/vmPFC + amigdala. Amenaza, valencia, valor contextual y decision basada en afecto' },
  { id:'HPC',     short:'LMB',     name:'LMB-PFC / Episodic Memory',      abbr:'CA1/CA3+vmPFC',       x:60, y:60, desc:'Hub: hipocampo CA1/CA3 + vmPFC. Integracion del recuerdo episodico en toma de decisiones y reality/source memory' },
  { id:'LC_NE',   short:'LC-NE',   name:'LC-NE / Arousal Gain',          abbr:'locus coeruleus',     x:72, y:78, desc:'Hub: locus coeruleus. Modulacion global del gain neuronal, alerta, vigilancia y reactividad' }
];

// Matriz fenotipo->red. Formato: { netId: [peso 1-3, direccion] }
// direccion: 'mirror' (s<0 -> hipo, s>0 -> hiper); 'hypo' (solo s<0); 'hyper' (solo s>0).
// Para dimensiones con polos mecanisticamente distintos, usar alternativas:
// [[peso,'negHypo'|'negHyper'], [peso,'posHypo'|'posHyper']].
// Para escalas unipolares patologicas 0..4, usar 'pathHypo' / 'pathHyper'.
const BRAIN_MATRIX = {
  // ── NC: Gate ──
  'NC.conciencia':           { LC_NE:[3,'mirror'], DMN:[1,'hypo'], CEN:[1,'hypo'] },
  // ── NC.perfil: subtests ──
  'NC.fluencia':             { CEN:[2,'hypo'], HPC:[1,'hypo'] },
  'NC.digit':                { CEN:[2,'hypo'] },
  'NC.tmt':                  { CEN:[2,'hypo'], SAL:[1,'hypo'] },
  'NC.clock':                { CEN:[2,'hypo'], HPC:[1,'hypo'] },
  'NC.recall':               { HPC:[3,'hypo'], CEN:[1,'hypo'] },
  // ── F1: expresividad ──
  'F1.expresividad':         { DA_STR:[2,'mirror'], CEN:[1,'hypo'] },
  // ── F2: psicomotricidad / sensorial ──
  'F2.velocidad':            { DA_STR:[3,'mirror'], LC_NE:[1,'hyper'] },
  'F2.sensorial':            { SAL:[3,'mirror'], DMN:[1,'mirror'], CEN:[1,'hypo'] },
  'F2.sensorial-auditiva':   { SAL:[[1,'posHyper']], DMN:[[1,'posHyper']], CEN:[[1,'posHypo']] },
  'F2.sensorial-visual':     { SAL:[[1,'posHyper']], DMN:[[1,'posHyper']], CEN:[[1,'posHypo']] },
  'F2.sensorial-somatico-tactil': { SAL:[[1,'posHyper']], LC_NE:[[1,'posHyper']] },
  'F2.sensorial-olfatorio-gustativo': { SAL:[[1,'posHyper']], DMN:[[1,'posHyper']] },
  // ── F3: hedonico/motivacional ──
  'F3.tono':                 { MESO:[3,'mirror'] },
  'F3.anticipación':         { MESO:[3,'mirror'], OFC_AMY:[1,'mirror'] },
  'F3.drive':                { DA_STR:[2,'mirror'], MESO:[2,'mirror'], CEN:[1,'hypo'] },
  // ── F4: pensamiento ──
  'F4.experiencia':          { DMN:[2,'mirror'], SAL:[2,'mirror'], CEN:[1,'hypo'] },
  'F4.contenido':            { SAL:[3,'pathHyper'], DMN:[2,'pathHyper'], HPC:[2,'pathHypo'] },
  // ── F5: atencion ──
  'F5.regulación':           { CEN:[[3,'negHypo'], [3,'posHyper']], SAL:[[2,'negHyper'], [2,'posHypo']] },
  // ── F6: valencia negativa ──
  'F6.amenaza':              { OFC_AMY:[3,'mirror'], LC_NE:[1,'hyper'] },
  'F6.frustración':          { OFC_AMY:[2,'mirror'], CEN:[1,'hypo'] },
  'F6.animo-meta':           { DMN:[2,'mirror'], MESO:[1,'hypo'], OFC_AMY:[1,'mirror'] },
  'F6.loss-depresivo':       { DMN:[2,'negHyper'], MESO:[2,'negHypo'], OFC_AMY:[1,'negHyper'] },
  'F6.loss-ansioso':         { OFC_AMY:[2,'negHyper'], LC_NE:[2,'negHyper'], SAL:[1,'negHyper'] },
  'F6.autoevaluación':       { DMN:[3,'mirror'], CEN:[1,'hypo'] },
  'F6.desesperanza':         { DMN:[[2,'negHypo'], [2,'posHyper']], MESO:[[2,'negHypo'], [2,'posHyper']], OFC_AMY:[[1,'negHypo'], [1,'posHypo']] },
  // ── F7: mentalizacion ──
  'F7.auto-mentalización':   { DMN:[3,'mirror'], CEN:[1,'mirror'] },
  'F7.self-integracion':     { DMN:[[2,'negHypo'], [2,'posHypo']], CEN:[[1,'negHypo'], [2,'posHyper']], SAL:[[1,'negHyper'], [2,'posHyper']], OFC_AMY:[[2,'negHyper'], [1,'posHyper']] },
  'F7.mentalización-otro':   { DMN:[3,'mirror'] },
  'F7.testing':              {
    HPC: [[2,'negHypo']],
    SAL: [[2,'negHyper'], [2,'posHyper']],
    CEN: [[1,'negHypo'], [1,'posHyper']],
    OFC_AMY: [[1,'posHyper']]
  },
  'F7.coherencia-autobiografica': {
    HPC: [[3,'negHypo'], [3,'posHypo']],
    DMN: [[2,'negHypo'], [2,'posHyper']],
    SAL: [[2,'negHyper']],
    OFC_AMY: [[2,'negHyper'], [2,'posHypo']],
    LC_NE: [[1,'negHyper']],
    CEN: [[1,'negHypo'], [2,'posHypo']]
  },
  // ── G: global ──
  'G.arousal':               { LC_NE:[3,'mirror'], SAL:[1,'hyper'] },
  'G.coherencia':            { CEN:[[2,'negHypo'], [2,'posHyper']], DMN:[[1,'negHypo'], [1,'posHypo']], SAL:[[1,'negHypo'], [1,'posHypo']] },
  'G.sueno-ritmo':           { LC_NE:[2,'mirror'] },
  'G.sueno-insomnio':        { LC_NE:[2,'posHyper'], SAL:[1,'posHyper'] },
  'G.sueno-necesidad-reducida': { LC_NE:[2,'posHyper'], MESO:[1,'posHyper'], DA_STR:[1,'posHyper'] },
  'G.interocepcion':         { SAL:[2,'mirror'] },
  'G.apetito':               { MESO:[[2,'negHypo'], [2,'posHyper']], SAL:[2,'mirror'], OFC_AMY:[[1,'negHypo'], [1,'posHyper']], LC_NE:[1,'mirror'] },
  // ── NM: neuromotor (parcialmente cerebeloso; cerebelo no modelado como red) ──
  'NM.luria':                { CEN:[2,'hypo'], DA_STR:[1,'hypo'] },
  'NM.dismetria':            { CEN:[1,'negHypo'], DA_STR:[1,'negHypo'] },
  'NM.alternancia':          { CEN:[1,'hypo'], DA_STR:[1,'hypo'] },
  'NM.tandem':               { CEN:[1,'negHypo'], DA_STR:[1,'negHypo'] },
  'NM.parakinesia_iterativa': { DA_STR:[2,'negHyper'], CEN:[1,'negHypo'], SAL:[1,'negHyper'] },
  'NM.parakinesia_odd':      { DA_STR:[1,'negHyper'], SAL:[2,'negHyper'], DMN:[1,'negHyper'] },
  'NM.parakinesia_volicional': { DA_STR:[2,'negHypo'], CEN:[2,'negHypo'], SAL:[1,'negHyper'] },
  'NM.tic':                  { DA_STR:[1,'negHyper'] },
  'NM.diskinesia':           { DA_STR:[2,'negHyper'] },
  'NM.distonia':             { DA_STR:[1,'negHyper'] },
  'NM.acatisia':             { DA_STR:[2,'negHyper'], LC_NE:[1,'negHyper'] },
  'NM.parkinsonismo':        { DA_STR:[3,'negHypo'] },
  'NM.tremor':               { DA_STR:[1,'negHyper'] },
  // ── META ──
  'J.juicio':                { CEN:[2,'negHypo'], OFC_AMY:[1,'negHypo'] },
  'I.insight':               { CEN:[1,'negHypo'], DMN:[1,'negHypo'] },
  'E.egodistonia':           { SAL:[[1,'negHyper'], [1,'posHypo']], OFC_AMY:[[1,'negHyper'], [1,'posHypo']] },
  'E.regulación':            { CEN:[[2,'negHypo'], [3,'posHyper']], OFC_AMY:[[3,'negHyper'], [2,'posHypo']], SAL:[[1,'negHyper'], [1,'posHypo']] },
  // ── P / FUN: señales clínicas o funcionales, ponderación conservadora ──
  'P1.dominancia':           { CEN:[[1,'negHypo'], [1,'posHyper']], OFC_AMY:[[1,'negHypo'], [1,'posHyper']], DMN:[[1,'negHypo'], [1,'posHyper']] },
  'P2.afiliación':           { SAL:[[1,'negHyper'], [1,'posHyper']], OFC_AMY:[[1,'negHyper'], [1,'posHyper']], DMN:[[1,'negHypo'], [1,'posHyper']] },
  'FUN.psp_utiles':          { MESO:[[1,'negHypo'], [1,'posHyper']], DA_STR:[[1,'negHypo'], [1,'posHyper']], CEN:[[1,'negHypo'], [1,'posHyper']] },
  'FUN.psp_relaciones':      { DMN:[[1,'negHypo'], [1,'posHyper']], SAL:[[1,'negHypo'], [1,'posHyper']], OFC_AMY:[[1,'negHypo'], [1,'posHyper']] },
  'FUN.psp_autocuidado':     { CEN:[[1,'negHypo'], [1,'posHyper']], SAL:[[1,'negHypo'], [1,'posHyper']] },
  'FUN.psp_autocuidado_rituales':     { CEN:[[1,'posHyper']], SAL:[[1,'posHyper']] },
  'FUN.psp_autocuidado_alimentacion': { CEN:[[1,'posHyper']], SAL:[[1,'posHyper']] },
  'FUN.psp_autocuidado_somatico':     { SAL:[[1,'posHyper']], LC_NE:[[1,'posHyper']] },
  'FUN.psp_autocuidado_otro':         { CEN:[[1,'posHyper']], SAL:[[1,'posHyper']] },
  'FUN.psp_disruptivas':     { OFC_AMY:[[1,'posHyper']], SAL:[[1,'posHyper']] },
  'FUN.psp_disruptivas_auto': { OFC_AMY:[[2,'negHyper']], SAL:[[1,'negHyper']], DMN:[[1,'negHyper']] },
  'FUN.psp_disruptivas_hetero': { OFC_AMY:[[2,'posHyper']], SAL:[[1,'posHyper']], CEN:[[1,'posHypo']] },
  'FUN.oas_hetero_total':    { OFC_AMY:[[2,'pathHyper']], SAL:[[1,'pathHyper']], CEN:[[1,'pathHypo']] },
  'FUN.oas_auto_total':      { OFC_AMY:[[2,'pathHyper']], SAL:[[1,'pathHyper']], DMN:[[1,'pathHyper']] }
};

const BRAIN_ROLE_MULTIPLIER = {
  central: 1.30,
  mechanism: 1.00,
  accessory: 0.55
};

function brainRuleRole(sourceId, netId, weight, dir) {
  const w = Number(weight) || 1;
  if (w >= 3) return 'central';
  if (w >= 2) return 'mechanism';
  return 'accessory';
}

function brainRoleWeight(role) {
  return BRAIN_ROLE_MULTIPLIER[role] || 1;
}

function brainRoleAbbr(role) {
  if (role === 'central') return 'C';
  if (role === 'mechanism') return 'M';
  return 'A';
}

function brainRoleLabel(role) {
  if (role === 'central') return 'hub central';
  if (role === 'mechanism') return 'mecanismo puente';
  return 'nodo accesorio';
}

function brainEffectiveWeight(sourceId, netId, weight, dir) {
  const role = brainRuleRole(sourceId, netId, weight, dir);
  return weight * brainRoleWeight(role);
}

// Matriz semántica: score bruto -> constructo clínico -> HiTOP/RDoC/redes.
// Las salidas usan esta capa para nombrar y ponderar señales, no para añadir otro score.
const CONSTRUCT_MATRIX_OVERRIDES = {
  'F6.loss-depresivo:-2': { construct:'loss_depressive_severe', label:'Tristeza vital / grief', hitop:['Malestar'], rdoc:['Loss'], brain:BRAIN_MATRIX['F6.loss-depresivo'] },
  'F6.loss-depresivo:-1': { construct:'loss_depressive_moderate', label:'Desánimo', hitop:['Malestar'], rdoc:['Loss'], brain:BRAIN_MATRIX['F6.loss-depresivo'] },
  'F6.loss-ansioso:-2': { construct:'loss_anxious_severe', label:'Ansiedad extrema / pérdida inminente', hitop:['Malestar'], rdoc:['Potential Threat (anxiety)','Loss'], brain:BRAIN_MATRIX['F6.loss-ansioso'] },
  'F6.loss-ansioso:-1': { construct:'loss_anxious_moderate', label:'Ansiedad anticipatoria / alarma de pérdida', hitop:['Malestar'], rdoc:['Potential Threat (anxiety)','Loss'], brain:BRAIN_MATRIX['F6.loss-ansioso'] },
  'F1.expresividad:-2': { construct:'marked_inexpressivity', label:'Aplanamiento marcado', hitop:['Aislamiento Social','Desapego','Dificultades Comunicación social'], rdoc:['Social Communication'], brain:BRAIN_MATRIX['F1.expresividad'] },
  'F1.expresividad:-1': { construct:'restricted_expressivity', label:'Expresividad restringida', hitop:['Aislamiento Social','Desapego'], rdoc:['Social Communication'], brain:BRAIN_MATRIX['F1.expresividad'] },
  'F1.expresividad:+1': { construct:'expansive_theatrical_expressivity', label:'Expansividad / teatralidad regulable', hitop:['Manía'], rdoc:['Social Communication','Affiliation & Attachment'], brain:BRAIN_MATRIX['F1.expresividad'] },
  'F1.expresividad:+2': { construct:'labile_expressive_overflow', label:'Labilidad / desborde expresivo', hitop:['Manía','Afecto neg. externalizado'], rdoc:['Social Communication','Arousal'], brain:BRAIN_MATRIX['F1.expresividad'] },
  'F2.velocidad:-2': { construct:'marked_psychomotor_retardation', label:'Retardo psicomotor marcado', hitop:['Malestar','Desapego'], rdoc:['Motor Action'], brain:BRAIN_MATRIX['F2.velocidad'] },
  'F2.velocidad:-1': { construct:'psychomotor_slowing', label:'Enlentecimiento psicomotor', hitop:['Malestar','Desapego'], rdoc:['Motor Action'], brain:BRAIN_MATRIX['F2.velocidad'] },
  'F2.velocidad:+1': { construct:'regulated_psychomotor_activation', label:'Activación psicomotora regulable', hitop:['Manía','Desinhibición'], rdoc:['Motor Action','Arousal'], brain:BRAIN_MATRIX['F2.velocidad'] },
  'F2.velocidad:+2': { construct:'psychomotor_agitation_output_pressure', label:'Agitación psicomotora / presión de output', hitop:['Manía','Desinhibición'], rdoc:['Motor Action','Arousal'], brain:BRAIN_MATRIX['F2.velocidad'] },
  'G.arousal:-2': { construct:'shutdown_hypoarousal', label:'Shutdown / hipoarousal marcado', hitop:['Experiencias Disociativas','Sueño Desregulado'], rdoc:['Arousal'], brain:BRAIN_MATRIX['G.arousal'] },
  'G.arousal:-1': { construct:'low_activation', label:'Activación baja', hitop:['Malestar','Sueño Desregulado'], rdoc:['Arousal'], brain:BRAIN_MATRIX['G.arousal'] },
  'G.arousal:+1': { construct:'regulated_hyperactivation', label:'Hiperactivación regulable', hitop:['Miedo','Manía','Sueño Desregulado'], rdoc:['Arousal','Potential Threat (anxiety)'], brain:BRAIN_MATRIX['G.arousal'] },
  'G.arousal:+2': { construct:'dominant_hyperarousal', label:'Hyperarousal dominante', hitop:['Miedo','Manía','Sueño Desregulado'], rdoc:['Arousal','Sustained Threat'], brain:BRAIN_MATRIX['G.arousal'] },
  'G.sueno-ritmo:-2': { construct:'severe_hypersomnia', label:'Hipersomnia severa', hitop:['Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-ritmo'] },
  'G.sueno-ritmo:-1': { construct:'mild_hypersomnia', label:'Hipersomnia leve', hitop:['Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-ritmo'] },
  'G.sueno-insomnio:+1': { construct:'mild_insomnia', label:'Insomnio leve', hitop:['Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-insomnio'] },
  'G.sueno-insomnio:+2': { construct:'severe_insomnia', label:'Insomnio severo', hitop:['Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-insomnio'] },
  'G.sueno-necesidad-reducida:+1': { construct:'mild_reduced_sleep_need', label:'Reducción leve de necesidad de sueño', hitop:['Manía','Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-necesidad-reducida'] },
  'G.sueno-necesidad-reducida:+2': { construct:'severe_reduced_sleep_need', label:'Reducción severa de necesidad de sueño', hitop:['Manía','Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-necesidad-reducida'] },
  'E.regulación:-2': { construct:'emotional_overflow_dysregulation', label:'Desborde / mis-regulación franca', hitop:['Afecto neg. externalizado','Desinhibición'], rdoc:['Arousal','Cognitive Control'], brain:BRAIN_MATRIX['E.regulación'] },
  'E.regulación:-1': { construct:'fragile_delayed_regulation', label:'Regulación frágil / tardía', hitop:['Malestar','Afecto neg. externalizado'], rdoc:['Arousal','Cognitive Control'], brain:BRAIN_MATRIX['E.regulación'] },
  'E.regulación:+1': { construct:'costly_emotional_overcontrol', label:'Sobrecontrol costoso', hitop:['Malestar','Desapego'], rdoc:['Cognitive Control','Arousal'], brain:BRAIN_MATRIX['E.regulación'] },
  'E.regulación:+2': { construct:'rigid_overcontrol_collapse_risk', label:'Sobrecontrol rígido / colapso posible', hitop:['Malestar','Desapego'], rdoc:['Cognitive Control','Arousal'], brain:BRAIN_MATRIX['E.regulación'] },
  'F7.auto-mentalización:-2': { construct:'internal_opacity', label:'Opacidad interna', hitop:['LPFS Self','Experiencias Disociativas'], rdoc:['Self Knowledge'], brain:BRAIN_MATRIX['F7.auto-mentalización'] },
  'F7.auto-mentalización:-1': { construct:'concrete_self_reading', label:'Lectura interna concreta', hitop:['LPFS Self'], rdoc:['Self Knowledge'], brain:BRAIN_MATRIX['F7.auto-mentalización'] },
  'F7.auto-mentalización:+1': { construct:'over_reflection_intellectualization', label:'Sobre-reflexión / intelectualización', hitop:['LPFS Self'], rdoc:['Self Knowledge','Cognitive Control'], brain:BRAIN_MATRIX['F7.auto-mentalización'] },
  'F7.auto-mentalización:+2': { construct:'pseudo_insight_self_hypermentalizing', label:'Pseudo-insight / hipermentalización del self', hitop:['LPFS Self'], rdoc:['Self Knowledge','Cognitive Control'], brain:BRAIN_MATRIX['F7.auto-mentalización'] },
  'F7.self-integracion:-2': { construct:'identity_dissolution', label:'Vacío / difusión / irrealidad', hitop:['LPFS Self','Experiencias Disociativas'], rdoc:['Self Knowledge','Agency & Ownership'], brain:BRAIN_MATRIX['F7.self-integracion'] },
  'F7.self-integracion:-1': { construct:'fragmented_contextual_self', label:'Self inestable / fragmentado', hitop:['LPFS Self','Malestar'], rdoc:['Self Knowledge'], brain:BRAIN_MATRIX['F7.self-integracion'] },
  'F7.self-integracion:+1': { construct:'social_masking_overcontrol', label:'Masking / sobrecontrol social', hitop:['LPFS Self'], rdoc:['Social Communication','Self Knowledge','Agency & Ownership'], brain:BRAIN_MATRIX['F7.self-integracion'] },
  'F7.self-integracion:+2': { construct:'rigid_false_self', label:'Personaje rígido / falso self', hitop:['LPFS Self'], rdoc:['Social Communication','Self Knowledge','Agency & Ownership'], brain:BRAIN_MATRIX['F7.self-integracion'] },
  'P1.dominancia:-2': { construct:'inhibited_submission', label:'Sumisión inhibida', hitop:['LPFS Interpersonal','Desapego'], rdoc:['Affiliation & Attachment','Social Communication'], brain:BRAIN_MATRIX['P1.dominancia'] },
  'P1.dominancia:-1': { construct:'deference_compliance', label:'Deferencia / complacencia', hitop:['LPFS Interpersonal'], rdoc:['Affiliation & Attachment'], brain:BRAIN_MATRIX['P1.dominancia'] },
  'P1.dominancia:+1': { construct:'regulated_interaction_control', label:'Conducción activa regulable', hitop:['Manía'], rdoc:['Social Communication'], brain:BRAIN_MATRIX['P1.dominancia'] },
  'P1.dominancia:+2': { construct:'rigid_dominance', label:'Dominancia rígida', hitop:['Antagonismo','Manía'], rdoc:['Social Communication'], brain:BRAIN_MATRIX['P1.dominancia'] },
  'P2.afiliación:-2': { construct:'interpersonal_hostility_threat', label:'Hostilidad / amenaza interpersonal', hitop:['Afecto neg. externalizado','Antagonismo'], rdoc:['Affiliation & Attachment','Social Communication'], brain:BRAIN_MATRIX['P2.afiliación'] },
  'P2.afiliación:-1': { construct:'cold_distance', label:'Distancia fría', hitop:['Aislamiento Social','Desapego'], rdoc:['Affiliation & Attachment'], brain:BRAIN_MATRIX['P2.afiliación'] },
  'P2.afiliación:+1': { construct:'intense_affiliation', label:'Afiliación intensa', hitop:['LPFS Interpersonal','Manía'], rdoc:['Affiliation & Attachment'], brain:BRAIN_MATRIX['P2.afiliación'] },
  'P2.afiliación:+2': { construct:'intrusive_fusion_affiliation', label:'Fusión / afiliación intrusiva', hitop:['LPFS Interpersonal','Manía'], rdoc:['Affiliation & Attachment'], brain:BRAIN_MATRIX['P2.afiliación'] },
  'FUN.psp_autocuidado_rituales:+1': { construct:'rigid_selfcare_rituals', label:'Rituales rígidos', hitop:['Comportamiento Ritualizado'], rdoc:['Cognitive Control'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_rituales'] },
  'FUN.psp_autocuidado_rituales:+2': { construct:'dominant_selfcare_rituals', label:'Rituales dominantes', hitop:['Comportamiento Ritualizado'], rdoc:['Cognitive Control'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_rituales'] },
  'FUN.psp_autocuidado_alimentacion:+1': { construct:'rigid_eating_rituals', label:'Rituales de alimentación rígidos', hitop:['Patología Alimentaria','Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_alimentacion'] },
  'FUN.psp_autocuidado_alimentacion:+2': { construct:'extreme_restrictive_dieting', label:'Dietas restrictivas extremas', hitop:['Patología Alimentaria','Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_alimentacion'] },
  'G.apetito:-2': { construct:'marked_reduced_intake', label:'Ingesta marcadamente reducida', hitop:['Malestar','Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['G.apetito'] },
  'G.apetito:-1': { construct:'reduced_appetite_intake', label:'Apetito / ingesta reducida', hitop:['Malestar','Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['G.apetito'] },
  'G.apetito:+1': { construct:'increased_appetite_cravings', label:'Apetito aumentado / antojos', hitop:['Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['G.apetito'] },
  'G.apetito:+2': { construct:'loss_control_hyperphagia', label:'Pérdida de control / hiperfagia', hitop:['Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['G.apetito'] },
  'FUN.psp_autocuidado_somatico:+1': { construct:'somatic_overchecking', label:'Sobrechequeo somático', hitop:['Síntomas Somáticos'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_somatico'] },
  'FUN.psp_autocuidado_somatico:+2': { construct:'somatic_hypervigilance', label:'Hipervigilancia somática', hitop:['Síntomas Somáticos'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_somatico'] },
  'FUN.psp_autocuidado_otro:+1': { construct:'excessive_selfcare_other', label:'Autocuidado excesivo', hitop:['Comportamiento Ritualizado'], rdoc:['Agency & Ownership'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_otro'] },
  'FUN.psp_autocuidado_otro:+2': { construct:'dysfunctional_excess_selfcare', label:'Autocuidado disfuncional por exceso', hitop:['Comportamiento Ritualizado'], rdoc:['Agency & Ownership'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_otro'] }
};

function constructEscape(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function constructSlug(s) {
  return String(s || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'construct';
}
function constructScoreKey(sourceId, raw) {
  if (isContentSourceId(sourceId)) return String(raw);
  return raw > 0 ? `+${raw}` : String(raw);
}
function constructScoreItems() {
  const items = [];
  DIMS.forEach(d => {
    if (d.type === 'multitest') d.tests.forEach(t => items.push({id:t.id, label:t.label, scores:t.scores || {}}));
    else if (d.type === 'two_axis') d.axes.forEach(a => items.push({id:a.id, label:a.label, scores:a.scores || {}}));
    else items.push({id:d.id, label:d.title, scores:d.scores || {}, details:d.details || {}});
  });
  if (typeof VIRTUAL_SCORE_DEFINITIONS !== 'undefined') {
    Object.entries(VIRTUAL_SCORE_DEFINITIONS).forEach(([id, d]) => items.push({id, label:d.label, scores:d.scores || {}, details:d.details || {}}));
  }
  return items;
}
function constructParentBaseId(sourceId) {
  if (typeof CONTENT_SPLIT_CHANNELS !== 'undefined' && CONTENT_SPLIT_CHANNELS.some(ch => ch.id === sourceId)) return 'F4.contenido';
  if (typeof PSP_SPLIT_CHANNELS !== 'undefined') {
    for (const [baseId, cfg] of Object.entries(PSP_SPLIT_CHANNELS)) {
      for (const side of ['neg','pos']) {
        const channels = cfg?.[side] ? (Array.isArray(cfg[side]) ? cfg[side] : [cfg[side]]) : [];
        if (channels.some(ch => ch.id === sourceId)) return baseId;
      }
    }
  }
  return null;
}
function constructSourceCandidates(sourceId) {
  const parent = constructParentBaseId(sourceId);
  return parent ? [sourceId, parent] : [sourceId];
}
function constructBrainForSource(sourceId) {
  const parent = constructParentBaseId(sourceId);
  return BRAIN_MATRIX[sourceId] || (parent ? BRAIN_MATRIX[parent] : null) || null;
}
const FEEDER_GATES = {
  traumaSleep: {
    label:'pesadillas',
    applies() {
      if (typeof state === 'undefined') return false;
      const sleepSpecs = state['G.sueno-ritmo']?.specifiers || {};
      const sleepQuality = String(sleepSpecs.sueno_calidad || '');
      return /pesadill/i.test(sleepQuality);
    }
  }
};
function feederGateLabel(d) {
  if (!d?.gate) return '';
  return FEEDER_GATES[d.gate]?.label || d.gate;
}
function feederGateApplies(d) {
  if (!d?.gate) return true;
  const gate = FEEDER_GATES[d.gate];
  return gate?.applies ? !!gate.applies() : true;
}
function feederSignalAtRaw(d, raw) {
  if (!feederRawAllowed(d, raw)) return {signal:false, excluded:true};
  if (d.pole === 'neg' && raw >= 0) return {signal:false, excluded:true};
  if (d.pole === 'pos' && raw <= 0) return {signal:false, excluded:true};
  let pathVal, sig, extreme;
  const forcedPath = feederForcedPathValue(d);
  if (forcedPath !== null) {
    pathVal = forcedPath;
    sig = pathVal >= 1;
    extreme = pathVal >= 2;
  } else if (d.id === 'F4.contenido') {
    pathVal = raw;
    sig = raw >= 3;
    extreme = raw >= 4;
  } else if (d.inv) {
    pathVal = -raw;
    sig = pathVal >= 1;
    extreme = pathVal >= 2;
  } else if (d.abs) {
    pathVal = Math.abs(raw);
    sig = pathVal >= 1;
    extreme = pathVal >= 2;
  } else {
    const scaledPath = feederScaledPathValue(d, raw);
    pathVal = scaledPath !== null ? scaledPath : raw;
  }
  const minPath = d.minPath || (d.id === 'F4.contenido' ? 3 : 1);
  sig = pathVal >= minPath;
  extreme = d.id === 'F4.contenido' ? pathVal >= 4 : pathVal >= 2;
  return {signal:sig, extreme, pathVal};
}
function feederSpecApplies(d) {
  if (!feederGateApplies(d)) return false;
  if (!d.spec) return true;
  const specVal = state[d.id]?.specifiers?.[d.spec];
  if (!specVal) return !d.specRequired;
  return d.specIn ? d.specIn.includes(specVal) : !!specVal;
}
function constructDomainsFromMap(domainMap, sourceId, raw) {
  if (!domainMap) return [];
  const domains = [];
  const candidates = constructSourceCandidates(sourceId);
  Object.entries(domainMap).forEach(([domain, feeders]) => {
    const hit = feeders.some(f => candidates.includes(f.id) && feederSpecApplies(f) && feederSignalAtRaw(f, raw).signal);
    if (hit) domains.push(domain.replace(/\n/g, ' '));
  });
  return domains;
}
function constructDomainsFromMapStatic(domainMap, sourceId, raw) {
  if (!domainMap) return [];
  const domains = [];
  const candidates = constructSourceCandidates(sourceId);
  Object.entries(domainMap).forEach(([domain, feeders]) => {
    const hit = feeders.some(f => candidates.includes(f.id) && !f.specRequired && feederSignalAtRaw(f, raw).signal);
    if (hit) domains.push(domain.replace(/\n/g, ' '));
  });
  return domains;
}
function constructLabel(sourceId, raw) {
  if (sourceId === 'FUN.oas_hetero_total') return `OAS hetero ${raw}/28`;
  if (sourceId === 'FUN.oas_auto_total') return `OAS autoagresión ${raw}/12`;
  const scoreKey = constructScoreKey(sourceId, raw);
  const override = CONSTRUCT_MATRIX_OVERRIDES[`${sourceId}:${scoreKey}`];
  if (override?.label) return override.label;
  const def = findScoreDefinition(sourceId);
  return def?.details?.[scoreKey]?.nivel || def?.scores?.[scoreKey] || `${sourceId} ${scoreKey}`;
}
function buildConstructMatrix() {
  const matrix = {};
  constructScoreItems().forEach(item => {
    Object.keys(item.scores || {}).forEach(scoreKey => {
      const raw = parseInt(scoreKey, 10);
      if (Number.isNaN(raw) || raw === 0) return;
      const canonicalKey = constructScoreKey(item.id, raw);
      const id = `${item.id}:${canonicalKey}`;
      const override = CONSTRUCT_MATRIX_OVERRIDES[id] || {};
      const label = override.label || constructLabel(item.id, raw);
      matrix[id] = {
        id,
        sourceId:item.id,
        sourceLabel:item.label || item.id,
        scoreKey:canonicalKey,
        raw,
        label,
        construct: override.construct || constructSlug(label),
        hitop: override.hitop || constructDomainsFromMapStatic(HITOP_MAP, item.id, raw),
        rdoc: override.rdoc || constructDomainsFromMapStatic(RDOC_MAP, item.id, raw),
        brain: override.brain || constructBrainForSource(item.id)
      };
    });
  });
  return matrix;
}
const CONSTRUCT_MATRIX = buildConstructMatrix();
function getConstructEntry(sourceId, raw) {
  const scoreKey = constructScoreKey(sourceId, raw);
  const entry = CONSTRUCT_MATRIX[`${sourceId}:${scoreKey}`] || null;
  if (!entry || typeof state === 'undefined') return entry;
  const override = CONSTRUCT_MATRIX_OVERRIDES[`${sourceId}:${scoreKey}`] || {};
  return {
    ...entry,
    hitop: override.hitop || constructDomainsFromMap(HITOP_MAP, sourceId, raw),
    rdoc: override.rdoc || constructDomainsFromMap(RDOC_MAP, sourceId, raw)
  };
}
function getActiveConstructs() {
  const active = [];
  const hasLossChannels = ['F6.loss-depresivo','F6.loss-ansioso'].some(id => {
    const v = state[id]?.score;
    return v === '-2' || v === '-1';
  });
  const hasContentChannels = (typeof CONTENT_SPLIT_CHANNELS !== 'undefined') && CONTENT_SPLIT_CHANNELS.some(ch => {
    const v = state[ch.id]?.score;
    return v !== null && v !== undefined && v !== 'NE';
  });
  constructScoreItems().forEach(item => {
    const v = state[item.id]?.score;
    if (v === null || v === undefined || v === 'NE') return;
    const raw = parseInt(v, 10);
    if (Number.isNaN(raw) || raw === 0) return;
    if (item.id === 'F6.animo-meta' && raw < 0 && hasLossChannels) return;
    if (item.id === 'F4.contenido' && raw > 0 && hasContentChannels) return;
    if (item.id === 'FUN.psp_disruptivas' && raw > 0) return;
    const entry = getConstructEntry(item.id, raw);
    if (!entry) return;
    active.push({...entry});
  });
  return active;
}

function constructCleanName(name) {
  return String(name || '').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
}
function constructIsLPFS(name) {
  return /^LPFS\b/i.test(constructCleanName(name));
}
function constructUnique(list) {
  return [...new Set((list || []).map(constructCleanName).filter(Boolean))];
}
function constructConditionText(feeder) {
  if (!feeder) return '';
  const parts = [];
  if (feeder.spec) {
    const vals = Array.isArray(feeder.specIn) && feeder.specIn.length ? feeder.specIn.join(' / ') : 'presente';
    parts.push(feeder.specRequired ? `si ${feeder.spec}: ${vals}` : `cuando ${feeder.spec}: ${vals}`);
  }
  if (feeder.gate) parts.push(`requiere ${feederGateLabel(feeder)}`);
  return parts.length ? ` ${parts.join(' · ')}` : '';
}
function constructDomainsFromMapAll(domainMap, sourceId, raw, opts={}) {
  if (!domainMap) return [];
  const domains = [];
  const candidates = constructSourceCandidates(sourceId);
  Object.entries(domainMap).forEach(([domain, feeders]) => {
    if (opts.omitLPFS && constructIsLPFS(domain)) return;
    (feeders || []).forEach(f => {
      if (!candidates.includes(f.id)) return;
      if (!feederSignalAtRaw(f, raw).signal) return;
      domains.push(constructCleanName(domain) + constructConditionText(f));
    });
  });
  return constructUnique(domains);
}
function constructScoreModeLabel(feeder) {
  if (!feeder) return 'score bruto';
  const parts = [];
  if (isContentSourceId(feeder.id)) parts.push('contenido/convicción');
  else if (feeder.inv) parts.push('inverso');
  else if (feeder.abs) parts.push('absoluto');
  else parts.push('directo');
  if (Array.isArray(feeder.rawIn) && feeder.rawIn.length) parts.push(`solo score ${feeder.rawIn.join('/')}`);
  if (feeder.pole === 'neg') parts.push('solo polo -');
  if (feeder.pole === 'pos') parts.push('solo polo +');
  if (feeder.visual === 'activation') parts.push('visual activación +');
  if (feeder.visual === 'deactivation') parts.push('visual desactivación -');
  if (feeder.minPath) parts.push(`umbral ${feeder.minPath}`);
  if (feeder.pathValue !== undefined) parts.push(`carga ${feeder.pathValue}/2`);
  if (feeder.scaleMax !== undefined) parts.push(`escala 0-${feeder.scaleMax} → 0-2`);
  if (feeder.w && feeder.w !== 1) parts.push(`w=${feeder.w}`);
  const cond = constructConditionText(feeder);
  return parts.join(' · ') + (cond ? ` ·${cond}` : '');
}
function constructRulesFromMap(domainMap, sourceId, raw, label, opts={}) {
  if (!domainMap) return [];
  const rules = [];
  const candidates = constructSourceCandidates(sourceId);
  Object.entries(domainMap).forEach(([domain, feeders]) => {
    if (opts.omitLPFS && constructIsLPFS(domain)) return;
    (feeders || []).forEach(f => {
      if (!candidates.includes(f.id)) return;
      if (!feederSignalAtRaw(f, raw).signal) return;
      const inherited = f.id !== sourceId ? ` via ${f.id}` : '';
      const role = label === 'HiTOP' && typeof hitopFeederRole === 'function' ? ` · ${hitopRoleLabel(hitopFeederRole(domain, f))}` : '';
      rules.push(`${label}:${constructCleanName(domain)} = ${constructScoreModeLabel(f)}${role}${inherited}`);
    });
  });
  return rules;
}
function constructBrainRuleText(brain, sourceId=null) {
  if (!brain) return [];
  const netNames = {};
  BRAIN_NETS.forEach(n => { netNames[n.id] = n.short || n.id; });
  return Object.entries(brain).map(([netId, spec]) => {
    const rules = Array.isArray(spec?.[0]) ? spec : [spec];
    const body = rules.map(rule => {
      const role = sourceId ? `:${brainRoleAbbr(brainRuleRole(sourceId, netId, rule[0], rule[1]))}` : '';
      return `${rule[0]}:${rule[1]}${role}`;
    }).join(', ');
    return `${netNames[netId] || netId} ${body}`;
  });
}
function constructRulesForSource(sourceId, raw) {
  const rules = [
    ...constructRulesFromMap(HITOP_MAP, sourceId, raw, 'HiTOP'),
    ...constructRulesFromMap(RDOC_MAP, sourceId, raw, 'RDoC')
  ];
  const brain = constructBrainForSource(sourceId) || CONSTRUCT_MATRIX_OVERRIDES[`${sourceId}:${constructScoreKey(sourceId, raw)}`]?.brain;
  if (brain) rules.push(`Brain:magnitud = ${isContentSourceId(sourceId) ? 'score/4' : '|score|/2'}; C=hub central, M=mecanismo puente, A=accesorio`);
  return constructUnique(rules);
}
function constructListHTML(items, empty='—') {
  const clean = constructUnique(items);
  if (!clean.length) return `<span class="cm-empty">${empty}</span>`;
  return clean.map(x => `<span class="cm-tag">${constructEscape(x)}</span>`).join('');
}
function constructMatrixRows(opts={}) {
  const rows = [];
  constructScoreItems().forEach((item, itemIndex) => {
    if (item.id === 'F4.contenido' && typeof CONTENT_SPLIT_CHANNELS !== 'undefined') return;
    Object.keys(item.scores || {}).forEach(scoreKey => {
      const raw = parseInt(scoreKey, 10);
      if (Number.isNaN(raw) || raw === 0) return;
      const canonicalKey = constructScoreKey(item.id, raw);
      const id = `${item.id}:${canonicalKey}`;
      const override = CONSTRUCT_MATRIX_OVERRIDES[id] || {};
      const label = override.label || constructLabel(item.id, raw);
      const derivedHiTOP = constructDomainsFromMapAll(HITOP_MAP, item.id, raw);
      const derivedRDoC = constructDomainsFromMapAll(RDOC_MAP, item.id, raw);
      const hitop = constructUnique([...(override.hitop || []), ...derivedHiTOP]);
      const rdoc = constructUnique([...(override.rdoc || []), ...derivedRDoC]);
      const brain = override.brain || constructBrainForSource(item.id);
      rows.push({
        id,
        sourceId:item.id,
        sourceLabel:item.label || item.id,
        scoreKey:canonicalKey,
        raw,
        label,
        hitop,
        rdoc,
        brain,
        brainRules:constructBrainRuleText(brain, item.id),
        rules:constructRulesForSource(item.id, raw),
        order:itemIndex
      });
    });
  });
  const rank = {'-2':0,'-1':1,'+1':2,'+2':3,'1':4,'2':5,'3':6,'4':7};
  rows.sort((a,b) => a.order - b.order || (rank[a.scoreKey] ?? 99) - (rank[b.scoreKey] ?? 99) || a.raw - b.raw);
  if (opts.onlyMapped) return rows.filter(r => r.hitop.length || r.rdoc.length || r.brain);
  return rows;
}
function constructScoreClass(raw, sourceId) {
  if (isContentSourceId(sourceId)) return raw >= 4 ? 'cm-extreme' : raw >= 2 ? 'cm-signal' : '';
  if (Math.abs(raw) >= 2) return 'cm-extreme';
  if (Math.abs(raw) >= 1) return 'cm-signal';
  return '';
}
function renderConstructMatrix() {
  const rows = constructMatrixRows();
  const body = rows.map(r => {
    const scoreCls = constructScoreClass(r.raw, r.sourceId);
    const brain = r.brainRules.length ? r.brainRules.join(' · ') : '—';
    const rules = r.rules.length ? r.rules.join(' · ') : 'score bruto; sin feeder activo en mapas principales';
    return `<tr>
      <td class="cm-source"><span>${constructEscape(r.sourceLabel)}</span><small>${constructEscape(r.sourceId)}</small></td>
      <td><span class="cm-score ${scoreCls}">${constructEscape(r.scoreKey)}</span></td>
      <td class="cm-construct">${constructEscape(r.label)}</td>
      <td class="cm-tags">${constructListHTML(r.hitop)}</td>
      <td class="cm-tags">${constructListHTML(r.rdoc)}</td>
      <td class="cm-brain">${constructEscape(brain)}</td>
      <td class="cm-rules">${constructEscape(rules)}</td>
    </tr>`;
  }).join('');
  return `<details class="profile-block profile-block-collapsible construct-matrix-block">
    <summary>
      <h2>Matriz bMSE → constructos</h2>
      <span class="collapse-hint">▾</span>
    </summary>
    <div class="h-sub">Todos los scores no-cero se traducen a constructos HiTOP/RDoC y redes. LPFS se conserva como grupo visible de Personality Function.</div>
    <div class="construct-rules">
      <div><b>Directo</b><span>+1/+2 activan señal; +2 es extrema.</span></div>
      <div><b>Inverso</b><span>-1/-2 activan señal; -2 es extrema.</span></div>
      <div><b>Absoluto</b><span>ambos polos cuentan por |score|.</span></div>
      <div><b>HiTOP color</b><span>gris sin señal, naranja |1|, rojo |2| o F4≥4.</span></div>
      <div><b>RDoC/bMSE radar</b><span>media ponderada del score clínico bruto; inverso/absoluto/polo solo deciden entrada. Sueño: hipersomnia=+, insomnio=-, necesidad reducida=+.</span></div>
      <div><b>Prioridad</b><span>un hallazgo priorizado multiplica su peso por 1.6 en outcomes compuestos y conserva decimales.</span></div>
      <div><b>Brain</b><span>C=hub central, M=mecanismo puente, A=accesorio; azul=hipo, rojo=hiper, violeta=mixto.</span></div>
    </div>
    <div class="construct-table-wrap">
      <table class="construct-table">
        <thead><tr><th>Dimensión</th><th>Score</th><th>Constructo bMSE</th><th>HiTOP</th><th>RDoC</th><th>Brain Inference</th><th>Regla</th></tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  </details>`;
}

function brainReadScores() {
  const scores = {};
  getActiveConstructs().forEach(c => { if (c.brain) scores[c.id] = c.raw; });
  return scores;
}

function brainInfer() {
  const constructs = getActiveConstructs().filter(c => c.brain);
  const result = {};
  BRAIN_NETS.forEach(net => {
    result[net.id] = { hypo:0, hyper:0, maxHypo:0, maxHyper:0, roleCounts:{central:0, mechanism:0, accessory:0}, contribs:[] };
  });
  function brainRuleMagnitude(signal, dir) {
    const s = signal.raw;
    if (signal.sourceId === 'FUN.oas_hetero_total') {
      return Math.min(1, Math.max(0, s / 28));
    }
    if (signal.sourceId === 'FUN.oas_auto_total') {
      return Math.min(1, Math.max(0, s / 12));
    }
    if (signal.sourceId === 'F4.contenido' && (dir === 'pathHypo' || dir === 'pathHyper')) {
      return Math.min(1, Math.max(0, s / 4));
    }
    return Math.min(1, Math.abs(s) / 2);
  }
  function addBrainRule(r, signal, mag, w, dir, signAware, netId) {
    const s = signal.raw;
    const role = brainRuleRole(signal.sourceId, netId, w, dir);
    const effW = brainEffectiveWeight(signal.sourceId, netId, w, dir);
    const isNeg = s < 0;
    const isPos = s > 0;
    const isZero = s === 0;
    const active = (
      dir === 'mirror' || dir === 'hypo' || dir === 'hyper' ||
      dir === 'pathHypo' || dir === 'pathHyper' ||
      (dir === 'negHypo' || dir === 'negHyper' ? isNeg : false) ||
      (dir === 'posHypo' || dir === 'posHyper' ? isPos : false)
    );
    if (signAware && !active && !isZero) return;

    if (dir === 'mirror') {
      r.maxHypo += effW; r.maxHyper += effW;
      if (isNeg) { r.hypo += effW*mag; r.roleCounts[role]++; r.contribs.push({...signal, s, role, contrib:effW*mag, dir:'hypo'}); }
      else if (isPos) { r.hyper += effW*mag; r.roleCounts[role]++; r.contribs.push({...signal, s, role, contrib:effW*mag, dir:'hyper'}); }
    } else if (dir === 'hypo') {
      r.maxHypo += effW;
      if (isNeg) { r.hypo += effW*mag; r.roleCounts[role]++; r.contribs.push({...signal, s, role, contrib:effW*mag, dir:'hypo'}); }
    } else if (dir === 'hyper') {
      r.maxHyper += effW;
      if (isPos) { r.hyper += effW*mag; r.roleCounts[role]++; r.contribs.push({...signal, s, role, contrib:effW*mag, dir:'hyper'}); }
    } else if (dir === 'pathHypo') {
      r.maxHypo += effW;
      if (s > 0) { r.hypo += effW*mag; r.roleCounts[role]++; r.contribs.push({...signal, s, role, contrib:effW*mag, dir:'hypo'}); }
    } else if (dir === 'pathHyper') {
      r.maxHyper += effW;
      if (s > 0) { r.hyper += effW*mag; r.roleCounts[role]++; r.contribs.push({...signal, s, role, contrib:effW*mag, dir:'hyper'}); }
    } else if (dir === 'negHypo') {
      r.maxHypo += effW;
      if (isNeg) { r.hypo += effW*mag; r.roleCounts[role]++; r.contribs.push({...signal, s, role, contrib:effW*mag, dir:'hypo'}); }
    } else if (dir === 'negHyper') {
      r.maxHyper += effW;
      if (isNeg) { r.hyper += effW*mag; r.roleCounts[role]++; r.contribs.push({...signal, s, role, contrib:effW*mag, dir:'hyper'}); }
    } else if (dir === 'posHypo') {
      r.maxHypo += effW;
      if (isPos) { r.hypo += effW*mag; r.roleCounts[role]++; r.contribs.push({...signal, s, role, contrib:effW*mag, dir:'hypo'}); }
    } else if (dir === 'posHyper') {
      r.maxHyper += effW;
      if (isPos) { r.hyper += effW*mag; r.roleCounts[role]++; r.contribs.push({...signal, s, role, contrib:effW*mag, dir:'hyper'}); }
    }
  }
  constructs.forEach(signal => {
    const mapping = signal.brain;
    if (!mapping) return;
    Object.entries(mapping).forEach(([netId, spec]) => {
      const r = result[netId];
      if (!r) return;
      const rules = Array.isArray(spec?.[0]) ? spec : [spec];
      const signAware = rules.length > 1 || String(rules[0]?.[1] || '').startsWith('neg') || String(rules[0]?.[1] || '').startsWith('pos');
      rules.forEach(rule => addBrainRule(r, signal, brainRuleMagnitude(signal, rule[1]), rule[0], rule[1], signAware, netId));
    });
  });
  Object.keys(result).forEach(netId => {
    const r = result[netId];
    r.pHypo = r.maxHypo > 0 ? r.hypo / r.maxHypo : 0;
    r.pHyper = r.maxHyper > 0 ? r.hyper / r.maxHyper : 0;
    const hasCentral = r.roleCounts.central > 0;
    const hasMechanism = r.roleCounts.mechanism > 0;
    if (!hasCentral && !hasMechanism) {
      r.pHypo = Math.min(r.pHypo, 0.18);
      r.pHyper = Math.min(r.pHyper, 0.18);
    } else if (!hasCentral) {
      r.pHypo = Math.min(r.pHypo, 0.55);
      r.pHyper = Math.min(r.pHyper, 0.55);
    }
    r.alter = Math.max(r.pHypo, r.pHyper);
    if (r.pHypo > 0.08 && r.pHyper > 0.08 && Math.min(r.pHypo, r.pHyper) / Math.max(r.pHypo, r.pHyper) > 0.5) r.dir = 'mixed';
    else if (r.pHypo > r.pHyper) r.dir = 'hypo';
    else if (r.pHyper > r.pHypo) r.dir = 'hyper';
    else r.dir = 'balanced';
    r.contribs.sort((a,b) => b.contrib - a.contrib);
  });
  return { result, nScored: constructs.length };
}

function brainDirColor(dir) {
  return dir === 'hypo' ? '#3b82f6' : dir === 'hyper' ? '#ef4444' : dir === 'mixed' ? '#a855f7' : '#94a3b8';
}
function brainDirLabel(dir) {
  return dir === 'hypo' ? '&darr; hipo' : dir === 'hyper' ? '&uarr; hiper' : dir === 'mixed' ? '&harr; mixto' : '&minus;';
}

function brainConnectivityLevel(score) {
  let level = 'Baja', color = '#16a34a';
  if (score >= 70) { level = 'Alta'; color = '#dc2626'; }
  else if (score >= 45) { level = 'Moderada'; color = '#d97706'; }
  else if (score >= 20) { level = 'Leve'; color = '#0891b2'; }
  return { level, color };
}

function brainGlobalConnectivityIndices(result) {
  const vals = BRAIN_NETS.map(net => result[net.id]).filter(Boolean);
  if (!vals.length) {
    const empty = { score:0, level:'Sin datos', color:'#94a3b8', activeCount:0, peak:0, mean:0 };
    return { GND:empty, GNH:empty, GDD:empty };
  }
  function build(metric, includeMixed) {
    const mean = vals.reduce((sum, r) => sum + r[metric], 0) / vals.length;
    const activeCount = vals.filter(r => r[metric] >= 0.25).length;
    const spread = activeCount / vals.length;
    const peak = Math.max(...vals.map(r => r[metric]));
    const mixed = includeMixed ? vals.filter(r => r.dir === 'mixed').length / vals.length : 0;
    const base = 0.55*mean + 0.30*spread + 0.15*peak;
    const score = Math.round(Math.min(1, base + 0.05*mixed) * 100);
    return { score, ...brainConnectivityLevel(score), activeCount, peak, mean };
  }
  return {
    GND: build('pHypo', false),
    GNH: build('pHyper', false),
    GDD: build('alter', true)
  };
}

function brainDisconnectIndex(result) {
  return brainGlobalConnectivityIndices(result).GDD;
}

function brainIndexChip(label, title, idx) {
  return `<div style="flex:1;min-width:78px;padding:6px 7px;border:1px solid ${idx.color}33;border-radius:5px;background:#fff">
    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:6px">
      <span style="font-size:9px;font-weight:800;color:${idx.color};letter-spacing:0.04em">${label}</span>
      <span style="font-size:13px;font-weight:800;color:${idx.color}">${idx.score}</span>
    </div>
    <div style="font-size:9px;color:var(--text-muted);line-height:1.15">${title}</div>
  </div>`;
}

function brainDisconnectCard(result) {
  const indices = brainGlobalConnectivityIndices(result);
  const idx = indices.GDD;
  const pctPeak = Math.round(idx.peak * 100);
  const pctMean = Math.round(idx.mean * 100);
  return `<div class="brain-disconnect" style="margin-top:10px;padding:9px 10px;border:1px solid ${idx.color}33;border-left:3px solid ${idx.color};border-radius:6px;background:${idx.color}0d;font-family:var(--font-body)">
    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px">
      <div style="font-size:10px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:${idx.color}">GDD &middot; Disconectividad global</div>
      <div style="font-size:18px;font-weight:800;color:${idx.color};line-height:1">${idx.score}<span style="font-size:10px;font-weight:700">/100</span></div>
    </div>
    <div style="font-size:11px;color:var(--text);margin-top:2px">${idx.level} &middot; ${idx.activeCount}/${BRAIN_NETS.length} redes activas &middot; pico ${pctPeak}% &middot; media ${pctMean}%</div>
    <div style="height:5px;background:#e7e5e4;border-radius:999px;margin-top:7px;overflow:hidden"><div style="height:100%;width:${idx.score}%;background:${idx.color};border-radius:999px"></div></div>
    <div style="display:flex;gap:6px;margin-top:7px">
      ${brainIndexChip('GND','desconexi&oacute;n',indices.GND)}
      ${brainIndexChip('GNH','hiperconectividad',indices.GNH)}
    </div>
  </div>`;
}

function brainRenderSVG(opts) {
  const { result, nScored } = brainInfer();
  const compact = !!opts.compact;
  const W = compact ? 340 : 420;
  const H = compact ? 260 : 320;

  // Definiciones: gradientes radiales tipo hot-spot fMRI
  const defs = `<defs>
    <radialGradient id="hotHyper" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="1"/>
      <stop offset="30%" stop-color="#fb923c" stop-opacity="0.95"/>
      <stop offset="65%" stop-color="#ef4444" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#7f1d1d" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="hotHypo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#cffafe" stop-opacity="1"/>
      <stop offset="30%" stop-color="#22d3ee" stop-opacity="0.95"/>
      <stop offset="65%" stop-color="#3b82f6" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#1e3a8a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="hotMixed" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f5d0fe" stop-opacity="1"/>
      <stop offset="30%" stop-color="#c084fc" stop-opacity="0.95"/>
      <stop offset="65%" stop-color="#9333ea" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#581c87" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="hotIdle" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e7e5e4" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#e7e5e4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="brainFill" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#fafaf9"/>
      <stop offset="80%" stop-color="#e7e5e4"/>
      <stop offset="100%" stop-color="#d6d3d1"/>
    </radialGradient>
    <linearGradient id="brainShade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.08"/>
    </linearGradient>
    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>`;

  // Cerebro sagital anatomicamente estilizado (sulci, lobulos, cerebelo, tronco)
  // viewBox normalizado 0-100 escalado a W,H
  const sx = W / 100, sy = H / 100;
  const P = (x,y) => `${(x*sx).toFixed(1)},${(y*sy).toFixed(1)}`;
  // Outline cortical principal con leves protuberancias (gyri)
  const cortexPath = `M ${P(8,52)}
    C ${P(7,30)} ${P(20,12)} ${P(38,9)}
    C ${P(48,7)} ${P(56,8)} ${P(64,10)}
    C ${P(72,8)} ${P(80,11)} ${P(86,18)}
    C ${P(94,26)} ${P(96,40)} ${P(94,52)}
    C ${P(93,62)} ${P(91,70)} ${P(86,76)}
    C ${P(82,80)} ${P(76,82)} ${P(70,82)}
    C ${P(64,82)} ${P(58,80)} ${P(54,79)}
    L ${P(50,79)}
    C ${P(44,80)} ${P(36,82)} ${P(28,80)}
    C ${P(20,78)} ${P(14,72)} ${P(10,64)}
    C ${P(8,58)} ${P(8,55)} ${P(8,52)} Z`;
  // Cerebelo (posterior inferior derecha)
  const cerebelo = `<ellipse cx="${(78*sx)}" cy="${(82*sy)}" rx="${(11*sx)}" ry="${(7*sy)}" fill="url(#brainFill)" stroke="#a8a29e" stroke-width="0.8"/>
    <path d="M ${P(70,80)} Q ${P(74,82)} ${P(78,80)} Q ${P(82,82)} ${P(86,80)}" fill="none" stroke="#a8a29e" stroke-width="0.5" opacity="0.5"/>
    <path d="M ${P(70,84)} Q ${P(74,86)} ${P(78,84)} Q ${P(82,86)} ${P(86,84)}" fill="none" stroke="#a8a29e" stroke-width="0.5" opacity="0.5"/>`;
  // Tronco encefalico
  const tronco = `<path d="M ${P(72,80)} Q ${P(74,88)} ${P(74,95)} L ${P(70,98)} L ${P(66,95)} Q ${P(66,88)} ${P(68,80)} Z" fill="url(#brainFill)" stroke="#a8a29e" stroke-width="0.8"/>`;
  // Sulci sutiles (lineas curvas internas)
  const sulci = `<g stroke="#a8a29e" stroke-width="0.4" fill="none" opacity="0.45">
    <path d="M ${P(20,30)} Q ${P(30,28)} ${P(40,32)} Q ${P(50,34)} ${P(60,30)} Q ${P(72,30)} ${P(82,36)}"/>
    <path d="M ${P(15,45)} Q ${P(28,46)} ${P(42,44)} Q ${P(58,42)} ${P(72,46)} Q ${P(84,48)} ${P(90,50)}"/>
    <path d="M ${P(18,60)} Q ${P(30,62)} ${P(44,60)} Q ${P(60,58)} ${P(74,62)}"/>
    <path d="M ${P(35,18)} Q ${P(40,22)} ${P(42,30)}"/>
    <path d="M ${P(55,15)} Q ${P(58,22)} ${P(60,30)}"/>
    <path d="M ${P(70,18)} Q ${P(72,26)} ${P(74,34)}"/>
  </g>`;
  // Cisura de Silvio (lateral sulcus)
  const silvio = `<path d="M ${P(18,52)} Q ${P(35,50)} ${P(50,52)} Q ${P(68,55)} ${P(84,54)}" fill="none" stroke="#78716c" stroke-width="0.7" opacity="0.55"/>`;
  // Cuerpo calloso (sutil, interno)
  const ccPath = `<path d="M ${P(30,42)} Q ${P(50,38)} ${P(70,42)}" fill="none" stroke="#a8a29e" stroke-width="0.5" stroke-dasharray="1.5,1.5" opacity="0.4"/>`;

  // Nodos = hot spots tipo fMRI activation
  let nodes = '';
  const scaled = BRAIN_NETS.map(n => ({ ...n, px:(n.x/100)*W, py:(n.y/100)*H, data: result[n.id] }));
  scaled.forEach(n => {
    const d = n.data;
    const r = 8 + d.alter * 22; // hot spot radius
    const grad = d.alter === 0 ? 'hotIdle' : (d.dir==='hypo' ? 'hotHypo' : d.dir==='hyper' ? 'hotHyper' : 'hotMixed');
    const dotColor = brainDirColor(d.dir);
    const pulse = d.alter > 0.55 ? `<circle cx="${n.px}" cy="${n.py}" r="${r*0.55}" fill="none" stroke="${dotColor}" stroke-width="1.4" stroke-opacity="0.55"><animate attributeName="r" from="${r*0.55}" to="${r*0.95}" dur="1.8s" repeatCount="indefinite"/><animate attributeName="stroke-opacity" from="0.65" to="0" dur="1.8s" repeatCount="indefinite"/></circle>` : '';
    const labelBg = d.alter > 0.05 ? `<rect x="${n.px - 18}" y="${n.py + r*0.6 + 2}" width="36" height="11" rx="2.5" fill="#1c1917" fill-opacity="0.78"/>` : '';
    const labelFill = d.alter > 0.05 ? '#fafaf9' : '#a8a29e';
    nodes += `<g class="brain-node" data-net="${n.id}">
      ${d.alter > 0 ? `<circle cx="${n.px}" cy="${n.py}" r="${r}" fill="url(#${grad})" filter="url(#softGlow)"/>` : `<circle cx="${n.px}" cy="${n.py}" r="${r}" fill="url(#${grad})"/>`}
      <circle cx="${n.px}" cy="${n.py}" r="2.2" fill="${dotColor}" opacity="${0.4 + d.alter*0.6}"/>
      ${pulse}
      ${labelBg}
      <text x="${n.px}" y="${n.py + r*0.6 + 10}" text-anchor="middle" font-size="8.5" font-weight="700" fill="${labelFill}" font-family="Inter, system-ui, sans-serif">${n.short}</text>
      <title>${n.name}: ${Math.round(d.alter*100)}% ${d.dir}</title>
    </g>`;
  });

  // Anatomical orientation labels (sutiles)
  const orient = `<g font-size="7.5" font-family="Inter, system-ui, sans-serif" fill="#a8a29e" font-weight="600" letter-spacing="0.5">
    <text x="${5*sx}" y="${15*sy}">ANT</text>
    <text x="${88*sx}" y="${15*sy}">POST</text>
  </g>`;

  const svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;display:block;margin:0 auto;background:linear-gradient(180deg,#fafaf9 0%, #f5f5f4 100%);border-radius:8px" aria-label="Brain Inference Map">${defs}
    <path d="${cortexPath}" fill="url(#brainFill)" stroke="#78716c" stroke-width="1.2"/>
    <path d="${cortexPath}" fill="url(#brainShade)" opacity="0.6"/>
    ${cerebelo}
    ${tronco}
    ${sulci}
    ${silvio}
    ${ccPath}
    ${nodes}
    ${orient}
  </svg>`;

  // Legend con nombres completos
  let legend = '';
  const sorted = [...scaled].sort((a,b) => b.data.alter - a.data.alter);
  sorted.forEach(n => {
    const d = n.data;
    const pct = Math.round(d.alter * 100);
    const color = brainDirColor(d.dir);
    legend += `<div class="brain-legend-row" title="${n.name} &mdash; ${n.desc}">
      <div class="brain-legend-dot" style="background:${color};opacity:${0.3+d.alter*0.7}"></div>
      <div class="brain-legend-text">
        <div class="brain-legend-name">${n.name}</div>
        <div class="brain-legend-abbr">${n.abbr}</div>
      </div>
      <div class="brain-legend-dir" style="color:${color}">${pct ? brainDirLabel(d.dir) : ''}</div>
      <div class="brain-legend-pct">${pct}%</div>
    </div>`;
  });

  // Top contribuyentes
  let contribsHTML = '';
  const topNets = sorted.filter(n => n.data.alter > 0.2).slice(0,3);
  if (topNets.length) {
    let rows = '';
    topNets.forEach(n => {
      const topDims = n.data.contribs.slice(0,3).map(c => {
        const sign = c.s > 0 ? '+'+c.s : ''+c.s;
        const role = c.role ? brainRoleAbbr(c.role) : '';
        const roleTitle = c.role ? ` · ${brainRoleLabel(c.role)}` : '';
        const title = `${c.sourceId || c.id}: ${c.construct || c.id}${roleTitle}`;
        return `<div class="contrib-row" title="${constructEscape(title)}"><span class="contrib-dim">${constructEscape(c.label || c.id)}</span><span>${role ? `<span class="contrib-role">${role}</span>` : ''}${sign}</span></div>`;
      }).join('');
      rows += `<div style="margin-top:8px"><div style="font-size:10px;font-weight:700;color:${brainDirColor(n.data.dir)}">${n.name} &mdash; top contribuyentes</div>${topDims}</div>`;
    });
    contribsHTML = `<div class="brain-contribs"><details><summary>Ver constructos que m&aacute;s pesan</summary><div class="contrib-list">${rows}</div></details></div>`;
  }

  // Colormap leyenda (mini)
  const colormap = `<div class="brain-colormap">
    <div class="brain-colormap-row"><span class="brain-colormap-swatch" style="background:linear-gradient(90deg,#cffafe,#22d3ee,#3b82f6)"></span><span>Hipoactivacion</span></div>
    <div class="brain-colormap-row"><span class="brain-colormap-swatch" style="background:linear-gradient(90deg,#fef08a,#fb923c,#ef4444)"></span><span>Hiperactivacion</span></div>
    <div class="brain-colormap-row"><span class="brain-colormap-swatch" style="background:linear-gradient(90deg,#f5d0fe,#c084fc,#9333ea)"></span><span>Mixto</span></div>
  </div>`;

  const disclaimer = `<div class="brain-disclaimer"><strong>Inferencia probabil&iacute;stica</strong> sobre redes/circuitos dadas <strong>${nScored}</strong> dimensiones puntuadas. Hip&oacute;tesis testeable, NO medici&oacute;n directa. Priors derivados de literatura cl&iacute;nico-neurocient&iacute;fica.</div>`;

  const disconnect = brainDisconnectCard(result);
  if (compact) {
    return svg + colormap + disconnect + `<div class="brain-legend">${legend}</div>` + contribsHTML + disclaimer;
  }
  return `<div>${svg}${colormap}${disconnect}${disclaimer}</div><div><div class="brain-legend">${legend}</div>${contribsHTML}</div>`;
}

function brainUpdate() {
  const { nScored } = brainInfer();
  // Badge contador
  const badge = document.getElementById('brainFabBadge');
  if (badge) {
    if (nScored > 0) { badge.textContent = nScored; badge.classList.remove('hidden'); }
    else { badge.classList.add('hidden'); }
  }
  // Widget flotante (solo si esta abierto)
  const popup = document.getElementById('brainPopup');
  if (popup && popup.classList.contains('open')) {
    const body = document.getElementById('brainWidgetBody');
    if (body) body.innerHTML = nScored === 0
      ? `<div class="brain-empty">Comience a puntuar dimensiones. La inferencia se activa al primer score.</div>`
      : brainRenderSVG({compact:true});
  }
  // Panel del perfil
  const panel = document.getElementById('brainPanelBody');
  if (panel) {
    const compactPanel = !!(panel.closest && panel.closest('.profile-dashboard'));
    panel.innerHTML = nScored === 0
      ? `<div class="brain-empty">Sin scores suficientes para inferir.</div>`
      : brainRenderSVG({compact:compactPanel});
  }
}

function toggleBrainPopup() {
  const popup = document.getElementById('brainPopup');
  if (!popup) return;
  popup.classList.toggle('open');
  if (popup.classList.contains('open')) brainUpdate();
}
