import React from "react";
import InputField from "./InputField";
import DownList from "./DownList.jsx";

function MakeQuiz({
  fetchAnswerA,
  fetchAnswerB,
  fetchAnswerC,
  fetchAnswerD,
  fetchCorrectAnswer,
  fetchQuestion,
}) {
  return (
    <>
      <div className="question-inputs">
        <InputField
          containerClassName={"question-container"}
          fieldClassName={"question-field"}
          fetchData={fetchQuestion}
          type={"text"}
          label="Question text"
        />
        <InputField
          containerClassName={"question-container"}
          fieldClassName={"question-field"}
          fetchData={fetchAnswerA}
          type={"text"}
          label="Answer A"
        />
        <InputField
          containerClassName={"question-container"}
          fieldClassName={"question-field"}
          fetchData={fetchAnswerB}
          type={"text"}
          label="Answer B"
        />
        <InputField
          containerClassName={"question-container"}
          fieldClassName={"question-field"}
          fetchData={fetchAnswerC}
          type={"text"}
          label="Answer C"
        />
        <InputField
          containerClassName={"question-container"}
          fieldClassName={"question-field"}
          fetchData={fetchAnswerD}
          type={"text"}
          label="Answer D"
        />
        <DownList fetchData={fetchCorrectAnswer} />
      </div>
    </>
  );
}

export default MakeQuiz;
