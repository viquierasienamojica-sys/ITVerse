(()=>{'use strict';const tabs=[...document.querySelectorAll('.tab')],nav=[...document.querySelectorAll('[data-tab]')],titles={dashboard:['Dashboard Overview','A central place to manage your e-library.'],students:['Student Management','View registered students and account information.'],books:['E-Book Management','Organize your e-book collection.'],quizzes:['Quiz Management','Create and maintain quizzes.'],results:['Quiz Results','Review student performance.'],settings:['Admin Settings','Manage your admin account.']};function show(name){if(!titles[name])return;tabs.forEach(t=>t.classList.toggle('active',t.id===name));nav.forEach(n=>n.classList.toggle('active',n.dataset.tab===name));document.getElementById('heading').textContent=titles[name][0];document.getElementById('subheading').textContent=titles[name][1];history.replaceState(null,'','#'+name)}nav.forEach(n=>n.addEventListener('click',()=>show(n.dataset.tab)));document.querySelectorAll('[data-go]').forEach(n=>n.addEventListener('click',()=>show(n.dataset.go)));show(location.hash.slice(1)||'dashboard')})();
(async()=>{const db=window.ITVerseDB;const a=await window.ITVerseAccount();
if(!a){location.replace('login.html');return}if(a.profile.role!=='admin'){location.replace('index.html');return}
const section=document.getElementById('students'),input=section?.querySelector('input.search'),body=section?.querySelector('tbody');
const {data,error}=await db.from('profiles').select('full_name,student_number,email,role').eq('role','student').order('full_name');
if(error){if(body)body.textContent='Could not load students: '+error.message;return}
const students=data||[];const stats=document.querySelector('.stats article strong');if(stats)stats.textContent=students.length;
if(input){input.disabled=false;input.placeholder='Search students by name, number or email';}
const render=()=>{if(!body)return;body.replaceChildren();const q=(input?.value||'').toLowerCase();const rows=students.filter(x=>[x.full_name,x.student_number,x.email].some(v=>String(v||'').toLowerCase().includes(q)));
if(!rows.length){const tr=document.createElement('tr'),td=document.createElement('td');td.colSpan=4;td.textContent='No students found.';tr.append(td);body.append(tr);return}
rows.forEach(p=>{const tr=document.createElement('tr');[p.full_name,p.student_number,p.email,'Student'].forEach(v=>{const td=document.createElement('td');td.textContent=v||'—';tr.append(td)});body.append(tr)})};
input?.addEventListener('input',render);render();
const logout=document.querySelector('[data-logout]');if(logout)logout.addEventListener('click',async()=>{await db.auth.signOut();location.replace('index.html')});
})();
