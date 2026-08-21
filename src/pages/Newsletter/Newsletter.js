import _asset0 from '../../assets/media.jpg';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import './Newsletter.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const Newsletter = () => {
  return (
    <>
      <PageTitle
        title="Media"
        subtitle="Newsletter"
        bg={_asset0}
        extraStyle={{ backgroundPosition: 'bottom' }}
      />

      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content text-center">
                <p>Newsletters will be published here soon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ShapeDecoration />
    </>
  );
};

export default Newsletter;
