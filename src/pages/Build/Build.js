import _asset0 from '../../assets/Banner-img/build1980.jpeg';
import _asset1 from '../../assets/logos/build/Atal Incubation Center BAnasthali Vidhapith.jpg';
import _asset2 from '../../assets/logos/build/FIST.jpg';
import _asset3 from '../../assets/logos/build/Drishti CPS Foundation.png';
import _asset4 from '../../assets/logos/build/SIKKIM.jpg';
import _asset5 from '../../assets/logos/build/ACIC BMU Foundation.jpg';
import _asset6 from '../../assets/logos/build/MBCIE.jpg';
import _asset7 from '../../assets/logos/build/venture.jpeg';
import _asset8 from '../../assets/logos/build/SRIX.jpg';
import _asset9 from '../../assets/logos/build/VJ HUB.jpg';
import _asset10 from '../../assets/logos/build/Vinayak Mission Research Foundation.jpg';
import _asset11 from '../../assets/logos/build/KIET.jpg';
import _asset12 from '../../assets/logos/build/Sandip Foundation.jpg';
import _asset13 from '../../assets/logos/build/Atal Incubation Center.jpg';
import _asset14 from '../../assets/logos/build/VISHVA.jpg';
import _asset15 from '../../assets/img/shape/10.png';
import _asset16 from '../../assets/img/shape/7.png';
import _asset17 from '../../assets/img/shape/11.png';
import _asset18 from '../../assets/img/shape/12.png';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import { buildPartners } from '../../data/programPartners';
import './Build.css';

const Build = () => {
  return (
    <>
      <PageTitle
        title="BUILD"
        subtitle="Bold & Unique Idea Lead Development"
        bg={_asset0}
      />

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 pb-30 pt-30">
              <div className="about-content">
                <h3 style={{ fontSize: '35px', fontWeight: 600 }}>
                  What is BUILD?
                </h3>
                <br />
                <p>
                  iTIC Incubator at IIT Hyderabad and Greenko Group have
                  collaborated to launch the Bold &amp; Unique Idea Lead
                  Development (BUILD) program. BUILD is a distinct initiative that
                  aims to scout and support 75 student innovators and offer
                  financial assistance as well as other necessary support for
                  their creative and innovative ideas. The primary objective of
                  BUILD is to support undergraduate students and recent graduates
                  for building their innovative ideas and eventually turn into a
                  startup. It aims to foster a student-centric innovation
                  ecosystem by providing resources such as design, fabrication,
                  business mentorship, and other related support.
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 pb-30">
              <div className="overview-content pl-3">
                <h3>Supported by:</h3>
              </div>
              <div className="clients-logo-list align-items-center d-flex justify-content-center">
                {buildPartners.map((logo) => (
                  <div key={logo.src} className="single-clients-logo">
                    <span>
                      <img alt={logo.alt} src={logo.src} style={logo.style} title={logo.title} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 pb-30">
              <div className="overview-content pl-3">
                <br />
                <h3 style={{ fontSize: '35px', fontWeight: 600 }}>
                  Aims and Objectives of BUILD
                </h3>
                <p>
                  The primary objective of BUILD is to support undergraduate
                  students and recent graduates for building their innovative
                  ideas through technology mentoring, validation, intellectual
                  property support, marketing strategy, team building, and
                  fundraising advisory services. The aim of Build program is to:
                </p>

                <ul>
                  <li>Support 75 innovators within one year</li>
                  <li>Provide financial support</li>
                  <li>
                    Provide a platform for faster experimentation and innovative
                    approaches
                  </li>
                  <li>
                    Foster innovative solutions to local and global problems
                  </li>
                  <li>
                    Attract a large number of enthusiastic and problem-solving
                    youth to work on technology-based startups
                  </li>
                  <li>
                    Encourage students in the ideation stage to pursue
                    entrepreneurship for their ventures
                  </li>
                  <li>
                    Promote entrepreneurship related to technology business ideas
                    as an attractive career option
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 pb-30">
              <div className="overview-content pl-3">
                <br />
                <h2 style={{ fontSize: '35px', fontWeight: 600 }}>
                  iTIC Incubator at IIT Hyderabad - Program Management Unit (PMU)
                </h2>
                <p>
                  The iTIC Incubator at IIT Hyderabad will serve as the Program
                  Management Unit (PMU) for the BUILD program at the PAN India
                  level. The Partner Incubators (PI) spread across India would
                  scout, shortlist and support innovators. Innovators can choose
                  their preferred PI choice while filling out the application
                  form. iTIC Incubator will work with each PI to ensure that
                  startups receive comprehensive support at the early stage of
                  development.
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 pb-30">
              <div className="overview-content pl-3">
                <br />
                <h2 style={{ fontSize: '35px', fontWeight: 600 }}>
                  Role of Partner Incubator (PI)
                </h2>

                <p>
                  The role of Partner Incubators in the BUILD Program is pivotal
                  in fostering innovation and supporting aspiring entrepreneurs.
                  These external incubation organizations collaborate closely with
                  the PMU to provide crucial resources, mentorship, and guidance
                  to startups and innovators. PIs play a vital role in the
                  selection process, onboarding of innovators, and facilitating
                  the overall growth and development of participating startups.
                  With their expertise, networks, and infrastructure, Partner
                  Incubators contribute to creating a nurturing environment for
                  startups to thrive, transforming innovative ideas into
                  successful and scalable business ventures. Their collaboration
                  with the iTIC Incubator ensures that startups receive
                  comprehensive support, enabling them to navigate the challenges
                  of early-stage development and maximize their potential for
                  success within the framework of the BUILD Program.
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 pb-30">
              <div className="overview-content pl-3">
                <br />
                <h2 style={{ fontSize: '35px', fontWeight: 600 }}>
                  Program Structure
                </h2>

                <p>
                  The BUILD project will have a duration of 12 months, with a
                  progress review by the committee at the end of the first six
                  months. The funds to innovators would be distributed into 2
                  tranches: first after signing the agreement and second after 6
                  month review by the committee.
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 pb-30">
              <div className="overview-content pl-3">
                <br />
                <h2 style={{ fontSize: '35px', fontWeight: 600 }}>
                  Selection Process
                </h2>

                <ul>
                  <li>Startups to fill out a common application form</li>
                  <li>
                    After assessment, selected applicants will be interviewed and
                    selected by the PIs.
                  </li>
                  <li>
                    Following the acceptance of the Letter of Intent (LOI), the
                    due diligence process will commence.
                  </li>
                  <li>
                    Upon satisfactory due diligence and acceptance, the first
                    tranche will be disbursed for the first six months.
                  </li>
                  <li>
                    At the end of six months, the committee would review the
                    progress and disburse the remaining funds.
                  </li>
                </ul>
                &nbsp;
              </div>
            </div>

            <div className="col-lg-12 col-md-12 pb-30">
              <div className="overview-content pl-3">
                <br />
                <h2 style={{ fontSize: '35px', fontWeight: 600 }}>
                  Benefits to the Innovators
                </h2>

                <ul>
                  <li>Access to vast network of mentors</li>
                  <li>Opportunities to seek financial funding and support</li>
                  <li>Access to the facilities of iTIC Incubator</li>
                  <li>Prototyping support</li>
                  <li>IPR filing support</li>
                  <li>Co-working space</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 pb-30">
              <div className="overview-content pl-3">
                <br />
                <h2 style={{ fontSize: '35px', fontWeight: 600 }}>
                  Eligibility criteria
                </h2>

                <ul>
                  <li>Innovator must be an Indian citizen</li>
                  <li>Innovator must be from UG students or recent graduates</li>
                  <li>An Individual Innovator or a team can also apply</li>
                  <li>
                    Innovation should contribute towards either development or
                    improvement of any product or process in existing or new
                    fields; or should be a scalable business model with a
                    potential to generate employment or wealth creation
                  </li>
                </ul>
              </div>
              &nbsp;
            </div>

            <div className="col-lg-12 col-md-12 pb-30">
              <div className="overview-content pl-3">
                <div className="others-options">
                  <a
                    className="default-btn py-2"
                    href="https://forms.gle/dmd8wBzExYH8Z8hv8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ paddingLeft: '25px' }}
                  >
                    Apply Now<span></span>
                  </a>
                </div>
                <br />
                <h2 style={{ fontSize: '20px', fontWeight: 600 }}>
                  Deadline to apply: July 25, 2023
                </h2>
                <br />
                <h2 style={{ fontSize: '20px', fontWeight: 600 }}>
                  For any queries, feel free to reach out to us on
                  contact@itic.iith.ac.in
                </h2>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-area pb-30">
        <div className="container">
          <div className="overview-content pl-3 mb-5">
            <h2 style={{ fontSize: '35px', fontWeight: 600, textAlign: 'center' }}>
              Partner Incubators under BUILD program
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="features-box value-iTIC">
                <div className="icon">
                  <img
                    alt="Banasthali Vidyapeeth, Banasthali"
                    src={_asset1}
                  />
                </div>

                <h6>AIC Banasthali Vidyapeeth, Banasthali</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img
                    alt="Indian Institute of Technology Patna"
                    src={_asset2}
                  />
                </div>

                <h6>
                  Foundation for Innovators in Science and Technology, IIT Patna
                </h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img alt="" src={_asset3} />
                </div>

                <h6>IIT DRISHTI CPS Foundation, IIT Indore</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img alt="" src={_asset4} />
                </div>

                <h6>National Institute of Technology, Sikkim</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img alt="" src={_asset5} />
                </div>

                <h6>ACIC-BMU Foundation</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img
                    alt="Munjal Birmingham City University Centre of Innovation and Entrepreneurship, Ludhiana"
                    src={_asset6}
                  />
                </div>

                <h6>MBCIE, Ludhiana</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img alt="" src={_asset7} />
                </div>

                <h6>Venture Development Centre GITAM</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img
                    alt="SR Innovation Exchange Warangal"
                    src={_asset8}
                  />
                </div>

                <h6>SR Innovation Exchange Warangal</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img
                    alt="Vallurupalli Nageswara Rao Vigana Jyothi Institute of Engineering and Technology Hyderabad"
                    src={_asset9}
                  />
                </div>

                <h6>VJ-Hub, VNR VJIET, Hyderabad</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img
                    alt="Vinayaka Missions Research Foundation, Tamil Nadu"
                    src={_asset10}
                  />
                </div>

                <h6>Vinayaka Missions Research Foundation, Tamil Nadu</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img
                    alt="Krishna Institute of Engineering and Technology, Ghaziabad"
                    src={_asset11}
                  />
                </div>

                <h6>KIET Group of Institutions Ghaziabad</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img
                    alt="Sandip Incubator Nashik"
                    src={_asset12}
                  />
                </div>

                <h6>Sandip Incubator Nashik</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img
                    alt="Atal Incubation Centre  Nalanda Institute of Technology Foundation, Bubaneshwar"
                    src={_asset13}
                  />
                </div>

                <h6>AIC-NITF, Bubaneshwar</h6>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img alt="Vishnu" src={_asset14} />
                </div>

                <h6>Vishnu Foundation TBI, Bhimavaram</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="free-trial-area ptb-100 bg-f8fbfa">
        <div className="shape10">
          <img alt="" src={_asset15} />
        </div>

        <div className="shape11">
          <img alt="" src={_asset16} />
        </div>

        <div className="shape12">
          <img alt="" src={_asset17} />
        </div>

        <div className="shape13">
          <img alt="" src={_asset18} />
        </div>
      </section>
    </>
  );
};

export default Build;

