import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { deleteQuiz } from "../firebase/quizes";
import { deleteInstructorQuiz } from "../firebase/instructors";

function Quiz(props) {
  const navigator = useNavigate();
  const [deleted, setDeleted] = useState(false);

  const deletQuiz = async () => {
    // delete quiz
    await deleteQuiz(props.id);

    // delete id from instructor quizzes
    await deleteInstructorQuiz(props.id, props.instructorId);

    props.deleteQuiz(props.id);
  };

  const handle = () => {
    if (props.student) {
      navigator("/exam", {
        state: {
          quiz: props.quiz,
        },
      });
    }
  };

  useEffect(() => {
    setDeleted(false);
  }, [deleted]);
  return (
    <>
      <div
        onClick={handle}
        style={!props.student ? { cursor: "default" } : { cursor: "pointer" }}
        className="quiz"
      >
        <div className="quiz-title">{props.quiz.Category}</div>
        <div className="quiz-info">
          <div className="quiz-question-count">
            {props.quiz.Question_Count + "  Questions"}
          </div>
          {props.student ? (
            <div className="quiz-instructor-name">{props.quiz.Instructor}</div>
          ) : (
            <>
              <div className="quiz-edit-btns">
                <div onClick={deletQuiz} className="delete-btn-container">
                  <button className="delete-btn">Delete</button>
                  <AiFillDelete className="icon" />
                </div>
                <div className="edit-btn-container">
                  <button className="edit-btn">Edit</button>
                  <AiTwotoneEdit className="icon" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Quiz;
