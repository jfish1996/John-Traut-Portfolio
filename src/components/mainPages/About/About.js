import React from "react";
import classes from "./About.module.css";
import "../../../App.css";

import SkillCards from "./SkillCard/SkillCard";
import skillCardsData from "../../../dataFiles/skillCards";

export default function About() {
  const mapSkillComps = (data) => {
    return data.map((item, index) => {
      return (
        <SkillCards
          header={item.header}
          icon={item.icon}
          info={item.info}
          key={index}
        />
      );
    });
  };

  return (
    <div className={classes.whatIdo}>
      <div className={classes.title}>
        <h1>What I do</h1>
      </div>
      <div className={classes.skillCardsContainer}>
        {mapSkillComps(skillCardsData)}
      </div>
    </div>
  );
}
