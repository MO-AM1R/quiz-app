import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import StudentHomeBody from "./StudentHomeBody";
import "./StudentHome.css";

function StudentHome(props) {
  return (
    <>
      <div className="student-home-screen">
        <Nav isLoged={true} user={"student"} />
        <div className="student-home-container">
          <StudentHomeBody email={props.email} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default StudentHome;
