// src/js/layout.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Menu from "./views/menu";
import LoginForm from "./views/login";
import SignUpForm from "./views/signup";
import Nosotros from "./views/nosotros";
import Profile from "./views/profile";
import ModifyMenu from "./views/ModifyMenu";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Cart from "./views/Cart";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<LoginForm />} path="/login" />
            <Route element={<SignUpForm />} path="/signup" />
            <Route element={<Nosotros />} path="/nosotros" />
            <Route element={<ModifyMenu />} path="/modify-menu" />
            <Route element={<Profile />} path="/profile" />
            <Route path="/menu" element={<Menu addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
