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

---

## [Promises](https://www.youtube.com/watch?v=PoRJizFvM7s&t=1052s)
> Callbacks functions can be messy when it nested multiple callbacks, to make to much more readable. ES6 version in 2015 introduced Promises to structed the way of using callbacks. Like callback funtions, promises simplify deferred and aysnchronous computations.
### Example
> Like the previous example, there're many packages supporting promises, but still we can create our own promises function
```js
function createPost(newPost) {
  return new Promise((resolve, reject) => {
    const error = false; // after some computation whether the action is successed or not, return true or false.
    if(!error) {
      resolve();
    }
    else {
      reject('Error: Something went wrong!');
    }
  });
}
// after creating a promise function, we can then call it with the promise exclusive methods `.then()` and `.catch()`
createPost({...})
  .then(getPosts)
  .catch((error) => {
    console.log(error); // output: 'Error: Something went wrong!' if the error is true
  })
```

---

## [Async Await](https://www.youtube.com/watch?v=_9vgd9XKlDQ)
> It's introduced in ECMAScript 2017, makes the promises `.then()` & `.catch()` syntax more structured and readable.
### Example
> The `async` keyword make sure the function returns a promises. The `await` keyword only works inside a `async` funciton, it ask js to wait until the action is finished then proceed.
```js
async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); // here the fetch function is returning a promises object
  const data = await res.json();
  console.log(data);
}
fetchData();
```
### Error Handling
> We can simply use `try`/`catch` syntax to handle the error from the await action.
```js
async function fetchData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // here the fetch function is returning a promises object
    const data = await res.json();
    console.log(data);
  }
  catch(error) {
    console.log(error);
  }
}
```
---
