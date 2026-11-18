
/* ITVerse Supabase authentication guard for Library, Activities and Books.
   Load Supabase dependencies here because these pages include only this guard.
   Access to private database records must also be enforced with Supabase RLS. */

(async () => {
  'use strict';

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error('Unable to load ' + src));
      document.head.appendChild(script);
    });
  }

  try {
    // Load Supabase JavaScript library if not yet loaded.
    if (!window.supabase?.createClient) {
      await loadScript(
        'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js'
      );
    }

    // Load ITVerse Supabase connection.
    if (
      !window.ITVerseDB ||
      typeof window.ITVerseAccount !== 'function'
    ) {
      await loadScript(
        new URL(
          'itverse-supabase.js',
          document.currentScript?.src ||
          new URL('js/itverse-auth-guard.js', location.href)
        ).href
      );
    }

    if (
      !window.ITVerseDB ||
      typeof window.ITVerseAccount !== 'function'
    ) {
      throw new Error('Supabase client was not initialized');
    }

    // Check the current Supabase account.
    const account = await window.ITVerseAccount();

    if (!account) {
      location.replace('login.html');
      return;
    }

    // Redirect admin accounts to the Admin Dashboard.
    if (
      account.profile.role === 'admin' &&
      !location.pathname.endsWith('/admin-dashboard.html')
    ) {
      location.replace('admin-dashboard.html');
    }

  } catch (error) {
    console.error(
      'ITVerse authentication check failed:',
      error
    );

    // Network errors should not cause a Login/Homepage loop.
    if (document.readyState === 'loading') {
      document.addEventListener(
        'DOMContentLoaded',
        showError,
        { once: true }
      );
    } else {
      showError();
    }

    function showError() {
      const notice = document.createElement('div');

      notice.setAttribute('role', 'alert');

      notice.style.cssText =
        'position:fixed;' +
        'z-index:2147483647;' +
        'top:12px;' +
        'left:12px;' +
        'right:12px;' +
        'padding:14px;' +
        'background:#fff1f6;' +
        'color:#8c174d;' +
        'border:1px solid #e5a7c3;' +
        'border-radius:10px;' +
        'font:14px Arial,sans-serif;' +
        'box-shadow:0 4px 18px #0002';

      notice.textContent =
        'Unable to verify your ITVerse login. ' +
        'Check your connection and refresh this page.';

      document.body.prepend(notice);
    }
  }
})();
