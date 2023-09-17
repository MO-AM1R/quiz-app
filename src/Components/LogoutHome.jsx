import React from "react";
import "./LogoutHome.css";

import Nav from "./Nav";
import BodyHome from "./BodyHome";
import Footer from "./Footer";

function LogoutHome() {
  return (
    <div className="lougout-screen">
      <div className="logout-container">
        <Nav />
        <BodyHome />
        <Footer />
      </div>
    </div>
  );
}

export default LogoutHome;
