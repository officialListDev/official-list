const express = require('express');
const router = express.Router();

router.get('/hello', (req, res, next) => {
  res.send("Hello");
  return next();
});

module.exports = router;