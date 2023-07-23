import Option from "./Option";
import { useState } from "react";

const QuestionCard = ({ ele, setScore }) => {
  const [showans, setShowAns] = useState(true);
  const [showright, setshowright] = useState(false);

  const handleans = () => {
    setShowAns(!showans);

    if (!showright) {
      setshowright(true);
    }
  };

  return (
    <div className="question-card">
      <h3>{ele.question}</h3>

      <div className="options">
        {ele.options.map((elm, index) => {
          return (
            <Option
              op={elm}
              handleans={handleans}
              showright={showright}
              correct={index === ele.correctOptionIndex}
              index={index}
              setScore={setScore}
              coorectindex={ele.correctOptionIndex}
            />
          );
        })}
      </div>

      <div className="show-ans">
        <button onClick={handleans}>{showans ? "Show Ans" : "Hide Ans"}</button>
        {!showans ? <p>{ele.options[ele.correctOptionIndex]}</p> : ""}
      </div>
    </div>
  );
};

export default QuestionCard;