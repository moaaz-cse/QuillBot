import { useState } from "react";
import classes from "./Accomplishments.module.css";
import CircleProgressBar from "../circle-progress-bar/CircleProgressBar";

const accomplishmentData = [
  {
    id: 1,
    percentage: 75,
    title: "time saved",
    text: "Average time savings per writing project.",
  },
  {
    id: 2,
    percentage: 100,
    title: "50+million",
    text: "Trusted by millions worldwide.",
  },
  {
    id: 3,
    percentage: 85,
    title: "time saved",
    text: "Who reported their grades improved after using QuillBot.",
  },
];
const Accomplishments = () => {
  return (
    <>
      <div className={classes["chart-header"]}>
        <h3 className={classes["chart-header--title"]}>
          Write better, faster, and clearer instantly
        </h3>
        <p className={classes["chart-header--description"]}>
          QuillBot is trusted by students, professional writers, and
          <br /> business people who want to write more effectively.
        </p>
      </div>
      <div className={classes["chart-items"]}>
        {accomplishmentData.map((index) => (
          <CircleProgressBar
            key={index.id}
            percentage={index.percentage}
            title={index.title}
            text={index.text}
            circleWidth="200"
          />
        ))}
      </div>
    </>
  );
};
export default Accomplishments;
