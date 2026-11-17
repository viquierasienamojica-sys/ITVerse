(async()=>{'use strict';
const SESSION='ITVerse_demo_session_v1';
const icon=(p)=>'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>';
const icons={profile:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bookmarks:'<path d="M6 4h12v17l-6-4-6 4z"/>',notes:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',history:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',logout:'<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',login:'<path d="m14 7 5 5-5 5M19 12H8"/><path d="M12 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/>'};
const $=id=>document.getElementById(id),root=$('itProfile');if(!root)return;
const trigger=$('itProfileTrigger'),menu=$('itProfileMenu'),overlay=$('itProfileOverlay'),content=$('itProfileDialogContent'),title=$('itProfileDialogTitle'),close=$('itProfileClose');
const account=await window.ITVerseAccount();
const student=account?.profile?{name:account.profile.full_name,number:account.profile.student_number,email:account.profile.email}:null;
const guest=!student;
const loginAction=menu.querySelector('[data-profile-action="logout"]');
if(guest){
 menu.querySelectorAll('[data-profile-action]').forEach(b=>{if(b!==loginAction)b.hidden=true});
 if(loginAction){loginAction.innerHTML='<span aria-hidden="true">⇥</span> Login / Sign Up';loginAction.dataset.profileAction='login';}
}
menu.querySelectorAll('[data-profile-action]').forEach(btn=>{const name=btn.dataset.profileAction;if(!icons[name])return;const span=btn.querySelector('span[aria-hidden]')||document.createElement('span');span.setAttribute('aria-hidden','true');span.className='itv-menu-icon';span.innerHTML=icon(icons[name]);if(!span.parentNode)btn.prepend(span)});
const avatarKey='ITVerse_demo_avatar_'+(student?.email||'');
let avatar=account?.profile?.avatar_url||null;
if(avatar&&(/^https:\/\//.test(avatar)||/^data:image\/(?:png|jpeg|webp);base64,/.test(avatar))){
 const accountAvatar=menu.querySelector('.it-profile-avatar');
 if(accountAvatar){accountAvatar.textContent='';const img=document.createElement('img');img.src=avatar;img.alt='Student profile picture';img.className='itv-profile-avatar-img';accountAvatar.append(img)}
 const triggerIcon=trigger.querySelector('svg');if(triggerIcon){const img=document.createElement('img');img.src=avatar;img.alt='';img.className='itv-trigger-avatar';triggerIcon.replaceWith(img)}
}
// Choice H: decorate the existing account header without changing menu actions.
const accountHeader=menu.querySelector('.it-profile-account');
if(accountHeader)accountHeader.classList.add('itv-choice-h-banner');
root.classList.add('itv-choice-h');
const extraCss=document.createElement('link');extraCss.rel='stylesheet';extraCss.href='css/itverse-profile-update.css';document.head.append(extraCss);
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
async function show(action){
 if(action==='login'){location.href='login.html';return}
 if(action==='logout'){await window.ITVerseDB.auth.signOut();location.href='index.html';return}
 if(guest){location.href='login.html';return}
 if(action==='profile'){location.href='profile.html';return}
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
