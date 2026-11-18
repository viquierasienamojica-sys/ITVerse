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

/* Live quiz submissions for verified administrators */
(async()=>{
  const db=window.ITVerseDB; if(!db)return;
  const account=await window.ITVerseAccount(); if(!account||account.profile.role!=='admin')return;
  const results=document.querySelector('#results tbody');
  const stats=document.querySelectorAll('.stats article strong');
  const {data:attempts,error}=await db.from('quiz_attempts').select('id,student_id,book_key,year_level,quiz_title,score,graded_total,manual_total,answers,created_at').order('created_at',{ascending:false}).limit(500);
  if(error){if(results)results.textContent='Unable to load quiz records: '+error.message;return;}
  if(stats[3])stats[3].textContent=attempts.length;
  const ids=[...new Set(attempts.map(x=>x.student_id))];
  let profiles=[];
  if(ids.length){const response=await db.from('profiles').select('id,full_name,student_number,email').in('id',ids);profiles=response.data||[];}
  const names=new Map(profiles.map(x=>[x.id,x]));
  results?.replaceChildren();
  for(const attempt of attempts){
    const profile=names.get(attempt.student_id)||{};
    const tr=document.createElement('tr');
    const values=[(profile.full_name||'Unknown student')+' ('+(profile.student_number||'—')+')',attempt.quiz_title,attempt.score+'/'+attempt.graded_total,new Date(attempt.created_at).toLocaleString()];
    for(const value of values){const td=document.createElement('td');td.textContent=value;tr.append(td);}
    const td=document.createElement('td');const button=document.createElement('button');button.textContent='View answers';button.type='button';
    button.addEventListener('click',()=>{
      const dialog=document.createElement('dialog');dialog.style.cssText='max-width:750px;width:90%;max-height:85vh;overflow:auto;border:1px solid #f1c7dd;border-radius:16px;padding:24px;color:#702044;background:#fff';
      const title=document.createElement('h2');title.textContent=attempt.quiz_title+' — '+(profile.full_name||'Student');dialog.append(title);
      const detail=document.createElement('p');detail.textContent='Student number: '+(profile.student_number||'—')+' | Email: '+(profile.email||'—')+' | Year: '+attempt.year_level+' | Book: '+attempt.book_key+' | Score: '+attempt.score+'/'+attempt.graded_total+' | Manual review: '+attempt.manual_total;dialog.append(detail);
      for(const answer of attempt.answers||[]){const item=document.createElement('div');item.style.cssText='padding:12px 0;border-top:1px solid #f1d8e6';const q=document.createElement('strong');q.textContent=answer.number+'. '+answer.question;const response=document.createElement('p');response.textContent='Student answer: '+(answer.student_answer||'(blank)');const correct=document.createElement('p');correct.textContent=answer.manual_review?'Pending manual review':((answer.is_correct?'Correct':'Incorrect')+' | Correct answer: '+answer.correct_answer);item.append(q,response,correct);dialog.append(item);}
      const close=document.createElement('button');close.textContent='Close';close.addEventListener('click',()=>dialog.close());dialog.append(close);document.body.append(dialog);dialog.addEventListener('close',()=>dialog.remove());dialog.showModal();
    });td.append(button);tr.append(td);results?.append(tr);
  }
  if(!attempts.length&&results){const tr=document.createElement('tr'),td=document.createElement('td');td.colSpan=5;td.textContent='No quiz submissions yet.';tr.append(td);results.append(tr);}
})();
