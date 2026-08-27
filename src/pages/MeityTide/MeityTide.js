import _asset0 from "../../assets/Banner-img/Meity Program.jpg";
import _asset1 from "../../downloads/Meity Scheme _ Policy Document.pdf";
import React from "react";
import PageTitle from "../../components/PageTitle";
import Accordion from "react-bootstrap/Accordion";
import LogoList from "../../components/LogoList";
import { meityTidePartners } from "../../data/programPartners";
import "./MeityTide.css";

import ShapeDecoration from "../../components/ShapeDecoration";
const MeityTide = () => {
  return (
    <>
      <PageTitle title="Meity-TIDE 2.0" subtitle="Enabling Environment for Technology Adoption" bg={_asset0} />

      <section className="about-area pt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <p>TIDE 2.0 is a program by the Ministry of Electronics &amp; Information Technology (MeitY) to promote tech entrepreneurship through financial and technical support for ICT startups primarily engaged in emerging technologies such as IoT, AI, Blockchain, Robotics etc. Some of the pre-identified areas of societal relevance are Education, Agriculture, Financial inclusion including digital payments, Infrastructure and transportation, Environment and cleantech, Clean energy and other emerging areas.</p>
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

                <p>TIDE 2.0 fosters and evangelises a vibrant entrepreneurship ecosystem that inspires budding entrepreneurs as well as supports existing ones. It creates entrepreneurship models of both financial as well as social value. Along with this it provides holistic incubation support including co-working space, mentoring, funding, and networking for startups.</p>
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
                <h2 className="section-heading">Funding</h2>
                <ul>
                  <li>Idea/PoC stage startups are awarded the EiR stipend of upto INR 4 Lakhs and pre-incubation support of 1 year for validation and development of that idea.</li>
                  <li>Prototype stage startups are provided with the grant support of upto INR 7 Lakhs and pre-incubation support of 1 year.</li>
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
                  <b>The eligibility criteria for EiR candidates:</b>
                </p>

                <ul>
                  <li>The applicant must be a citizen of India.</li>
                  <li>The applicant should have an idea or PoC</li>
                  <li>At least one Co-founder should be willing to pursue the idea full-time.</li>
                </ul>

                <p>
                  <b>The eligibility criteria for grant position candidates:</b>
                </p>

                <ul>
                  <li>The applicant must be a citizen of India.</li>
                  <li>The applicant should have a Proof of Concept (POC) or Prototype</li>
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
                      title: "What is MeitY TIDE 2.0?",
                      body: "The Ministry of Electronics and Information Technology (MeitY), Government of India has recently launched the Technology Incubation and Development of Entrepreneurs (TIDE 2.0) program. This program aims to support technology Startups, leveraging ICT enabled technologies, in selected areas of national concern, e.g. Healthcare, Education, Agriculture, Financial inclusion including digital payments, Infrastructure and transportation, Environment and cleantech, Clean energy and other emerging areas.",
                    },
                    {
                      title: "What are the areas of interest?",
                      body: "This program supports tech startups addressing societal challenges in selected thematic areas identified based on national priorities. They are- \n\u00a0\u00a0Healthcare\n\u00a0\u00a0Education\n\u00a0\u00a0Agriculture\n\u00a0\u00a0Financial inclusion including digital payments\n\u00a0\u00a0Infrastructure and transportation\n\u00a0\u00a0Environment and cleantech\n\u00a0\u00a0Clean energy solutions\n\u00a0\u00a0Other emerging areas (flexibility to support tech startups to address societal challenges in ICT areas)",
                    },
                    {
                      title: "What is the duration of the program?",
                      body: "The duration of support will be 12 months.",
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
                  MEITY SCHEME<span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoList logos={meityTidePartners} title="Partners, Patrons and Promoters" variant="card" stacked fluid />

      <ShapeDecoration />
    </>
  );
};

export default MeityTide;
