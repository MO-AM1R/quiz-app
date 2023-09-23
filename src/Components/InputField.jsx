import React, { useRef } from "react";
import "./InputField.css";

function InputField({
  label,
  type,
  fetchData,
  containerClassName,
  fieldClassName,
}) {
  const answer = useRef();

  const setAnswer = () => {
    fetchData(answer.current.value);
  };

  return (
    <>
      <div className={containerClassName}>
        <div className={fieldClassName}>
          <input
            ref={answer}
            onChange={setAnswer}
            name="inputName"
            type={type}
            required
          ></input>
          <label>{label}</label>
        </div>
      </div>
    </>
  );
}

export default InputField;
