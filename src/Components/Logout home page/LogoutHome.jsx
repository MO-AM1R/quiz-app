import React from "react";
import Nav from "../Nav bar/Nav";
import BodyHome from "../Home body/BodyHome";
import Footer from "../Footer/Footer";
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
