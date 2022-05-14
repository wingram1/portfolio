import React from "react";
import resume from "../../assets/ingram-resume.pdf";

function Resume() {
  return (
    <div className="w-100 justify-content-center">
      <h2 className="text-center">Skills</h2>
      <div className="d-flex flex-row w-100 justify-content-space-around">
        <div className="d-flex flex-column w-50">
          <h3>Front-end</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>React.js</li>
            <li>Handlebars</li>
          </ul>
        </div>
        <div className="d-flex flex-column w-50">
          <h3>Back-end</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL and Sequelize</li>
            <li>MongoDB and Mongoose</li>
          </ul>
        </div>
      </div>
      <a href={resume}>View resume</a>
      <br />
      <a href={resume} download>
        Download
      </a>
    </div>
  );
}

export default Resume;
