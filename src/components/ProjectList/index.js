import React from "react";

import dripPlanner from "../../assets/images/drip-planner.png";
import up2bar from "../../assets/images/up2bar.png";

function ProjectList() {
  const projects = [
    {
      title: "Drip Planner",
      src: dripPlanner,
      alt: "drip-planner screenshot",
      deployed: "",
      github: "",
    },
    {
      title: "up2bar",
      src: up2bar,
      alt: "up2bar screenshot",
      deployed: "",
      github: "",
    },
    {
      title: "project 3",
      src: "../../assets/images/",
      alt: "",
      deployed: "",
      github: "",
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
          <a href={project.deployed}>Deployed Application</a>
          <a href={project.github}>GitHub Repository</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
