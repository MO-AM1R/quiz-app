import React from "react";
import Nav from "./Nav";
import "./StudentHome.css";
import Footer from "./Footer";
import StudentHomeBody from "./StudentHomeBody";

function StudentHome() {
  return (
    <>
      <div className="student-home-screen">
        <Nav isLoged={true} user={"student"} />
        <div className="student-home-container">
          <StudentHomeBody />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default StudentHome;
