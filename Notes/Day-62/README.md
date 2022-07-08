# Project-4
## Dynamic routing for display specified posts
> To get the route parameters from the url, we can retrieve it with the function parameters `req.params.id`. `.id` is where we defined as the identifier.
```js
router.get('/posts/:id', async function(req, res) {
  const id = req.params.id;
  const query = `
    SELECT posts.*, authors.name AS author_name, authors.email AS author_email FROM posts
    INNER JOIN authors ON posts.author_id = authors.id
    WHERE posts.id = ?
  `;
  try {
    const [posts] = await db.query(query, [id]);
    if(!posts && posts.length === 0) {
      throw new Error(`Post: ${id} not EXISTS!`);
    }
    return res.render('post-detail', {post: posts[0]});
  }
  catch(error) {
    console.log(error);
    return res.status(404).render('404');
  }
});
```

### CSS Knowledge
> Since we're building a blog website where it's common for comments to have whitespaces and line-break in between. But by default, the browser will omit it, therefore, we've to set some CSS property to prevent it.
```css
#comments {
  white-space: pre-wrap; /* This ensures that line breaks and whitespaces are kept */
}
```

### Makes Datetime be more Readable
> The default datetime from the database is not straight forward to understands: `Thu Jul 07 2022 20:59:30 GMT+0200 (Central European Summer Time)`, therefore, we can turn the datetime variable to be more readable via built-in number methods - [`.toLocaleDateString(locales, options)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString).
```js
const postData = {
  ...posts[0], // pass in the object with spread operator
  // rewrite the date values
  date: posts[0].date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
```
---

## Updateing Posts & Deleting Posts
> It also works the same with the above solution and methods.
### Update
```js
router.post('/posts/:id/edit', async function(req, res) {
    const query = `
        UPDATE posts SET title = ?, summary = ?, body = ?
        WHERE id = ?
    `;
    try {
        const [posts] = await db.query(query, [
            req.body.title,
            req.body.summary,
            req.body.content, 
            req.params.id
        ]);
        if(!posts || posts.length === 0) {
            throw new Error(`Post: ${id} not existed`);
        }
        res.redirect('/posts');
    }
    catch(error) {
        console.log()
        return res.status(404).render('404');
    }
});
```

### Delete
```js
router.post('/posts/:id/delete', async function(req, res) {
    const query = `
        DELETE FROM posts WHERE id = ?
    `;
    db.query(query, [req.params.id]);
    res.redirect('/posts');
});
```
---
