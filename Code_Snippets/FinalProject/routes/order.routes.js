const express = require('express');
const orderController = require('../controllers/order.controller');

const router = express.Router();

router.get('/', orderController.getOrders);

router.post('/new-order', orderController.addOrder);

module.exports = router;