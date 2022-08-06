## Online Shop
> After the AJAX Request for updating the quantity of item in cart, we should also update the DOM to show to instant changes. Then a Order MVC for managing the orders.

# Update the DOM
> When the item's quantity is changed, the navigation badge and the total price should be changed too.
```js
// scripts/cart-item-management.js

const updateBtnElements = document.querySelectorAll('.btn-update');

async function updateCartItem(event) {
    event.preventDefault();

    const updateBtnElement = event.target;
    const productId = updateBtnElement.dataset.productId;
    const csrfToken = updateBtnElement.dataset.csrf;
    const quantity = updateBtnElement.parentElement.firstElementChild.value;

    const response = await fetch('/cart/items', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productId: productId,
            quantity: quantity,
            _csrf: csrfToken
        })
    });

    if(!response.ok) {
        alert('Something went wrong!');
        return;
    }

    const resData = await response.json();

    const badgeElement = document.querySelector('.badge');
    const itemTotalPriceElement = updateBtnElement.parentElement.parentElement.querySelector('.total-item-price');
    const cartTotalPriceElement = document.querySelector('#cart-total-price span');

    if(resData.updatedCartData.updatedItemPrice == 0) {
        itemTotalPriceElement.parentElement.parentElement.parentElement.remove();
    }
    
    badgeElement.textContent = resData.updatedCartData.newTotalQuantity;
    itemTotalPriceElement.textContent = resData.updatedCartData.updatedItemPrice;
    cartTotalPriceElement.textContent = resData.updatedCartData.newTotalPrice.toFixed(2);
}

for(const updateBtnElement of updateBtnElements) {
    updateBtnElement.addEventListener('click', updateCartItem);
}
```

---

# Create Order Model
> Within the Order Model, we stored the cart data, user data, and date of when the order is created.
```js
// models/Order.js

const db = require('../data/database');

class Order {
    // Status => pending, fulfilled, cancelled
    constructor(cart, userData, status = 'pending', date, orderId) {
        this.productData = cart;
        this.userData = userData;
        this.status = status;
        this.date = new Date(date);
        if(this.date) {
            this.formattedDate = this.date.toLocaleDateString('en-US', {
                weekday: 'short',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        }
        this.id = orderId;
    }

    save() {
        if(this.id) {
            // updating
        }
        else {
            // add new data

            const orderDocument = {
                userData: this.userData,
                productData: this.productData,
                date: new Date(),
                status: this.status
            };

            return db.getDb().collection('orders').insertOne(orderDocument);
        }
    }
}

module.exports = Order;
```

---

# Order Controller
> The handle the post request for creating new order, and get request for showing the existing orders fetch from the database.
```js
// controllers/order.controller.js

const Order = require('../models/Order');
const User = require('../models/User');

async function getOrders(req, res, next) {
    res.render('customer/orders/all-orders');
}

async function addOrder(req, res, next) {
    const cart = res.locals.cart;

    let userDocument;
    try {
        userDocument = await User.findById(res.locals.uid);
    }
    catch(error) {
        next(error);
    }
    
    const order = new Order(cart, userDocument);

    try {
        order.save();
    }
    catch(error) {
        next(error);
        return;
    }

    req.session.cart = null;

    res.redirect('/orders');
}

module.exports = {
    getOrders: getOrders,
    addOrder: addOrder,
};
```

---

# Order Routes
```js
// routes/order.routes.js

const express = require('express');
const orderController = require('../controllers/order.controller');

const router = express.Router();

router.get('/', orderController.getOrders);

router.post('/new-order', orderController.addOrder);

module.exports = router;
```

---
