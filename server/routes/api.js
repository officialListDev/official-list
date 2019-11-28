const express = require('express');
const router = express.Router();

// Controllers
const listController = require('../controllers/listController.js');
const actorController = require('../controllers/actorController.js');

// List Routing
router.get('/lists', listController.getWatchLists);

// Actors Routing
router.get('/actors', actorController.getActors);

module.exports = router;