import _asset0 from '../../assets/about.jpg';
import _asset1 from '../../assets/img/shape/10.png';
import _asset2 from '../../assets/img/shape/7.png';
import _asset3 from '../../assets/img/shape/11.png';
import _asset4 from '../../assets/img/shape/12.png';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import './Eeiith.css';

const Eeiith = () => {
  return (
    <>
      <PageTitle title="Entrepreneurship Ecosystem at IITH" bg={_asset0} />

      <div className="service-details ptb-50" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="service-details-content">
            <div id="what-we-do" style={{ width: '100%', height: '180px', marginTop: '-180px' }}></div>

            <p align="justify">
              IIT Hyderabad has a vibrant entrepreneurial ecosystem, actualized through various
              formal and informal centers. We help guide the students from germination to mature
              business entity stages. These are enriched by various research labs and centers,
              helping create a culture of innovation. In addition, the academic structure also
              allows students to take a semester break for entrepreneurship initiatives or
              industrial internships.
            </p>
          </div>

          <div className="col-lg-12 col-md-12 pb-30">
            <div className="overview-content pl-3">
              <ul>
                <li>
                  <a href="https://cfhe.iith.ac.in/" target="_blank" rel="noopener noreferrer">
                    Centre for Healthcare Entrepreneurship
                  </a>
                </li>
                <li>
                  <a href="http://fabci.iith.ac.in/" target="_blank" rel="noopener noreferrer">
                    Fabless Chip Design Incubator
                  </a>
                </li>
                <li>
                  <a href="https://em.iith.ac.in/" target="_blank" rel="noopener noreferrer">
                    Department of Entrepreneurship and Management{' '}
                  </a>
                </li>
                <li>
                  <a href="https://ecell.iith.ac.in/" target="_blank" rel="noopener noreferrer">
                    E-Cell IIT Hyderabad
                  </a>
                </li>
                <li>
                  <a href="https://trp.iith.ac.in/" target="_blank" rel="noopener noreferrer">
                    Technology Research Park
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: '50px' }}></div>

      <section className="free-trial-area ptb-100 bg-f8fbfa">
        <div className="shape10">
          <a href="https://trp.iith.ac.in/" target="_blank" rel="noopener noreferrer">
            <img alt="" src={_asset1} />
          </a>
        </div>

        <div className="shape11">
          <a href="https://trp.iith.ac.in/" target="_blank" rel="noopener noreferrer">
            <img alt="" src={_asset2} />
          </a>
        </div>

        <div className="shape12">
          <a href="https://trp.iith.ac.in/" target="_blank" rel="noopener noreferrer">
            <img alt="" src={_asset3} />
          </a>
        </div>

        <div className="shape13">
          <a href="https://trp.iith.ac.in/" target="_blank" rel="noopener noreferrer">
            <img alt="" src={_asset4} />
          </a>
        </div>
      </section>

      <p>
        <br />
        <br />
        {'\u00a0'}
      </p>
    </>
  );
};

export default Eeiith;

