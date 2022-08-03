const Product = require('../models/Product');

async function getAllProduct(req, res, next) {
    let products;
    try {
        products = await Product.findAll();
    } catch(error) {
        next(error);
        return;
    }

    res.render('customer/products/all-products', {products: products});
}

async function getProductDetails(req, res, next) {
    let product;
    try {
        product = await new Product(await Product.findById(req.params.id));
    } catch(error) {
        console.log(error);
        next(error);
    }

    res.render('customer/products/product-details', {product: product});
}

module.exports = {
    getAllProduct: getAllProduct,
    getProductDetails: getProductDetails
};