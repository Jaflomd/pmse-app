/* smoke: el caso de encefalitis autoinmune validado (de _enceph_seed.test.js) */
module.exports = [{
  id: 'SMOKE-ENC-35',
  dx: 'Encefalitis autoinmune anti-NMDAR (6E61 CIE-11 / org. DSM-5-TR)',
  expected: { gate: true, orgBand: 'hi', safety: 'g', deNovo: true },
  meta: { codigo:'ENC-35', edad:'35', sexo:'F', fecha:'2026-06-01', evaluador:'JFC',
    setting:'Emergencia', fuente:'Familiar', confiabilidad:'Media',
    estadoCivil:'Soltera', etnia:'Mestizo/a', ocupacion:'Profesora', educacion:'Universitaria', ses:'Medio' },
  ls: {
    'exposome_scorer_v1': JSON.stringify({
      answers:{ "C-n1":"Sí","C-n2":"No","C-n6":"Sí","E3-7":"Sí","E2-3":"Sí" },
      extras:{}, flags:{}, substances:[], evOpen:{},
      _demoName:"Encefalitis autoinmune (anti-NMDAR)",
      _capBlock:"A", _pName:"ENC-35", _pAge:"35", _pEval:"JFC", _pSex:"F"
    }),
    'expfx_state_v5': JSON.stringify({
      cells:{
        "s0_5::social":{score:"1",note:"Desarrollo y apego normales",points:[]},
        "s0_5::cognicion":{score:"1",note:"Hitos en tiempo",points:[]},
        "s6_11::acadlab":{score:"1",note:"Buen rendimiento escolar",points:[]},
        "s12_15::social":{score:"1",note:"Integración con pares adecuada",points:[]},
        "s16_18::acadlab":{score:"0",note:"Ingresa a universidad",points:[]},
        "s19_25::acadlab":{score:"0",note:"Titulación; inserción laboral como docente",points:[]},
        "s19_25::vincular":{score:"1",note:"Relaciones de pareja sin disfunción",points:[]},
        "s26_44::acadlab":{score:"0",note:"Docente funcional sin antecedentes",
          points:[{age:34,score:"0",note:"Plena funcionalidad premórbida"},{age:35,score:"6",note:"QUIEBRE AGUDO"}]},
        "s26_44::cognicion":{score:"6",note:"Debut agudo a los 35 fluctuación de conciencia",
          points:[{age:34,score:"0",note:"Cognición normal"},{age:35,score:"6",note:"Deterioro cognitivo agudo"}]},
        "s26_44::autocuidado":{score:"5",note:"Pérdida aguda de autocuidado",points:[]}
      },
      exposure:"baja", age:35,
      narrative:{chapters:[
        {title:"Una vida sin grietas",ageStart:0,ageEnd:34,tone:"positivo",coded:{agency:"1",communion:"1",arc:"1",meaning:"1"}},
        {title:"El quiebre de una semana",ageStart:35,ageEnd:35,tone:"negativo",coded:{agency:"-2",communion:"0",arc:"-2",meaning:"-1"}}
      ],coherence:"alta",pattern:"ruptura aguda"},
      _ts:1780000000000
    }),
    'expHistApp_v2': JSON.stringify({
      fields:{ codigo:"ENC-35",edad:"35",evaluador:"JFC",fecha:"2026-06-01",
        motivoDecl:"Conducta extraña y agitación de inicio brusco",
        cursoDesde:"~5 días", duracionProdromo:"pródromo pseudogripal de ~1 semana",
        detDesc:"Cuadro pseudogripal previo", detRecurrente:"No" },
      multi:{fuente:["familiar"],detonante:["Infección / pródromo viral"],
        dominios:["actividades cotidianas","autocuidado","relaciones","cognición"],motivoCat:["conducta / funcionamiento"]},
      single:{setting:"emergencia",curso:"primer contacto",inicioModo:"brusco",
        tipoCambio:"precipitante claro",difCurso:"agudo (de novo)",insight:"parcial",
        adherencia:"no aplica",confiabilidad:"media",quienDecidio:"familia",
        soporteCalidad:"adecuado",ideacionActiva:"no",plan:"no",intencion:"no",
        metodoViolento:"no aplica",riesgoTerceros:"no",criAntecedente:"no",desinhibicion:"sí",primer:"si"},
      episodes:[{cuando:"Episodio actual (hoy)",tipo:"debut agudo de novo",
        cuadro:"Pródromo pseudogripal seguido de psicosis, mutismo, discinesias y conciencia fluctuante",
        detonante:"Cuadro pseudogripal previo",termino:"Pendiente",funcion:""}]
    }),
    'bmse_identity_v1': JSON.stringify({codigo:"ENC-35",edad:"35",sexo:"F",fecha:"2026-06-01",evaluador:"JFC",
      educacion:"Universitaria",ses:"Medio",estadoCivil:"Soltera",etnia:"Mestizo/a",ocupacion:"Profesora"}),
    'bmse_state_v2': JSON.stringify({
      "NC.conciencia":{score:"-1",specifiers:{CONF:true}},
      "NC.fluencia":{score:"-1",specifiers:{}},
      "NC.digit":{score:"-1",specifiers:{}},
      "NC.recall":{score:"-1",specifiers:{}},
      "NM.diskinesia":{score:"-1",specifiers:{dk_etiologia:"Espontánea"}},
      "NM.parakinesia_volicional":{score:"-1",specifiers:{para_vol_fenomeno:"Flexibilidad cérea/catalepsia"}},
      "F1.expresividad":{score:"-1",specifiers:{}},
      "F2.velocidad":{score:"-1",specifiers:{}},
      "F4.experiencia":{score:"1",specifiers:{}},
      "G.arousal":{score:"-1",specifiers:{}},
      "G.sueno-ritmo":{score:"-1",specifiers:{}},
      "F3.drive":{score:"-1",specifiers:{}},
      "J.juicio":{score:"-1",specifiers:{}},
      "I.insight":{score:"-1",specifiers:{}},
      "EXT.plan_suicida":{score:"NO",specifiers:{}},
      "EXT.medios":{score:"NO",specifiers:{}},
      "EXT.intento_previo":{score:"NO",specifiers:{}},
      "EXT.soporte":{score:"ADEC",specifiers:{}},
      "EXT.sustancias":{score:"NO",specifiers:{}},
      "EXT.decision_capacidad":{score:"SIN",specifiers:{}},
      "_timerStart":1780000000000
    })
  }
}];
