/* ITVerse dashboard: counts the existing static catalog and published online additions. */
(async () => {
  'use strict';
  const bookEl = document.getElementById('itvBookCount');
  const quizEl = document.getElementById('itvQuizCount');
  if (!bookEl || !quizEl) return;
  if (window.lucide?.createIcons) window.lucide.createIcons();

  const db = window.ITVerseDB;
  if (!db || typeof window.ITVerseAccount !== 'function') {
    bookEl.textContent = quizEl.textContent = '—';
    return;
  }
  const account = await window.ITVerseAccount();
  if (!account || account.profile?.role !== 'admin') return;

  // Read the same static source files used by the student Library and Activities.
  // Count only existing books marked available and actual quiz entries.
  async function countStatic() {
    const [libraryResponse, activitiesResponse] = await Promise.all([
      fetch('js/library.js', {cache:'no-store'}),
      fetch('js/activities.js', {cache:'no-store'})
    ]);
    if (!libraryResponse.ok || !activitiesResponse.ok) throw new Error('Static catalog unavailable');
    const [library, activities] = await Promise.all([libraryResponse.text(), activitiesResponse.text()]);
    const bookCount = (library.match(/\.available\s*=\s*true\s*;/g) || []).length;
    const quizBank = activities.split('const quizBank =')[1]?.split('const yearSelect =')[0] || '';
    const quizCount = (quizBank.match(/\{\s*title\s*:/g) || []).length;
    return {bookCount, quizCount};
  }
  let staticCounts;
  try { staticCounts = await countStatic(); }
  catch (e) { console.warn('ITVerse static catalog count:', e); }

  async function refresh() {
    const [books, quizzes] = await Promise.all([
      db.from('managed_books').select('id', {count:'exact',head:true}).eq('published',true),
      db.from('managed_quizzes').select('id', {count:'exact',head:true}).eq('published',true)
    ]);
    if (books.error || quizzes.error) {
      console.warn('ITVerse online catalog count:', books.error || quizzes.error);
    }
    bookEl.textContent = staticCounts && !books.error
      ? (staticCounts.bookCount + (books.count || 0)).toLocaleString() : '—';
    quizEl.textContent = staticCounts && !quizzes.error
      ? (staticCounts.quizCount + (quizzes.count || 0)).toLocaleString() : '—';
  }
  await refresh();
  window.addEventListener('itverse:catalog-updated', refresh);
})();
