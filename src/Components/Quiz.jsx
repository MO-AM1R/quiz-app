import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

function Quiz(props) {
  const [completed, setCompleted] = useState(false);
  const navigator = useNavigate();

  const handle = () => {
    navigator("/exam", {
      state: {
        quiz: props.quiz,
      },
    });
  };
  useEffect(() => {
    if (props.score !== null) {
      setCompleted(true);
    }
  }, []);

  return (
    <>
      <div onClick={handle} className="quiz">
        <div className="quiz-title">{props.quiz.Category}</div>
        <div className="quiz-info">
          <div className="quiz-question-count">
            {props.quiz.Question_Count + "  Questions"}
          </div>
          {completed ? (
            <div className="quiz-score">{"Last Score: " + props.score}</div>
          ) : (
            <></>
          )}
          <div className="quiz-instructor-name">{props.quiz.Instructor}</div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
