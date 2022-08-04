## Online-Shop
> We're focusing on the cart functionality today, firstly, a badge that can represent the quantity of items user has added to the cart.

# Styling the Badge
## Showcase
<img width="600" src="https://user-images.githubusercontent.com/82365010/182866574-e2ec88b6-9e72-4b47-923f-a34e1abad63d.png">

# Cart Model
> We need a model for manipulating the data and a more structured dataset.
```js
// models/Cart.js

class Cart {
  constructor(items = [], totalQuantity = 0, totalPrice = 0) {
    this.items = items;
    this.totalQuantity = totalQuantity;
    this.totalPrice = totalPrice;
  }
  
  addItem(product) {
    const cartItem = {
      product: product,
      quantity: 1,
      totalPrice: product.price
    };
    
    for(let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if(item.product.id === product.id) {
        cartItem.quantity += item.quantity;
        cartItem.totalPrice += product.price;
        this.items[i] = cartItem;
        
        this.toalQuantity++;
        this.totalPrice += product.price;
        return;
      }
      
      this.toalQuantity++;
      this.totalPrice += product.price;
      this.items.push(cartItem);
    }
  }
}

module.exports = Cart;
```

# Cart Controller
> Here we handle the post request of adding cart item that will be set up later with AJAX.
```js
// controllers/cart.controller.js

const Product = require('../models/Product');

aysnc function addToCart(req, res, next) {
  const productId = req.body.productId;
  
  let product;
  try {
    product = await new Product(await Product.findById(productId));
  } catch(error) {
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
  addToCart: addToCart
};
```

