/* Online books and quizzes, without changing the existing static catalog. */
(async()=>{'use strict';const db=window.ITVerseDB;if(!db)return;
const {data:bs,error:be}=await db.from('managed_books').select('*').eq('published',true).order('book_number');if(be){console.warn(be);return;}
const rows=bs||[];
if(document.getElementById('shelvesContainer')){for(const b of rows){const item={id:'online-'+b.id,year:b.year_level,title:b.title,color:'#b85c8d',cover:'',available:true,url:'itverse-reader.html?id='+encodeURIComponent(b.id)};if(b.cover_path){const {data}=await db.storage.from('itverse-books').createSignedUrl(b.cover_path,3600);item.cover=data?.signedUrl||'';}books.push(item);}render();}
if(document.getElementById('quizArea')){const {data:qs,error:qe}=await db.from('managed_quizzes').select('*').eq('published',true);if(qe){console.warn(qe);return;}
for(const b of rows){const arr=booksByYear[b.year_level];while(arr.length<b.book_number)arr.push('Book '+String(arr.length+1).padStart(2,'0'));arr[b.book_number-1]=b.title;}
for(const q of qs||[]){const key=q.year_level+'-'+q.book_number;(quizBank[key] ||= []).push({title:q.title,questions:q.questions});}
const year=document.getElementById('year');if(year.value)year.dispatchEvent(new Event('change'));}
})();
