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