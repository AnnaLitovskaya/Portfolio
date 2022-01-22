/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const { Router } = require('express');
const nodemailer = require('nodemailer');

const router = Router();

require('dotenv').config();

const transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  const { name, email, message } = req.body;
  const content = `name: ${name} \n email: ${email} \n message: ${message}`;

  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: 'New Message From Portfolio Contact Form',
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });
    }
  });
});

module.exports = router;
