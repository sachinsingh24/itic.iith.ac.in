import _asset0 from "../../assets/Banner-img/NICE.jpg";
import _asset1 from "../../downloads/NICE Incubation _ Policy Document.pdf";
import _asset2 from "../../downloads/NICE FELLOWSHIP _ Policy Document.pdf";
import React from "react";
import PageTitle from "../../components/PageTitle";
import Accordion from "react-bootstrap/Accordion";
import LogoList from "../../components/LogoList";
import { nicePartners } from "../../data/programPartners";
import "./Nice.css";

import ShapeDecoration from "../../components/ShapeDecoration";
const Nice = () => {
  return (
    <>
      <PageTitle title="NICE" subtitle="Unlocking the power of DEEPTECH" bg={_asset0} extraStyle={{ backgroundPosition: "bottom" }} />

      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <p>
                  <span style={{ fontWeight: 600 }}>NMDC Innovation and Incubation Centre (NICE)</span> is a state of the art incubation centre for deeptech start-ups, providing fellowship and incubation support under the iTIC Incubator in collaboration with NMDC at IIT Hyderabad.
                  <br />
                  Areas of interest for NICE include AI/ML, Quantum Computing, AR/VR/MR, Cybersecurity, Robotics, IoT, Industry 4.0, Blockchain, Advance Materials, Drones, Biotechnology and others.
                </p>
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
                <p>NICE supports entrepreneurs and startups by providing the structured pre-incubation/incubation support which includes mentorship, co-working space, access to IITH infrastructure and Makerlab, networking opportunities, funding, investor connections and access to iTIC seminars and events.</p>

                <ul>
                  <li>NICE Fellowship is a funded fellowship program to support entrepreneurs at the idea/PoC stage. Fellows with a commercially viable product idea in the domains of interest to NICE are provided with a sustenance and prototyping funds of upto INR 9.6 lakhs for 12 months.</li>
                  <li>NICE Incubation is a grant program to support prototype stage startups in the areas of interest to NICE. Startups are provided with the financial aid of upto INR 25 Lakhs (in exchange of upto 3% equity).</li>
                </ul>

                <p>
                  <br />
                  Other than all iTIC Incubator benefits, startups associated with NICE can avail below benefits from NMDC Limited:
                </p>
              </div>
              <div className="overview-content">
                <ul>
                  <li>Technical Mentor connects</li>
                  <li>Market linkages</li>
                  <li>Access to R&amp;D facilities</li>
                  <li>Network connects</li>
                </ul>
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
                <h2 className="section-heading">Eligibility criteria</h2>
                <p>
                  <strong>The general eligibility criteria for applications:</strong>
                </p>
                <ul>
                  <li>Founder/s should be an Indian Citizen</li>
                  <li>Founder/s should be a graduate from Engineering or Science background</li>
                  <li>Working on a deep tech idea</li>
                </ul>
                <p>
                  <strong>Specific eligibility criteria for NICE Fellowship:</strong>
                </p>
                <ul>
                  <li>Idea/ PoC stage</li>
                  <li>Founder should be between the age of 18 to 35 years</li>
                  <li>Must be willing to work full-time with no predictable source of income</li>
                </ul>
                <p>
                  <strong>Specific eligibility criteria for NICE Incubation</strong>
                </p>
                <ul>
                  <li>Prototype/MVP stage</li>
                  <li>Tech with a possible IP</li>
                  <li>Private Limited company adhering to the definition of Startups given by DPIIT, Government of India.</li>
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
                      title: "What is NICE?",
                      body: "NMDC Innovation and Incubation Centre (NICE) is a joint initiative by the iTIC Incubator at IIT Hyderabad and NMDC Limited. The main objective of NICE is to promote the spirit of entrepreneurship and innovation in the country.",
                    },
                    {
                      title: "What is the duration of the program?",
                      body: "NICE Fellowship is a 1 year program and NICE Incubation is a 2 year program.",
                    },
                    {
                      title: "How do I apply?",
                      body: "Please apply using Pre-incubation and Incubation forms from our website.",
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
                  NICE INCUBATION<span></span>
                </a>
                <a className="default-btn" href={_asset2} target="_blank" rel="noopener noreferrer">
                  NICE FELLOWSHIP<span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoList logos={nicePartners} title="Partners, Patrons and Promoters" variant="card" stacked fluid />

      <ShapeDecoration />
    </>
  );
};

export default Nice;
