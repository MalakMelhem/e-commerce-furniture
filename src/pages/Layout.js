import { Outlet} from "react-router-dom";
import React from 'react';
import Footer from "../components/Footer/Footer";


const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;