import React, { useState } from "react";
import classes from "./ProjectContainer.module.css";

export default function ProjectContainer(props) {
  return (
    <div className={classes.card}>
      <img src={props.img} />
      <div className={classes.imgOverlay}>
        <div className={classes.imgOverlayTitle}>{props.title}</div>
        <div className={classes.imgOverlayDesc}>{props.desc}</div>
        {props.title === "Dizzy Dutchman Hyrdo" ? (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img
              className={classes.imgOverlayShopIcon}
              src="assets/projectImg/shopIcon.png"
            ></img>
          </a>
        ) : (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img
              className={classes.imgOverlayIcon}
              src="assets/projectImg/gitIcon.png"
            ></img>
          </a>
        )}
      </div>
    </div>
  );
}
