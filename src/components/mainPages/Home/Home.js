import React, { useState } from "react";
import classes from "./Home.module.css";
// import { Link } from "react-scroll";
// import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function Home(props) {
  const [title, changeTitle] = useState("Hi");

  const switchHeader = () => {
    setInterval(() => {
      changeTitle("JT");
    }, 500);
  };

  return (
    <div className={classes.container} id={props.id}>
      <div className={classes.splashText}>
        <h1 className={classes.titleText}>{title}</h1>
      </div>
      <div className={classes.welcomeContainer}>
        <p>Web Design</p>

        <p>Frontend Development</p>

        <p>Shopfiy Development</p>

        <p onAnimationEnd={switchHeader} id="lastToGo">
          {/* Think about storing as var in session storage, stopping animation from happening again */}
          Creating connections and amazing products
        </p>
        {/* <div>
          {title === "JT" && (
            <img className={classes.bigMeImg} src="/assets/me.png"></img>
          )}
        </div> */}
      </div>
    </div>
  );
}
