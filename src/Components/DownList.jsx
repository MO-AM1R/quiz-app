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
