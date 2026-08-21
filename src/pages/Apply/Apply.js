
import _asset1 from "../../images/incubation.png";
import React from "react";
import PageTitle from "../../components/PageTitle";
import "./Apply.css";

import ShapeDecoration from "../../components/ShapeDecoration";
const Apply = () => {
  return (
    <>
      <PageTitle title="Apply for Support" />

      <section className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="p-4 fw-bolder lh-sm" color="#4a6f8a">
                iTIC has various programs that support startups at different junctures. The programs are categorized into four parts depending on the stage of the startup.
              </p>
            </div>
            <div className="col-12">
              <div className="row single-blog-post p-3" style={{ height: "auto" }}>
                <div className="col-4 m-auto">
                  <div className="p-3 text-center">
                    <img alt="" src={_asset1} style={{ minWidth: "150px" }} className="img-fluid" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="post-content pb-0" style={{ padding: "10px" }}>
                    <h3>Incubation</h3>
                    <p className="m-0 mb-2 lh-sm">For the startups that have a prototype, we have a structured incubation program of 24 months which aims to support startups, convert their prototypes into sellable products and gain traction.</p>
                  </div>
                  <div className="post-content pb-0" style={{ padding: "10px" }}>
                    <h3>Program under Incubation</h3>
                    <p className="m-0 mb-2 lh-sm">iTIC Incubation, NICE Incubation, TiHAN Incubation</p>
                    <div className="overview-content">
                      <a className="default-btn" href="https://forms.gle/FvwsN8RfyZP2eruAA" target="_blank" rel="noopener noreferrer">
                        Apply Now<span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <p className="pt-4 fw-bolder lh-sm" color="#4a6f8a">
                *AISEA and BEL Seed Fund are legacy programs. Applications are closed for these programs currently.
              </p>
              <div className="overview-content">
                Depending on your stage you may apply for the support at iTIC. For any queries while applying or filling the application form, please reach out to us on <a href="mail:contact@iTIC.iith.ac.in">contact@itic.iith.ac.in</a> or on <a href="tel:+918331036155">+91 83310 36155</a>
              </div>
              {/* <div className="about-content mt-4 text-center">
                <a
                  className="default-btn"
                  href="https://bit.ly/startup-at-itic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <ShapeDecoration />

    </>
  );
};

export default Apply;
