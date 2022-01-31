import React from "react";
import classes from "./WhoIAm.module.css";
import Aos from "aos";
import "aos/dist/aos";

export default function WhoIAm({ id }) {
  return (
    <div className={classes.container} id={id}>
      <div className={classes.title}>
        <h1>Hii</h1>
      </div>

      <div className={classes.contentContainer}>
        {/* <img className={classes.myPicture} src={myPicutre} /> */}

        <p>
          I'm John Traut! Born and raise in Seattle WA, I grew up loving the
          outdoors, playing every game on the gameboy color you can think of,
          and learning all I could about software development.
          <br></br>Im so excited to work with you.
        </p>
        <div>
          <a
            href="https://github.com/jfish1996"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img className={classes.icon} src="../assets/png/git.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/john-traut-aaa09018a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={classes.icon} src="../assets/png/linkedin.png" />
          </a>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vRckiy3g1yZ2cKOnfEo2WrXSe4vzvLY-Fzi1fb4B2zEoNB8dkkNe0vdWLdeXfu63teOnhIFYLDut2O5/pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={classes.icon} src="../assets/png/docs.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
