/* One consistent show/hide button per password field. */
(() => {
  'use strict';
  const eyeOpen = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>';
  const eyeClosed = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 5.6A11 11 0 0 1 12 5.5c6.4 0 10 6.5 10 6.5a14.4 14.4 0 0 1-3.2 3.7M6.1 6.7C3.5 8.5 2 12 2 12s3.6 6.5 10 6.5a10 10 0 0 0 4.2-.9"/><path d="M10 10a3 3 0 0 0 4 4"/></svg>';
  function setup() {
    document.querySelectorAll('input[type="password"]').forEach(input => {
      if (input.dataset.eyeReady === '1') return;
      input.dataset.eyeReady = '1';
      const wrap = document.createElement('span');
      wrap.className = 'itverse-password-wrap';
      input.parentNode.insertBefore(wrap, input);
      wrap.appendChild(input);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'itverse-eye';
      btn.setAttribute('aria-label', 'Show password');
      btn.setAttribute('aria-pressed', 'false');
      btn.innerHTML = eyeOpen;
      btn.addEventListener('click', () => {
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
        btn.setAttribute('aria-pressed', String(show));
        btn.innerHTML = show ? eyeClosed : eyeOpen;
      });
      wrap.appendChild(btn);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup);
  else setup();
})();
