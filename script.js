/* Accessible mobile navigation toggle.
   Keeps aria-expanded in sync so screen readers announce state. */
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close on Escape and return focus to the toggle
  menu.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeMenu(); toggle.focus(); }
  });

  // Close when a link is chosen (mobile)
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });
})();
