import React, { useState } from "react";
import "./StopTimer.css";
import Timer from "../Timer/Timer";
import PlayTimer from "../PlayTimer/PlayTimer";
import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';


function StopTimer() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(!isPaused);
    setTime(0);
  };
  
  const handlePauseResume = () => {
        throttleTime(300)
        scan(setIsActive(true),
        setIsPaused(!isPaused))         
  }; 
    
  const handleReset = () => {
    setIsActive(true); 
    setTime(0);
  };
  
  return (
    <div className="stop-watch">
      <Timer time={time} />
      <PlayTimer
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}
  
export default StopTimer;