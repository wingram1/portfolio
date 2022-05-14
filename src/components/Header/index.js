import React from "react";

function Header(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <header>
      <h1>William Ingram</h1>
      <nav>
        {pages.map((page) => (
          <a className="mx-1" href={"#" + page.name} key={page.name}>
            <span
              // change color of element if selected
              className={`mx-1 ${currentPage.name === page.name && "text-light"}`}
              onClick={() => {
                //   set page if clicked
                setCurrentPage(page);
              }}
            >
              {page.name}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
