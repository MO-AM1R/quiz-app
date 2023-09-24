import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { initializeInstructors } from "./firebase/instructors";
import { initializeStudents } from "./firebase/students";
import { initializeQuizzes } from "./firebase/quizes";
import Login from "./Components/Login";
import AddQuiz from "./Components/AddQuiz";
import Register from "./Components/Register";
import Home from "./Components/Home.jsx";
import "./App.css";
import Exam from "./Components/Exam";
import LogoutHome from "./Components/LogoutHome";

function App() {
  useEffect(() => {
    async function initializeData() {
      await initializeStudents();
      await initializeInstructors();
      await initializeQuizzes();
    }

    initializeData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LogoutHome />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
        <Route path="/add_quiz" element={<AddQuiz />}></Route>
      </Routes>
    </>
  );
}

export default App;
