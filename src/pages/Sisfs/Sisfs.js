import _asset0 from '../../assets/Banner-img/SISFS banner.jpg';
import _asset1 from '../../assets/logos/healthcare.png';
import _asset2 from '../../assets/logos/Agriculture.png';
import _asset3 from '../../assets/logos/biotechnology.png';
import _asset4 from '../../assets/logos/social-impact.png';
import _asset5 from '../../assets/logos/waste.png';
import _asset6 from '../../assets/logos/water-resource.png';
import _asset7 from '../../assets/logos/mortarboard.png';
import _asset8 from '../../assets/logos/financial.png';
import _asset9 from '../../assets/logos/energy.png';
import _asset10 from '../../assets/logos/mobility.png';
import _asset11 from '../../assets/logos/defance.png';
import _asset12 from '../../assets/logos/space.png';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import Accordion from 'react-bootstrap/Accordion';
import LogoList from '../../components/LogoList';
import { sisfsPartners } from '../../data/programPartners';
import './Sisfs.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const Sisfs = () => {
  return (
    <>
      <PageTitle title="SISFS" bg={_asset0} />

      <section className="about-area pt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <h2 className="section-heading">
                  Startup India Seed Fund Scheme
                </h2>
                <p>
                  <span style={{ fontWeight: 600 }}>SISFS </span>is an initiative
                  designed to provide financial assistance to early-stage
                  startups, enabling them to develop and validate their ideas and
                  progress toward commercialization. The program supports startups
                  with funding for proof of concept, prototype development,
                  product trials, market entry, and commercialization.
                </p>
                <a
                  className="default-btn"
                  href="https://seedfund.startupindia.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now<span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <h2 className="section-heading">
                  How the Program Delivers Value
                </h2>
                <p>
                  <span style={{ fontWeight: 600 }}>SISFS </span>
                  at iTIC focuses on assisting startups using technology in their
                  core products, services, or business models. The scheme offers a
                  grant of up to
                  <span style={{ fontWeight: 600 }}>INR 10 Lakhs </span> for proof
                  of concept, prototype development, and product trials, and up to
                  <span style={{ fontWeight: 600 }}>INR 50 Lakhs </span> for
                  market entry and scaling activities through convertible
                  instruments. The program aims to help startups scale up to a
                  level where they can secure further investments from angel
                  investors, venture capitalists, or loans from financial
                  institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <h2 className="section-heading">
                  Areas of interest for SISFS:
                </h2>
                <div className="row justify-content-center p-3 sisfs-sectors">
                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box value-iTIC">
                      <div className="icon">
                        <img alt="Co-working Space" src={_asset1} />
                      </div>

                      <h6>Healthcare</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img alt="Financial Aid" src={_asset2} />
                      </div>

                      <h6>Agriculture</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img alt="Ip support" src={_asset3} />
                      </div>

                      <h6>Biotechnology</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img alt="Mentorship" src={_asset4} />
                      </div>

                      <h6>Social Impact</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img alt="Maker Lab" src={_asset5} />
                      </div>

                      <h6>Waste Management</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img alt="Networking Events" src={_asset6} />
                      </div>

                      <h6>Water Management</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img alt="Software Tools" src={_asset7} />
                      </div>

                      <h6>Education</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img
                          alt="Technological Infrastructure"
                          src={_asset8}
                        />
                      </div>

                      <h6>Financial Inclusion</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img
                          alt="Technological Infrastructure"
                          src={_asset9}
                        />
                      </div>

                      <h6>Energy Solutions</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img
                          alt="Technological Infrastructure"
                          src={_asset10}
                        />
                      </div>

                      <h6>Mobility</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img
                          alt="Technological Infrastructure"
                          src={_asset11}
                        />
                      </div>

                      <h6>Defense</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-6">
                    <div className="features-box">
                      <div className="icon">
                        <img
                          alt="Technological Infrastructure"
                          src={_asset12}
                        />
                      </div>

                      <h6>Space</h6>
                    </div>
                  </div>
                </div>

                <div className="overview-content">
                  <h3 className="sub-heading">
                    various other sectors involving DeepTech and innovative
                    solutions
                  </h3>
                  <a
                    className="default-btn"
                    href="https://seedfund.startupindia.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <h2 className="section-heading">
                  Eligibility criteria
                </h2>

                <ul>
                  <li>
                    The startup must be
                    <span style={{ fontWeight: 600 }}>DPIIT-recognized</span> and
                    incorporated not more than
                    <span style={{ fontWeight: 600 }}>2 years</span> before the
                    application.
                  </li>
                  <li>
                    It should have at least
                    <span style={{ fontWeight: 600 }}>51% Indian shareholding.</span>
                  </li>
                  <li>
                    The startup should be working on a
                    <span style={{ fontWeight: 600 }}>DeepTech solution</span> with
                    potential for market fit, commercialization, and scalability.
                  </li>
                  <li>
                    It should not have received over
                    <span style={{ fontWeight: 600 }}>INR 10 Lakhs </span> in
                    financial support from other government schemes (excluding prize
                    money and subsidized services).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="faq-accordion full-width">
                                  <h2>FAQs</h2>

                                  <Accordion defaultActiveKey="0">
                  {[
                                      {
                                        title: 'What is SISFS?',
                                        body:
                                          'SISFS is a government-backed scheme providing early-stage funding to startups for developing and validating their business ideas and products.',
                                      },
                                      {
                                        title: 'What is the duration of the program?',
                                        body:
                                          'The SISFS program provides funding support for startups over a period of up to two years.',
                                      },
                                      {
                                        title: 'How can I apply?',
                                        body:
                                          'Startups can apply through the Startup India portal, where they can choose their preferred incubators. Applications are accepted on an ongoing basis.',
                                      },
                                      {
                                        title: 'What happens after the program?',
                                        body:
                                          'Graduating startups become part of the iTIC Alumni Network, gaining access to the broader ecosystem of IIT Hyderabad, including students, faculty, researchers, mentors, investors, and policymakers. This network provides ongoing support and resources to help startups grow further.',
                                      },
                                    ].map((item, i) => (
                    <Accordion.Item eventKey={String(i)} key={i}>
                      <Accordion.Header className="accordion-title">{item.title}</Accordion.Header>
                      <Accordion.Body className="accordion-content">{item.body}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoList logos={sisfsPartners} title="Partners, Patrons and Promoters" variant="card" stacked fluid />

      <ShapeDecoration />

    </>
  );
};

export default Sisfs;



