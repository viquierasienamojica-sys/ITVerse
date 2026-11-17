(()=>{'use strict';
const SESSION='ITVerse_demo_session_v1', USERS='ITVerse_demo_students_v1';
const css=document.createElement('link');css.rel='stylesheet';css.href='css/itverse-profile-update.css';document.head.append(css);
const iconPaths={
 profile:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 bookmarks:'<path d="M6 4h12v17l-6-4-6 4z"/>',
 notes:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
 history:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 logout:'<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
 login:'<path d="m14 7 5 5-5 5M19 12H8"/><path d="M12 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/>'
};
const svg=(paths)=>'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths+'</svg>';

const $=id=>document.getElementById(id),root=$('itProfile');if(!root)return;
const trigger=$('itProfileTrigger'),menu=$('itProfileMenu'),overlay=$('itProfileOverlay'),content=$('itProfileDialogContent'),title=$('itProfileDialogTitle'),close=$('itProfileClose');
let student=null;try{student=JSON.parse(sessionStorage.getItem(SESSION)||'null')}catch{}
// The homepage is public; profile actions require a valid demo session.
let registered=[];try{registered=JSON.parse(localStorage.getItem('ITVerse_demo_students_v1')||'[]')}catch{}
if(!student || !Array.isArray(registered) || !registered.some(u=>u.email===student.email&&u.number===student.number)) student=null;
const guest=!student;
const loginAction=menu.querySelector('[data-profile-action="logout"]');
if(guest){
 menu.querySelectorAll('[data-profile-action]').forEach(b=>{if(b!==loginAction)b.hidden=true});
 if(loginAction){loginAction.innerHTML='<span aria-hidden="true">⇥</span> Login / Sign Up';loginAction.dataset.profileAction='login';}
}
menu.querySelectorAll('[data-profile-action]').forEach(btn=>{
 const action=btn.dataset.profileAction, icon=iconPaths[action];
 if(!icon)return;
 const span=btn.querySelector('span[aria-hidden]')||document.createElement('span');
 span.setAttribute('aria-hidden','true');span.className='itv-menu-icon';span.innerHTML=svg(icon);
 if(!span.parentNode)btn.prepend(span);
});
const user=student?.email||'guest';
const read=(name,fallback)=>{try{return JSON.parse(localStorage.getItem('itverse_'+name+'_'+user)||'null')??fallback}catch{return fallback}};
$('itProfileName').textContent=student?.name||'Guest Student';
$('itProfileSubtitle').textContent=student?.number?'Student No. '+student.number:'ITVerse Student';
const toggle=on=>{menu.hidden=!on;trigger.setAttribute('aria-expanded',String(on))};
trigger.addEventListener('click',()=>toggle(menu.hidden));
document.addEventListener('click',e=>{if(!root.contains(e.target))toggle(false)});
const hide=()=>{overlay.hidden=true;document.body.style.overflow='';trigger.focus()};
close.onclick=hide;overlay.addEventListener('click',e=>{if(e.target===overlay)hide()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!overlay.hidden)hide();else toggle(false)}});
const el=(tag,txt,cls)=>{const n=document.createElement(tag);if(txt!==undefined)n.textContent=txt;if(cls)n.className=cls;return n};
const open=(heading)=>{title.textContent=heading;content.replaceChildren();overlay.hidden=false;document.body.style.overflow='hidden'};
const empty=txt=>content.append(el('p',txt,'it-profile-empty'));
const validFile=f=>/^book-[a-z0-9-]+\.html$/i.test(f||'');
const bookLink=(file,page,label)=>{if(!validFile(file))return null;const a=el('a',label);a.href=file+(Number.isInteger(page)&&page>=0?'#page-'+(page+1):'');a.addEventListener('click',()=>{sessionStorage.setItem('itverse_profile_jump',JSON.stringify({file,page}));});return a};
const record=(heading,desc,file,page)=>{const box=el('div',undefined,'it-profile-record');box.append(el('strong',heading),el('small',desc));const a=bookLink(file,page,'Open Book');if(a)box.append(a);content.append(box)};

const eyeOn=svg('<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>');
const eyeOff=svg('<path d="M3 3l18 18"/><path d="M10.6 5.6A11 11 0 0 1 12 5.5c6.4 0 10 6.5 10 6.5a14.4 14.4 0 0 1-3.2 3.7M6.1 6.7C3.5 8.5 2 12 2 12s3.6 6.5 10 6.5a10 10 0 0 0 4.2-.9"/><path d="M10 10a3 3 0 0 0 4 4"/>');
const bytes=a=>Array.from(a).map(x=>x.toString(16).padStart(2,'0')).join('');
const fromHex=h=>{if(typeof h!=='string'||!/^(?:[0-9a-f]{2})+$/i.test(h))throw Error('Invalid hash');return new Uint8Array(h.match(/../g).map(x=>parseInt(x,16)))};
async function derive(password,salt){
 const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);
 return bytes(new Uint8Array(await crypto.subtle.deriveBits({name:'PBKDF2',salt,iterations:210000,hash:'SHA-256'},key,256)));
}
async function makeHash(password){const salt=crypto.getRandomValues(new Uint8Array(16));return {salt:bytes(salt),hash:await derive(password,salt)}}
function renderPasswordForm(){
 const heading=el('h3','Change Password','itv-profile-heading');content.append(heading);
 const form=el('form',undefined,'itv-change-password');form.noValidate=true;
 const makeField=(id,label,auto)=>{
   const labelEl=el('label',label);labelEl.htmlFor=id;
   const wrap=el('div',undefined,'itv-password-field');
   const input=document.createElement('input');input.id=id;input.type='password';input.required=true;input.autocomplete=auto;input.placeholder=label;
   const btn=el('button',undefined,'itv-password-eye');btn.type='button';btn.setAttribute('aria-label','Show '+label.toLowerCase());btn.innerHTML=eyeOn;
   btn.addEventListener('click',()=>{const visible=input.type==='password';input.type=visible?'text':'password';btn.innerHTML=visible?eyeOff:eyeOn;btn.setAttribute('aria-label',(visible?'Hide ':'Show ')+label.toLowerCase());btn.setAttribute('aria-pressed',String(visible))});
   wrap.append(input,btn);form.append(labelEl,wrap);return input;
 };
 const current=makeField('itvCurrentPassword','Current Password','current-password');
 const next=makeField('itvNewPassword','New Password','new-password');
 const confirm=makeField('itvConfirmPassword','Confirm New Password','new-password');
 const hint=el('p','Use 8+ characters with uppercase, lowercase, number, and special character.','itv-password-hint');
 const submit=el('button','Save New Password','itv-password-save');submit.type='submit';
 const message=el('p','', 'itv-password-message');message.setAttribute('role','status');message.setAttribute('aria-live','polite');
 form.append(hint,submit,message);content.append(form);
 const report=(text,ok=false)=>{message.textContent=text;message.classList.toggle('ok',ok)};
 form.addEventListener('submit',async e=>{
   e.preventDefault();report('');
   if(!current.value||!next.value||!confirm.value){report('Please complete all password fields.');return}
   if(!crypto?.subtle){report('Use HTTPS or localhost to change your password.');return}
   if(next.value.length<8||!/[A-Z]/.test(next.value)||!/[a-z]/.test(next.value)||!/[0-9]/.test(next.value)||! /[^A-Za-z0-9]/.test(next.value)){report('New password must have 8+ characters, uppercase, lowercase, number, and special character.');return}
   if(next.value!==confirm.value){report('New passwords do not match.');return}
   submit.disabled=true;submit.textContent='Verifying...';
   try{
     const users=JSON.parse(localStorage.getItem(USERS)||'[]');
     if(!Array.isArray(users))throw Error('Invalid account data');
     const account=users.find(u=>u.email===student.email&&u.number===student.number);
     if(!account){report('Student account not found. Please log in again.');return}
     const verify=async p=>account.salt&&account.hash?(await derive(p,fromHex(account.salt)))===account.hash:typeof account.password==='string'&&account.password===p;
     if(!await verify(current.value)){report('Current password is incorrect.');return}
     if(await verify(next.value)){report('New password must be different from your current password.');return}
     const hashed=await makeHash(next.value);
     delete account.password;Object.assign(account,hashed);
     localStorage.setItem(USERS,JSON.stringify(users));
     form.reset();form.querySelectorAll('.itv-password-field').forEach(w=>{const i=w.querySelector('input'),b=w.querySelector('button');i.type='password';b.innerHTML=eyeOn;b.setAttribute('aria-pressed','false')});
     report('Password changed successfully!',true);
   }catch(err){report('Could not update your password. Please try again.')}
   finally{submit.disabled=false;submit.textContent='Save New Password'}
 });
}

function show(action){
 if(action==='login'){location.href='login.html';return}
 if(action==='logout'){sessionStorage.removeItem(SESSION);location.href='index.html';return}
 if(guest){location.href='login.html';return}
 const headings={profile:'My Profile',bookmarks:'Bookmarks',notes:'My Notes',history:'Reading History'};open(headings[action]||'Student Account');
 if(action==='profile'){
  if(!student){empty('No student is currently logged in.');const a=el('a','Go to Login');a.href='login.html';content.append(a);return}
  const heading=el('h3','Student Information','itv-profile-heading');content.append(heading);
  [['Full Name',student.name],['Student Number',student.number],['Email Address',student.email],['Account Type','Student']].forEach(([k,v])=>{const box=el('div',undefined,'it-profile-record');box.append(el('small',k),el('strong',v||'—'));content.append(box)});
  renderPasswordForm();return;
 }
 if(action==='bookmarks'){
  const marks=read('bookmarks',[]);if(!Array.isArray(marks)||!marks.length){empty('Wala ka pang saved bookmarks. Mag-bookmark muna ng page sa e-book reader.');return}
  marks.forEach(b=>record(b.title||b.file,'Page '+(Number(b.page||0)+1),b.file,Number(b.page||0)));return;
 }
 if(action==='notes'){
  const notes=read('notes',[]);if(!Array.isArray(notes)||!notes.length){empty('Wala ka pang study notes. Gumawa muna ng note habang nagbabasa ng book.');return}
  notes.forEach(n=>record(n.file+' — Page '+(Number(n.page||0)+1),n.text||'',n.file,Number(n.page||0)));return;
 }
 if(action==='history'){
  const all=Object.values(read('reading',{})).sort((a,b)=>(b.updated||0)-(a.updated||0));if(!all.length){empty('Wala pang reading history. Magbukas muna ng e-book.');return}
  all.forEach(b=>record(b.title||b.file,'Last read: Page '+(Number(b.page||0)+1)+(b.updated?' · '+new Date(b.updated).toLocaleDateString() :''),b.file,Number(b.page||0)));
 }
}
menu.querySelectorAll('[data-profile-action]').forEach(b=>b.addEventListener('click',()=>{toggle(false);show(b.dataset.profileAction)}));
})();
