import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { TimeLine, startAgain, endTime } from "../Quiz timeline/TimeLine";
import { Answers, showAnswer, reset, toggleDisaple } from "../Answers/Answers";
import Score from "../Score/Score";
import Question from "../Question/Questions";
import "./Exam.css";

function Exam() {
  const [index, setIndex] = useState(0);
  const [choosed, setChoosed] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [examEnd, setExamEnd] = useState(false);
  const [examStart, setExamStart] = useState(false);
  const nextButton = useRef(null);
  const examContainer = useRef(null);
  let location = useLocation();
  let exam = location.state?.quiz;

  const nextQue = () => {
    if (index >= exam.Question_Count - 1) {
      setExamEnd(true);
      examContainer.current.classList.add("congrats");
      return;
    }
    reset();
    setIndex(index + 1);
    startAgain();
    toggleDisaple();
  };

  const increamentScore = () => {
    setCurrentScore((prevScore) => prevScore + 100 / exam.Question_Count);
  };

  const timeEnd = () => {
    showAnswer();
    setChoosed(true);
  };

  const answerSelected = (correct) => {
    if (correct) {
      increamentScore();
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
    endTime();
    setChoosed(true);
    toggleDisaple();
  };

  return (
    <>
      <div className="exam-screen">
        <div ref={examContainer} className="exam-container">
          {examStart ? (
            <>
              {!examEnd ? (
                <>
                  <Question
                    index={index + 1}
                    question={exam.Questions[index]}
                    questionCount={exam.Question_Count}
                  />
                  <TimeLine onTimeEnd={timeEnd} />
                  <Answers
                    Correct_Answers={exam.Correct_Answers[index]}
                    Answers={exam.Answers[index]}
                    increamentScore={increamentScore}
                    answerSelected={answerSelected}
                  />
                </>
              ) : (
                <></>
              )}

              <div
                style={{
                  display: examEnd ? "none" : "flex",
                  opacity: choosed ? 1 : 0,
                }}
                onClick={nextQue}
                className="next-btn-container"
              >
                <button ref={nextButton} className="next-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Next
                </button>
              </div>
              {examEnd ? (
                <Score
                  wrongAnswers={wrongAnswers}
                  correctAnswers={correctAnswers}
                  score={currentScore}
                  questionCount={exam.Question_Count}
                />
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <div className="start-btn-container">
                <button
                  onClick={() => {
                    setExamStart(true);
                  }}
                  className="start-btn"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Start
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Exam;
