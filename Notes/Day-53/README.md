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
