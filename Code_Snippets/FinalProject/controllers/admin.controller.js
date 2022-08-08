const Product = require('../models/Product');
const Order = require('../models/Order');

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

async function deleteProduct(req, res, next) {
    let product;

    try {
        product = new Product({...Product.findById(req.params.id), _id: req.params.id});
        await product.remove();
    } catch(error) {
        return next(error);
    }

    res.json({
        'message': 'delete sucessfully!'
    })
}

async function getOrders(req, res) {
    try {
        const orders = await Order.findAll();
        res.render('admin/orders/admin-orders', {
          orders: orders
        });
      } catch (error) {
        next(error);
      }
}

async function updateOrders(req, res, next) {
    const orderId = req.params.id;
    const newStatus = req.body.newStatus;

    console.log(orderId);
  
    try {
      const order = await Order.findById(orderId);
      console.log(order);
  
      order.status = newStatus;
  
      await order.save();
  
      res.json({ message: 'Order updated', newStatus: newStatus });
    } catch (error) {
      next(error);
    }
}

module.exports = {
    getProducts: getProducts,
    getNewProduct: getNewProduct,
    createNewProduct: createNewProduct,
    getUpdateProduct: getUpdateProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    getOrders: getOrders,
    updateOrders: updateOrders
};