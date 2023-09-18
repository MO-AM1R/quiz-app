import React from "react";
import Nav from "./Nav";
import "./StudentHome.css";
import Footer from "./Footer";
import StudentHomeBody from "./StudentHomeBody";

function StudentHome() {
  return (
    <>
      <div className="student-home-screen">
        <div className="student-home-container">
          <Nav isLoged={true} user={"student"} />
          <StudentHomeBody />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default StudentHome;
