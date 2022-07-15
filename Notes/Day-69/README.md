# AJAX Application
> In JavaScript, we are able to fetch (get and post) to the server asynchronous in the background which won't refresh the webpage.

## Extend Project-4
> To implement AJAX application, we can create a comments section for displaying comments on the posts-detail page where it can fetch the data without rehreshing the page.

### Handle a GET JSON API
> It's a way for data interchange between two computer application, in our case the user browser to fetch the data and the server who provides it.
1. Create an router for showing JSON data
```js
router.get('/posts/:id/comments', async function(req, res) {
  const postId = req.params.id;
  const comments = db.getDB().collection('comments').find({postId: postId}).toArray();
  // express built-in function for returning JSON data
  res.json(comments);
});
```
When we enter the url `localhost:3000/posts/xxxxxxxxxx/comments', it will return a JSON data based on how we set the data in the routering function.

### JS GET AJAX Request
> To retrieve JSON data with JavaScript `fetch()` built-in function.
```js
// post-detail.ejs
<button id="load-comments-btn" class="btn btn-alt" data-postid="<%= post._id %>">Load Comment</button>

// comments.js
const loadCommentsBtnElement = document.getElementById('load-comments-btn')
async function fetchComments(event) {
  const postId = loadCommentsBtnElement.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`); 
  // fetch promise resolve into a Response Object which contains numbers of useful properties and methods to inspect the response.
  const responseData = await response.json(); // get the json body
  console.log(responseData);
}
```

### Update the DOM
> With the AJAX approach, we can now fetch the data in the background and update the DOM object to append the data without refreshing the page.
```js
// post-detail.ejs
<section id="comments">
  <p>
    This post might have comments. You can load them if you want to view
    them.
  </p>
  <button id="load-comments-btn" class="btn btn-alt" data-postid="<%= post._id %>">Load Comment</button>
</section>
      
// comments.js
const commentsSectionElement = document.getElementById('comments');
async function fetchComments(event) {
    //...
    const commentsListElement = createCommentsList(responseData);
    commentsSectionElement.innerHTML = '';
    commentsSectionElement.appendChild(commentsListElement);
}
```
---

