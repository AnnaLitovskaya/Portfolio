/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import WelcomeScreen from './WelcomeScreen';
import AboutPage from './AboutPage';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <WelcomeScreen />
        <AboutPage />
      </div>
    );
  }
}

export default App;
