import "./AddQuiz.css";
import InputField from "./InputField.jsx";

function AddQuiz() {
  const handleClick = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="add-quiz-screen">
        <div className="add-quiz-container">
          <div className="input-fields">
            <InputField
              handleClick={handleClick}
              type={"number"}
              label="Number of questions"
            />
            <InputField
              handleClick={handleClick}
              type={"text"}
              label="quiz category"
            />
          </div>

          <div className="confirm-btn-container">
            <button className="confirm-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddQuiz;
