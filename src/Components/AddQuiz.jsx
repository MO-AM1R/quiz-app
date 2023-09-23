import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import FirstStep from "./FirstStep";
import MakeQuiz from "./MakeQuiz.jsx";
import "./AddQuiz.css";

function AddQuiz() {
  const location = useLocation();
  const instructorName = location.state.name;

  const errorMessage = useRef();

  const [number, setNumber] = useState(0);
  const [category, setCategory] = useState("");
  const [fetched, setFetched] = useState(false);
  const [index, setIndex] = useState(0);

  const [quiz, setQuiz] = useState({
    Answers: new Array(number),
    Category: category,
    Correct_Answers: new Array(number),
    Instructor: instructorName,
    Question_Count: number,
    Questions: new Array(number),
  });

  const fetchCategory = (data) => {
    setCategory(data);
  };

  const fetchNumber = (data) => {
    setNumber(data.toString());
  };

  const fetchQuestion = (value) => {
    console.log(index);
    quiz.Questions[index] = value;
  };

  const fetchAnswerA = (value) => {
    quiz.Answers[index][0] = value;
  };

  const fetchAnswerB = (value) => {
    quiz.Answers[index][1] = value;
  };

  const fetchAnswerC = (value) => {
    quiz.Answers[index][2] = value;
  };

  const fetchAnswerD = (value) => {
    quiz.Answers[index][3] = value;
  };

  const fetchCorrectAnswer = (value) => {
    quiz.Correct_Answers.push(value);
  };

  const makeQuiz = () => {
    console.log(number);
    if (number === 0 || category === "") {
      errorMessage.current.style.display = "block";
      setTimeout(() => {
        errorMessage.current.style.display = "none";
      }, 2000);
      return;
    }
    setFetched(true);
    quiz.Question_Count = number;
    quiz.Category = category;

    for (let index = 0; index < number; index++) {
      quiz.Answers[index] = ["", "", "", ""];
    }
  };

  const increaseIndex = () => {
    console.log(quiz);
    if (number - 1 > index) {
      setIndex(index + 1);
      // reset inputs
      // fix back bug
      // remove edit btn
      // make it responsive
      // test project
    }
  };

  return (
    <>
      <div className="add-quiz-screen">
        <div className="add-quiz-container">
          {!fetched ? (
            <FirstStep
              fetchCategory={fetchCategory}
              fetchNumber={fetchNumber}
            />
          ) : (
            <>
              <div className="question-header">Question {index + 1}</div>
              <MakeQuiz
                fetchAnswerA={fetchAnswerA}
                fetchAnswerB={fetchAnswerB}
                fetchAnswerC={fetchAnswerC}
                fetchAnswerD={fetchAnswerD}
                fetchQuestion={fetchQuestion}
                fetchCorrectAnswer={fetchCorrectAnswer}
              />
            </>
          )}
          <div
            style={{ display: "none" }}
            className="error-message"
            ref={errorMessage}
          >
            please fill the information
          </div>
          <div className="confirm-btn-container">
            <button
              onClick={!fetched ? makeQuiz : increaseIndex}
              className="confirm-btn"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddQuiz;
