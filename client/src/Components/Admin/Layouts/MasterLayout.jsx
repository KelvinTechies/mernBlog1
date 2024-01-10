import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../../assets/css/styles.css';
import '../../../assets/js/scripts';

function MasterLayout({ children }) {
  return (
    <div className="sb-nav-fixed">
      <NavBar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            {children}
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MasterLayout;
