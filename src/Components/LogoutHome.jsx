import React from "react";
import "./LogoutHome.css";

import Input from "./Input";
import BodyHome from "./BodyHome";
import Footer from "./Footer";

function LogoutHome() {
  return (
    <div className="lougout-screen">
      <div className="logout-container">
        <Input />
        <BodyHome />
        <Footer />
      </div>
    </div>
  );
}

export default LogoutHome;
