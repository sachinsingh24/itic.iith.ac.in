import _asset0 from '../../assets/about.jpg';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import LogoList from '../../components/LogoList';
import { grantFundingAgencies, partners } from '../../data/logos';
import './AboutUs.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const AboutUs = () => {
  return (
    <>
      <PageTitle title="About us" bg={_asset0} />

      <div className="service-details pt-4 pt-30 pb-30">
        <div className="container">
          <div className="service-details-content">
            <div id="what-we-do" style={{ width: '100%', height: '180px', marginTop: '-180px' }}></div>

            <h3 className="section-title section-heading text-center" style={{ overflow: 'hidden' }}>
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

            <h2 className="section-heading text-center">
              How We Do
            </h2>

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

      <LogoList logos={grantFundingAgencies} title="Grant and funding agencies" stacked />

      <LogoList logos={partners} title="Partners" stacked />

      <ShapeDecoration />

    </>
  );
};

export default AboutUs;

