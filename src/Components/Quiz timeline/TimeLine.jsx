import React, { useEffect, useRef, useState } from "react";
import "./TimeLine.css";

let startAgain, endTime;

function TimeLine({ onTimeEnd }) {
  const [time, setTime] = useState(15);
  const [width, setWidth] = useState(0);
  const [end, setEnd] = useState(false);
  const interval = useRef();

  startAgain = () => {
    setWidth(0);
    setTime(15);
    setEnd(false);
  };

  endTime = () => {
    setEnd(true);
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      if (end) {
        clearInterval(interval.current);
        onTimeEnd();
      } else if (time > 0) {
        setTime(time - 1);
        setWidth(100 * ((16 - time) / 15));
      } else {
        clearInterval(interval.current);
        onTimeEnd();
      }
    }, 1000);
    return () => clearInterval(interval.current);
  }, [time, end]);

  return (
    <>
      <div className="time-line-container">
        <div className="time-line-track">
          <div
            style={{
              width: `${width}%`,
              background: `${
                width < 40 ? "lightgreen" : width < 70 ? "orange" : "red"
              }`,
            }}
            className="time-line"
          ></div>
        </div>
        <div className="time-left">
          <span>{time} </span> s
        </div>
      </div>
    </>
  );
}

export { TimeLine, startAgain, endTime };
