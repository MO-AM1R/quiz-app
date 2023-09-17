import React, { useRef } from "react";
import "./LogoutHome.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import {
  AiFillPlusCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGooglePlusCircle,
  AiFillGithub,
} from "react-icons/ai";

function LogoutHome() {
  return (
    <div className="lougout-screen">
      <div className="logout-container">
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
                <Link to={"/register"} state={true} className="link">
                  <AiFillPlusCircle />
                </Link>
              </li>
              <li>
                <Link className="link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li>
                <Link className="link" to={"/register"}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="body">
          <div className="body-container">
            <h1 className="body-header">Quiz App</h1>
            <div className="body-info">
              Discover our user-friendly quiz maker website, where instructors
              effortlessly create quizzes to gauge student understanding, while
              students access and engage with assessments. Join us for a
              seamless learning and evaluation experience!
            </div>
            <Link to={"/login"}>
              <button>Start</button>
            </Link>
          </div>
        </div>
        <footer>
          <div class="footer-content">
            <h3>Foolish Developer</h3>
            <p>
              Welcome to Quiz App, your ultimate destination for creating and
              taking quizzes. Whether you're an instructor looking to craft
              engaging assessments or a student ready to test your knowledge,
              our platform offers a seamless and interactive learning
              experience. Join us in the quest for knowledge!
            </p>
            <ul class="socials">
              <li>
                <a>
                  <AiFillFacebook className="social-icon" />
                </a>
              </li>
              <li>
                <a>
                  <AiFillGithub className="social-icon" />
                </a>
              </li>
              <li>
                <a>
                  <AiFillGooglePlusCircle className="social-icon" />
                </a>
              </li>
              <li>
                <a>
                  <AiFillYoutube className="social-icon" />
                </a>
              </li>
              <li>
                <a>
                  <AiFillLinkedin className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div id="about" class="footer-bottom">
            <p>
              copyright &copy; <a>Mohamed Amir</a>
            </p>
            <div class="footer-menu">
              <ul class="f-menu">
                <li>
                  <ScrollLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LogoutHome;
