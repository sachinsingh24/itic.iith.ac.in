import React from 'react';
import './PageLoader.css';

const PageLoader = () => {
  return (
    <div className="preloader-area">
      <div className="spinner">
        <div className="inner">
          <div className="disc"></div>
          <div className="disc"></div>
          <div className="disc"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
