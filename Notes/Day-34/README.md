## DOM 
### DOM [Tree](https://www.w3schools.com/js/js_htmldom.asp)
> The DOM views a HTML document as a tree-structure, this tree-structure is called a node-tree. All nodes can be accessed throught the tree. Their contents can be modified or deleted, and new elements can be created.

### DOM [Traversal](https://zellwk.com/blog/dom-traversals/)
> Navigate up and down the DOM tree and move from branch to branch.
```js
<body>
  <h1>Hello World</h1>
  <ul>
    <li>...</li>
    <li>...</li>
    <li>...</li>
  </ul>
</body>

<script>
  const h1 = document.body.children[0];
  const ul = document.body.children[1];
  const firstLi = document.body.children[1].firstElementChild;
  // OR
  const h1 = document.getElementsByTagName('h1')[0];
  const p = document.getElementsByTagName('p')[0];
  const ul = document.getElementsByTagName('ul')[0];
</script>
```

---

### DOM Terminology
#### Nodes & Elements [difference](https://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object)
1. Nodes are all nodes (element nodes, text nodes, comment nodes, etc...).
2. Elements are only element nodes.

---

### Worth Notice
#### `document.body.firstChild` & `document.body.firstElementChild`
> Then `nodes` in DOM not only holds all the HTML elements but also everything related to the HTML document, (white spaces between elements for example).
```js
// First Case
<body>
  <h1>Hi there!</h1>
// Second Case
<body><h1>Hi there!</h1>
```
> First Case: The `document.body.firstChild` will return a text node with its value `"\n   "`. <br>
> Second Case: The `document.body.firstChild` will return a element node with its value `"<h1>Hi there!</h1>"`. <br>

> However, the `document.body.firstElementChild` will guarantee getting the first element node regardless what's in between.
---

### Searching Node by ID
> It's handy to get a element node by its ID, since every single id is unique.
```js
<body>
  <ul>
    <li><h3>Hello World</h3></li>
    <li><a id="the-link" href="#">link</a></li>
  </ul>
</body>

// this will return the element node
const theLink = document.getElementById('the-link');

// then you can operate diff methods from the node
theLink.href = "https://google.com";
theLink.innerHTML; // return link
```
---

### Common Query Methods
```js
document.getElementById('some-id');
document.querySelector('some-css-selector');
document.querySelectorAll('some-css-selector');
document.getElementsByClassName('some-class');
document.getElementsByTagName('tag');
```

---
