import React, { useState } from "react";
import { InputField } from "../Custom input field/InputField";
import DownList from "../Down list/DownList";

let resetFunc;
function MakeQuiz({
  fetchAnswerA,
  fetchAnswerB,
  fetchAnswerC,
  fetchAnswerD,
  fetchCorrectAnswer,
  fetchQuestion,
}) {
  const [reset, setReset] = useState(false);

  resetFunc = () => {
    setReset(true);

    setTimeout(() => {
      setReset(false);
    }, 0);
  };

  return (
    <>
      <div className="question-inputs">
        <InputField
          containerClassName={"question-container"}
          fieldClassName={"question-field"}
          fetchData={fetchQuestion}
          type={"text"}
          label="Question text"
          reset={reset}
        />
        <InputField
          containerClassName={"question-container"}
          fieldClassName={"question-field"}
          fetchData={fetchAnswerA}
          type={"text"}
          label="Answer A"
          reset={reset}
        />
        <InputField
          containerClassName={"question-container"}
          fieldClassName={"question-field"}
          fetchData={fetchAnswerB}
          type={"text"}
          label="Answer B"
          reset={reset}
        />
        <InputField
          containerClassName={"question-container"}
          fieldClassName={"question-field"}
          fetchData={fetchAnswerC}
          type={"text"}
          label="Answer C"
          reset={reset}
        />
        <InputField
          containerClassName={"question-container"}
          fieldClassName={"question-field"}
          fetchData={fetchAnswerD}
          type={"text"}
          label="Answer D"
          reset={reset}
        />
        <DownList reset={reset} fetchData={fetchCorrectAnswer} />
      </div>
    </>
  );
}

export { MakeQuiz, resetFunc };
