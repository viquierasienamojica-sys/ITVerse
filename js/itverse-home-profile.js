(()=>{'use strict';
const SESSION='ITVerse_demo_session_v1';
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
function show(action){
 if(action==='login'){location.href='login.html';return}
 if(action==='logout'){sessionStorage.removeItem(SESSION);location.href='index.html';return}
 if(guest){location.href='login.html';return}
 const headings={profile:'My Profile',bookmarks:'Bookmarks',notes:'My Notes',history:'Reading History'};open(headings[action]||'Student Account');
 if(action==='profile'){
  if(!student){empty('No student is currently logged in.');const a=el('a','Go to Login');a.href='login.html';content.append(a);return}
  [['Full Name',student.name],['Student Number',student.number],['Email',student.email]].forEach(([k,v])=>{const box=el('div',undefined,'it-profile-record');box.append(el('small',k),el('strong',v||'—'));content.append(box)});return;
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
