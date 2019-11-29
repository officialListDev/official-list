const express = require('express');
const router = express.Router();

// Controllers
const listController = require('../controllers/listController.js');
const actorController = require('../controllers/actorController.js');

// List Routing
router.get('/directors/:id/lists', listController.getWatchLists);

router.get('/lists/:listId', listController.getActorsFromList);
router.post('/lists/:listId', listController.addActorToList);
router.delete('/lists/:listId', listController.deleteActorFromList);

// Actors Routing
router.get('/actors', actorController.getActors);

module.exports = router;