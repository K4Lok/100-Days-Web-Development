## Online shop
> With the authentication and validation we have done for the signup, login, and logout. We also need some input caching mechanism while user has errors on signup and login.
The approach is to store the previous input into the session, for every request for signin, login page, we cheeck whether we leave a error message or not. If so, we pass those cache
to the view page and clear the session so that it won't show up again.

# Caching with Session
> To store the error input into session so that user who entered incorrect inputs do not have to re-enter all of it once again.
## Create Session store function
```js
// util/cache-input.js

function getSessionInputs(req) {
  const cacheInputs = req.session.cacheInputs;
  
  if(!cacheInputs) {
    return;
  }
  return cacheInputs;
}

function storeSessionInputs(req, cacheInputs, callback) {
  req.session.cacheInputs = cacheInputs;
  req.session.save(callback);
}

module.exports = {
  getSessionInputs: getSessionInputs,
  storeSessionInputs: storeSessionInputs
};
```
## Use the function to store inputs
> We can store the inputs in signup and login page, but I'll only note one here.
```js
// controllers/auth.controller.js

const cacheUtil = require('/cache-input');

async signup(req, res) {
  //...
  
  if(!validUtil.signupInputsAreValid) {
    cacheUtil.storeSessionInputs(req, {
      errorMessage: 'Check you signup credentials meet the requirements!',
      ...req.body,
     }
      , function() {
        return res.redirect('/signup');
    }};
  }
}
```
## Check whether need to show cached inputs
```js
// controllers/getSignup.js

function getSignup(req, res) {
  const cacheInputs = cacheUtil.getSessionInputs(req);
  
  if(!cacheInputs) {
    cacheInputs = {
      email: '',
      'confirm-email': '',
      password: '', 
      fullname: '', 
      street: '', 
      postal: '',
      city: ''
   };
  }
  
  res.render('customer/auth/signup', {inputData: cacheInputs});
}
```
## Show cached inputs in Views
```js
// views/customer/auth/signup.ejs

<form action="/signup" method="POST">
  <% if(inputData.errorMessage) { %>
    <section class="alert">
      <h4><%= inputdate.errorMessage %></h4>
    </section>
  <% } %>
  <input type="email" ... value="<%= inputData.email %>" >
  <input type="email" ... value="<%= inputData['confirm-email'] %>" >
  //...
</form>
```

## Showcase
<p align="center">
<img width="47%" alt="signup" src="https://user-images.githubusercontent.com/82365010/181862343-add8c25a-ef66-44ae-96a7-0853cab224fc.png">

<img width="47%" align="right" alt="login" src="https://user-images.githubusercontent.com/82365010/181862353-3ecc7b03-a30d-480d-859d-c097bbb81477.png">
</p>

---

## Create and Styling the Naviagtion bar
> Show the navigation based on whether the user is authenticated and is admin or not.

Not login
<img width="1406" alt="Screenshot 2022-07-30 at 1 19 32 AM" src="https://user-images.githubusercontent.com/82365010/181862661-bd94458d-7e70-47c5-a39d-2308ac4fb6bc.png">

Normal user
<img width="1407" alt="Screenshot 2022-07-30 at 1 20 19 AM" src="https://user-images.githubusercontent.com/82365010/181862725-45605d27-cb47-44b5-ba3a-ccaf67ac7e6f.png">

Admin
<img width="1413" alt="Screenshot 2022-07-30 at 1 19 23 AM" src="https://user-images.githubusercontent.com/82365010/181862657-c7e534d1-5ee5-4198-89e2-b278d8680b0a.png">

---
