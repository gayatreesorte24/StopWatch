import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [paused, setIsPaused] = useState(false);
  const timerId = useRef();

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    setIsPaused(true);
    if (timerId.current) {
      clearInterval(timerId.current);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    setTimer(0);
  };

  return (
    <div className="App">
      <div className="timer">{timer}</div>
      <div className="action-buttons">
        <button onClick={startTimer}>{paused ? "Resume" : "Start"}</button>
        <button onClick={pauseTimer}> Pause</button>
        <button onClick={stopTimer}>Reset</button>
      </div>
    </div>
  );
}
