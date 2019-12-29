const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController.js');

router.post('/director/signup',
  authController.validate('directorSignup'),
  authController.directorSignup);

router.post('/director/login',
  authController.validate('directorLogin'),
  authController.directorLogin);

router.post('/actor/signup',
  authController.validate('actorSignup'),
  authController.actorSignup);

router.post('/actor/login',
  authController.validate('actorLogin'),
  authController.actorLogin);

module.exports = router;
