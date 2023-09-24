import React, { useEffect, useRef, useState } from "react";
import "./InputField.css";

let resetInput;

function InputField({
  label,
  type,
  fetchData,
  containerClassName,
  fieldClassName,
  reset,
}) {
  const answer = useRef();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (reset) {
      setValue("");
    }
  }, [reset]);

  const setAnswer = (event) => {
    setValue(event.target.value);
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
            value={value}
          ></input>
          <label>{label}</label>
        </div>
      </div>
    </>
  );
}

export { InputField, resetInput };
