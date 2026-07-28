// ── NAV scroll ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Reveal on scroll ──
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    setTimeout(() => entry.target.classList.add('visible'), i * 90);
    io.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => io.observe(el));

// ── Carta nav ──
const navBtns = document.querySelectorAll('.nav-btn');
const dishPanels = document.querySelectorAll('.dish-list');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) return;

    navBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const current = document.querySelector('.dish-list.active');
    if (current) current.classList.remove('active');

    setTimeout(() => {
      document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
    }, 180);
  });
});

// ── Mobile nav ──
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});
