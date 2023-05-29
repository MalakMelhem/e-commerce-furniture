import { Outlet} from "react-router-dom";
import React from 'react';
import Footer from "../components/Footer/Footer";
import Navbar from '../components/Navbar/Navbar';
import { CartProvider } from '../components/CartContext/CartContext';
import AuthProvider from "../components/AuthContext/AuthContext";
const Layout = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default Layout;