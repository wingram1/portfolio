import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import Contact from "../Contact";

function Content({ currentPage }) {
  const { name } = currentPage;

  // get currentPage, return corresponding component
  return (
    <main className="content">
      <h1 className="content-name">{name}</h1>
      {name === "About" && <About />}
      {name === "Portfolio" && <Portfolio />}
      {name === "Resume" && <Resume />}
      {name === "Contact" && <Contact />}
    </main>
  );
}

export default Content;
