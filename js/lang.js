// Language switcher — collapsible dropdown (runs on every page).
document.addEventListener('DOMContentLoaded', function () {
    var cur = (document.documentElement.getAttribute('lang') || 'tr').toLowerCase();
    var paths = { tr: '/', en: '/en/', ru: '/ru/', de: '/de/' };

    var dropdown = document.getElementById('langSwitcher');
    var toggle = document.getElementById('langToggle');
    var current = dropdown ? dropdown.querySelector('.lang-current') : null;

    // Show the active language code on the toggle button
    if (current) current.textContent = cur.toUpperCase();

    // Mark active option
    document.querySelectorAll('#langMenu [data-lang]').forEach(function (btn) {
        var l = btn.getAttribute('data-lang');
        if (l === cur) btn.classList.add('active');
        btn.addEventListener('click', function () {
            try { localStorage.setItem('alanya_lang', l); } catch (e) {}
            window.location.href = paths[l];
        });
    });

    // Open / close the menu
    function setOpen(open) {
        if (!dropdown) return;
        dropdown.classList.toggle('open', open);
        if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    if (toggle) {
        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            setOpen(!dropdown.classList.contains('open'));
        });
    }
    // Close on outside click or Escape
    document.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
});
