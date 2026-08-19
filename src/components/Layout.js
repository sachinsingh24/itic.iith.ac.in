import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GoTop from './GoTop';
import ScrollToTop from './ScrollToTop';
import Analytics from './Analytics';

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Navbar />
      {children}
      <Footer />
      <GoTop />
    </>
  );
};

export default Layout;
