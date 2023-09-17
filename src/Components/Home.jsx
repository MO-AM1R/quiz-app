import React from "react";
import "./Home.css";
import { useLocation } from "react-router-dom";

function Home(props) {
  let location = useLocation();

  return (
    <>
      {!props.logIn ? (
        <div className="home">Home</div>
      ) : location.state?.isInstructor ? (
        <div className="homeInstructor">Instructor Home</div>
      ) : (
        <div className="homeStudent">Student Home</div>
      )}
    </>
  );
}

export default Home;
