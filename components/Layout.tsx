import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;