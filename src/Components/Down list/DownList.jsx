import React, { useEffect, useRef } from "react";
import "./DownList.css";

function DownList({ fetchData, reset }) {
  const DownListRef = useRef(null);

  const handleChange = (event) => {
    fetchData(event.target.value);
  };

  useEffect(() => {
    DownListRef.current.value = "Choose...";
  }, [reset]);

  return (
    <>
      <div className="down-list-container">
        <label htmlFor="Answers">Correct Answer:</label>
        <select
          onChange={handleChange}
          ref={DownListRef}
          name="Answers"
          id="Answers"
        >
          <option value="a">Answer A</option>
          <option value="b">Answer B</option>
          <option value="c">Answer C</option>
          <option value="d">Answer D</option>
        </select>
      </div>
    </>
  );
}

export default DownList;
