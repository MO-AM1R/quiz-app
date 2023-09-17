import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { initializeStudents } from "./firebase/students";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./App.css";
import { initializeInstructors } from "./firebase/instructors";

function App() {
  useEffect(() => {
    initializeStudents();
    initializeInstructors();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
