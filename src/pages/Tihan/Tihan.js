import _asset0 from '../../assets/Banner-img/TiHAN.jpg';
import _asset1 from '../../downloads/TiHAN Incubation _ Policy Document.pdf';
import _asset2 from '../../downloads/TiHAN PRAYAS_EIR _ Policy Document.pdf';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import Accordion from 'react-bootstrap/Accordion';
import LogoList from '../../components/LogoList';
import { tihanPartners } from '../../data/programPartners';
import './Tihan.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const Tihan = () => {
  return (
    <>
      <PageTitle title="TiHAN" bg={_asset0} />

      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <p>
                  Department of Science and Technology (DST) under the National
                  Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS),
                  Government of India has sanctioned the prestigious Technology
                  Innovation Hub to IIT Hyderabad in the technological vertical of
                  Autonomous Navigation and Data Acquisition Systems (UAVs, ROVs,
                  etc.). TiHAN runs startup support programs in collaboration with
                  iTIC Incubator.
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
                  Areas of interest for TiHAN are:
                </h2>

                <ul>
                  <li>
                    AI/ML frameworks for autonomous navigation and efficient
                    multi-sensory data aggregation using Unmanned Aerial Vehicles
                    (UAVs), Remotely Operated Vehicles (ROVs), etc.
                  </li>
                  <li>
                    IoT and CPS architectures for efficient usage of UAVs, ROVs,
                    etc., in the Indian context.
                  </li>
                  <li>Remote Sensing and Geographical Information Systems.</li>
                  <li>
                    Efficient edge computing architectures for multi-sensory
                    information processing.
                  </li>
                  <li>Control Engineering.</li>
                  <li>
                    Aerodynamics and Mechanical Design aspects of efficient UAVs,
                    ROVs, etc.
                  </li>
                  <li>Robotics related to autonomous systems.</li>
                  <li>Design for Smart Mobility (aerial/terrestrial).</li>
                  <li>Efficient image processing techniques.</li>
                  <li>Autonomous vehicle swarms and their applications.</li>
                  <li>Drone Components (Make in India).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <h2 className="section-heading">
                  How the program delivers value
                </h2>

                <p>
                  TiHAN startup support system includes pre-incubation, incubation
                  and acceleration support programs for entrepreneurs and startups.
                </p>

                <ul>
                  <li>
                    TiHAN PRAYAS/EiR program is meant predominantly for idea stage
                    and aspiring entrepreneurs. It will provide the grantee with a
                    monthly fellowship, grant funding and other support under a
                    structured pre-incubation program.
                  </li>
                  <li>
                    TiHAN Incubation program supports prototype stage startups.
                    Under this program, the startup receives funding support of upto
                    INR 25 Lakhs and other support under a structured incubation
                    program.
                  </li>
                </ul>

                <p>
                  Other than benefits provided by iTIC, special support for startups
                  working under TiHAN, includes access to:
                </p>

                <ul>
                  <li>Test Tracks</li>
                  <li>Emulation of Real-World Scenarios</li>
                  <li>State of the Art Simulation Technologies</li>
                  <li>Road Infrastructure</li>
                  <li>V2X Communication</li>
                  <li>Drone Runways and Landing Area</li>
                  <li>Mechanical Integration Facility</li>
                  <li>Centralized Control Room/Ground Control Station</li>
                  <li>Hangars and many more.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <h2 className="section-heading">
                  Eligibility criteria
                </h2>

                <ul>
                  <li style={{ listStyle: 'none' }}>
                    <p style={{ color: '#4a6f8a', fontWeight: 'bold' }}>
                      General criterias
                    </p>
                  </li>
                  <li>
                    The idea should be on deep technology and under the areas of
                    interest for TiHAN.
                  </li>
                  <li>The start-up founder should be a citizen of India.</li>
                </ul>

                <ul>
                  <li style={{ listStyle: 'none' }}>
                    <p style={{ color: '#4a6f8a', fontWeight: 'bold' }}>
                      For PRAYAS/EiR:
                    </p>
                  </li>
                  <li>Entrepreneurs or Start-ups working at idea/PoC stage.</li>
                </ul>

                <ul>
                  <li style={{ listStyle: 'none' }}>
                    <p style={{ color: '#4a6f8a', fontWeight: 'bold' }}>
                      For Incubation:
                    </p>
                  </li>
                  <li>Entrepreneurs or Start-ups working at prototype stage.</li>
                  <li>Definite Proof of Concept (POC) is a prerequisite.</li>
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
                              title: 'What is TiHAN?',
                              body:
                                'The Technology Innovation Hub on Autonomous Navigation Systems and Data Acquisition System (for UAVs, ROVs, etc) at IIT Hyderabad, known as \u2018TiHAN Foundation\u2018 . It has been incorporated as a Section-8 company by the institute in June 2020.',
                            },
                            {
                              title: 'What is TiHAN Pre-incubation (Prayas/EIR)?',
                              body:
                                'Meant predominantly for idea stage and aspiring entrepreneurs. It will provide the grantee with a monthly fellowship, grant funding and other support under a structured pre-incubation program',
                            },
                            {
                              title: 'What is TiHAN Incubation ?',
                              body:
                                'Meant for early stage startups at Prototype stage. It will provide the startup with funding (upto INR 25 Lakhs) and other support under a structured incubation program.',
                            },
                            {
                              title: 'How to apply?',
                              body:
                                'Kindly fill the preincubation/incubation form on our website.',
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

      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <h3 className="sub-heading">Download Policies :</h3>
                <a
                  className="default-btn"
                  href={_asset1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TiHAN INCUBATION<span></span>
                </a>
                <a
                  className="default-btn"
                  href={_asset2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TiHAN PRAYAS_EIR<span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoList logos={tihanPartners} title="Partners, Patrons and Promoters" variant="card" stacked fluid />

      <ShapeDecoration />

    </>
  );
};

export default Tihan;



