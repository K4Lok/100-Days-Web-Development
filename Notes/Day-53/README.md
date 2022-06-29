## Express.js splitting codes into files
> When the project gets larger, it's hard to keep on maintains in a single files. A better appoarch is to split our duplicated code block or specified methods into different folder and files.
1. import (require) packages that the code blocks used
```js
const fs = require('fs');
const path = require('path');
```
2. create functions to replace duplicated code blocks
```js
function getStoredData() {
  const filePath = path.join('...');
  const storedData = JSON.parse(fs.readFileSync(filePath));
  
  return storedData;
}
function storeData(storableData) {
  fs.writeFileSync(filePath, storableData);
}
```
3. exports the function
```js
// exports the object in this file so that node.js knows which part of the file can be access by other files.
// using object to pass the value in this file
module.exports = {
  getStoredData: getStoredData,
  storedData: storedData,
  // not only function, normal variable can also be passed
  name: "Tommy",
}
```
4. import the object in the main file
```js
const myData = require('path/fileName');
```
5. use the method and value like normal object
```js
const customData = myData.getStoredData();
customData.push(myData.name);
myData.storeData(customData);
```
> Remember to get all the path in the new file updated.
---

## Express.js Router
> In a multiple page website, the number of routes can be messy. The routes can be well organized into different folder and files for better readability via `express.Router` the built-in router object, this instance has the same feature of `app = express()` when it comes to function `get()`, `use()`, those middleware function for handling request and responds.
1. Create a router object in a new file
```js
const express = require('express');
const router = express.Router();
```
2. Create the route for handling requests
```js
router.get('/', function(req, res) {
  res.render('index');
});
```
3. Exports the router object so that the main entrance can use it
```js
module.exports = router;
```
4. Import the router object with `require()`
```js
const defaultRoutes = require('path/fileName');
```
5. To use the router object in the main entrance
```js
app.use('/', defaultRoutes);
```
> The first parameters `'/'` refers to EVERY request.

---

## Route Parameters & Query Parameters
