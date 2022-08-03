## Online Shop
> We need to protect the admin routes and only be accessed when the user is authenticated and authorization. Then we will also set up the products page for normal user so that they can browse the products created by the admin. And the cart Model for saving what the user shopped.

# Protect Admin Routes
> To protect the admin routes from the outsiders, we can create a middleware to check whether the user is both authenticated and authorizaed before enter any of the admin routes.
## ProtectRoutes Middleware
```js
// midlewares/protect-routes.js

function protectRoutes(req, res, next) {
  if(!req.locals.isAuth) {
    res.redirect('/401');
  }
  
  if(res.path.startsWith('/admin') && !res.locals.isAdmin) {
    res.redirect('/403');
  }
  
  next();
}
```

## Set up the routes
```js
// routes/base.routes.js

router.get('/401', function(req, res) {
  res.status(401).render('shared/401');
});

router.get('/403', function(req, res) {
  res.status(403).render('shared/403');
});
```
When we want every admin routes is protected, we need to put the protect routes middleware place before the admin routes.
```js
// app.js
app.use(protectRoutesMiddleware);
app.use(adminRoutes);
```

---

# All Products Page
> Here we have a page for the users to browse all the products we have. Behind the scenes, we query all the products from the model and pass the data to the view with the contoller.
## Get All Product Controller
```js
// controllers/products.controller.js

function getAllProducts(req, res, next) {
  let products;
  
  try {
    products = await Product.findAll();
    
  } catch(error) {
    console.log(error);
    next(error);
    return;
  }
  
  res.render('customer/products/all-products', {products: products});
}
```

# Product Details Page
> The product cards will be attached with a link lead to the product details page, in the mean time, we have to query the details from the database and pass it to the view.
## Set up the controller
```js
// controllers/products.controller.js

function getAllProducts(req, res, next) {
  let products;
  
  try {
    products = await new Product(await Product.findById(req.params.id));
  } catch(error) {
    console.log(error);
    next(error);
  }
  
  res.render('customer/products/product-details', {product: product});
}
```
## The routes
```js
// routes/products.routes.js
const productsController = require('../controllers/products.controller');

router.get('/products', productsController.getAllProduct);

router.get('/products/:id', productsController.getProductDetails);
```

---

# Styling the Details Page
## Showcase
<img width="961" alt="Screenshot 2022-08-03 at 2 15 02 PM" src="https://user-images.githubusercontent.com/82365010/182616919-59d3ac92-dd26-41a5-95a2-c99f0e549151.png">

---
