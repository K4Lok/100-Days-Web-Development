## Online Shop
Almost everything is done, except the order page for both user and admin to manage it.

# Order MVC
## Model
```js
// models/Order.js

const ObjectId = require('mongodb').ObjectId;
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

    static toOrderModel(orderDoc) {
        return new Order(
            orderDoc.productData,
            orderDoc.userData,
            orderDoc.status,
            orderDoc.date,
            orderDoc._id
        );
    }

    static toOrderModels(orderDocs) {
        return orderDocs.map(this.toOrderModel);
    }

    static async findAll() {
        const orders = await db.getDb().collection('orders').find().toArray();

        return this.toOrderModels(orders);
    }

    static async findAllForUser(uid) {
        const userId = new ObjectId(uid);

        const orders = await db.getDb().collection('orders').find({'userData._id': userId}).sort({_id: -1}).toArray();

        return this.toOrderModels(orders);
    }

    static async findById(oid) {
        const orderId = new ObjectId(oid);
        const order = await db.getDb().collection('orders').findOne({_id: orderId});

        return this.toOrderModel(order);
    }

    save() {
        if(this.id) {
            // updating
            const orderId = new ObjectId(this.id);
            return db.getDb().collection('orders').updateOne({_id: orderId}, {$set: {status: this.status}});
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

## Controller
```js
// controllers/order.controller.js

const Order = require('../models/Order');
const User = require('../models/User');

async function getOrders(req, res, next) {
    try {
        const orders = await Order.findAllForUser(res.locals.uid);

        res.render('customer/orders/all-orders', {orders: orders});
    } catch(error) {
        next(error);
        return;
    }
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
```js
// controllers/admin.controller.js

//...

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
```

---
