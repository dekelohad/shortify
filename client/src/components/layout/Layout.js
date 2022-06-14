import React from 'react';
import { Navbar, Footer } from './components';
import { navbarLinks, footerContent } from './data';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar links={navbarLinks} />
      <main className="main">{children}</main>
      <Footer content={footerContent} />
    </>
  );
};

export default Layout;
