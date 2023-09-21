import React from "react";
import "./Score.css";
import { AiTwotoneCrown } from "react-icons/ai";
import history from "../history";

function Score({ score }) {
  const exit = () => {
    history.back();
  };

  return (
    <>
      <div className="score-container">
        <div className="crown-container">
          <AiTwotoneCrown className="crown" />
        </div>
        <div className="score-value-container">
          <div className="score">
            <span>Your Score:</span> {score} / 100
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
