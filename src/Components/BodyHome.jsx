import React from "react";
import { Link } from "react-router-dom";
import "./BodyHome.css";
function BodyHome() {
  return (
    <>
      <div className="body">
        <div className="body-container">
          <h1 className="body-header">Quiz App</h1>
          <div className="body-info">
            Discover our user-friendly quiz maker website, where instructors
            effortlessly create quizzes to gauge student understanding, while
            students access and engage with assessments. Join us for a seamless
            learning and evaluation experience!
          </div>
          <Link to={"/login"}>
            <button>Start</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BodyHome;
