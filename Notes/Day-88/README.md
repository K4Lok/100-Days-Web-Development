## Online Shop
> We need to protect the admin routes and only be accessed when the user is authenticated and authorization. Then we will also set up the products page for normal user so that they can browse the products created by the admin. And the cart Model for saving what the user shopped.

# Protect Admin Routes
> To protect the admin routes from the outsiders, we can create a middleware to check whether the user is both authenticated and authorizaed before enter any of the admin routes.
## ProtectRoutes Middleware
```js
// midlewares/protect-routes.js

function protectRoutes(req, res, next) {
  if(!req.locals.isAuth) {
    res.redirect('/401');
  }
  
  if(res.path.startsWith('/admin') && !res.locals.isAdmin) {
    res.redirect('/403');
  }
  
  next();
}
```

## Set up the routes
```js
// routes/base.routes.js

router.get('/401', function(req, res) {
  res.status(401).render('shared/401');
});

router.get('/403', function(req, res) {
  res.status(403).render('shared/403');
});
```
When we want every admin routes is protected, we need to put the protect routes middleware place before the admin routes.
```js
// app.js
app.use(protectRoutesMiddleware);
app.use(adminRoutes);
```

---

