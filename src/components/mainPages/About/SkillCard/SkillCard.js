import React from "react";
import classes from "./SkillCard.module.css";
// import tree from "../../../../assets/tree.jpeg";

export default function SkillCard({ header, info, icon }) {
  return (
    <div className={classes.skillCard}>
      <div className={classes.header}>
        <img src={icon} className={classes.skillImg}></img>
        <h3>{header}</h3>
      </div>
      <p>{info}</p>
    </div>
  );
}
