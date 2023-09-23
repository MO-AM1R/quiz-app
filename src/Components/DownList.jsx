import React from "react";
import "./DownList.css";

function DownList({ fetchData }) {
  const handleChange = (event) => {
    fetchData(event.target.value);
  };
  return (
    <>
      <div className="down-list-container">
        <label htmlFor="Answers">Correct Answer:</label>
        <select onChange={handleChange} name="Answers" id="Answers">
          <option value="A">Answer A</option>
          <option value="B">Answer B</option>
          <option value="C">Answer C</option>
          <option value="D">Answer D</option>
        </select>
      </div>
    </>
  );
}

export default DownList;
