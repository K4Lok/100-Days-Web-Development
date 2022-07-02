# JavaScript
## Callbacks
> it's a function passed as an argument to another function, this able the callback function to be called when a function is finished.
### Example
> JS has many built-in functions with a callback function as an argument, but still we can create our own one.
```js
const posts = [{ title: '1', content: 'this is the first' },
               { title: '2', content: 'this is the second' }];
// lets say this function need 1 seconds to finish.
function getPosts() {
  posts.forEach((post, index) => {
    console.log(`This is title: ${post.title} with content: ${post.content}.`);
  });
}
// and this function takes 2 seconds to finish.
function createPost(newPost) {
  posts.push(newPost);
}
createPost({ title: '3', content: 'this is the third' });
getPosts();
```
> In this example, the concole will only see the output of the first two post, in order to see the created one as well, we can call the `getPosts()` function as the callback funciton calls when the `createPost()` function is finished.
```js
function createPost(newPost, callback) {
  posts.push(newPost);
  callback();
}

createPost(...); // then this will output the third post as well.
```
## Promises
> Callbacks functions can be messy when it nested multiple callbacks, to make to much more readable. ES6 version in 2015 introduced Promises to structed the way of using callbacks.
```js

```

## Async Await
