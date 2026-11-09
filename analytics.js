/**
 * Google Analytics 4 setup for Self-Operated Tennis Score landing page.
 *
 * SETUP:
 * Replace G-XXXXXXXXXX below with your GA4 Web Stream Measurement ID.
 * If the placeholder is left unchanged, Analytics stays disabled.
 */
const GA4_MEASUREMENT_ID = 'G-YLRSZEX373';

(function initialiseGA4() {
  const configured = /^G-[A-Z0-9]+$/i.test(GA4_MEASUREMENT_ID) && GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX';

  window.analyticsEnabled = configured;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.trackAnalyticsEvent = function trackAnalyticsEvent(eventName, params = {}) {
    if (!window.analyticsEnabled || typeof window.gtag !== 'function') return;

    // Never add names, email addresses, match codes, scoreboard URLs, or other personal data here.
    window.gtag('event', eventName, params);
  };

  if (!configured) {
    console.info('[Analytics] GA4 disabled. Replace G-XXXXXXXXXX in analytics.js with your Measurement ID.');
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, {
    send_page_view: true
  });
})();
