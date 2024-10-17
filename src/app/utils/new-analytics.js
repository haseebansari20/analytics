export const sendGaEvent = ({ action, category, label, value }) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };