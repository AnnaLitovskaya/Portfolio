/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import WelcomeScreen from './WelcomeScreen';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <WelcomeScreen />
        <AboutPage />
        <ProjectPage />
      </div>
    );
  }
}

export default App;
