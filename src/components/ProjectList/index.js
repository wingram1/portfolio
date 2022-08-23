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
      deployed: "https://github.com/VCB-Projects/drip-planner",
      github: "https://github.com/wingram1/drip-planner",
      desc: (
        <div>
          <p>
            Web app that provides the forecast for stops and destinations along
            a trip. Accessible and easy to use with the use of server side
            API's.
          </p>
          <p>Technologies used: </p>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Leaflet</li>
            <li>National Weather Service API</li>
          </ul>
          <p>Collaborators: </p>
          <ul>
            <li>William Ingram - Forecast and Trip functionality</li>
            <li>
              <a href="https://github.com/j-maclellan">John Maclellan</a> -
              Leaflet functionality
            </li>
            <li>
              <a href="https://github.com/geranv1020">Geran Vanatta</a> - Design
              and CSS
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "up2bar",
      src: up2bar,
      alt: "up2bar screenshot",
      deployed: "https://up2bar.herokuapp.com/",
      github: "https://github.com/wingram1/up2bar",
      desc: (
        <div>
          <p>
            Web app where bar-seekers can seek bars in their present or future
            locations
          </p>
          <p>Technologies used: </p>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>Handlebars.js and CSS</li>
            <li>Leaflet</li>
          </ul>
          <p>Collaborators:</p>
          <ul>
            <li>William Ingram - Handlebars, Design, CSS, Leaflet</li>
            <li>
              <a href="https://github.com/j-maclellan">John Maclellan</a> -
              Express.js and misc back-end
            </li>
            <li>
              <a href="https://github.com/joshlyons225">Josh Lyons</a> - MySQL
              and Database management
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "FlexLog",
      src: flexLog,
      alt: "FlexLog screenshot",
      deployed: "https://wingram1.github.io/FlexLog",
      github: "https://github.com/wingram1/FlexLog",
      desc: (
        <div>
          <p>
            Fitness tracker PWA that lets users create, follow, and log workouts
          </p>
          <p>Technologies used: </p>
          <ul>
            <li>React</li>
            <li>Mantine component library</li>
            <li>Express.js</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Authentication with JWT</li>
          </ul>
          <p>Collaborators:</p>
          <ul>
            <li>William Ingram - Frontend </li>
            <li>
              <a href="https://github.com/j-maclellan">John Maclellan</a> -
              Backend
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Employee Tracker",
      src: employeeTracker,
      alt: "Employee Tracker screenshot",
      deployed: "",
      github: "https://github.com/wingram1/employee-tracker",
      desc: (
        <div>
          <p>
            Command line app with which users can enter, view, and edit employee
            information.
          </p>
          <p>Technologies used: </p>
          <ul>
            <li>Node.js</li>
            <li>Inquirer node package</li>
            <li>MySQL</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Social Network API",
      src: socialNetworkAPI,
      alt: "Social Network API",
      deployed: "",
      github: "https://github.com/wingram1/social-network-api",
      desc: (
        <div>
          <p>
            Social Network API framework made with that supports users,
            thoughts, and replies
          </p>
          <p>Technologies used: </p>
          <ul>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Node.js</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Book Search Engine",
      src: bookSearchEngine,
      alt: "Book Search Engine screenshot",
      deployed: "https://quiet-springs-42659.herokuapp.com/",
      github: "https://github.com/wingram1/book-search-engine",
      desc: (
        <div>
          <p>
            Web app that uses the Google Books API to find and save books to the
            user's account.
          </p>
          <p>Refactored from a RESTful API to one that uses GraphQL</p>
          <p>Technologies used: </p>
          <ul>
            <li>React</li>
            <li>GraphQL</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Google Books API</li>
            <li>Authentication with JWT</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project, i) => (
        <div
          className="project border py-3 d-flex flex-column"
          key={`project-${i}`}
        >
          <h3>{project.title}</h3>
          <img src={project.src} alt={project.alt}></img>

          {project.desc ? <>{project.desc}</> : <></>}
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
