import React from "react";
import "./InputField.css";

function InputField({ label, type, handleClick }) {
  const sendData = (event) => {
    handleClick(event.target.inputName.value);
  };
  
  return (
    <>
      <form
        onSubmit={() => {
          this.sendData();
        }}
      >
        <div className="field-container">
          <div className="input-field-container">
            <input name="inputName" type={type} required></input>
            <label>{label}</label>
          </div>
        </div>
      </form>
    </>
  );
}

export default InputField;
