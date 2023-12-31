import React, { useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { addStudent, checkStudent } from "../../firebase/students";
import { addInstructor, checkInstructor } from "../../firebase/instructors";
import history from "../../history";
import "./Register.css";

function Register() {
  const passwordField = useRef("");
  const nameField = useRef("");
  const emailField = useRef("");
  const ageField = useRef("");
  const university_jobField = useRef("");
  const facultyField = useRef("");

  const [error, setError] = useState(false);
  const [showed, setShowed] = useState(false);
  const [instructor, setInstructor] = useState(true);

  const toggleShowPass = () => {
    setShowed(!showed);
  };

  const toggleRegister = () => {
    setInstructor(!instructor);
  };

  const check = () => {
    if (
      passwordField.current.value === "" ||
      nameField.current.value === "" ||
      emailField.current.value === "" ||
      ageField.current.value === "" ||
      university_jobField.current.value === ""
    ) {
      return false;
    }
    if (!instructor && facultyField.current.value === "") {
      return false;
    }
    return true;
  };

  async function addInstructorToDb(instructor) {
    instructor.Job = university_jobField.current.value;
    instructor.Quizzes = [];
    let res = checkInstructor(instructor);

    if (res === -1) {
      await addInstructor(instructor);
      history.replace("/Login");
      history.go();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  }

  async function addStudentToDb(student) {
    student.Faculty = facultyField.current.value;
    student.University = university_jobField.current.value;
    let res = await checkStudent(student);

    if (res === -1) {
      await addStudent(student);
      history.replace("/Login");
      history.go();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }

  const register = async () => {
    if (!check()) {
      return;
    }
    let user = {
      Name: nameField.current.value,
      Age: ageField.current.value,
      Email: emailField.current.value,
      Password: passwordField.current.value,
    };

    if (instructor) {
      addInstructorToDb(user);
    } else {
      addStudentToDb(user);
    }
  };

  return (
    <>
      <div className="register-screen">
        <div className="register-container">
          <div className="register-header">
            <h1>Register</h1>
          </div>
          <div className="inputs">
            <div className="input-field">
              <input ref={nameField} required></input>
              <label>Name</label>
            </div>

            <div className="input-field">
              <input type="number" ref={ageField} required></input>
              <label>Age</label>
            </div>

            <div className="input-field">
              <input ref={emailField} required></input>
              <label>Email</label>
            </div>

            <div className="input-field password">
              <input
                ref={passwordField}
                required
                type={showed ? "text" : "password"}
              ></input>
              <label>Passowrd</label>
              <span onClick={toggleShowPass} className="show-pass">
                {showed ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>

            <div className="input-field">
              <input ref={university_jobField} required></input>
              <label>{instructor ? "Job" : "University"}</label>
            </div>

            {instructor ? (
              <></>
            ) : (
              <div className="input-field">
                <input ref={facultyField} required></input>
                <label>Faculty</label>
              </div>
            )}
            <div className="register">
              <button className="register-btn" onClick={register}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
              </button>
              <span onClick={toggleRegister} className="toggle-register">
                Register as {instructor ? "Student" : "Instructor"}
              </span>
            </div>
          </div>
          <span className="error-message">
            {error ? "The Email already exist!" : ""}
          </span>
        </div>
      </div>
    </>
  );
}

export default Register;
