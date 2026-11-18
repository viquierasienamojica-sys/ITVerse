
/* ITVerse shared authentication via Supabase Auth. */
(async () => {
  'use strict';

  const db = window.ITVerseDB;
  const $ = id => document.getElementById(id);
  const page = document.body.dataset.page;

  const msg = (s, ok = false) => {
    const e = $('message');

    if (e) {
      e.textContent = s;
      e.className = 'message' + (ok ? ' ok' : '');
    }
  };

  if (!db) {
    msg('Unable to load online login. Check internet connection and refresh.');
    return;
  }

  const strong = p =>
    p.length >= 8 &&
    /[A-Z]/.test(p) &&
    /[a-z]/.test(p) &&
    /\d/.test(p) &&
    /[^A-Za-z0-9]/.test(p);

  // =========================================
  // STUDENT SIGN UP
  // =========================================

  if (page === 'signup') {
    const number = $('studentNumber');

    number.addEventListener('input', () => {
      number.value = number.value.replace(/\D/g, '');
    });

    const signupForm = $('signupForm');

    signupForm.addEventListener('submit', async e => {
      e.preventDefault();

      // Save the form reference before await.
      // This prevents the null reset error.
      const form = e.currentTarget;
      const btn = form.querySelector('[type=submit]');

      const full_name = $('fullName').value.trim();
      const student_number = number.value.trim();
      const email = $('email').value.trim().toLowerCase();
      const password = $('password').value;
      const confirm = $('confirmPassword').value;

      if (!full_name || !/^\d+$/.test(student_number)) {
        msg('Enter your full name and numeric student number.');
        return;
      }

      if (!strong(password)) {
        msg('Use 8+ characters with uppercase, lowercase, number and special character.');
        return;
      }

      if (password !== confirm) {
        msg('Passwords do not match.');
        return;
      }

      btn.disabled = true;

      try {
        const { data, error } = await db.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name,
              student_number
            },
            emailRedirectTo: new URL('login.html', location.href).href
          }
        });

        if (error) {
          throw error;
        }

        if (data.user?.identities?.length === 0) {
          msg(
            'If this email can register, check your inbox for a confirmation link.',
            true
          );
        } else {
          msg(
            'Account submitted! Check your email and confirm it before logging in.',
            true
          );
        }

        // Reset the saved form reference.
        form.reset();

      } catch (err) {
        msg(err.message || 'Signup failed. Please try again.');

      } finally {
        btn.disabled = false;
      }
    });
  }

  // =========================================
  // STUDENT AND ADMIN LOGIN
  // =========================================

  if (page === 'login') {
    const { data: { session } } = await db.auth.getSession();

    if (session) {
      const a = await window.ITVerseAccount();

      if (a) {
        location.replace(
          a.profile.role === 'admin'
            ? 'admin-dashboard.html'
            : 'index.html'
        );
        return;
      }
    }

    const loginForm = $('loginForm');

    loginForm.addEventListener('submit', async e => {
      e.preventDefault();

      const form = e.currentTarget;
      const btn = form.querySelector('[type=submit]');

      btn.disabled = true;

      try {
        const { error } = await db.auth.signInWithPassword({
          email: $('email').value.trim().toLowerCase(),
          password: $('password').value
        });

        if (error) {
          throw error;
        }

        const a = await window.ITVerseAccount();

        if (!a) {
          await db.auth.signOut();

          msg(
            'Your profile could not be loaded. Contact the administrator.'
          );
          return;
        }

        location.replace(
          a.profile.role === 'admin'
            ? 'admin-dashboard.html'
            : 'index.html'
        );

      } catch (err) {
        msg(err.message || 'Login failed.');

      } finally {
        btn.disabled = false;
      }
    });
  }

})();
