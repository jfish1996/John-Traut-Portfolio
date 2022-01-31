import React from "react";
import classes from "./Tech.module.css";
import techData from "../../../dataFiles/techIcons";

// import image from "../../../assets/alltechIcons/";

export default function Tech({ id }) {
  return (
    <>
      <div className={classes.techContainer} id={id}>
        <img className={classes.bigImg} src={"/study.jpg"} />

        <div className={classes.techBox}>
          <h1>The tools I use-</h1>
          {techData.map((icon) => {
            return <img src={icon.src}></img>;
          })}
        </div>
      </div>
    </>
  );
}
