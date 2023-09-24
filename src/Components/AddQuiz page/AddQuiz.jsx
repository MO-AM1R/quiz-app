import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import IntializeQuiz from "../Intialize quiz/IntializeQuiz";
import { MakeQuiz, resetFunc } from "../Make quiz page/MakeQuiz";
import { addQuiz } from "../../firebase/quizes";
import { addQuizTo } from "../../firebase/instructors";
import history from "../../history";
import Swal from "sweetalert2";
import "./AddQuiz.css";

function AddQuiz() {
  const location = useLocation();
  const instructorName = location.state.name;
  const instructorId = location.state.id;

  const errorMessage = useRef();

  const [number, setNumber] = useState(0);
  const [category, setCategory] = useState("");
  const [fetched, setFetched] = useState(false);
  const [index, setIndex] = useState(0);

  const [quiz, setQuiz] = useState({
    Answers: {},
    Category: category,
    Correct_Answers: Array.from({ length: number }, () => ""),
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

  const increaseIndex = async () => {
    if (number - 1 > index) {
      setIndex(index + 1);
      resetFunc();
    } else {
      let quizId = await addQuiz(quiz);
      await addQuizTo(instructorId, quizId);

      Swal.fire({
        title: "Good job!",
        text: "You added new Quiz.",
        icon: "success",
        confirmButtonColor: "#27005D",
      }).then(() => {
        history.back();
      });
    }
  };

  return (
    <>
      <div className="add-quiz-screen">
        <div className="add-quiz-container">
          {!fetched ? (
            <IntializeQuiz
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
