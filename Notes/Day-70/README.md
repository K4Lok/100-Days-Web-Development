# Imporve the Project-4
> The project is mostly done, however, we can make it more perfect on the details.
## Comment Section
> 1. When we add a new comment on a post, it won't fetch the post from the database and display it on the page by itself.
```js
// we can utilize the fetchComments function we've create previously to fetch and display the content
async function saveComment(event) {
    event.preventDefault();
    const postId = loadCommentsBtnElement.dataset.postid;

    const enteredTitle = commentTitleElement.value;
    const enteredText = commentTextElement.value;

    const comment = {title: enteredTitle, text: enteredText};

    const result = await fetch(`/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetchComments();

    commentTitleElement.value = "";
    commentTextElement.value = "";
}
```
> 2. After saving the comment to the database, the entered value won't be clear out which causes some confusion that the comment might not be uploaded.
```js
// Clear the input field
async function saveComment(event) {
    // ...
    commentTitleElement.value = "";
    commentTextElement.value = "";
}
```
> 3. When we click the load comments button for displaying the comments, it will show nothing if there's no comment, we can show some message to indicate that.
```js
// post-detail.ejs
<section id="comments">
  <p>
    This post might have comments. You can load them if you want to view
    them.
  </p>
  <button id="load-comments-btn" class="btn btn-alt" data-postid="<%= post._id %>">Load Comment</button>
</section>
```
```js
// comments.js
const commentsSectionElement = document.getElementById('comments');

async function fetchComments(event) {
    const postId = loadCommentsBtnElement.dataset.postid;
    const response = await fetch(`/posts/${postId}/comments`);
    const responseData = await response.json();

    if(responseData && responseData.length > 0) {
        const commentsListElement = createCommentsList(responseData);
        commentsSectionElement.innerHTML = '';
        commentsSectionElement.appendChild(commentsListElement);
    }
    else {
        commentsSectionElement.firstElementChild.textContent = "There's no comment on this post so far, add some to make it prettier!";
    }
}
```

---

## Error Handling
### [Server-side Error](https://www.moesif.com/blog/technical/monitoring/10-Error-Status-Codes-When-Building-APIs-For-The-First-Time-And-How-To-Fix-Them/#:~:text=This%20error%20response%20also%20indicates,contact%20support%20if%20it%20persists.)
> In some situation, the server might occur error or crash so that it responses an error status code. To handle this, we can use the methods of the response object returned from fetch function (built-in JavaScript function).
```js
async function saveComment() {
    // ...
    const response = await fetch(...);
    
    // .ok will be true only when the response was successful
    // which is the range of 200-299 in status-code
    if(response.ok) {
        fetchComments();
    }
    else {
        alert('Could not send the comment!');
    }
}
```

### Client-side Error
> Sometimes, the client-side could also occur error where it's not able to reach out the requests, it could due to the network issues. To handle this, whenever we've any client-side error occurred, the fetch function will throw an error. Therefore, we can handle it by using the try and catch syntax.
```js
async function saveComment() {
    // ...
    try {
        const response = await fetch(...);
        // ...
    }
    catch(error) {
        console.log(error);
    }
}
```
#### Simulate Network Issues
> Google chrome provide functionality for testing situation like offline, we can try send a AJAX request to the server while we're disconnected to see are we doing well on the error handling.
---
