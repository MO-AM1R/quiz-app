import React, { useRef } from "react";
import "./StudentHomeBody.css";
import AvailableQuizzes from "./AvailableQuizzes.jsx";

function StudentHomeBody() {
  return (
    <>
      <div className="quizzes-body">
        <div className="quizzes-container">
          <AvailableQuizzes />
          {/* Completed Quizzes */}
        </div>
      </div>
    </>
  );
}

export default StudentHomeBody;
