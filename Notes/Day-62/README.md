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

---

## 
