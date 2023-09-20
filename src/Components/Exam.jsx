import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Exam.css";

function Exam() {
  const [width, setWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(15);
  const [currentScore, setCurrentScore] = useState(0);
  const intervalRef = useRef(null);
  const answerA = useRef(),
    answerB = useRef(),
    answerC = useRef(),
    answerD = useRef();
  let location = useLocation();
  let exam = location.state?.quiz;

  const showAnswer = () => {
    let answer = exam.Correct_Answers[index];
    let target = answerD;

    if (answerA.current.classList.contains(answer)) {
      answerA.current.classList.add("selected");
      target = answerA;
    } else if (answerB.current.classList.contains(answer)) {
      answerB.current.classList.add("selected");
      target = answerB;
    } else if (answerC.current.classList.contains(answer)) {
      answerC.current.classList.add("selected");
      target = answerC;
    } else {
      answerD.current.classList.add("selected");
    }

    if (index >= 1) {
      // exam ended
      // show score with a button and clcik will exit to home
    } else {
      setTimeout(() => {
        setIndex(index + 1);
        setTime(15);
        setWidth(0);
        target.current.classList.remove("selected");
      }, 1000);
    }
  };

  const handleAnswer = (element) => {
    let answer = exam.Correct_Answers[index];
    let target;
    let wrong = false;

    if (element.classList.contains(answer)) {
      element.classList.add("selected");
      // 100 / questions count
      setCurrentScore((prevScore) => prevScore + 1);
    } else {
      element.classList.add("wrong");
      wrong = true;
      if (answerA.current.classList.contains(answer)) {
        answerA.current.classList.add("selected");
        target = answerA;
      } else if (answerB.current.classList.contains(answer)) {
        answerB.current.classList.add("selected");
        target = answerB;
      } else if (answerC.current.classList.contains(answer)) {
        answerC.current.classList.add("selected");
        target = answerC;
      } else {
        answerD.current.classList.add("selected");
      }
    }
    clearInterval(intervalRef.current);

    if (index >= 1) {
      // exam ended
      // show score with a button and clcik will exit to home
    } else {
      setTimeout(() => {
        setIndex(index + 1);
        setTime(15);
        setWidth(0);

        if (wrong) {
          target.current.classList.remove("selected");
          element.classList.remove("wrong");
        } else {
          element.classList.remove("selected");
        }
      }, 1000);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setWidth((prevWidth) => prevWidth + 6.67);
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalRef.current);
      showAnswer();
    }, 15000);
  }, [index]);

  return (
    <>
      <div className="exam-screen">
        <div className="exam-container">
          <div className="question">
            <div className="question-number">
              Question <span>{index + 1}</span>/2
            </div>
            <div className="question-text">{exam.Questions[index]}</div>
          </div>
          <div className="time-line-container">
            <div className="time-line-track">
              <div style={{ width: width + "%" }} className="time-line"></div>
            </div>
            <div className="time-left">
              <span>{time} </span> s
            </div>
          </div>
          <div className="answers">
            <div
              onClick={() => {
                handleAnswer(answerA.current);
              }}
              ref={answerA}
              className="answer a"
            >
              <div className="answer-number a">A</div>
              <div className="answer-text">{exam.Answers[index][0]}</div>
            </div>
            <div
              onClick={() => {
                handleAnswer(answerB.current);
              }}
              ref={answerB}
              className="answer b"
            >
              <div className="answer-number">B</div>
              <div className="answer-text">{exam.Answers[index][1]}</div>
            </div>
            <div
              onClick={() => {
                handleAnswer(answerC.current);
              }}
              ref={answerC}
              className="answer c"
            >
              <div className="answer-number">C</div>
              <div className="answer-text">{exam.Answers[index][2]}</div>
            </div>
            <div
              onClick={() => {
                handleAnswer(answerD.current);
              }}
              ref={answerD}
              className="answer d"
            >
              <div className="answer-number">D</div>
              <div className="answer-text">{exam.Answers[index][3]}</div>
            </div>
          </div>
        </div>
        <div className="score">{currentScore}</div>
      </div>
    </>
  );
}

export default Exam;
