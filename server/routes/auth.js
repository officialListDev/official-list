const express = require('express');
const router = express.Router();

router.post('/login', (req, res, next) => {
  res.send({'login': true});
  return next();
});

router.post('/signup', (req, res, next) => {
  res.send({'signup': true});
  return next();
});

module.exports = router;