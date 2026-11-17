/* Highlight the current homepage section in the mobile bottom navigation. */
(() => {
  const tabs = Array.from(document.querySelectorAll('.itv-bottom-nav a'));
  if (!tabs.length) return;
  function update() {
    const hash = window.location.hash;
    let selected = hash === '#about' ? 'about' : hash === '#project' ? 'project' : 'home';
    tabs.forEach(a => {
      if (a.dataset.bottomTab === selected) a.setAttribute('aria-current','page');
      else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('hashchange',update);
  tabs.forEach(a => a.addEventListener('click',() => {
    if (a.hash) setTimeout(update,0);
  }));
  update();
})();
