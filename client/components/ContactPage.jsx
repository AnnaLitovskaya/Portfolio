import React, { Component } from 'react';
import axios from 'axios';

class ContactPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    await axios.post('/send', this.state);
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <section id="contact-page-container">
        <div id="contact-form-container">
          <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <div className="form-group">
              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={this.onNameChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">
                Email address:
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={this.onEmailChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Message:
                <textarea
                  className="form-control"
                  rows="5"
                  value={message}
                  onChange={this.onMessageChange}
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactPage;
