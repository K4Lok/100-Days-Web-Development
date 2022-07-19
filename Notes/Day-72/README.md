# Authentication
> User identity is a step for determining whether certain pages are accessible or not. However, HTTP is a stateless protocol, which means every HTTP request the server reveives is independent and does not relate to requests that came prior to it. Therefore, here's where cookies and sessions come to place.

## Cookies
> Session cookies are a pieces of data used to identity specific users and help server-side to recognize and improve the web browsing experience. And it's stored in the client-side, normally the browser.

## Sessions
> Each user gets a unique `session ID`, which is sent back to the server for validation by `cookie`. Sessions are useful when we want to store personalized contents to the user.

---

# Implementing Session in Node.js
1. Install the third-party package
```console
npm install --save express-session
```
2. Use the session middleware
```js
const session = require('express-session');

app.use(session({
  secret: 'string for encrypt', // used to hash the session with HMAC
  resave: false,
  saveUninitialized: false,
  // path to store the sessions, we need another third-party package to store it into the mongoDB
  store: sessionStore // will be defined in step 3, 4
}));
```
3. Install and use the mongoDB connector for storing sessions
```console
npm install --save connect-mongodb-session
```
```js
const mongodbStore = require('connect-mongodb-session');
const MongoDBStore = mongodbStore(session);
```
4. Config the store session
```js
const sessionStore = new MongoDBStore({
  uri: 'mongodb://localhost:27017',
  databaseName: 'auth-demo',
  collection: 'sessions'
});
```
5. Create session when logged in is successful
```js
router.post('/login', async function(req, res) {
  // ... after logged in successfully
  // session property is also nested with many properties and methods, but we can create our own as well (user).
  req.session.user = { id: existingUser._id, email: existingUser.email };
  // the existingUser object is data returned by the database by validating the user email and password
  // we can also store multiple customized data into the session
  req.session.isAuthenticated = true;
  req.session.save(function() {
    res.redirect('/admin'); // we want only redirect the page after the session is stored.
  });
});
```
> `.session` only exists after using the express-session middleware 
6. Check if user has a valid session
```js
router.get('/admin', function(req, res) {
  if(!req.session.isAuthenticated) {
    return res.status(401).render('401'); // unauthorized error
  }
  res.render('admin');
});
```
7. Handle the session status when logout
```js
router.post('/logout', function(req, res) {
  if(req.session.user) {
    req.session.user = null;
    req.session.isAuthenticated = false;
  }
  return res.redirect('/');
});
```

---

## Cookies
> Cookies are received from the repsonse header from the server-side and being set and stored by the browser for the future browsing on the same website. In other words, the browser will automatically send the cookies to the server in the request header in every request in the future until the cookies is changed by the server.

---

## Session for temporary input
> When we entered invalid data for sign up and login page, the router will redirect the user to the same page but with no inputs are stored. And we want to keep the entered data for the user so that they don't have to enter the data again. To do it, we're going to storing the inputs into the session and delete it manually when the temporary data have been passed to the page.
1. Save the temporary inputs into session when inputs invalid
```js
router.post('/signup', async function(req, res) {
  // handle the form data
  if(inputInvalid) {
    req.session.userInput = {
      hasError: true,
      email: form.email,
      confirmEmail: form.confirmEmail,
      password: form.password
    }
  }
  
  req.session.save(function() {
    res.redirect('/signup');
  });
  return;
});
```
2. Place the temporary data into the input field
```js
router.get('/signup', function(req, res) {
  var sessionUserInput = req.session.userInput;
  
  if(!sessionUserInput) { // if session.userInput not exists
    sessionUserInput = {
      hasError: false,
      email: '',
      confirmEmail: '',
      password: ''
    };
  }
  
  req.session.userInput = null; // session will automatically saved when res.redirect() / res.render() is fired
  
  res.render('signup', { inputData: sessionInputData });
});
```

---
