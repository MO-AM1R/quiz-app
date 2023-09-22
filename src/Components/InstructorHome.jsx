import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import InstructorHomeBody from "./InstructorHomeBody.jsx";
import "./InstructorHome.css";

function InstructorHome(props) {
  return (
    <div className="instructor-home-screen">
      <Nav isLoged={true} user={"instructor"} />
      <div className="instructor-home-container">
        <InstructorHomeBody email={props.email} />
      </div>
      <Footer />
    </div>
  );
}

export default InstructorHome;
