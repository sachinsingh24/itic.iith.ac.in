import _asset0 from "../../assets/Banner-img/Nidhi Prayas.jpg";
import _asset1 from "../../downloads/Nidhi Prayas Policy.pdf";
import React from "react";
import PageTitle from "../../components/PageTitle";
import Accordion from "react-bootstrap/Accordion";
import LogoList from "../../components/LogoList";
import { nidhiPrayasPartners } from "../../data/programPartners";
import "./NidhiPrayas.css";

import ShapeDecoration from "../../components/ShapeDecoration";
const NidhiPrayas = () => {
  return (
    <>
      <PageTitle title="NIDHI PRAYAS" subtitle="The moving force" bg={_asset0} />

      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <p>NIDHI PRomoting and Accelerating Young and ASpiring technology entrepreneurs (PRAYAS) is a pre-incubation initiative designed to support young innovators working in the hardware domain turn their ideas into proofs-of-concept.</p>
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
                <h2 className="section-heading">How the program delivers value</h2>

                <p>
                  NIDHI PRAYAS at iTIC focuses on supporting specifically hardware based deeptech ideas with the prototype grant of upto INR 10 Lakhs. NIDHI PRAYAS is a part of iTIC pre-incubation structured support.
                  <br />
                  Areas of interest for NIDHI PRAYAS are Manufacturing, Agriculture, Healthcare, Education, Infrastructure and transportation, Environment and cleantech, Clean-tech, Energy solutions, Biotechnology, Water and Internet of Things (IoT) , AI/ML &amp; Other technology areas.
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <h2 className="section-heading">Eligibility criteria</h2>

                <ul>
                  <li>An Indian Citizen</li>
                  <li>Age of innovator to be 18 or above</li>
                  <li>A graduate from Engineering or Science background</li>
                  <li>Working on a deep tech idea</li>
                  <li>Tech with a possible IP</li>
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
                      title: "What is NIDHI PRAYAS?",
                      body: "NIDHI-PRAYAS is a pre-incubation initiative to support idea/PoC stage entrepreneurs working on deeptech hardware ideas.",
                    },
                    {
                      title: "What is the duration of the program?",
                      body: "The total duration of the proposed project by innovators under the PRAYAS program is 12 months.",
                    },
                    {
                      title: "How can I apply?",
                      body: "Kindly apply using our preincubation form from our website.",
                    },
                    {
                      title: "What happens after the program?",
                      body: "The graduating startups become part of the Alumni network of the iTIC incubator and can leverage the benefits of IIT Hyderabad and iTIC\u2019s network of students, faculties, researchers, mentors, investors, policymakers, etc.",
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
                <a className="default-btn" href={_asset1} target="_blank" rel="noopener noreferrer">
                  NIDHI PRAYAS<span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoList logos={nidhiPrayasPartners} title="Partners, Patrons and Promoters" variant="card" stacked fluid />

      <ShapeDecoration />

    </>
  );
};

export default NidhiPrayas;
