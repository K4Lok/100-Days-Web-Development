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

## Update 
```js
router.post('/posts/:id/edit', async function(req, res) {
  const postId = new ObjectID(req.params.id);
  const post = req.body;
  const result = await db.getDB().collection('posts').updateOne({_id: postId}, 
    {$set: {
      title: post.title,
      summary: post.summary,
      body: post.body
  }});

  return res.redirect('/posts');
});

```

---

## Delete
```js
router.post('/posts/:id/delete', async function(req, res) {
  const postId = new ObjectID(req.params.id);
  try {
    const result = db.getDB().collection('posts').deleteOne({_id: postId});
    return res.redirect('/posts');
  }
  catch(error) {
    return res.status(404).render('404');
  }
});
```
---
