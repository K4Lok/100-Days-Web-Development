# Project-4
> We will do the Project-4 once again but with MongoDB this time in the following two days.

## Database Structure
> This project is related to a blog website where you can submit a blog infomation like title, body message, select who write this blog.
1. Create the database
```console
> use blog
```
2. Create an authors collection (tables)
```console
blog> db.authors.insertOne({name: "Elon Musk", email: "elonmusk@tesla.com"})
// by inserting a document, the collection will created automatically
```

---

## Connect MongoDB with node.js
### MongoDB Node.js Driver
> It allows JS application to connect and work with the data with MongoDB.
1. Install the package
```console
npm install mongodb
```
2. Use it on the file
```js
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
```
3. Establish connection to MongoDB
```js
let database;

aysnc function connect() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  // The MongoClient.connect() returns a promise, thus we can use async/await.
  database = client.db('blog');
}
```
4. Encapsulate a function to get DB
```js
async function getDB() {
  if(!database) {
    throw {message: 'Database connection not established
  }
  return database;
}
```
5. Export the methods
```js
module.exports = {
  connectToDatabase: connect,
  getDB: getDB
}
```
6. Use the methods
```js
// app.js
const db = require('./data/database.js');

db.connectToDatabase().then(function() {
  app.listen(3000);
});
```
7. Get the DB object to query
```js
// blog.js
const db = require('../data/database.js');

router.get('/new-post', async function(req, res) {
  const authors = await db.getDB().collection('authors').find();
  res.render('create-post', { authors: authors });
});
```
---

## Insert documents into DB
> Here we will store the post's related information into the collection `posts`.
```js
// create-post.ejs
...
<form action="/new-post" method="POST">
// here we've a option to select the author and passing the _id of the author as the value
...

// blog.js
// here we want to insert the documents with the authors' _id in the MongoDB ObjectId data format
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
const db = require('../data/database');

router.post('/new-post', async function(req, res) {
  const authorId = new ObjectId(req.body.author);
  // since we didn't pass the author name from the form data, so we need to query the author name by id
  const author = await db.getDB().collection('authors').findOne({_id: authorId});
  
  consts newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.body,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email
    }
  }
  // insert the new post object here and get the result to see if it's succeed or not
  const result = await db.getDB().collection('posts').insertOne(newPost);
  console.log(result); // { acknowledged: true, insertedId: new ObjectId("62cc9e46fcd6afdff2ca9e31") }
  res.redirect('posts');
});
```

---
