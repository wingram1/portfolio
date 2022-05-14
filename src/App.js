import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [pages] = useState([
    {
      name: "About",
      desc: "Hello from About",
    },
    {
      name: "Portfolio",
      desc: `Hello from Portfolio`,
    },
    {
      name: "Resume",
      desc: `Hello from Resume`,
    },
    {
      name: "Contact",
      desc: `Hello from Content`,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Content currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
