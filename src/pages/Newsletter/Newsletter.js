import _asset0 from '../../assets/media.jpg';
import _asset1 from '../../assets/img/shape/10.png';
import _asset2 from '../../assets/img/shape/7.png';
import _asset3 from '../../assets/img/shape/11.png';
import _asset4 from '../../assets/img/shape/12.png';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <>
      <PageTitle
        title="Media"
        subtitle="Newsletter"
        bg={_asset0}
        extraStyle={{ backgroundPosition: 'bottom' }}
      />

      <section className="blog-area ptb-100">
        <div className="container">
          <div className="row">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;

