import { useState } from "react";
import QuestionCard from "./QuestionCard";
const Booklet = () => {
  const [Questions, setQuestions] = useState([]);
  const [start, setStart] = useState(true);
  const [score, setScore] = useState(0);
  const getRequest = async () => {
    try {
      let res = await fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
      );
      let data = await res.json();
      console.log(data.data);

      setQuestions(data.data);
      setStart(false);
    } catch (err) {
      console.log(err);
    }
  };

  const endexam = () => {
    setStart(true);
    setScore(0);
  };

  return (
    <div data-testid="Booklet" className="quiz-container">
      {start ? (
        <div className="welcome-div">
          <h1>Welcome to the Quiz!</h1>
          <p>To begin the exam, click on the 'Start Exam' button below</p>
          <button className="start-btn" onClick={getRequest}>
            Start Exam
          </button>
        </div>
      ) : (
        <div className="questions-container">
          <div className="header">
            <button className="end-btn" onClick={endexam}>
              End Exam
            </button>
            <h1 className="score">Score: {score}</h1>
          </div>

          {Questions.map((ele) => {
            return <QuestionCard key={ele.id} ele={ele} setScore={setScore} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Booklet;