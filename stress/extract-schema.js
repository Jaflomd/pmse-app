const path=require('path'); const fs=require('fs'); const puppeteer=require('puppeteer-core');
const ROOT=path.resolve(__dirname,'..','..');
const CHROME='/Users/javierflorescohaila/.cache/puppeteer/chrome/mac_arm-147.0.7727.57/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
const APPS={
  exposoma:'exp-book/exposome-app/exposome-scorer.html',
  functioning:'exp-book/exposome_functioning/exposome_functioning_app.html',
  exp_hist:'exp-book/exp_hist/exp-hist-app.html',
  bmse:'book-bmse/proposal/pmse-scorer-fenotipos.html',
};
(async()=>{
  const b=await puppeteer.launch({executablePath:CHROME,headless:'new',args:['--no-sandbox','--allow-file-access-from-files','--disable-web-security']});
  const out={};
  // EXPOSOMA
  let p=await b.newPage(); await p.goto('file://'+path.join(ROOT,APPS.exposoma),{waitUntil:'load'}); await new Promise(r=>setTimeout(r,600));
  out.exposoma=await p.evaluate(()=>{
    const r={};
    try{ r.items=ITEMS.map(it=>({id:it.id,w:it.weight,dir:it.direction})); }catch(e){ r.itemsErr=String(e); }
    try{ r.aceDims=Object.fromEntries(Object.keys(ACE_DIMS).map(k=>[k,ACE_DIMS[k].ids])); }catch(e){}
    try{ r.outcomeOrder=OUTCOME_ORDER; }catch(e){}
    try{ r.pid5=PID5.map(d=>({dom:d.dom,ids:d.ids})); }catch(e){}
    return r;
  }); await p.close();
  // FUNCTIONING
  p=await b.newPage(); await p.goto('file://'+path.join(ROOT,APPS.functioning),{waitUntil:'load'}); await new Promise(r=>setTimeout(r,600));
  out.functioning=await p.evaluate(()=>{
    const r={};
    try{ r.axes=AXES.map(a=>({id:a.id,title:a.title})); }catch(e){ r.axesErr=String(e); }
    try{ r.stages=STAGES.map(s=>({id:s.id,lo:s.lo,hi:s.hi})); }catch(e){ try{ r.stages=Object.keys(window).filter(k=>/stage/i.test(k)); }catch(_){}}
    // applicability function?
    try{ r.applicSample={}; STAGES.forEach(s=>{ r.applicSample[s.id]=AXES.map(a=>{ try{return applicOf(a,s.id);}catch(e){return '?';} }); }); }catch(e){}
    return r;
  }); await p.close();
  // EXP_HIST
  p=await b.newPage(); await p.goto('file://'+path.join(ROOT,APPS.exp_hist),{waitUntil:'load'}); await new Promise(r=>setTimeout(r,600));
  out.exp_hist=await p.evaluate(()=>{
    const r={globals:[]};
    for(const k in window){ try{ const v=window[k]; if(v&&typeof v==='object'&&!Array.isArray(v)&&k.length<24&&/single|field|opt|cri|multi|SINGLE|OPT/.test(k)) r.globals.push(k);}catch(e){} }
    try{ r.stateKeys=Object.keys(state||{}); }catch(e){}
    return r;
  }); await p.close();
  // BMSE
  p=await b.newPage(); await p.goto('file://'+path.join(ROOT,APPS.bmse),{waitUntil:'load'}); await new Promise(r=>setTimeout(r,800));
  out.bmse=await p.evaluate(()=>{
    const r={};
    try{ r.phenoDims=PHENO.dims; }catch(e){ r.phenoDimsErr=String(e); }
    // intenta encontrar el array de items (id + escala)
    try{ if(typeof ITEMS!=='undefined'&&Array.isArray(ITEMS)) r.items=ITEMS.map(it=>({id:it.id,scale:it.scale||it.type||it.scores||null})); }catch(e){}
    try{ r.itemGlobals=Object.keys(window).filter(k=>/ITEM|item|EXT|DOMAIN|domain/.test(k)&&k.length<22); }catch(e){}
    return r;
  }); await p.close();
  await b.close();
  fs.writeFileSync(path.join(__dirname,'schema.json'),JSON.stringify(out,null,1));
  console.log('exposoma items:',out.exposoma.items?out.exposoma.items.length:out.exposoma.itemsErr);
  console.log('  ACE_DIMS:',JSON.stringify(out.exposoma.aceDims));
  console.log('  OUTCOME_ORDER:',JSON.stringify(out.exposoma.outcomeOrder));
  console.log('functioning axes:',JSON.stringify(out.functioning.axes));
  console.log('  stages:',JSON.stringify(out.functioning.stages));
  console.log('  applic s26_44:',out.functioning.applicSample?JSON.stringify(out.functioning.applicSample.s26_44):'n/a');
  console.log('exp_hist globals:',JSON.stringify(out.exp_hist.globals));
  console.log('bmse phenoDims:',out.bmse.phenoDims?out.bmse.phenoDims.length:out.bmse.phenoDimsErr);
  console.log('  bmse items:',out.bmse.items?out.bmse.items.length:'(no ITEMS array)','| itemGlobals:',JSON.stringify(out.bmse.itemGlobals));
})().catch(e=>{console.error(e);process.exit(1);});
