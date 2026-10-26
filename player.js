(async()=>{
const $=id=>document.getElementById(id);const q=new URLSearchParams(location.search);const id=q.get('id');const shell=$('shell');let romURL=null;let started=false;let ready=false;const logs=[];
function log(message){logs.push(new Date().toLocaleTimeString()+' '+message);$('diagnostics').textContent=logs.join('\n')}
function state(message,bad=false){$('status').textContent=message;$('led').className=bad?'bad':ready?'ok':'';log(message)}
function error(message){$('error').textContent=message;state('Unable to start emulator',true);$('retry').hidden=false;$('startup').hidden=false;$('boot').textContent='↻ Retry emulator';started=false}
function mode(v){shell.classList.toggle('full',v==='full');$('auth').classList.toggle('active',v!=='full');$('full').classList.toggle('active',v==='full');localStorage.setItem('aiyou-mode',v)}
$('auth').onclick=()=>mode('auth');$('full').onclick=()=>mode('full');mode(localStorage.getItem('aiyou-mode')||'auth');
$('audio').onclick=()=>alert('For iPhone audio: tap Start game + sound, then use the emulator toolbar volume control. If silent, check Silent Mode, media volume, and Safari audio permissions.');
try{
 const g=await dbGet(id);if(!g)throw Error('Game not found in local storage. Return to Library and import it again.');
 const core={gb:'gb',gbc:'gb',gba:'gba',nds:'nds'}[g.ext];if(!core)throw Error('Unsupported file extension.');
 $('game-title').textContent=g.name;$('platform').textContent={gb:'GAME BOY',gbc:'GAME BOY COLOR',gba:'GAME BOY ADVANCE',nds:'NINTENDO DS'}[g.ext];$('console-label').textContent=$('platform').textContent;shell.classList.add(g.ext);
 const bytes=g.bytes;if(!bytes || !bytes.byteLength)throw Error('Imported ROM is empty. Reimport your file.');
 romURL=URL.createObjectURL(new Blob([bytes],{type:'application/octet-stream'}));
 log('ROM: '+g.name+' ('+bytes.byteLength+' bytes); core: '+core);
 window.EJS_player='#game';window.EJS_core=core;window.EJS_gameUrl=romURL;window.EJS_gameName=g.name.replace(/\.[^.]+$/,'');window.EJS_gameID=g.id;
 window.EJS_pathtodata='https://cdn.emulatorjs.org/stable/data/';window.EJS_startOnLoaded=true;window.EJS_volume=0.8;window.EJS_color='#7de8c4';window.EJS_backgroundColor='#090d18';
 window.EJS_ready=()=>{ready=true;state('Emulator engine ready. If a Play button appears, tap it.');$('startup').hidden=true};
 window.EJS_onGameStart=()=>{ready=true;state('Game running. Check sound and make an in-game save.');$('startup').hidden=true};
 function start(){if(started)return;started=true;$('error').textContent='';$('retry').hidden=true;$('boot').disabled=true;$('boot').textContent='Loading engine…';state('Downloading EmulatorJS engine…');
 const script=document.createElement('script');script.src=window.EJS_pathtodata+'loader.js';script.onerror=()=>{script.remove();$('boot').disabled=false;error('Could not download EmulatorJS loader. Check connectivity, content blockers or CDN availability.')};
 script.onload=()=>{state('Loader received. Initialising emulator core…');$('startup').hidden=true};document.body.append(script);
 setTimeout(()=>{if(!ready){log('No ready callback after 20 seconds. Inspect screen and diagnostics.');$('retry').hidden=false;$('boot').disabled=false}},20000);
 }
 $('boot').onclick=start;$('retry').onclick=()=>location.reload();state('ROM imported. Tap Start game + sound.');
}catch(e){error(e.message||String(e))}
})();
