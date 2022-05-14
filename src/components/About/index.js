import React from "react";
import me from "../../assets/images/me.jpg";

function About() {
  return (
    <section id="about-me" className="d-flex flex-column">
      <div className="d-flex flex-row sub-section">
        <div className="d-flex flex-column">
          <h2>About Me</h2>
          <p>
            Currently enrolled in the Vanderbilt Full-Stack Coding Bootcamp, I
            am an aspiring web developer. At the ripe young age of 25, I've had
            experience in various job markets including the industries of music,
            education, trucking, and supply chain.
          </p>
          <p>I also have various hobbies including:</p>
          <ul>
            <li>
              <strong>Music:</strong> I play primarily French horn, dabble in
              piano/voice, and compose here and there on the side
            </li>
            <li>
              <strong>Video games:</strong> A player and developer, I have
              participated in three game jams with a group of like-minded
              individuals with our sights on future jams
            </li>
            <li>
              <strong>Running:</strong> I ran a half-marathon in November 2020.
              I have a dream of one day running a marathon, but I can't seem to
              stay un-injured!
            </li>
          </ul>
        </div>
        <div className="pt-2 secondary-div">
          <img src={me} style={{ width: `300px`, height: `300px` }} alt="me" />
        </div>
      </div>
      <h3>Skills</h3>
      <p>
        From the Vanderbilt Coding Bootcamp in particular, I have experience
        with the following:
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Use of Web- and Server-Sider APIs</li>
      </ul>
    </section>
  );
}

export default About;
