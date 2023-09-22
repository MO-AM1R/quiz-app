import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function AddQuizIcon({ toPage }) {
  return (
    <>
      <Link to={toPage} state={true} className="link">
        <AiFillPlusCircle />
      </Link>
    </>
  );
}

export default AddQuizIcon;
