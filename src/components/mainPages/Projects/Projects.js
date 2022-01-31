import React from "react";
import classes from "./Projects.module.css";
import "../../../App.css";
import ProjectContainer from "../../containers/ProjectContainer/ProjectContainer";
import projData from "../../../dataFiles/projects";

export default function Projects({ id }) {
  return (
    <div className={classes.projectdivContainer} id={id}>
      <h1>Projects</h1>
      <div className={classes.projectmainContent}>
        {projData.map((project) => {
          return (
            <ProjectContainer
              link={project.link}
              img={project.img}
              title={project.name}
              desc={project.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
