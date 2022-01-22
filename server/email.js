/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const { Router } = require('express');

const router = Router();

router.post('/send', (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
