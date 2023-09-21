import React, { useRef, useState, useEffect } from "react";
import "./Answers.css";
let showAnswer, reset;

function Answers({
  Correct_Answers,
  Answers,
  increamentScore,
  answerSelected,
}) {
  const answerA = useRef(),
    answerB = useRef(),
    answerC = useRef(),
    answerD = useRef();

  const selectAnswer = (answer) => {
    if (answerA.current.classList.contains(answer)) {
      answerA.current.classList.add("true");
    } else if (answerB.current.classList.contains(answer)) {
      answerB.current.classList.add("true");
    } else if (answerC.current.classList.contains(answer)) {
      answerC.current.classList.add("true");
    } else {
      answerD.current.classList.add("true");
    }
  };

  showAnswer = () => {
    let answer = Correct_Answers;
    selectAnswer(answer);
  };

  const handleAnswer = (element) => {
    let answer = Correct_Answers;

    if (element.classList.contains(answer)) {
      element.classList.add("true");
      increamentScore();
    } else {
      element.classList.add("wrong");
      selectAnswer(answer);
    }

    answerSelected();
  };

  reset = () => {
    if (answerA.current.classList.contains("true")) {
      answerA.current.classList.remove("true");
    } else if (answerA.current.classList.contains("wrong")) {
      answerA.current.classList.remove("wrong");
    }

    if (answerB.current.classList.contains("true")) {
      answerB.current.classList.remove("true");
    } else if (answerB.current.classList.contains("wrong")) {
      answerB.current.classList.remove("wrong");
    }

    if (answerC.current.classList.contains("true")) {
      answerC.current.classList.remove("true");
    } else if (answerC.current.classList.contains("wrong")) {
      answerC.current.classList.remove("wrong");
    }

    if (answerD.current.classList.contains("true")) {
      answerD.current.classList.remove("true");
    } else if (answerD.current.classList.contains("wrong")) {
      answerD.current.classList.remove("wrong");
    }
  };

  return (
    <>
      <div className="answers">
        <div
          onClick={() => {
            handleAnswer(answerA.current);
          }}
          ref={answerA}
          className="answer a"
        >
          <div className="answer-number a">A</div>
          <div className="answer-text">{Answers[0]}</div>
        </div>
        <div
          onClick={() => {
            handleAnswer(answerB.current);
          }}
          ref={answerB}
          className="answer b"
        >
          <div className="answer-number">B</div>
          <div className="answer-text">{Answers[1]}</div>
        </div>
        <div
          onClick={() => {
            handleAnswer(answerC.current);
          }}
          ref={answerC}
          className="answer c"
        >
          <div className="answer-number">C</div>
          <div className="answer-text">{Answers[2]}</div>
        </div>
        <div
          onClick={() => {
            handleAnswer(answerD.current);
          }}
          ref={answerD}
          className="answer d"
        >
          <div className="answer-number">D</div>
          <div className="answer-text">{Answers[3]}</div>
        </div>
      </div>
    </>
  );
}

export { Answers, showAnswer, reset };
