const Product = require('../models/Product');

async function getProducts(req, res, next) {
    let products;
    try {
        products = await Product.findAll();
    } catch(error) {
        next(error);
        return;
    }

    res.render('admin/products/all-products', {products: products});
}

function getNewProduct(req, res) {
    res.render('admin/products/new-product');
}

async function createNewProduct(req, res, next) {
    const product = new Product({
        ...req.body,
        image: req.file.filename
    });

    try {
        await product.save();
    }catch(error) {
        next(error);
        return;
    }

    res.redirect('/admin/products');
}

async function getUpdateProduct(req, res, next) {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);
        res.render('admin/products/update-product', {product: product});
    }catch (error) {
        next(error);
    }

}

async function updateProduct(req, res, next) {
    const product = new Product({
        ...req.body,
        _id: req.params.id
    });

    if(req.file) {
        product.replaceImage(req.file.filename);
    }

    try {
        await product.update();
    }catch (error) {
        next(error);
        return;
    }

    res.redirect('/admin/products');
}

module.exports = {
    getProducts: getProducts,
    getNewProduct: getNewProduct,
    createNewProduct: createNewProduct,
    getUpdateProduct: getUpdateProduct,
    updateProduct: updateProduct
};