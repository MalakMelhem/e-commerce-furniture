import { Outlet} from "react-router-dom";
import React from 'react';
import Footer from "../components/Footer/Footer";
import Navbar from '../components/Navbar/Navbar';
import { CartProvider } from '../components/CartContext/CartContext';
const Layout = () => {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </CartProvider>
  )
}

export default Layout;