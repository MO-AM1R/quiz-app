import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import AddQuizIcon from "./AddQuizIcon";
import "./Nav.css";

function Nav(props) {
  const navigator = useNavigate();

  const handlePages = () => {
    if (props.isLoged) {
      navigator("/add_quiz", {
        state: {
          email: props.email,
        },
      });
    } else {
      navigator("/register");
    }
  };
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
            <li className="add-quiz">
              {props.user != "student" ? (
                <div onClick={handlePages}>
                  <AddQuizIcon />
                </div>
              ) : (
                <></>
              )}
            </li>
            <li>
              {!props.isLoged ? (
                <Link className="link" to={"/login"}>
                  Login
                </Link>
              ) : (
                <></>
              )}
            </li>
            <li>
              <Link className="link" to={!props.isLoged ? "/register" : "/"}>
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
