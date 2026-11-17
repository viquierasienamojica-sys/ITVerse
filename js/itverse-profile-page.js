(async()=>{'use strict';
const db=window.ITVerseDB,$=id=>document.getElementById(id);const account=await window.ITVerseAccount();
if(!account){location.replace('login.html');return}
if(account.profile.role==='admin'){location.replace('admin-dashboard.html');return}
const p=account.profile;
$('profileName').textContent=$('infoName').textContent=p.full_name||'—';
$('profileNumber').textContent='Student No. '+(p.student_number||'—');$('infoNumber').textContent=p.student_number||'—';$('infoEmail').textContent=p.email||'—';
$('profileInitial').textContent=(p.full_name||'S').charAt(0).toUpperCase();
const photo=$('profilePhoto'),initial=$('profileInitial');
function showPhoto(url){if(url){photo.src=url;photo.hidden=false;initial.hidden=true;$('removePhoto').hidden=false}else{photo.removeAttribute('src');photo.hidden=true;initial.hidden=false;$('removePhoto').hidden=true}}
showPhoto(p.avatar_url);
const photoMsg=(s,ok=false)=>{const e=$('photoMessage');e.textContent=s;e.classList.toggle('ok',ok)};
$('photoUpload').addEventListener('change',async e=>{
 const file=e.target.files[0];e.target.value='';if(!file)return;
 if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>2*1024*1024){photoMsg('Use JPG, PNG or WebP up to 2 MB.');return}
 const ext=file.type==='image/jpeg'?'jpg':file.type==='image/png'?'png':'webp';const path=account.user.id+'/avatar-'+Date.now()+'.'+ext;
 const {error}=await db.storage.from('avatars').upload(path,file,{contentType:file.type,upsert:false});if(error){photoMsg(error.message);return}
 const {data}=db.storage.from('avatars').getPublicUrl(path);const url=data.publicUrl;
 const result=await db.from('profiles').update({avatar_url:url}).eq('id',account.user.id);
 if(result.error){photoMsg(result.error.message);return}showPhoto(url);photoMsg('Profile photo updated!',true);
});
$('removePhoto').addEventListener('click',async()=>{const {error}=await db.from('profiles').update({avatar_url:null}).eq('id',account.user.id);if(error){photoMsg(error.message);return}showPhoto(null);photoMsg('Profile photo removed from your profile.',true)});
const eyeOpen='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>';
const eyeClosed='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 5.6A11 11 0 0 1 12 5.5c6.4 0 10 6.5 10 6.5s-1.1 2-3.2 3.7M6.1 6.7C3.5 8.5 2 12 2 12s3.6 6.5 10 6.5a10 10 0 0 0 4.2-.9"/><path d="M10 10a3 3 0 0 0 4 4"/></svg>';
document.querySelectorAll('.itv-password-wrap').forEach(w=>{const input=w.querySelector('input'),btn=w.querySelector('button');btn.innerHTML=eyeOpen;btn.addEventListener('click',()=>{const reveal=input.type==='password';input.type=reveal?'text':'password';btn.innerHTML=reveal?eyeClosed:eyeOpen;btn.setAttribute('aria-pressed',String(reveal));btn.setAttribute('aria-label',(reveal?'Hide ':'Show ')+input.id.replace(/([A-Z])/g,' $1').toLowerCase())})});

const msg=(s,ok=false)=>{const e=$('passwordMessage');e.textContent=s;e.classList.toggle('ok',ok)};
$('changePasswordForm').addEventListener('submit',async e=>{
 e.preventDefault();const old=$('currentPassword').value,next=$('newPassword').value,confirm=$('confirmPassword').value;
 if(!old||!next||!confirm){msg('Complete all password fields.');return}
 if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(next)){msg('Use 8+ characters with uppercase, lowercase, number and special character.');return}
 if(next!==confirm){msg('New passwords do not match.');return}if(old===next){msg('Choose a different new password.');return}
 const btn=$('savePassword');btn.disabled=true;
 try{
  // Re-authenticate current password BEFORE updating; do not store passwords in browser storage.
  const verify=await db.auth.signInWithPassword({email:account.user.email,password:old});
  if(verify.error){msg('Current password is incorrect.');return}
  const changed=await db.auth.updateUser({password:next});if(changed.error)throw changed.error;
  e.currentTarget.reset();msg('Password changed successfully!',true);
 }catch(err){msg(err.message||'Unable to change password.')}finally{btn.disabled=false}
});
})();
