import { Outlet} from "react-router-dom";
import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default Layout;