import React, { useState, useEffect, useCallback } from 'react';
import './GoTop.css';

const GoTop = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const toggleActive = () => setActive(window.scrollY > 600);
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleActive();
          ticking = false;
        });
        ticking = true;
      }
    };
    toggleActive();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      className={`go-top ${active ? 'active' : ''}`}
      onClick={scrollToTop}
    >
      <i className="bx bx-chevron-up"></i>
    </div>
  );
};

export default GoTop;
