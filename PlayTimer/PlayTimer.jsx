import React from "react";
import "./PlayTimer.css";

export default function PlayTimer(props) {
  
    const StartButton = (
    <div className="btn btn-one btn-start"
         onClick={props.handleStart}>
      Start
    </div>);
    const ActiveButtons = (
  <div className="btn-grp">
    <div className="btn btn-one btn-start"
         onClick={props.handleStart}>
         {props.isPaused ? "Start" : "Stop"}
    </div>
    <div className="btn-grp">
      <div className="btn btn-two" 
          onClick={props.handleReset}>
          Reset
      </div>
      <div className="btn btn-one wait" 
          onClick={props.handlePauseResume}>
          {props.isPaused ? "Resume" : "Wait"}  
      </div>
      </div>
    </div>
    );
  return (
    <div className="Play-Buttons">
     <div>{props.active ? ActiveButtons : StartButton}
     </div>
    </div>
  );
}