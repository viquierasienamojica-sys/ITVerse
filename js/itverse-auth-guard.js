/* Online route guard; server-side RLS must enforce access to data. */
(async()=>{const db=window.ITVerseDB;if(!db){location.replace('login.html');return}
const account=await window.ITVerseAccount();if(!account){location.replace('login.html');return}
if(account.profile.role==='admin'&&!location.pathname.endsWith('admin-dashboard.html'))location.replace('admin-dashboard.html');
})();
