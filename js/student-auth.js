/* Demo only: localStorage is not secure and is browser-specific. */
(function(){
  'use strict';
  const USERS='ITVerse_demo_students_v1';
  const SESSION='ITVerse_demo_session_v1';
  const $=id=>document.getElementById(id);
  const readUsers=()=>{try{const v=JSON.parse(localStorage.getItem(USERS)||'[]');return Array.isArray(v)?v:[]}catch{return []}};
  const message=(txt,ok=false)=>{const el=$('message');if(el){el.textContent=txt;el.className='message'+(ok?' ok':'')}};
  const normalize=s=>String(s||'').trim().toLowerCase();
  const active=()=>{try{return JSON.parse(sessionStorage.getItem(SESSION)||'null')}catch{return null}};
  if(document.body.dataset.page==='signup'){
    $('signupForm').addEventListener('submit',e=>{
      e.preventDefault();
      const name=$('fullName').value.trim(),number=$('studentNumber').value.trim(),email=normalize($('email').value),password=$('password').value,confirm=$('confirmPassword').value;
      if(!name||!number||!email||!password){message('Please complete all fields.');return}
      if(password.length<6){message('Password must have at least 6 characters.');return}
      if(password!==confirm){message('Passwords do not match.');return}
      const users=readUsers();
      if(users.some(u=>u.email===email)){message('This email is already registered in this browser.');return}
      if(users.some(u=>u.number===number)){message('This student number is already registered in this browser.');return}
      users.push({name,number,email,password}); // demo only; never use for real passwords
      try{localStorage.setItem(USERS,JSON.stringify(users));message('Account created! Redirecting to login...',true);setTimeout(()=>location.replace('login.html'),900)}catch{message('Browser storage is unavailable. Try a normal browser window.')}
    });
  }
  if(document.body.dataset.page==='login'){
    if(active())location.replace('index.html');
    $('loginForm').addEventListener('submit',e=>{
      e.preventDefault();
      const email=normalize($('email').value),password=$('password').value;
      const student=readUsers().find(u=>u.email===email&&u.password===password);
      if(!student){message('Incorrect email or password, or no account in this browser.');return}
      sessionStorage.setItem(SESSION,JSON.stringify({name:student.name,number:student.number,email:student.email}));
      location.replace('index.html');
    });
  }
  if(document.body.dataset.page==='dashboard'){
    const student=active();
    if(!student){location.replace('login.html');return}
    $('studentName').textContent=student.name;
    $('studentNumber').textContent=student.number;
    $('logout').addEventListener('click',()=>{sessionStorage.removeItem(SESSION);location.replace('login.html')});
  }
})();
