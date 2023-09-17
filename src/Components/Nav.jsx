import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

function Nav() {
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
    </>
  );
}

export default Nav;
