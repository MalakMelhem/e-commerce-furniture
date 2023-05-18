import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          {/* <Route path="shop" element={<Shop />} /> */}
          {/* <Route path="singleProduct" element={<SingleProduct />} /> */}
          {/* <Route path="myAccount" element={<MyAccount />} /> */}
          {/* <Route path="cart" element={<Cart />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;