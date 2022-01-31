import React from "react";
import classes from "./ContentHolder.module.css";
import { ThemeContext } from "../Layout/Layout";
import { useContext } from "react/cjs/react.development";
export default function ContentHolder(props) {
  const theme = useContext(ThemeContext);
  console.log(theme);
  function classAssigner() {
    if (theme === "morning") {
      return classes.morningTheme;
    } else if (theme === "afternoon") {
      return classes.afternoonTheme;
    } else if (theme === "night") {
      return classes.nightTheme;
    }
  }
  return (
    <div className={`${classes.container} ${classAssigner()}`} id={props.id}>
      {props.children}
    </div>
  );
}
