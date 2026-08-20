import _asset0 from "../../assets/img/slider/1.png";
import _asset1 from "../../assets/img/map1.png";
import _asset2 from "../../assets/img/shape/7.png";
import _asset3 from "../../assets/img/shape/8.png";
import _asset4 from "../../assets/img/shape/9.png";
import imgGallery1 from "../../assets/img/IMG_8.webp";
import imgGallery2 from "../../assets/img/IMG_18.webp";
import imgGallery3 from "../../assets/img/IMG_12.webp";
import imgGallery4 from "../../assets/img/Homepageimg1.jpg";
import imgGallery5 from "../../assets/img/Homepageimg2.jpg";
import facCoWorking from "../../assets/img/itic-icons/Facilities/Co-working Space.png";
import facFinancialAid from "../../assets/img/itic-icons/Facilities/Financial Aid.png";
import facIpSupport from "../../assets/img/itic-icons/Facilities/Ip support.png";
import facMentorship from "../../assets/img/itic-icons/Facilities/Mentorship.png";
import facMakerLab from "../../assets/img/itic-icons/Facilities/Maker Lab.png";
import facNetworking from "../../assets/img/itic-icons/Facilities/Networking Events.png";
import facSoftwareTools from "../../assets/img/itic-icons/Facilities/Software Tools.png";
import facTechInfra from "../../assets/img/itic-icons/Facilities/Technological Infrastructure.png";
import faAiMl from "../../assets/img/itic-icons/Focus areas/AI ML.png";
import faDigitalManufacturing from "../../assets/img/itic-icons/Focus areas/Digital Manufacturing.png";
import faQuantum from "../../assets/img/itic-icons/Focus areas/Quantum Computing.png";
import faCybersecurity from "../../assets/img/itic-icons/Focus areas/Cybersecurity.png";
import faBlockchain from "../../assets/img/itic-icons/Focus areas/Blockchain.png";
import faRobotics from "../../assets/img/itic-icons/Focus areas/Robotics.png";
import fa3DPrinting from "../../assets/img/itic-icons/Focus areas/3D Printing.png";
import faIndustry40 from "../../assets/img/itic-icons/Focus areas/Industry 4.0.png";
import faElectricVehicle from "../../assets/img/itic-icons/Focus areas/Electric Vehicle.png";
import faAutonomous from "../../assets/img/itic-icons/Focus areas/Autonomous Navigation.png";
import faBiotechnology from "../../assets/img/itic-icons/Focus areas/Biotechnology.png";
import faArVr from "../../assets/img/itic-icons/Focus areas/AR VR.png";
import faSensors from "../../assets/img/itic-icons/Focus areas/Sensors.png";
import faAdvancedMaterials from "../../assets/img/itic-icons/Focus areas/Advanced Materials.png";
import faIot from "../../assets/img/itic-icons/Focus areas/IOT.png";
import faChipDesign from "../../assets/img/itic-icons/Focus areas/Chip Design.png";
import React, { useEffect, useRef, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "particles.js";
import LoopCarousel from "../../components/LoopCarousel";
import "./Home.css";

const facilities = [
  { img: facCoWorking, title: "Co-working Space" },
  { img: facFinancialAid, title: "Financial Aid" },
  { img: facIpSupport, title: "IP Support" },
  { img: facMentorship, title: "Mentorship" },
  { img: facMakerLab, title: "Maker Lab" },
  { img: facNetworking, title: "Networking Events" },
  { img: facSoftwareTools, title: "Software Tools" },
  { img: facTechInfra, title: "Technological Infrastructure" },
];

const focusAreas = [
  { img: faAiMl, title: "AI / ML" },
  { img: faDigitalManufacturing, title: "Digital Manufacturing" },
  { img: faQuantum, title: "Quantum Computing" },
  { img: faCybersecurity, title: "Cybersecurity" },
  { img: faBlockchain, title: "Blockchain" },
  { img: faRobotics, title: "Robotics" },
  { img: fa3DPrinting, title: "3D Printing" },
  { img: faIndustry40, title: "Industry 4.0" },
  { img: faElectricVehicle, title: "Electric Vehicles" },
  { img: faAutonomous, title: "Autonomous Navigation" },
  { img: faBiotechnology, title: "Biotechnology" },
  { img: faArVr, title: "AR/VR/MR" },
  { img: faSensors, title: "Sensors" },
  { img: faAdvancedMaterials, title: "Advanced Materials" },
  { img: faIot, title: "IoT" },
  { img: faChipDesign, title: "Chip Design" },
];

const galleryImages = [imgGallery1, imgGallery2, imgGallery3, imgGallery4, imgGallery5];

const testimonials = [
  {
    quote: "iTIC Incubation team has provided our startup Sortizy with tremendous support since the beginning and especially when we needed it the most. They have been instrumental in helping us define our strategy, customer discovery methodology and go-to-market approach.",
    name: "Surbhi Guha",
    company: "Sortizy",
  },
  {
    quote: "iTIC was a gamechanger for us. We can't imagine any startup that wouldn't benefit tremendously from iTIC's support. We entered the program with an idea and, 3 months later, we're an incorporated company with 1st working Prototype. To this day, joining iTIC Incubator as a startup was one of the best decisions we've made at Manali Swing.",
    name: "Utsav Soni",
    company: "Manali Swing",
  },
  {
    quote: "iTIC has been a strong pillar of support for me, to build upon the idea and incubate our startup. iTIC has always been available and ready with answers to our questions and solutions to our problems. There has not been a single day that I came out of the iTIC office without getting to know what I needed to know. I'll be forever grateful for their support through these years which played a significant role in making an entrepreneur out of a research student.",
    name: "Dr Tejaswini Appidi",
    company: "In5n8 Health Tech LLP",
  },
  {
    quote: "This 6 months of association with the AISEA program has been a consistent source of encouragement, motivation for early stage innovative startup like us. AISEA has a great pool of eminent mentors & Coaches that guided us the right route in our organizational development.",
    name: "Subhash Narayanan",
    company: "Sascan Meditech",
  },
  {
    quote: "The Aisea Cohort experience has been really brilliant for us. The entire team has been very supportive and helped us to get clarity to address some of our business and customer pain points. The best part is the Mentor pool, we had great insightful guidance by mentors selected by us. Special thanks to the operations team for the constant interaction and support throughout the program.",
    name: "Dr. Raju M R",
    company: "MayaMD",
  },
  {
    quote: "We are ecstatic to be part of the AISEA program. As program participant, Zedblox got access to resources & solutions to myriad problems that startups face. AISEA helped us in solving all strategic business as well as technical challenges.",
    name: "Rao Korupolu",
    company: "ZedBlox",
  },
];

const stats = [
  { count: 220, suffix: "+", label: "Total Startups supported" },
  { count: 15, suffix: "Cr+", label: "Total funds sanctioned to Startups" },
  { count: 1500, suffix: "Cr+", label: "Total revenues generated by Startups" },
  { count: 1.5, suffix: "Lac Sq.ft", label: "Dedicated Incubation Space" },
  { count: 1200, suffix: "+", label: "Total jobs created by Startups" },
  { count: 200, suffix: "+", label: "Mentors Associated" },
];

const OdometerCounter = ({ value }) => {
  const [val, setVal] = useState(0);
  const wrapRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          setVal(value);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={wrapRef}>
      <Odometer value={val} format={Number.isInteger(value) ? "d" : "(,ddd).d"} />
    </span>
  );
};

const Home = () => {
  useEffect(() => {
    if (window.particlesJS && document.getElementById("particles-js")) {
      try {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
            opacity: { value: 0.5, random: false },
            size: { value: 5, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out" },
          },
          interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 200 }, push: { particles_nb: 4 } },
          },
          retina_detect: true,
        });
      } catch (e) {
        // ignore
      }
    }
  }, []);

  return (
    <>
      <div className="saas-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container max-width-1290">
              <div className="row align-items-center pt-5">
                <div className="col-lg-6 col-md-12">
                  <div className="slide-image mt-70">
                    <img alt="img" className="img-fluid" src={_asset0} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="hero-content pl-4">
                    <h1>Unleashing Deeptech Innovation and Entrepreneurship</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="particles-js">
          <canvas className="particles-js-canvas-el" height="1000" style={{ width: "100%", height: "100%" }} width="1903"></canvas>
        </div>
      </div>

      <section className="ptb-40 bg-f4f6fc">
        <div className="overview-item">
          <div className="container max-width-1290">
            <div className="row align-items-top">
              <div className="col-lg-12 col-md-12">
                <div className="overview-content pl-3">
                  <h2 align="center" className="section-title" style={{ fontSize: "40px", fontWeight: 600 }}>
                    What is <span className="span-color">i</span>TIC ?
                  </h2>
                  <p align="center">iTIC is an incubator under the aegis of the Indian Institute of Technology Hyderabad (IITH) and supported by the Department of Science and Technology (DST), Government of India. iTIC is a Not-For-Profit Society that focuses on creating a supportive and nourishing environment for budding entrepreneurs in the field of technology. iTIC aims to help entrepreneurs leverage a premier quality research and startup ecosystem to build a comprehensive platform to practice innovation and entrepreneurship so that these entrepreneurial ideas can be turned into sustainable, scalable profit-making business ventures.</p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12" style={{ paddingTop: "50px" }}>
                <LoopCarousel
                  className="home-gallery-slides"
                  items={galleryImages}
                  renderItem={(src) => (
                    <div className="item">
                      <img className="img-fluid" src={src} alt="gallery" />
                    </div>
                  )}
                  interval={2000}
                  speed={0.8}
                  margin={15}
                  mobileItems={1}
                  tabletItems={1}
                  desktopItems={1}
                  tabletMin={768}
                  desktopMin={1200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-presentation-area ptb-40">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: "40px", fontWeight: 600 }}>
              Impact By <span className="span-color">i</span>TIC
            </h2>
          </div>
          <div className="funfacts-inner">
            <div className="row">
              {stats.map((s, i) => (
                <div className="col-lg-4 col-6 col-sm-6" key={i}>
                  <div className="single-funfacts funfact-style-two">
                    <h3 style={{ fontSize: "50px !important" }}>
                      <OdometerCounter value={s.count} />
                      <span className="sign-icon pt-3" style={{ fontSize: "50px !important", marginLeft: "3px", verticalAlign: "middle" }}>
                        {s.suffix}
                      </span>
                    </h3>
                    <p>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="shape-map1">
          <img alt="" src={_asset1} />
        </div>
        <div className="shape7">
          <img alt="" src={_asset2} />
        </div>
        <div className="shape8">
          <img alt="" src={_asset3} />
        </div>
        <div className="shape9">
          <img alt="" src={_asset4} />
        </div>
      </section>

      <section className="features-area pb-30">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: "40px", fontWeight: 600, marginBottom: "15px" }}>
              How <span className="span-color">i</span>TIC Adds Value
            </h2>
          </div>
          <div className="row">
            {facilities.map((f, i) => (
              <div className="col-lg-3 col-6" key={i}>
                <div className={i === 0 ? "features-box value-iTIC" : "features-box"}>
                  <div className="icon">
                    <img alt={f.title} src={f.img} />
                  </div>
                  <h6>{f.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-area pb-30">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: "40px", fontWeight: 600, marginTop: "20px" }}>Focus Areas</h2>
          </div>
          <div align="center" style={{ paddingBottom: "10px" }}>
            <p style={{ marginBottom: "5px" }}>Our primary focus area is in the Deeptech domain, but not limited to any one specific sector.</p>
          </div>
          <div className="row">
            {focusAreas.map((f, i) => (
              <div className="col-lg-3 col-6" key={i}>
                <div className="features-box value-iTIC">
                  <div className="icon">
                    <img alt={f.title} src={f.img} />
                  </div>
                  <h6>{f.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feedback-area pt-30 pb-30" style={{ backgroundColor: "#f5deb4" }}>
        <div className="section-title">
          <h2 style={{ fontWeight: 600 }}>Startup Testimonials</h2>
        </div>
        <div className="container">
          <LoopCarousel
            className="feedback-slides"
            items={testimonials}
            renderItem={(t) => (
              <div className="single-feedback-item">
                <div className="feedback-desc bg-white">
                  <div className="p1">
                    <p>{t.quote}</p>
                  </div>
                  <hr />
                  <div className="row client-info">
                    <div className="col-md-auto"></div>
                    <div className="col">
                      <h3>{t.name}</h3>
                      <span>{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            interval={5000}
            speed={0.25}
            margin={30}
            mobileItems={1}
            tabletItems={1}
            desktopItems={2}
            tabletMin={768}
            desktopMin={1024}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
