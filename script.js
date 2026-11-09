const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const currentYear = document.getElementById('currentYear');

if (currentYear) currentYear.textContent = new Date().getFullYear();

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add('in-view'));
}


// ---------- GA4 landing-page event tracking ----------
document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-ga-event]');
  if (!target || typeof window.trackAnalyticsEvent !== 'function') return;

  const params = {};
  if (target.dataset.gaLocation) params.location = target.dataset.gaLocation;
  if (target.dataset.gaSection) params.section_name = target.dataset.gaSection;
  if (target.dataset.gaPlatform) params.platform = target.dataset.gaPlatform;

  window.trackAnalyticsEvent(target.dataset.gaEvent, params);
});

const analyticsSections = document.querySelectorAll('[data-ga-section-view]');
if ('IntersectionObserver' in window && analyticsSections.length) {
  const analyticsSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || typeof window.trackAnalyticsEvent !== 'function') return;
        window.trackAnalyticsEvent('section_viewed', {
          section_name: entry.target.dataset.gaSectionView
        });
        analyticsSectionObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  analyticsSections.forEach((section) => analyticsSectionObserver.observe(section));
}
