import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from './PageLoader';
import ErrorBoundary from './ErrorBoundary';

// No page fetches asynchronously - each one imports its data statically - so a
// route counts as loaded once its lazy chunk has rendered and the images that
// chunk brought with it have finished loading.

// An asset that never settles must not leave the overlay up for good.
const MAX_WAIT = 15000;

const settled = (img) =>
  new Promise((resolve) => {
    const done = () => {
      img.removeEventListener('load', done);
      img.removeEventListener('error', done);
      resolve();
    };
    img.addEventListener('load', done);
    img.addEventListener('error', done);
  });

const backgroundUrls = () => {
  const urls = new Set();
  for (const el of document.body.querySelectorAll('*')) {
    const value = window.getComputedStyle(el).backgroundImage;
    if (!value || value === 'none') continue;
    for (const match of value.matchAll(/url\(["']?(.*?)["']?\)/g)) {
      if (match[1] && !match[1].startsWith('data:')) urls.add(match[1]);
    }
  }
  return urls;
};

const waitForAssets = () => {
  const pending = [];

  for (const img of Array.from(document.images)) {
    if (!img.complete) pending.push(settled(img));
  }

  // background-image is not covered by document.images, and the page banner is
  // one, so load each through a detached Image to hook its completion
  for (const url of backgroundUrls()) {
    const probe = new Image();
    probe.src = url;
    if (!probe.complete) pending.push(settled(probe));
  }

  if (!pending.length) return Promise.resolve();
  return Promise.race([
    Promise.all(pending),
    new Promise((resolve) => setTimeout(resolve, MAX_WAIT)),
  ]);
};

// Rendered inside the Suspense boundary, so this effect first runs only after
// the route's chunk has committed and its images are in the document.
const AssetGate = ({ url, wait, onReady, children }) => {
  useEffect(() => {
    if (!wait) return undefined;
    let cancelled = false;
    waitForAssets().then(() => {
      if (!cancelled) onReady(url);
    });
    return () => {
      cancelled = true;
    };
  }, [url, wait, onReady]);

  return children;
};

const RouteLoader = ({ children }) => {
  const location = useLocation();

  // Every URL whose chunk and images have already finished loading. Returning
  // to one of these needs no loader: its module is resolved in memory and its
  // images are in the browser cache, so it renders in one commit.
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
          otherwise AssetGate never mounts and the loader covers the message. */}
      <ErrorBoundary key={url} onError={() => markLoaded(url)}>
        <Suspense fallback={null}>
          <AssetGate url={url} wait={pending} onReady={markLoaded}>
            {children}
          </AssetGate>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default RouteLoader;
