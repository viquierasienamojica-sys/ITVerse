/* ITVerse public Supabase configuration; never place a secret/service-role key here. */
(()=>{'use strict';
const url='https://redvegwhijewzioosieo.supabase.co',key='sb_publishable_wf-RkuW0qOeThoM9d4gRhQ_hv4MEYnL';
if(!window.supabase?.createClient){console.error('Supabase library did not load');return}
window.ITVerseDB=window.supabase.createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
window.ITVerseAccount=async function(){
 const {data:{user},error}=await window.ITVerseDB.auth.getUser();if(error||!user)return null;
 const {data:profile,error:err}=await window.ITVerseDB.from('profiles').select('id,full_name,student_number,email,role,avatar_url').eq('id',user.id).single();
 if(err||!profile)return null;
 return {user,profile};
};
})();
