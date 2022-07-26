## Online Shop
> We have created the routes and views for signup and login, should now styling it and connect to the database.

# CSS Styling
> Here we will style the form a bit for the sign up page.

<img height="679" alt="Screenshot 2022-07-26 at 2 56 03 PM" src="https://user-images.githubusercontent.com/82365010/181023639-86ccfc19-f2b4-4eb0-ab57-907c312accee.png">

---

# Connect to MongoDB
> We need a third-party package to implement the connect, and then store that connection and the database object into a file so that we can call the database object to manipulate the data.
1. Install the package
```console
npm install mongodb
```
2. Create the connection
```js
// data/database.js

const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  database = client.db('online-shop');
}

function getDb() {
  if(!database) {
    throw new Error('You must connect first');
  }
  
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
}
```
3. Connect to the database before starting the server
```js
// app.js

//...
const db = require('./data/database');

db.connectToDatabase()
  .then(() => }
    app.listen(3000);
  })
  .catch((error) => {
    console.log('Database not connected');
    console.log(error);
  })
```

---
