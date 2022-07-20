## Cue Section
1. What's the difference between Authentication and Authorization?
2. How to implement the basic form of both in express.js?
3. How Custom Middlewares work and implement?
4. What's res.locals and where can it be accessed?

---

# [Authorization](https://www.onelogin.com/learn/authentication-vs-authorization#:~:text=Authentication%20and%20authorization%20are%20two,authorization%20determines%20their%20access%20rights.)
> Authorization is the security process that determines a user or service's level of access, we use authorization to give users or services permission to access some data or perform a particular action.

## Implementing Authorization
> To do so, we can simply add a property into the user document in the database manually then when the user browsing the admin page for example, we will go check if the user should be able to access the page or not. (Project-5)
1. Add the property in mongodb
```console
db.users.updateOne( {_id: ObjectId('xxxxxxxxxxxx')}, {$set: { isAdmin: true }} );
```
2. Edit the route handler
```js
router.get('/admin', async function(req, res) {
  // we have set the sessions when the user logged in.
  if(!req.session.isAuthenticated) {
    return res.status(401).render('401');
  }
  
  const user = await db.getDb().collection('users').findOne({ _id: req.session.user.id });
  
  if(!user || !user.isAdmin) {
    return res.status(403).render('403');
  }
  
  res.render('admin');
});
```

---

## Practice Sessions for Caching Invalid Input
> When the user entered invalid input, the server will redirect to the same page but without holding the entered inputs. To save the inputs, we can make use of session to do so.
```js
router.post('/signin' async function(req, res) {
  //...
  if(!userExists) {
    req.session.userInput = {
      hasError: true,
      message: 'The user email is not exists!',
      email: enteredEmail,
      password: enteredPassword
    };
    
    req.session.save(function() {
      res.redirect('/login');
    });
    
    return;
  }
  
  if(!passwordCorrect) {
    req.session.userInput = {
      hasError: true,
      message: 'Password not correct!',
      email: enteredEmail,
      password: enteredPassword
    };
    
    req.session.save(function() {
      res.redirect('/login');
    });
    
    return;
  }
});
```
```js
router.get('/login', function(req, res) {
  var sessionUserInput = req.session.userInput;
  
  if(!sessionUserInput) {
    sessionUserInput = {
      hasError: false,
      email: '',
      password: ''
    };
  }
  
  req.session.userInput = null;
  
  res.render('login', {inputData: sessionUserInput});
});
```

---

## Writing Custom Middlewares
> Middleswares are basically a handler for all the upcoming requests, upcoming requests will go through the middlewares one by one like a chain.

### Dynamic Navigation Bar
> We want to make our navigation bar displaying corresponding functionality based on the user status whether it's authenticated and also admin or not.
```js
app.use(async function(req, res, next) {
  const user = req.session.user;
  const isAuth = req.session.isAuthenticated;
  
  if(!user || !isAuth) {
    return next(); // get to the next middleware
  }
  
  const userDoc = await db.getDb().collection('users').findOne({ _id: user.id });
  const isAdmin = userDoc.isAdmin;
  
  // local variables - globally use
  res.locals.isAuth = isAuth;
  res.locals.isAdmin = isAdmin;
});
```
> `res.locals` is a property that can be accessible in templates rendered with res.render. We can utilize this property to check whether the navigation bar should display admin, login, logout or not.
```js
<header id="main-header">
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <% if(!locals.isAuth) { %>
      <li><a href="/signup">Signup</a></li>
      <li><a href="/login">Login</a></li>
      <% } %>
      <% if(locals.isAdmin) { %>
      <li><a href="/admin">Admin</a></li>
      <% } %>
      <% if(locals.isAuth) { %>
        <li><a href="/profile">Profile</a></li>
        <li>
        <form action="/logout" method="POST">
          <button>Logout</button>
        </form>
      </li>
      <% } %>
    </ul>
  </nav>
</header>
```

---
