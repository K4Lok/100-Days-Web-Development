## Online Shop
> After having the connection with the database, we can now finish the signup function with inserting new user's info into the database. Also the security issues to prevent CSRF attacks with the token and dealing with sessions.

# Signup Function
> Create a User model to interact with the data of User in database.
## Create User Model
```js
// models/User.js

const db = require('../data/database');

class User {
  constructor(email, password, fullname, street, postal, city) {
    this.email = email;
    this.password = password;
    this.fullname = fullname;
    this.address = {
      street: street,
      postal: postal,
      city: city
    }
  }
  
  async signup() {
    await db.getDb().collection('users').insertOne({
      email: this.email,
      password: this.password,
      fullname: this.fullname,
      address: this.address
    });
  }
}
```

## Encrypt the Password
> The password should never be stored in the database in plain text, we should encrypt it before storing into the database.
1. Install `bcryptjs`
```console
npm install bcryptjs
```
2. Hash the password
```js
// models/User.js

const bcrypt = require('bcryptjs');

class User() {
  async signup() {
    const hashedPassword = await bcrypt.hash(this.password, 12);
    await db.getDb().collection('users').insertOne({
      //...
      password: hashedPassword,
    });
  }
}
```

## Use the model
> We use the model in the controller to controll the model or pass data to the views.
```js
// controllers/auth.controller.js

const User = require('../models/User');

async function signup(req, res) {
  const user = new User(
    req.body.email,
      req.body.password, 
      req.body.fullname, 
      req.body.street, 
      req.body.postal,
      req.body.city
  );
  
  await user.signup();
  res.redirect('/login');
}
```

---

# Implement CSRF Token
> To use the csurf package for CSRF projection, we need to implement sessions first. And the sessions package we used need an other packages `connect-mongodb-session` to store the sessions into the database.

## Config Sessions
1. Install the packages
```console
npm install express-session connect-mongodb-session
```
2. Create a file for the session and database config
```js
// config/session.js

const session = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore() {
  const MongoDbStore = mongoDbStore(session);
  
  const store = new MongoDbStore({
    uri: 'mongodb://localhost:27017',
    databaseName: 'online-shop',
    collection: 'sessions'
  });
  
  return store;
}

function createSessionConfig() {
  return {
    secret: 'secret-salt',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 // 1 day
    },
    store: createSessionStore(),
    resave: false,
    saveUnintialized: false
  };
}
```
3. Link the config to the middleware
```js
// app.js
//...
const expressSession = require('express-session');

const createSessionConfig = require('./config/session');

app.use(expressSession(createSessionConfig());

//...
```

## CSRF Middleware
> We can create our own custom CSRF middleware so that every request can generate a CSRF Token without we passing the Token manually on every needed views.
1. Install the package
```console
npm install csurf
```
2. Use the csrf middleware
```js
// app.js
const csrf = require('csurf');

app.use(csrf());
```
3. Create our own middleware
```js
// middlewares/csrf-token.js

function addCSRFToken(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  
  next();
}

module.exports = addCSRFToken;
```
4. Use the custom middleware
```js
const addCSRFTokenMiddleware = require('./middlewares/csrf-token.');

app.use(addCSRFTokenMiddleware);
```
5. Remember to use the token in the form
```js
// xxx.ejs

<form action="/xxx" method="POST">
  <input type="hidden" value="<%= locals.csrfToken %> name="_csrf">
  //...
</form>
```

---
