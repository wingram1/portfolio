import React from "react";

import dripPlanner from "../../assets/images/drip-planner.png";
import up2bar from "../../assets/images/up2bar.png";
import flexLog from "../../assets/images/flexlog.png";

function ProjectList() {
  const projects = [
    {
      title: "Drip Planner",
      src: dripPlanner,
      alt: "drip-planner screenshot",
      deployed: "https://wingram1.github.io/drip-planner/",
      github: "https://github.com/wingram1/drip-planner",
    },
    {
      title: "up2bar",
      src: up2bar,
      alt: "up2bar screenshot",
      deployed: "https://up2bar.herokuapp.com/",
      github: "https://github.com/wingram1/up2bar",
    },
    {
      title: "flexLog",
      src: flexLog,
      alt: "FlexLog screenshot",
      deployed: "https://wingram1.github.io/FlexLog",
      github: "https://github.com/wingram1/FlexLog",
    },
    {
      title: "project 4",
      src: "../../assets/images/",
      alt: "",
      deployed: "",
      github: "",
    },
    {
      title: "project 5",
      src: "../../assets/images/",
      alt: "",
      deployed: "",
      github: "",
    },
    {
      title: "project 6",
      src: "../../assets/images/",
      alt: "",
      deployed: "",
      github: "",
    },
  ];

  return (
    <div className="row">
      {projects.map((project, i) => (
        <div className="border w-50 d-flex flex-column" key={`project-${i}`}>
          <h3>{project.title}</h3>
          <img
            src={project.src}
            alt={project.alt}
            style={{ width: `400px`, height: `250px` }}
          ></img>
          <a className="link" href={project.deployed}>
            Deployed Application
          </a>
          <a className="link" href={project.github}>
            GitHub Repository
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
