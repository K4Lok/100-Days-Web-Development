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
> 