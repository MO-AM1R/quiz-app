import React from "react";
import { AiTwotoneCrown } from "react-icons/ai";
import history from "../../history";
import "./Score.css";

function Score({ score, questionCount, wrongAnswers, correctAnswers }) {
  const exit = () => {
    history.back();
  };

  return (
    <>
      <div className="score-container">
        <div className="crown-container">
          <AiTwotoneCrown className="crown" />
        </div>
        <div className="score-info-container">
          <div className="all-questions">
            Total Questions: <span>{questionCount}</span>
          </div>
          <div className="true-answers">
            Correct Answers: <span>{correctAnswers}</span>
          </div>
          <div className="false-answers">
            Wrong Answers: <span>{wrongAnswers}</span>
          </div>
          <div className="score-value">
            Your Score: <span>{score}%</span>
          </div>
        </div>
        <div className="btn-container">
          <button onClick={exit} className="btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Exit
          </button>
        </div>
      </div>
    </>
  );
}

export default Score;
