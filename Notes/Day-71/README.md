# Authentication
> It's the process of determing or recognizing a user's identity where users are able to login & logout.

## When we need it?
> In many websites, there're some pages should only be access by users who are proved (authenticated) to do so. Like changing your personal profile or publishing new message for say.

---

# Project-5 User-Authentication
> We'll create a website which contain functionality like login and logout of normal user and administrator system.

## Handling User Sign up
> Firstly, we can create a form for gathering the user information like email and password for the futher login and store these data into the database.
```js
// auth.js
router.post('/signup', async function(req, res) {
  const userData = req.body;
  const email = userData.email;
  const password = userData.password;
  
  const user = {
    email: email,
    password: password
  };
  
  await db.getDb().collection('users').insertOne(user);
})'
```
By this approach, we can store the user info into the database. However, the user password is stored without any encryption, and this is a very serious flaw.

### Hashing Passwords
> Hashing means converting a string to a non-decodable string. For say, from a "myPassword" -> "76549b827ec46e705fd03831813fa52172338f" sth like this. Securely hashed values can't be reverted, decoded or transformed back into the original value.
1. We need a third-party package `(bcrypt)` to help encrypt our data
```console
npm i --save bcryptjs
```
2. Require the package
```js
const bcrypt = require('bcryptjs');
```
3. Hash the password
```js
router.post('/signup', async function (req, res) {
  // ...
  const enteredPassword = userData.password;
  
  // Param 1: string to be hashed
  // Param 2: the length of the salt 
  // And .hash method provides a promises, so we can use await syntax
  const hashedPassword = bcrypt.hash(enteredPassword, 12);
  // right now the password is hashed to sth like: '$2a$12$WFyySXHg7TfIQMVamVTEOe5udgFSQrcPwaFYe67huwxPk9/4j2nKi'

  const user = {
    email: enteredEmail,
    password: hashedPassword
  };
  
  // ...
});
```
---
