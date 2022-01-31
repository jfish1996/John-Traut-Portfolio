import React, { useState, useContext, useEffect, useRef } from "react";
import classes from "./SideBar.module.css";
import data from "../../../dataFiles/navFiles";
import { NavHashLink } from "react-router-hash-link";
import Button from "../../visalComponents/Button/Button";
import { UpdateThemeContext } from "../Layout/Layout";

export default function SideBar(props) {
  const updateTheme = useContext(UpdateThemeContext);

  function handleThemeClicks(value) {
    updateTheme(value);
    props.clickHandle();
  }

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!sideBarRef.current?.contains(event.target)) {
        props.clickOutside(false);
      }
    });
  }, []);

  let sideBarRef = useRef();
  return (
    <div
      className={props.isInView ? classes.sideBarActive : classes.sideBarHidden}
    >
      <ul ref={sideBarRef}>
        {data.map((listItem) => {
          return (
            <NavHashLink
              to={`/#${listItem.title}`}
              activeClassName="selected"
              smooth={true}
              scroll={(el) => {
                el.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
              }}
            >
              <li onClick={props.clickHandle}>{listItem.title}</li>{" "}
            </NavHashLink>
          );
        })}
      </ul>
      {/* <Button
        click={() => handleThemeClicks("morning")}
        buttonColor="morning"
      />
      <Button
        click={() => handleThemeClicks("afternoon")}
        buttonColor="afternoon"
      />
      <Button click={() => handleThemeClicks("night")} buttonColor="night" /> */}
    </div>
  );
}
