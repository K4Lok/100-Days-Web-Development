const Order = require('../models/Order');
const User = require('../models/User');

async function getOrders(req, res, next) {
    try {
        const orders = await Order.findAllForUser(res.locals.uid);

        res.render('customer/orders/all-orders', {orders: orders});
    } catch(error) {
        next(error);
        return;
    }
}

async function addOrder(req, res, next) {
    const cart = res.locals.cart;

    let userDocument;
    try {
        userDocument = await User.findById(res.locals.uid);
    }
    catch(error) {
        next(error);
    }
    
    const order = new Order(cart, userDocument);

    try {
        order.save();
    }
    catch(error) {
        next(error);
        return;
    }

    req.session.cart = null;

    res.redirect('/orders');
}

module.exports = {
    getOrders: getOrders,
    addOrder: addOrder,
};