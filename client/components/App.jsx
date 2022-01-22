import React from 'react';
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <div id="app-container">
      <WelcomePage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </div>
  );
}

export default App;
