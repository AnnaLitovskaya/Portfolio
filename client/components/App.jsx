import React from 'react';
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
import NavBar from './NavBar';

function App() {
  return (
    <div id="app-container">
      <NavBar />
      <div id="page-container">
        <WelcomePage />
        <AboutPage />
        <ProjectPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
