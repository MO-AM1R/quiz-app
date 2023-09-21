import React, { useEffect, useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { checkInstructor } from "../firebase/instructors";
import { checkStudent } from "../firebase/students";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const [res, setRes] = useState(10);
  const [showed, setShowed] = useState(false);
  const [isInstructor, setisInstructor] = useState(Boolean);

  const toggleShowPass = () => {
    setShowed(!showed);
  };

  const loginHandle = async () => {
    let e = email.current.value;
    let p = password.current.value;
    let user = {
      Email: e,
      Password: p,
    };

    let res1 = await checkStudent(user);
    let res2 = await checkInstructor(user);

    if (res1 == -1) {
      setRes(res2);
      setisInstructor(true);
    } else if (res2 == -1) {
      setRes(res1);
      setisInstructor(false);
    }
  };

  useEffect(() => {
    if (res === 1) {
      navigate("/home", {
        state: {
          logedIn: true,
          isInstructor: isInstructor,
          email: email.current.value,
        },
      });
    }
  }, [res]);

  return (
    <>
      <div className="login-screen">
        <div className="login-container">
          <div className="login-header">Login</div>
          <div className="login-components">
            <div className="inputs">
              <div className="user-box">
                <input className="user-info" ref={email} required />
                <label className="input-label">Email</label>
                <span
                  style={{
                    display: res == -1 ? "block" : "none",
                    color: "red",
                  }}
                >
                  The email is not exist
                </span>
              </div>
              <div className="user-box">
                <input
                  className="user-info password"
                  ref={password}
                  type={!showed ? "password" : "text"}
                  required
                />
                <label className="input-label">Password</label>

                <span onClick={toggleShowPass} className="show-pass icon">
                  {showed ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
                <span
                  style={{ display: res == 0 ? "block" : "none", color: "red" }}
                >
                  Password is incorrect
                </span>
              </div>
            </div>

            <span className="register-link-container">
              <button onClick={loginHandle} className="signIn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign In
              </button>

              <Link className="register-link" to={"/register"}>
                Create an accout ?
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
