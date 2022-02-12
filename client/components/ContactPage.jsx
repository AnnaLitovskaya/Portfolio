/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

class ContactPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      successModalOpen: false,
      failModalOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.successModal = this.successModal.bind(this);
    this.failModal = this.failModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    await axios.post('/send', this.state).then((response) => {
      if (response.data.status === 'success') {
        this.successModal();
        this.resetForm();
      } else {
        this.failModal();
      }
    });
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

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  successModal() {
    this.setState({ successModalOpen: true });
  }

  failModal() {
    this.setState({ failModalOpen: true });
  }

  closeModal() {
    this.setState({ successModalOpen: false, failModalOpen: false });
  }

  render() {
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: '#ee6c4d',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const { name, email, message, failModalOpen, successModalOpen } =
      this.state;
    return (
      <section className="app-screen" id="contact-page-container">
        <div id="link-icons">
          <a href="https://github.com/AnnaLitovskaya">
            <img src="public/photos/github.png" alt="github" />
          </a>
          <a href="mailto:litovskaya09@gmail.com">
            <img src="public/photos/gmail.png" alt="gmail" />
          </a>
          <a href="https://www.linkedin.com/in/alitovskaya/">
            <img src="public/photos/linkedin.png" alt="linkedin" />
          </a>
        </div>
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
                  placeholder="Name"
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
                  placeholder="Email"
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
                  placeholder="Message"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <Modal
          open={successModalOpen}
          onClose={() => this.closeModal()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Message Sent!
            </Typography>
          </Box>
        </Modal>
        <Modal
          open={failModalOpen}
          onClose={() => this.closeModal()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Message Failed
            </Typography>
          </Box>
        </Modal>
      </section>
    );
  }
}

export default ContactPage;
