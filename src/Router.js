import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Shop  from "./pages/Shop";
import React from 'react';
import SingleProduct from "./pages/SingleProduct";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="shop" element={<Shop />} />
          <Route path="singleProduct/:productId" element={<SingleProduct />} />
          {/* <Route path="myAccount" element={<MyAccount />} /> */}
          {/* <Route path="cart" element={<Cart />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;