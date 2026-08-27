import _asset0 from '../../assets/Banner-img/Team.jpg';
import _asset1 from '../../images/People/teams/Prof. Arabinda Haldar.png';
import _asset2 from '../../images/People/Board/Vishnu-R-Unni.jpg';
import _asset3 from '../../images/People/Board/gunjan-mehta.jpeg';
import _asset4 from '../../images/People/teams/Keyur Punjani_COO.jpeg';
import _asset5 from '../../images/People/Board/sajjad.jpg';
import _asset6 from '../../images/People/teams/Anshik Hota.jpeg';
import _asset7 from '../../images/People/teams/Mallesh.jpg';
import _asset8 from '../../images/People/teams/Ch Sowmya.jpg';
import _asset9 from '../../images/People/teams/Vamshi Chidhurappa.jpg';
import _asset10 from '../../images/People/teams/Vishnu.jpg';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PageTitle from '../../components/PageTitle';
import './Team.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const profiles = {
  teamDean: {
    name: 'Prof. Arabinda Haldar',
    bio: [
      'Prof. Arabinda Haldar is a Professor of Physics at IIT Hyderabad specializing in magnonics, spintronics, and nanomagnetic devices. Holding a dual M.Sc.-Ph.D. from IIT Bombay and postdoctoral experience from NUS and Colorado State University, he actively supports the iTIC ecosystem as Dean (Innovation Translation & Startups) and by mentoring deep-tech and hardware startups in advanced materials and sensor innovation.',
    ],
  },
  team9: {
    name: 'Dr. Vishnu R Unni',
    bio: [
      'Dr. Vishnu R. Unni is an Assistant Professor in the Department of Mechanical & Aerospace Engineering at IIT Hyderabad. He holds a Ph.D. from IIT Madras, and his research primarily focuses on reactive fluid dynamics, thermoacoustics, turbulence, and dynamical systems.',
      'Beyond his academic and research contributions, Dr. Unni actively engages in the capacity of Faculty In Charge - iTIC with the campus ecosystem, supporting innovation, incubation, and deep-tech startup initiatives. At iTIC Incubator, he brings technical expertise to evaluate, mentor, and guide early-stage startups working in aerospace, mechanical systems, thermal engineering, and deep-tech innovation.',
    ],
  },
  team2: {
    name: 'Dr. Gunjan Mehta',
    bio: [
      'Dr. Gunjan Mehta is an Associate Professor in the Department of Biotechnology at IIT Hyderabad. He completed his Ph.D. at IIT Bombay and previously served as a Postdoctoral Fellow at the National Cancer Institute, National Institutes of Health (NIH), USA. He is also a recipient of the prestigious Har Gobind Khorana-Innovative Young Biotechnologist Award from the Department of Biotechnology (DBT), Government of India.',
      'His primary research focuses on chromosome dynamics, single-molecule bio-imaging, transcription regulation, and developing advanced optics and photonics technologies for biomedical applications.',
      'At iTIC Incubator, Dr. Mehta leverages his expertise in biotechnology and advanced bio-instrumentation to evaluate, mentor, and guide early-stage healthcare and deep-tech startups.',
    ],
  },
  teamCOO: {
    name: 'Keyur Punjani',
    bio: [
      'Keyur Punjani is a Mechanical Engineer by education and has started his career with General air conditioners as a trainee. In a short span of time, he was looking after B2B and B2C segments across 7 cities of Gujarat.',
      'To pursue his passion for 3D printing technology, he founded Stardust, a 3D printer manufacturing and printing services company. Stardust catered to more than 300 odd customers from multiple domains, received grants from GoG and GoI, startup awards, and many more accolades. After collaborating Stardust with another engineering services company, he moved into the startup ecosystem to help other entrepreneurs.',
      'Keyur is also a Rajeev Circle Fellow, which is run by Asha Jadeja Motwani (wife of late Rajeev Motwani - mentor and early investor at Google). With a total work experience of 7 plus years, he has founded a startup, worked on establishing the iTIC accelerator and incubation programs, managed events and outreach for the GUSEC incubator. During his spare time, Keyur chooses to meditate, read books, and travel',
    ],
  },
  team4: {
    name: 'Mohd Sajjad Ali',
    bio: [
      'Sajjad has more than 12+ years of professional experience in startup incubation, government-supported innovation programmes and program management. Before joining the iTIC Incubator, he served in various positions under Technical (R & D), Administration, and Project Management domains with teams associated with both Private and Government aided organisations. His expertise includes project management, procurement, startup onboarding, program execution, portfolio management, documentation, stakeholder coordination and incubation operations. He holds an MBA and B.Tech in Electronics & Communication Engineering, with specialised training in incubation management.',
    ],
  },
  team16: {
    name: 'Anshik Hota',
    bio: [
      'With over 8 years of rich exposure across consulting domains, Anshik brings a wealth of expertise in Government Consulting, Startup Management, Entrepreneurship Development, MSME Clusters Development, Business Development, Liaison with Stakeholders, and Construction Project Management.',
      'Within this vast experience, Anshik is skilled in Value Chain Analysis, Product Development, Marketing Linkage, Procurement, Preparation of RFPs, and Detailed Project Reports.',
      'His proficiency extends to conducting baseline surveys, data analysis, planning and forecasting, financial analysis, as well as branding and positioning of products.',
    ],
  },
  team8: {
    name: 'M Mallesham',
    bio: [
      'M Mallesham is a graduate of JNTUH University and has 7 years of experience. He has worked in various positions in the stores & purchase department and R&D projects under a government organization and has worked in administrative operations under a private organization. He is punctual, hardworking, and good with team working skills.',
    ],
  },
  team18: {
    name: 'Ch Sowmya',
    bio: [
      'Ch Sowmya is a motivated B.Tech graduate with two years of experience in customer success and operations in the edutech field.',
      'She brings a fresh outlook and a passion for finding innovative solutions. Known for her punctuality, hard work, and teamwork, Ch Sowmya is committed to delivering excellent results.',
      'Her knack for problem-solving and dedication to quality make her a standout performer in any role.',
    ],
  },
  team5: {
    name: 'Vamshi Chidhurappa',
    bio: [
      'Vamshi is a Mechanical Engineer by profession, and is very enthusiastic about learning new things and technologies. He always tries to experiment with 3D printing and other fabrication technologies which results in some amazing products. He is the go-to guy for startups for helping them in their prototyping needs.',
    ],
  },
  team13: {
    name: 'Gomaskar Vishnu',
    bio: [
      'Gomaskar Vishnu is a skilled person, having 20 years of professional expertise in Electronics and Electrical field as a Technician Academically, he is a Graduate and Diploma Certified in ITI (Electrician Trade), he is a Self-motivated person and Ready to accept guy. He loves learning new things as per the market changes from time to time.',
    ],
  },
};

const Team = () => {
  const [openId, setOpenId] = useState(null);
  const profile = openId ? profiles[openId] : null;

  const showProfile = (id) => () => setOpenId(id);
  const closeProfile = () => setOpenId(null);

  return (
    <>
      <PageTitle title="Team" bg={_asset0} titleColor="#f9a33f" />

      <section className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="row bg-f4f5fe mx-0"
                style={{ padding: '15px', marginBottom: '15px' }}
              >
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-team-box">
                    <div className="image">
                      <button aria-label={profiles.teamDean.name} className="photo-btn" onClick={showProfile('teamDean')} type="button">
                        <img
                          alt=""
                          className="img-size"
                          src={_asset1}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                  <h4>Prof. Arabinda Haldar</h4>
                  <h6 style={{ color: '#f9a33f' }}>
                    Vice President, iTIC Incubator
                  </h6>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="row bg-f4f5fe mx-0"
                style={{ padding: '15px', marginBottom: '15px' }}
              >
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-team-box">
                    <div className="image">
                      <button aria-label={profiles.team9.name} className="photo-btn" onClick={showProfile('team9')} type="button">
                        <img
                          alt=""
                          className="img-size"
                          src={_asset2}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                  <h4>Dr. Vishnu R Unni</h4>
                  <h6 style={{ color: '#f9a33f' }}>
                    Faculty-In-Charge, iTIC Incubator
                  </h6>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="row bg-f4f5fe mx-0"
                style={{ padding: '15px', marginBottom: '15px' }}
              >
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-team-box">
                    <div className="image">
                      <button aria-label={profiles.team2.name} className="photo-btn" onClick={showProfile('team2')} type="button">
                        <img
                          alt=""
                          className="img-size"
                          src={_asset3}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                  <h4>Dr. Gunjan Mehta</h4>
                  <h6 style={{ color: '#f9a33f' }}>Treasurer, iTIC Incubator</h6>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="row bg-f4f5fe mx-0"
                style={{ padding: '15px', marginBottom: '15px' }}
              >
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-team-box">
                    <div className="image">
                      <button aria-label={profiles.teamCOO.name} className="photo-btn" onClick={showProfile('teamCOO')} type="button">
                        <img
                          alt=""
                          className="img-size"
                          src={_asset4}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                  <h4>Keyur Punjani</h4>
                  <h6 style={{ color: '#f9a33f' }}>
                    Chief Operating Officer, iTIC Incubator
                  </h6>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="row bg-f4f5fe mx-0"
                style={{ padding: '15px', marginBottom: '15px' }}
              >
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-team-box">
                    <div className="image">
                      <button aria-label={profiles.team4.name} className="photo-btn" onClick={showProfile('team4')} type="button">
                        <img
                          alt=""
                          className="img-size"
                          src={_asset5}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                  <h4>Mohd Sajjad Ali</h4>
                  <h6 style={{ color: '#f9a33f' }}>Manager - Programs</h6>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="row bg-f4f5fe mx-0"
                style={{ padding: '15px', marginBottom: '15px' }}
              >
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-team-box">
                    <div className="image">
                      <button aria-label={profiles.team16.name} className="photo-btn" onClick={showProfile('team16')} type="button">
                        <img
                          alt=""
                          className="img-size"
                          src={_asset6}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                  <h4>Anshik Hota</h4>
                  <h6 style={{ color: '#f9a33f' }}>Manager - Operations</h6>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="row bg-f4f5fe mx-0"
                style={{ padding: '15px', marginBottom: '15px' }}
              >
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-team-box">
                    <div className="image">
                      <button aria-label={profiles.team8.name} className="photo-btn" onClick={showProfile('team8')} type="button">
                        <img
                          alt=""
                          className="img-size"
                          src={_asset7}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                  <h4>M Mallesham</h4>
                  <h6 style={{ color: '#f9a33f' }}>
                    Senior Executive - Accounts
                  </h6>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="row bg-f4f5fe mx-0"
                style={{ padding: '15px', marginBottom: '15px' }}
              >
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-team-box">
                    <div className="image">
                      <button aria-label={profiles.team18.name} className="photo-btn" onClick={showProfile('team18')} type="button">
                        <img
                          alt=""
                          className="img-size"
                          src={_asset8}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                  <h4>Ch Sowmya</h4>
                  <h6 style={{ color: '#f9a33f' }}>Executive - Operations</h6>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="row bg-f4f5fe mx-0"
                style={{ padding: '15px', marginBottom: '15px' }}
              >
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-team-box">
                    <div className="image">
                      <button aria-label={profiles.team5.name} className="photo-btn" onClick={showProfile('team5')} type="button">
                        <img
                          alt=""
                          className="img-size"
                          src={_asset9}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                  <h4>Vamshi Chidhurappa</h4>
                  <h6 style={{ color: '#f9a33f' }}>Senior Lab Technician</h6>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="row bg-f4f5fe mx-0"
                style={{ padding: '15px', marginBottom: '15px' }}
              >
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-team-box">
                    <div className="image">
                      <button aria-label={profiles.team13.name} className="photo-btn" onClick={showProfile('team13')} type="button">
                        <img
                          alt=""
                          className="img-size"
                          src={_asset10}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                  <h4>Gomaskar Vishnu</h4>
                  <h6 style={{ color: '#f9a33f' }}>
                    Maker Lab Technical Assistant
                  </h6>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        dialogClassName="team-profile-modal"
        show={profile !== null}
        onHide={closeProfile}
      >
        <Modal.Header closeButton />
        <Modal.Body style={{ textAlign: 'left' }}>
          <h4>{profile && profile.name}</h4>
          {profile && profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={closeProfile} type="button">
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <ShapeDecoration />
    </>
  );
};

export default Team;

