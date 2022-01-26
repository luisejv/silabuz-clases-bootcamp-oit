import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="position-relative pb-5 home">
      <Navbar></Navbar>

      {!location.pathname.includes("personaje") && <Header></Header>}

      <section className="py-5">
        <Outlet></Outlet>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
