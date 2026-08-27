import _asset0 from '../../assets/people1.jpg';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import './Careers.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const Careers = () => {
  return (
    <>
      <PageTitle title="Careers" bg={_asset0} />

      <section className="about-area pt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content text-center">
                <h2 className="section-heading">
                  There are currently no openings
                </h2>
                <p>Kindly check back later, or write to us about how you could contribute.</p>
                <a href="/work-with-iTIC.html" className="default-btn">
                  Work with iTIC<span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ShapeDecoration />
    </>
  );
};

export default Careers;
