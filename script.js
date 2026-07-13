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


(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
 
  form.addEventListener('submit', function (e) {
    e.preventDefault();
 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var reason = document.getElementById('reason').value;
    var message = document.getElementById('message').value;
 
    var subject = encodeURIComponent('Contact form: ' + (reason || 'General inquiry'));
    var body = encodeURIComponent(
      'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
    );
 
    window.location.href =
      'mailto:info@blindbutnotbroken.org?subject=' + subject + '&body=' + body;
  });
})();
 
/* Contact form -> mailto.
   Fires window.location.href synchronously inside the click handler,
   which is required for Safari to allow the mailto composer to open
   (it blocks mailto navigation that isn't a direct, synchronous
   result of a user click). Do not wrap this in fetch/async/setTimeout. */

function sendMail() {
  var nameEl = document.getElementById('name');
  var emailEl = document.getElementById('email');
  var reasonEl = document.getElementById('reason');
  var messageEl = document.getElementById('message');
  if (!nameEl || !emailEl || !messageEl) return;
 
  var name = nameEl.value;
  var email = emailEl.value;
  var reason = reasonEl ? reasonEl.value : '';
  var message = messageEl.value;
 
  var subject = encodeURIComponent('Contact form: ' + (reason || 'General inquiry'));
  var body = encodeURIComponent(
    'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
  );
 
  window.location.href = 'mailto:info@blindbutnotbroken.org?subject=' + subject + '&body=' + body;
}
 
