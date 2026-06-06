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
      {id:'F',type:'checkbox',label:'[F] Fluctuación'},
      {id:'O:T',type:'checkbox',label:'[O:T] Desorientación temporal'},
      {id:'O:E',type:'checkbox',label:'[O:E] Desorientación espacial'},
      {id:'O:P',type:'checkbox',label:'[O:P] Desorientación personal'}
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
    scores:{'-2':'Flat','-1':'Restricted','0':'Broad (proporcional)','+1':'Exaggerated','+2':'Labile/desbordada'},
    details:{
      '-2':{nivel:'Flat',loQueVes:'Cara inmóvil, voz monótona, sin gestos, contacto visual ausente/fijo-vacío. No cambia con temas emocionales.',loQueDice:'Respuestas breves, sin entonación emocional.',contra:'',clasica:'AMDP: 61 (afecto embotado). DSM-5: SZ diminished emotional expression. Fish: Aplanamiento afectivo, Embotamiento.'},
      '-1':{nivel:'Restricted',loQueVes:'Rango limitado: sonríe brevemente, prosodia reducida, gestos mínimos. Responde pero "apagado".',loQueDice:'Respuestas con poco color emocional.',contra:'',clasica:'AMDP: 61 leve.'},
      '0':{nivel:'Broad (proporcional)',loQueVes:'Expresión proporcional: sonríe cuando corresponde, voz modulada, gestos ilustrativos, mirada social natural.',loQueDice:'Comunicación emocionalmente congruente.',contra:'',clasica:''},
      '+1':{nivel:'Exaggerated',loQueVes:'Amplificada: ríe fuerte, llora fácil, gestos dramáticos, prosodia teatral. Pero congruente con contenido.',loQueDice:'Expresión emocional amplificada pero coherente.',contra:'',clasica:'AMDP: 66 (euforia expresiva).'},
      '+2':{nivel:'Labile/desbordada',loQueVes:'Cambios rápidos, desproporcionados, sin control: ríe→llora en segundos, expresión no match trigger.',loQueDice:'Expresión emocional incongruente con el contenido.',contra:'',clasica:'AMDP: 68 (irritabilidad grave), 67 (disforia expresiva). Fish: Excitación, Labilidad.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','61 (afecto embotado)','61 leve','—','66 (euforia expresiva)','68 (irritabilidad grave), 67 (disforia)'],
        ['ICD-11','MB24.64 (afecto inapropiado), MB23.K (pobreza habla)','—','—','—','MB24.1 (ira), MB24.C (irritabilidad)'],
        ['DSM-5','SZ (diminished emotional expression)','—','—','—','BD-I (expansive, pressured)'],
        ['Fish (2019)','Aplanamiento afectivo, Embotamiento','—','—','—','Excitación, Labilidad'],
        ['HiTOP','Inexpressivity','—','—','—','—']
      ]
    },
    guide:['Observe expresión facial, prosodia vocal, gestualidad, contacto visual durante la entrevista.','¿Cambia la expresión con temas emocionales?','¿Los cambios son proporcionales o desproporcionados al contenido?'],
    specifiers:[
      {id:'canal',type:'radio',label:'Canal afectado',options:['[facial]','[vocal]','[gestual]','[contacto visual]','[global]'],showWhen:'!=0'},
      {id:'mecanismo_neg',type:'radio',label:'Mecanismo (polo −)',options:['[negativos]','[depresivo]','[neurológico]','[disociativo]','[developmental]'],showWhen:'<0'},
      {id:'mecanismo_pos',type:'radio',label:'Mecanismo (polo +)',options:['[maníaco]','[labile]','[teatral]','[pseudobulbar]'],showWhen:'>0'}
    ]
  },
  {
    id:'F2.velocidad', code:'F2', title:'Velocidad psicomotora', type:'bipolar',
    scores:{'-2':'Retardo severo','-1':'Enlentecimiento sutil','0':'Proporcional','+1':'Activación leve','+2':'Agitación severa'},
    details:{
      '-2':{nivel:'Retardo severo',loQueVes:'Latencia respuesta >5s consistente, movimientos enlentecidos visibles, interfiere AVDs. Puede llegar a estupor/mutismo motor.',loQueDice:'Respuestas con latencia prolongada. Voz apagada. Contenido reducido.',contra:'Frustración empática. Impulso de completar frases del paciente.',clasica:'AMDP: 136 (hipocinesia). ICD-11: MB23.N (retardo psicomotor), MB23.3 (bradifrenia). HiTOP: Lasitud, Retardo psicomotor. Forbes: Deterioro psicomotor. SCIP: D5 (psychomotor retardation=2), NEG5 (psychomotor slowing=2). Reischies: ch07 (inhibición motora grave). Fish: Retardo psicomotor, Estupor, Acinesia, Obstrucción. Vallejo: Retardo psicomotor, Estupor. Eguíluz: Estupor recurrente, Acinesia psíquica, Bradifasia.',circuito:'Ganglios basales (caudado→putamen→pálido) hipoactivos. SMA (área motora suplementaria) sin input suficiente. DA estriatal ↓↓. Corteza premotora desconectada de output motor.',precision:'Depresión melancólica: CORE score alto → TEC si ISRS falla. Parkinsonismo: DA agonistas. Catatonía: lorazepam IV → TEC. CORE/MARS como monitor de respuesta.'},
      '-1':{nivel:'Enlentecimiento sutil',loQueVes:'Enlentecimiento detectable por cronometraje o informante. Pausas aumentadas, movimiento ralentizado sin impacto funcional mayor.',loQueDice:'Respuestas algo lentas pero comprensibles.',contra:'El clínico nota latencia sutil.',clasica:'AMDP: 136 leve. SCIP: D5 (psychomotor retardation=1), NEG5 (psychomotor slowing=1). Fish: Obstrucción. Eguíluz: Bradifasia. Reischies: ch07 (inhibición motora leve).',circuito:'DA estriatal parcialmente atenuada. SMA input reducido pero funcional.',precision:'Monitorear: ¿progresa a -2? CORE leve. Activación conductual antes de farmaco.'},
      '0':{nivel:'Proporcional',loQueVes:'Velocidad proporcional al contexto y demanda.',loQueDice:'Fluidez normal.',contra:'Entrevista cómoda, ritmo natural.',clasica:'',circuito:'Balance DA estriatal. SMA calibrada. Output motor proporcional al input.',precision:''},
      '+1':{nivel:'Activación leve',loQueVes:'Habla acelerada en temas relevantes, gesticulación aumentada, inquietud postural, dificultad para permanecer quieto.',loQueDice:'Habla más rápido de lo habitual, pero coherente.',contra:'El clínico siente la energía. Puede redirigir.',clasica:'AMDP: 82 leve (impulso aumentado). ICD-11: MB22.4 (energía aumentada). SCIP: HYP3 (restlessness=1), M5 (pressured speech=1). Forbes: Inquietud motora. Vallejo: Agitación psicomotora leve. Reischies: ch07 (impulso aumentado).',circuito:'DA estriatal ↑. NE ↑ (locus coeruleus). SMA hiperactiva pero regulable.',precision:'Hipomanía: monitorear escalada. Ansiedad: ¿G.arousal +1 concordante? Si iatrogénico (ISRS activación): ajustar dosis.'},
      '+2':{nivel:'Agitación severa',loQueVes:'Imposible permanecer sentado >2 min, taquilalia sostenida, pacing, hand-wringing, movimiento no-dirigido constante.',loQueDice:'Habla presionada, difícil de interrumpir.',contra:'Agotamiento del clínico. Impulso de contener o terminar entrevista.',clasica:'AMDP: 83 (agitación motora), 88 (logorrea). ICD-11: MB23.M (agitación psicomotora), MB23.L (habla presionada). HiTOP: Agitación psicomotora. Forbes: Agitación, Habla presionada. SCIP: AG3 (physical agitation), M5 (pressured speech=2), BEH107 (agitation). Reischies: ch07 (inquietud motora), ch07 (logorrea). Fish: Excitación psicomotora, Paracinesia. Vallejo: Agitación psicomotora. Eguíluz: Agitación.',circuito:'DA estriatal ↑↑ + NE ↑↑ (locus coeruleus sin freno). SMA hiperactiva. PFC ↓ (no frena output motor). Loop cortico-estriatal desinhibido.',precision:'Manía: estabilizadores + AP. Agitación aguda: de-escalamiento → BZD/AP IM. Delirium: tratar causa + haloperidol. Distinguir de catatonía excitada (F2 +2 SIN goal-directedness → ver F3.drive).'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','136 (hipocinesia)','—','—','—','83 (agitación motora)'],
        ['ICD-11','MB23.N (retardo), MB23.3 (bradifrenia)','—','—','—','MB23.M (agitación psicomotora)'],
        ['Fish (2019)','Retardo psicomotor, Estupor, Acinesia','Obstrucción','—','—','Excitación psicomotora, Paracinesia'],
        ['Vallejo (2025)','Retardo psicomotor, Estupor','—','—','Agitación psicomotora','Agitación psicomotora'],
        ['Eguíluz (2005)','Estupor recurrente, Acinesia psíquica, Bradifasia','Bradifasia','—','—','—'],
        ['Forbes (2024)','Deterioro psicomotor','—','—','Inquietud motora','Agitación, Habla presionada']
      ]
    },
    guide:['Observe latencia de respuesta, velocidad del habla, cantidad de movimiento espontáneo.','¿Se mueve con naturalidad o hay enlentecimiento/aceleración?','¿Puede permanecer sentado?'],
    specifiers:[
      {id:'motor',type:'checkbox',label:'[motor] Afecta velocidad corporal'},
      {id:'lenguaje',type:'checkbox',label:'[lenguaje] Afecta output verbal'},
      {id:'agresivo',type:'checkbox',label:'[conducta agresiva] (solo +2)',showWhen:'==+2'}
    ]
  },
  {
    id:'F2.sensorial', code:'F2', title:'Integración sensorial', type:'bipolar',
    scores:{'-2':'Embotamiento sensorial','-1':'Hipoestesia / desrealización','0':'Procesamiento normal','+1':'Hipersensibilidad sensorial','+2':'Alucinaciones'},
    details:{
      '-2':{nivel:'Embotamiento sensorial',loQueVes:'No procesa input externo. No responde a estímulos sensoriales relevantes. Mundo interno domina. "Como si no estuviera aquí".',loQueDice:'No responde a voz/ruido. Mirada vacía. Analgesia.',contra:'Preocupación: "no está aquí". Urgencia de reactivar.',clasica:'AMDP: 51 (alucinaciones corporales — ausencia respuesta). Fish: Estupor (sin respuesta sensorial). Forbes: Embotamiento sensorial, anestesia.'},
      '-1':{nivel:'Hipoestesia / desrealización',loQueVes:'Mundo externo amortiguado: "todo suena lejano", "los colores están apagados", "como detrás de vidrio".',loQueDice:'"Todo se siente lejano." "Los colores están apagados." "Como detrás de vidrio."',contra:'Sensación de distancia. El paciente parece presente pero desconectado.',clasica:'Fish: Despersonalización/desrealización sensorial. Forbes: Embotamiento sensorial.'},
      '0':{nivel:'Procesamiento normal',loQueVes:'Percibe lo relevante, filtra lo irrelevante. Intensidad sensorial proporcional al estímulo.',loQueDice:'No reporta anomalía sensorial.',contra:'Entrevista cómoda.',clasica:''},
      '+1':{nivel:'Hipersensibilidad sensorial',loQueVes:'Hiperacusia, fotosensibilidad, sensación de sobrecarga sensorial. Experiencias perceptivas atenuadas (sombras, murmullos). Distractibilidad sensorial.',loQueDice:'"Los ruidos me molestan mucho." "Las luces me hacen daño." "A veces veo sombras por el rabillo del ojo."',contra:'El clínico nota sensibilidad exagerada a estímulos ambientales.',clasica:'RDoC: Perception construct. Forbes: Hiperacusia. DSM-5-TR: Attenuated psychosis syndrome. Equivalente: SOR (Sensory Over-Responsivity).'},
      '+2':{nivel:'Alucinaciones',loQueVes:'Alucinaciones formadas (auditivas, visuales, somáticas). Contenido interno con cualidad perceptiva. Significación anómala del entorno.',loQueDice:'"Escucho voces claras." "Veo cosas que otros no ven." "Todo tiene un significado especial."',contra:'Alarma: quiebre perceptivo. Evaluar F7 simultáneamente.',clasica:'AMDP: 46-51 (alucinaciones por modalidad). ICD-11: MB27.2 (alucinaciones). DSM-5-TR: SZ criterio A.2. Fish: Alucinación, Alucinosis. Concepto vinculado: aberrant salience (Kapur 2003).'}
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
      {id:'sens_modal',type:'radio',label:'Modalidad',options:['[auditivo]','[visual]','[táctil]','[olfatorio/gustativo]','[interoceptivo]','[multimodal]'],showWhen:'!=0'},
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
        id:'NM.tic', label:'Tics',
        instruction:'Observar durante entrevista. Movimientos rápidos, súbitos, no-rítmicos, parcialmente suprimibles.',
        scores:{'0':'Ausente','-1':'Sutil / infrecuente','-2':'Franco / múltiple / vocal'},
        specifiers:[
          {id:'tic_tipo',type:'radio',label:'Tipo',options:['Motor simple','Motor complejo','Vocal simple','Vocal complejo','Múltiples']},
          {id:'tic_loc',type:'text',label:'Localización',placeholder:'Ej: facial, cervical, extremidades'}
        ],
        circuito:'Loop CSTC (corteza motora → estriado → tálamo). DA estriatal. Disfunción inhibición motora cortical.',
        precision:'Tics + obsesiones = evaluar Tourette. Tics de novo en adulto = descartar farmacológico (estimulantes, AP) o neurológico.'
      },
      {
        id:'NM.estereotipia', label:'Estereotipias',
        instruction:'Movimientos repetitivos, rítmicos, no propositivos. Balanceo, aleteo, movimientos complejos.',
        scores:{'0':'Ausente','-1':'Sutil / situacional','-2':'Prominente / sostenido'},
        specifiers:[
          {id:'est_etiologia',type:'radio',label:'Etiología',options:['Espontánea ⚠️','Farmacológica','Catatónica']},
          {id:'est_desc',type:'text',label:'Descripción',placeholder:'Ej: balanceo, aleteo manos'}
        ],
        circuito:'Ganglios basales (loop límbico-motor). Espontánea = TEA, DI, demencia frontotemporal. Farmacológica = AP (diskinesia tardía). Catatónica = loop cortico-subcortical.',
        precision:'⚠️ Espontánea sin AP = evaluar TEA, DFT, Huntington. Catatónica + mutismo + rigidez = Bush-Francis, lorazepam.'
      },
      {
        id:'NM.diskinesia', label:'Diskinesia',
        instruction:'Examinar boca, lengua, dedos. Movimientos irregulares, no suprimibles, coreiformes.',
        scores:{'0':'Ausente','-1':'Movimientos dudosos','-2':'Diskinesia clara'},
        specifiers:[
          {id:'dk_etiologia',type:'radio',label:'Etiología',options:['Tardía (AP)','Espontánea ⚠️']},
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
          {id:'ak_tipo',type:'radio',label:'Tipo',options:['Subjetiva (siente pero no se ve)','Objetiva (se ve pero no siente)','Mixta (siente + se ve)']}
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
          {id:'tr_loc',type:'radio',label:'Distribución',options:['Manos','Generalizado','Cefálico','Mandibular']}
        ],
        circuito:'Reposo = ganglios basales (Parkinson). Postural = cerebelo + periférico (esencial, fisiológico, litio). Intencional = cerebelo (lesión hemisférica).',
        precision:'Reposo + bradicinesia + rigidez = parkinsonismo → ver NM.parkinsonismo. Postural fino nuevo = litio, valproato, ISRS → niveles séricos. Intencional = cerebeloso → neurología.'
      }
    ],
    guide:['Coordinación: 4 tests rápidos (Luria, dedo-nariz, alternancia, tándem) — 3 min total.','Involuntarios: observar durante TODA la entrevista, puntuar al final.','⚠️ Espontáneo (sin AP) = derivar a neurología.','Farmacológico = registrar AP actual, dosis, duración.'],
    frameworks:{
      headers:['Sección','Tests','Circuito','Frameworks'],
      rows:[
        ['Coordinación','Luria, Dismetría, Alternancia, Tándem','Cerebelo + GB + Premotora + Cuerpo calloso','Reischies ch05. No en AMDP/DSM-5.'],
        ['Involuntarios','Tic, Estereotipia, Diskinesia, Distonía, Acatisia, Parkinsonismo, Tremor','GB (DA nigroestriatal) + Cerebelo + CSTC','AMDP 87-90. ICD-11 MB22.2-8. DSM-5 SEP/tics. Forbes: Tremors.']
      ]
    }
  },
  {
    id:'F5.regulación', code:'F5', title:'Regulación atencional', type:'bipolar',
    scores:{'-2':'Bottom-up domina','-1':'Foco inestable','0':'Balance flexible','+1':'Foco sticky','+2':'Top-down domina'},
    details:{
      '-2':{nivel:'Bottom-up domina (DAN colapsado, VAN sin freno)',loQueVes:'No completa una frase sin saltar. Responde a todo estímulo. Narrativa fragmentada. Entrevista caótica.',loQueDice:'"No puedo concentrarme en nada." "¿Qué me preguntaba?"',contra:'Frustración: no logra mantener estructura. Impulso de simplificar preguntas.',wm:'Gate abierto: todo entra, nada se mantiene.',clasica:'AMDP: 10 (concentración alterada grave). Fish: Aprosexia. Vallejo: Aprosexia. Eguíluz: Aprosexia. DSM-5: TDAH inatención, Delirium. ICD-11: MB21.5 (distractibilidad).'},
      '-1':{nivel:'Foco inestable (DAN débil, se distrae pero recupera)',loQueVes:'Se distrae pero recupera. Pierde detalles. Necesita repetición. Latencia variable.',loQueDice:'"A veces pierdo el hilo." "Me cuesta un poco."',contra:'Leve impaciencia. Necesidad de repetir.',wm:'Gate lábil: mantiene con esfuerzo compensatorio.',clasica:'AMDP: 9 (apercepción alterada), 10 (leve). Fish: Hipoprosexia. Vallejo: Hipoprosexia. Eguíluz: Hipoprosexia.'},
      '0':{nivel:'Balance flexible (DAN ↔ VAN proporcionado)',loQueVes:'Sigue conversación. Cambia de tema cuando corresponde. Atento sin esfuerzo visible.',loQueDice:'"Estoy atento." Sin reporte de dificultad.',contra:'Cómoda, fluida.',wm:'Gate flexible: actualiza proporcionalmente.',clasica:''},
      '+1':{nivel:'Foco sticky (DAN parcialmente rígido, cuesta redirigir)',loQueVes:'Monólogos. Vuelve al mismo punto. Cuesta redirigir. "Déjeme terminar" repetidamente.',loQueDice:'"Necesito explicar esto bien." "No puedo pasar a otra cosa."',contra:'Impaciencia: "no puedo sacarlo de ahí." Sensación de estar atrapado en el tema del paciente.',wm:'Gate parcialmente cerrado: filtra demasiado, cuesta actualizar.',clasica:'AMDP: 18 (pensamiento restringido). Fish: Hiperprosexia. Vallejo: Hiperprosexia. Eguíluz: Hiperprosexia.'},
      '+2':{nivel:'Top-down domina (DAN rígido, VAN suprimida)',loQueVes:'No responde a redirección. Persevera en un tema. Hiperfoco rígido visible. Ignora preguntas que cambien de tema.',loQueDice:'"No puedo sacarme esto de la cabeza." "Solo puedo pensar en una cosa." O no reporta — no se da cuenta.',contra:'Exasperación o resignación. Deja de intentar redirigir.',wm:'Gate cerrado: no actualiza, no deja entrar información nueva.',clasica:'AMDP: 18 (grave), 19 (perseveración). Fish: Perseveración. Vallejo: Paraprosexia. Eguíluz: Paraprosexia. DSM-5: TOC, TEA restricted. ICD-11: MB21.9 (perseveración).'}
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
    guide:['¿Le cuesta concentrarse en las cosas que tiene que hacer?','¿Puede concentrarse bien en algo que le interesa mucho? (pregunta clave TDAH)','¿Le pasa que se queda \'pegado\' en algo y le cuesta cambiar?','¿Qué lo distrae más: cosas de afuera o pensamientos de adentro?','Digit span backward: "Repita al revés: 7-2-9"'],
    specifiers:[
      {id:'f5_oscila',type:'checkbox',label:'[oscila] Oscila según estímulo (TDAH)',showWhen:'always_f5'},
      {id:'f5_cap_E',type:'checkbox',label:'[E] Externa',showWhen:'f5_neg'},
      {id:'f5_cap_Iworry',type:'checkbox',label:'[I:worry]',showWhen:'f5_neg'},
      {id:'f5_cap_Irumia',type:'checkbox',label:'[I:rumia]',showWhen:'f5_neg'},
      {id:'f5_cap_Iobsesion',type:'checkbox',label:'[I:obsesión]',showWhen:'f5_neg'},
      {id:'f5_cap_Iflashback',type:'checkbox',label:'[I:flashback]',showWhen:'f5_neg'},
      {id:'f5_cap_Iaberrant',type:'checkbox',label:'[I:aberrant]',showWhen:'f5_neg'},
      {id:'f5_rig_prior',type:'checkbox',label:'[prior]',showWhen:'f5_pos'},
      {id:'f5_rig_loop',type:'checkbox',label:'[loop]',showWhen:'f5_pos'},
      {id:'f5_rig_reward',type:'checkbox',label:'[reward]',showWhen:'f5_pos'}
    ]
  },
  {
    id:'F3.tono', code:'F3', title:'Tono hedónico (liking)', type:'bipolar',
    scores:{'-2':'Anhedonia profunda','-1':'Hipohedonia selectiva','0':'Placer proporcional','+1':'Reasignación incipiente','+2':'Hedonic shift consolidado'},
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
    guide:['¿Disfruta las cosas que antes disfrutaba?','¿Ha notado que ya no le sabe a nada la comida, la música, el contacto?','¿Hay algo que antes no le gustaba y ahora le produce calma o placer?'],
    specifiers:[
      {id:'target',type:'radio',label:'Target hedónico (+1/+2)',options:['Restricción','Dolor','Purga','Ejercicio excesivo','Riesgo','Otro'],showWhen:'>0'}
    ]
  },
  {
    id:'F3.anticipación', code:'F3', title:'Anticipación hedónica (wanting)', type:'bipolar',
    scores:{'-2':'Anticipación ausente','-1':'Anticipación atenuada','0':'Anticipación calibrada','+1':'Anticipación inflada','+2':'Prior crónicamente inflado'},
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
    guide:['¿Hay algo que espere con ganas esta semana?','¿Qué planes tiene?','Pregunta detectora: respuesta fluida y específica = 0. Silencio o "nada" = −2. Avalancha = +2.']
  },
  {
    id:'F3.drive', code:'F3', title:'Drive motivacional', type:'bipolar',
    scores:{'-2':'Avolición','-1':'Iniciación reducida','0':'Drive proporcional','+1':'Approach motivation elevada','+2':'Approach motivation desregulada'},
    details:{
      '-2':{nivel:'Avolición',loQueVes:'No se levanta sin empuje externo. AVD deterioradas. No inicia nada con propósito.',loQueDice:'"No quiero nada." / "Quiero pero no puedo." (ver especificador [F] vs [I]).',contra:'Impotencia (falta) o frustración empática (inhibición): "quiere pero no puede".',clasica:'AMDP: 80 (falta grave), 81 (inhibición grave). ICD-11: MB22.0 (avolición), MB24.4 (apatía). DSM-5: SZ negativos, MDD.'},
      '-1':{nivel:'Iniciación reducida',loQueVes:'Inicia actividades pero las deja incompletas. Latencia aumentada. Esfuerzo visible.',loQueDice:'"Me cuesta arrancar." "Empiezo cosas pero las dejo." "Todo me cansa."',contra:'Preocupación: el clínico empuja y el paciente responde parcialmente.',clasica:'AMDP: 80 leve, 81 leve, 62, 105. ICD-11: MG22 (fatiga). DSM-5: Distimia.'},
      '0':{nivel:'Drive proporcional',loQueVes:'Actividades proporcionales a contexto. Completa tareas.',loQueDice:'"Hice lo que tenía que hacer." Proporcional.',contra:'Entrevista cómoda.',clasica:''},
      '+1':{nivel:'Approach motivation elevada',loQueVes:'Múltiples actividades dirigidas a metas. Energía sostenida. Habla de planes concretos. Reorienta si le dan feedback.',loQueDice:'"Tengo muchos planes." "No me canso." Acepta que quizá es mucho si se le señala.',contra:'Energía contagiosa pero contenible. El clínico puede reconducir.',clasica:'AMDP: 82 leve (impulso aumentado). ICD-11: MB22.4 (energía aumentada). DSM-5: BD hipomanía.'},
      '+2':{nivel:'Approach motivation desregulada',loQueVes:'Múltiples planes simultáneos, todos con propósito (aunque irreal). Persiste a pesar de resultados adversos. No frena ante límites externos.',loQueDice:'"Duermo 3 horas y es suficiente." "Tengo 5 proyectos y todos van a funcionar." Minimiza consecuencias.',contra:'Agotamiento del clínico. Intentos de poner límites rebotan.',clasica:'AMDP: 82 grave. ICD-11: MB22.5 (actividad dirigida a metas aumentada). DSM-5: BD manía.'}
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
    guide:['¿Tiene energía para hacer las cosas?','¿Siente que tiene demasiados planes?','¿La actividad es dirigida a metas? (Criterio central: goal-directedness)'],
    specifiers:[
      {id:'drive_neg',type:'radio',label:'Polo negativo: tipo',options:['[F] Falta (no quiere)','[I] Inhibición (quiere pero no puede)','[M] Mixto'],showWhen:'<0'},
      {id:'drive_pos',type:'radio',label:'Polo positivo: fuente',options:['[R] Reward-driven','[D] Desinhibición','[M] Mixto'],showWhen:'>0'}
    ]
  },
  {
    id:'F4.experiencia', code:'F4', title:'Experiencia del pensamiento', type:'bipolar',
    scores:{'-2':'Bloqueo / vacío','-1':'Enlentecimiento subjetivo','0':'Proporcional','+1':'Aceleración subjetiva','+2':'Presión / crowding'},
    details:{
      '-2':{nivel:'Bloqueo / vacío (Gedankenabreißen)',loQueVes:'Pausas prolongadas, mirada perdida, interrupción del discurso mid-sentence.',loQueDice:'"No puedo pensar." "Mi mente está en blanco." Thought deprivation.',contra:'',clasica:'AMDP: 23 (Gedankenabreißen). Fish: Bloqueo pensamiento, Inhibición pensamiento.'},
      '-1':{nivel:'Enlentecimiento subjetivo',loQueVes:'Latencia percibida, esfuerzo visible para responder.',loQueDice:'"Me cuesta concentrarme." "Pienso como con arena."',contra:'',clasica:'AMDP: 15 (enlentecido subjetivo), 17 (constreñido). Reischies: ch10 (thinking retarded).'},
      '0':{nivel:'Proporcional',loQueVes:'Velocidad y control percibidos como normales.',loQueDice:'No reporta anomalía en la experiencia del pensamiento.',contra:'',clasica:''},
      '+1':{nivel:'Aceleración subjetiva',loQueVes:'Respuestas rápidas, cambia de tema con facilidad, algo inquieto cognitivamente.',loQueDice:'"Muchas ideas al mismo tiempo." "Mi mente va rápido."',contra:'',clasica:'AMDP: 21 (acelerado). Reischies: ch10 (acceleration). SCIP: M4 (racing thoughts=1).'},
      '+2':{nivel:'Presión / crowding (Gedankendrängen)',loQueVes:'Habla presionada, no puede parar, múltiples hilos simultáneos.',loQueDice:'"No puedo parar de pensar." Racing thoughts. Thought interference.',contra:'',clasica:'AMDP: 22 (Gedankendrängen). ICD-11: MB24.C (thought pressure). Reischies: ch10 (pressure of thought). Fish: Fuga de ideas.'}
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
    guide:['¿Cómo siente su pensamiento? ¿Va rápido o lento?','¿Siente que no puede pensar, que la mente está vacía?','¿Siente que los pensamientos le vienen a presión, que no puede pararlos?'],
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
    scores:{'0':'Normal','1':'Preocupación','2':'Obsesión / rumiación','3':'Idea sobrevalorada','4':'Creencia fija'},
    details:{
      '0':{nivel:'Normal',loQueVes:'Creencia flexible, insight preservado, modificable con evidencia.',loQueDice:'',contra:'',clasica:'BABS aprox. 0-3.'},
      '1':{nivel:'Preocupación',loQueVes:'Tema recurrente, ego-sintónica, sin disrupción funcional significativa, modulable con distracción.',loQueDice:'"Preocuparme me protege."',contra:'',clasica:'BABS 4-7. AMDP: 27 (suspicacia), 28 (hipocondría).'},
      '2':{nivel:'Obsesión / rumiación',loQueVes:'Pensamiento intrusivo recurrente: egodistónico (obsesión) o secuestrante (rumiación). Insight preservado parcialmente.',loQueDice:'Obsesión: "Sé que es irracional pero no puedo dejar de pensarlo." Rumiación: "No puedo parar de darle vueltas."',contra:'',clasica:'BABS 8-12. AMDP: 20 (rumiación), 30-31 (obsesiones/compulsiones). ICD-11: MB24.E (rumiación), MB26.5 (obsesiones).'},
      '3':{nivel:'Idea sobrevalorada',loQueVes:'Convicción alta SIN quiebre con realidad consensual. Ego-sintónica, defendida, insight parcial/pobre.',loQueDice:'"Esto ES verdad." Acepta posibilidad lógica de error pero no la cree.',contra:'',clasica:'BABS 13-17. AMDP: ZP10 (sobrevalorada). ICD-11: MB26.6. Fish: Idea sobrevalorada.'},
      '4':{nivel:'Creencia fija',loQueVes:'Convicción absoluta, incorrigible, sin insight. Rechaza refutación.',loQueDice:'Certeza total. No acepta alternativas.',contra:'',clasica:'BABS 18-24. AMDP: 36-46 (delirios), 55-58 (Schneider 1R). ICD-11: MB26.0 (delusiones). Fish: Delirio, Capgras, Cotard, Fregoli.'}
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
      {id:'contenido_tema',type:'radio',label:'Tema',options:['Persecutorio','Referencia','Grandeza','Somático/hipocondríaco','Culpa/ruina','Celotipia','Nihilista','Religioso/místico','Erotomaníaco','Control/pasividad','Contaminación','Daño/agresión','Simetría/orden','Muerte/enfermedad','Identidad/cuerpo'],showWhen:'>=1'},
      {id:'contenido_ego',type:'radio',label:'Relación con el yo',options:['Ego-sintónico (no le molesta)','Ego-distónico (le molesta, quiere sacarlo)','Ambivalente'],showWhen:'>=1'},
      {id:'contenido_type',type:'radio',label:'Clasificación (nivel 4)',options:['[psicótico] Delusión','[no-psicótico] Overvalued idea extrema'],showWhen:'==4'},
      {id:'contenido_schneider',type:'radio',label:'Schneider 1er rango (si psicótico)',options:['Inserción pensamiento','Sustracción pensamiento','Difusión pensamiento','Voces comentando','Voces dialogando','Experiencias de influencia','Ninguno'],showWhen:'==4'},
      {id:'contenido_sistematizacion',type:'radio',label:'Sistematización',options:['No sistematizado (fragmentario)','Parcialmente sistematizado','Sistematizado (elaborado, coherente)'],showWhen:'==4'}
    ]
  },
  {
    id:'F6.amenaza', code:'F6', title:'Sensibilidad a amenaza', type:'bipolar',
    scores:{'-2':'Temerario (boldness)','-1':'Despreocupado','0':'Proporcional','+1':'Aprensivo','+2':'Hipervigilante / Pánico'},
    details:{
      '-2':{nivel:'Temerario (boldness)',loQueVes:'Relajado ante situaciones peligrosas. No evita. Conductas de riesgo.',loQueDice:'"No va a pasar nada." "¿Miedo? No." No reporta preocupaciones.',contra:'Preocupación por el paciente: "no mide el peligro".',clasica:'TriPM Boldness muy alto. No capturado por AMDP, ICD-11, DSM-5 como estado.'},
      '-1':{nivel:'Despreocupado',loQueVes:'Relajado pero no irresponsable. Poca anticipación de riesgo.',loQueDice:'"Sí, quizá es riesgoso, pero no creo que pase." Minimiza.',contra:'Leve incomodidad: "debería preocuparse más".',clasica:''},
      '0':{nivel:'Proporcional',loQueVes:'Alerta proporcionada. Se activa y desactiva.',loQueDice:'"Me preocupa [X] pero creo que lo puedo manejar."',contra:'Cómoda.',clasica:''},
      '+1':{nivel:'Aprensivo',loQueVes:'Tensión visible. Movimientos inquietos. Dificultad relajarse.',loQueDice:'"¿Y si pasa [X]?" "Estoy nervioso por [Y]." Worry focal.',contra:'Empatía: el clínico siente la tensión del paciente.',clasica:'AMDP: 70 (ansiedad leve). ICD-11: MB24.0 (ansiedad).'},
      '+2':{nivel:'Hipervigilante / Pánico',loQueVes:'Tensión extrema, hipervigilancia, startle [T]. O pánico visible, taquicardia, sudoración, escape [F].',loQueDice:'"No puedo dejar de pensar en eso." "Siento que algo malo va a pasar." O no puede hablar durante pánico.',contra:'Contagio: el clínico se activa. Urgencia de tranquilizar [T]. O alarma ante pánico [F].',clasica:'AMDP: 70 (ansiedad grave), 71 (fobias), 73 (ataques de pánico). ICD-11: MB24.0 grave, MB24.1 (pánico). DSM-5: GAD, Panic disorder, PTSD.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','—','—','—','70 (ansiedad leve)','70 (ansiedad grave), 71 (fobias), 73 (pánico)'],
        ['ICD-11','—','—','—','MB24.0 (ansiedad)','MB24.0 grave, MB24.1 (pánico), MB24.3 (fobia)'],
        ['DSM-5','— (boldness no es dx)','—','—','GAD leve, fobia','GAD severo, Panic disorder, PTSD'],
        ['RDoC','— (no captura)','—','—','Potential Threat [T], Acute Threat [F]','Potential + Acute Threat'],
        ['HiTOP','—','—','—','Anxious worry, Panic/somatic anxiety','Anxious worry severo, Panic severo']
      ]
    },
    guide:['¿Hay algo que le preocupe o le dé miedo últimamente?','¿Ha tenido episodios de miedo intenso o ataques de pánico?','¿Alguna vez le dicen que es arriesgado o que no mide las consecuencias?'],
    specifiers:[
      {id:'amenaza_type',type:'radio',label:'Tipo temporal',options:['[T] Tónico (worry crónico)','[F] Fásico (pánico, startle)','[T+F] Ambos'],showWhen:'!=0'}
    ]
  },
  {
    id:'F6.frustración', code:'F6', title:'Frustración', type:'bipolar',
    scores:{'-2':'Helplessness / RPE silente','-1':'Resignación prematura','0':'Frustración calibrada','+1':'Irritación sostenida','+2':'Explosión / intolerancia total'},
    details:{
      '-2':{nivel:'Helplessness / RPE silente',loQueVes:'Flat ante temas de pérdida significativa. No registra facial ni verbal. Familia confirma "ya no le importa nada".',loQueDice:'"No me importa." "Me da lo mismo." Sin afecto. O no identifica que hubo pérdida.',contra:'Alarma clínica: ¿está deprimido? ¿disociado? ¿hay riesgo?',clasica:'AMDP: 10 (apatía), 45 (abulia). ICD-11: MB24.0 (aplanamiento). Fish: Apatía, Abulia. DSM-5: MDD, SZ avolición.'},
      '-1':{nivel:'Resignación prematura',loQueVes:'Dice "está bien" demasiado rápido. No profundiza en temas de pérdida. Compliance excesiva.',loQueDice:'"Da igual." "Para qué pelear." "Así es la vida." Con tono de derrota.',contra:'Preocupación, sensación de que "algo no cuadra" — ¿por qué no reacciona?',clasica:''},
      '0':{nivel:'Frustración calibrada',loQueVes:'Reacción proporcional a frustración. Puede hablar de lo que le frustra con perspectiva.',loQueDice:'"Me frustró pero busqué otra forma." "Me molestó y hablé con..."',contra:'Entrevista fluida.',clasica:''},
      '+1':{nivel:'Irritación sostenida sin resolución',loQueVes:'Tono cortante, suspiros, quejas repetidas en entrevista. Reporta irritabilidad en casa/trabajo.',loQueDice:'"Me molesta todo." "Estoy harto." "Nada sale como quiero." Quejas repetidas.',contra:'Frustración del clínico, sensación de "nada lo satisface".',clasica:'AMDP: 68 (irritabilidad). ICD-11: MB24.1 (ira leve). DSM-5: ODD. HiTOP: Irritabilidad.'},
      '+2':{nivel:'Explosión / intolerancia total',loQueVes:'Explosión ante pregunta difícil, golpe, grito, insulto, levantarse. O reporte de estallidos recientes.',loQueDice:'"Me saco de quicio." "No aguanto que..." "Exploté porque..." "No es justo."',contra:'Miedo, irritación, impulso de controlar o terminar la entrevista.',clasica:'AMDP: 68 (irritabilidad severa), 94 (agresividad). ICD-11: MB24.1 (ira), MB23.0 (agresión). DSM-5: DMDD, TLP, TEI. Fish: Comportamiento agresivo, Explosividad.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','10 (apatía), 45 (abulia)','—','—','68 (irritabilidad)','68 severa, 94 (agresividad)'],
        ['ICD-11','MB24.0 (aplanamiento), MB23.8 (apatía)','—','—','MB24.1 (ira leve)','MB24.1 (ira), MB23.0 (agresión)'],
        ['DSM-5','MDD, SZ avolición','—','—','ODD (irritable)','DMDD, TLP, TEI'],
        ['RDoC NVS','Loss: RPE silente','Frustrative Nonreward: atenuada','—','FNR: elevada','FNR: exagerada'],
        ['Fish (2019)','Apatía, Abulia, Aplanamiento','—','—','Irritabilidad','Agresividad, Explosividad']
      ]
    },
    guide:['¿Qué pasó la última vez que algo no salió como esperaba?','¿Se enoja fácilmente?','¿Le dicen que es explosivo o que todo le da igual?']
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
    id:'F6.autoevaluación', code:'F6', title:'Autoevaluación', type:'bipolar',
    scores:{'-2':'Worthlessness / culpa nuclear','-1':'Autoevaluación negativa','0':'Realista','+1':'Autoestima elevada','+2':'Grandiosidad afectiva'},
    details:{
      '-2':{nivel:'Worthlessness / culpa nuclear',loQueVes:'Sostenido, permea toda autoevaluación. Puede incluir delirio de culpa.',loQueDice:'"No merezco vivir." "Todo es mi culpa." "Soy defectuoso como persona."',contra:'',clasica:'AMDP: 42 (delirios culpa), 73 (culpa grave). ICD-11: MB24.B (culpa). DSM-5: MDD A7 (worthlessness/guilt). Forbes: Autodenigración, "ser carga".'},
      '-1':{nivel:'Autoevaluación negativa',loQueVes:'Autocrítica excesiva sostenida pero no nuclear.',loQueDice:'"No soy suficiente." "Soy una carga."',contra:'',clasica:'AMDP: 71 (insuficiencia).'},
      '0':{nivel:'Realista',loQueVes:'Autoevaluación flexible, proporcional a evidencia. Reconoce fortalezas y limitaciones.',loQueDice:'',contra:'',clasica:''},
      '+1':{nivel:'Autoestima elevada',loQueVes:'Autoconfianza por encima de evidencia. Funcional si no interfiere.',loQueDice:'"Soy muy capaz." "Soy especial."',contra:'',clasica:'AMDP: 72 (autoestima↑ leve).'},
      '+2':{nivel:'Grandiosidad afectiva',loQueVes:'Grandiosidad afectiva sin necesariamente delirio de grandeza.',loQueDice:'"Soy superior." "Soy invulnerable." "Merezco trato especial."',contra:'',clasica:'AMDP: 45 (delirios grandeza), 72 (autoestima↑ grave). ICD-11: MB26.2 (grandiosidad). DSM-5: BD-I B1. Forbes: Grandiosidad y derecho.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','42 (delirios culpa), 73 (culpa grave)','71 (insuficiencia)','—','72 (autoestima↑ leve)','45 (delirios grandeza), 72 grave'],
        ['ICD-11','MB24.B (culpa), MB26.02 (delusión culpa)','—','—','—','MB26.2 (grandiosidad)'],
        ['DSM-5','MDD A7 (worthlessness/guilt)','—','—','—','BD-I B1 (grandiosity)'],
        ['HiTOP','Vergüenza/Culpa, Distress','—','Bienestar','—','Grandiosidad'],
        ['Forbes (2024)','Autodenigración, "ser carga"','—','—','—','Grandiosidad y derecho']
      ]
    },
    guide:['¿Cómo se ve a sí mismo?','¿Se siente una carga para otros?','¿Se siente especial o superior?'],
    specifiers:[
      {id:'autoeval_neg',type:'radio',label:'Tipo (polo −)',options:['[worthlessness]','[culpa]','[vergüenza]','[carga]'],showWhen:'<0'},
      {id:'autoeval_pos',type:'radio',label:'Tipo (polo +)',options:['[inflada]','[grandiosa]','[invulnerable]'],showWhen:'>0'}
    ]
  },
  {
    id:'F6.desesperanza', code:'F6', title:'Desesperanza', type:'bipolar',
    scores:{'-2':'Futuro positivo inaccesible','-1':'Horizonte recortado','0':'Calibrado','+1':'Sesgo optimista','+2':'Prospección grandiosa'},
    details:{
      '-2':{nivel:'Futuro positivo inaccesible',loQueVes:'Discurso sin verbos en futuro. Ante "¿dónde se ve en 1 año?" → vacío o "no sé".',loQueDice:'"Nada va a mejorar." O silencio. O "da igual." O "muerto".',contra:'ALARMA: no hay futuro → evaluar suicidio. ⚠️ SUICIDIO: evaluar plan, medio, intención, letalidad.',clasica:'AMDP: 64 (desesperanza grave), 95 (conducta suicida). ICD-11: MB22.3 (hopelessness), MB26.A (ideación suicida). DSM-5: MDD severa, PTSD D4.'},
      '-1':{nivel:'Horizonte recortado',loQueVes:'No menciona futuro espontáneamente. Evita preguntas prospectivas.',loQueDice:'"Dudo que [X] mejore." "¿Para qué?" Futuro representable pero oscurecido.',contra:'Preocupación: el mundo del paciente se achica.',clasica:'AMDP: 64 (desesperanza leve). ICD-11: MB28.D (pesimismo).'},
      '0':{nivel:'Calibrado',loQueVes:'Menciona futuro espontáneamente. Planes proporcionales.',loQueDice:'"Hay cosas que pueden salir bien y otras no." Proporcional.',contra:'Cómoda.',clasica:''},
      '+1':{nivel:'Sesgo optimista',loQueVes:'Optimismo que no incorpora evidencia adversa.',loQueDice:'"Las cosas van a mejorar, seguro." Minimiza riesgos reales.',contra:'Comodidad con reserva.',clasica:''},
      '+2':{nivel:'Prospección grandiosa',loQueVes:'Habla de futuro constantemente. Planes irreales. Energía prospectiva sin freno.',loQueDice:'"Todo va a salir increíble." "Tengo un destino." Planes desconectados de capacidad.',contra:'"Está en otro planeta" — el futuro que describe no es posible.',clasica:'AMDP: 72 (autoestima↑), 45 (delirios grandiosos). ICD-11: MB26.2 (grandiosidad). DSM-5: BD manía.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','64 (desesperanza grave), 95 (conducta suicida)','64 leve','—','—','72 (autoestima↑), 45 (delirios grandiosos)'],
        ['ICD-11','MB22.3 (hopelessness), MB26.A (ideación suicida)','MB28.D (pesimismo)','—','—','MB26.2 (grandiosidad)'],
        ['DSM-5','MDD severa, PTSD D4 (foreshortened future)','MDD, distimia','—','—','BD manía'],
        ['RDoC','NVS — Loss / Sustained Threat','NVS — Loss incipiente','—','PVS elevado','PVS excesivo — Approach sin freno']
      ]
    },
    guide:['¿Cómo ve su futuro?','FFT clínico: "Dígame 3 cosas buenas que podrían pasarle esta semana."','Si ≤ −1: "¿Y 3 cosas malas que podrían pasar?" (distingue [V] vs [N]).'],
    specifiers:[
      {id:'desesperanza_type',type:'radio',label:'Tipo de colapso (polo −)',options:['[V] Vacío prospectivo (no genera ni positivos ni negativos)','[N] Negativo activo (genera negativos con detalle)'],showWhen:'<0'}
    ]
  },
  {
    id:'F7.testing', code:'F7', title:'Testing de realidad', type:'bipolar',
    scores:{'-2':'Quiebre con consenso','-1':'Distorsiones leves','0':'Preservado','+1':'Sobre-monitoreo / duda perceptiva','+2':'Hipervigilancia / incompletitud'},
    details:{
      '-2':{nivel:'Quiebre con consenso (JTC + externalizing bias)',loQueVes:'Certeza delirante, alucinaciones como reales, no corrige experiencias perceptivas o creencias frente a evidencia consensual inmediata. Beads task ≤2 draws.',loQueDice:'Contenido delirante con convicción total. O reporta percepciones que otros no comparten.',contra:'Alarma: quiebre psicótico. El clínico evalúa riesgo + contenido.',clasica:'AMDP: 33-52 (delirios, alucinaciones). ICD-11: MB26.0 (delusiones), MB27.2 (alucinaciones). SCIP: HAL1-9 (alucinaciones), DEL1-9 (delirios). Forbes: Delirios, Experiencias inusuales. Reischies: ch12 (alucinaciones), ch14 (delirios). Fish: Delirio, Delirio primario, Humor delirante, Percepción delirante, Alucinación. Vallejo: Delirio, Alucinación. Eguíluz: Alucinación, Alucinosis, Delirio.',circuito:'Salience network hiperactiva (ínsula anterior + ACC): señales internas reciben peso de señal externa. OFC: fallo reality filtering (Schnider, 210-330ms). DA mesolímbica ↑↑ (saliencia aberrante, Kapur 2003). Glutamato: hipofunción NMDA cortical.',precision:'Jumping to conclusions (JTC): beads task ≤2 draws. Predictor de respuesta a CBTp (Garety 2015). AP atípicos primera línea. CBTp: target JTC + BADE. MCT (Moritz): evidencia nivel I para JTC.'},
      '-1':{nivel:'Distorsiones leves (BADE + liberal acceptance)',loQueVes:'Ideas sobrevaloradas, ilusiones aceptadas, pseudoalucinaciones con insight parcial. Beads task 3-4.',loQueDice:'Reconoce parcialmente que puede estar equivocado. "Quizá me lo imagino, pero me parece real."',contra:'Incomodidad sutil: ¿es PLEs o pródromo?',clasica:'AMDP: 47 (ilusiones), ZP10 (ideas sobrevaloradas), 53-54 (desrealización/despersonalización). ICD-11: MB26.6, MB27.0-1 (dp/dr). Reischies: ch08 (alteración experiencia consciente), ch12 (ilusión), ch13 (despersonalización), ch14 (idea sobrevalorada). Fish: Pseudoalucinación, Ilusión, Idea sobrevalorada, Pareidolia. Vallejo: Ilusión, Idea sobrevalorada, Despersonalización.',circuito:'Salience network parcialmente disfuncional. mPFC anterior: reducción señal source monitoring. Default mode network hiperconectividad: propensión a fantasía. DA: desregulación parcial. 5-HT2A/DA desbalance.',precision:'Attenuated psychosis syndrome: monitoreo longitudinal. PLEs benignos (van Os) vs pródromo: distinguir por distress + decline funcional. BADE persistente = factor de riesgo de transición.'},
      '0':{nivel:'Preservado (calibración metacognitiva)',loQueVes:'Discrimina interno/externo, confianza proporcional, corrige errores. Beads task 5-8.',loQueDice:'',contra:'Entrevista cómoda.',clasica:'',circuito:'Salience network calibrada. OFC reality filtering funcional. Balance DMN ↔ task-positive network.',precision:''},
      '+1':{nivel:'Sobre-monitoreo / duda perceptiva (confianza metacognitiva ↓)',loQueVes:'Duda percepciones, necesita confirmación, checking ocasional. BORRTI Uncertainty of Perception elevado. Beads task 9-12.',loQueDice:'"¿Eso realmente pasó?" "Necesito verificar." "No estoy seguro de lo que vi/oí."',contra:'Paciencia requerida: el paciente necesita confirmación repetida.',clasica:'AMDP: 27 (suspicacia), 30-31 (obsesiones-compulsiones checking). ICD-11: MB26.9 (suspicacia), MB25.0-1 (obsesiones). HiTOP: Mistrust, Doubt. SCIP: OCD3 (compulsiones verificación). Fish: Obsesión, Compulsión. Reischies: ch11 (suspicacia), ch10 (compulsiones verificación).',circuito:'Loop CSTC hiperactivado en verificación. DLPFC: sobre-monitoreo de errores. ACC: señal de error persistente ("algo no está bien"). 5-HT: desbalance CSTC (base ISRS).',precision:'TOC checking: ISRS + ERP. Suspicacia epistémica sin psicosis: psicoterapia MBT/TFP. YBOCS checking ≥8 = clínicamente significativo.'},
      '+2':{nivel:'Hipervigilancia / incompletitud (NJRE + señal que no se apaga)',loQueVes:'Nada confirma percepción, checking compulsivo, sensación de incompletitud sensorial (NJRE), parálisis decisional. Beads task >12.',loQueDice:'"Algo no está bien pero no sé qué." "Necesito verificar una y otra vez." "No siento que esté completo."',contra:'Exasperación: nada satisface al paciente. El clínico siente que el loop no tiene salida.',clasica:'AMDP: 30-31 (obsesiones just-right). ICD-11: MB25.0-1 (severo). HiTOP: Suspicacia, Perfeccionismo patológico. SCIP: DEL5-7, OCD1-4 (severas). Fish: Obsesión severa. Reischies: ch10 (compulsiones).',circuito:'Ínsula medio-posterior hiperactiva: señal interoceptiva de incompletitud que no se apaga (Brown & Stern 2018). Loop CSTC refractario a habituación. OFC: hiperfiltro — reality filtering nunca confirma "suficiente". Cerebelo lobule VI: compartido con reality monitoring (Lavallé 2023). 5-HT: desbalance CSTC refractario. Posible componente glutamatérgico insular.',precision:'TOC severo NJRE-driven: ISRS alta dosis + potenciación (aripiprazol, glutamatérgicos). ERP con target incompletitud (no harm avoidance). YBOCS ≥24 con just-right predominante. NJRE-Q como monitor. Considerar DBS/TMS si refractario.'}
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
    guide:['¿Ha tenido experiencias que otros no comparten?','¿Escucha o ve cosas que otros no?','¿Siente que necesita verificar las cosas repetidamente?','¿Siente que algo no está bien pero no puede identificar qué?']
  },
  {
    id:'F7.coherencia-autobiografica', code:'F7', title:'Coherencia autobiográfica', type:'bipolar',
    scores:{'-2':'Fragmentación / reliving','-1':'Narrativa fragmentada','0':'Narrativa integrada','+1':'Relleno / sobreinferencia','+2':'Confabulación autobiográfica'},
    details:{
      '-2':{nivel:'Fragmentación / reliving',loQueVes:'Memoria autobiográfica descontextualizada: flashbacks, intrusiones vívidas, lagunas disociativas o fragmentos sensoriales/afectivos sin marco temporal. El pasado se impone como presente.',loQueDice:'"Sé que pasó, pero lo vivo como si estuviera pasando ahora." "Me vienen escenas/sensaciones y pierdo el aquí." "Hay partes que no puedo ordenar."',contra:'El clínico siente urgencia de anclar al presente. Riesgo de confundir memoria real traumática con quiebre psicótico si no se pregunta por temporalidad.',clasica:'DSM-5: PTSD criterio B (intrusiones, flashbacks), subtipo disociativo. ICD-11: PTSD/CPTSD re-experiencing in the present. Fish: estados disociativos, déjà vécu patológico. No equivale a confabulación.',circuito:'Hipocampo-vmPFC hipoancla contexto temporal; amígdala/salience hiperetiqueta fragmentos como actuales; DMN autobiográfica se desorganiza; LC-NE aumenta presentness y ganancia sensorial.',precision:'Evaluar presentness, disparadores, modalidad, orientación durante el episodio y recuperación. Intervenciones: grounding, estabilización, trauma-focused CBT/EMDR cuando haya ventana de tolerancia.'},
      '-1':{nivel:'Narrativa parcialmente fragmentada',loQueVes:'Recuerdos intrusivos, lagunas o secuencias autobiográficas incompletas, pero conserva orientación temporal y puede reconstruir con apoyo.',loQueDice:'"Me vienen recuerdos, pero sé que son recuerdos." "Hay huecos, pero puedo ordenar la historia si voy despacio."',contra:'Necesidad de ayudar a ordenar sin sugerir contenido.',clasica:'PTSD/CPTSD re-experiencing leve, amnesia disociativa parcial, intrusiones traumáticas con insight temporal preservado.',circuito:'Hipocampo-vmPFC parcialmente desacoplado; salience elevada pero modulable; DMN autobiográfica conserva integración parcial.',precision:'Registrar modalidad, frecuencia, interferencia y grado de recuperación tras anclaje.'},
      '0':{nivel:'Narrativa autobiográfica integrada',loQueVes:'Relato autobiográfico temporalmente ordenado, flexible, con distinción pasado-presente-imaginado y corrección ante dudas.',loQueDice:'Ubica recuerdos como recuerdos, reconoce incertidumbre y puede diferenciar hecho, interpretación e imaginación.',contra:'Entrevista organizada.',clasica:'',circuito:'Hipocampo-vmPFC contextualiza episodios; DMN autobiográfica integrada; CEN permite monitoreo narrativo.',precision:''},
      '+1':{nivel:'Relleno / sobreinferencia',loQueVes:'Llena huecos con inferencias plausibles, detalles dudosos o mezcla de fuentes. Corrige si se le muestra evidencia o si reconoce incertidumbre.',loQueDice:'"Creo que fue así." "Ahora que lo dice, puede que lo esté mezclando." "Lo estoy deduciendo."',contra:'Cuidado con preguntas sugestivas: la narrativa puede cristalizarse si se refuerza.',clasica:'Falso reconocimiento leve, source-memory error, intrusiones mnésicas no delirantes. Diferenciar de mentira consciente.',circuito:'Hipocampo-vmPFC con source monitoring débil; CEN compensa parcialmente; DMN completa huecos narrativos.',precision:'Pedir grado de certeza, fuente del dato e informante. Ver NC.recall si hay déficit episódico.'},
      '+2':{nivel:'Confabulación autobiográfica',loQueVes:'Relato falso o mal ensamblado sostenido sin intención de engaño, con pobre corrección. Puede rellenar lagunas, mezclar tiempos/personas o construir una continuidad autobiográfica ficticia.',loQueDice:'Narra detalles con certeza pese a contradicción objetiva o informantes. No reconoce el relleno como inferencia.',contra:'El clínico puede sentirse "persuadido" por la coherencia superficial. Requiere contraste cuidadoso con datos externos.',clasica:'Fish/Vallejo: confabulación. Síndrome amnésico, daño orbitofrontal/vmPFC, Korsakoff, TCE, demencias, delirium en recuperación. No es mentira ni delirio primario por sí mismo.',circuito:'Hipocampo-PFC: source memory y anclaje episódico fallan; vmPFC/OFC no inhibe memorias o inferencias irrelevantes; DMN sobreconstruye continuidad narrativa; CEN monitorea débilmente.',precision:'Contrastar con informante/registro, evaluar NC.recall, funciones ejecutivas y fluctuación. Si es aguda o nueva: considerar etiología neurológica, tóxica, metabólica o delirium.'}
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
    guide:['¿Lo que aparece se siente como recuerdo, imagen, sensación corporal o escena presente?','Cuando ocurre, ¿sabe que está en el presente o lo vive como ahora?','¿Hay huecos de memoria o partes que otros recuerdan distinto?','¿Qué tan seguro está de los detalles? ¿De dónde viene cada dato?','¿Cambia con grounding, orientación o evidencia externa?'],
    specifiers:[
      {id:'auto_mem_tipo',type:'radio',label:'Fenómeno principal',options:['[reliving] Flashback','[intrusion] Recuerdo intrusivo','[laguna] Laguna/amnesia','[relleno] Relleno inferencial','[confab] Confabulación'],showWhen:'!=0'},
      {id:'auto_mem_modalidad',type:'radio',label:'Modalidad dominante',options:['Visual','Auditiva','Somática','Emocional','Narrativa','Multimodal'],showWhen:'!=0'},
      {id:'auto_mem_presentness',type:'radio',label:'Presentness',options:['Sabe que es pasado','Oscila pasado-presente','Lo vive como ahora','No ubicable'],showWhen:'<0'},
      {id:'auto_mem_source',type:'radio',label:'Fuente / verificación',options:['Paciente','Informante','Registro','Mixta','No verificable'],showWhen:'!=0'}
    ]
  },
  {
    id:'F7.auto-mentalización', code:'F7', title:'Auto-mentalización', type:'bipolar',
    scores:{'-2':'Self disuelto / fusionado','-1':'Self difuso / concreto','0':'Self calibrado','+1':'Self dudoso / sobre-reflexión','+2':'Self sobredeterminado / pseudo-insight'},
    details:{
      '-2':{nivel:'Self disuelto / fusionado',loQueVes:'No tiene distancia representacional. Lo que siente ES la realidad.',loQueDice:'"No sé quién soy. Mis pensamientos no son míos. Soy esto (hecho, no pensamiento)."',contra:'',clasica:'AMDP: 55-58 (difusión, robo, inserción pensamiento). ICD-11: MB26.01, MB26.1, MB26.4. Fish: Despersonalización, Fenómenos de pasividad, Alienación del pensamiento.'},
      '-1':{nivel:'Self difuso / concreto',loQueVes:'Solo se conoce por resultados, no por reflexión.',loQueDice:'"No tengo claro qué quiero, qué siento, qué me importa. Solo me conozco por resultados."',contra:'',clasica:'AMDP: 54 (despersonalización leve). ICD-11: MB27.0 (despersonalización). Fish: Despersonalización, Desrealización.'},
      '0':{nivel:'Self calibrado',loQueVes:'Sabe quién es, qué siente, por qué actúa — y acepta que a veces no sé.',loQueDice:'"Sé quién soy, qué siento, por qué actúo — y acepto que a veces no sé."',contra:'',clasica:''},
      '+1':{nivel:'Self dudoso / sobre-reflexión',loQueVes:'Reflexiona pero no puede parar. Duda productiva volviéndose improductiva.',loQueDice:'"Sé quién soy pero no puedo parar de cuestionarlo. ¿Realmente siento esto?"',contra:'',clasica:'AMDP: 20 (rumiación leve). ICD-11: MB24.E (rumiación mental). HiTOP: Hiperdeliberación.'},
      '+2':{nivel:'Self sobredeterminado / pseudo-insight',loQueVes:'Parece sofisticado pero no mueve nada. Habla de emociones sin sentirlas.',loQueDice:'"Sé exactamente quién soy, por qué soy así, y por qué siento lo que siento — sin evidencia, sin apertura."',contra:'',clasica:'AMDP: 20 (rumiación grave). ICD-11: MB24.E (rumiación severa).'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','55-58 (difusión, robo, inserción pensamiento), 54 (despersonalización)','54 leve','—','20 (rumiación leve)','20 grave, 30 (obsesiones self-directed)'],
        ['ICD-11','MB26.01, MB26.1, MB26.10-12, MB26.4','MB27.0 (despersonalización)','—','MB24.E (rumiación)','MB24.E severa'],
        ['Fish (2019)','Despersonalización, Pasividad, Alienación, Inserción, Sustracción','Despersonalización, Desrealización','—','Obsesión (rumiativa)','Obsesión severa'],
        ['Vallejo (2025)','Despersonalización, Personalidad múltiple, Disociación','Despersonalización','—','Obsesión','Obsesión severa']
      ]
    },
    guide:['¿Puede identificar qué siente en este momento?','¿Le da muchas vueltas a por qué se siente así?','¿Siente que sus pensamientos son suyos?']
  },
  {
    id:'F7.self-integracion', code:'F7', title:'Integración / presentación del self', type:'bipolar',
    scores:{'-2':'Self disuelto / irreal','-1':'Self difuso / malo','0':'Self integrado flexible','+1':'Self sobreadaptado / masking','+2':'Self performativo rígido'},
    details:{
      '-2':{nivel:'Self disuelto / irreal',loQueVes:'Colapso identitario bajo afecto o vínculo: vacío, irrealidad, discontinuidad marcada, fusión con emoción/relación. Puede no sostener una representación estable de sí.',loQueDice:'"No sé quién soy." "No soy real." "Si me dejan, no existo." "Soy solo esto que siento ahora."',contra:'El clínico siente urgencia de estabilizar y anclar; riesgo de confundir difusión identitaria con psicosis si no se evalúa testing de realidad.',clasica:'DSM-5: alteración de identidad en TLP. ICD-11 PD: self dysfunction. AMPD: identity impairment. Fish/AMDP: despersonalización/disociación cuando hay irrealidad.'},
      '-1':{nivel:'Self difuso / malo',loQueVes:'Identidad poco integrada, vergüenza nuclear o autodefinición por defecto/fracaso/mirada externa. Puede funcionar, pero el self se organiza alrededor de "soy malo/defectuoso".',loQueDice:'"No sé qué quiero." "Soy defectuoso." "Solo valgo si me validan." "Cambio según con quién estoy."',contra:'El clínico percibe fragilidad identitaria detrás de síntomas afectivos o interpersonales.',clasica:'TLP/AMPD: identidad inestable, self-direction alterada. HiTOP/AMPD: negative affectivity + identity pathology.'},
      '0':{nivel:'Self integrado flexible',loQueVes:'Continuidad autobiográfica y afectiva suficiente. Puede cambiar de rol sin perder autenticidad. Tolera duda sin colapso.',loQueDice:'"Sé quién soy en general, aunque a veces dude." "Puedo adaptarme sin dejar de sentirme yo."',contra:'Entrevista fluida: el self no domina ni se desorganiza.',clasica:''},
      '+1':{nivel:'Self sobreadaptado / masking',loQueVes:'Monitorea cómo debe parecer. Usa guiones sociales, corrige expresión, oculta necesidades sensoriales o emocionales. Hay costo regulatorio.',loQueDice:'"Actúo normal." "Copio cómo se supone que debo responder." "Después de socializar quedo agotado."',contra:'El clínico percibe competencia social costosa o demasiado controlada.',clasica:'Camuflaje/masking autista; sobrecontrol social; posible respuesta traumática de fawn/appeasement.'},
      '+2':{nivel:'Self performativo rígido',loQueVes:'La presentación sustituye al self. Personaje sostenido, sobreadaptación rígida, desconexión del deseo propio y burnout por camuflaje crónico.',loQueDice:'"No sé qué quiero si dejo de actuar." "Tengo una versión para cada contexto." "Mi vida es mantener el personaje."',contra:'El clínico puede sentirse ante un self muy competente pero poco habitado.',clasica:'Camuflaje autista severo; sobrecontrol crónico; identidad performativa secundaria a adaptación social extrema.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['DSM-5 / AMPD','Identity impairment grave','Identity impairment moderado','—','—','—'],
        ['ICD-11 PD','Self dysfunction severa','Self dysfunction leve/moderada','—','—','—'],
        ['HiTOP / AMPD','Identity pathology + disociación','Negative affectivity + identity pathology','—','Neurodevelopmental social camouflaging','Overcontrol / camouflaging burden'],
        ['RDoC','Self Knowledge + Agency desintegrados','Self Knowledge vulnerable','—','Social Communication compensatoria','Cognitive Control sobre self-presentation']
      ]
    },
    guide:['Cuando no está reaccionando a otros, ¿quién siente que es?','¿Su sentido de sí cambia según la relación o el contexto?','¿Se siente defectuoso, vacío o irreal?','¿Siente que actúa o enmascara para parecer normal? ¿Qué costo tiene?'],
    specifiers:[
      {id:'self_polo_neg',type:'radio',label:'Polo −',options:['[vacío]','[irreal]','[malo/defectuoso]','[dependiente del vínculo]','[disociativo]'],showWhen:'<0'},
      {id:'self_polo_pos',type:'radio',label:'Polo +',options:['[masking TEA]','[sobrecontrol]','[fawn/appeasement]','[personaje social]'],showWhen:'>0'},
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
    id:'E.regulación', code:'E', title:'Regulación emocional', type:'bipolar',
    scores:{'-2':'Sub-regulación','-1':'Regulación frágil','0':'Flexible (calibrada)','+1':'Sobrecontrol leve','+2':'Sobre-regulación'},
    details:{
      '-2':{nivel:'Sub-regulación',loQueVes:'El afecto inunda y dirige la conducta. Transición 0→intensidad sin freno. Labilidad rápida y desproporcionada al trigger. No logra modular ni redirigir.',loQueDice:'"Exploto y no puedo parar." "Me gana." "Paso de 0 a 100."',contra:'Alarma; urgencia de contener o terminar la entrevista.',clasica:'AMDP: 68 (labilidad/irritabilidad), 67 (incontinencia afectiva). ICD-11: 6C (inestabilidad emocional). DSM-5: TLP crit.6 (inestabilidad afectiva), DMDD, manía. Fish: Labilidad, Incontinencia emocional. RDoC: fallo de Cognitive Control sobre Negative Valence. HiTOP/Forbes: Desinhibición.'},
      '-1':{nivel:'Regulación frágil',loQueVes:'Regula pero con esfuerzo visible, tardío o incompleto. Se desborda bajo carga moderada. La estrategia llega tarde.',loQueDice:'"Me cuesta calmarme." "Lo logro pero me agota." "Después reacciono."',contra:'Sensación de fragilidad; "algo no cuadra".',clasica:'AMDP: 68 leve.'},
      '0':{nivel:'Flexible (calibrada)',loQueVes:'Estrategia ajustada al contexto: siente, modula, redirige. Rango afectivo proporcional al material. Cambia de estrategia según la demanda.',loQueDice:'"Me afectó, hice X y se me pasó." "Me molestó y lo hablé."',contra:'Entrevista fluida.',clasica:''},
      '+1':{nivel:'Sobrecontrol leve',loQueVes:'Controla de más; poco espontáneo. "Demasiado compuesto" para el contenido. Rigidez incipiente en el acceso al afecto.',loQueDice:'"Prefiero no sentir eso." "Lo manejo solo." "No vale la pena darle vueltas."',contra:'Distancia, frialdad, formalidad excesiva.',clasica:'ICD-11: 6D11.0 anankastia (rasgo leve).'},
      '+2':{nivel:'Sobre-regulación',loQueVes:'Supresión crónica y rígida. Afecto constreñido. No accede ni nombra emoción ante material que la justifica (pérdida, amenaza reales).',loQueDice:'"No siento nada." "No sirve sentir." Niega afecto ante pérdida/amenaza reales.',contra:'Inquietud: ¿alexitimia? ¿disociación? ¿overcontrol (RO-DBT)?',clasica:'AMDP: afecto rígido/constreñido. ICD-11: 6D11.0 (anankastia), rasgo Detachment. DSM-5: OCPD, anorexia nerviosa restrictiva. RO-DBT: overcontrol maladaptativo (Lynch 2015). HiTOP: Constraint/Overcontrol. Fish: Rigidez afectiva.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','68 (labilidad), 67 (incontinencia)','68 leve','—','—','afecto rígido/constreñido'],
        ['ICD-11','6C (inestabilidad emocional)','—','—','6D11.0 anankastia leve','6D11.0 (anankastia), Detachment'],
        ['DSM-5','TLP crit.6, DMDD, manía','—','—','—','OCPD, anorexia restrictiva'],
        ['RDoC','Cognitive Control ↓ (sobre Neg. Valence)','—','—','—','Cognitive Control ↑ rígido'],
        ['Forbes (2024)','Desinhibición, Afecto neg. externalizado','—','—','—','Internalizante / Overcontrol'],
        ['Fish (2019)','Labilidad, Incontinencia emocional','—','—','—','Rigidez afectiva']
      ]
    },
    guide:['¿Qué hace cuando una emoción fuerte lo agarra — la deja pasar, la maneja, la corta?','¿Le dicen que es muy explosivo/reactivo, o más bien demasiado controlado/frío?','La última vez que algo lo afectó mucho, ¿cómo lo manejó? ¿le funcionó para ese momento?','¿Usa siempre la misma estrategia o cambia según la situación?'],
    specifiers:[
      {id:'modo',type:'radio',label:'Modo de falla',showWhen:'!=0',options:['[mis-regulación] estrategia inadecuada al contexto','[repertorio pobre] una sola estrategia','[insensibilidad al contexto] no lee la demanda','[rigidez de switching] no cambia de estrategia']},
      {id:'estabilidad',type:'radio',label:'Estabilidad',options:['[estable]','[oscilante] +2→−2 = colapso del overcontrol (firma TLP); registrar trigger y score inicial→final']},
      {id:'dominio',type:'checkbox',label:'[vital] (no solo cotidiano)'}
    ]
  },
  {
    id:'G.arousal', code:'G', title:'Arousal', type:'bipolar',
    scores:{'-2':'Hypoarousal / disociación','-1':'Activación reducida','0':'Proporcional','+1':'Activación elevada','+2':'Hyperarousal sostenido'},
    details:{
      '-2':{nivel:'Hypoarousal / disociación',loQueVes:'Shutdown: respuesta lenta/ausente, numbing, ojos vacíos, voz monótona, latencia >5s sostenida. Conciencia PRESERVADA (≠ obnubilación).',loQueDice:'"No estoy aquí." O respuestas mínimas.',contra:'',clasica:'AMDP: 1 (vigilancia↓), 80 (falta impulso). ICD-11: MB20.0 (estupor). DSM-5: PTSD dissociative subtype. Fish: Estupor, Acinesia.'},
      '-1':{nivel:'Activación reducida',loQueVes:'Somnolencia, latencia ocasional, monotonía, energía baja. Responde a estímulo directo.',loQueDice:'"Estoy cansado." "No tengo energía."',contra:'',clasica:'AMDP: 105 (cansancio). ICD-11: MB22.7 (fatiga). Reischies: ch04 (fatiga intensificada).'},
      '0':{nivel:'Proporcional',loQueVes:'Alerta proporcional al contexto, sostenido, respuesta en timing adecuado.',loQueDice:'',contra:'',clasica:''},
      '+1':{nivel:'Activación elevada',loQueVes:'Energía aumentada, habla acelerada, inquietud, pero regula con consigna.',loQueDice:'"No puedo estar quieto." "Estoy acelerado."',contra:'',clasica:'AMDP: 82 (impulso↑).'},
      '+2':{nivel:'Hyperarousal sostenido',loQueVes:'Imposible sentarse >2 min, taquilalia, hipervigilancia, startle, sobreestimulación. Interfiere con entrevista.',loQueDice:'"No puedo parar." Signos autonómicos: taquicardia, sudoración, midriasis.',contra:'',clasica:'AMDP: 83 (agitación motora). ICD-11: MB23.M (agitación psicomotora). DSM-5: PTSD criterion E. Fish: Excitación psicomotora. Reischies: ch04 (hipervigilancia).'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP 9e','1 (vigilancia↓), 80 (falta impulso)','105 (cansancio)','—','82 (impulso↑)','83 (agitación motora)'],
        ['ICD-11','MB20.0 (estupor)','MB22.7 (fatiga)','—','—','MB23.M (agitación psicomotora)'],
        ['DSM-5','PTSD dissociative subtype','—','—','—','PTSD criterion E (hyperarousal)'],
        ['RDoC','Arousal (hypo end)','—','—','—','Arousal (hyper end)'],
        ['Fish (2019)','Estupor, Acinesia','—','—','—','Excitación psicomotora']
      ]
    },
    guide:['Observe signos autonómicos: FC, sudoración, tensión muscular, estado de alerta.','Distinción crítica: G.arousal −2 (conciencia preservada) vs NC −2 (conciencia reducida).'],
    specifiers:[
      {id:'arousal_neg',type:'radio',label:'Tipo hypoarousal',options:['[disociativo]','[depresivo]','[catatónico]','[médico]'],showWhen:'<0'},
      {id:'arousal_pos',type:'radio',label:'Tipo hyperarousal',options:['[ansioso]','[maníaco]','[agitado]','[intoxicación]'],showWhen:'>0'},
      {id:'arousal_temp',type:'radio',label:'Temporal',options:['[alternante]','[sostenido]','[reactivo]'],showWhen:'!=0'}
    ]
  },
  {
    id:'G.coherencia', code:'G', title:'Coherencia global', type:'bipolar',
    scores:{'-2':'Fragmentación severa','-1':'Fragmentación leve','0':'Coherente','+1':'Hiper-organizado','+2':'Sobreestructuración rígida'},
    details:{
      '-2':{nivel:'Fragmentación severa',loQueVes:'Incoherencia, descarrilamiento, conducta bizarra, afecto incongruente. No se puede seguir la narrativa ni predecir la conducta.',loQueDice:'Discurso incoherente, neologismos, word salad.',contra:'',clasica:'AMDP: 24 (incoherencia), 25 (bloqueo discursivo), ZP1 (neologismos). ICD-11: MB23.H (incoherent speech), MB23.6 (disorganized behaviour). DSM-5: A.3 y A.4. Fish: Esquizofasia, Descarrilamiento.'},
      '-1':{nivel:'Fragmentación leve',loQueVes:'Tangencialidad recuperable, conducta ocasionalmente inapropiada, afecto parcialmente incongruente. Con estructura externa se reorganiza.',loQueDice:'Pierde el hilo pero puede volver con ayuda.',contra:'',clasica:'AMDP: 19 (perseveración), 26 (circunstancialidad). ICD-11: MB21.9 (perseveración). Fish: Circunstancialidad, Vorbeireden.'},
      '0':{nivel:'Coherente',loQueVes:'Narrativa coherente, hilo sostenido, pensamiento-conducta-afecto alineados y proporcionales al contexto.',loQueDice:'Discurso organizado y comprensible.',contra:'',clasica:''},
      '+1':{nivel:'Hiper-organizado',loQueVes:'Narrativa estructurada al milímetro, concretismo, baja tolerancia a ambigüedad. Circunstancial por exceso de detalle.',loQueDice:'Respuestas excesivamente detalladas. No puede resumir.',contra:'',clasica:'AMDP: 26 (circunstancialidad), 18 (restringido). Fish: Perseveración, Concretismo.'},
      '+2':{nivel:'Sobreestructuración rígida',loQueVes:'Sigue guion mental, no responde a redirección. Conducta ritualizada. Afecto restringido pero congruente. No tolera desviación.',loQueDice:'Respuestas como "script". No acepta cambio de tema.',contra:'',clasica:'AMDP: 19 (perseveración), 18 (restringido). ICD-11: MB21.9 (perseveración severa).'}
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
    guide:['Observe coherencia del discurso, conducta dirigida a metas, congruencia afecto-contenido.','¿Se puede seguir la narrativa? ¿La conducta es predecible?','¿El discurso es excesivamente detallado o rígido?'],
    specifiers:[
      {id:'canal_P',type:'checkbox',label:'[P] Pensamiento desorganizado/rígido'},
      {id:'canal_C',type:'checkbox',label:'[C] Conducta desorganizada/ritualizada'},
      {id:'canal_A',type:'checkbox',label:'[A] Afecto incongruente/restringido'}
    ]
  },
  {
    id:'G.sueno-ritmo', code:'G', title:'Sueño-ritmo', type:'bipolar',
    scores:{'-2':'Hipersomnia severa','-1':'Hipersomnia leve','0':'Regulado','+1':'Insomnio leve / necesidad reducida leve','+2':'Insomnio severo / necesidad reducida severa'},
    details:{
      '-2':{nivel:'Hipersomnia severa',loQueVes:'Hipersomnia >10h o fragmentación no-reparadora. Fase adelantada: duerme <19h, despierta <3AM. Empeoramiento matutino severo. Inercia de sueño.',loQueDice:'"Duermo todo el día y no descanso." "Me despierto a las 3AM y no puedo volver a dormir." "Las mañanas son lo peor."',contra:'Preocupación: patrón de conservación energética. Melancolía si CORE+.',clasica:'AMDP: 105 (cansancio), hipersomnia implícita. Forbes: Hipersomnia, dificultad despertar. RDoC: Sleep-Wakefulness + Circadian Rhythms.'},
      '-1':{nivel:'Hipersomnia leve',loQueVes:'9-10h o fragmentación leve. Fase adelantada leve. Matutino leve. Parcialmente no-reparador.',loQueDice:'"Duermo mucho pero no descanso." "Las mañanas me cuestan." "Me siento pesado al despertar."',contra:'Preocupación leve: el sueño no está cumpliendo su función reparadora.',clasica:''},
      '0':{nivel:'Regulado',loQueVes:'6-9h, reparador. Timing alineado con entorno social. Sin patrón diurno patológico. Continuidad OK.',loQueDice:'"Duermo bien." "Me despierto descansado." Sin queja de sueño.',contra:'Entrevista cómoda.',clasica:''},
      '+1':{nivel:'Insomnio leve / necesidad reducida leve',loQueVes:'Insomnio leve: latencia 30-60min, 2+ despertares; o reducción leve de necesidad de sueño sin fatiga proporcional.',loQueDice:'"Me cuesta dormir." "Me despierto varias veces." O "duermo menos y estoy bien".',contra:'Separar insomnio con queja de necesidad reducida sin queja.',clasica:'AMDP: 101 (conciliación), 102 (interrumpido), 103 (acortado). Forbes: Insomnio.'},
      '+2':{nivel:'Insomnio severo / necesidad reducida severa',loQueVes:'Insomnio severo o <4h totales; o necesidad de sueño reducida marcada sin queja. Fase retrasada >3AM o irregular extremo (>4h variación).',loQueDice:'"No puedo dormir nada." O "no necesito dormir, duermo 3 horas y estoy perfecto".',contra:'ALARMA si necesidad reducida sin queja = cardinal de manía. Evaluar F6.ánimo-meta +2.',clasica:'AMDP: 104 (despertar precoz) + 103 (acortado sin queja). Forbes: sueño acortado, irregularidad.'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['AMDP','105 (cansancio), hipersomnia','—','—','101 (conciliación), 102 (interrumpido), 103 (acortado)','104 (despertar precoz) + 103 sin queja'],
        ['Forbes','Hipersomnia, dificultad despertar','—','—','Insomnio','Irregularidad, sueño acortado'],
        ['RDoC','Sleep-Wakefulness + Circadian Rhythms','—','—','—','—']
      ]
    },
    guide:['¿Cuántas horas duerme? ¿Es suficiente para usted?','¿A qué hora se duerme y a qué hora se despierta?','¿Se despierta descansado? ¿El sueño es reparador?','¿Se despierta varias veces durante la noche?','¿Hay algún momento del día en que se siente peor (mañana vs noche)?','¿Ha reducido sus horas de sueño sin sentirse cansado?','¿Tiene pesadillas frecuentes?'],
    specifiers:[
      {id:'sueno_cant',type:'radio',label:'Cantidad',options:['[hipersomnia]','[insomnio-con-queja]','[reducida-sin-queja]','[fragmentado]'],showWhen:'!=0'},
      {id:'sueno_timing',type:'radio',label:'Timing',options:['[adelantado]','[retrasado]','[irregular]'],showWhen:'!=0'},
      {id:'sueno_calidad',type:'radio',label:'Calidad',options:['[no-reparador]','[pesadillas]'],showWhen:'!=0'},
      {id:'sueno_diurno',type:'radio',label:'Variación diurna',options:['[matutino]','[vespertino]'],showWhen:'!=0'},
      {id:'sueno_queja',type:'radio',label:'Queja',options:['[con-queja]','[sin-queja]'],showWhen:'!=0'}
    ]
  },
  {
    id:'G.interocepcion', code:'G', title:'Interocepción', type:'bipolar',
    scores:{'-2':'Shutdown interoceptivo','-1':'Atenuado','0':'Proporcional','+1':'Elevado','+2':'Overload interoceptivo'},
    details:{
      '-2':{nivel:'Shutdown interoceptivo',loQueVes:'No reporta sensaciones corporales, no reconoce hambre/sed/dolor/fatiga. Hipoautonomia observable (pupilas, bradicardia).',loQueDice:'"No siento nada en el cuerpo." No reporta hambre ni dolor.',contra:'Alarma: desconexión corporal. Alexisomia.',clasica:'Reischies: ch11 (alexitimia). Garfinkel 2016: IA baja + IS baja.'},
      '-1':{nivel:'Atenuado',loQueVes:'Fatiga corporal difusa, impotencia física. Pocas quejas localizadas.',loQueDice:'"El cuerpo no funciona bien." "Me siento pesado."',contra:'Preocupación leve: perturbación sentimientos vitales.',clasica:'AMDP: 62 (sentimientos vitales). Reischies: ch11 (perturbación sentimientos vitales).'},
      '0':{nivel:'Proporcional',loQueVes:'Señales corporales detectadas y calibradas. Sin quejas somáticas desproporcionadas.',loQueDice:'Sin reporte de anomalía somática significativa.',contra:'Entrevista cómoda.',clasica:''},
      '+1':{nivel:'Elevado',loQueVes:'Múltiples quejas somáticas sin correlato suficiente O señales autonómicas elevadas. Hipervigilancia corporal.',loQueDice:'"Noto cada cambio en mi cuerpo." "Me duele aquí, aquí y aquí." Múltiples quejas.',contra:'El clínico nota desproporción entre quejas y signos observables.',clasica:'AMDP: 108-130 (items somáticos). HiTOP: Bodily Distress, Somatic Preoccupation. SCIP: GAD3, S25-26.'},
      '+2':{nivel:'Overload interoceptivo',loQueVes:'Hiperautonomia sostenida (sudoración, temblor, taquicardia, midriasis) Y/O somatización invalidante. Pánico somático.',loQueDice:'"No puedo más con mi cuerpo." Crisis angustia. Dolor incapacitante sin correlato.',contra:'Alarma: ¿es bottom-up (storm real) o top-down (somatización)?',clasica:'AMDP: 113 (vómitos), 131 (conversión), ZP1 (crisis angustia). ICD-11: MB23.H (ataque pánico). SCIP: PAN5 (16 síntomas autonómicos). Fish: Briquet, Ekbom, Formicación.'}
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
    guide:['¿Siente su cuerpo como de costumbre? ¿Nota hambre, sed, cansancio?','¿Tiene molestias o dolores en alguna parte del cuerpo?','¿Le molestan síntomas estomacales, palpitaciones, mareos, dolores?','¿Nota cambios pequeños en cómo se siente su cuerpo?','¿Alguna vez siente que su cuerpo no le pertenece o está desconectado?','Observe: ¿hay signos autonómicos (sudoración, temblor, taquicardia) concordantes con las quejas?'],
    specifiers:[
      {id:'int_A',type:'checkbox',label:'[A] Autonómico observable'},
      {id:'int_S',type:'checkbox',label:'[S] Somático subjetivo'},
      {id:'int_D',type:'checkbox',label:'[D] Discrepancia (A≠S)'},
      {id:'int_contenido',type:'radio',label:'Contenido somático',options:['[GI] gastro','[CV] cardio','[MS] músculo','[TA] termoreg','[NE] neuro'],showWhen:'>0'},
      {id:'int_mec',type:'radio',label:'Mecanismo',options:['[top-down]','[bottom-up]','[mixto]'],showWhen:'!=0'}
    ]
  },
  {
    id:'G.apetito', code:'G', title:'Apetito-ingesta', type:'bipolar',
    scores:{'-2':'Colapso anorético','-1':'Apetito reducido','0':'Regulado','+1':'Apetito aumentado','+2':'Desregulación hiperfágica'},
    details:{
      '-2':{nivel:'Colapso anorético',loQueVes:'Hiporexia marcada con pérdida de peso clínicamente significativa (≥5% en un mes) o rechazo/incapacidad de comer. No registra hambre. Riesgo de caquexia/deshidratación.',loQueDice:'"No tengo hambre, como por obligación." "La comida no me dice nada." "Se me olvida comer."',contra:'Alarma: pérdida de peso vegetativa. Descartar causa médica/caquexia. Si melancolía CORE+, evaluar riesgo suicida.',clasica:'DSM-5-TR: MDD A.3 (pérdida de apetito/peso), especificador melancólico (anorexia). ICD-11: 6A7Z + melancolía. RDoC: sin constructo dedicado (Arousal & Regulatory Systems / homeostático).',circuito:'Supresión del sistema melanocortina hipotalámico: CRH/HPA↑ anorexigénico directo (Gold 2002) + citoquinas proinflamatorias (IL-1β/IL-6/TNF-α) sobre MC4R → "anorexia de la enfermedad" (Dantzer 2008; Braun 2010; Marks 2003). El drive orexigénico AgRP/NPY queda inhibido; leptina/grelina pueden ser normales pero la señal no se traduce en conducta.',precision:'Diferencial obligado (mismo signo, distinto circuito): (a) ANOREXIA NERVIOSA — el hambre suele estar PRESENTE pero overrideada por restricción ego-sintónica + inversión del reward (→ puntuar F3.tono target Restricción, NO aquí); la hiporexia melancólica es ego-DISTÓNICA (Gregertsen 2017). (b) CAQUEXIA MÉDICA — balance energético negativo metabólico, vía GDF15-GFRAL (Laviano 2008). (c) SHUTDOWN INTEROCEPTIVO — no DETECTA la señal de hambre (→ G.interocepción −2). En AN crónica el CRH también suprime apetito (Lawson 2013), puede coocurrir con F3.tono.'},
      '-1':{nivel:'Apetito reducido',loQueVes:'Come menos de lo habitual, sin placer en la comida, baja de peso leve (<5%). Porciones reducidas, salta comidas.',loQueDice:'"Como menos." "No disfruto la comida como antes." "Me lleno rápido."',contra:'Preocupación leve: signo vegetativo incipiente.',clasica:'DSM-5-TR: A.3 (disminución de apetito).'},
      '0':{nivel:'Regulado',loQueVes:'Hambre y saciedad calibradas, peso estable, ingesta proporcional a la actividad. Disfruta la comida sin pérdida de control.',loQueDice:'Sin queja de apetito ni de peso.',contra:'',clasica:''},
      '+1':{nivel:'Apetito aumentado',loQueVes:'Come más de lo habitual, antojos (especialmente carbohidratos), sube de peso leve (<5%). Picoteo, comer por estado emocional.',loQueDice:'"Tengo más hambre." "Como por ansiedad/aburrimiento." "Se me antojan dulces."',contra:'Patrón atípico/estacional incipiente; o efecto farmacológico temprano.',clasica:'DSM-5-TR: A.3 (aumento de apetito/peso), especificador atípico.'},
      '+2':{nivel:'Desregulación hiperfágica',loQueVes:'Hiperfagia/atracones, come sin hambre, pérdida de control sobre la ingesta, ganancia de peso rápida (≥5%/mes). No registra saciedad.',loQueDice:'"No puedo parar de comer." "Como aunque esté lleno." "Como a escondidas."',contra:'Distinguir hedónico vs iatrogénico vs atracón con pérdida de control. Si iatrogénico, revisar fármaco (riesgo metabólico).',clasica:'DSM-5-TR: A.3 (aumento marcado), atípico; BED. ICD-11: 6B82 (trastorno por atracón).',circuito:'Fallo de la señal de saciedad + amplificación del reward: dopamina mesolímbica (wanting) + opioide μ en NAcc (liking) sobre-pasan el homeostático (Berridge 1998; Volkow 2011; Morales 2020). Iatrogénico vía antagonismo H1 (predictor más fuerte de ganancia de peso; Kroeze 2003) + 5-HT2C (Reynolds 2002) → AMPK hipotalámico + resistencia a leptina (He 2013). Atípica/SAD vía serotonina y craving de carbohidratos (Rosenthal 1984; Gold 2002).',precision:'Subtipos: [atípico/estacional] hiperfagia + hipersomnia, polo CRH-bajo opuesto al melancólico (Gold 2002); [iatrogénico] olanzapina/clozapina = mayor afinidad H1+5-HT2C (Reynolds 2009); [atracón BED/BN] pérdida de control, ínsula HIPERactiva al food-cue, opuesto a AN (Bronleigh 2022); [hedónico] incentive sensitization, comer sin hambre (Avena 2008).'}
    },
    frameworks:{
      headers:['','−2','−1','0','+1','+2'],
      rows:[
        ['DSM-5-TR','A.3 pérdida apetito/peso; melancólico','A.3 ↓apetito','—','A.3 ↑apetito; atípico','A.3 ↑marcado; BED'],
        ['ICD-11','6A7Z + melancolía','—','—','atípico','6B82 (atracón)'],
        ['RDoC','homeostático (Arousal & Reg. Systems)','—','—','—','Positive Valence (reward)'],
        ['Mecanismo','CRH/HPA, citoquinas→MC4R','—','—','serotonina/craving','H1+5-HT2C; DA/opioide']
      ]
    },
    guide:[
      '¿Cómo ha estado su apetito? ¿Come más o menos de lo habitual?',
      '¿Ha cambiado de peso sin proponérselo? ¿Cuánto y en cuánto tiempo?',
      '¿Siente hambre? ¿La comida le sabe/le apetece como antes?',
      'Si come menos: ¿es que no tiene hambre (no le nace) o es que no quiere comer (lo decide)?',
      'Si come más: ¿hay antojos, come por ansiedad, o pierde el control y no puede parar?',
      '¿Toma algún medicamento nuevo (antipsicótico, mirtazapina) que pueda afectar el apetito?'
    ],
    specifiers:[
      {id:'apetito_neg',type:'radio',label:'Mecanismo (polo −)',options:['[melancólico] CRH/HPA','[inflamatorio] citoquinas/enfermedad','[iatrogénico] fármaco anorexígeno','[interoceptivo] no detecta hambre'],showWhen:'<0'},
      {id:'apetito_pos',type:'radio',label:'Mecanismo (polo +)',options:['[atípico/estacional] craving carbohidratos','[iatrogénico] H1/5-HT2C','[atracón] pérdida de control','[hedónico] reward-driven'],showWhen:'>0'},
      {id:'apetito_ego',type:'radio',label:'Relación con el yo (polo −)',options:['[ego-distónico] lo vive como pérdida','[ego-sintónico] lo valora → considerar F3.tono Restricción'],showWhen:'<0'},
      {id:'apetito_peso',type:'radio',label:'Cambio de peso',options:['[estable]','[pérdida <5%]','[pérdida ≥5%/mes]','[ganancia <5%]','[ganancia ≥5%/mes]'],showWhen:'!=0'},
      {id:'apetito_fuente',type:'radio',label:'Fuente del dato',options:['Paciente','Informante','Registro/peso medido'],showWhen:'!=0'}
    ]
  },
  {
    id:'P', code:'P', title:'Estado interpersonal', type:'two_axis',
    axes:[
      {id:'P1.dominancia',label:'P1 Dominancia–Sumisión',scores:{'-2':'Sumisión extrema','-1':'Complacencia / deferencia','0':'Rapport simétrico','+1':'Conducción activa','+2':'Dominancia franca'}},
      {id:'P2.afiliación',label:'P2 Afiliación–Hostilidad',scores:{'-2':'Hostilidad sostenida','-1':'Frialdad / distancia','0':'Calidez proporcional','+1':'Calidez elevada','+2':'Afiliación excesiva'}}
    ],
    details_p1:{
      '-2':{nivel:'Sumisión extrema',loQueVes:'No inicia, no opina, no decide. Acepta todo sin cuestionamiento. Monosílabos, mirada baja, postura encogida.',loQueDice:'Acuerdo automático. Espera que el otro dirija.',contra:'',clasica:'AMDP: 70 (quejumbrería). HiTOP: Sumisión. Fish: Estupor, Negativismo pasivo.'},
      '-1':{nivel:'Complacencia / deferencia',loQueVes:'Tiende a ceder, busca aprobación, minimiza necesidades. Sonrisa apaciguadora.',loQueDice:'"¿Eso está bien?" Evita conflicto.',contra:'',clasica:''},
      '0':{nivel:'Rapport simétrico',loQueVes:'Turno equilibrado. Puede proponer, aceptar, disentir. Ajusta su posición al contexto.',loQueDice:'',contra:'',clasica:''},
      '+1':{nivel:'Conducción activa',loQueVes:'Dirige la interacción, establece agenda, interrumpe o redirige. Pero acepta input.',loQueDice:'Ofrece soluciones no pedidas.',contra:'',clasica:''},
      '+2':{nivel:'Dominancia franca',loQueVes:'No negocia. Impone su marco, descalifica alternativas, controla ritmo y tema.',loQueDice:'"Usted no entiende." Demanda atención.',contra:'',clasica:'AMDP: 86 (histrionismo). ICD-11: MB28.3 (grandiosidad). HiTOP: Dominancia, Manipulación.'}
    },
    details_p2:{
      '-2':{nivel:'Hostilidad sostenida',loQueVes:'Desprecio activo, suspicacia, agresión verbal o gestual. El otro es amenaza o enemigo.',loQueDice:'Sarcasmo, descalificación directa.',contra:'Alianza en riesgo. Contratransferencia: irritación, temor, rechazo.',clasica:'AMDP: 94 (agresividad), 68 (irritabilidad). ICD-11: MB23.0 (agresión). Fish: Comportamiento agresivo, Suspicacia.'},
      '-1':{nivel:'Frialdad / distancia',loQueVes:'Cortés pero desconectado. No hostil, sino indiferente. Mantiene distancia emocional deliberada.',loQueDice:'Respuestas breves. Tono plano. No pregunta.',contra:'Alianza superficial. Contratransferencia: aburrimiento, distancia.',clasica:''},
      '0':{nivel:'Calidez proporcional',loQueVes:'Conectado proporcionalmente. Responde al afecto del clínico.',loQueDice:'',contra:'Alianza funcional.',clasica:''},
      '+1':{nivel:'Calidez elevada',loQueVes:'Busca conexión activamente. Comparte más de lo esperado, se interesa por el clínico.',loQueDice:'Preguntas personales al clínico. Comparte datos íntimos rápido.',contra:'Alianza positiva pero con riesgo de sobreinvolucramiento.',clasica:''},
      '+2':{nivel:'Afiliación excesiva',loQueVes:'Fusional: no tolera distancia. Idealiza al clínico, busca relación especial, pánico ante separación.',loQueDice:'"Usted es el único que me entiende." Toca al clínico. Llora al separarse.',contra:'Alianza pseudopositiva. Riesgo de dependencia iatrogénica.',clasica:'AMDP: 93 (contacto social excesivo). ICD-11: MB23.C (sociabilidad↑).'}
    },
    frameworks:{
      headers:['','P1 −2 (sumiso)','P1 +2 (dominante)','P2 −2 (hostil)','P2 +2 (afiliativo excesivo)'],
      rows:[
        ['AMDP 9e','70 (quejumbrería)','86 (histrionismo)','94 (agresividad), 68 (irritabilidad)','93 (contacto social excesivo)'],
        ['ICD-11','MB28.H (sumisión)','MB28.3 (grandiosidad)','MB23.0 (agresión), MB26.9 (suspicacia)','MB23.C (sociabilidad↑)'],
        ['DSM-5 AMPD','Sumisión (Detachment)','Grandiosity, Manipulativeness','Hostility, Callousness','Separation insecurity'],
        ['Fish (2019)','Estupor, Negativismo pasivo','Autoestima↑, Histrionismo','Agresividad, Suspicacia','—'],
        ['HiTOP','Sumisión','Dominancia, Manipulación','Hostilidad iracunda','—']
      ]
    },
    guide:['Observe la dinámica de la entrevista: ¿quién dirige?','¿Es cálido o frío? ¿Hostil o afiliativo?','¿Cambia la posición durante la entrevista? (spin)'],
    specifiers:[
      {id:'spin',type:'radio',label:'P3 Estabilidad (Spin)',options:['Estable','Oscilante'],showWhen:'always'}
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
        id:'J.juicio', label:'Juicio',
        instruction:'¿Razona apropiadamente sobre consecuencias de sus decisiones? ¿Anticipa riesgos? Observar en respuesta a viñetas, decisiones en curso, o planes inmediatos.',
        scores:{'0':'Intacto: anticipa consecuencias, ajusta conducta','-1':'Parcial: razonamiento inconsistente, comprende algunas consecuencias pero no otras','-2':'Grave: no anticipa, decisiones aleatorias o peligrosas'},
        circuito:'PFC ventromedial (valoración afectiva) + DLPFC (control cognitivo) + OFC (anticipación consecuencias). Lesiones frontales y trastornos psicóticos comprometen la red.',
        precision:'Feeder principal de Capacidad para X (Capa 2). Refs: Grisso, Appelbaum & Hill-Fotouhi 1997 — MacCAT-T usa esta misma escala 0-2 ordinal (DOI 10.1176/ps.48.11.1415). Etchells 1999 — Aid to Capacity Evaluation (DOI 10.1046/j.1525-1497.1999.00277.x).'
      },
      {
        id:'I.insight', label:'Insight sobre enfermedad',
        instruction:'¿Reconoce que está enfermo? ¿Atribuye sus síntomas a la enfermedad? ¿Reconoce necesidad de tratamiento? Concepto relacional Marková-Berrios: insight INTO la enfermedad como objeto.',
        scores:{'0':'Pleno: reconoce enfermedad, atribuye síntomas, acepta necesidad de tratamiento','-1':'Parcial: reconoce algunos síntomas o la necesidad de ayuda pero no la enfermedad en sí, o reconoce enfermedad sin atribuir síntomas','-2':'Ausente: anosognosia. Niega completamente o atribuye externalmente (perseguidores, brujería, error médico)'},
        circuito:'Central Midline Structures (CMS): dorsomedial PFC + precuneus + posterior cingulate. Mentalización + metacognición. En esquizofrenia: hipoactivación dmPFC durante self-evaluation (Bedford 2012, DOI 10.1186/1471-244X-12-106).',
        precision:'Feeder de Riesgo a sí (no se cuida) + Capacidad para X (no aprecia su situación). Refs: Birchwood 1994 — Insight Scale 3 factores: awareness, need-for-treatment, attribution (DOI 10.1111/j.1600-0447.1994.tb01487.x). Raffard 2008 — 50-80% de pts esquizofrenia no creen tener trastorno; SUMD-Amador (DOI 10.1016/j.encep.2007.10.008). Marková-Berrios 1992 — insight como continuo relacional (DOI 10.1192/bjp.160.6.850). Rose & Harvey 2024 — anosognosia en EZ: Introspective Accuracy vs Bias (DOI 10.1017/S1092852924002323).'
      },
      {
        id:'E.egodistonia', label:'Egodistonía sobre enfermedad', scoreKeys:['-2','-1','0','+1','+2'],
        instruction:'¿Cómo es la relación del paciente con su condición? ¿Sufre la enfermedad y la rechaza (egodistónico), o está en paz/identificado con ella (egosintónico)? Eje propio independiente de insight y de funcionalidad.',
        scores:{
          '-2':'Egodistónico extremo: sufre intensamente, busca ayuda urgente, rechaza identidad de enfermo',
          '-1':'Egodistónico: incómodo con su estado, quiere mejorar',
          '0':'Ambivalente: reconoce malestar pero también beneficios secundarios o identificación parcial',
          '+1':'Egosintónico: en paz con su estado, no demanda cambio',
          '+2':'Egosintónico extremo: sin malestar subjetivo, podría no reconocer como problema. Si I=ausente → ALARMA de riesgo silente'
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
        instruction:'Trabajo, estudio, voluntariado, tareas del hogar. Eje bipolar: -2 abandono / 0 esperado / +2 workaholic patológico.',
        scores:{
          '-2':'Sin actividad / abandono total: no sostiene trabajo/estudio. Bajas prolongadas, abandono completo, o requiere ayuda externa constante.',
          '-1':'Productividad muy reducida: rendimiento bajo, ausencias frecuentes, dificultad para sostener carga habitual. Mantiene actividad parcial.',
          '0':'Funcionamiento esperado: trabaja/estudia regularmente con rendimiento esperado. Sin dificultades significativas.',
          '+1':'Hiperactividad laboral compensatoria: trabaja más de lo necesario, dificultad para parar, productividad elevada pero a costo de descanso.',
          '+2':'Workaholic patológico: actividad laboral sobrepasa salud y vida. No puede detenerse, sacrifica sueño/relaciones/cuerpo. Hipertrofia compensatoria.'
        },
        specifiers:[
          {id:'a1_note',type:'text',label:'Detalle',placeholder:'Ej: bajas 5 días último mes / 14h trabajo diario'},
          {id:'source',type:'radio',label:'Fuente del dato (válida para todas las áreas)',options:['Paciente','Informante','Observación clínica','Combinada']},
          {id:'psp_total',type:'text',label:'PSP 0-100 (opcional)',placeholder:'Ej: 65'}
        ]
      },
      {
        id:'FUN.psp_relaciones', label:'A2 · Relaciones personales y sociales', scoreKeys:['-2','-1','0','+1','+2'],
        instruction:'Familia, amigos, pareja, comunidad. Eje bipolar: -2 aislamiento / 0 vínculos nutridos / +2 fusional/dependencia.',
        scores:{
          '-2':'Aislamiento marcado / ruptura: sin vínculos significativos, conflictos severos sostenidos, soledad significativa o relaciones tóxicas dominantes.',
          '-1':'Retracción visible: evita situaciones sociales, conflictos en aumento. Conserva algunos vínculos funcionales.',
          '0':'Vínculos nutridos: relaciones cercanas, busca y disfruta el contacto social. Capacidad de cercanía y distancia.',
          '+1':'Sobreinvolucramiento: busca contacto excesivo, necesidad alta de validación, dificultad para tolerar separación.',
          '+2':'Fusional / dependencia patológica: no tolera estar solo, demandas constantes, idealización-devaluación, pánico ante separación. Dependencia que daña al otro o al self.'
        },
        specifiers:[{id:'a2_note',type:'text',label:'Detalle',placeholder:'Ej: aislado / fusional con pareja, llama 30 veces al día'}]
      },
      {
        id:'FUN.psp_autocuidado', label:'A3 · Autocuidado', scoreKeys:['-2','-1','0','+1','+2'],
        instruction:'Higiene, alimentación, sueño, salud física, medicación, finanzas. Eje bipolar: -2 abandono / 0 apropiado / +2 hipercontrol/rituales.',
        scores:{
          '-2':'Abandono grave / deterioro físico: higiene muy pobre, malnutrición, abandono completo medicación, deterioro físico, crisis financiera por desorganización.',
          '-1':'Descuido visible: higiene irregular, alimentación errática, abandono parcial medicación, descuido financiero.',
          '0':'Apropiado: higiene, alimentación, sueño y manejo médico esperados. Atiende sus necesidades básicas.',
          '+1':'Hipercontrol emergente: rituales de higiene/alimentación/medicación más rígidos de lo necesario, perfeccionismo en autocuidado, sobrechequeo somático.',
          '+2':'Obsesivo: rituales dominantes (horas de higiene, dietas restrictivas extremas, hipervigilancia somática constante, control financiero compulsivo). El autocuidado se vuelve disfuncional por exceso.'
        },
        specifiers:[{id:'a3_note',type:'text',label:'Detalle',placeholder:'Ej: sin ducha 2 sem / 4h ducha diaria'}]
      },
      {
        id:'FUN.psp_disruptivas', label:'A4 · Conductas problemáticas', scoreKeys:['-2','-1','0','+1','+2'],
        instruction:'Eje bipolar de dirección: -2 autoagresividad grave / 0 sin conductas / +2 heteroagresividad grave. Ambos polos son deterioro funcional.',
        scores:{
          '-2':'Autoagresividad grave: autolesión severa (cortes profundos, quemaduras repetidas), intentos suicidas con autolesión, conductas de muerte indirecta sostenidas.',
          '-1':'Autoagresividad leve: NSSI (non-suicidal self-injury) aislado, autodaño leve, conductas de riesgo dirigidas a sí (manejo imprudente intencional, no comer como castigo).',
          '0':'Sin conductas problemáticas: comportamiento socialmente apropiado, sin daño a sí ni a otros.',
          '+1':'Heteroagresividad leve: irritabilidad, gritos, conductas disruptivas socialmente, episodios de desorganización menor. No peligrosas pero alteran convivencia.',
          '+2':'Heteroagresividad grave: agresión física a terceros, conductas socialmente inadmisibles peligrosas, daño a propiedad, alteración seria del entorno.'
        },
        specifiers:[{id:'a4_note',type:'text',label:'Detalle',placeholder:'Ej: cortes en antebrazos / agresión verbal diaria a esposa'}]
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
        id:'EXT.decision_capacidad', label:'Decisión específica a evaluar para capacidad', scoreKeys:['SIN','DECLARADA'],
        instruction:'⚠ Sin decisión específica declarada, capacidad NO computa (PRD invariante 6: no existe capacidad global).',
        scores:{
          'SIN':'Sin decisión específica declarada',
          'DECLARADA':'Decisión declarada (especifica abajo)'
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

const VIRTUAL_SCORE_DEFINITIONS = {
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
  }
};

// ── REORDER DIMS ──
const DIM_ORDER = [
  'NC.conciencia',
  'F1.expresividad',
  'F2.velocidad','F2.sensorial',
  'F5.regulación',
  'F3.drive','F3.anticipación','F3.tono',
  'F4.experiencia','F4.contenido',
  'F6.amenaza','F6.frustración','F6.animo-meta','F6.autoevaluación','F6.desesperanza',
  'F7.testing','F7.coherencia-autobiografica','F7.auto-mentalización','F7.self-integracion','F7.mentalización-otro',
  'G.arousal','G.coherencia','G.sueno-ritmo','G.interocepcion','G.apetito',
  'META.enfermedad',
  'FUN.funcionalidad',
  'NC.perfil','NM.coordinación',
  'P',
  'EXT.inputs'
];

// ─── Forbes 2024 map + groups ───
// Forbes 2024 aporta los subfactores visibles. Personality Function se conserva
// como capa clínica propia: LPFS Self + LPFS Interpersonal.
const HITOP_MAP = {
  // Personality Function / LPFS
  'LPFS\nSelf': [{id:'F7.self-integracion',abs:true,w:1.2},{id:'F7.auto-mentalización',abs:true,w:1.0},{id:'J.juicio',inv:true,w:0.85}],
  'LPFS\nInterpersonal': [{id:'F7.mentalización-otro',abs:true,w:1.0},{id:'FUN.psp_relaciones',abs:true,w:1.0},{id:'P2.afiliación',abs:true,w:0.9}],

  // Forbes: Disfunción emocional > Internalizante
  'Malestar': [{id:'F6.loss-depresivo',inv:true,w:1.1},{id:'F6.loss-ansioso',inv:true,w:0.8},{id:'F6.desesperanza',inv:true,w:0.9},{id:'F6.autoevaluación',inv:true,w:0.8},{id:'F3.tono',inv:true,w:0.75},{id:'F3.drive',inv:true,w:0.45},{id:'G.apetito',abs:true,w:0.3},{id:'E.egodistonia',inv:true,pole:'neg',w:0.35},{id:'FUN.psp_disruptivas',inv:true,pole:'neg',w:0.45},{id:'E.regulación',pole:'pos',w:0.4}],
  'Miedo': [{id:'F6.amenaza',w:1.1},{id:'G.arousal',pole:'pos',w:0.55},{id:'G.interocepcion',pole:'pos',w:0.4},{id:'F7.mentalización-otro',pole:'pos',w:0.25}],
  'Aislamiento\nSocial': [{id:'FUN.psp_relaciones',inv:true,w:0.9},{id:'P2.afiliación',inv:true,pole:'neg',w:0.65},{id:'F1.expresividad',inv:true,w:0.6},{id:'F7.mentalización-otro',inv:true,pole:'neg',w:0.45},{id:'F3.tono',inv:true,w:0.35}],
  'Sueño desreg.\n+ Trauma': [{id:'G.sueno-ritmo',inv:true,pole:'neg',w:0.75,gate:'traumaSleep'},{id:'G.sueno-insomnio',pole:'pos',w:1.0,gate:'traumaSleep'},{id:'F6.amenaza',w:0.45,gate:'traumaSleep'},{id:'G.arousal',abs:true,w:0.4,gate:'traumaSleep'},{id:'F7.coherencia-autobiografica',inv:true,pole:'neg',w:0.75,gate:'traumaSleep'}],

  // Forbes: Disfunción emocional > Patología alimentaria
  'Patología\nAlimentaria': [{id:'F3.tono',abs:true,spec:'target',specRequired:true,specIn:['Restricción','Purga','Ejercicio excesivo']},{id:'FUN.psp_autocuidado_alimentacion',pole:'pos',w:0.85},{id:'G.interocepcion',abs:true,w:0.35}],

  // Forbes: Disfunción emocional > Somatomorfo
  'Síntomas\nSomáticos': [{id:'G.interocepcion',pole:'pos',w:1.1},{id:'F2.sensorial',abs:true,w:0.35},{id:'FUN.psp_autocuidado_somatico',pole:'pos',w:0.75}],
  'Sueño\nDesregulado': [{id:'G.sueno-ritmo',inv:true,pole:'neg',w:0.8},{id:'G.sueno-insomnio',pole:'pos',w:1.0},{id:'G.sueno-necesidad-reducida',pole:'pos',w:0.65},{id:'G.arousal',abs:true,w:0.35}],
  'Alimentación\nDesregulada': [{id:'F3.tono',abs:true,w:0.65},{id:'G.apetito',abs:true,w:0.7},{id:'G.interocepcion',abs:true,w:0.45},{id:'FUN.psp_autocuidado_alimentacion',pole:'pos',w:0.75}],

  // Forbes: Disfunción emocional > Trastorno del pensamiento
  'Psicosis\nPositiva': [{id:'F7.testing',inv:true,w:1.1},{id:'F4.contenido',w:1.0},{id:'F4.experiencia',abs:true,w:0.45},{id:'I.insight',inv:true,w:0.5}],
  'Experiencias\nDisociativas': [{id:'F7.auto-mentalización',inv:true,w:0.9},{id:'F7.self-integracion',inv:true,pole:'neg',minPath:2,w:0.9},{id:'F7.coherencia-autobiografica',inv:true,pole:'neg',w:1.1},{id:'NC.conciencia',abs:true,w:0.5},{id:'G.arousal',inv:true,pole:'neg',w:0.35}],
  'Pérdida control\ncorporal': [{id:'NM.luria',abs:true,w:0.35},{id:'NM.dismetria',abs:true,w:0.4},{id:'NM.alternancia',abs:true,w:0.4},{id:'NM.tandem',abs:true,w:0.4},{id:'NM.parkinsonismo',abs:true,w:0.45}],
  'Sínt. físicos\nincontrolables': [{id:'F2.sensorial',abs:true,w:0.45},{id:'NM.tic',abs:true,w:0.5},{id:'NM.estereotipia',abs:true,w:0.5},{id:'NM.diskinesia',abs:true,w:0.5},{id:'NM.distonia',abs:true,w:0.55},{id:'NM.acatisia',abs:true,w:0.55},{id:'NM.parkinsonismo',abs:true,w:0.55},{id:'NM.tremor',abs:true,w:0.5}],

  // Forbes: Dificultades neurodevelopmentales y cognitivas
  'Sensación alt.\n+ control atenc.': [{id:'F5.regulación',abs:true,w:0.85},{id:'F2.sensorial',abs:true,w:0.75},{id:'G.interocepcion',abs:true,w:0.25}],
  'Deterioro\nNeurocognitivo': [{id:'NC.fluencia',abs:true},{id:'NC.digit',abs:true},{id:'NC.tmt',abs:true},{id:'NC.clock',abs:true},{id:'NC.recall',abs:true},{id:'J.juicio',inv:true,w:0.8},{id:'I.insight',inv:true,w:0.6},{id:'NM.luria',abs:true,w:0.45},{id:'NM.dismetria',abs:true,w:0.3},{id:'NM.alternancia',abs:true,w:0.45},{id:'NM.tandem',abs:true,w:0.3}],
  'Dificultades\nOrganización': [{id:'G.coherencia',inv:true,pole:'neg',w:0.65},{id:'F5.regulación',inv:true,pole:'neg',w:0.55},{id:'FUN.psp_autocuidado',inv:true,pole:'neg',w:0.45},{id:'FUN.psp_utiles',inv:true,pole:'neg',w:0.45}],
  'Olvido': [{id:'NC.recall',abs:true,w:1.0},{id:'NC.digit',abs:true,w:0.45},{id:'F7.coherencia-autobiografica',pole:'pos',w:0.55}],
  'Comportamiento\nRitualizado': [{id:'F7.testing',pole:'pos',w:0.6},{id:'F5.regulación',abs:true,w:0.55},{id:'G.coherencia',pole:'pos',w:0.65},{id:'FUN.psp_autocuidado_rituales',pole:'pos',w:0.85},{id:'FUN.psp_autocuidado_otro',pole:'pos',w:0.45}],
  'Dificultades\nComunicación social': [{id:'F1.expresividad',inv:true,w:0.9},{id:'F7.mentalización-otro',inv:true,w:0.75},{id:'G.coherencia',inv:true,w:0.5},{id:'P2.afiliación',abs:true,w:0.35}],

  // Forbes: Externalizante, manía y desapego > Externalizante
  'Afecto neg.\nexternalizado': [{id:'F6.frustración',w:1.0},{id:'P2.afiliación',inv:true,pole:'neg',w:0.45},{id:'FUN.psp_disruptivas',pole:'pos',w:0.6},{id:'E.regulación',inv:true,w:0.5}],
  'Antagonismo': [{id:'F6.autoevaluación',pole:'pos',w:0.85},{id:'P1.dominancia',pole:'pos',w:0.8},{id:'F7.mentalización-otro',pole:'pos',w:0.45},{id:'FUN.psp_disruptivas',pole:'pos',w:0.35}],
  'Comportamiento\nAntisocial': [{id:'FUN.psp_disruptivas',pole:'pos',w:1.0},{id:'P2.afiliación',inv:true,pole:'neg',w:0.55},{id:'F6.frustración',w:0.55},{id:'F3.drive',w:0.35}],
  'Desinhibición': [{id:'F3.drive',w:0.75},{id:'F2.velocidad',w:0.5},{id:'F6.amenaza',inv:true,pole:'neg',w:0.55},{id:'FUN.psp_utiles',pole:'pos',w:0.45},{id:'FUN.psp_disruptivas',pole:'pos',w:0.35},{id:'E.regulación',inv:true,w:0.6}],
  'Insensibilidad': [{id:'F7.mentalización-otro',inv:true,pole:'neg',w:0.9},{id:'F1.expresividad',inv:true,w:0.55},{id:'F6.amenaza',inv:true,pole:'neg',w:0.45}],

  // Forbes: Externalizante, manía y desapego > Manía/Bajo desapego
  'Manía': [{id:'F6.animo-meta',pole:'pos',w:1.05},{id:'F3.drive',w:0.8},{id:'F3.anticipación',w:0.65},{id:'F2.velocidad',w:0.55},{id:'G.sueno-necesidad-reducida',pole:'pos',w:0.85},{id:'G.arousal',pole:'pos',w:0.55},{id:'FUN.psp_utiles',pole:'pos',w:0.5},{id:'FUN.psp_relaciones',pole:'pos',w:0.4},{id:'P1.dominancia',pole:'pos',w:0.4},{id:'P2.afiliación',pole:'pos',w:0.4},{id:'E.egodistonia',pole:'pos',w:0.3},{id:'E.regulación',inv:true,w:0.45}],
  'Desapego': [{id:'F1.expresividad',inv:true,w:0.75},{id:'FUN.psp_relaciones',inv:true,w:0.85},{id:'FUN.psp_utiles',inv:true,w:0.45},{id:'F3.drive',inv:true,w:0.55},{id:'F3.tono',inv:true,w:0.4},{id:'F7.mentalización-otro',inv:true,pole:'neg',w:0.5},{id:'P1.dominancia',inv:true,pole:'neg',w:0.35},{id:'P2.afiliación',inv:true,pole:'neg',w:0.55},{id:'G.coherencia',pole:'pos',w:0.25},{id:'E.regulación',pole:'pos',w:0.5}]
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

function calcDomainScore(dims) {
  let sum=0, count=0;
  dims.forEach(d => {
    const raw = resolveFeederRaw(d);
    if (raw !== null && raw !== undefined) {
      let v = 0;
      if (d.abs) {
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
  'Reg.\nEmoc.': [{id:'E.regulación'}],
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
  'Sensibilidad\na Amenaza': [{id:'F6.amenaza'}],
  'Tolerancia a\nFrustración': [{id:'F6.frustración'}],
  'Ánimo\nMeta / Loss': [
    {id:'F6.animo-meta'},
    {id:'F6.loss-depresivo',tooltipOnly:true},
    {id:'F6.loss-ansioso',tooltipOnly:true}
  ],
  'Auto-\nevaluación': [{id:'F6.autoevaluación'}],
  'Visión\nProspectiva': [{id:'F6.desesperanza'}],
  'Testing de\nRealidad': [{id:'F7.testing'}],
  'Coherencia\nAutobiográfica': [{id:'F7.coherencia-autobiografica'}],
  'Auto-\nMentalización': [{id:'F7.auto-mentalización'}],
  'Self\nIntegrado': [{id:'F7.self-integracion'}],
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
  'Acute Threat\n(fear)': [{id:'F6.amenaza',pole:'pos',visual:'activation',spec:'amenaza_type',specIn:['[F] Fásico (pánico, startle)','[T+F] Ambos']}],
  'Potential Threat\n(anxiety)': [{id:'F6.loss-ansioso',inv:true,visual:'activation'},{id:'G.arousal',pole:'pos',visual:'activation',w:0.35}],
  'Sustained\nThreat': [{id:'F6.amenaza',pole:'pos',visual:'activation'},{id:'F6.desesperanza',inv:true,visual:'activation'},{id:'G.arousal',pole:'pos',visual:'activation'}],
  'Frustrative\nNonreward': [{id:'F6.frustración',pole:'pos',visual:'activation'},{id:'FUN.psp_disruptivas',abs:true,visual:'activation',w:0.45},{id:'P2.afiliación',inv:true,pole:'neg',visual:'activation',w:0.45}],
  'Loss': [{id:'F6.loss-depresivo',inv:true,visual:'activation'},{id:'F6.loss-ansioso',inv:true,visual:'activation'},{id:'F6.desesperanza',inv:true,visual:'activation',w:0.7},{id:'F3.tono',inv:true,visual:'activation',w:0.55},{id:'FUN.psp_relaciones',inv:true,visual:'activation',w:0.45}],
  // ── Positive Valence Systems ──
  'Reward\nResponsiveness': [{id:'F3.tono'}],
  'Reward\nAnticipation': [{id:'F3.anticipación'}],
  'Reward\nValuation': [{id:'F3.tono'},{id:'F3.anticipación'},{id:'F6.desesperanza'}],
  'Effort\nValuation': [{id:'F3.drive'},{id:'FUN.psp_utiles',pole:'neg',abs:true,w:0.5},{id:'FUN.psp_utiles',pole:'pos',w:0.5}],
  'Approach\nMotivation': [{id:'F3.drive'},{id:'F3.anticipación'},{id:'FUN.psp_utiles',pole:'neg',abs:true,w:0.5},{id:'FUN.psp_utiles',pole:'pos',w:0.5}],
  // ── Cognitive Systems ──
  'Attention': [{id:'F5.regulación'}],
  'Perception': [{id:'F2.sensorial'},{id:'NC.clock',abs:true,w:0.35}],
  'Language /\nFluency': [{id:'NC.fluencia',inv:true}],
  'Declarative\nMemory': [{id:'NC.recall',inv:true},{id:'F7.coherencia-autobiografica',abs:true,w:0.75}],
  'Working\nMemory': [{id:'NC.digit',inv:true}],
  'Cognitive\nControl': [{id:'F5.regulación'},{id:'NC.tmt',inv:true},{id:'NC.clock',abs:true,w:0.55},{id:'J.juicio',inv:true,w:1.0},{id:'NM.luria',inv:true,w:0.35},{id:'NM.alternancia',inv:true,w:0.35},{id:'F7.coherencia-autobiografica',pole:'pos',w:0.5},{id:'E.regulación',inv:true,w:0.6}],
  // ── Social Processes ──
  'Affiliation\n& Attachment': [{id:'P2.afiliación',abs:true},{id:'P1.dominancia',abs:true,w:0.45},{id:'F1.expresividad'},{id:'FUN.psp_relaciones',abs:true,w:0.75}],
  'Social\nCommunication': [{id:'F1.expresividad'},{id:'F7.self-integracion',pole:'pos',w:0.5},{id:'P1.dominancia',abs:true,w:0.65},{id:'P2.afiliación',abs:true,w:0.6}],
  'Self\nKnowledge': [{id:'F7.auto-mentalización'},{id:'F7.self-integracion',abs:true,w:1.1},{id:'F7.coherencia-autobiografica',pole:'neg',inv:true,w:0.75},{id:'I.insight',inv:true,w:1.0},{id:'E.egodistonia',abs:true,w:0.6}],
  'Other\nUnderstanding': [{id:'F7.mentalización-otro'}],
  // ── Arousal / Regulatory Systems ──
  'Arousal': [{id:'G.arousal'},{id:'E.regulación',abs:true,w:0.4}],
  'Circadian\nRhythms': [{id:'G.sueno-ritmo'},{id:'G.sueno-insomnio',pole:'pos',w:0.75},{id:'G.sueno-necesidad-reducida',pole:'pos',w:0.75}],
  'Sleep-\nWakefulness': [{id:'G.sueno-ritmo',inv:true,pole:'neg',w:0.8},{id:'G.sueno-insomnio',pole:'pos',w:1.0},{id:'G.sueno-necesidad-reducida',pole:'pos',w:1.0}],
  'Interoceptive\nSensory': [{id:'G.interocepcion'},{id:'G.apetito',abs:true,w:0.5},{id:'FUN.psp_autocuidado_somatico',pole:'pos',w:0.55},{id:'FUN.psp_autocuidado_alimentacion',pole:'pos',w:0.35},{id:'FUN.psp_autocuidado',inv:true,pole:'neg',w:0.35}],
  // ── Sensorimotor Systems ──
  'Motor\nAction': [{id:'F2.velocidad'},{id:'NM.luria',inv:true},{id:'NM.alternancia',inv:true},{id:'NM.acatisia',abs:true,visual:'activation',w:0.45},{id:'NM.parkinsonismo',inv:true,w:0.65},{id:'NM.tremor',abs:true,visual:'activation',w:0.45},{id:'NM.diskinesia',abs:true,visual:'activation',w:0.45}],
  'Agency\n& Ownership': [{id:'F7.auto-mentalización'},{id:'F7.self-integracion',abs:true,w:0.8},{id:'F4.experiencia'},{id:'J.juicio',inv:true,w:0.8},{id:'I.insight',inv:true,w:0.8},{id:'FUN.psp_autocuidado',abs:true,w:0.45},{id:'F7.coherencia-autobiografica',pole:'neg',inv:true,w:0.5}],
  'Sensorimotor\nDynamics': [{id:'F2.sensorial'},{id:'NM.dismetria',inv:true},{id:'NM.tandem',inv:true},{id:'NM.tic',abs:true,visual:'activation',w:0.4},{id:'NM.estereotipia',abs:true,visual:'activation',w:0.4},{id:'NM.distonia',abs:true,visual:'activation',w:0.45},{id:'NM.acatisia',abs:true,visual:'activation',w:0.35},{id:'NM.diskinesia',abs:true,visual:'activation',w:0.4},{id:'NM.parkinsonismo',inv:true,w:0.4},{id:'NM.tremor',abs:true,visual:'activation',w:0.4}]
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
  {name:'Neurodesarrollo / Cognición',from:14,to:19,color:'#57534e'},
  {name:'Externalizante',from:20,to:24,color:'#dc2626'},
  {name:'Manía / Bajo desapego',from:25,to:26,color:'#16a34a'}
];

const HITOP_FEEDER_ROLES = {
  'LPFS Self': {central:['F7.self-integracion','F7.auto-mentalización'], bridge:['J.juicio']},
  'LPFS Interpersonal': {central:['F7.mentalización-otro','FUN.psp_relaciones'], bridge:['P2.afiliación']},
  'Malestar': {central:['F6.loss-depresivo','F6.loss-ansioso'], bridge:['F6.desesperanza','F6.autoevaluación'], complementary:['F3.tono','F3.drive','G.apetito','E.egodistonia','FUN.psp_disruptivas','E.regulación']},
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
  'Sínt. físicos incontrolables': {central:['NM.tic','NM.estereotipia','NM.diskinesia','NM.distonia','NM.acatisia','NM.parkinsonismo','NM.tremor'], bridge:['F2.sensorial']},
  'Sensación alt. + control atenc.': {central:['F5.regulación','F2.sensorial'], bridge:['G.interocepcion']},
  'Deterioro Neurocognitivo': {central:['NC.fluencia','NC.digit','NC.tmt','NC.clock','NC.recall','J.juicio'], bridge:['I.insight','NM.luria','NM.alternancia'], complementary:['NM.dismetria','NM.tandem']},
  'Dificultades Organización': {central:['G.coherencia','F5.regulación'], bridge:['FUN.psp_autocuidado','FUN.psp_utiles']},
  'Olvido': {central:['NC.recall','NC.digit'], bridge:['F7.coherencia-autobiografica']},
  'Comportamiento Ritualizado': {central:['FUN.psp_autocuidado_rituales','F7.testing','G.coherencia'], bridge:['F5.regulación'], complementary:['FUN.psp_autocuidado_otro']},
  'Dificultades Comunicación social': {central:['F1.expresividad','F7.mentalización-otro'], bridge:['G.coherencia','P2.afiliación']},
  'Afecto neg. externalizado': {central:['F6.frustración','FUN.psp_disruptivas'], bridge:['P2.afiliación']},
  'Antagonismo': {central:['F6.autoevaluación','P1.dominancia'], bridge:['F7.mentalización-otro','FUN.psp_disruptivas']},
  'Comportamiento Antisocial': {central:['FUN.psp_disruptivas'], bridge:['P2.afiliación','F6.frustración'], complementary:['F3.drive']},
  'Desinhibición': {central:['F3.drive','F2.velocidad'], bridge:['F6.amenaza','FUN.psp_utiles','FUN.psp_disruptivas'], complementary:['E.regulación']},
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
    'Velocidad Psicomotora':'Velocidad',
    'Integración Sensorial':'Sensorial',
    'Regulación Atencional':'Atención',
    'Drive Motivacional':'Drive',
    'Anticipación Hedónica':'Anticipación',
    'Tono Hedónico':'Tono',
    'Experiencia del Pensamiento':'Experiencia',
    'Convicción de Creencia':'Convicción',
    'Sensibilidad a Amenaza':'Amenaza',
    'Tolerancia a Frustración':'Frustración',
    'Ánimo Meta':'Ánimo',
    'Ánimo Meta / Loss':'Ánimo',
    'Loss Depresivo':'Loss Dep.',
    'Loss Ansioso':'Loss Anx.',
    'Auto-evaluación':'Autoeval.',
    'Visión Prospectiva':'Prospectiva',
    'Testing de Realidad':'Realidad',
    'Coherencia Autobiográfica':'Autobio.',
    'Auto-Mentalización':'Auto-ment.',
    'Self Integrado':'Self',
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
    if (!rawMode) {
      if (d.pole === 'neg' && raw >= 0) return null;
      if (d.pole === 'pos' && raw <= 0) return null;
      if (d.inv && raw >= 0) return null;
      if (d.minPath && Math.abs(raw) < d.minPath) return null;
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
  if (d.pole === 'neg' && raw >= 0) return withRole({evaluated:false, ne:false, excluded:true, dim:d});
  if (d.pole === 'pos' && raw <= 0) return withRole({evaluated:false, ne:false, excluded:true, dim:d});
  let pathVal, sig, extreme;
  if (d.id === 'F4.contenido') {
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
    pathVal = raw;
  }
  const minPath = d.minPath || (d.id === 'F4.contenido' ? 3 : 1);
  sig = pathVal >= minPath;
  extreme = d.id === 'F4.contenido' ? pathVal >= 4 : pathVal >= 2;
  return withRole({evaluated:true, ne:false, dim:d, raw, pathVal, signal:sig, extreme});
}

// ─── Capa 2 outcomes (3ST · BVC · PSP · capacidad) ───
function outcomeSuicidio() {
  const desesp = get('F6.desesperanza');
  const animo = get('F6.animo-meta');
  const drive = get('F3.drive');
  const velo = get('F2.velocidad');
  const a4 = pspChannelScore('FUN.psp_disruptivas', 'neg');
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
    (a4 !== null && a4 <= -2 ? 2 : a4 === -1 ? 1 : 0) +
    (medios === 'SI' ? 1 : 0);
  const capabilityAlta = capabilityScore >= 2;

  let signals = [], status = 'green', summary = 'Sin patrón de riesgo letal detectado';

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
    if (a4 !== null && a4 <= -2) cap.push(`autoagresividad grave (A4=${a4})`);
    else if (a4 === -1) cap.push('autoagresividad leve / NSSI');
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
    if (a4 === -1) { signals.push(`Autoagresividad leve (NSSI) — FUN.A4 = ${a4}`); status = 'yellow'; }
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
  const a4 = pspChannelScore('FUN.psp_disruptivas', 'pos');
  const conciencia = get('NC.conciencia');
  const hxViol = getRaw('EXT.hx_violencia');
  const sust = getRaw('EXT.sustancias');
  let signals = [], status = 'green', summary = 'Sin patrón de agresividad detectado';

  // === BVC 6-item (Brøset Violence Checklist, Woods 2002 — predicción <24h, AUC 0.83-0.97) ===
  const bvc = {
    confusion: (conciencia !== null && conciencia <= -1) ? 1 : 0,
    irritabilidad: (frustra !== null && frustra >= 1) ? 1 : 0,
    ruidos: getRaw('EXT.bvc_ruidos') === 'SI' ? 1 : 0,
    amenazaVerbal: getRaw('EXT.bvc_amenaza_verbal') === 'SI' ? 1 : 0,
    amenazaFisica: (a4 !== null && a4 >= 1) ? 1 : 0,
    ataqueObjetos: getRaw('EXT.bvc_objetos') === 'SI' ? 1 : 0
  };
  const bvcSum = Object.values(bvc).reduce((a,b) => a+b, 0);
  const bvcLabels = {
    confusion: `confusión (NC=${conciencia})`,
    irritabilidad: `irritabilidad (frust=${frustra})`,
    ruidos: 'ruidos/agitación',
    amenazaVerbal: 'amenaza verbal',
    amenazaFisica: `amenaza física (A4=${a4})`,
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

  // === Heteroagresividad grave (A4+2) — independiente del BVC ===
  if (a4 !== null && a4 >= 2) {
    signals.push(`<b>Heteroagresividad grave</b> en curso (FUN.A4 = +${a4}) — agresión física/peligro a terceros documentado`);
    status = 'red';
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
function outcomeCapacidad() {
  const decision = (getSpec('EXT.decision_capacidad','decision_text') || '').trim();
  const decisionDeclared = getRaw('EXT.decision_capacidad') === 'DECLARADA' && decision;
  const insight = get('I.insight');
  const juicio = get('J.juicio');
  const testing = get('F7.testing');
  const contenido = get('F4.contenido');
  const animoMeta = get('F6.animo-meta');
  if (!decisionDeclared) {
    return {
      title: 'Capacidad para [X]',
      status: 'muted',
      summary: 'Sin decisión específica declarada. Capacidad NO computa (PRD invariante 6: no existe capacidad global).',
      signals: [],
      statusLabel: 'Sin decisión'
    };
  }

  // === Detección de patrón clínico subyacente (Owen 2008) ===
  const psicosisActiva = (testing !== null && testing <= -1) || (contenido !== null && contenido >= 3);
  const depresionSevera = animoMeta !== null && animoMeta <= -2;
  const patron = psicosisActiva ? 'psicosis' : depresionSevera ? 'depresion' : 'otro';

  let signals = [], status = 'green', summary = `Capacidad preservada para: <b>${decision}</b>`;
  signals.push(`<i>Patrón subyacente: <b>${patron}</b> — Owen 2008: feeders distintos según dx</i>`);

  // === Apreciación (Appelbaum-Grisso habilidad 3) — feeder por patrón (Owen 2008) ===
  if (patron === 'psicosis') {
    // En psicosis/BPAD insight es el MEJOR discriminator (Owen 2008)
    if (insight !== null && insight <= -2) {
      signals.push(`<b>Apreciación comprometida (vía insight):</b> I=${insight} en contexto psicótico → no reconoce que la decisión le concierne`);
      status = 'red';
    }
    if (testing !== null && testing <= -2) {
      signals.push(`<b>Apreciación comprometida (vía testing):</b> F7=${testing} → psicosis activa impide valoración realista`);
      status = 'red';
    }
    if (contenido !== null && contenido >= 4) {
      signals.push(`<b>Apreciación comprometida (vía contenido):</b> F4=${contenido} convicción fija → decisión filtrada por delirio`);
      status = 'red';
    }
  } else if (patron === 'depresion') {
    // En no-psicóticos depressed mood discrimina; insight NO (Owen 2008)
    signals.push(`<b>Apreciación comprometida (vía ánimo):</b> animo-meta=${animoMeta} — depresión severa distorsiona valoración prospectiva ("nothing matters", "no me lo merezco")`);
    status = 'red';
    if (insight !== null && insight <= -2) {
      signals.push(`Insight ${insight} presente — en depresión NO es discriminador principal (Owen 2008)`);
    }
  } else {
    // Patrón "otro": criterios Appelbaum-Grisso estándar sin priorización por dx
    if (insight !== null && insight <= -2) {
      signals.push(`<b>Apreciación comprometida:</b> I=${insight} (sin patrón dx claro, aplicar Appelbaum-Grisso estándar)`);
      status = 'red';
    }
  }

  // === Razonamiento (Appelbaum-Grisso habilidad 2) — no varía por dx ===
  if (juicio !== null && juicio <= -2) {
    signals.push(`<b>Razonamiento gravemente comprometido:</b> juicio ${juicio} — no anticipa consecuencias (habilidad 2 Appelbaum)`);
    status = 'red';
  }

  // Amarillo
  if (status === 'green') {
    if (patron === 'psicosis') {
      if (insight !== null && insight === -1) { signals.push(`Apreciación parcial vía insight (${insight})`); status = 'yellow'; }
      if (testing !== null && testing === -1) { signals.push(`Testing dudoso (F7=${testing})`); status = 'yellow'; }
    } else if (patron === 'depresion') {
      if (animoMeta !== null && animoMeta === -1) { signals.push(`Ánimo bajo (${animoMeta}) — apreciación parcialmente sesgada`); status = 'yellow'; }
    } else {
      if (insight !== null && insight === -1) { signals.push(`Apreciación parcial (insight ${insight})`); status = 'yellow'; }
    }
    if (juicio !== null && juicio === -1) { signals.push(`Razonamiento inconsistente (juicio ${juicio})`); status = 'yellow'; }
  }

  if (status === 'red') summary = `⚠ Capacidad COMPROMETIDA para: <b>${decision}</b>. Documentar criterios Appelbaum-Grisso fallidos (4 habilidades) + patrón ${patron}.`;
  else if (status === 'yellow') summary = `Capacidad DUDOSA para: <b>${decision}</b>. Re-evaluar habilidades Appelbaum específicas. Patrón ${patron}.`;
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
    // Orientación via specifiers
    const specs = state['NC.conciencia']?.specifiers || {};
    const desor = [];
    if (specs['O:T']) desor.push('temporal');
    if (specs['O:E']) desor.push('espacial');
    if (specs['O:P']) desor.push('en persona');
    if (desor.length) s += `, desorientado ${desor.join(', ')}`;
    else if (String(nc) === '0') s += ', orientado en tiempo, espacio y persona';
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
    ['NM.tics','tics'],['NM.estereotipias','estereotipias'],
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
    if (n === 0) pensFrags.push('curso del pensamiento sin alteraciones');
    else if (n < 0) pensFrags.push(`curso del pensamiento enlentecido ${n === -2 ? 'severo' : 'leve'}`);
    else if (n > 0) pensFrags.push(`curso del pensamiento acelerado ${n === 2 ? 'severo' : 'leve'}`);
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
  const f7self = sc('F7.self-integracion');
  const insight = sc('I.insight');
  const juicio = sc('J.juicio');
  const ego = sc('E.egodistonia');
  const mentFrags = [];
  if (f7t !== null) {
    const n = parseInt(f7t, 10);
    if (n === 0) mentFrags.push('testing de realidad preservado');
    else if (n < 0) mentFrags.push(`testing de realidad comprometido (${n === -2 ? 'pérdida franca' : 'dudoso'})`);
  }
  if (f7autoBio !== null) {
    const n = parseInt(f7autoBio, 10);
    if (n === 0) mentFrags.push('coherencia autobiográfica integrada');
    else if (n < 0) mentFrags.push(`coherencia autobiográfica fragmentada (${n === -2 ? 'reliving/flashbacks' : 'intrusiones o lagunas parciales'})`);
    else if (n > 0) mentFrags.push(`coherencia autobiográfica sobreconstruida (${n === 2 ? 'confabulación' : 'relleno inferencial corregible'})`);
  }
  if (f7self !== null) {
    const n = parseInt(f7self, 10);
    if (n === 0) mentFrags.push('self integrado y flexible');
    else if (n < 0) mentFrags.push(`self ${n === -2 ? 'disuelto/irreal' : 'difuso o malo'}`);
    else if (n > 0) mentFrags.push(`self ${n === 2 ? 'performativo rígido/masking severo' : 'sobreadaptado con masking'}`);
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
  if (mentFrags.length) fragments.push(capitalizeFirst(mentFrags.join('; ')) + '.');

  // ── 8. FUNCIONALIDAD (PSP) ──
  const a1 = sc('FUN.psp_utiles');
  const a2 = sc('FUN.psp_relaciones');
  const a3 = sc('FUN.psp_autocuidado');
  const a4 = sc('FUN.psp_disruptivas');
  const psp = [];
  const pspAlt = (id, area) => {
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
  const p1 = sc('P1.dominancia');
  const p2 = sc('P2.afiliación');
  if (p1 !== null || p2 !== null) {
    const ip = [];
    if (p1 !== null && String(p1) !== '0') ip.push(`eje dominancia: ${(lvlAx('P1.dominancia', p1) || '').toLowerCase()}`);
    if (p2 !== null && String(p2) !== '0') ip.push(`eje afiliación: ${(lvlAx('P2.afiliación', p2) || '').toLowerCase()}`);
    if (ip.length) fragments.push(`Patrón interpersonal: ${ip.join(', ')}.`);
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
  'NM.tic':                  { DA_STR:[1,'negHyper'] },
  'NM.estereotipia':         { DA_STR:[1,'negHyper'] },
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
  'FUN.psp_disruptivas':     { OFC_AMY:[[1,'negHyper'], [2,'posHyper']], SAL:[[1,'negHyper'], [1,'posHyper']], CEN:[[1,'negHypo'], [1,'posHypo']] }
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
  'G.sueno-ritmo:-2': { construct:'severe_hypersomnia', label:'Hipersomnia severa', hitop:['Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-ritmo'] },
  'G.sueno-ritmo:-1': { construct:'mild_hypersomnia', label:'Hipersomnia leve', hitop:['Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-ritmo'] },
  'G.sueno-insomnio:+1': { construct:'mild_insomnia', label:'Insomnio leve', hitop:['Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-insomnio'] },
  'G.sueno-insomnio:+2': { construct:'severe_insomnia', label:'Insomnio severo', hitop:['Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-insomnio'] },
  'G.sueno-necesidad-reducida:+1': { construct:'mild_reduced_sleep_need', label:'Reducción leve de necesidad de sueño', hitop:['Manía','Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-necesidad-reducida'] },
  'G.sueno-necesidad-reducida:+2': { construct:'severe_reduced_sleep_need', label:'Reducción severa de necesidad de sueño', hitop:['Manía','Sueño Desregulado'], rdoc:['Sleep-Wakefulness','Circadian Rhythms'], brain:BRAIN_MATRIX['G.sueno-necesidad-reducida'] },
  'F7.self-integracion:-2': { construct:'identity_dissolution', label:'Self disuelto / irreal', hitop:['LPFS Self','Experiencias Disociativas'], rdoc:['Self Knowledge','Agency & Ownership'], brain:BRAIN_MATRIX['F7.self-integracion'] },
  'F7.self-integracion:-1': { construct:'diffuse_bad_self', label:'Self difuso / malo', hitop:['LPFS Self','Malestar'], rdoc:['Self Knowledge'], brain:BRAIN_MATRIX['F7.self-integracion'] },
  'F7.self-integracion:+1': { construct:'social_masking', label:'Self sobreadaptado / masking', hitop:['LPFS Self'], rdoc:['Social Communication','Self Knowledge','Agency & Ownership'], brain:BRAIN_MATRIX['F7.self-integracion'] },
  'F7.self-integracion:+2': { construct:'rigid_performative_self', label:'Self performativo rígido', hitop:['LPFS Self'], rdoc:['Social Communication','Self Knowledge','Agency & Ownership'], brain:BRAIN_MATRIX['F7.self-integracion'] },
  'FUN.psp_autocuidado_rituales:+1': { construct:'rigid_selfcare_rituals', label:'Rituales rígidos', hitop:['Comportamiento Ritualizado'], rdoc:['Cognitive Control'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_rituales'] },
  'FUN.psp_autocuidado_rituales:+2': { construct:'dominant_selfcare_rituals', label:'Rituales dominantes', hitop:['Comportamiento Ritualizado'], rdoc:['Cognitive Control'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_rituales'] },
  'FUN.psp_autocuidado_alimentacion:+1': { construct:'rigid_eating_rituals', label:'Rituales de alimentación rígidos', hitop:['Patología Alimentaria','Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_alimentacion'] },
  'FUN.psp_autocuidado_alimentacion:+2': { construct:'extreme_restrictive_dieting', label:'Dietas restrictivas extremas', hitop:['Patología Alimentaria','Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['FUN.psp_autocuidado_alimentacion'] },
  'G.apetito:-2': { construct:'anorectic_collapse', label:'Colapso anorético', hitop:['Malestar','Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['G.apetito'] },
  'G.apetito:-1': { construct:'reduced_appetite', label:'Apetito reducido', hitop:['Malestar','Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['G.apetito'] },
  'G.apetito:+1': { construct:'increased_appetite', label:'Apetito aumentado', hitop:['Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['G.apetito'] },
  'G.apetito:+2': { construct:'hyperphagic_dysregulation', label:'Desregulación hiperfágica', hitop:['Alimentación Desregulada'], rdoc:['Interoceptive Sensory'], brain:BRAIN_MATRIX['G.apetito'] },
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
  if (sourceId === 'F4.contenido') return String(raw);
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
  if (typeof PSP_SPLIT_CHANNELS === 'undefined') return null;
  for (const [baseId, cfg] of Object.entries(PSP_SPLIT_CHANNELS)) {
    for (const side of ['neg','pos']) {
      const channels = cfg?.[side] ? (Array.isArray(cfg[side]) ? cfg[side] : [cfg[side]]) : [];
      if (channels.some(ch => ch.id === sourceId)) return baseId;
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
  if (d.pole === 'neg' && raw >= 0) return {signal:false, excluded:true};
  if (d.pole === 'pos' && raw <= 0) return {signal:false, excluded:true};
  let pathVal, sig, extreme;
  if (d.id === 'F4.contenido') {
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
    pathVal = raw;
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
  constructScoreItems().forEach(item => {
    const v = state[item.id]?.score;
    if (v === null || v === undefined || v === 'NE') return;
    const raw = parseInt(v, 10);
    if (Number.isNaN(raw) || raw === 0) return;
    if (item.id === 'F6.animo-meta' && raw < 0 && hasLossChannels) return;
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
  if (feeder.id === 'F4.contenido') parts.push('conviccion 0-4');
  else if (feeder.inv) parts.push('inverso');
  else if (feeder.abs) parts.push('absoluto');
  else parts.push('directo');
  if (feeder.pole === 'neg') parts.push('solo polo -');
  if (feeder.pole === 'pos') parts.push('solo polo +');
  if (feeder.visual === 'activation') parts.push('visual activación +');
  if (feeder.visual === 'deactivation') parts.push('visual desactivación -');
  if (feeder.minPath) parts.push(`umbral ${feeder.minPath}`);
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
    ...constructRulesFromMap(HITOP_MAP, sourceId, raw, 'HiTOP', {omitLPFS:true}),
    ...constructRulesFromMap(RDOC_MAP, sourceId, raw, 'RDoC')
  ];
  const brain = constructBrainForSource(sourceId) || CONSTRUCT_MATRIX_OVERRIDES[`${sourceId}:${constructScoreKey(sourceId, raw)}`]?.brain;
  if (brain) rules.push(`Brain:magnitud = ${sourceId === 'F4.contenido' ? 'score/4' : '|score|/2'}; C=hub central, M=mecanismo puente, A=accesorio`);
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
    Object.keys(item.scores || {}).forEach(scoreKey => {
      const raw = parseInt(scoreKey, 10);
      if (Number.isNaN(raw) || raw === 0) return;
      const canonicalKey = constructScoreKey(item.id, raw);
      const id = `${item.id}:${canonicalKey}`;
      const override = CONSTRUCT_MATRIX_OVERRIDES[id] || {};
      const label = override.label || constructLabel(item.id, raw);
      const derivedHiTOP = constructDomainsFromMapAll(HITOP_MAP, item.id, raw, {omitLPFS:true});
      const derivedRDoC = constructDomainsFromMapAll(RDOC_MAP, item.id, raw);
      const hitop = constructUnique([...(override.hitop || []), ...derivedHiTOP]).filter(x => !constructIsLPFS(x));
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
  if (sourceId === 'F4.contenido') return raw >= 4 ? 'cm-extreme' : raw >= 3 ? 'cm-signal' : '';
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
    <div class="h-sub">Todos los scores no-cero se traducen a constructos HiTOP/RDoC y redes. LPFS queda fuera de esta tabla; se mantiene solo en Personality Function.</div>
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
