import React from "react";
import { Link, Outlet } from "react-router-dom";

const links = ["All", "Breakfast", "Lunch", "Shakes"];

const Layout = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1>Our Menu</h1>
      </div>
      <div class="row justify-content-center">
        {links.map((link) => {
          return (
            <div key={link} className="col">
              <Link to={"/" + link.toLowerCase()}>{link}</Link>
            </div>
          );
        })}
      </div>
      <div className="row">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
