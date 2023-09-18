import React from "react";
import LogoutHome from "./LogoutHome";
import StudentHome from "./StudentHome";
import InstructorHome from "./InstructorHome";
import { useLocation } from "react-router-dom";

function Home(props) {
  let location = useLocation();

  return (
    <>
      {!props.logIn ? (
        <LogoutHome />
      ) : location.state?.isInstructor ? (
        <InstructorHome />
      ) : (
        <StudentHome />
      )}
    </>
  );
}

export default Home;
