import React, { useState } from "react";
import Quiz from "./Quiz";
import "./Quizzes.css";

function Quizzes(props) {
  const [quizzes, setQuizzes] = useState([...props.quizzes]); // Initialize quizzes with data

  const handleDeleteQuiz = async (quizId) => {
    try {
      const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== quizId);
      setQuizzes(updatedQuizzes);
    } catch (error) {
      console.error("Error deleting quiz:", error);
    }
  };

  return (
    <>
      <div className="quizzes-header">
        {props.student ? "Available Quizzes" : "Your Quizzes"}
      </div>
      <div className="quizzes">
        {quizzes.map((element, index) => {
          return (
            <Quiz
              deleteQuiz={handleDeleteQuiz}
              instructorId={props.instructorId}
              key={index}
              id={element.id}
              student={props.student}
              quiz={element}
            />
          );
        })}
      </div>
    </>
  );
}

export default Quizzes;
