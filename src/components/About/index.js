import React from "react";
import me from "../../assets/images/me-2.jpg";

function About() {
  return (
    <section id="about-me" className="d-flex flex-column">
      <div className="d-flex flex-row sub-section">
        <div className="d-flex flex-column">
          <h2>About Me</h2>
          <p>
            Full-stack web developer eager to find new ways to engineer
            innovative and intuitive user experiences. With a colorful
            background in music, education, and supply chain, I bring to the
            table a fresh perspective towards communication and problem-solving.
            Expertise working in small teams to accomplish objectives acquired
            in team truck driving and warehouse work. My passion for finding
            creative solutions to real-world problems is what brought me to web
            development.
          </p>
          <p>
            Graduated with a certificate in Full-Stack Web Development from
            Vanderbilt University. Specialized in the MERN stack,
            object-oriented programming, and agile project management.
          </p>
          <p>
            Bachelor of Music in Music Education - Instrumental from University
            of Memphis.
          </p>
        </div>
        <div className="pt-2 secondary-div">
          <img
            src={me}
            style={{ width: `300px`, height: `300px`, margin: `10px` }}
            alt="me"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
