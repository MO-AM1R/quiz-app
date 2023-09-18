import React from "react";
import Quiz from "./Quiz";
import "./Quizzes.css";

function CompletedQuizzes() {
  return (
    <>
      <div className="available-quizzes-header">Completed Quizzes</div>
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

export default CompletedQuizzes;
