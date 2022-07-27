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
  constructor() {
    //...
  }
  
  signup() {
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

```

---
