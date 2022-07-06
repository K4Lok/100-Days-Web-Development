# Database
## Why accessing DB on Backend?
> The code and connection to Database is not exposed to the public, it only run on the backend. However, for the frontend like JS, it will run on the client side which causes the users are able to look up the codes.

---

## Project - Build a Blog Website
> A Blog website where it allows user to create, Read, Update and Delete Blog Posts.
1. Plan & design our database & tables
2. Create database & tables
3. Add initial data to database tables
4. Connect to database & interact via NodeJS / Express app

---

# Blog Website
> For a Blog website, basically, we need a table for holding per Post and also a table for authors.
### Entity Relationship Diagram
<img width="500" alt="Blog-ERD" src="https://user-images.githubusercontent.com/82365010/177578512-f5122220-ac00-4197-8709-c72a77931cc0.png">

### Routes
> Also created routes with express.js
```js
// ./routes/blog.js
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/posts');
});

router.get('/posts', function(req, res) {
  res.render('posts-list');
});

module.exports = router;
```
```js
// ./App.js
const express = require('express');
const app = express();
const blogRoutes = require('./routes/blog');
app.use(blogRoutes);
```
---

