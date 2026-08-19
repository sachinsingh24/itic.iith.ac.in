import _asset0 from '../../images/People/dummy-icon.png';
import _asset1 from '../../assets/img/shape/10.png';
import _asset2 from '../../assets/img/shape/7.png';
import _asset3 from '../../assets/img/shape/11.png';
import _asset4 from '../../assets/img/shape/12.png';
import React from 'react';
import { useParams } from 'react-router-dom';
import startups from '../../data/startups';
import NotFound from '../NotFound/NotFound';
import './StartupDetail.css';

const SocialIcon = ({ href, icon }) => {
  if (!href) return null;
  return (
    <div className="b-radius">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <i className={icon} />
      </a>
    </div>
  );
};

const StartupDetail = () => {
  const { slug } = useParams();
  const startup = startups[slug];

  if (!startup) {
    return <NotFound />;
  }

  const {
    name,
    logo,
    est,
    tagline,
    website,
    social,
    founders,
    team,
    video,
    targetMarket,
    sector,
    problem,
    valueProposition,
    currentStage,
    businessType,
    products,
    highlights,
    awards,
    disclaimer,
  } = startup;

  return (
    <div className="startup-detail-page" style={{backgroundColor:"#FFE194"}}>
      <section id="home" className="common-section pt-3">
        <div className="container">
          <div className="b-radius-">
            <div className="row">
              <div className="col-md-3">
                <div className="logo-txt-wrap">
                  {logo ? (
                    <div className="logo">
                      <img src={logo} alt={name} className="icon-abs" />
                    </div>
                  ) : null}
                  {est ? <div className="est-txt">{est}</div> : null}
                </div>
              </div>
              <div className="col-md-9">
                <div className="heading-icon-wrap">
                  <h2 className="top-heading">{name}</h2>
                </div>
                <div className="top-second-heading" />
                {tagline ? (
                  <div className="dtl" style={{ color: '#000000' }}>
                    {tagline}
                  </div>
                ) : null}
                <div className="btn-wrap">
                  {website ? (
                    <button className="btn meeting-btn">
                      <a
                        className="download-link"
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </a>
                    </button>
                  ) : null}
                  {social ? (
                    <div className="social-media-icon">
                      <SocialIcon href={social.facebook} icon="fa-brands fa-facebook-square" />
                      <SocialIcon href={social.twitter} icon="fa-brands fa-twitter" />
                      <SocialIcon href={social.linkedin} icon="fa-brands fa-linkedin" />
                      <SocialIcon href={social.instagram} icon="fa-brands fa-instagram" />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(founders && founders.length > 0) || (team && team.length > 0) || video ? (
        <section id="f-member" className="common-section second-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12">
                {founders && founders.length > 0 ? (
                  <div className="col-md-12 col-12 mb-3">
                    <div className="common-p-wrap members-wrap ">
                      <div className="founding-members">
                        <h3 className="title">Founding Members</h3>
                        {founders.map((founder, i) => (
                          <div className="card-wrap" key={i}>
                            <div className="card-lt">
                              <div className="img-wrap">
                                <img
                                  src={_asset0}
                                  alt=""
                                  className="img-abs"
                                />
                              </div>
                            </div>
                            <div className="card-rt dtl">
                              <div className="card-title">{founder.name}</div>
                              <div className="card-dtt">{founder.role}</div>
                              {founder.detail.map((line, j) => (
                                <div className="card-dtt" key={j}>
                                  {line}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}

                {team && team.length > 0 ? (
                  <div className="col-md-12 col-12 ">
                    <div className="common-p-wrap members-wrap">
                      <h3 id="t-member" className="title">
                        Team Members
                      </h3>
                      <ul>
                        {team.map((member, i) => (
                          <li className="dtl" key={i}>
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>

              {video ? (
                <div id="video" className="col-md-8 col-12">
                  <div className="youtube-wrap">
                    <iframe
                      title={name}
                      src={video}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      name=""
                      className="youtube-link"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {targetMarket || sector || problem || valueProposition ? (
        <section id="T-market" className="common-section three-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="common-p-wrap target-market">
                  {targetMarket && targetMarket.length > 0 ? (
                    <>
                      <h3 className="title">Target Market</h3>
                      <ul>
                        {targetMarket.map((item, i) => (
                          <li className="dtl" key={i}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                  {sector && sector.length > 0 ? (
                    <>
                      <h3 className="title">Sector</h3>
                      <ul>
                        {sector.map((item, i) => (
                          <li className="dtl" key={i}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="col-md-8">
                <div className="common-p-wrap problem-statement">
                  {problem ? (
                    <>
                      <h3 className="title">Problem Statement</h3>
                      <p className="dtl">{problem}</p>
                    </>
                  ) : null}
                  {valueProposition ? (
                    <>
                      <h3 className="title">Value Proposition</h3>
                      <p className="dtl">{valueProposition}</p>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {currentStage || businessType || products || highlights || awards ? (
        <section className="common-section fourth-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4  mb-3 mb-md-0">
                <div className="common-p-wrap">
                  {currentStage && currentStage.length > 0 ? (
                    <>
                      <h3 className="title">Current Stage</h3>
                      <ul>
                        {currentStage.map((item, i) => (
                          <li className="dtl" key={i}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                  {businessType && businessType.length > 0 ? (
                    <>
                      <h3 className="title">Type of Business</h3>
                      <ul>
                        {businessType.map((item, i) => (
                          <li className="dtl" key={i}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
              </div>
              {products ? (
                <div className="col-md-4  mb-3 mb-md-0">
                  <div className="common-p-wrap">
                    <h3 className="title">Products / Services</h3>
                    <p className="dtl">{products}</p>
                  </div>
                </div>
              ) : null}
              {(highlights && highlights.length > 0) || (awards && awards.length > 0) ? (
                <div id="key-h" className="col-md-4 ">
                  <div className="common-p-wrap">
                    <h3 className="title">Key Highlights</h3>
                    {highlights && highlights.length > 0 ? (
                      <ul className="dtl">
                        {highlights.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    {awards && awards.length > 0 ? (
                      <>
                        <h3 className="title">Awards</h3>
                        <ul className="dtl">
                          {awards.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {disclaimer ? (
        <section id="Disclaimer" className="common-section disclamer-section pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="disclamier-wrap">
                  <p className="disclamier">
                    <span className="disclamier-text">Disclaimer:</span>
                    {disclaimer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="free-trial-area ptb-100">
        <div className="shape10">
          <img alt="" src={_asset1} />
        </div>

        <div className="shape11">
          <img alt="" src={_asset2} />
        </div>

        <div className="shape12">
          <img alt="" src={_asset3} />
        </div>

        <div className="shape13">
          <img alt="" src={_asset4} />
        </div>
      </section>
    </div>
  );
};

export default StartupDetail;

