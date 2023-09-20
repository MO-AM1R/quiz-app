import React, { useEffect, useState } from "react";
import {
  getCompletedQuizzes,
  initializeQuizzes,
  quizzes,
} from "../firebase/quizes";
import { initializeStudents, students } from "../firebase/students";
import { initializeInstructors } from "../firebase/instructors";
import AvailableQuizzes from "./AvailableQuizzes";
import CompletedQuizzes from "./CompletedQuizzes";
import "./StudentHomeBody.css";

function StudentHomeBody(props) {
  const [dataIntialized, setDataIntialized] = useState(false);
  let completedQuizzes = [];

  useEffect(() => {
    async function getdata() {
      if (students) {
        students.forEach((element) => {
          if (element.Email === props.email) {
            element.Completed_Quizzes.forEach((element) => {
              completedQuizzes.push({
                quiz: getCompletedQuizzes(element.Id),
                score: element.Score,
              });
            });
          }
        });
        setDataIntialized(true);
      } else {
        await initializeStudents();
        await initializeQuizzes();
        await initializeInstructors();
        getdata();
      }
    }
    getdata();
  }, [students]);

  return (
    <>
      <div className="quizzes-container">
        {dataIntialized ? (
          <>
            <AvailableQuizzes quizzes={quizzes} />
            <CompletedQuizzes completedQuizzes={completedQuizzes} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default StudentHomeBody;
