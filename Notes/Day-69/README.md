# AJAX Application
> In JavaScript, we are able to fetch (get and post) to the server asynchronous in the background which won't refresh the webpage.

### Extend Project-4
> To implement AJAX application, we can create a comments section for displaying comments on the posts-detail page where it can fetch the data without rehreshing the page.

---

## Handle a GET JSON API
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

## Handle a POST JSON API
> To send an HTTP POST request to the REST API server and provide JSON data in the body of the POST message.
1. Create a route for handling the POST request.
```js
router.post('/posts/:id/comments', async function(req, res) {
  const postId = new ObjectID(req.param.id);
  const newComment = {
    postId: postId,
    title: req.body.title,
    text: req.body.text
  };
  console.log(newComment);
});
```
2. Manage the POST Request Data
> When the button is clicked, we want to store the entered data in the form to the database. But the default button submit behavior will refresh the page and jump to the `action=""` url. To solve it, we need to set the method `.preventDefault()`
```js
const commentsFormElement = document.querySelector('#comments-form form');
const commentTitleElement = document.getElementById('title');
const commentTextElement = document.getElementById('text');

async function saveComment(event) { // event parameter will be passed by the event listener
  event.preventDefault();
  const postId = loadCommentsBtnElement.dataset.postid;
  
  const enteredTitle = commentTitleElement.value;
  const enteredText = commentTextElement.value;
  
  const comment = {title: enteredTitle, text: enteredText};
  
  const result = await fetch(`/posts/${postId}/comments`, { // to POST the data, we need extra configuration for fetch
    method: 'POST', // default value: GET
    body: JSON.stringify(comment), // convert JavaScript Object to JSON
    headers: { // here is a JSON object therefore, the key need to be a string
      'Content-Type': 'application/json' // this is for express middleware to recognize it's a JSON data
    }
  });
}
```
3. Middleware for parsing JSON data
> Express.js won't parse the incoming requests with JSON payloads, it will result in null for JSON data by default.
```js
// Set a middleware for parsing JSON only where the headers of the request contain 'Content-Type': 'application/json'
// app.js
app.express();
app.use(express.json());
```
4. Insert data into database
```js
// From step 1.
router.post('/posts/:id/comments', async function(req, res) {
  // ...
  const result = await db.getDB().collection('comments').insertOne(comment);
  res.json({message: 'Comment added!'}); // return message as the response
});
```

---
