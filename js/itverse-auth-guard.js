/* ITVerse demo route guard. Client-side only, not secure authentication. */
(function () {
  'use strict';
  const SESSION = 'ITVerse_demo_session_v1';
  const USERS = 'ITVerse_demo_students_v1';
  let student = null, users = [];
  try { student = JSON.parse(sessionStorage.getItem(SESSION) || 'null'); } catch (_) {}
  try { users = JSON.parse(localStorage.getItem(USERS) || '[]'); } catch (_) {}
  const valid = student && typeof student.email === 'string' &&
    Array.isArray(users) && users.some(u => u.email === student.email && u.number === student.number);
  if (!valid) {
    try { sessionStorage.removeItem(SESSION); } catch (_) {}
    window.location.replace('login.html');
  }
})();
