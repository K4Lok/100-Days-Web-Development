const express = require('express');

const authContoller = require('../controllers/auth.controller');

router = express.Router();

router.get('/signup', authContoller.getSignup);

router.post('/signup', authContoller.signup);

router.get('/login', authContoller.getLogin);

module.exports = router;