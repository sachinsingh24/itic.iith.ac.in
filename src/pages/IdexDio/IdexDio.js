import _asset0 from '../../assets/Banner-img/iDEX.jpg';
import _asset1 from '../../assets/img/shape/10.png';
import _asset2 from '../../assets/img/shape/7.png';
import _asset3 from '../../assets/img/shape/11.png';
import _asset4 from '../../assets/img/shape/12.png';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import Accordion from 'react-bootstrap/Accordion';
import LogoList from '../../components/LogoList';
import { idexDioPartners } from '../../data/programPartners';
import './IdexDio.css';

const IdexDio = () => {
  return (
    <>
      <PageTitle
        title="iDEX"
        subtitle="Fostering Innovation For Defence Excellence"
        bg={_asset0}
      />

      <section className="about-area pt-30 pb-15">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-16">
              <div className="about-content">
                <p>
                  Innovations for Defense Excellence (iDEX) aims at creation of an
                  ecosystem to foster innovation and technology development in
                  Defence and Aerospace by engaging Industries including MSMEs,
                  start-ups, individual innovators, R&amp;D institutes &amp;
                  academia.
                </p>

                <p>
                  iDEX provides them grants/funding and other support to carry out
                  R&amp;D which has good potential for future adoption for Indian
                  defence and aerospace needs. iTIC Incubator at IIT Hyderabad is
                  one of the Partner Incubators (PI) for iDEX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12">
            <div className="overview-content pl-3">
              <h2 style={{ fontSize: '40px', fontWeight: 600 }}>
                How the program delivers value
              </h2>

              <p>
                iDEX engages startups via open challenges and DISC challenges. The
                benefits include access to funding, product co-development with
                the military (Army/Navy/Airforce), certification, facilitation of
                pilots, and finally integrating the technologies and products
                developed into the military applications.
              </p>

              <p>
                The program also includes mentorship support by iTIC/IITH, access
                to workshops and seminars, and access to iTIC/IITH infrastructure.
                This support shall allow the innovators to try their ideas without
                any fear of failure, hence allowing them to reach a stage where
                they have a ready product and are willing to approach incubators
                for commercialization.
              </p>

              <div className="about-content">
                <a
                  className="default-btn"
                  href="https://idex.gov.in/"
                  style={{ paddingLeft: '25px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="faq-area pt-30 ptb-30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12">
                <div className="faq-accordion full-width">
                  <h2>FAQs</h2>

                  <Accordion defaultActiveKey="0">
  {[
                      {
                        title: 'What is iDEX?',
                        body:
                          'iDEX is a framework promulgated by the Ministry of Defence and launched by the Hon\u2019ble PM in April 2018. iDEX aims to achieve self-reliance and foster innovation and technology development in the Defence and Aerospace industries by including MSME, startups, individual innovators, R&D institutes etc.',
                      },
                      {
                        title: 'What is DIO (Defence Innovation Organisation)?',
                        body:
                          'DIO is a not for profit organisation incorporated under the Section 8 of the companies act by two founding members; HAL & BEL. iDEX framework is being implemented by DIO.',
                      },
                      {
                        title: 'How iDEX works?',
                        body:
                          'DIO-iDEX has launched the Defence India Startup Challenge (DISC) with problem statements from Armed Forces, DPSUs, & OFB. After rigorous evaluation of the applications, winners are identified. Winners receive innovation grants in technological areas through the prototype funding guidelines.',
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
      </div>

      <LogoList logos={idexDioPartners} title="Partners, Patrons and Promoters" variant="card" stacked fluid />

      <section className="free-trial-area ptb-100 bg-f8fbfa">
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
    </>
  );
};

export default IdexDio;



