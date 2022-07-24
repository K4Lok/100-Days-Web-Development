# MVC
> Keep on refactoring our project into the MVC architectural patterns.

## Controllers actions
> For every requests the server has received, the server will handler and response based on how we define the actions, like what we've done previously for every routing.
But it's better separated it into a controllers directory and files for having a better overview in the route file.
Our goal is to get away all the functions inside the route file:
```js
// routes/auth.js
const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth-controller');

router.get('/signup', authController.getSignup);

router.get('/login', authController.getLogin);

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.get('/401', authController.get401);

module.exports = router;
```
And the function should be defined in the controller directory:
```js
// controllers/auth-controller.js
const validationSession = require('../util/validation-session');
const validation = require('../util/validation');
const User = require('../models/user');

function getSignup(req, res) {
  const sessionErrorData = validationSession.getSessionErrorData(req, {
    email: '',
    confirmEmail: '',
    password: '',
  });

  res.render('signup', { inputData: sessionErrorData });
}

function getLogin(req, res) {
  const sessionErrorData = validationSession.getSessionErrorData(req, {
    email: '',
    password: '',
  });

  res.render('login', { inputData: sessionErrorData });
}

//...
```

---

## CSRF Token handling Middleware
> We need a CSRF Token to prevent CSRF attacks for every page that contains any form submission, but it would be cumbersome to pass a token for every view as a parameters. Therefore, we can create our own custom middleware to generate a CSRF Token for every request and store the token into locals, then we can get the token inside the view template directly.

Create the middleware:
```js
// middlewares/csrf-token-middleware.js
function addCSRFToken(req, res, next) {
  const csrfToken = req.csrfToken();
  res.locals.csrfToken = csrfToken;
  next();
}

module.exports = addCSRFToken;
```

Use the middleware
```js
// app.js
const app = express();
const addCSRFTokenMiddleware = require('./middlewares/csrf-token-middleware');

app.use(addCSRFTokenMiddleware);
```

Then we can use our Token in the view template
```js
// xxxx.ejs
<form action="/xxxx" method="POST">
  <input type="hidden" value="<%= locals.csrfToken %>" name="_csrf">
  //...
</form>
```

---

## Asynchronous Error Handling
> Express.js do not handling the error for asynchronous function for us, we have to do the handling on our own. We will use `try`/`catch` syntax to handle the code block that interact with the database because this is the most like error occur scenario where having a falsy query or database error.
```js
async function getPost(req, res, next) {
  let post;
  try {
    post = new Post(null, null, req.params.id);
  }
  catch(error) {
    return next(error);
  }
  //...
}
```

---

## Routes Protecting
> In every route that needed a authentication, we have done a checking whether the user is authenticated or not, but still it would be annoying to do the checking manually everytime. We can create a middleware for the checking instead, then we pass the middleware in front of every route that needed to be authenticated.

Create the middleware
```js
// middlewares/auth-protection-middleware.js
function guardRoute(req, res, next) {
  if(!res.locals.isAuth) {
    return res.redirect('/401');
  }
  // if the user is authenticated, pass to the next middleware
  next();
}

module.exports = guardRoute;
```

Use the middleware
1. First way:
```js
const guardRoute = require('../middlewares/auth-protection-middleware');

// For every route.get or route.post function, it takes multiple parameters for middlewares.
router.get('/admin', guardRoute, blogController.getAdmin);

router.post('/posts', guardRoute, blogController.createPost);
```
2. Second way:
```js
// As we know, all the requests go through the middleware one by one from the top to the bottom,
// as long as we place the custom middleware in front of the route we want to protect, it will works fine.

// we want the home directory to be accessed without authenticated
router.get('/', blogController.getHome);

router.use(guardRoute);

//... The following route middleware will be protected
```

---
