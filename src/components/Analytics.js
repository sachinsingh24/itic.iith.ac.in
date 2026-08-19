import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// The gtag snippet in public/index.html sends a page_view for the initial load
// only. Client-side route changes never reload the document, so each one has to
// be reported explicitly - otherwise every visit looks like a single landing
// page. The first location is seeded into the ref so it is not counted twice.
const Analytics = () => {
  const location = useLocation();
  const url = location.pathname + location.search;
  const lastSent = useRef(url);

  useEffect(() => {
    if (url === lastSent.current) return;
    lastSent.current = url;
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [url]);

  return null;
};

export default Analytics;
