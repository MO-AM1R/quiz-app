import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGooglePlusCircle,
  AiFillGithub,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer>
        <div class="footer-content">
          <h3>Foolish Developer</h3>
          <p>
            Welcome to Quiz App, your ultimate destination for creating and
            taking quizzes. Whether you're an instructor looking to craft
            engaging assessments or a student ready to test your knowledge, our
            platform offers a seamless and interactive learning experience. Join
            us in the quest for knowledge!
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
    </>
  );
}

export default Footer;
