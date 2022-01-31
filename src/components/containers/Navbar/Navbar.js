import React from "react";
import { useState } from "react/cjs/react.development";
import classes from "./Navbar.module.css";

export default function Navbar(props) {
  const [scrolling, updateScrolling] = useState(false);

  return (
    <div
      className={
        scrolling ? `${classes.navBar} ${classes.scrolling}` : classes.navBar
      }
    >
      <img
        src={
          props.sideBarState
            ? "../assets/projectImg/NavClose.png"
            : "../assets/projectImg/NavOpen.png"
        }
        className={props.sideBarState ? classes.none : classes.burger}
        onClick={props.clickHandle}
        onScroll={() => updateScrolling(true)}
      ></img>
      <img className={classes.fish} src="../assets/png/trout.png" />
    </div>
  );
}
