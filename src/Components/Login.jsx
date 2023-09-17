import React, { useEffect, useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { checkStudent } from "../firebase/students";
import { checkInstructor } from "../firebase/instructors";
import { Link } from "react-router-dom";
import history from "../history";
import "./Login.css";

function Login() {
  const email = useRef("");
  const password = useRef("");

  const [res, setRes] = useState(10);
  const [showed, setShowed] = useState(false);

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

    if (e == "" || p == "") {
      return;
    }

    let res1 = await checkStudent(user);
    let res2 = await checkInstructor(user);

    if (res1 == -1) {
      setRes(res2);
    } else if (res2 == -1) {
      setRes(res1);
    }
  };

  useEffect(() => {
    if (res === 1) {
      history.push("/home");
      history.go();
    }
  }, [res, history]);

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
                <span
                  style={{ display: res == 0 ? "block" : "none", color: "red" }}
                >
                  Password is incorrect
                </span>

                <span onClick={toggleShowPass} className="show-pass icon">
                  {showed ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
              </div>
            </div>

            <span className="register-link-container">
              <Link onClick={loginHandle}>
                <button className="signIn">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Sign In
                </button>
              </Link>

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
