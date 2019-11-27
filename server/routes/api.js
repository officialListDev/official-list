const express = require('express');
const router = express.Router();

router.get('/hello', (req, res, next) => {
  res.send({'hello': true});
  return next();
});

module.exports = router;