import React from "react";
import "./StudentHomeBody.css";
import Quiz from "./Quiz";

function StudentHomeBody() {
  return (
    <>
      <div className="quizzes-body">
        <div className="quizzes-container">
          <div className="quizzes-header">
            <div className="quizzes-header-text">Availble Quizzes</div>
            <div className="quizzes-header-bar">bar</div>
          </div>
          <div className="quizzes">
            <Quiz />
            <Quiz />
            <Quiz />
            <Quiz />
            <Quiz />
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentHomeBody;
