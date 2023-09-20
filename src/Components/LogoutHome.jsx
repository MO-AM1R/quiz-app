import React from "react";
import Nav from "./Nav";
import BodyHome from "./BodyHome";
import Footer from "./Footer";
import "./LogoutHome.css";

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
