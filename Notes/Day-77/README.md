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