import React from "react";
import "./Score.css";
import { AiTwotoneCrown } from "react-icons/ai";
import history from "../history";

function Score({ score, questionCount }) {
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
            Correct Answers: <span>{score / questionCount}</span>
          </div>
          <div className="false-answers">
            Wrong Answers: <span>{questionCount - score / questionCount}</span>
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
