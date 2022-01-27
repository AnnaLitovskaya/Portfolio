/* eslint-disable no-console */
import React, { Component } from 'react';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      // pageLocation: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(document.querySelector('#page-container').scrollTop);
  //   if (
  //     prevState.pageLocation !==
  //     document.querySelector('#page-container').scrollTop
  //   ) {
  //     this.onClick();
  //   }
  // }

  // onClick() {
  //   const currLocation = document.querySelector('#page-container').scrollTop;
  //   this.setState({ pageLocation: currLocation });
  // }

  render() {
    return (
      <nav id="navbar" onScroll={this.onClick}>
        <a className="page-selected" href="#welcome-page-container">
          <button type="button" onClick={this.onClick}>
            Welcome
          </button>
        </a>
        <a className="page-selected" href="#about-page-container">
          <button type="button" onClick={this.onClick}>
            About
          </button>
        </a>
        <a className="page-selected" href="#project-page-container">
          <button type="button" onClick={this.onClick}>
            Projects
          </button>
        </a>
        <a className="page-selected" href="#contact-page-container">
          <button type="button" onClick={this.onClick}>
            Contact
          </button>
        </a>
      </nav>
    );
  }
}

export default NavBar;
