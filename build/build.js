#!/usr/bin/env node
/* ============================================================================
   Intake Unificado — build single-file de producción.
   Ensambla las 4 apps clínicas como constantes JS dentro de un solo HTML.
   Cada app: data.js inlineados + shim de localStorage (head) + puente
   JAFLO_SUMMARY/VEMMFAL/PREFILL + listener postMessage (fin de body).
   El shell compone cada <iframe srcdoc> en runtime (seed + identidad) y
   sintetiza el dashboard maestro en vivo. Fuente del puente: build/bridge.json
   (output del Workflow wf_554dd8b2-7f5).
   ============================================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');          // 3-output/
const UI   = path.resolve(__dirname, '..');                // 3-output/unified-intake/
const SHOWME = path.join(UI, 'index.html');
const OUT  = path.join(UI, 'intake-unificado.html');
const bridge = require('./bridge.json').result.apps;
// 100 casos de stress-test (CIE-11/DSM-5-TR) → desplegable en «Datos generales»
let STRESS_CASES = [];
try {
  STRESS_CASES = require('../stress/cases/index.js').map(c => ({
    id: c.id, dx: c.dx, cie11: c.cie11 || '', tests: c.tests || '',
    reg: { meta: c.meta, ls: c.ls, _v: 'unifiedPatient_v2' }
  }));
} catch (e) { console.warn('stress-cases no disponibles:', e.message); }

const read = p => fs.readFileSync(p, 'utf8');
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// app id (bridge) -> file + carpeta + clave de view + clave de slice del summary
const APP = {
  exposoma:            { file: 'exp-book/exposome-app/exposome-scorer.html',                  view: 'exposoma',       sum: 'exposoma' },
  exposome_functioning:{ file: 'exp-book/exposome_functioning/exposome_functioning_app.html', view: 'funcionamiento', sum: 'funcion'  },
  exp_hist:            { file: 'exp-book/exp_hist/exp-hist-app.html',                          view: 'historia',       sum: 'historia' },
  bmse:                { file: 'book-bmse/proposal/pmse-scorer-fenotipos.html',         view: 'bmse',           sum: 'bmse'     },
};
const byId = {}; bridge.forEach(a => byId[a.app] = a);
if (byId.bmse && Array.isArray(byId.bmse.dataScripts)) {
  byId.bmse.dataScripts = byId.bmse.dataScripts.filter(ds => ds !== 'demo-cases.js');
}

/* ---- jafloCharts: el pMSE renderiza su perfil y devuelve las dos figuras REALES
        (radial RDoC + Forbes/HiTOP) ya dibujadas + su CSS, para copiarlas al maestro ---- */
const CHARTS_OVERRIDE = {
  exposoma: `function jafloCharts(){
  try{ if(typeof renderDashboard==='function') renderDashboard(); }catch(e){}
  var css=''; try{ css=Array.prototype.map.call(document.querySelectorAll('style'),function(s){return s.innerHTML;}).join('\\n'); }catch(e){}
  function outer(sel){ try{ var el=document.querySelector(sel); return el?el.outerHTML:''; }catch(e){ return ''; } }
  var ace=''; try{ var ah=document.querySelector('.ace-head'); if(ah){ var c=ah.closest('.dash-block'); ace=c?c.outerHTML:''; } }catch(e){}
  return { css:css, graphs:outer('.graphs-panel'), ace:ace };
}`,
  bmse: `function jafloCharts(){
  try{ if(typeof renderProfile==='function') renderProfile(); }catch(e){}
  var css=''; try{ css=Array.prototype.map.call(document.querySelectorAll('style'),function(s){return s.innerHTML;}).join('\\n'); }catch(e){}
  function outer(sel,byId){ try{ var el=byId?document.getElementById(sel):document.querySelector(sel); if(!el) return ''; var sec=(el.closest?el.closest('section'):null); return (sec||el).outerHTML; }catch(e){ return ''; } }
  return { css:css, pheno:outer('.dash-pheno',false), rdoc:outer('radarRDoC',true), forbes:outer('.dash-forbes',false) };
}`,
};

/* ---- override de prefill: extiende exposoma para derivar C-n6/C-n3/C-n11 desde los
        sociodemográficos de la ventana 1 (además del sexo→C-n1/C-n2 ya existente).
        bridge.json queda intacto como output del Workflow. ---- */
const PREFILL_OVERRIDE = {
  exposoma: `function jafloPrefill(id){
  id = id || {};
  try {
    var setSel = function(elId, val){ var el=document.getElementById(elId); if(!el) return;
      if(val!=null && val!=="") el.value=val; if(typeof STATE!=="undefined") STATE["_"+elId]=el.value; };
    if (id.codigo != null){ var pn=document.getElementById("pName"); if(pn){ pn.value=id.codigo; if(typeof STATE!=="undefined") STATE._pName=pn.value; } }
    if (id.edad != null) setSel("pAge", id.edad);
    if (id.evaluador != null) setSel("pEval", id.evaluador);

    var sx=(id.sexo||"").toString().trim().toUpperCase(), sexLabel="";
    if (sx==="F"||sx==="FEMENINO"||sx==="MUJER") sexLabel="F";
    else if (sx==="M"||sx==="MASCULINO"||sx==="HOMBRE"||sx==="VARON"||sx==="VARÓN") sexLabel="M";
    else if (sx) sexLabel="Otro";
    if (sexLabel) setSel("pSex", sexLabel);

    if (typeof STATE !== "undefined"){
      if(!STATE.answers) STATE.answers={};
      var set3=function(itemId,yes){ STATE.answers[itemId]= yes===null ? "NS" : (yes ? "Sí" : "No"); };
      // sexo -> C-n1 (femenino) / C-n2 (masculino)
      if (sexLabel==="F"){ set3("C-n1",true); set3("C-n2",false); }
      else if (sexLabel==="M"){ set3("C-n1",false); set3("C-n2",true); }
      else if (sexLabel==="Otro"){ set3("C-n1",null); set3("C-n2",null); }
      // estado civil -> C-n6 (soltero/a)
      var ec=(id.estadoCivil||"").toString().trim().toLowerCase();
      if (ec){ set3("C-n6", ec.indexOf("solter")===0); }
      // etnia -> C-n3 (indígena americana)
      var et=(id.etnia||"").toString().trim().toLowerCase();
      if (et){ set3("C-n3", /quechua|aymar|amaz|ind[ií]gen|nativ/.test(et)); }
      // situación laboral -> C-n11 (desempleo)
      var oc=(id.ocupacion||"").toString().trim().toLowerCase();
      if (oc){ set3("C-n11", /desemple|cesante|sin\\s+trabajo|paro/.test(oc)); }
      if (typeof save==="function") save();
    }
    if (typeof renderCapture==="function") renderCapture();
    if (typeof updateProgress==="function") updateProgress();
    try { parent.postMessage({ type:"JAFLO_CHANGED", app:"exposoma" }, "*"); } catch(e){}
  } catch(e){}
}`,
};

/* ---- shim de localStorage (corre PRIMERO en el <head> del iframe) ---- */
const SHIM = `
/* JAFLO shim: localStorage transparente con fallback en memoria + eco al padre */
(function(){
  var SEED = window.__SEED__ || {};
  var APPID = window.__APP_ID__ || '?';
  function echo(k,v){ try{ parent.postMessage({type:'JAFLO_LS', app:APPID, key:k, value:v}, '*'); }catch(e){} }
  var native = null;
  try { native = window.localStorage; native.setItem('__jaflo_probe__','1'); native.removeItem('__jaflo_probe__'); }
  catch(e){ native = null; }
  if (native){
    try { for (var k in SEED){ native.setItem(k, SEED[k]); } } catch(e){}  // FORCE seed: el padre (REG.ls) es la verdad; evita estado viejo en native compartido file://
    try {
      var proto = window.Storage && window.Storage.prototype;
      if (proto && !proto.__jaflo){ proto.__jaflo = 1;
        var _set = proto.setItem;
        proto.setItem = function(k,v){ _set.call(this,k,v); echo(k,String(v)); };
      }
    } catch(e){}
    return;
  }
  /* fallback en memoria (srcdoc con origen opaco) */
  var mem = {}; for (var k2 in SEED) mem[k2] = SEED[k2];
  var shim = {
    getItem:function(k){ return Object.prototype.hasOwnProperty.call(mem,k)? mem[k] : null; },
    setItem:function(k,v){ mem[k]=String(v); echo(k,String(v)); },
    removeItem:function(k){ delete mem[k]; },
    clear:function(){ mem={}; },
    key:function(i){ return Object.keys(mem)[i] || null; }
  };
  Object.defineProperty(shim,'length',{get:function(){ return Object.keys(mem).length; }});
  try { Object.defineProperty(window,'localStorage',{value:shim, configurable:true}); }
  catch(e){ try{ window.localStorage = shim; }catch(e2){} }
})();`;

/* ---- listener del puente (corre AL FINAL, tras init de la app) ---- */
const LISTENER = `
/* JAFLO bridge listener */
(function(){
  function reply(t,p){ try{ parent.postMessage({type:t, app:window.__APP_ID__, payload:p}, '*'); }catch(e){} }
  try {
    if (typeof saveState === 'function' && !saveState.__jafloChangedWrapped) {
      var __jafloSaveState = saveState;
      saveState = function(){
        var r = __jafloSaveState.apply(this, arguments);
        try { parent.postMessage({type:'JAFLO_CHANGED', app:window.__APP_ID__}, '*'); } catch(e){}
        return r;
      };
      saveState.__jafloChangedWrapped = true;
    }
  } catch(e){}
  window.addEventListener('message', function(e){
    var d = e.data || {};
    if (d.type === 'JAFLO_GET_SUMMARY'){ try{ reply('JAFLO_SUMMARY', jafloSummary()); }catch(err){ reply('JAFLO_SUMMARY', {__err:String(err&&err.message||err).slice(0,90)}); } }
    else if (d.type === 'JAFLO_GET_VEMMFAL'){ try{ reply('JAFLO_VEMMFAL', (typeof jafloVemmfal==='function')? jafloVemmfal() : {}); }catch(err){ reply('JAFLO_VEMMFAL', {}); } }
    else if (d.type === 'JAFLO_GET_CHARTS'){ try{ reply('JAFLO_CHARTS', (typeof jafloCharts==='function')? jafloCharts() : {}); }catch(err){ reply('JAFLO_CHARTS', {}); } }
    else if (d.type === 'JAFLO_IDENTITY'){ try{ if (typeof jafloPrefill==='function') jafloPrefill(d.payload || {}); }catch(err){} }
  });
  try { if (window.__IDENTITY__ && typeof jafloPrefill==='function') jafloPrefill(window.__IDENTITY__); } catch(e){}
  try { parent.postMessage({type:'JAFLO_READY', app:window.__APP_ID__}, '*'); } catch(e){}
})();`;

/* ---- override de summary: añade datos para los gráficos del maestro
        (funcion.traj = 7 ejes sobre edad; historia.eps = episodios con edad) ---- */
const SUMMARY_OVERRIDE = {
  exposoma: `function jafloSummary(){
  var out={ICE:0,ICEmax:0,ace:0,aceMax:10,chrp:false,suicid:"No",factorP:"—",outcomes:[],hitop:[],pid5:[],aceDims:[]};
  try{
    if(typeof computeScores!=="function"||typeof ITEMS==="undefined") return out;
    var sc=computeScores();
    out.ICE=(sc&&typeof sc.ice==="number")?sc.ice:0;
    var iceMax=0; ITEMS.forEach(function(it){ if(it&&it.direction!=="prot") iceMax+=(it.weight||0); }); out.ICEmax=Math.round(iceMax*10)/10;
    var ipc=(typeof instPosCount==="function")?instPosCount:function(){return 0;};
    if(typeof ACE_DIMS!=="undefined"){ var at=0; Object.keys(ACE_DIMS).forEach(function(d){ (ACE_DIMS[d].ids||[]).forEach(function(id){ if(STATE&&STATE.answers&&STATE.answers[id]==="Sí") at++; }); }); out.ace=at;
      out.aceDims=Object.keys(ACE_DIMS).map(function(d){ var ids=ACE_DIMS[d].ids||[]; var n=ids.filter(function(id){return STATE&&STATE.answers&&STATE.answers[id]==="Sí";}).length; return {name:ACE_DIMS[d].name,n:n,tot:ids.length,color:ACE_DIMS[d].color}; }); }
    out.chrp=ipc(["E4-6"])>0;
    if(ipc(["E2-12"])>0) out.suicid="Intento"; else if(ipc(["E2-11"])>0) out.suicid="Ideación"; else if(ipc(["E2-13"])>0) out.suicid="NSSI"; else out.suicid="No";
    var ratio=function(ids){ return ids.length? ipc(ids)/ids.length : 0; };
    var hInt=["E2-3","E2-6","E2-7","E2-9","E2-11","E2-12","E2-13","E2-n1","E2-n3","E2-n6"],hPsi=["E2-1","E2-2","E4-6"],hDis=["E2-5","E2-10","E2-n5"],hAnt=["E2-n4","E4-9"],hDet=["E2-4","56","52"];
    out.hitop=[{label:"Internaliz.",value:ratio(hInt)},{label:"Psicosis",value:ratio(hPsi)},{label:"Ext.desinh.",value:ratio(hDis)},{label:"Ext.antag.",value:ratio(hAnt)},{label:"Desapego",value:ratio(hDet)}];
    var sp=[{nm:"Internalizante",ids:hInt},{nm:"Psicosis",ids:hPsi},{nm:"Ext. desinhibido",ids:hDis},{nm:"Ext. antagónico",ids:hAnt},{nm:"Desapego",ids:hDet}];
    var best=null,bv=0; sp.forEach(function(s){ var v=ratio(s.ids); if(v>bv){bv=v;best=s.nm;} }); out.factorP=(best&&bv>0)?best:"—";
    if(typeof PID5!=="undefined"){ var maxN=1; PID5.forEach(function(d){ var c=ipc(d.ids); if(c>maxN)maxN=c; }); out.pid5=PID5.map(function(d){ return {label:d.dom,value:ipc(d.ids),max:maxN,color:d.color}; }); }
    var cntY=function(ids){ var n=0; ids.forEach(function(id){ if(STATE&&STATE.answers&&STATE.answers[id]==="Sí") n++; }); return n; };
    var aCar=["E3-1","E3-3","E3-4","E3-5"],aInf=["57","E3-8","E3-9","E3-10"],aNeu=["E3-11","E3-15","54"],aChr=["E3-6","E3-13","E3-14","E3-16","E3-17","E3-7"];
    out.alosta=[{label:"Cardiomet.",n:cntY(aCar),tot:aCar.length,color:"#c5402f"},{label:"Inflam.",n:cntY(aInf),tot:aInf.length,color:"#cf9a3c"},{label:"Neuro/sens.",n:cntY(aNeu),tot:aNeu.length,color:"#7a5169"},{label:"Crónico",n:cntY(aChr),tot:aChr.length,color:"#3f7d99"}];
    if(sc&&sc.buckets&&typeof OUTCOME_ORDER!=="undefined"){
      var arr=[];
      OUTCOME_ORDER.forEach(function(o){
        var bk=sc.buckets[o];
        if(bk) arr.push({nm:o,pct:Math.round((bk.sat||0)*100),sat:Math.round((bk.sat||0)*100),norm:(bk.norm||0)});
      });
      var maxNorm=Math.max(0.001);
      arr.forEach(function(x){ if((x.norm||0)>maxNorm) maxNorm=x.norm; });
      arr.forEach(function(x){ x.barPct=Math.round(((x.norm||0)/maxNorm)*100); });
      arr.sort(function(a,c){return (c.norm||0)-(a.norm||0) || c.pct-a.pct;});
      out.outcomes=arr;
    }
  }catch(e){}
  return out;
}`,
  exposome_functioning: `function jafloSummary(){
  var out={media:null,quadrant:'—',alarma:0,patron:'',traj:[]};
  try{ if(typeof currentMean==='function'){var m=currentMean(); out.media=(m==null||isNaN(m))?null:m;} }catch(e){}
  try{ if(typeof exposomeReading==='function'){var ex=exposomeReading(); out.quadrant=(ex&&ex.verdict)?ex.verdict:'—';} }catch(e){}
  try{ var n=0; if(typeof AXES!=='undefined'&&typeof axisTrajectory==='function'){ for(var i=0;i<AXES.length;i++){ var tj=axisTrajectory(AXES[i].id); if(!tj)continue; if((tj.current!=null&&tj.current>=3)||(tj.delta!=null&&tj.delta>=3))n++; } } out.alarma=n; }catch(e){}
  try{ if(typeof narr==='function'){var N=narr(); out.patron=(N&&N.pattern)?N.pattern:'';} }catch(e){}
  try{ if(typeof AXES!=='undefined'&&typeof axisPoints==='function'){ AXES.forEach(function(ax){ var pts=axisPoints(ax.id).map(function(p){return {age:p.age,score:p.score};}); if(pts.length) out.traj.push({t:ax.title,c:ax.color,pts:pts}); }); } }catch(e){}
  return out;
}`,
  exp_hist: `function jafloSummary(){
  var st={fields:{},multi:{},single:{},episodes:[]};
  try{ if(typeof state==='object'&&state&&state.single){st=state;} else{var r=localStorage.getItem('expHistApp_v2'); if(r){var d=JSON.parse(r); if(d)st=Object.assign(st,d);}} }catch(e){}
  var s=st.single||{}, eps=Array.isArray(st.episodes)?st.episodes:[];
  var curso=(s.curso||'').normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').trim().toLowerCase().replace(/\\s+/g,'-');
  var ne=eps.filter(function(e){return e&&Object.values(e).some(function(v){return v&&String(v).trim();});});
  var episodios=ne.length; if(s.primer==='si') episodios=0;
  var cri=Array.isArray(st.multi&&st.multi.cri)?st.multi.cri:[];
  var ia=s.ideacionActiva==='activa',ip=s.ideacionActiva==='pasiva',pl=(s.plan==='sí'||s.plan==='si'),inten=(s.intencion==='sí'||s.intencion==='si'),ter=(s.riesgoTerceros==='sí'||s.riesgoTerceros==='si'),des=(s.desinhibicion==='sí'||s.desinhibicion==='si'),mv=s.metodoViolento==='violento',hi=cri.indexOf('intento suicida')>=0,hv=cri.indexOf('violencia')>=0;
  var safety='g';
  if((ia&&(pl||inten))||(hi&&mv)||ter||hv) safety='fail';
  else if(ia||pl||inten||ip||hi||des||(cri.length>0&&cri.indexOf('ninguna')<0)) safety='warn';
  var curAge=parseInt((st.fields&&st.fields.edad)||'',10);
  function ageFromCuando(c){
    c=(c||'').toString().toLowerCase().trim();
    var mr=c.match(/hace\\s*~?\\s*(\\d+)\\s*(a[ñn]o|mes)/);                 // relativo: "hace ~3 años" / "hace 18 meses"
    if(mr && !isNaN(curAge)){ var n=+mr[1]; var yrsAgo=/mes/.test(mr[2])?n/12:n; var a=Math.round(curAge-yrsAgo); return (a>0&&a<120)?a:null; }
    var ma=c.match(/(?:a los?\\s+|edad\\s+)?(\\d{1,2})\\s*(?:a[ñn]os?|a\\b)/);  // explícito: "a los 59" / "59 años"
    if(ma){ var x=+ma[1]; return (x>0&&x<120)?x:null; }
    return null;
  }
  var epsA=[], ages=[];
  ne.forEach(function(e){ var ed=ageFromCuando(e.cuando); if(ed!=null){ ages.push(ed); } epsA.push({edad:ed,tipo:(e.tipo||e.cuadro||'').toString().slice(0,16)}); });
  // edad de inicio = la MÁS TEMPRANA de los períodos; si no hay, fallback a la edad de identidad
  var edadInicio = ages.length ? Math.min.apply(null,ages) : (isNaN(curAge)?null:curAge);
  var blob=JSON.stringify(eps).toLowerCase();
  var deNovo = (s.primer==='si') || curso==='primer-contacto' || curso==='episodio-unico'
            || /debut|primer\\s+episodio|1\\.?er\\s+episodio|primer\\s+contacto/.test(blob) || episodios<=1;
  return {curso:curso,episodios:episodios,safety:safety,eps:epsA,edadInicio:edadInicio,deNovo:deNovo};
}`,
};

const BMSE_SUMMARY_EXT = `
function jafloSummary(){
  var out = (typeof __jafloSummaryBase === 'function') ? (__jafloSummaryBase() || {}) : {};
  try {
    var st = (typeof state !== 'undefined' && state) ? state : {};
    var raw = function(id){
      var v = st[id] && st[id].score;
      return (v === null || v === undefined || v === 'NE') ? null : v;
    };
    var num = function(id){
      var v = raw(id);
      if (v === null) return null;
      var n = parseInt(v, 10);
      return Number.isNaN(n) ? null : n;
    };
    var spec = function(id, key){
      return (st[id] && st[id].specifiers && st[id].specifiers[key]) || null;
    };
    var specNum = function(id, key){
      var v = spec(id, key);
      if (v === null || v === undefined || v === '') return 0;
      var m = String(v).match(/-?\\d+/);
      return m ? Math.max(0, parseInt(m[0], 10) || 0) : 0;
    };
    var oasLevel = function(key){
      var n = specNum('FUN.psp_disruptivas', key);
      return Math.max(0, Math.min(4, n));
    };
    var verbal = oasLevel('oas_verbal');
    var objetos = oasLevel('oas_objetos');
    var auto = oasLevel('oas_auto');
    var fisica = oasLevel('oas_fisica');
    var hetero = verbal * 1 + objetos * 2 + fisica * 4;
    var autoTotal = auto * 3;
    var heteroVirtual = num('FUN.oas_hetero_total');
    var autoVirtual = num('FUN.oas_auto_total');
    if (heteroVirtual !== null && heteroVirtual > hetero) hetero = heteroVirtual;
    if (autoVirtual !== null && autoVirtual > autoTotal) autoTotal = autoVirtual;
    var total = hetero + autoTotal;
    var savedTotal = specNum('FUN.psp_disruptivas', 'oas_total');
    if (savedTotal > total) total = savedTotal;

    var conciencia = num('NC.conciencia');
    var frustra = num('F6.frustración');
    var confSpec = !!(spec('NC.conciencia','CONF') || spec('NC.conciencia','F') || spec('NC.conciencia','O:T') || spec('NC.conciencia','O:E') || spec('NC.conciencia','O:P'));
    var hyperConf = (conciencia === 1 || conciencia === 2) && confSpec;
    var bvc = {
      confusion: !!((conciencia !== null && conciencia <= -1) || hyperConf),
      irritabilidad: !!(frustra !== null && frustra >= 1),
      ruidos: raw('EXT.bvc_ruidos') === 'SI',
      amenazaVerbal: raw('EXT.bvc_amenaza_verbal') === 'SI',
      amenazaFisica: hetero >= 8,
      ataqueObjetos: raw('EXT.bvc_objetos') === 'SI'
    };
    out.oas = { total: total, hetero: hetero, auto: autoTotal };
    out.bvc = bvc;
    var packRisk = function(fn){
      try {
        if (typeof fn !== 'function') return null;
        var r = fn() || {};
        return { title:r.title || '', status:r.status || 'green', label:r.statusLabel || '', summary:r.summary || '' };
      } catch(e) { return null; }
    };
    out.risks = {
      suicidio: packRisk(typeof outcomeSuicidio === 'function' ? outcomeSuicidio : null),
      agresividad: packRisk(typeof outcomeAgresividad === 'function' ? outcomeAgresividad : null),
      negligencia: packRisk(typeof outcomeNegligencia === 'function' ? outcomeNegligencia : null)
    };
    if (typeof interpersonalStyleProfile === 'function') {
      var ip = interpersonalStyleProfile();
      if (ip && ip.evaluated) {
        out.interpersonal = {
          field: ip.field || '',
          fieldShort: ip.fieldShort || '',
          driveLabel: ip.driveLabel || '',
          adjectives: (ip.adjectives || []).slice(0, 6),
          patterns: (ip.patterns || []).slice(0, 4).map(function(p){
            return { name:p.name || '', confidence:p.confidence || 'posible', why:p.why || '' };
          })
        };
      } else {
        out.interpersonal = null;
      }
    }
  } catch(e) {
    out.oas = out.oas || { total:0, hetero:0, auto:0 };
    out.bvc = out.bvc || {};
    out.risks = out.risks || {};
    out.interpersonal = out.interpersonal || null;
  }
  return out;
}`;

const VEMMFAL_OVERRIDE = {
  bmse: `function jafloVemmfal(){
  var out = {
    'Delirium / fluctuación de conciencia': false,
    'Orientación intacta (protector)': false,
    'Extrapiramidalismo no farmacológico': false,
    'Catatonía · flexibilidad cérea (predictor #1, Blackman 2024)': false,
    'Pobreza del habla → orgánica': false,
    'Schneider 1.er rango (pensamiento transmitido/insertado/robado · influencia/control) → primaria': false
  };
  try {
    var st = (typeof state !== 'undefined' && state) ? state : {};
    var raw = function(id){ var v = st[id] && st[id].score; return (v===null||v===undefined||v==='NE') ? null : v; };
    var num = function(id){ var v = raw(id); if(v===null) return null; var n = parseInt(v,10); return Number.isNaN(n)?null:n; };
    var spec = function(id, key){ return (st[id] && st[id].specifiers && st[id].specifiers[key]) || null; };

    var nc = num('NC.conciencia');
    var conf = !!(spec('NC.conciencia','CONF') || spec('NC.conciencia','F') || spec('NC.conciencia','O:T') || spec('NC.conciencia','O:E') || spec('NC.conciencia','O:P'));
    var hyper = (nc === 1 || nc === 2);
    out['Delirium / fluctuación de conciencia'] = (nc !== null && nc <= -1) || (hyper && conf);
    out['Orientación intacta (protector)'] = (nc === 0) || (hyper && !conf);

    var specText = function(id, key){ var v = spec(id, key); return v === null || v === undefined ? '' : String(v); };
    var isAcute = function(v){ return /agud|de novo|novo|hiperagud|subagud/i.test(v || ''); };
    var spontaneousAcute = function(etiology, temporality){
      return /Espont/i.test(etiology || '') && isAcute(temporality || '');
    };
    var pk = num('NM.parkinsonismo'); var pkE = specText('NM.parkinsonismo','pk_etiologia'); var pkT = specText('NM.parkinsonismo','pk_temp');
    var dk = num('NM.diskinesia');    var dkE = specText('NM.diskinesia','dk_etiologia');    var dkT = specText('NM.diskinesia','dk_temp');
    var parVol = num('NM.parakinesia_volicional');
    var parVolFen = specText('NM.parakinesia_volicional','para_vol_fenomeno');
    var extra = false;
    if (pk !== null && pk <= -1 && spontaneousAcute(pkE, pkT)) extra = true;
    if (dk !== null && dk <= -1 && spontaneousAcute(dkE, dkT)) extra = true;
    out['Extrapiramidalismo no farmacológico'] = extra;

    out['Catatonía · flexibilidad cérea (predictor #1, Blackman 2024)'] =
      (parVol !== null && parVol <= -1 && /Flexibilidad|catalepsia/i.test(parVolFen));

    var f1 = num('F1.expresividad');
    out['Pobreza del habla → orgánica'] = (f1 !== null && f1 <= -1);

    var f4 = num('F4.contenido');
    var delType = spec('F4.contenido','contenido_tipo_delusion');
    var schLegacy = spec('F4.contenido','contenido_schneider');
    var schText = String(delType || schLegacy || '');
    out['Schneider 1.er rango (pensamiento transmitido/insertado/robado · influencia/control) → primaria'] =
      (f4 !== null && f4 >= 4 && /Schneider|Inserci|Sustracci|Robo|Difusi|transmi|insert|robad|influencia|control/i.test(schText));
  } catch(e){}
  return out;
}`
};

/* ---- ensambla 1 app: inline data.js + shim + puente ---- */
function buildApp(id){
  const cfg = byId[id];
  if (!cfg) throw new Error('sin bridge para ' + id);
  const appPath = path.join(ROOT, APP[id].file);
  const appDir = path.dirname(appPath);
  let h = read(appPath);

  // 1) inline cada <script src="X(.js)?v=..."></script>
  (cfg.dataScripts || []).forEach(ds => {
    const content = read(path.join(appDir, ds));
    const re = new RegExp('<script[^>]*\\bsrc="' + escRe(ds) + '[^"]*"[^>]*></script>');
    if (!re.test(h)) throw new Error('no encontré <script src="' + ds + '"> en ' + id);
    h = h.replace(re, () => '<script>\n' + content + '\n</' + 'script>');  // función: no interpreta $ del contenido
  });

  // 2) seed placeholder + shim + fix de fondo como PRIMERO dentro de <head>
  //    (functioning define --bg en body/tema, no en :root → su <html> queda blanco cuando el
  //     contenido es corto y se ve el canvas; forzamos sepia anchor en <html> de forma aditiva)
  const HTMLBG = '<style>html{background:#1a140d !important}</style>';
  h = h.replace(/<head[^>]*>/, m => m + '\n<!--JAFLO_SEED-->\n' + HTMLBG + '\n<script>' + SHIM + '\n</' + 'script>');
  if (!/JAFLO_SEED/.test(h)) throw new Error('no encontré <head> en ' + id);

  // 3) puente al final del body
  const prefill = PREFILL_OVERRIDE[id] || cfg.prefillFnSource;
  let summary = SUMMARY_OVERRIDE[id] || cfg.summaryFnSource;
  if (id === 'bmse' && summary) {
    const wrappedSummary = summary.replace(/function\s+jafloSummary\s*\(\s*\)/, 'function __jafloSummaryBase()');
    if (wrappedSummary === summary) throw new Error('no pude envolver jafloSummary de bmse');
    summary = wrappedSummary + '\n' + BMSE_SUMMARY_EXT;
  }
  const vemmfal = VEMMFAL_OVERRIDE[id] || cfg.vemmfalFnSource;
  const fns = [summary, vemmfal, prefill, CHARTS_OVERRIDE[id]].filter(Boolean).join('\n');
  const brg = '<script>\n' + fns + '\n' + LISTENER + '\n</' + 'script>';
  // inyecta antes del ÚLTIMO </body> (functioning tiene un </body> dentro de un template de export)
  const bIdx = h.lastIndexOf('</body>');
  if (bIdx >= 0) h = h.slice(0, bIdx) + brg + '\n' + h.slice(bIdx);
  else h = h + brg;

  return h;
}

const APP_HTML = {};
Object.keys(APP).forEach(id => { APP_HTML[id] = buildApp(id); });

/* ---- runtime del shell (padre) ---- */
const RUNTIME = `
/* ============ Intake Unificado — runtime de producción ============ */
const VIEW2APP = ${JSON.stringify(Object.fromEntries(Object.entries(APP).map(([id,v])=>[v.view,id])))};
const APP2SUM  = ${JSON.stringify(Object.fromEntries(Object.entries(APP).map(([id,v])=>[id,v.sum])))};
const APP_VIEWS = ${JSON.stringify(Object.fromEntries(Object.entries(APP).map(([id,v])=>[id,v.view])))};

let SUMMARY = {
  exposoma:{ ICE:0, ICEmax:0, ace:0, aceMax:10, chrp:false, suicid:'—', factorP:'—', outcomes:[] },
  funcion:{ media:null, quadrant:'—', alarma:0, patron:'' },
  historia:{ curso:'—', episodios:0, safety:'g' },
  bmse:{ concienciaScore:0, macro:'—', meso:'—', micro:'—', r:0, severidad:'—', st3:'g', psp:'g', rdoc:[], hitop:[],
    oas:{total:0,hetero:0,auto:0},
    bvc:{confusion:false,irritabilidad:false,ruidos:false,amenazaVerbal:false,amenazaFisica:false,ataqueObjetos:false},
    risks:{suicidio:null,agresividad:null,negligencia:null},
    interpersonal:null }
};
let VEM_AUTO = {};               // texto-item VEMMFAL -> bool (auto desde apps)
let manualConciencia = null;     // override manual; null = derivar de pMSE/VEMMFAL

/* ---------- registro persistente del padre (file:// top funciona) ---------- */
const REGKEY = 'unifiedPatient_v2';
const STRESS_CASES = ${JSON.stringify(STRESS_CASES).replace(/<\//g, '<\\/')};  // 100 casos CIE-11/DSM-5-TR (stress-test)
let REG = { meta:{}, ls:{}, _v:'unifiedPatient_v2' };
try { const r = localStorage.getItem(REGKEY); if (r) REG = Object.assign(REG, JSON.parse(r)||{}); } catch(e){}
function saveReg(){ try { localStorage.setItem(REGKEY, JSON.stringify(REG)); } catch(e){} }

/* ---------- ventana 1: Datos generales (captura única, alimenta las 4 apps) ---------- */
const PAC_FIELDS = [
  {grp:'Identidad', items:[
    {id:'f_codigo',k:'codigo',lab:'Código',t:'text',ph:'FX-01'},
    {id:'f_edad',k:'edad',lab:'Edad',t:'number',ph:'años'},
    {id:'f_sexo',k:'sexo',lab:'Sexo',t:'select',o:['','M','F','Otro'],der:'C-n1/C-n2'},
    {id:'f_fecha',k:'fecha',lab:'Fecha',t:'date'},
    {id:'f_eval',k:'evaluador',lab:'Evaluador',t:'text',ph:'iniciales'},
  ]},
  {grp:'Contexto de evaluación', items:[
    {id:'f_setting',k:'setting',lab:'Setting',t:'select',o:['','Emergencia','Hospitalización','Consulta externa','Interconsulta','Comunitario']},
    {id:'f_fuente',k:'fuente',lab:'Fuente de información',t:'select',o:['','Paciente','Familiar','Historia clínica','Mixta']},
    {id:'f_confiab',k:'confiabilidad',lab:'Confiabilidad',t:'select',o:['','Alta','Media','Baja']},
  ]},
  {grp:'Sociodemográficos', items:[
    {id:'f_estadocivil',k:'estadoCivil',lab:'Estado civil',t:'select',o:['','Soltero/a','Casado/a','Conviviente','Separado/a','Divorciado/a','Viudo/a'],der:'C-n6'},
    {id:'f_etnia',k:'etnia',lab:'Etnia',t:'select',o:['','Mestizo/a','Quechua/Aymara','Amazónico/a','Afroperuano/a','Blanco/a','Asiático/a','Otra'],der:'C-n3'},
    {id:'f_ocupacion',k:'ocupacion',lab:'Situación laboral',t:'select',o:['','Empleado/a','Independiente','Desempleado/a','Estudiante','Labores del hogar','Jubilado/a'],der:'C-n11'},
    {id:'f_educacion',k:'educacion',lab:'Educación',t:'select',o:['','Sin instrucción','Primaria','Secundaria','Técnica','Universitaria','Posgrado']},
    {id:'f_ses',k:'ses',lab:'Nivel socioeconómico',t:'select',o:['','Bajo','Medio-bajo','Medio','Medio-alto','Alto']},
  ]},
];
const PAC_ALL = PAC_FIELDS.reduce((a,g)=>a.concat(g.items),[]);
function renderPacForm(){
  const host=document.getElementById('pacForm'); if(!host) return;
  host.innerHTML = PAC_FIELDS.map(g=>'<div class="pac-grp"><h3>'+g.grp+'</h3><div class="pac-grid">'
    +g.items.map(f=>{
      const der=f.der?'<span class="der">↘ '+f.der+'</span>':'';
      let ctrl;
      if(f.t==='select') ctrl='<select id="'+f.id+'">'+f.o.map(o=>'<option value="'+o+'">'+(o||'—')+'</option>').join('')+'</select>';
      else ctrl='<input id="'+f.id+'" type="'+f.t+'" placeholder="'+(f.ph||'')+'">';
      return '<div class="pac-f"><label>'+f.lab+der+'</label>'+ctrl+'</div>';
    }).join('')+'</div></div>').join('');
  const m=REG.meta||{};
  PAC_ALL.forEach(f=>{ const el=document.getElementById(f.id); if(el && m[f.k]!=null && m[f.k]!=='') el.value=m[f.k]; });
  PAC_ALL.forEach(f=>{ const el=document.getElementById(f.id); if(el) el.addEventListener('change',()=>{ pushIdentity(); renderTimeline(); refreshAll(); }); });
  const bc=document.getElementById('btnClear'); if(bc && !bc.dataset.wired){ bc.dataset.wired='1'; bc.addEventListener('click', clearAll); }
  const bn=document.getElementById('btnNuevo'); if(bn && !bn.dataset.wired){ bn.dataset.wired='1'; bn.addEventListener('click', nuevoPaciente); }
  renderCaseSelect();
  updateHeaderStrip();
}
const CASE_BLOCKS={A:'A · Psicosis',B:'B · Bipolar',C:'C · Depresión',D:'D · Ansiedad',E:'E · Trauma',F:'F · Orgánico / Neurocognitivo',G:'G · Sustancias',H:'H · Neurodesarrollo',I:'I · Personalidad',J:'J · TCA / Somático',K:'K · Adversariales',L:'L · Variantes',M:'M · Cobertura extra',N:'N · Bordes seguridad/curso'};
function renderCaseSelect(){
  const sel=document.getElementById('caseSelect'); if(!sel||sel.dataset.wired) return; sel.dataset.wired='1';
  if(!Array.isArray(STRESS_CASES)||!STRESS_CASES.length){ sel.style.display='none'; return; }
  const esc=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  const byB={}; STRESS_CASES.forEach(c=>{ const b=c.id[0]; (byB[b]=byB[b]||[]).push(c); });
  let html='<option value="">▦ Cargar caso stress-test ('+STRESS_CASES.length+')…</option>';
  Object.keys(byB).forEach(b=>{ html+='<optgroup label="'+esc(CASE_BLOCKS[b]||b)+'">'
    +byB[b].map(c=>'<option value="'+c.id+'" title="'+esc(c.tests)+'">'+c.id+' · '+esc(c.dx)+(c.cie11?(' ['+esc(c.cie11)+']'):'')+'</option>').join('')+'</optgroup>'; });
  sel.innerHTML=html;
  sel.addEventListener('change',()=>{ if(sel.value){ loadStressCase(sel.value); } });
}
function loadStressCase(id){
  const c=(STRESS_CASES||[]).find(x=>x.id===id); if(!c) return;
  try { localStorage.setItem(REGKEY, JSON.stringify(c.reg)); } catch(e){}
  location.reload();
}
function nuevoPaciente(){
  if(!confirm('¿Empezar con un paciente NUEVO? Se limpian identidad + las 4 apps para no arrastrar datos del paciente anterior.')) return;
  try { ['unifiedPatient_v2','exposome_scorer_v1','expfx_state_v5','expHistApp_v2','bmse_state_v2','bmse_state_v2_backup','bmse_identity_v1','expHistTheme'].forEach(k=>localStorage.removeItem(k)); } catch(e){}
  location.reload();
}
function clearAll(){
  if(!confirm('¿Borrar TODOS los datos del paciente actual — identidad + las 4 apps (Exposoma, Funcionamiento, Historia, pMSE)? No se puede deshacer.')) return;
  try { ['unifiedPatient_v2','exposome_scorer_v1','expfx_state_v5','expHistApp_v2','bmse_state_v2','bmse_state_v2_backup','bmse_identity_v1','expHistTheme'].forEach(k=>localStorage.removeItem(k)); } catch(e){}
  location.reload();
}
function readIdentity(){
  const o={}; PAC_ALL.forEach(f=>{ const el=document.getElementById(f.id); o[f.k]= el?el.value:(REG.meta&&REG.meta[f.k])||''; }); return o;
}
function updateHeaderStrip(){
  const s=document.getElementById('idStrip'); if(!s) return; const m=REG.meta||{};
  if(m.codigo||m.edad||m.sexo) s.innerHTML='<b>'+(m.codigo||'s/código')+'</b> · '+(m.edad?m.edad+'a':'—')+' · '+(m.sexo||'—');
  else s.textContent='Sin paciente · clic para datos generales';
}
function pushIdentity(){
  REG.meta = Object.assign(REG.meta||{}, readIdentity()); saveReg(); updateHeaderStrip();
  document.querySelectorAll('iframe[data-app]').forEach(f => {
    try { f.contentWindow.postMessage({type:'JAFLO_IDENTITY', payload:REG.meta}, '*'); } catch(e){}
  });
}

/* ---------- helpers de render ---------- */
function rampColor(v){ if(v==null) return 'var(--border)'; if(v<=2) return 'var(--ramp0)'; if(v<3.5) return 'var(--ramp3)'; return 'var(--ramp6)'; }
function flagHtml(s,labels){ const m={g:'g',green:'g',ok:'g',warn:'y',y:'y',yellow:'y',fail:'r',r:'r',red:'r'}; const c=m[s]||'y'; return '<span class="flag '+c+'">'+(labels[c]||s||'—')+'</span>'; }
function ocColor(p){ if(p>=60) return 'linear-gradient(90deg,var(--orange),var(--red))'; if(p>=35) return 'var(--gold)'; return 'var(--teal)'; }
function miniIt(r){ return '<div class="it"><span class="lab" title="'+r.nm+'">'+r.nm+'</span><span class="ar '+r.dir+'">'+(r.dir==='up'?'▲':'▼')+'</span><span class="lv">'+(r.lv||'')+'</span></div>'; }
function pct(v,max){ if(!max) return 0; return Math.max(0,Math.min(100, v/max*100)); }
function dash(v){ return (v==null||v===''||v==='—')? '—' : v; }
function asInt(v){ const n=parseInt(v,10); return Number.isFinite(n)?n:0; }
function escHtml(s){ return String(s==null?'':s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function renderOasRisk(){
  const box=document.getElementById('validityRiskCards'); if(!box) return;
  const b=SUMMARY.bmse||{}, o=b.oas||{}, r=b.bvc||{}, risks=b.risks||{}, ip=b.interpersonal||null;
  const total=Math.max(0,asInt(o.total)), hetero=Math.max(0,asInt(o.hetero)), auto=Math.max(0,asInt(o.auto));
  const bvcKeys=['confusion','irritabilidad','ruidos','amenazaVerbal','amenazaFisica','ataqueObjetos'];
  const bvcActive=bvcKeys.reduce((n,k)=>n+(r[k]?1:0),0);
  const clsFromStatus=s=>({red:'red',fail:'red',yellow:'yellow',warn:'yellow',green:'green',g:'green',muted:'green'}[s]||'green');
  const tagFromStatus=s=>({red:'ACTIVO',fail:'ACTIVO',yellow:'VIGILAR',warn:'VIGILAR',green:'OK',g:'OK',muted:'OK'}[s]||'OK');
  const oasStatus = (total>=23 || hetero>=16) ? 'red' : (total>0 || bvcActive>0 ? 'yellow' : 'green');
  const card=(title,status,tag,body,value)=>{
    const val=value?'<div class="vc-value">'+escHtml(value)+'</div>':'';
    return '<div class="validity-card '+clsFromStatus(status)+'"><div class="vc-head"><span class="vc-title">'+escHtml(title)+'</span><span class="vc-tag">'+escHtml(tag||tagFromStatus(status))+'</span></div>'+val+'<div class="vc-sub">'+escHtml(body||'Sin señal activa.')+'</div></div>';
  };
  const riskCard=(key,title)=>{
    const rr=risks[key]||{};
    const status=rr.status||'green';
    return card(title,status,rr.label||tagFromStatus(status),rr.summary||'Sin señal activa.');
  };
  const interpersonalCard=()=>{
    if(!ip) return card('Interpersonal','green','PEND','Puntúa control + tono afiliativo + drive.');
    const patterns=Array.isArray(ip.patterns)?ip.patterns:[];
    const first=patterns[0]||null;
    const probable=patterns.some(p=>p && p.confidence==='probable');
    const status=patterns.length ? 'yellow' : 'green';
    const tag=patterns.length ? (probable?'PATRÓN':'POSIBLE') : 'ESTILO';
    const value=ip.field || 'estilo';
    const adjs=(ip.adjectives||[]).slice(0,4).join(', ');
    const patternText=first ? first.name+' '+(first.confidence||'posible')+' · ' : '';
    const body=patternText+(ip.driveLabel||'')+(adjs ? ' · '+adjs : '');
    return card('Interpersonal', status, tag, body, value);
  };
  box.innerHTML = card('OAS', oasStatus, tagFromStatus(oasStatus), 'H '+hetero+'/28 · A '+auto+'/12 · BVC '+bvcActive+'/6', total+'/40')
    + riskCard('suicidio','Riesgo de suicidio')
    + riskCard('agresividad','Riesgo de agresividad')
    + riskCard('negligencia','Riesgo de negligencia')
    + interpersonalCard();
}

function renderActs(){
  const e=SUMMARY.exposoma, f=SUMMARY.funcion, h=SUMMARY.historia, b=SUMMARY.bmse;
  const o3 = (e.outcomes||[]).slice(0,3);
  const macroHead = (b.macro && b.macro!=='—') ? b.macro.split(' / ')[0] : '—';
  const em=k=>(SUMMARY[k]&&SUMMARY[k].__err)?' <span style="color:var(--red);font-size:13px" title="error en la app: '+SUMMARY[k].__err+'">⚠</span>':'';
  const _acts=document.getElementById('acts'); if(!_acts){ renderDetail(); return; }
  _acts.innerHTML =
  '<div class="act" data-n="①"><div class="k">Predisposición</div><div class="nm">Exposoma'+em('exposoma')+'</div>'
  +'<div class="row"><b>ICE</b><span class="v">'+dash(e.ICE)+(e.ICEmax?(' / ~'+e.ICEmax):'')+'</span></div>'
  +'<div class="bar"><i style="width:'+pct(e.ICE,e.ICEmax)+'%;background:linear-gradient(90deg,var(--teal),var(--azul))"></i></div>'
  +'<div class="row"><b>ACE-10</b><span class="v">'+dash(e.ace)+(e.ace>=4?' ⚠':'')+'</span></div>'
  +'<div class="row"><b>CHR-P</b><span class="v">'+(e.chrp?'＋':'—')+'</span></div>'
  +'<div class="row"><b>Suicidalidad lifetime</b><span class="v">'+dash(e.suicid)+'</span></div>'
  +'<div class="mini"><div class="mh"><span>Riesgo de qué · carga</span><span class="subtle">top 3</span></div>'
  +o3.map(c=>'<div class="ocb"><span class="nm" title="'+c.nm+'">'+c.nm+'</span><span class="obar"><i style="width:'+((c.barPct==null)?c.pct:c.barPct)+'%;background:'+ocColor(c.pct)+'"></i></span><span class="pc">'+c.pct+'</span></div>').join('')
  +(o3.length?'':'<div class="subtle" style="font-size:11.5px">— sin captura aún —</div>')+'</div></div>'

  +'<div class="act" data-n="②"><div class="k">Trayectoria</div><div class="nm">Funcionamiento'+em('funcion')+'</div>'
  +'<div class="row"><b>Media actual</b><span class="v"><span class="dotw" style="background:'+rampColor(f.media)+'"></span>'+(f.media==null?'—':f.media)+' / 6</span></div>'
  +'<div class="bar"><i style="width:'+(f.media==null?0:f.media/6*100)+'%;background:'+rampColor(f.media)+'"></i></div>'
  +'<div class="row"><b>Cuadrante</b><span class="v">'+dash(f.quadrant)+'</span></div>'
  +'<div class="row"><b>Ejes-alarma</b><span class="v">'+dash(f.alarma)+' / 7</span></div>'
  +'<div class="row"><b>Patrón</b><span class="v">'+dash(f.patron)+'</span></div></div>'

  +'<div class="act" data-n="③"><div class="k">Curso</div><div class="nm">Historia'+em('historia')+'</div>'
  +'<div class="row"><b>Curso</b><span class="v">'+dash(h.curso)+'</span></div>'
  +'<div class="row"><b>Episodios</b><span class="v">'+dash(h.episodios)+'</span></div>'
  +'<div class="row"><b>Safety gate</b><span class="v">'+flagHtml(h.safety,{r:'FLAG',y:'WARN',g:'OK'})+'</span></div></div>'

  +'<div class="act" data-n="④" id="actBmse"><div class="k">Estado</div><div class="nm">pMSE'+em('bmse')+'</div>'
  +'<div class="row"><b>Fenotipo</b><span class="v">'+dash(b.micro)+'</span></div>'
  +'<div class="row"><b>Ruta</b><span class="v subtle" style="font-size:11px">'+macroHead+' › '+dash(b.meso)+'</span></div>'
  +'<div class="row"><b>Severidad</b><span class="v">'+dash(b.severidad)+(b.r?(' · r='+b.r):'')+'</span></div>'
  +'<div class="row"><b>3ST suicidio</b><span class="v">'+flagHtml(b.st3,{r:'rojo',y:'amarillo',g:'verde'})+'</span></div>'
  +'<div class="row"><b>PSP funcional</b><span class="v">'+flagHtml(b.psp,{r:'rojo',y:'amarillo',g:'verde'})+'</span></div>'
  +'<div class="mini"><div class="mh"><span>RDoC</span><span class="subtle">top 3</span></div>'
  +(b.rdoc||[]).slice(0,3).map(miniIt).join('')
  +'<div class="mh"><span>HiTOP</span><span class="subtle">top 3</span></div>'
  +(b.hitop||[]).slice(0,3).map(miniIt).join('')+'</div></div>';
  renderDetail();
}

function lvNum(lv){ return lv==='alto'?3:(lv==='moderado'?2:(lv?1:0)); }
function renderRadar(id, items, title){
  const svg=document.getElementById(id); if(!svg) return;
  const g={}; (items||[]).forEach(it=>{ const k=(it.nm||'?'); g[k]=Math.max(g[k]||0, lvNum(it.lv)); });
  const keys=Object.keys(g), n=keys.length;
  const W=270,H=250,cx=W/2,cy=H/2+10,R=74;
  if(n<3){ svg.innerHTML='<text x="'+cx+'" y="14" fill="var(--azul-light)" font-size="11" text-anchor="middle">'+title+'</text><text x="'+cx+'" y="'+cy+'" fill="var(--text-subtle)" font-size="10" text-anchor="middle">sin datos suficientes</text>'; return; }
  let s='<text x="'+cx+'" y="14" fill="var(--azul-light)" font-size="11.5" text-anchor="middle">'+title+'</text>';
  for(let r=1;r<=3;r++){ let pts=''; for(let i=0;i<n;i++){ const a=-Math.PI/2+i*2*Math.PI/n; pts+=(cx+Math.cos(a)*R*r/3).toFixed(1)+','+(cy+Math.sin(a)*R*r/3).toFixed(1)+' '; } s+='<polygon points="'+pts.trim()+'" fill="none" stroke="var(--border)" stroke-width="1"/>'; }
  keys.forEach((k,i)=>{ const a=-Math.PI/2+i*2*Math.PI/n; const lx=cx+Math.cos(a)*(R+5), ly=cy+Math.sin(a)*(R+5);
    s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+Math.cos(a)*R).toFixed(1)+'" y2="'+(cy+Math.sin(a)*R).toFixed(1)+'" stroke="var(--border)" stroke-width="1"/>';
    const an=Math.cos(a)>0.3?'start':(Math.cos(a)<-0.3?'end':'middle');
    s+='<text x="'+lx.toFixed(1)+'" y="'+(ly+3).toFixed(1)+'" fill="var(--text-subtle)" font-size="7.5" text-anchor="'+an+'">'+k.slice(0,18)+'</text>'; });
  let dp=''; keys.forEach((k,i)=>{ const a=-Math.PI/2+i*2*Math.PI/n, rr=R*g[k]/3; dp+=(cx+Math.cos(a)*rr).toFixed(1)+','+(cy+Math.sin(a)*rr).toFixed(1)+' '; });
  s+='<polygon points="'+dp.trim()+'" fill="rgba(200,155,79,.22)" stroke="var(--azul)" stroke-width="1.8"/>';
  keys.forEach((k,i)=>{ const a=-Math.PI/2+i*2*Math.PI/n, rr=R*g[k]/3; s+='<circle cx="'+(cx+Math.cos(a)*rr).toFixed(1)+'" cy="'+(cy+Math.sin(a)*rr).toFixed(1)+'" r="2.5" fill="var(--azul-light)"/>'; });
  svg.innerHTML=s;
}
function expoOutcomeRows(){
  const arr=((SUMMARY.exposoma||{}).outcomes||[]).slice();
  if(!arr.length) return '';
  const maxNorm=Math.max(0.001,...arr.map(o=>Number(o.norm)||0));
  return arr.sort((a,c)=>((Number(c.norm)||0)-(Number(a.norm)||0)) || ((Number(c.pct)||0)-(Number(a.pct)||0))).map(o=>{
    const sat=(o.pct==null?o.sat:o.pct)||0;
    const bar=(o.barPct==null)?Math.round(((Number(o.norm)||0)/maxNorm)*100):o.barPct;
    return '<div class="detrow"><span class="dl">'+o.nm+'</span><span class="pip"><i style="width:'+bar+'%;background:'+ocColor(sat)+'"></i></span><span class="dv">'+sat+'</span></div>';
  }).join('');
}
function renderDetail(){
  const e=SUMMARY.exposoma;
  const dO=document.getElementById('detOutcomes');
  if(dO) dO.innerHTML='<h3>Carga por outcome · exposoma</h3>'+(expoOutcomeRows()||'<div class="subtle">—</div>');
  renderPhenoChips();
  renderExpoBlocks();
  requestCharts();
}
function renderPhenoChips(){
  const el=document.getElementById('phenoChips'); if(!el) return; const b=SUMMARY.bmse||{};
  if(el.querySelector('iframe')) return;
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  if(!b.macro||b.macro==='—'){ el.innerHTML='<div class="pheno-loading"><b>Fenotipo</b><span>pMSE todavía sin perfil suficiente.</span></div>'; return; }
  const macro=b.macro.split(' / ')[0];
  const bits=[macro,b.meso,b.micro].filter(x=>x&&x!=='—').map(esc).join(' · ');
  el.innerHTML='<div class="pheno-loading"><b>Fenotipo</b><span>'+bits+(b.severidad&&b.severidad!=='—'?(' · '+esc(b.severidad)):'')+'</span></div>';
}
function injectPhenoPanel(boxId, css, html){
  const box=document.getElementById(boxId); if(!box) return;
  if(!html){ renderPhenoChips(); return; }
  html=String(html).replace(new RegExp('<script[\\s\\S]*?<'+'/script>','gi'),'');
  const phenoCss = [
    'html,body{margin:0;background:#1a140d;color:#ece0cb;min-height:0 !important;height:auto !important}',
    'body{padding:0;overflow:hidden}',
    '.dash-panel.dash-pheno.pheno-block{margin:0 !important;width:100% !important;box-sizing:border-box !important;box-shadow:none !important;min-height:0 !important;height:auto !important;overflow:visible !important}',
    '.dash-pheno .dash-body{display:grid !important;grid-template-columns:repeat(3,minmax(0,1fr)) !important;gap:9px 12px !important;overflow:visible !important;padding-right:0 !important;align-items:start !important;align-content:start !important;container-type:normal !important;min-height:0 !important;height:auto !important}',
    '.dash-pheno .dash-body > div{min-width:0 !important}',
    '.dash-pheno .pheno-sev{grid-column:1 / span 1 !important}',
    '.dash-pheno .pheno-meta{grid-column:2 / -1 !important;align-self:center !important}',
    '.dash-pheno .lvl-macro,.dash-pheno .pheno-foot{grid-column:1 / -1 !important}',
    '.dash-pheno .pills{display:grid !important;grid-template-columns:repeat(auto-fit,minmax(150px,1fr)) !important;gap:4px !important}',
    '.dash-pheno .pill{width:100% !important;min-width:0 !important;min-height:23px !important;box-sizing:border-box !important}',
    '.dash-pheno .pill .lb{min-width:0 !important}',
    '.dash-pheno .pill-macro{min-height:30px !important}',
    '@media(max-width:620px){.dash-pheno .dash-body{grid-template-columns:1fr !important}.dash-pheno .pheno-sev,.dash-pheno .pheno-meta,.dash-pheno .lvl-macro,.dash-pheno .pheno-foot{grid-column:1 / -1 !important}.dash-pheno .pills{grid-template-columns:repeat(auto-fit,minmax(132px,1fr)) !important}}'
  ].join('');
  const doc='<!doctype html><html data-theme="sepia"><head><meta charset="utf-8"><style>'+(css||'')+phenoCss+'</style></head><body>'+html+'</body></html>';
  const isEmpty = html.indexOf('pheno-empty') >= 0 || html.indexOf('Puntúa') >= 0 || html.indexOf('Puntua') >= 0;
  let f=box.querySelector('iframe'); if(!f){ f=document.createElement('iframe'); f.setAttribute('scrolling','no'); f.style.cssText='width:100%;border:none;background:#1a140d;min-height:104px;display:block'; box.innerHTML=''; box.appendChild(f); }
  f.onload=function(){ if(isEmpty){ f.style.height='104px'; } else { fitPhenoFrame(f); setTimeout(()=>fitPhenoFrame(f),400); setTimeout(()=>fitPhenoFrame(f),1200); } };
  f.srcdoc=doc;
}
/* copia las dos figuras REALES del pMSE (radial RDoC + Forbes/HiTOP) en mini-iframes autocontenidos */
function requestCharts(){ const f=document.querySelector('iframe[data-app="bmse"]'); if(f&&f.contentWindow){ try{ f.contentWindow.postMessage({type:'JAFLO_GET_CHARTS'}, '*'); }catch(e){} } }
/* bloques compactos del exposoma (barras, no radiales): ACE-10, Factor-p (HiTOP), PID-5 */
function exBar(label,pct,color,right){ return '<div class="exbar"><span class="exl" title="'+label+'">'+label+'</span><span class="extrack"><i style="width:'+Math.max(2,Math.min(100,pct||0))+'%;background:'+(color||'var(--teal)')+'"></i></span>'+(right!=null?'<span class="exn">'+right+'</span>':'')+'</div>'; }
function renderExpoBlocks(){
  const e=SUMMARY.exposoma||{};
  const a=document.getElementById('exAce');
  if(a){ const ad=e.aceDims||[], al=e.alosta||[]; const altot=al.reduce((s,d)=>s+d.tot,0), aln=al.reduce((s,d)=>s+d.n,0);
    a.innerHTML='<div class="exb-row"><b>ACE-10</b><span>'+(e.ace!=null?e.ace:'—')+' / 10'+(e.ace>=4?' ⚠':'')+'</span></div>'
      +(ad.length?ad.map(d=>exBar(String(d.name).replace(/\\s*\\(.*/,''),100*d.n/(d.tot||1),d.color,d.n+'/'+d.tot)).join(''):'<div class="subtle" style="font-size:11px">— sin captura —</div>')
      +(al.length?('<div class="exb-row" style="margin-top:9px"><b>Carga alostática</b><span>'+aln+' / '+altot+'</span></div>'+al.map(d=>exBar(d.label,100*d.n/(d.tot||1),d.color,d.n+'/'+d.tot)).join('')):''); }
  const g=document.getElementById('exGraphs');
  if(g){ const hi=e.hitop||[], pid=e.pid5||[];
    g.innerHTML='<div class="exb-h">Factor-p · espectros HiTOP</div>'+(hi.length?hi.map(it=>exBar(it.label,100*it.value,'var(--teal)',Math.round(100*it.value)+'%')).join(''):'<div class="subtle" style="font-size:11px">—</div>')
      +'<div class="exb-h" style="margin-top:9px">PID-5 · dominios</div>'+(pid.length?pid.map(it=>exBar(it.label,100*it.value/(it.max||1),it.color,it.value)).join(''):'<div class="subtle" style="font-size:11px">—</div>'); }
}
function injectChart(boxId, css, html, label, extra){
  const box=document.getElementById(boxId); if(!box) return;
  if(!html){ box.innerHTML='<div class="subtle" style="padding:26px;text-align:center;font-size:12px">'+label+' — abre pMSE y puntúa para ver la figura</div>'; return; }
  html=String(html).replace(new RegExp('<script[\\s\\S]*?<'+'/script>','gi'),'');  // figura estática; sin scripts
  const chartCss = [
    'html,body{margin:0;background:#1a140d;min-height:0 !important;height:auto !important}',
    'body{padding:8px;overflow:hidden}',
    '.dash-panel,.dashboard-radar,.dash-rdoc,.dash-forbes{display:block !important;margin:0 !important;border:none !important;background:transparent !important;box-shadow:none !important;overflow:visible !important;min-height:0 !important;height:auto !important}',
    '.dashboard-radar .dash-body,.dash-body{display:block !important;min-height:0 !important;height:auto !important;max-height:none !important;overflow:visible !important}',
    '.radar-container{display:block !important;width:100% !important;max-width:100% !important;height:auto !important;max-height:none !important;overflow:visible !important}',
    '.radar-container svg,.profile-dashboard .radar-container svg{display:block !important;width:100% !important;max-width:100% !important;height:auto !important;max-height:none !important;transform:none !important;overflow:visible !important}',
    '.profile-dashboard .radar-container > div[style]{display:block !important}'
  ].join('');
  const doc='<!doctype html><html data-theme="sepia"><head><meta charset="utf-8"><style>'+(css||'')+chartCss+(extra||'')+'</style></head><body>'+html+'</body></html>';
  let f=box.querySelector('iframe'); if(!f){ f=document.createElement('iframe'); f.setAttribute('scrolling','no'); f.style.cssText='width:100%;border:none;background:#1a140d;min-height:320px;display:block'; box.innerHTML=''; box.appendChild(f); }
  f.onload=function(){ fitChartFrame(f); setTimeout(()=>fitChartFrame(f),400); setTimeout(()=>fitChartFrame(f),1200); };
  f.srcdoc=doc;
}
function fitChartFrame(f){
  try{
    const d=f&&f.contentDocument, w=d&&d.defaultView, body=d&&d.body, root=d&&d.documentElement;
    if(!body||!root) return;
    const els=Array.from(d.querySelectorAll('.dash-rdoc,.dash-forbes,.dashboard-radar,.dash-panel,.radar-container svg'));
    const heights=[];
    (els.length?els:Array.from(d.querySelectorAll('body > *, svg'))).forEach(el=>{
      const r=el.getBoundingClientRect();
      heights.push(r.bottom + (w ? w.scrollY : 0), r.top + (el.scrollHeight||0), r.top + (el.offsetHeight||0));
    });
    if(!heights.length) heights.push(body.scrollHeight, root.scrollHeight, body.offsetHeight, root.offsetHeight);
    const h=Math.ceil(Math.max.apply(null, heights.filter(Number)));
    if(h>40) f.style.height=Math.max(180,h+16)+'px';
  }catch(e){}
}
function fitPhenoFrame(f){
  try{
    const d=f&&f.contentDocument;
    const sec=d&&d.querySelector('.dash-pheno');
    if(!sec) return fitChartFrame(f);
    const r=sec.getBoundingClientRect();
    const h=Math.ceil(Math.max(r.height, sec.scrollHeight, sec.offsetHeight));
    if(h>40) f.style.height=Math.max(104,h+6)+'px';
  }catch(e){}
}
function fitInjectedCharts(){ document.querySelectorAll('#rdocChart iframe,#hitopChart iframe').forEach(fitChartFrame); }

function renderConv(){
  if(!document.getElementById('conv')) return;   // panel de convergencias eliminado
  const e=SUMMARY.exposoma, f=SUMMARY.funcion, h=SUMMARY.historia, b=SUMMARY.bmse;
  const macroHead = (b.macro && b.macro!=='—') ? b.macro.split(' / ')[0] : '—';
  const dr = (h.curso && h.curso!=='—') ? ((h.episodios>1)?'agudo-sobre-crónico (recaída)':'primer episodio / episodio único') : '—';
  document.getElementById('conv').innerHTML =
  '<div class="cv"><div class="ic">⚖</div><div class="b"><div class="h">Dosis-respuesta — carga ↔ función</div>'
  +'<div class="x">ICE '+dash(e.ICE)+' frente a funcionamiento '+(f.media==null?'—':(f.media+'/6'))+'.</div>'
  +'<div class="verdict">'+( (f.media!=null) ? ('Cuadrante: <b>'+dash(f.quadrant)+'</b> — el deterioro se lee contra la carga ambiental (ICE como eje de dosis).') : 'Completar funcionamiento + exposoma para el cruce dosis-respuesta.')+'</div></div></div>'

  +'<div class="cv"><div class="ic">⚑</div><div class="b"><div class="h">Seguridad — triangulación de 3 fuentes</div>'
  +'<div class="x">Historia safety: '+flagHtml(h.safety,{r:'FLAG',y:'WARN',g:'OK'})+' · Exposoma intento lifetime: <i>'+dash(e.suicid)+'</i> · pMSE 3ST: '+flagHtml(b.st3,{r:'rojo',y:'amarillo',g:'verde'})+'.</div>'
  +'<div class="verdict'+((h.safety==='fail'||b.st3==='fail')?' warn':'')+'">Verdicto único de riesgo: prioriza la fuente más alta. Captura consolidada en pMSE EXT (punto de atención).</div></div></div>'

  +'<div class="cv gatedep"><div class="ic">⟳</div><div class="b"><div class="h">Estado vs curso</div>'
  +'<div class="x">Fenotipo <b>'+dash(b.micro)+'</b> (estado) sobre curso <b>'+dash(h.curso)+'</b>'+(h.episodios?(' con '+h.episodios+' episodios'):'')+'.</div>'
  +'<div class="verdict">Lectura: <b>'+dr+'</b>.</div>'
  +'<div class="caution">⚠ Conciencia alterada: el fenotipo transversal no es interpretable a valor facial — priorizar etiología orgánica/delirium.</div></div></div>'

  +'<div class="cv gatedep"><div class="ic">≈</div><div class="b"><div class="h">Fenotipo vs factor-p lifetime</div>'
  +'<div class="x">Macro pMSE = <b>'+macroHead+'</b> ↔ espectro-p exposoma = <b>'+dash(e.factorP)+'</b>.</div>'
  +'<div class="verdict">Coherencia transversal ↔ longitudinal entre el espectro de hoy y la liabilidad de vida.</div>'
  +'<div class="caution">⚠ Conciencia alterada: el espectro transversal puede estar contaminado por el estado confusional.</div></div></div>';
}

function renderTimeline(){
  const svg=document.getElementById('tl'); if(!svg) return;
  const W=700,H=188, padL=40,padR=18,padT=18,padB=26;
  const ageNow = parseInt(readIdentity().edad,10); const now = (!isNaN(ageNow)&&ageNow>0)?ageNow:60;
  const traj = SUMMARY.funcion.traj||[]; const eps = SUMMARY.historia.eps||[];
  let maxAge=now; traj.forEach(a=>(a.pts||[]).forEach(p=>{ if(p.age>maxAge)maxAge=p.age; })); eps.forEach(e=>{ if(e.edad>maxAge)maxAge=e.edad; });
  const ageMax = Math.max(40, Math.ceil((maxAge+4)/10)*10);
  const X=a=>padL+a/ageMax*(W-padL-padR);
  const Yf=v=>padT+(v/6)*(H-padT-padB);
  let g='';
  g+='<line x1="'+padL+'" y1="'+(H-padB)+'" x2="'+(W-padR)+'" y2="'+(H-padB)+'" stroke="var(--border-strong)"/>';
  for(let a=0;a<=ageMax;a+=10){ g+='<line x1="'+X(a)+'" y1="'+padT+'" x2="'+X(a)+'" y2="'+(H-padB)+'" stroke="var(--border)" stroke-dasharray="2 4"/>'; g+='<text x="'+X(a)+'" y="'+(H-9)+'" fill="var(--text-subtle)" font-size="10" text-anchor="middle">'+a+'a</text>'; }
  // 7 ejes funcionales (cada uno su color), 0 arriba (óptimo) – 6 abajo (nulo)
  traj.forEach(ax=>{ const pts=(ax.pts||[]).filter(p=>p.age!=null&&p.score!=null).sort((a,b)=>a.age-b.age); if(!pts.length) return;
    let d=''; pts.forEach((p,i)=>{ d+=(i?'L':'M')+X(p.age).toFixed(1)+' '+Yf(p.score).toFixed(1)+' '; });
    g+='<path d="'+d+'" fill="none" stroke="'+(ax.c||'var(--teal)')+'" stroke-width="1.6" opacity=".8" stroke-linejoin="round"/>';
    pts.forEach(p=>{ g+='<circle cx="'+X(p.age).toFixed(1)+'" cy="'+Yf(p.score).toFixed(1)+'" r="2" fill="'+(ax.c||'var(--teal)')+'"/>'; });
  });
  // episodios (marcas verticales en su edad)
  eps.forEach(ep=>{ if(ep.edad==null) return; const x=X(ep.edad);
    g+='<line x1="'+x.toFixed(1)+'" y1="'+padT+'" x2="'+x.toFixed(1)+'" y2="'+(H-padB)+'" stroke="var(--purple)" stroke-width="1" opacity=".5"/>';
    g+='<circle cx="'+x.toFixed(1)+'" cy="'+(H-padB)+'" r="3" fill="var(--purple)"/>';
    if(ep.tipo) g+='<text x="'+x.toFixed(1)+'" y="'+(H-padB-5)+'" fill="var(--purple)" font-size="8.5" text-anchor="middle">'+String(ep.tipo).slice(0,12)+'</text>'; });
  // ahora
  g+='<line x1="'+X(now).toFixed(1)+'" y1="'+(padT-4)+'" x2="'+X(now).toFixed(1)+'" y2="'+(H-padB)+'" stroke="var(--azul)" stroke-width="2"/>';
  g+='<text x="'+X(now).toFixed(1)+'" y="'+(padT-8)+'" fill="var(--azul-light)" font-size="10" text-anchor="middle" font-weight="700">ahora ('+now+'a)</text>';
  g+='<text x="6" y="'+(Yf(0)+3)+'" fill="var(--text-subtle)" font-size="9">óptimo</text>';
  g+='<text x="6" y="'+Yf(6)+'" fill="var(--text-subtle)" font-size="9">nulo</text>';
  if(!traj.length){ g+='<text x="'+(W/2)+'" y="'+((H-padB)/2)+'" fill="var(--text-subtle)" font-size="11" text-anchor="middle">trayectoria → llena Funcionamiento</text>'; }
  svg.innerHTML=g;
  // leyenda: cada eje con su color real + episodio + ahora
  const leg=document.getElementById('tlLegend');
  if(leg){
    let lh = traj.map(a=>'<span><i style="background:'+(a.c||'var(--teal)')+'"></i>'+String(a.t||'eje').slice(0,18)+'</span>').join('');
    lh += '<span><i style="background:var(--purple)"></i>episodio</span><span><i style="background:var(--azul)"></i>ahora</span>';
    leg.innerHTML = lh;
  }
}

function renderCuadrante(){
  const svg=document.getElementById('cuad'); if(!svg) return;
  const e=SUMMARY.exposoma, f=SUMMARY.funcion;
  const W=300,H=210,pad=34, iw=W-2*pad, ih=H-2*pad;
  const iceMax=e.ICEmax||60;
  const X=v=>pad+Math.max(0,Math.min(1,v/iceMax))*iw;
  const Yf=v=>pad+Math.max(0,Math.min(1,(v||0)/6))*ih;  // 0 arriba (preservado), 6 abajo (deteriorado)
  let g='';
  g+='<rect x="'+pad+'" y="'+pad+'" width="'+iw+'" height="'+ih+'" fill="none" stroke="var(--border)"/>';
  g+='<line x1="'+(pad+iw/2)+'" y1="'+pad+'" x2="'+(pad+iw/2)+'" y2="'+(pad+ih)+'" stroke="var(--border)" stroke-dasharray="3 3"/>';
  g+='<line x1="'+pad+'" y1="'+(pad+ih/2)+'" x2="'+(pad+iw)+'" y2="'+(pad+ih/2)+'" stroke="var(--border)" stroke-dasharray="3 3"/>';
  g+='<text x="'+(pad+iw/2)+'" y="'+(H-7)+'" fill="var(--text-subtle)" font-size="9" text-anchor="middle">carga ambiental (ICE) →</text>';
  g+='<text x="11" y="'+(pad+ih/2)+'" fill="var(--text-subtle)" font-size="9" text-anchor="middle" transform="rotate(-90 11 '+(pad+ih/2)+')">deterioro funcional →</text>';
  g+='<text x="'+(pad+4)+'" y="'+(pad+11)+'" fill="var(--text-subtle)" font-size="8">intrínseco / ND</text>';
  g+='<text x="'+(pad+iw-4)+'" y="'+(pad+11)+'" fill="var(--text-subtle)" font-size="8" text-anchor="end">vulnerab. esperable</text>';
  g+='<text x="'+(pad+4)+'" y="'+(pad+ih-5)+'" fill="var(--text-subtle)" font-size="8">resiliencia</text>';
  g+='<text x="'+(pad+iw-4)+'" y="'+(pad+ih-5)+'" fill="var(--text-subtle)" font-size="8" text-anchor="end">carga sin deterioro</text>';
  if(f.media!=null){
    const cx=X(e.ICE), cy=Yf(f.media);
    g+='<circle cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="7" fill="var(--azul)" stroke="var(--bg)" stroke-width="2"/>';
    g+='<text x="'+cx.toFixed(1)+'" y="'+(cy-11).toFixed(1)+'" fill="var(--azul-light)" font-size="9" text-anchor="middle">'+(f.quadrant&&f.quadrant!=='—'?f.quadrant:'')+'</text>';
  } else { g+='<text x="'+(W/2)+'" y="'+(H/2)+'" fill="var(--text-subtle)" font-size="10" text-anchor="middle">faltan datos de funcionamiento</text>'; }
  svg.innerHTML=g;
}

/* ---------- open buttons ---------- */
const APPS=[
  {v:'exposoma',n:'①',t:'Exposoma',d:'ICE · ACE-10 · CHR-P · suicidalidad'},
  {v:'funcionamiento',n:'②',t:'Funcionamiento',d:'etapas × 7 ejes · trayectoria · cuadrante'},
  {v:'historia',n:'③',t:'Historia',d:'curso · episodios · safety'},
  {v:'bmse',n:'④',t:'pMSE',d:'Gate Conciencia · fenotipo · 3ST · PSP'},
];
document.getElementById('opengrid').innerHTML=APPS.map(a=>'<button class="openbtn" data-go="'+a.v+'"><div class="n">'+a.n+'</div><div class="t">'+a.t+'</div><div class="d">'+a.d+'</div></button>').join('');

/* ============ VEMMFAL (mismo modelo que el show-me) ============ */
const VEMMFAL=${JSON.stringify(require('./vemmfal.json'))};

/* nivel de riesgo CUALITATIVO (evidence-anchored, sin exponer OR crudos) + peso interno (log-odds, tiered) */
function vemRisk(it){
  if(it.cand) return {lab:'·', kind:'cand', w:0};
  if(it.tier===1) return {lab:'alto riesgo', kind:'ruleIn', w:0};   // rule-in (override aparte)
  if(it.tier===2 && it.or!=null){
    if(it.or>=6)   return {lab:'alto riesgo', kind:'alto', w:1.6};
    if(it.or>1)    return {lab:'riesgo mod.', kind:'mod',  w:0.8};
    if(it.or<=0.3) return {lab:'protector fuerte', kind:'protF', w:-0.9};
    return {lab:'protector', kind:'prot', w:-0.4};
  }
  if(it.strong)               return {lab:'alto riesgo', kind:'alto', w:1.6};   // tempo hiperagudo (Al-Diwani)
  if(String(it.w)[0]==='-')   return {lab:'protector',   kind:'prot', w:-0.35};
  return {lab:'yellow', kind:'yellow', w:0.35};
}
function vemProt(it){ const k=vemRisk(it).kind; return k==='prot'||k==='protF'; }
function vemBadge(it){
  const r=vemRisk(it);
  const cls = r.kind==='cand'?'cand' : (r.kind==='prot'||r.kind==='protF')?'dn' : (r.kind==='yellow')?'yel' : 'up';
  return '<span class="vw '+cls+'">'+r.lab+'</span>';
}
function renderVemmfal(){
  const gal=document.getElementById('vemGallery'); if(!gal) return;
  gal.innerHTML=VEMMFAL.map((c,ci)=>{
    let on=0;
    const items=c.items.map((it,ii)=>{
      if(it.on && !it.cand) on++;
      const prot=vemProt(it);
      return '<div class="vitem '+(it.on?'on':'')+' '+(prot?'prot':'')+'" data-ci="'+ci+'" data-ii="'+ii+'" '+(it.cand?'data-cand="1"':'')+'><span class="vbox"></span><span class="vt">'+it.t+'</span>'+(it.auto?'<span class="auto">auto</span>':'')+vemBadge(it)+'</div>';
    }).join('');
    return '<div class="vcard"><div class="vh"><div class="vL">'+c.L+'</div><div class="vd"><div class="vn">'+c.dom+'</div><div class="vdir '+c.dir+'">'+(c.dir==='org'?'→ orgánica':'bidireccional')+'</div></div></div>'+items+'<div class="vsub"><span>activos</span><span>'+on+'</span></div></div>';
  }).join('');
}
/* log-odds (naïve-Bayes) ASIMÉTRICO: 1 rojo pesa más que 1 protector + rule-in duro + yellow cualitativo.
   Sesgo a sensibilidad (estilo SMART): perder organicidad es catastrófico, así que un red flag llama
   la atención y un protector NO lo cancela. */
/* prior pre-test por setting (informado por evidencia, ajustable):
   interconsulta/CL ~25% (≈¼ secundaria; delirium frecuente) · emergencia/FEP ~14% (Salamoni) ·
   hospitalización psiq ~12% · consulta externa ~8% (bajo yield, AAEP) · comunitario ~8% */
function settingPrior(s){
  s=(s||'').toLowerCase();
  if(s.indexOf('interconsulta')>=0) return 0.25;
  if(s.indexOf('emergencia')>=0)    return 0.15;
  if(s.indexOf('hospital')>=0)      return 0.12;
  if(s.indexOf('consulta')>=0)      return 0.08;
  if(s.indexOf('comunitario')>=0)   return 0.08;
  return 0.15;
}
function computeOrganicity(){
  const PRIOR=settingPrior((REG.meta&&REG.meta.setting)||'');
  let logit=Math.log(PRIOR/(1-PRIOR));
  const ruleIn=[]; let yel=0, yelProt=0, strongRed=0; const redByLetter={};
  VEMMFAL.forEach(c=>c.items.forEach(it=>{
    if(!it.on||it.cand) return;
    if(it.tier===1){ ruleIn.push(it.t); return; }
    const r=vemRisk(it);
    if(r.kind==='alto'||r.kind==='mod'){
      const prev=redByLetter[c.L]||0;
      const disc = prev===0 ? 1 : 0.5;             // redundancia: 2º+ rojo de la MISMA letra ×0.5 (correlación)
      logit += r.w*disc; redByLetter[c.L]=prev+1; strongRed++;
    } else if(r.kind==='yellow'){ logit += r.w; yel++; }
    else { logit += r.w; yelProt++; }              // protector / protector fuerte (peso menor que un rojo)
  }));
  const p=1/(1+Math.exp(-logit));
  const distinct=Object.keys(redByLetter).length;
  let band,txt;
  if(ruleIn.length){ band='hi'; txt='Rule-in orgánico — descartar activamente'; }
  else if(strongRed>=2 && distinct>=2){ band='hi'; txt='≥2 red flags de distintos sistemas — organicidad probable'; }
  else if(p>=0.5){ band='hi'; txt='Probabilidad alta de organicidad'; }
  else if(strongRed>=1 || yel>=3){ band='mid'; txt='Red flag presente — descartar (no lo cancela un protector)'; } // PISO: 1 rojo → mín. moderado
  else if(p>=0.2){ band='mid'; txt='Probabilidad moderada — descartar'; }
  else { band='lo'; txt='Probabilidad baja — cuadro primario probable'; }
  return {p, pct:Math.round(p*100), ruleIn, yel, yelProt, strongRed, band, txt, prior:PRIOR};
}

/* aplica señales auto (VEM_AUTO) a los items del modelo, por texto exacto */
function applyVemAuto(){
  // señales que el shell deriva (robustas aunque la app no las dispare)
  const h=SUMMARY.historia||{};
  const idEdad=parseInt((REG.meta&&REG.meta.edad)||'',10);
  // edad de inicio: la más temprana de los períodos (Historia) → si no hay, edad de identidad
  let edadInicio = (h.edadInicio!=null) ? h.edadInicio : (isNaN(idEdad)?null:idEdad);
  if(edadInicio!=null && edadInicio>40) VEM_AUTO['Edad de inicio >40 a']=true;
  if(h.deNovo) VEM_AUTO['Síntomas de novo / 1.er episodio']=true;
  VEMMFAL.forEach(c=>c.items.forEach(it=>{
    if(it.auto && Object.prototype.hasOwnProperty.call(VEM_AUTO, it.t)){ it.on = !!VEM_AUTO[it.t]; }
  }));
}

function concienciaGateInfo(){
  const raw = SUMMARY.bmse && SUMMARY.bmse.concienciaScore;
  let cs = null;
  if(raw!==null && raw!==undefined && raw!=='NE' && raw!==''){
    const n=parseInt(raw,10);
    cs = Number.isNaN(n) ? null : n;
  }
  const deliriumAuto = !!VEM_AUTO['Delirium / fluctuación de conciencia'];
  const reduced = cs!==null && cs<=-1;
  const hyper = cs===1 || cs===2;
  const hyperConf = hyper && deliriumAuto;
  const fail = manualConciencia!==null ? manualConciencia : (reduced || hyperConf || deliriumAuto);
  return {fail, manual:manualConciencia!==null, cs, reduced, hyper, hyperConf, deliriumAuto};
}
function concienciaAlterada(){
  return concienciaGateInfo().fail;
}

function updateValidity(o){
  const cgate = concienciaGateInfo();
  const altered = cgate.fail;
  const quarantine = altered || o.ruleIn.length>0 || o.band==='hi';
  document.body.className = quarantine?'gate-fail':'gate-pass';
  const g=document.getElementById('gate');
  g.classList.toggle('fail',quarantine); g.classList.toggle('pass',!quarantine);
  if(altered){
    if(cgate.manual){
      document.getElementById('gateT').textContent='Delirium marcado manualmente — lectura transversal NO interpretable';
      document.getElementById('gateD').innerHTML='El VEMMFAL manual activó delirium/fluctuación de conciencia. Prioriza <b>delirium / causa orgánica</b>; el estado y el fenotipo quedan en cuarentena.';
    } else if(cgate.reduced){
      document.getElementById('gateT').textContent='Conciencia reducida — lectura transversal NO interpretable';
      document.getElementById('gateD').innerHTML='NC.conciencia -1/-2 indica obnubilación, estupor o coma. Descarta <b>delirium / causa orgánica</b> primero; el estado y el fenotipo quedan en cuarentena.';
    } else {
      document.getElementById('gateT').textContent='Hiperalerta/hipervigilancia confusional — lectura transversal NO interpretable';
      document.getElementById('gateD').innerHTML='NC.conciencia +1/+2 con <b>[CONF] fluctuante o desorientado</b> se interpreta como posible delirium hiperactivo. El estado y el fenotipo quedan en cuarentena.';
    }
  } else if(o.ruleIn.length){
    document.getElementById('gateT').textContent='Rule-in orgánico (VEMMFAL) — lectura transversal en cuarentena';
    document.getElementById('gateD').innerHTML='Signo duro presente ('+o.ruleIn.length+'): <b>'+o.ruleIn[0]+'</b>'+(o.ruleIn.length>1?' (+'+(o.ruleIn.length-1)+')':'')+'. Prioriza workup médico; el cuadro puede ser <b>secundario</b>.';
  } else if(o.band==='hi'){
    document.getElementById('gateT').textContent='Probabilidad de organicidad ALTA ('+o.pct+'%) — VEMMFAL';
    document.getElementById('gateD').innerHTML='Log-odds con OR de evidencia → el cuadro puede ser <b>secundario</b>. Prioriza workup médico. <i>Score heurístico, no validado.</i>';
  } else if(cgate.hyper){
    document.getElementById('gateT').textContent='Hiperalerta/hipervigilante sin confusión — lectura transversal válida';
    document.getElementById('gateD').innerHTML='NC.conciencia +1/+2 sin <b>[CONF]</b> se interpreta como hiperarousal orientado/no fluctuante. No activa cuarentena por conciencia.';
  } else {
    document.getElementById('gateT').textContent='Conciencia preservada — lectura transversal válida';
    document.getElementById('gateD').innerHTML='Vigil, orientado (NC.conciencia = 0). El estado mental y el fenotipo se interpretan a valor facial.';
  }
  document.querySelectorAll('.gtog button').forEach(b=>b.classList.toggle('on', b.dataset.gate===(altered?'fail':'pass')));
  const ab=document.getElementById('actBmse'); if(ab) ab.style.opacity=quarantine?'.55':'1';
}

function refreshAll(){
  applyVemAuto(); renderVemmfal();
  const o=computeOrganicity();
  const ptr=document.getElementById('vemPtr'); if(ptr) ptr.style.left=Math.max(3,Math.min(97, o.p*94+3))+'%';
  const vS=document.getElementById('vemScore'); if(vS) vS.textContent=o.pct+'%';
  const vV=document.getElementById('vemVerdict'); if(vV) vV.className='vem-verdict '+o.band;
  const vB=document.getElementById('vemBandTxt'); if(vB) vB.textContent=o.txt+(o.yel?(' · '+o.yel+' yellow'):'')+' · prior '+Math.round(o.prior*100)+'%';
  const vH=document.getElementById('vemHard'); if(vH){ vH.classList.toggle('on',o.ruleIn.length>0); if(o.ruleIn.length) vH.innerHTML='⚠ Rule-in orgánico: <b>'+o.ruleIn[0]+'</b>'+(o.ruleIn.length>1?' (+'+(o.ruleIn.length-1)+' más)':'')+' — workup médico inmediato, independiente del %.'; }
  const os=document.getElementById('orgScore'); if(os) os.textContent=o.pct+'%';
  const ob=document.getElementById('orgBadge'); const oba=document.getElementById('orgBand');
  const orgCard=document.getElementById('orgSquare');
  const bandClass={lo:'green',mid:'yellow',hi:'red'}[o.band]||'green';
  if(orgCard) orgCard.className='validity-card clickable '+bandClass;
  if(ob){ ob.className='vc-tag'; ob.textContent={lo:'BAJO',mid:'MODERADO',hi:'ALTO'}[o.band]; }
  if(oba) oba.textContent='· '+(o.ruleIn.length?'rule-in':o.txt.split('—')[0].split('·')[0].trim());
  renderOasRisk();
  updateValidity(o);
}

function renderAll(){ renderActs(); renderConv(); renderTimeline(); renderCuadrante(); refreshAll(); }

/* ---------- iframes: compone srcdoc en runtime ---------- */
function composeSrcdoc(appId){
  const seedScript = '<script>window.__APP_ID__='+JSON.stringify(appId)+';window.__SEED__='+JSON.stringify(REG.ls||{})+';window.__IDENTITY__='+JSON.stringify(REG.meta||{})+';<\\/script>';
  return APP_HTML[appId].replace('<!--JAFLO_SEED-->', function(){ return seedScript; });
}
function requestFrom(appId){
  const f=document.querySelector('iframe[data-app="'+appId+'"]'); if(!f||!f.contentWindow) return;
  try { f.contentWindow.postMessage({type:'JAFLO_GET_SUMMARY'}, '*'); f.contentWindow.postMessage({type:'JAFLO_GET_VEMMFAL'}, '*'); } catch(e){}
}
function requestAll(){ document.querySelectorAll('iframe[data-app]').forEach(f=>requestFrom(f.dataset.app)); }

/* ---------- mensajes de los iframes ---------- */
window.addEventListener('message', e=>{
  const d=e.data||{};
  if(d.type==='JAFLO_SUMMARY'){ if(d.app && APP2SUM[d.app]){ SUMMARY[APP2SUM[d.app]]=Object.assign(SUMMARY[APP2SUM[d.app]]||{}, d.payload||{}); renderActs(); renderConv(); renderTimeline(); renderCuadrante(); refreshAll(); } }
  else if(d.type==='JAFLO_VEMMFAL'){ Object.assign(VEM_AUTO, d.payload||{}); refreshAll(); }
  else if(d.type==='JAFLO_CHARTS'){ const c=d.payload||{};
    injectPhenoPanel('phenoChips', c.css, c.pheno);
    injectChart('rdocChart', c.css, c.rdoc, 'RDoC');
    const f3='.dash-forbes div:has(> .hitop-group){display:flex !important;flex-wrap:wrap !important;gap:8px !important;align-items:flex-start} .dash-forbes .hitop-group{flex:1 1 46% !important;min-width:0 !important;max-width:none !important} .dash-forbes .hitop-group-head{white-space:normal}';
    injectChart('hitopChart', c.css, c.forbes, 'HiTOP', f3);
  }
  else if(d.type==='JAFLO_LS'){
    REG.ls=REG.ls||{};
    if(d.key!=null){ REG.ls[d.key]=d.value; saveReg(); }
    if(d.app){
      requestFrom(d.app);
      if(d.app==='exposoma') setTimeout(()=>requestFrom('exposoma'),120);
    }
  }
  else if(d.type==='JAFLO_CHANGED'){ if(d.app){ requestFrom(d.app); if(d.app==='bmse') setTimeout(requestCharts,400); if(d.app==='exposoma') renderExpoBlocks(); } }
  else if(d.type==='JAFLO_READY'){ if(d.app){ const f=document.querySelector('iframe[data-app="'+d.app+'"]'); if(f&&f.contentWindow){ try{f.contentWindow.postMessage({type:'JAFLO_IDENTITY',payload:REG.meta},'*');}catch(x){} } requestFrom(d.app); if(d.app==='bmse') setTimeout(requestCharts,900); } }
});

/* ---------- tabs + carga perezosa de iframes ---------- */
function show(v){
  document.querySelectorAll('.view').forEach(s=>s.classList.toggle('active',s.dataset.view===v));
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.v===v));
  const box=document.querySelector('.view[data-view="'+v+'"] .frame-box');
  if(box && box.dataset.app && !box.dataset.loaded){ box.dataset.loaded='1';
    const appId=box.dataset.app;
    const f=document.createElement('iframe'); f.title=v; f.setAttribute('data-app',appId);
    f.srcdoc=composeSrcdoc(appId);
    box.innerHTML=''; box.appendChild(f);
  }
  if(v==='integrado'){
    requestAll();
    setTimeout(requestAll,250);
    fitInjectedCharts();
    requestCharts();
    setTimeout(fitInjectedCharts,120);
    setTimeout(fitInjectedCharts,700);
  }
  window.scrollTo({top:0,behavior:'smooth'});
}
document.getElementById('tabs').addEventListener('click',e=>{const t=e.target.closest('.tab'); if(t) show(t.dataset.v);});
document.addEventListener('click',e=>{
  const go=e.target.closest('[data-go]'); if(go){ e.preventDefault(); show(go.dataset.go); return; }
  const gt=e.target.closest('[data-gate]'); if(gt){ manualConciencia=(gt.dataset.gate==='fail'); refreshAll(); return; }
  const col=e.target.closest('[data-collap]'); if(col){ col.parentElement.classList.toggle('open'); return; }
  const vg=e.target.closest('[data-vgate]'); if(vg){ vg.classList.toggle('on'); return; }
  const vi=e.target.closest('.vitem'); if(vi && !vi.dataset.cand){
    const it=VEMMFAL[+vi.dataset.ci].items[+vi.dataset.ii]; it.on=!it.on;
    if(it.t==='Delirium / fluctuación de conciencia') manualConciencia=it.on;
    refreshAll(); return;
  }
});

/* carga las 4 apps (iframes ocultos) para que el maestro sintetice TODO sin visitar cada tab */
function bootAllApps(){
  Object.keys(APP_VIEWS).forEach(appId=>{
    const view=APP_VIEWS[appId];
    const box=document.querySelector('.view[data-view="'+view+'"] .frame-box');
    if(box && box.dataset.app && !box.dataset.loaded){ box.dataset.loaded='1';
      const f=document.createElement('iframe'); f.title=view; f.setAttribute('data-app',appId);
      f.srcdoc=composeSrcdoc(appId); box.innerHTML=''; box.appendChild(f);
    }
  });
}

/* ---------- boot ---------- */
renderPacForm();   // ventana 1 + hidratación + listeners + tira de header
renderAll();
setTimeout(bootAllApps, 60);   // sintetiza el maestro desde el arranque (todas las apps reportan)
`;

/* ---- transforma el show-me en el archivo de producción ---- */
let html = read(SHOWME);

// 1) frame-box: data-src -> data-app
Object.keys(APP).forEach(id => {
  const src = '../' + APP[id].file;
  const re = new RegExp('<div class="frame-box" data-src="' + escRe(src) + '">[\\s\\S]*?</div>');
  if (!re.test(html)) throw new Error('no encontré frame-box para ' + id);
  html = html.replace(re, '<div class="frame-box" data-app="' + id + '"><div class="frame-skel">cargando app…</div></div>');
});

// 1b) ventana 1 «Datos generales»: CSS + header read-only + tab + vista
const must = (cond, msg) => { if (!cond) throw new Error('transform falló: ' + msg); };
const EXTRA_CSS = `
.idstrip{appearance:none;cursor:pointer;background:var(--surface);border:1px solid var(--border-strong);color:var(--text-muted);border-radius:8px;padding:7px 13px;font-family:var(--sans);font-size:13px;transition:.18s}
.idstrip:hover{border-color:var(--azul);color:var(--azul-light)}
.idstrip b{color:var(--text);font-weight:600}
.pac-wrap{display:flex;flex-direction:column;gap:20px;margin-top:4px}
.pac-grp h3{font-size:12px;color:var(--azul-light);font-family:var(--sans);font-weight:600;letter-spacing:.6px;text-transform:uppercase;margin:0 0 11px}
.pac-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:13px}
.pac-f{display:flex;flex-direction:column;gap:5px}
.pac-f label{font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--text-subtle)}
.pac-f .der{color:var(--teal-bright);font-size:9px;margin-left:5px;letter-spacing:.3px;text-transform:none}
.pac-f input,.pac-f select{background:var(--surface);border:1px solid var(--border-strong);color:var(--text);border-radius:9px;padding:9px 11px;font-family:var(--sans);font-size:14px}
.pac-f input:focus,.pac-f select:focus{outline:none;border-color:var(--azul)}
.pac-nuevo{margin-left:auto;appearance:none;cursor:pointer;background:transparent;border:1px solid var(--teal);color:var(--teal-bright);border-radius:20px;padding:6px 13px;font-family:var(--sans);font-size:12px;transition:.18s}
.pac-nuevo:hover{background:rgba(110,155,143,.12)}
.pac-casesel{appearance:none;cursor:pointer;max-width:300px;background:transparent;border:1px solid var(--azul);color:var(--azul-light);border-radius:20px;padding:6px 28px 6px 13px;font-family:var(--sans);font-size:12px;transition:.18s;background-image:linear-gradient(45deg,transparent 50%,var(--azul-light) 50%),linear-gradient(135deg,var(--azul-light) 50%,transparent 50%);background-position:calc(100% - 14px) 12px,calc(100% - 9px) 12px;background-size:5px 5px,5px 5px;background-repeat:no-repeat}
.pac-casesel:hover{background-color:rgba(110,143,200,.10)}
.pac-casesel option,.pac-casesel optgroup{background:var(--surface);color:var(--text)}
.pac-clear{appearance:none;cursor:pointer;background:transparent;border:1px solid var(--border-strong);color:var(--text-muted);border-radius:20px;padding:6px 13px;font-family:var(--sans);font-size:12px;transition:.18s}
.pac-clear:hover{border-color:var(--red);color:#f0a59f;background:rgba(210,64,58,.08)}
.vitem .vw.yel{color:var(--orange);background:rgba(224,123,30,.14)}
.orgsq-row{display:flex;align-items:center;gap:14px;margin-top:12px;flex-wrap:wrap}
.orgsq{appearance:none;cursor:pointer;flex:0 0 auto;width:112px;height:112px;border-radius:16px;border:1px solid var(--border-strong);background:var(--surface-raised);color:var(--text);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;transition:.18s}
.orgsq:hover{border-color:var(--azul);transform:translateY(-2px)}
.orgsq .oq-lab{font-size:8px;letter-spacing:.6px;text-transform:uppercase;color:var(--text-subtle);text-align:center}
.orgsq .oq-val{font-family:var(--serif);font-size:36px;line-height:1;color:var(--azul-light)}
.orgsq .oq-band{font-size:9.5px;font-weight:600;padding:2px 9px;border-radius:10px}
.orgsq-note{font-size:12.5px;color:var(--text-muted);flex:1;min-width:160px}
.cuad-wrap{margin-top:4px}
/* dashboard integrado compacto */
.view[data-view="integrado"] .panel{padding:13px 16px;margin-bottom:13px}
.view[data-view="integrado"] .panel-h h2{font-size:16px}
.view[data-view="integrado"] .panel-h{margin-bottom:8px}
.view[data-view="integrado"] svg.timeline{min-width:0;height:160px}
.view[data-view="integrado"] .gate{padding:11px 13px;gap:11px}
.view[data-view="integrado"] .gate .light{width:32px;height:32px}
.view[data-view="integrado"] .gate .gtxt .t{font-size:15px}
.view[data-view="integrado"] .orgsq{width:96px;height:96px}
.view[data-view="integrado"] .orgsq .oq-val{font-size:30px}
.view[data-view="integrado"] .detgrid{gap:14px}
.dash-2{display:grid;grid-template-columns:1fr 1fr;gap:13px;align-items:stretch;margin-bottom:13px}
.dash-2 .panel{margin-bottom:0}
@media(max-width:880px){.dash-2{grid-template-columns:1fr}}
.conv2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.conv2 .cv{margin:0}
@media(max-width:880px){.conv2{grid-template-columns:1fr}}
.dash-73{display:grid;grid-template-columns:7fr 3fr;gap:13px;align-items:stretch;margin-bottom:13px}
.dash-73 .panel{margin-bottom:0}
@media(max-width:880px){.dash-73{grid-template-columns:1fr}}
.detgrid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media(max-width:560px){.detgrid2{grid-template-columns:1fr}}
.integrated-pheno{margin:12px 0 16px;min-height:74px}
.integrated-pheno iframe{width:100%;border:none;background:#1a140d;display:block;border-radius:14px}
.integrated-pheno .pheno-loading{display:flex;align-items:center;gap:10px;min-height:58px;border:1px solid var(--border);border-radius:14px;background:linear-gradient(145deg,var(--surface-raised),var(--bg));padding:12px 16px;color:var(--text-muted);font-size:12px}
.integrated-pheno .pheno-loading b{font-family:var(--serif);font-size:22px;font-weight:400;color:var(--text)}
.integrated-pheno .pheno-loading span{overflow:visible;text-overflow:clip;white-space:normal;line-height:1.25}
.cblocks{display:grid;grid-template-columns:minmax(150px,0.85fr) 1fr 1.35fr;gap:14px;margin-top:12px;align-items:start}
@media(max-width:900px){.cblocks{grid-template-columns:1fr 1fr}}
@media(max-width:620px){.cblocks{grid-template-columns:1fr}}
.cb{min-width:0}
.cb1{display:flex;flex-direction:column;gap:8px}
.cb-h{font-size:9.5px;letter-spacing:.8px;text-transform:uppercase;color:var(--azul);font-weight:600;margin-bottom:6px}
.exb-row{display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px}
.exb-row b{color:var(--text);font-weight:600}.exb-row span{color:var(--text-muted)}
.exb-h{font-size:9px;letter-spacing:.6px;text-transform:uppercase;color:var(--text-subtle);font-weight:600;margin-bottom:4px}
.exbar{display:flex;align-items:center;gap:7px;font-size:11px;padding:2px 0}
.exbar .exl{flex:0 0 88px;color:var(--text-muted);white-space:normal;overflow:visible;text-overflow:clip;line-height:1.12}
.exbar .extrack{flex:1;height:6px;border-radius:4px;background:var(--border);overflow:hidden}
.exbar .extrack i{display:block;height:100%;border-radius:4px}
.exbar .exn{flex:0 0 auto;min-width:26px;text-align:right;color:var(--text-subtle);font-size:10px}
`;
must(html.indexOf('</style>') >= 0, 'no </style>');
html = html.replace('</style>', EXTRA_CSS + '</style>');

const before_h = html;
html = html.replace(/<div class="idbar" id="idbar">[\s\S]*?<\/header>/,
  '<div class="idbar" id="idbar"><button class="idstrip" data-go="paciente" id="idStrip" title="Editar datos generales">Sin paciente · clic para datos generales</button></div>\n    </div>\n  </header>');
must(html !== before_h, 'idbar no reemplazado');

const before_t = html;
// Paciente toma el primer lugar; Integrado se mueve al final (tras VEMMFAL)
html = html.replace('<button class="tab active" data-v="integrado">Integrado</button>',
  '<button class="tab active" data-v="paciente"><span class="n">⊕</span>Paciente</button>');
must(html !== before_t, 'tab Paciente no insertado');
const before_v = html;
html = html.replace('<button class="tab" data-v="vemmfal"><span class="n">◬</span>VEMMFAL</button>',
  '<button class="tab" data-v="vemmfal"><span class="n">◬</span>VEMMFAL</button>\n    <button class="tab" data-v="integrado">Integrado</button>');
must(html !== before_v, 'tab Integrado no movido tras VEMMFAL');

must(html.indexOf('<section class="view active" data-view="integrado">') >= 0, 'no integrado view');
html = html.replace('<section class="view active" data-view="integrado">', '<section class="view" data-view="integrado">');
html = html.replace('<main class="wrap">',
  '<main class="wrap">\n\n  <section class="view active" data-view="paciente">\n    <div class="panel">\n      <div class="panel-h"><h2>Datos generales del paciente</h2><span class="tag">captura única · alimenta las 4 apps</span><button class="pac-nuevo" id="btnNuevo" title="Limpia todo y empieza con otro paciente (evita arrastrar datos)">✦ Nuevo paciente</button><select class="pac-casesel" id="caseSelect" title="Cargar uno de los 100 casos de stress-test (CIE-11/DSM-5-TR)"></select><button class="pac-clear" id="btnClear" title="Borra identidad + las 4 apps y reinicia">⌫ Borrar todo</button></div>\n      <p class="lead">Se captura una sola vez aquí y se propaga a Exposoma, Funcionamiento, Historia y pMSE. Los campos con ↘ derivan ítems de scoring del exposoma.</p>\n      <div class="pac-wrap" id="pacForm"></div>\n    </div>\n  </section>\n');

// 2) banner show-me -> producción
html = html.replace(/<b>SHOW-ME · preview de estructura\.<\/b>[\s\S]*?Prueba el toggle de <b>Conciencia<\/b> ↓ para ver la compuerta de validez en acción\./,
  '<b>PRODUCCIÓN v1.</b> Las 4 apps cargan inlineadas (archivo único). El maestro sintetiza en vivo lo que captures: cada pestaña empuja sus métricas vía <code>JAFLO_SUMMARY()</code>. Identidad capturada arriba se propaga a las 4. Empieza llenando una pestaña y vuelve aquí.');
html = html.replace('show-me v0.1 · datos [SIMULADO]', 'producción v1 · datos en vivo')
           .replace('Intake Unificado · show-me v0.1', 'Intake Unificado · producción v1');

// 3) reemplaza el <script> boot por el runtime de producción (+ consts de apps)
let appConstJson = JSON.stringify(APP_HTML).replace(/<\//g, '<\\/');   // evita cierre prematuro de </script>
const prod = '<script>\nconst APP_HTML=' + appConstJson + ';\n' + RUNTIME + '\n</' + 'script>\n</body>';
const reScript = /<script>[\s\S]*?<\/script>\s*<\/body>/;
if (!reScript.test(html)) throw new Error('no encontré el bloque <script> boot del show-me');
html = html.replace(reScript, () => prod);  // función: no interpreta $ del JSON de apps

fs.writeFileSync(OUT, html);
const mb = (Buffer.byteLength(html) / 1048576).toFixed(2);
console.log('OK -> ' + OUT);
console.log('   tamaño: ' + mb + ' MB · apps inlineadas: ' + Object.keys(APP_HTML).join(', '));
