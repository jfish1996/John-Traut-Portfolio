import React from "react";
import "./Button.css";
import { useContext } from "react";
export default function Button(props) {
  return (
    <div
      onClick={props.click}
      className={`buttonContainer ${props.buttonColor}`}
    ></div>
  );
}
