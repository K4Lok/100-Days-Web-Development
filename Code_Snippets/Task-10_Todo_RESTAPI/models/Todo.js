const ObjectId = require('mongodb').ObjectId;

const db = require('../data/database');

class Todo {
    constructor(text, id) {
        this.text = text;
        this.id = id;
    }

    static async getAllTodos() {
        const todoDocuments = await db.getDb().collection('todos').find().toArray();

        return todoDocuments.map( todoDocument => {
            return new Todo(todoDocument.text, todoDocument._id);
        })
    }

    save() {
        if(this.id) {
            const todoId = new ObjectId(this.id);

            return db.getDb().collection('todos').updateOne({ _id: todoId}, { $set: { text: this.text }});
        }
        return db.getDb().collection('todos').insertOne({ text: this.text });
    }

    delete() {
        if(!this.id) {
            throw new Error('the id that being deleted must be attached!');
        }
        return db.getDb().collection('todos').deleteOne({_id: this.id});
    }
}

module.exports = Todo;