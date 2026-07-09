(function () {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navMobile');
  if (!toggle || !nav) return;

  const mq = window.matchMedia('(max-width: 768px)');

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    document.body.classList.toggle('nav-open', open);
  }

  function closeMenu() {
    setOpen(false);
  }

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('open'));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  mq.addEventListener('change', (e) => {
    if (!e.matches) closeMenu();
  });

  setOpen(false);
})();
