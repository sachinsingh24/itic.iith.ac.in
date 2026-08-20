import _asset0 from '../assets/img/logo.png';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [dotsOpen, setDotsOpen] = React.useState(false);
  const [openDropdowns, setOpenDropdowns] = React.useState([]);
  const { pathname } = useLocation();

  const isActive = (paths) => paths.some((p) => (p === '/startup' ? pathname.startsWith('/startup/') : pathname === p));
  const linkClass = (paths) => `nav-link${isActive(paths) ? ' active' : ''}`;
  const itemClass = (paths) => `nav-item${isActive(paths) ? ' active' : ''}`;

  React.useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setSticky(window.scrollY > 120);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenDropdowns([]);
    setDotsOpen(false);
  }, [pathname]);

  const closeMobile = () => setMobileOpen(false);

  const toggleDropdown = (index) =>
    setOpenDropdowns((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

  return (
    <div className={`navbar-area bg-white ${sticky ? 'is-sticky' : ''}`}>
      <div className="strax-responsive-nav">
        <div className="container">
          <div className="strax-responsive-menu">
            <div className="logo">
              <Link to="/" onClick={closeMobile}>
                <img alt="logo" src={_asset0} />
              </Link>
            </div>
            <div className="dot-menu" onClick={() => setDotsOpen((v) => !v)}>
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>
            <button
              type="button"
              className="mobile-toggle"
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <svg
                  className="mean-close"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1 L15 15 M15 1 L1 15"
                    stroke="#ee4132"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              ) : (
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`strax-nav ${mobileOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/">
              <img alt="logo" src={_asset0} />
            </Link>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className={itemClass(['/'])}>
                  <Link to="/" className={linkClass(['/'])}>
                    <i className="bx bx-home"></i>
                  </Link>
                </li>
                <li className={itemClass(['/about-us', '/eeiith'])}>
                  <span className="nav-link" onClick={() => toggleDropdown(0)}>About</span>
                  <button
                    type="button"
                    className="mean-expand-btn"
                    aria-label="Expand About menu"
                    onClick={() => toggleDropdown(0)}
                  >
                    {openDropdowns.includes(0) ? '−' : '+'}
                  </button>
                  <ul className={`dropdown-menu ${openDropdowns.includes(0) ? 'dropdown-open' : ''}`}>
                    <li className="nav-item">
                      <Link to="/about-us" className={linkClass(['/about-us'])}>
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/eeiith" className={linkClass(['/eeiith'])}>
                        Entrepreneurship Ecosystem at IITH
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={itemClass(['/nice', '/tihan', '/idex-dio', '/nidhi-prayas', '/meity-tide', '/aisea', '/build', '/sisfs'])}>
                  <span className="nav-link" onClick={() => toggleDropdown(1)}>Programs</span>
                  <button
                    type="button"
                    className="mean-expand-btn"
                    aria-label="Expand Programs menu"
                    onClick={() => toggleDropdown(1)}
                  >
                    {openDropdowns.includes(1) ? '−' : '+'}
                  </button>
                  <ul className={`dropdown-menu ${openDropdowns.includes(1) ? 'dropdown-open' : ''}`}>
                    <li className="nav-item">
                      <Link to="/nice" className={linkClass(['/nice'])}>NICE</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/tihan" className={linkClass(['/tihan'])}>TiHAN</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/idex-dio" className={linkClass(['/idex-dio'])}>iDEX</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/nidhi-prayas" className={linkClass(['/nidhi-prayas'])}>NIDHI PRAYAS</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/meity-tide" className={linkClass(['/meity-tide'])}>Meity TIDE 2.0</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/aisea" className={linkClass(['/aisea'])}>AISEA</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/build" className={linkClass(['/build'])}>BUILD</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sisfs" className={linkClass(['/sisfs'])}>SISFS</Link>
                    </li>
                  </ul>
                </li>
                <li className={itemClass(['/board', '/mentors', '/team', '/careers'])}>
                  <span className="nav-link" onClick={() => toggleDropdown(2)}>People</span>
                  <button
                    type="button"
                    className="mean-expand-btn"
                    aria-label="Expand People menu"
                    onClick={() => toggleDropdown(2)}
                  >
                    {openDropdowns.includes(2) ? '−' : '+'}
                  </button>
                  <ul className={`dropdown-menu ${openDropdowns.includes(2) ? 'dropdown-open' : ''}`}>
                    <li className="nav-item">
                      <Link to="/board" className={linkClass(['/board'])}>Board</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/mentors" className={linkClass(['/mentors'])}>Mentors</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/team" className={linkClass(['/team'])}>Team</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/careers" className={linkClass(['/careers'])}>Careers</Link>
                    </li>
                  </ul>
                </li>
                <li className={itemClass(['/startups', '/startup'])}>
                  <Link to="/startups" className={linkClass(['/startups', '/startup'])}>Startups</Link>
                </li>
                <li className={itemClass(['/reports', '/downloads'])}>
                  <span className="nav-link" onClick={() => toggleDropdown(3)}>Media</span>
                  <button
                    type="button"
                    className="mean-expand-btn"
                    aria-label="Expand Media menu"
                    onClick={() => toggleDropdown(3)}
                  >
                    {openDropdowns.includes(3) ? '−' : '+'}
                  </button>
                  <ul className={`dropdown-menu ${openDropdowns.includes(3) ? 'dropdown-open' : ''}`}>
                    <li className="nav-item">
                      <Link to="/reports" className={linkClass(['/reports'])}>Reports</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/downloads" className={linkClass(['/downloads'])}>Downloads</Link>
                    </li>
                  </ul>
                </li>
                <li className={itemClass(['/contact-us'])}>
                  <Link to="/contact-us" className={linkClass(['/contact-us'])}>Contact Us</Link>
                </li>
              </ul>
              <div className="others-options">
                <Link
                  to="/apply"
                  className="default-btn"
                  style={{ paddingLeft: '5px', paddingRight: '5px' }}
                  onClick={closeMobile}
                >
                  Apply for Support <span></span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="others-option-for-responsive">
        <div className="container">
          <div className={`container ${dotsOpen ? 'active' : ''}`}>
            <div className="option-inner">
              <div className="others-options justify-content-center">
                <Link to="/apply" className="optional-btn" style={{ paddingLeft: '25px' }} onClick={closeMobile}>
                  Apply for Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

