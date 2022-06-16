import React from "react";

import dripPlanner from "../../assets/images/drip-planner.png";
import up2bar from "../../assets/images/up2bar.png";
import flexLog from "../../assets/images/flexlog.png";
import employeeTracker from "../../assets/images/employee-tracker.png";
import socialNetworkAPI from "../../assets/images/social-network-api.png";
import bookSearchEngine from "../../assets/images/book-search-engine.png";

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
      title: "FlexLog",
      src: flexLog,
      alt: "FlexLog screenshot",
      deployed: "https://wingram1.github.io/FlexLog",
      github: "https://github.com/wingram1/FlexLog",
    },
    {
      title: "Employee Tracker",
      src: employeeTracker,
      alt: "Employee Tracker screenshot",
      deployed: "",
      github: "https://github.com/wingram1/employee-tracker",
    },
    {
      title: "Social Network API",
      src: socialNetworkAPI,
      alt: "Social Network API",
      deployed: "",
      github: "https://github.com/wingram1/social-network-api",
    },
    {
      title: "Book Search Engine",
      src: bookSearchEngine,
      alt: "Book Search Engine screenshot",
      deployed: "https://quiet-springs-42659.herokuapp.com/",
      github: "https://github.com/wingram1/book-search-engine",
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
          {project.deployed ? (
            <a className="link" href={project.deployed}>
              Deployed Application
            </a>
          ) : (
            <></>
          )}
          <a className="link" href={project.github}>
            GitHub Repository
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
