import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import InstructorHomeBody from "./InstructorHomeBody.jsx";
import {
  instructors,
  initializeInstructors,
  getInstructor,
} from "../firebase/instructors";
import { initializeQuizzes, getQuiz } from "../firebase/quizes";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./InstructorHome.css";

function InstructorHome(props) {
  const [dataInitialized, setDataInitialized] = useState(false);
  const [instructorQuizzes, setInstructorQuizzes] = useState([]);
  const [instructorId, setInstructorId] = useState("");
  const [instructorName, setInstructorName] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        if (!instructors) {
          await initializeQuizzes();
          await initializeInstructors();
        }

        const instructor = getInstructor(props.email);
        setInstructorName(instructor.Name.toString());

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
  }, [props.email]);

  return (
    <div className="instructor-home-screen">
      <Nav isLoged={true} user={"instructor"} instructorName={instructorName} />
      {dataInitialized ? (
        <div className="instructor-home-container">
          <InstructorHomeBody
            instructorId={instructorId}
            instructorQuizzes={instructorQuizzes}
          />
        </div>
      ) : (
        <>
          <div className="loading-container">
            <AiOutlineLoading3Quarters className="loading" />
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default InstructorHome;
