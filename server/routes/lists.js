const express = require('express');
const router = express.Router();

const listController = require('../controllers/listController.js');

router.get('/', listController.getWatchLists);

module.exports = router;