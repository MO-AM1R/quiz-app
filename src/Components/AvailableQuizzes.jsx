import React from "react";
import Quiz from "./Quiz";
import "./AvailableQuizzes.css";

function AvailableQuizzes() {
  return (
    <>
      <div className="available-quizzes-header">Availble Quizzes</div>
      <div className="available-quizzes">
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
      </div>
    </>
  );
}

export default AvailableQuizzes;
