/* Browser-only school demo. PBKDF2 prevents plaintext storage, NOT F12 tampering. */
(async function(){
'use strict';
const USERS='ITVerse_demo_students_v1', SESSION='ITVerse_demo_session_v1';
const $=id=>document.getElementById(id);
const readUsers=()=>{try{const v=JSON.parse(localStorage.getItem(USERS)||'[]');return Array.isArray(v)?v:[]}catch{return []}};
const msg=(s,ok=false)=>{const e=$('message');if(e){e.textContent=s;e.className='message'+(ok?' ok':'')}};
const normalize=s=>String(s||'').trim().toLowerCase();
const active=()=>{try{return JSON.parse(sessionStorage.getItem(SESSION)||'null')}catch{return null}};
const bytes=a=>Array.from(a).map(x=>x.toString(16).padStart(2,'0')).join('');
const fromHex=h=>new Uint8Array(h.match(/../g).map(x=>parseInt(x,16)));
async function derive(password,salt){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);return bytes(new Uint8Array(await crypto.subtle.deriveBits({name:'PBKDF2',salt,iterations:210000,hash:'SHA-256'},key,256)))}
async function makeHash(password){const salt=crypto.getRandomValues(new Uint8Array(16));return {salt:bytes(salt),hash:await derive(password,salt)}}
function secureAvailable(){if(!crypto?.subtle){msg('Secure browser context required. Open with HTTPS or localhost (Live Server).');return false}return true}
const strong=p=>p.length>=8&&/[A-Z]/.test(p)&&/[a-z]/.test(p)&&/[0-9]/.test(p)&&/[^A-Za-z0-9]/.test(p);
if(document.body.dataset.page==='signup'){
const student=$('studentNumber');student.addEventListener('input',()=>{student.value=student.value.replace(/\D/g,'')});
$('signupForm').addEventListener('submit',async e=>{e.preventDefault();if(!secureAvailable())return;
const name=$('fullName').value.trim(),number=student.value.trim(),email=normalize($('email').value),password=$('password').value,confirm=$('confirmPassword').value;
if(!name||!/^\d+$/.test(number)||!email){msg('Complete all fields. Student number must contain digits only.');return}
if(!strong(password)){msg('Password needs 8+ characters, uppercase, lowercase, number, and special character.');return}
if(password!==confirm){msg('Passwords do not match.');return}
const users=readUsers();if(users.some(u=>u.email===email)){msg('Email already registered in this browser.');return}if(users.some(u=>u.number===number)){msg('Student number already registered in this browser.');return}
try{const hashed=await makeHash(password);users.push({name,number,email,...hashed});localStorage.setItem(USERS,JSON.stringify(users));msg('Account created! Redirecting to login...',true);setTimeout(()=>location.replace('login.html'),900)}catch{msg('Unable to save account. Please retry on HTTPS or localhost.')}
});}
if(document.body.dataset.page==='login'){
if(active())location.replace('index.html');
$('loginForm').addEventListener('submit',async e=>{e.preventDefault();if(!secureAvailable())return;
const email=normalize($('email').value),password=$('password').value,users=readUsers(),u=users.find(x=>x.email===email);
if(!u){msg('Incorrect email or password.');return}
let ok=false;try{if(u.salt&&u.hash)ok=(await derive(password,fromHex(u.salt)))===u.hash;else if(typeof u.password==='string')ok=u.password===password}catch{}
if(!ok){msg('Incorrect email or password.');return}
// Migrate old demo plaintext accounts after successful login.
if(typeof u.password==='string'){const hashed=await makeHash(password);delete u.password;Object.assign(u,hashed);localStorage.setItem(USERS,JSON.stringify(users))}
sessionStorage.setItem(SESSION,JSON.stringify({name:u.name,number:u.number,email:u.email}));location.replace('index.html');
});}
if(document.body.dataset.page==='dashboard'){const u=active();if(!u){location.replace('login.html');return}if($('studentName'))$('studentName').textContent=u.name;if($('studentNumber'))$('studentNumber').textContent=u.number;if($('logout'))$('logout').addEventListener('click',()=>{sessionStorage.removeItem(SESSION);location.replace('login.html')})}
})();
