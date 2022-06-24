## Node.js [Framework](https://javascript.plainenglish.io/top-node-js-framework-for-web-apps-in-2022-e538bae93c72)
> It could be cumbersome to do the low level and the same thing again and again, it can be done easily with Third-Party Library.<br/>

## Express.js
> The most popular Node.js Framework for Web Application.

### Install Express.js
> To install third-party packages, we need to use built-in package managers in Node - `npm`:
```shell
// In the project folder
// `init` will help you set up bunch of project info
~ npm init
// `install` will install all the dependencies that your dependencies required
~ npm install
```
> Express.js itself is also has dependencies, so it's a dependency depends on other dependencies.

### Working with others
> `npm` store all the info of dependencies in <package.json>, while when you run command `npm install` it will install the dependencies on it. 
> This is useful when you need to share your working code with others without pass all the node modules (could be large).

---

### Express.js Usage
> This time the express object is a function when it returns from the package, unlike the built-in package `http`.
```js
const express = require('express');
const app = express();
```
#### If we want to do the same things like Day-48 with vanilla Node.js:
```js
app.listen(3000);
//localhost:3000/webPageA
app.get('/webPageA', function(req, res) {
  res.send('<h1>' + 'This\'s Webpage A'+ '</h1>');
});
//localhost:3000/webPageB
app.get('/webPageB', function(req, res) {
  res.send('<h1>' + 'This\'s Webpage B'+ '</h1>');
});
//localhost:3000/ (this is the default route)
app.get('/', function(req, res) {
  res.send('<h1>' + 'This\'s default route' + '</h1>');
});
```
---

### Parse User Data
> To parse to the user data from the form input.
```js
// to build up a input form at default route
app.get('/', function(req, res) {
    res.send(`
        <form action="/store-data" method="POST">
            <h1>Form Data</h1>
            <label for="username">UserName</label>
            <input type="text" id="username" name="usernameData" />
        </form>
    `);
});
// to receive the form data with POST method
app.post('/store-data', function(req, res) {
  console.log(req); // many things related to the requests
  console.log(req.body); // undefined before using the urlencoded
  // Notify the user, the data has been stored
  res.send("<h1>Data Stored</h1>");
});
```
#### Very important here!
> From this [answer](https://stackoverflow.com/questions/66555172/why-is-req-body-undefined-in-express), by default, Express.js do not read the body of the incoming request, therefore the `req.body` is undefined or null. So we need an appropriate middleware to help what type of request it is and what's inside the body.
```js
app.use(express.urlencoded({extend}));

//inside the app.post function ....
// this will output the formData object comprised of all the inputs
console.log(res.body) // { usernameData: "<your-input>" }
```

### Storing Data


---
