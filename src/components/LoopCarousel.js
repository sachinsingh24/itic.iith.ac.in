import { useEffect, useMemo, useRef, useState } from 'react';

const LoopCarousel = ({
  items,
  renderItem,
  className,
  mobileItems = 1,
  tabletItems = 2,
  desktopItems = 3,
  tabletMin = 768,
  desktopMin = 1200,
  margin = 15,
  interval = 2000,
  speed = 0.8,
}) => {
  const getPerView = () => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return desktopItems;
    }
    if (window.matchMedia(`(min-width: ${desktopMin}px)`).matches) return desktopItems;
    if (window.matchMedia(`(min-width: ${tabletMin}px)`).matches) return tabletItems;
    return mobileItems;
  };

  const [perView, setPerView] = useState(getPerView);
  const realCount = items.length;
  const canSlide = realCount > perView;
  const cloneCount = canSlide ? perView : 0;
  const [index, setIndex] = useState(cloneCount);
  const [transitioning, setTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const wrapRef = useRef(null);
  const stageOuterRef = useRef(null);
  const indexRef = useRef(index);
  const remainingRef = useRef(interval);
  const lastTickRef = useRef(Date.now());
  const dragStartRef = useRef(0);

  const onPointerDown = (e) => {
    if (!canSlide) return;
    e.preventDefault();
    dragStartRef.current = e.clientX;
    setPaused(true);
    setDragging(true);
    setDragOffset(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    setDragOffset(e.clientX - dragStartRef.current);
  };

  const onPointerUp = () => {
    if (!dragging) return;
    const itemWidth = stageOuterRef.current ? stageOuterRef.current.clientWidth / perView : 0;
    const stepCount = itemWidth ? Math.round(dragOffset / itemWidth) : 0;
    setDragging(false);
    setDragOffset(0);
    if (stepCount !== 0) {
      setTransitioning(true);
      setIndex((i) => Math.min(Math.max(i + stepCount, 0), maxIndex + 1));
    }
    setPaused(false);
  };

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const desktop = window.matchMedia(`(min-width: ${desktopMin}px)`);
    const tablet = window.matchMedia(`(min-width: ${tabletMin}px)`);
    const update = () => {
      setPerView(desktop.matches ? desktopItems : tablet.matches ? tabletItems : mobileItems);
    };
    update();
    desktop.addEventListener('change', update);
    tablet.addEventListener('change', update);
    return () => {
      desktop.removeEventListener('change', update);
      tablet.removeEventListener('change', update);
    };
  }, [mobileItems, tabletItems, desktopItems, tabletMin, desktopMin]);

  const slides = useMemo(
    () =>
      canSlide
        ? [...items.slice(-cloneCount), ...items, ...items.slice(0, cloneCount)]
        : items,
    [items, cloneCount, canSlide]
  );
  const maxIndex = cloneCount + realCount - 1;

  useEffect(() => {
    setIndex(cloneCount);
    setTransitioning(true);
  }, [cloneCount, realCount]);

  useEffect(() => {
    if (!canSlide) return undefined;
    const stage = wrapRef.current && wrapRef.current.querySelector('.owl-stage');
    if (!stage) return undefined;
    const onEnd = (e) => {
      if (e.target !== stage || e.propertyName !== 'transform') return;
      const idx = indexRef.current;
      if (idx > maxIndex) {
        setTransitioning(false);
        setIndex(cloneCount);
      } else if (idx < cloneCount) {
        setTransitioning(false);
        setIndex(maxIndex);
      }
    };
    stage.addEventListener('transitionend', onEnd);
    return () => stage.removeEventListener('transitionend', onEnd);
  }, [canSlide, maxIndex, cloneCount]);

  useEffect(() => {
    if (!canSlide) return undefined;
    let timeoutId;
    const tick = () => {
      setTransitioning(true);
      setIndex((i) => (i >= perView + realCount - 1 ? perView + realCount : i + 1));
      remainingRef.current = interval;
      lastTickRef.current = Date.now();
      timeoutId = setTimeout(tick, interval);
    };
    if (paused) {
      remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - lastTickRef.current));
    } else {
      lastTickRef.current = Date.now();
      timeoutId = setTimeout(tick, remainingRef.current);
    }
    return () => clearTimeout(timeoutId);
  }, [paused, canSlide, perView, realCount, interval]);

  const goTo = (dotIndex) => {
    setTransitioning(true);
    setIndex(cloneCount + dotIndex);
  };

  const step = 100 / perView;
  const activeDot = ((index - cloneCount) % realCount + realCount) % realCount;
  const isActive = (i) => i >= index && i < index + perView;

  return (
    <div
      ref={wrapRef}
      className={`${className} owl-carousel owl-theme`}
      onMouseEnter={() => !dragging && setPaused(true)}
      onMouseLeave={() => !dragging && setPaused(false)}
      style={{
        '--slide-step': `${step}%`,
        '--slide-offset': `${-(index * step)}%`,
        '--slide-transition': `${dragging ? 0 : transitioning ? speed : 0}s`,
        '--slide-pad': `${margin / 2}px`,
        '--slide-margin': `${-(margin / 2)}px`,
        '--slide-drag': `${dragOffset}px`,
      }}
    >
      <div
        ref={stageOuterRef}
        className="owl-stage-outer"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={dragging ? { cursor: 'grabbing', userSelect: 'none' } : undefined}
      >
        <div className="owl-stage">
          {slides.map((item, i) => (
            <div key={i} className={`owl-item${isActive(i) ? ' active' : ''}`}>
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>
      {canSlide && (
        <>
          <div className="owl-nav disabled"></div>
          <div className="owl-dots">
            {items.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`owl-dot${i === activeDot ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              >
                <span></span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LoopCarousel;
