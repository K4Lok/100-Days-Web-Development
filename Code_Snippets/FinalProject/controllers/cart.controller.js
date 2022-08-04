const Product = require('../models/Product');

async function addCartItem(req, res, next) {
    let product;
    try {
        product = await new Product(await Product.findById(req.body.productId));
    } catch(error) {
        console.log(error);
        next(error);
        return;
    }

    const cart = res.locals.cart;

    cart.addItem(product);
    req.session.cart = cart;

    res.status(201).json({
        message: 'Cart updated!',
        newTotalItems: cart.totalQuantity
    });
}

module.exports = {
    addCartItem: addCartItem
}