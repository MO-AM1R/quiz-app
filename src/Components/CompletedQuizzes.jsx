import React from "react";
import Quiz from "./Quiz";
import { Link } from "react-router-dom";
import "./Quizzes.css";

function CompletedQuizzes(props) {
  console.log(props.completedQuizzes);
  return (
    <>
      <div className="quizzes-header">Completed Quizzes</div>
      <div className="quizzes">
        {props.completedQuizzes.map((element, index) => (
          // <Link to={{ pathname: "/exam", state: { quiz: "asas" } }} key={index}>
          <Quiz quiz={element.quiz} score={element.score} />
          // </Link>
        ))}
      </div>
    </>
  );
}

export default CompletedQuizzes;
