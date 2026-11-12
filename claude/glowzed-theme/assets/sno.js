/* SNØ Theme: Mengen-Buttons und mobiles Menü */
document.addEventListener('click', function (e) {
  var step = e.target.closest('[data-step]');
  if (step) {
    var input = step.parentElement.querySelector('input');
    if (input) {
      var min = input.min === '' ? 0 : +input.min;
      var max = input.max === '' ? 99 : +input.max;
      input.value = Math.min(max, Math.max(min, (+input.value || 0) + +step.dataset.step));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
    return;
  }
  var menu = e.target.closest('#menu-btn');
  if (menu) {
    var header = document.getElementById('header');
    var open = header.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  }
});

/* Bewegung: Akkordeons gleiten auf/zu, Länder-Dropdown blendet aus (ersetzt das Skript im Footer) */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(.2, .7, .2, 1)';
  var each = function (sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); };

  // Länder-Dropdown im Footer
  function shut(d, focus) {
    if (!d.open || d.classList.contains('is-closing')) return;
    var done = function () { d.classList.remove('is-closing'); d.open = false; if (focus) d.querySelector('summary').focus(); };
    if (reduce) return done();
    d.classList.add('is-closing');
    setTimeout(done, 160);
  }
  each('details.loc__wrap > summary', function (s) {
    s.addEventListener('click', function (e) { if (s.parentNode.open) { e.preventDefault(); shut(s.parentNode); } });
  });
  document.addEventListener('click', function (e) {
    each('details.loc__wrap[open]', function (d) { if (!d.contains(e.target)) shut(d); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') each('details.loc__wrap[open]', function (d) { shut(d, true); });
  });

  // Akkordeons (FAQ, Produkt-Infos …): Höhe weich animieren
  if (reduce || !Element.prototype.animate) return;
  each('details:not(.loc__wrap)', function (d) {
    var s = d.querySelector(':scope > summary');
    if (!s) return;
    var anim = null;
    s.addEventListener('click', function (e) {
      if (e.target.closest('a')) return; // Links im Titel normal öffnen
      e.preventDefault();
      var from = d.offsetHeight, to;
      if (anim) anim.cancel();
      d.style.overflow = 'hidden';
      if (d.open && !d.classList.contains('is-closing')) {
        d.classList.add('is-closing');
        to = s.offsetHeight + (d.offsetHeight - d.clientHeight);
      } else {
        d.classList.remove('is-closing');
        d.open = true;
        to = d.offsetHeight;
      }
      anim = d.animate({ height: [from + 'px', to + 'px'] }, { duration: Math.min(460, 220 + Math.abs(to - from) * 0.5), easing: EASE });
      anim.onfinish = function () {
        anim = null;
        if (d.classList.contains('is-closing')) { d.classList.remove('is-closing'); d.open = false; }
        d.style.overflow = '';
      };
    });
  });
})();
