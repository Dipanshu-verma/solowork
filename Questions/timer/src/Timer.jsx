import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(null);
  const [fixedTime, setFixedTime] = useState(10); 
  let inputRef = useRef(null);
  let timerId = useRef(null);
const[runtime, setRunTime] = useState(false)
  useEffect(() => {
    inputRef.current.focus();

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let min = Math.floor((time % 3600) / 60);
    let sec = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(
      sec
    ).padStart(2, "0")}`;
  }

  function startTimer() {
    if(!runtime){
      setRunTime(true)
    clearInterval(timerId.current);
    if(time===null){
      setTime(fixedTime);
    }
     if(time===0){
      setTime(fixedTime);
     }
    timerId.current = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  }
}

  function stopTimer() {
    setRunTime(false)
    clearInterval(timerId.current);
  }

  function resetTimer() {
    setRunTime(false)
    clearInterval(timerId.current);
    setTime(null);
    setFixedTime(10)  
  }

  function forFixed(e){
    setRunTime(false)
    if(time != null){
      setTime(null)
    }
    setFixedTime(parseInt(e.target.value))
  }


  return (
    <div>
      <input
        type="number"
        value={fixedTime}  
        onChange={forFixed
          
        }  
        ref={inputRef}
      />
      <br />
      <h1>{formatTime(time)}</h1>
      <button onClick={startTimer}>START TIMER</button>
      <button onClick={stopTimer}>STOP TIMER</button>
      <button onClick={resetTimer}>RESET TIMER</button>
    </div>
  );
};

export default Timer;
