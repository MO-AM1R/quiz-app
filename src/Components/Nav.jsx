import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import AddQuizIcon from "./AddQuizIcon";
import "./Nav.css";

function Nav(props) {
  return (
    <>
      <div id="home" className="nav">
        <div className="pre-nav">
          <ul>
            <li className="nav-header">Quiz-app</li>
            <li>Home</li>
            <li>
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className="post-nav">
          <ul>
            {props.user != "student" && props.isLoged ? (
              <li className="add-quiz">
                <>
                  <Link
                    className="add-quiz-link"
                    to={"/add_quiz"}
                    state={{
                      name: props.instructorName,
                      id: props.instructorId,
                    }}
                  >
                    <span>Create Quiz</span>
                    <AddQuizIcon />
                  </Link>
                </>
              </li>
            ) : (
              <></>
            )}
            <li>
              {!props.isLoged ? (
                <Link className="login-link" to={"/login"}>
                  Login
                </Link>
              ) : (
                <></>
              )}
            </li>
            <li>
              <Link
                className="signup-link"
                to={!props.isLoged ? "/register" : "/"}
              >
                {!props.isLoged ? "Sign up" : "Logout"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
