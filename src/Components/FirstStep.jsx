import React from "react";
import InputField from "./InputField";
import "./FirstStep.css";

function FirstStep({ fetchNumber, fetchCategory }) {
  return (
    <>
      <div className="input-fields">
        <InputField
          fetchData={fetchNumber}
          type={"number"}
          label="Number of questions"
          containerClassName={"field-container"}
          fieldClassName={"input-field-container"}
        />
        <InputField
          fetchData={fetchCategory}
          type={"text"}
          label="Quiz category"
          containerClassName={"field-container"}
          fieldClassName={"input-field-container"}
        />
      </div>
    </>
  );
}

export default FirstStep;
