import _asset0 from '../../assets/people1.jpg';
import _asset1 from '../../assets/img/shape/10.png';
import _asset2 from '../../assets/img/shape/7.png';
import _asset3 from '../../assets/img/shape/11.png';
import _asset4 from '../../assets/img/shape/12.png';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import './Careers.css';

const Careers = () => {
  return (
    <>
      <PageTitle title="Careers" bg={_asset0} />

      <div className="container mb-n5">
        <h1 className="m-5 d-flex justify-content-center fs-2">
          There are currently no openings. Kindly check back later
        </h1>
      </div>

      <div className="m-3 text-center align-items-center">
        <div className="others-options justify-content-center m-3">
          <a
            href="/work-with-iTIC.html"
            className="default-btn"
            style={{ paddingLeft: '25px' }}
          >
            Work with iTIC<span></span>
          </a>
        </div>
      </div>

      <section
        className="free-trial-area pb-100 bg-f8fbfa"
        style={{ paddingTop: '180px' }}
      >
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

export default Careers;

