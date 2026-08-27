import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from './PageLoader';
import ErrorBoundary from './ErrorBoundary';

// Rendered inside the Suspense boundary, so this effect runs only after the
// new route's code has committed. Images load independently after the page is
// visible; they must not keep the page-level loader on screen.
const RouteReady = ({ url, wait, onReady, children }) => {
  useEffect(() => {
    if (!wait) return undefined;
    onReady(url);
    return undefined;
  }, [url, wait, onReady]);

  return children;
};

const RouteLoader = ({ children }) => {
  const location = useLocation();

  // Every URL whose route chunk has rendered. Returning to one of these needs
  // no loader because its module is already resolved in memory.
  const [loaded, setLoaded] = useState(() => new Set());

  const url = location.pathname + location.search;
  const pending = !loaded.has(url);

  const markLoaded = useCallback((readyUrl) => {
    setLoaded((prev) => {
      if (prev.has(readyUrl)) return prev; // same set, so no re-render
      const next = new Set(prev);
      next.add(readyUrl);
      return next;
    });
  }, []);

  return (
    <>
      {pending && <PageLoader />}
      {/* keyed by url so an error on one route does not persist to the next.
          Marking the url loaded on failure is what lets the overlay come down -
          otherwise RouteReady never mounts and the loader covers the message. */}
      <ErrorBoundary key={url} onError={() => markLoaded(url)}>
        <Suspense fallback={null}>
          <RouteReady url={url} wait={pending} onReady={markLoaded}>
            {children}
          </RouteReady>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default RouteLoader;
