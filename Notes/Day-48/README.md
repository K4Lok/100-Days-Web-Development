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


### Storing Data


---
