export const GA_MEASUREMENT_ID = 'G-E9KSFS3GG8';

// Track custom events
export const trackEvent = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};