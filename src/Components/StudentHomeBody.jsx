import React, { useEffect, useState } from "react";
import { initializeQuizzes, quizzes } from "../firebase/quizes";
import { initializeStudents, students } from "../firebase/students";
import Quizzes from "./Quizzes";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./StudentHomeBody.css";

function StudentHomeBody() {
  const [dataIntialized, setDataIntialized] = useState(false);

  useEffect(() => {
    async function getdata() {
      if (students) {
        setDataIntialized(true);
      } else {
        await initializeStudents();
        await initializeQuizzes();
        getdata();
      }
    }
    getdata();
  }, [students]);

  return (
    <>
      {dataIntialized ? (
        <>
          <div className="quizzes-container">
            <Quizzes student={true} quizzes={quizzes} />
          </div>
        </>
      ) : (
        <>
          <div className="loading-container">
            <AiOutlineLoading3Quarters className="loading" />
          </div>
        </>
      )}
    </>
  );
}

export default StudentHomeBody;
