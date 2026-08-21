import React from 'react';
import './PageTitle.css';

const PageTitle = ({ title, subtitle, bg, extraStyle, titleColor }) => {
  return (
    <div
      className="page-title-area"
      style={{ backgroundImage: bg ? `url("${bg}")` : undefined, ...(extraStyle || {}) }}
    >
      <div className="container">
        <div className="page-title-content">
          <h1 style={titleColor ? { color: titleColor } : undefined}>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
