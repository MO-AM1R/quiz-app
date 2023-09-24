import React from "react";
import "./Question.css";

function Question({ index, question, questionCount }) {
  return (
    <>
      <div className="question">
        <div className="question-number">
          Question <span>{index}</span>/{questionCount}
        </div>
        <div className="question-text">{question}</div>
      </div>
    </>
  );
}

export default Question;
