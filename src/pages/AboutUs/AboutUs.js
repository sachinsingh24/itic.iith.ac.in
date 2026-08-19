import _asset0 from '../../assets/about.jpg';
import _asset1 from '../../assets/img/shape/10.png';
import _asset2 from '../../assets/img/shape/7.png';
import _asset3 from '../../assets/img/shape/11.png';
import _asset4 from '../../assets/img/shape/12.png';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import LogoList from '../../components/LogoList';
import { grantFundingAgencies, partners } from '../../data/logos';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <PageTitle title="About us" bg={_asset0} />

      <div className="service-details ptb-50" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="service-details-content">
            <div id="what-we-do" style={{ width: '100%', height: '180px', marginTop: '-180px' }}></div>

            <h3
              className="section-title"
              style={{
                fontSize: '40px',
                fontWeight: 600,
                textAlign: 'center',
                overflow: 'hidden',
                marginBottom: '15px',
              }}
            >
              What We Do
            </h3>

            <p align="justify">
              iTIC is one of the leading incubation centres in India and is working towards
              sensitization, ideation, incubation and acceleration of startups. For passionate
              individuals and aspiring entrepreneurs, iTIC conducts sensitization events which
              provide them exposure to the startup ecosystem and inspire them to choose
              entrepreneurship as a career. For idea/POC stage entrepreneurs, iTIC provides a
              structured pre-incubation program of 12 months. The aim of this program is to
              support entrepreneurs convert their ideas into a working prototype. For the
              startups that have a prototype or an MVP, iTIC provides a structured incubation
              program of 24 months. The aim of this program is to support startups convert their
              prototypes into sellable products and gain traction. When a startup has early
              traction in the market and wants to grow exponentially, iTIC supports startups via
              cohort based 4-6 months acceleration programs.
            </p>

            <div id="how-we-do" style={{ width: '100%', height: '150px', marginTop: '-150px' }}></div>

            <h3
              style={{
                fontSize: '40px',
                fontWeight: 600,
                textAlign: 'center',
                marginBottom: '15px',
              }}
            >
              How We Do
            </h3>

            <p align="justify">
              iTIC incubator dispenses stagewise intervention for startups to grow in the
              deep-tech entrepreneurial ecosystem. For fresh startups getting access to funding
              or finding contacts in project areas to speak with, or coming up with a pitchbook
              can seem very mystifying at first. We help to overcome these barriers by
              presenting collaborations and tools that have been extremely useful to iTIC
              incubatees in the past. Our regular follow up and assessment techniques contribute
              to understanding the effectiveness of a programme, activities, costs and benefits
              for different stakeholders.
            </p>
          </div>
        </div>
      </div>

      <div style={{ margin: '50px' }}></div>

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

      <LogoList logos={grantFundingAgencies} title="Grant and funding agencies" stacked />

      <LogoList logos={partners} title="Partners" stacked />

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

export default AboutUs;

