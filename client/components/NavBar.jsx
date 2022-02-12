/* eslint-disable no-console */
import React from 'react';

function NavBar() {
  const onClick = (page) => {
    switch (page) {
      case 'about':
        document.getElementById('about-page-container').scrollIntoView();
        break;
      case 'project':
        document.getElementById('project-page-container').scrollIntoView();
        break;
      case 'contact':
        document.getElementById('contact-page-container').scrollIntoView();
        break;
      default:
        document.getElementById('welcome-page-container').scrollIntoView();
    }
  };

  return (
    <nav id="navbar">
      <div
        role="button"
        onClick={() => {
          onClick('welcome');
        }}
        onKeyPress={() => {
          onClick('welcome');
        }}
        tabIndex={0}
      >
        <img src="public/photos/Logo.png" alt="Logo" />
      </div>
      <div id="nav-buttons">
        <button
          type="button"
          onClick={() => {
            onClick('about');
          }}
        >
          About
        </button>
        <button
          type="button"
          onClick={() => {
            onClick('project');
          }}
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() => {
            onClick('contact');
          }}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
