import React, { useState, useEffect } from "react";
import { initializeQuizzes, getQuiz } from "../firebase/quizes";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  getInstructor,
  initializeInstructors,
  instructors,
} from "../firebase/instructors";
import "./InstructorHomeBody.css";
import Quizzes from "./Quizzes";

function InstructorHomeBody({ email }) {
  const [dataInitialized, setDataInitialized] = useState(false);
  const [instructorQuizzes, setInstructorQuizzes] = useState([]);
  const [instructorId, setInstructorId] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        if (!instructors) {
          await initializeQuizzes();
          await initializeInstructors();
        }

        const instructor = getInstructor(email);
        setInstructorId(instructor.id);
        const instructorQuizIds = instructor.Quizzes;

        const quizzes = await Promise.all(
          instructorQuizIds.map((id) => getQuiz(id))
        );
        setInstructorQuizzes(quizzes);
        setDataInitialized(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [email]);

  return (
    <>
      {dataInitialized ? (
        <>
          <div className="quizzes-container">
            <Quizzes
              instructorId={instructorId}
              student={false}
              quizzes={instructorQuizzes}
            />
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

export default InstructorHomeBody;
