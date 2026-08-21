import shapeRotateRight from '../assets/img/shape/10.png';
import shapeBounce from '../assets/img/shape/7.png';
import shapeRotateLeft from '../assets/img/shape/11.png';
import shapeRotateTop from '../assets/img/shape/12.png';
import React from 'react';

// Closing decoration band, previously repeated verbatim at the bottom of 20
// pages with per-page asset numbering. Purely decorative, so it is hidden from
// assistive tech; global.css hides the whole band below 1200px, where the
// shapes themselves are not shown.
const ShapeDecoration = () => (
  <section className="free-trial-area" aria-hidden="true">
    <div className="shape10">
      <img alt="" src={shapeRotateRight} />
    </div>

    <div className="shape11">
      <img alt="" src={shapeBounce} />
    </div>

    <div className="shape12">
      <img alt="" src={shapeRotateLeft} />
    </div>

    <div className="shape13">
      <img alt="" src={shapeRotateTop} />
    </div>
  </section>
);

export default ShapeDecoration;
