import React from "react";
import classes from "./CircleProgressBar.module.css";
const CircleProgressBar = ({ percentage, title, text, circleWidth }) => {
  let result;
  const radius = 75;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  if (percentage < 100) {
    percentage = `${percentage}%`;
    result = (
      <>
        <tspan y="45%">{percentage}</tspan>
        <tspan x="50%" y="65%">
          {title}
        </tspan>
      </>
    );
  }
  if (percentage === 100) {
    percentage = " ";
    result = <tspan y="50%">{title}</tspan>;
  }
  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        className={classes.svg}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className={classes["circle-background"]}
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className={classes["circle-progress"]}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90  ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className={classes["circle-title"]}
        >
          {result}
        </text>
      </svg>
      <p className={classes["circle-text"]}>{text}</p>
    </div>
  );
};
export default CircleProgressBar;
