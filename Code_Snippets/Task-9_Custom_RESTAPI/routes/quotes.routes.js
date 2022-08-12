const express = require('express');

const quotesController = require('../controllers/quotes.controller');

const router = express.Router();

router.get('/', quotesController.getQuotes);

module.exports = router;