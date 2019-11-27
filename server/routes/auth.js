const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
  res.send({'login': true});
  return next();
});

router.get('/signup', (req, res, next) => {
  res.send({'signup': true});
  return next();
});

module.exports = router;