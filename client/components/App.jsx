import React, { Component } from 'react';
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
import NavBar from './NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // pageLocation: 0,
    };
    this.onScroll = this.onScroll.bind(this);
  }

  // onScroll() {
  //   const currLocation = document.querySelector('#page-container').scrollTop;
  //   this.setState({ pageLocation: currLocation });
  // }

  render() {
    return (
      <div id="app-container">
        <NavBar />
        <div id="page-container" onScroll={this.onScroll}>
          <WelcomePage />
          <AboutPage />
          <ProjectPage />
          <ContactPage />
        </div>
      </div>
    );
  }
}

export default App;
