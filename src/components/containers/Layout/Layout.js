import React, { useState } from "react";
import ContentHolder from "../ContentHolder/ContentHolder";
import classes from "./Layout.module.css";
import Home from "../../mainPages/Home/Home";
import About from "../../mainPages/About/About";
import Projects from "../../mainPages/Projects/Projects";
import Contact from "../../mainPages/Contact/Contact";
import WhoIAm from "../../mainPages/About/WhoIAm/WhoIAm";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Tech from "../../mainPages/Tech/Tech";
import Aos from "aos";
import "aos/dist/aos";
import { useEffect } from "react/cjs/react.development";
// import GreyOut from "../../visalComponents/GreyOut/GreyOut";

export const ThemeContext = React.createContext();
export const UpdateThemeContext = React.createContext();

export default function Layout() {
  const [sideBarState, changeSideBar] = useState(false);
  const [dayOrNight, changeDayOrNight] = useState("morning");

  const updateTheme = (timeOfDay) => {
    if (timeOfDay === "morning") {
      changeDayOrNight("morning");
    } else if (timeOfDay === "afternoon") {
      changeDayOrNight("afternoon");
    } else if (timeOfDay === "night") {
      changeDayOrNight("night");
    } else {
      console.log("not an accurate time");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <UpdateThemeContext.Provider value={updateTheme}>
      <ThemeContext.Provider value={dayOrNight}>
        <div className={classes.mainContainer}>
          <SideBar
            isInView={sideBarState}
            clickOutside={changeSideBar}
            clickHandle={() => {
              changeSideBar(!sideBarState);
            }}
          />
          <Navbar
            clickHandle={() => changeSideBar(!sideBarState)}
            sideBarState={sideBarState}
          />
          <Home id="Home" />

          <div data-aos="fade-up">
            <WhoIAm id="About" />
          </div>
          <About />

          <Tech id="Tools" />

          <Projects id="Projects" />

          <Contact id="Contact" />
        </div>
      </ThemeContext.Provider>
    </UpdateThemeContext.Provider>
  );
}
