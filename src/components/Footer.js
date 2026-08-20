import _asset0 from '../assets/img/white-logo.png';
import _asset1 from '../assets/logos/grant-and-funding-agencies/footer brand logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="divider"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-12">
            <div className="single-footer-widget footer-about">
              <div className="logo">
                <Link to="/">
                  <img alt="" src={_asset0} />
                </Link>
              </div>
              <p>
                iTIC Incubator at IIT Hyderabad focuses on supporting deeptech startups
                from idea to growth stage under its structured pre-incubation,
                incubation and accelerator programs.
              </p>
              <div className="logo">
                <img
                  alt=""
                  src={_asset1}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-5 col-6">
            <div className="single-footer-widget">
              <h3>Main Links</h3>
              <ul className="services-list">
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/eeiith">Entrepreneurship Ecosystem at IITH</Link></li>
                <li><Link to="/startups">Startups</Link></li>
                <li><Link to="/contact-us">Contact Details</Link></li>
                <li><Link to="/contact-us">Book a Meeting</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-5 col-6">
            <div className="single-footer-widget">
              <h3>People</h3>
              <ul className="services-list">
                <li><Link to="/board">Board</Link></li>
                <li><Link to="/mentors">Mentors</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-5 col-6">
            <div className="single-footer-widget">
              <h3>Programs</h3>
              <ul className="support-list">
                <li><Link to="/nice">NICE</Link></li>
                <li><Link to="/tihan">TiHAN</Link></li>
                <li><Link to="/idex-dio">iDEX</Link></li>
                <li><Link to="/nidhi-prayas">NIDHI PRAYAS</Link></li>
                <li><Link to="/meity-tide">Meity TIDE 2.0</Link></li>
                <li><Link to="/aisea">AISEA</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-5 col-6">
            <div className="single-footer-widget">
              <h3>Media</h3>
              <ul className="support-list">
                <li><Link to="/newsletter">Newsletter</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/downloads">Downloads</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <div>
            <ul className="footer-contact-info">
              <li style={{ color: '#acc5db', listStyle: 'none' }}>
                <i className="fa-solid fa-house-chimney"></i>&nbsp; Address: Technology
                Innovation Park, IIT HYDERABAD, Kandi, Sangareddy , Telangana India- 502284
                <br />
                <i className="fa-solid fa-envelope"></i>&nbsp; Email:{' '}
                <a href="mailto:contact@itic.iith.ac.in">contact@itic.iith.ac.in</a> &nbsp;
                <i className="fa-solid fa-phone"></i> Mobile:{' '}
                <a href="tel:+918331036155">+91 83310 36155</a>
                <br />
                <a className="px-1" style={{ fontSize: '35px' }} href="https://www.instagram.com/iTICIncubator" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a className="px-1" style={{ fontSize: '35px' }} href="https://www.facebook.com/iTICIncubator" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a className="px-1" style={{ fontSize: '35px' }} href="https://www.linkedin.com/company/iTICIncubator" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className="px-1" style={{ fontSize: '35px' }} href="https://twitter.com/iTICIncubator" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-twitter-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright-area">
          <p>Copyright @ {new Date().getFullYear()} iTIC Incubator</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

