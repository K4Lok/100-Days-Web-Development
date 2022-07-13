# Project-4
## Fetching Data
> With the knowledge previously learned
```js
const mongodb = require('mongodb');
const db = mongodb.Client

router.get('/posts', async function(req, res) {
  const posts = await db.getDB().collection('posts').find({}, {title: 1, summary: 1, 'author.name':}).toArray();
  res.render('posts-list', {posts: posts});
});
```

## Update and Delete
> These are quite the same.

---
