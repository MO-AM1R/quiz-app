import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { initializeStudents } from "./firebase/students";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home.jsx";
import "./App.css";
import { initializeInstructors } from "./firebase/instructors";

function App() {
  useEffect(() => {
    initializeStudents();
    initializeInstructors();
  }, []);

  let location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home logIn={false} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/home"
          element={<Home logIn={true} />}
          state={{ instractor: location.state?.isInstructor }}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
