const express = require('express');
const router = express.Router();

// Get all routes here
const listRouter = require('./lists.js');
const actorsRouter = require('./actors.js');

router.use('/lists', listRouter);
router.use('/actors', actorsRouter);

module.exports = router;