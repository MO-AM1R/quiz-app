import React from "react";
import LogoutHome from "./LogoutHome";
import StudentHome from "./StudentHome";
import InstructorHome from "./InstructorHome.jsx";
import { useLocation } from "react-router-dom";
import "./Home.css";

function Home(props) {
  let location = useLocation();

  return (
    <>
      {!props.logIn ? (
        <LogoutHome />
      ) : location.state?.isInstructor ? (
        <StudentHome />
      ) : (
        <InstructorHome />
      )}
    </>
  );
}

export default Home;
