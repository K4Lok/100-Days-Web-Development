# MVC
> The Model-View-Controller is an architectural pattern that separates an application to three main logical components. Each of these components are built to handle specific development aspects of an application.

## Model
> The Model component corresponds to all the data-related logic that the application needed. Normally refers to how to manipulate and retrieve data from the database.

## View
> The View component is used for all the UI logic of the application. It includes all the view of the application that user interact with, and utilize the data if needed from the Model.

## Controller
> Controller is like an interface between Model and View components to get along with business logic and incoming requests. It also manipulate data using the Model component and interact with Views to render the final output.

> For example, the UserProfile controller will handle all the interactions and inputs from the UserProfile View and update the database using the UserProile Model.

---

## Create a Model
> We can create our own model to handle the Post data interaction with the database.
```js
// models/post.js
const mongodb = require('mongodb');
const db = require('../data/database');
const ObjectId = mongodb.ObjectId;

Class Post {
  constructor(title, content, id) {
    this.title = title;
    this.content = content;
    if(id) this.id = new ObjectId(id);
  }
  
  async save() {
    const result = await db.getDb().collection('posts').insertOne({
      title: this.title,
      content: this.content
    });
    return result;
  }
  
  async update() {
    const result = await db.getDb().collection('posts').updateOne(
      { _id: this.id },
      { $set: { title: this.title, content: this.content } }
    );
    return result;
  }
  
  async delete() {
    if(!this.id) { // this.id not exists when creating
      return;
    }
    const result = await db.getDb().collection('posts').deleteOne({ _id: this.id });
    return result;
  }
}

module.exports = Post;
```

## Use the Model
