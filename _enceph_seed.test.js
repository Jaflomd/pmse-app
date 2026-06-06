// Test: construye el seed de encefalitis autoinmune y valida JSON + lógica VEMMFAL
function buildEncephSeed(){
  var ls={};

  // ① Exposoma — carga crónica BAJA (joven, sin adversidad mayor) salvo contexto autoinmune.
  ls['exposome_scorer_v1']=JSON.stringify({
    answers:{
      "C-n1":"Sí","C-n2":"No",        // sexo F → deriva C-n1/C-n2
      "C-n6":"Sí",                      // soltera
      "E3-7":"Sí",                      // antecedente autoinmune (sube pre-test encefalitis AE, §11.B)
      "E2-3":"Sí"                       // pródromo infeccioso reciente
    },
    extras:{}, flags:{}, substances:[], evOpen:{},
    _demoName:"Encefalitis autoinmune (anti-NMDAR)",
    _capBlock:"A", _pName:"ENC-35", _pAge:"35", _pEval:"JFC", _pSex:"F"
  });

  // ② Funcionamiento — trayectoria PREMÓRBIDA NORMAL, quiebre agudo a los 35.
  var nrm=function(n){return {score:"1",note:n,points:[]};};
  ls['expfx_state_v5']=JSON.stringify({
    cells:{
      "s0_5::social":nrm("Desarrollo y apego normales"),
      "s0_5::cognicion":nrm("Hitos en tiempo"),
      "s6_11::acadlab":nrm("Buen rendimiento escolar"),
      "s12_15::social":nrm("Integración con pares adecuada"),
      "s16_18::acadlab":{score:"0",note:"Ingresa a universidad",points:[]},
      "s19_25::acadlab":{score:"0",note:"Titulación; inserción laboral como docente",points:[]},
      "s19_25::vincular":nrm("Relaciones de pareja sin disfunción"),
      "s26_44::acadlab":{score:"0",note:"Docente activa, funcional, sin antecedentes psiquiátricos",
        points:[{age:34,score:"0",note:"Plena funcionalidad premórbida"},
                {age:35,score:"6",note:"QUIEBRE AGUDO: en ~1 semana confusión, conducta extraña, movimientos anormales"}]},
      "s26_44::cognicion":{score:"6",note:"Debut agudo a los 35 con fluctuación de conciencia sobre cognición previamente intacta",
        points:[{age:34,score:"0",note:"Cognición normal"},
                {age:35,score:"6",note:"Deterioro cognitivo agudo, fluctuante"}]},
      "s26_44::autocuidado":{score:"5",note:"Pérdida aguda de autocuidado en el debut",points:[]}
    },
    exposure:"baja", age:35,
    narrative:{chapters:[
      {title:"Una vida sin grietas",ageStart:0,ageEnd:34,tone:"positivo",
       personajes:"Familia, pares, colegas",contexto:"Desarrollo normal, profesional funcional",
       objetivo:"Construir vida laboral y vincular",
       quePaso:"Trayectoria sin antecedentes psiquiátricos ni deterioro; funcionamiento pleno hasta los 34",
       comoTermino:"Adulta sana y funcional",
       coded:{agency:"1",communion:"1",arc:"1",meaning:"1"}},
      {title:"El quiebre de una semana",ageStart:35,ageEnd:35,tone:"negativo",
       personajes:"Familia, equipo de emergencia",contexto:"Pródromo pseudogripal seguido de síndrome neuropsiquiátrico agudo",
       objetivo:"Sobrevivir y ser diagnosticada",
       quePaso:"En días: cefalea, febrícula → ansiedad, insomnio, ideas delirantes, desorganización, mutismo, movimientos orofaciales y fluctuación de conciencia",
       comoTermino:"Ingreso de emergencia; sospecha de encefalitis autoinmune",
       coded:{agency:"-2",communion:"0",arc:"-2",meaning:"-1"}}
    ],coherence:"alta",pattern:"ruptura aguda",
    synthesis:"Trayectoria vital plana-normal hasta los 34 con quiebre neuropsiquiátrico AGUDO de novo a los 35. La incongruencia entre carga ambiental mínima y colapso funcional brusco apunta a causa intrínseca/orgánica, no a un proceso psiquiátrico primario evolutivo."},
    _ts:1780000000000
  });

  // ③ Historia — curso AGUDO, de novo, tempo hiperagudo.
  ls['expHistApp_v2']=JSON.stringify({
    fields:{
      codigo:"ENC-35",edad:"35",evaluador:"JFC",fecha:"2026-06-01",
      motivoDecl:"Conducta extraña y agitación de inicio brusco",
      motivoReal:"Síndrome neuropsiquiátrico agudo de novo con fluctuación de conciencia y movimientos anormales",
      basal:"Sana, profesional funcional, sin antecedentes psiquiátricos ni consumo",
      sintomas:"Pródromo pseudogripal → en ~5 días ansiedad, insomnio, ideas delirantes, desorganización, mutismo intermitente, discinesias orofaciales y fluctuación de conciencia",
      cursoDesde:"~5 días",
      primerFenomeno:"Cefalea, febrícula y cambio conductual",
      duracionProdromo:"pródromo pseudogripal de ~1 semana",
      detDesc:"Cuadro pseudogripal previo",
      detRecurrente:"No",
      ewsPropio:"No reconoce el cambio (alteración de conciencia)",
      porQueAhora:"Deterioro rápido en días con agitación y movimientos anormales",
      significado:"Familia alarmada por la rapidez e impropiedad del cambio",
      soporte:"Padres y hermana presentes y movilizados",
      tto:"Ninguno previo",
      hilo:"Mujer de 35 años, debut neuropsiquiátrico AGUDO de novo, sospecha de encefalitis autoinmune (anti-NMDAR); el cuadro es secundario hasta demostrar lo contrario"
    },
    multi:{fuente:["familiar"],detonante:["Infección / pródromo viral"],
      dominios:["actividades cotidianas","autocuidado","relaciones","cognición"],
      motivoCat:["conducta / funcionamiento"]},
    single:{setting:"emergencia",curso:"primer contacto",inicioModo:"brusco",
      tipoCambio:"precipitante claro",difCurso:"agudo (de novo)",insight:"parcial",
      adherencia:"no aplica",regimen:"no aplica",confiabilidad:"media",quienDecidio:"familia",
      soporteCalidad:"adecuado",ideacionActiva:"no",plan:"no",intencion:"no",
      metodoViolento:"no aplica",riesgoTerceros:"no",criAntecedente:"no",desinhibicion:"sí",primer:"si"},
    episodes:[{cuando:"Episodio actual (hoy)",tipo:"debut agudo de novo",
      cuadro:"Pródromo pseudogripal seguido en días de cambio conductual, psicosis, mutismo, discinesias orofaciales y conciencia fluctuante",
      detonante:"Cuadro pseudogripal previo",
      respuesta:"Traída a emergencia por la familia; desorientada, fluctuante, con movimientos anormales",
      manejo:"Workup de encefalitis: RM, EEG, punción lumbar, panel de anticuerpos anti-neuronales; evitar antipsicótico de alto riesgo de SNM",
      termino:"Pendiente — sospecha de encefalitis anti-NMDAR",funcion:""}]
  });

  // identidad bMSE
  ls['bmse_identity_v1']=JSON.stringify({codigo:"ENC-35",edad:"35",sexo:"F",fecha:"2026-06-01",
    evaluador:"JFC",educacion:"Universitaria",ses:"Medio",estadoCivil:"Soltera",etnia:"Mestizo/a",ocupacion:"Profesora"});

  // ④ pMSE — estado: 3 banderas tier-1 (conciencia fluctuante, discinesia espontánea, catatonía) + pobreza del habla.
  ls['bmse_state_v2']=JSON.stringify({
    "NC.conciencia":{score:"-1",specifiers:{F:true}},                                 // → Delirium/fluctuación (rule-in) + Gate
    "NC.fluencia":{score:"-1",specifiers:{}},
    "NC.digit":{score:"-1",specifiers:{}},
    "NC.recall":{score:"-1",specifiers:{}},
    "NM.diskinesia":{score:"-1",specifiers:{dk_etiologia:"Espontánea"}},               // → Extrapiramidalismo no farmacológico (rule-in)
    "NM.estereotipia":{score:"-1",specifiers:{est_etiologia:"Catatónica"}},            // → Catatonía/flexibilidad cérea (rule-in)
    "F1.expresividad":{score:"-1",specifiers:{}},                                      // → Pobreza del habla → orgánica
    "F2.velocidad":{score:"-1",specifiers:{}},
    "F4.experiencia":{score:"1",specifiers:{}},                                        // percepción atípica (NO schneider)
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
  });

  return JSON.stringify({
    meta:{codigo:"ENC-35",edad:"35",sexo:"F",fecha:"2026-06-01",evaluador:"JFC",
      setting:"Emergencia",fuente:"Familiar",confiabilidad:"Media",
      estadoCivil:"Soltera",etnia:"Mestizo/a",ocupacion:"Profesora",educacion:"Universitaria",ses:"Medio"},
    ls:ls, _v:"unifiedPatient_v2"
  });
}

// ---- validación ----
var seed=buildEncephSeed();
var reg=JSON.parse(seed);                       // 1) top-level parsea
['exposome_scorer_v1','expfx_state_v5','expHistApp_v2','bmse_identity_v1','bmse_state_v2'].forEach(function(k){
  var o=JSON.parse(reg.ls[k]);                  // 2) cada app parsea
  console.log("OK ls."+k+" parseó ("+Object.keys(o).length+" claves)");
});

// 3) simula jafloVemmfal (bMSE) + tempo Historia
var bm=JSON.parse(reg.ls['bmse_state_v2']);
var num=function(id){var v=bm[id]&&bm[id].score; if(v==null||v==='NE')return null; var n=parseInt(v,10); return isNaN(n)?null:n;};
var spec=function(id,k){return (bm[id]&&bm[id].specifiers&&bm[id].specifiers[k])||null;};
var nc=num('NC.conciencia'), fluct=!!spec('NC.conciencia','F');
var delirium=(nc!==null&&nc!==0)||fluct;
var dk=num('NM.diskinesia'),dkE=spec('NM.diskinesia','dk_etiologia');
var extra=(dk!==null&&dk<=-1&&dkE&&/Espont/i.test(dkE));
var est=num('NM.estereotipia'),estE=spec('NM.estereotipia','est_etiologia');
var catat=(est!==null&&est<=-1&&estE&&/Caton|Cataton/i.test(estE));
var f1=num('F1.expresividad'); var pobreza=(f1!==null&&f1<=-1);

var hi=JSON.parse(reg.ls['expHistApp_v2']); var s=hi.single,f=hi.fields;
var isH2W=function(t){t=(t||'').toLowerCase(); if(/\bhora|\bhrs?\b|\bd[ií]a/.test(t))return true; return false;};
var tempo=(s.inicioModo==='brusco')&&(isH2W(f.duracionProdromo)||isH2W(f.cursoDesde)||s.tipoCambio==='precipitante claro');
var deNovo=(s.curso==='primer contacto')||(s.primer==='si');

console.log("\n--- señales VEMMFAL ---");
console.log("Delirium/fluctuación (tier1 rule-in):", delirium);
console.log("Extrapiramidalismo espontáneo (tier1 rule-in):", extra);
console.log("Catatonía (tier1 rule-in):", catat);
console.log("Pobreza del habla (tier2 +2):", pobreza);
console.log("Tempo hiperagudo (Historia):", tempo);
console.log("De novo (Historia):", deNovo);
console.log("concienciaScore≠0 → Gate cuarentena:", (nc!==null&&nc!==0));
var ruleIns=[delirium,extra,catat].filter(Boolean).length;
console.log("\n=> rule-ins tier-1:",ruleIns," | banda esperada: hi (rojo) | Gate: cuarentena =", ((nc!==null&&nc!==0)||ruleIns>0));
