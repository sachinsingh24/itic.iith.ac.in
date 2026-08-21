import _asset0 from "../../assets/Banner-img/AISEA.jpg";
import React from "react";
import PageTitle from "../../components/PageTitle";
import Accordion from "react-bootstrap/Accordion";
import LogoList from "../../components/LogoList";
import { aiseaPartners } from "../../data/programPartners";
import "./Aisea.css";

import ShapeDecoration from "../../components/ShapeDecoration";
const Aisea = () => {
  return (
    <>
      <PageTitle title="AISEA" subtitle="Unimpeded Acceleration!" bg={_asset0} />

      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="overview-content">
                <p>
                  AISEA (AFI iTIC Foundation Social Entrepreneurship Accelerator) is set up jointly by Action For India and iTIC Incubator at IIT Hyderabad. AISEA started its operations early in the year 2020 post getting support from the Department of Science and Technology, Government of India under the NIDHI Accelerator scheme.
                  <br />
                  <br />
                  The key areas that merit attention under the program are
                </p>

                <ul>
                  <li>Cohort 1:health-tech, edu-tech and agri-tech</li>
                  <li>Cohort 2:health-tech</li>
                </ul>

                <p>AISEA conducted two cohorts of 4 months each, with 15 startups graduating in Cohort 1 and 14 startups graduating in Cohort 2.</p>
                <p>AISEA program is currently inactive. Please check other programs for startup support.</p>
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

                <p>AISEA strives to establish an accelerator that maximizes an enterprise&rsquo;s potential for societal benefit and profit, by assembling a world-class team of experts, creating the infrastructure for seamless peer-to-peer learning, and developing the platform to enhance the accelerator impact. It augments mentoring from various domain experts &amp; serial entrepreneurs, global connections, investor connects, on-demand mentoring, ecosystem connects with government, policymakers, customers, researchers, thought leaders etc., and facilitates partnership opportunities which enable startups to save time and efforts from making costly mistakes in their ventures.</p>
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

                <ul>
                  <li>The idea should be technology backed and socially impactful</li>
                  <li>The startup should have early traction</li>
                  <li>The start-up founder should be a citizen of India</li>
                  <li>Startups having their own IP are preferable</li>
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
                      title: "What is the duration of the program?",
                      body: "The accelerator program is four months long",
                    },
                    {
                      title: "Is funding a part of the program?",
                      body: "AISEA does not invest in startups directly as of now. However, we do connect startups to various investors from the network of AISEA, iTIC Incubator, and Action For India. Startups will get several opportunities to meet investors during the course of the program.",
                    },
                    {
                      title: "Does AISEA get any ownership on the Intellectual Property of startups?",
                      body: "AISEA does not ask for any ownership of the existing or the new IP developed by the startups.",
                    },
                    {
                      title: "Does AISEA charge anything for the program?",
                      body: "AISEA does not charge any cash or equity from the startups for the Accelerator program",
                    },
                    {
                      title: "What happens after the program?",
                      body: "The graduating startups become a part of the Alumni network of AISEA and can leverage the benefits of IIT Hyderabad and Action For India\u2019s network of students, faculties, researchers, mentors, investors, policymakers, etc.",
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

      <LogoList logos={aiseaPartners} title="Partners, Patrons and Promoters" variant="card" stacked fluid />

      <ShapeDecoration />
    </>
  );
};

export default Aisea;
