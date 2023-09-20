import React from "react";
import Quiz from "./Quiz";
import "./Quizzes.css";

function AvailableQuizzes(props) {
  return (
    <>
      <div className="quizzes-header">Available Quizzes</div>
      <div className="quizzes">
        {props.quizzes.map((element) => {
          return <Quiz quiz={element} score={null} />;
        })}
      </div>
    </>
  );
}

export default AvailableQuizzes;
