import React from "react";
import "./InstructorHomeBody.css";
import Quizzes from "./Quizzes";

function InstructorHomeBody({ instructorId, instructorQuizzes }) {
  return (
    <>
      <div className="quizzes-container">
        <Quizzes
          instructorId={instructorId}
          student={false}
          quizzes={instructorQuizzes}
        />
      </div>
    </>
  );
}

export default InstructorHomeBody;
