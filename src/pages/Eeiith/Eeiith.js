import _asset0 from '../../assets/about.jpg';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import './Eeiith.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const Eeiith = () => {
  return (
    <>
      <PageTitle title="Entrepreneurship Ecosystem at IITH" bg={_asset0} />

      <section className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
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
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
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
      </section>

      <ShapeDecoration />

    </>
  );
};

export default Eeiith;

