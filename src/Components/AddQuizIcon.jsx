import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function AddQuizIcon() {
  return (
    <>
      <Link to={"/register"} state={true} className="link">
        <AiFillPlusCircle />
      </Link>
    </>
  );
}

export default AddQuizIcon;
