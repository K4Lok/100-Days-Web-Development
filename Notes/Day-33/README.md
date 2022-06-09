## DOM
### What's DOM
> It stands for Document Object Model.

> It's the data representation of the parsed HTML code.

### JavaScript and DOM
> JavaScript code is able to interact with the DOM and extract data from it or manipulate it.

---

## Global Object
> The global object in JavaScript is an always defined object that provides variables and functions, and is available anywhere. In a web browser, the global object is the `window` object.

## Global ["window"](https://www.studytonight.com/javascript/javascript-window-object) Object
> It holds information and functionality related to the active browser window / tab.
### Usage
```js
alert("window object");
console.log("window object");

window.alert("window object");
window.console.log("window object");
```
> The built-in functions we previous used are from the `window` object as well.

##  ["document"](https://www.studytonight.com/javascript/javascript-document-object) Object
> It's a child object of the `window` object.
```js
// access the `document` object
console.log(window.document);
// as mentioned previously, window is a global object defined by default
// so we can access its proerty directly.
console.dir(document);
```
> It provides access to all HTML element of a document. When an HTML document is loaded into a browser window, then it becomes a document object.

---

### Access the children of `document` object
> The childrens of document is simply a group of nested object to represent the HTML file:<br/>
```console
document
  head: {...head...}
  body: {
    ...: ...,
    children: {
      0: h1,
      1: p,
      3: {},
    },
    ...: ...,
  }
```
> Intuitively, we can just access the p tag inside the children object of body. However, this will result in `null` in the console.log/dir:
```js
console.dir(document.body.children[0]); // null
```
> It's because the `js.` script is executed before the browser parse the HTML element into the DOM representation.

### Solution
1. Move the `<script>` element below the html element you want to access.
2. Add a boolean attribute into the `<script>` elmenet.
```html
<head>
  <script src="app.js" defer></script>
</head>
```

---
