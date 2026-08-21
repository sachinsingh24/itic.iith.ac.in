import React from 'react';
import './LogoList.css';

const LogoCard = ({ logo }) => (
  <div className="single-clients-logo">
    <a href={logo.href || '#'} target={logo.href ? '_blank' : undefined} rel={logo.href ? 'noopener noreferrer' : undefined}>
      <img alt={logo.alt} src={logo.src} style={logo.style} />
    </a>
  </div>
);

const LogoInline = ({ logo }) => (
  <div className="single-clients-logo">
    <span>
      <img alt={logo.alt} src={logo.src} style={logo.style} title={logo.title} />
    </span>
  </div>
);

const LogoList = ({ logos, title, variant = 'card', fluid = false, stacked = false }) => {
  const cards = logos.map((logo) =>
    variant === 'card' ? <LogoCard key={logo.src} logo={logo} /> : <LogoInline key={logo.src} logo={logo} />
  );

  return (
    <section className={`partner-area${stacked ? ' partner-area-stacked' : ''} pb-30 pt-30 bg-f8fbfa`}>
      <div className={fluid ? 'container-fluid' : 'container'}>
        {stacked ? (
          <>
            <div className="partner-title">
              <h3>{title}</h3>
            </div>
            <div className="clients-logo-list align-items-center d-flex justify-content-center">
              {cards}
            </div>
          </>
        ) : (
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12">
              <div className="partner-title">
                <h3>{title}</h3>
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="clients-logo-list align-items-center d-flex justify-content-center">
                {cards}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LogoList;
