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

function getCart(req, res, next) {
    res.render('customer/cart/cart');
}

function updateCartItem(req, res) {
    const cart = res.locals.cart;

    const updatedItemData = cart.updateItem(req.body.productId, req.body.quantity);

    req.session.cart = cart;

    res.json({
        message: 'Item updated!',
        updatedCartData: {
            newTotalQuantity: cart.totalQuantity,
            newTotalPrice: +cart.totalPrice.toFixed(2),
            updatedItemPrice: +updatedItemData.updatedItemPrice
        }
    });
}

module.exports = {
    addCartItem: addCartItem,
    getCart: getCart,
    updateCartItem: updateCartItem
}