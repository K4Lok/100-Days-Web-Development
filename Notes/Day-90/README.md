## Online Shop
After styling the cart badge and the add to cart button functioning, we will create the cart page for viewing and managing the products in cart.

# Cart Page
> Code the cart page for holding details like the quantity, prices of products in the cart.

![Screenshot 2022-08-06 at 4 22 43 AM](https://user-images.githubusercontent.com/82365010/183231643-da082b0a-c5ce-4e5b-bbec-b05eabe2d4bf.png)


# Cart Model
> A update method to update the quantity of a item in the cart.
```js
// models/Cart.js

class Cart {
  //...
  
  function updateCartItem(req, res) {
    const cart = res.locals.cart;

    const updatedItemData = cart.updateItem(req.body.productId, req.body.quantity);

    req.session.cart = cart;

    res.json({
        message: 'Item updated!',
        updatedCartData: {
            newTotalQuantity: cart.totalQuantity,
            newTotalPrice: cart.totalPrice,
            updatedItemPrice: updatedItemData.updatedItemPrice
        }
    });
}
}
```

# Update Cart Item Controller
> Controller to handler PATCH request to return json response after successfully update the quantity with Cart Model.
```js
// controllers/cart.controller.js

function updateCartItem(req, res) {
    const cart = res.locals.cart;

    const updatedItemData = cart.updateItem(req.body.productId, req.body.quantity);

    req.session.cart = cart;

    res.json({
        message: 'Item updated!',
        updatedCartData: {
            newTotalQuantity: cart.totalQuantity,
            newTotalPrice: cart.totalPrice,
            updatedItemPrice: updatedItemData.updatedItemPrice
        }
    });
}
```

# Update Route
```js
// routes/cart.routes.js

router.patch('/items', cartController.updateCartItem);
```

---
