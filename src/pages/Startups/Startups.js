import _asset0 from '../../assets/Startup_Page_Banner.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import startups from '../../data/startups';
import './Startups.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const SocialIcon = ({ href, icon }) => {
  if (!href) return null;
  const iconClass = {
    website: 'fa-solid fa-globe',
    facebook: 'fa-brands fa-facebook-f',
    twitter: 'fa-brands fa-twitter',
    linkedin: 'fa-brands fa-linkedin-in',
    instagram: 'fa-brands fa-instagram',
  }[icon];
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <i className={iconClass} />
      </a>
    </li>
  );
};

const StartupCard = ({ slug, startup }) => {
  const { name, logo, tagline, social, website } = startup;
  const socialLinks = social || {};
  const hasSocialLinks = Object.values(socialLinks).some((v) => v);

  return (
    <div className="portfolio-grid-itic">
      <div className="row align-items-start">
        <div className="col-lg-3 col-md-12 my-auto">
          <div className="app-download-image">
            {logo ? (
              <img
                alt={name}
                className="img-fluid"
                src={logo}
                style={{ maxHeight: '150px', width: 'auto', maxWidth: '100%' }}
              />
            ) : (
              <h6 style={{ textAlign: 'center', padding: '20px 0' }}>{name}</h6>
            )}
          </div>
        </div>
        <div className="col-lg-9 col-md-12">
          <div className="app-download-content">
            <h2 style={{ paddingLeft: '10px' }}>{name}</h2>
            {tagline ? <p style={{ paddingLeft: '10px' }}>{tagline}</p> : null}
          </div>
          <div style={{ paddingLeft: '10px', marginTop: '10px' }}>
            <div
              className="single-footer-widget mb-0 portfolio-footer"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <ul className="social social1">
                {website ? <SocialIcon href={website} icon="website" /> : null}
                {hasSocialLinks ? (
                  <>
                    {socialLinks.facebook && <SocialIcon href={socialLinks.facebook} icon="facebook" />}
                    {socialLinks.linkedin && <SocialIcon href={socialLinks.linkedin} icon="linkedin" />}
                    {socialLinks.twitter && <SocialIcon href={socialLinks.twitter} icon="twitter" />}
                    {socialLinks.instagram && <SocialIcon href={socialLinks.instagram} icon="instagram" />}
                  </>
                ) : null}
              </ul>
              <div className="others-options">
                <Link
                  className="default-btn"
                  to={`/startup/${slug}`}
                >
                  View More<span />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

const Startups = () => {
  const startupEntries = Object.entries(startups);

  return (
    <>
      <PageTitle title="Startups" bg={_asset0} />

      <section className="about-area">
        <div className="container">
          <div className="row">
            {startupEntries.map(([slug, startup]) => (
              <StartupCard key={slug} slug={slug} startup={startup} />
            ))}
          </div>
        </div>
      </section>

      <ShapeDecoration />
    </>
  );
};

export default Startups;

