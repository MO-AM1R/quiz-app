import React, { useRef } from "react";
import "./StudentHomeBody.css";
import AvailableQuizzes from "./AvailableQuizzes";
import CompletedQuizzes from "./CompletedQuizzes";

function StudentHomeBody() {
  return (
    <>
      <div className="quizzes-container">
        <AvailableQuizzes />
        <CompletedQuizzes />
      </div>
    </>
  );
}

export default StudentHomeBody;
