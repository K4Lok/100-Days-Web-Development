const stripe = require("stripe")(
    "sk_test_xxxxxx"
);

const Order = require("../models/Order");
const User = require("../models/User");

async function getOrders(req, res, next) {
    try {
        const orders = await Order.findAllForUser(res.locals.uid);

        res.render("customer/orders/all-orders", { orders: orders });
    } catch (error) {
        next(error);
        return;
    }
}

async function addOrder(req, res, next) {
    const cart = res.locals.cart;

    let userDocument;
    try {
        userDocument = await User.findById(res.locals.uid);
    } catch (error) {
        next(error);
    }

    const order = new Order(cart, userDocument);

    try {
        order.save();
    } catch (error) {
        next(error);
        return;
    }

    req.session.cart = null;

    const session = await stripe.checkout.sessions.create({
        line_items: cart.items.map((item) => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.name
                    },
                    unit_amount: +item.product.price.toFixed(2) * 100
                },
                quantity: +item.quantity
            };
        }),
        mode: "payment",
        success_url: "http://localhost:3000/orders/success",
        cancel_url: "http://localhost:3000/orders/cancel",
    });

    res.redirect(303, session.url);
}

function getSuccess(req, res) {
    res.render('customer/orders/success');
}

function getCancel(req, res) {
    res.render('customer/orders/cancel');
}

module.exports = {
    getOrders: getOrders,
    addOrder: addOrder,
    getSuccess: getSuccess,
    getCancel: getCancel
};
