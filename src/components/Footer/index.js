import React from "react";

import github from "../../assets/icons/github.png";
import stack from "../../assets/icons/stack.png";
import linkedin from "../../assets/icons/linkedin.png";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/wingram1">
        <img
          src={github}
          alt="github"
          style={{ width: `32px`, height: `32px` }}
        ></img>
      </a>
      <a href="https://stackoverflow.com/users/17545904/william-ingram">
        <img
          src={stack}
          alt="stack"
          style={{ width: `32px`, height: `32px` }}
        ></img>
      </a>
      <a href="https://www.linkedin.com/in/william-ingram-6b858319b/">
        <img
          src={linkedin}
          alt="linkedin"
          style={{ width: `32px`, height: `32px` }}
        ></img>
      </a>
    </footer>
  );
}

export default Footer;
