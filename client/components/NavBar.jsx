/* eslint-disable no-console */
import React, { useState } from 'react';

function NavBar() {
  const [currLocation, setCurrLocation] = useState(0);

  const onClick = () => {
    // setCurrLocation(document.querySelector('#page-container').scrollTop);
    window.scrollTo(821, 821);
  };

  return (
    <nav id="navbar" onScroll={onClick}>
      {/* <a className="page-selected" href="#welcome-page-container"> */}
      <button type="button" onClick={onClick}>
        Welcome
      </button>
      {/* </a> */}
      {/* <a className="page-selected" href="#about-page-container"> */}
      <button type="button" onClick={onClick}>
        About
      </button>
      {/* </a> */}
      {/* <a className="page-selected" href="#project-page-container"> */}
      <button type="button" onClick={onClick}>
        Projects
      </button>
      {/* </a> */}
      {/* <a className="page-selected" href="#contact-page-container"> */}
      <button type="button" onClick={onClick}>
        Contact
      </button>
      {/* </a> */}
    </nav>
  );
}

export default NavBar;
