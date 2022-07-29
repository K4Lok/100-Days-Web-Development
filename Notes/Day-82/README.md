## Online Shop
> After having the function of login, we can make a custom middleware for checking whether the user 
is authenticated or not with session for the purpose of logout and also other authenticated actions. 
However, we need a function for manage the session to match the user id before that.

---

# Authentication Session
> Link the existing user account to the current authenticated (loged in) user's device. Also indicated the cookie owner has access to the account and able to perform authenticated action.
## Create extra file for authentication function
```js
// util/authentication.js

function createUserSession(req, user, callback) {
  req.session.uid = user._id.toString();
  req.save(callback);
}

function destroyUserAuthSession(req) {
  req.session.uid = null;
  req.session.save();
}

module.exports = {
  createUserSession: createUserSession,
  destroyUserAuthSession: destroyUserAuthSession
};
```

## Create Session after Login
> When the user login successfully, create the session and link it to the user's id.
```js
// controllers/auth.controller.js

const authUtil = require('../../util/authentication');

async function(req, res) {
  // able to login
  authUtil.createUserSession(req, existingUser, function() {
    res.redirect('/');
  });
}
```

## Destroy the Session when Logout
```js
// controllers/auth.controller.js

function logout(req, res) {
  authUtil.destroyUserAuthSession(req);
  res.redirect('/');
}
```

---

# Authentication Middleware
> We are going to utilize the id from session we got and save it to the local global scope and thus we're able to access whether the user is authenticated in every request and also every views.
## Create the Middleware
```js
// middlewares/check-auth.js

function checkAuthStatus(req, res, next) {
  const uid = req.session.uid;
  
  if(!uid) {
    return next();
  }
  
  res.locals.uid = uid;
  res.locals.isAuth = true;
  next();
}
```
## Use the Middleware
> Every requests will be passed to all the middleware one by one, therefore, the locals variable will be existed individually for every requests based on whether the `session.uid` is existed.
```js
// app.js

const checkAuthStatusMiddleware = require('./middleware/check-auth');

app.use(checkAuthStatusMiddleware);
```

---

# Input Validation
> Even though, we have the HTML form attribute to help validate the user inputs, but users are still able to bypass the restriction and submit non-validated inputs into the server. So we need a mechanism to ensure no non-validated inputs passed to the database.
## Create Validation Function
```js
// util/validation.js
function signupInputsAreValid(formData) {
    return (
        checkEmail(formData.email, formData['confirm-email']) &&
        checkPassword(formData.password) &&
        !isEmpty(formData.fullname)
        // !isEmpty(formData.street) &&
        // !isEmpty(formData.postal) &&
        // !isEmpty(formData.city)
    );
}

function checkEmail(email, confirmEmail) {
    return (
        email && 
        email.includes('@') &&
        email === confirmEmail
    );
}

function checkPassword(password) {
    return (
        password &&
        password.trim().length >= 6 
    );
}

function isEmpty(value) {
    return !value || value.trim() === '';
}

module.exports = {
    signupInputsAreValid: signupInputsAreValid,

}
```
## Check Email Existence
> The last thing you want to see is the duplicated user email, check duplicate before sign user up.
```js
// models/User.js
Class User {
  //...
  
  async getUserWithSameEmail() {
    return await db.getDb().collection('users').findOne({ email: this.email });
  }
  
  async isEmailExists() {
    const existingUser = await this.getuserWithSameEmail();
    if(!existingUser) return false;
    return true;
  }
}
```

## Use the functions
```js
// controllers/auth.controller.js

const validUtil = require('./util/validation');

async function signup(req, res, next) {
  if(!validUtil.signupInputsAreValid(req.body) {
    return res.redirect('/signup');
  }
  const user = new User(...);
  
  try{
    if(await user.isEmailExists() {
      console.log('Email existed!');
      return res.redirect('/signup');
    }
    
    await user.signup();
    res.redirect('/login');
  }
  catch(error) return next(error);
}
```

---
