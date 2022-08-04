## Online-Shop
> We're focusing on the cart functionality today, firstly, a badge that can represent the quantity of items user has added to the cart.

# Styling the Badge
## Showcase


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

