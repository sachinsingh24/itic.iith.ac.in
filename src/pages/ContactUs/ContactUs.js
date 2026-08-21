import _asset0 from '../../assets/contact.jpg';
import _asset1 from '../../assets/img/logo.png';
import React, { useEffect, useRef } from 'react';
import PageTitle from '../../components/PageTitle';
import './ContactUs.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const CALENDLY_URL = 'https://calendly.com/sowmya-ch-itic/30min';
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

const ContactUs = () => {
  const calendlyRef = useRef(null);

  // The static site loaded widget.js with a plain <script> tag, which works
  // because the container is already in the document when the script runs. On a
  // client-side route change that scan has long since happened, so the widget
  // has to be created explicitly instead.
  useEffect(() => {
    const mount = () => {
      const el = calendlyRef.current;
      if (!window.Calendly || !el || el.querySelector('iframe')) return;
      window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
    };

    if (window.Calendly) {
      mount();
      return undefined;
    }

    let script = document.querySelector('script[src="' + CALENDLY_SCRIPT + '"]');
    if (!script) {
      script = document.createElement('script');
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener('load', mount);
    return () => script.removeEventListener('load', mount);
  }, []);

  return (
    <>
      <PageTitle
        title="Contact Us"
        bg={_asset0}
        extraStyle={{ backgroundPosition: 'bottom' }}
      />

      <section className="contact-area">
        <div className="container">
          <div className="contact-inner">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="contact-features-list">
                  <img alt="logo" src={_asset1} />
                  <h3 className="mt-5">Donate :</h3>

                  <p>
                    Donate to iTIC Foundation for supporting entrepreneurship
                    activities. All donations to us are exempt from income tax
                    under section 80G of Income Tax Act, 1961 (India). iTIC
                    Foundation IIT Hyderabad is registered under Andhra Pradesh
                    Societies Registration Act, 2001.
                  </p>

                  <address>
                    <strong>For donations, write to us on</strong>
                    <br />
                    <a className="title usmall" href="mailto:office.itic@iith.ac.in">
                      office.itic@iith.ac.in
                    </a>
                  </address>

                  <address>
                    <strong>Office Address:</strong>

                    <p>
                      Technology Innovation Park,
                      <br />
                      IIT Hyderabad,
                      <br />
                      Kandi, Sangareddy, Telangana, India - 502284
                    </p>
                  </address>

                  <address>
                    <strong>Email</strong>
                    <br />
                    <a className="title usmall" href="mailto:contact@itic.iith.ac.in">
                      contact@itic.iith.ac.in
                    </a>
                  </address>

                  <address>
                    <strong>Mobile</strong>
                    <br />
                    <a className="title usmall" href="tel:+918331036155">
                      +91 83310 36155
                    </a>
                  </address>

                  <div className="contact-info">
                    <div className="contact-info-content text-start">
                      <ul className="social text-center">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="contact-form">
                  <form id="contactForm">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div
                          className="calendly-inline-widget"
                          data-url={CALENDLY_URL}
                          ref={calendlyRef}
                          style={{ minWidth: '320px', height: '700px' }}
                        ></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShapeDecoration />

    </>
  );
};

export default ContactUs;

