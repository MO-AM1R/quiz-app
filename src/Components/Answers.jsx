import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import "./Answers.css";
let showAnswer, reset, toggleDisaple;

function Answers({
  Correct_Answers,
  Answers,
  increamentScore,
  answerSelected,
}) {
  const [disable, setDisable] = useState(false);
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

  toggleDisaple = () => {
    setDisable(!disable);
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
          ref={answerA}
          className="answer a"
          onClick={() => {
            if (!disable) {
              handleAnswer(answerA.current);
            }
          }}
        >
          <div className="answer-number a">
            <span className="answer-number-text">A</span>
            <AiOutlineClose className="false-icon" />
            <BsCheckLg className="true-icon" />
          </div>
          <div className="answer-text">{Answers[0]}</div>
        </div>
        <div
          onClick={() => {
            if (!disable) {
              handleAnswer(answerB.current);
            }
          }}
          ref={answerB}
          className="answer b"
        >
          <div className="answer-number">
            <span className="answer-number-text">B</span>
            <AiOutlineClose className="false-icon" />
            <BsCheckLg className="true-icon" />
          </div>
          <div className="answer-text">{Answers[1]}</div>
        </div>
        <div
          onClick={() => {
            if (!disable) {
              handleAnswer(answerC.current);
            }
          }}
          ref={answerC}
          className="answer c"
        >
          <div className="answer-number">
            <span className="answer-number-text">C</span>
            <AiOutlineClose className="false-icon" />
            <BsCheckLg className="true-icon" />
          </div>
          <div className="answer-text">{Answers[2]}</div>
        </div>
        <div
          onClick={() => {
            if (!disable) {
              handleAnswer(answerD.current);
            }
          }}
          ref={answerD}
          className="answer d"
        >
          <div className="answer-number">
            <span className="answer-number-text">D</span>
            <AiOutlineClose className="false-icon" />
            <BsCheckLg className="true-icon" />
          </div>
          <div className="answer-text">{Answers[3]}</div>
        </div>
      </div>
    </>
  );
}

export { Answers, showAnswer, reset, toggleDisaple };
