## DOM
### Inserting Element
1. create new element
2. append text content into it
3. get the parent element node
4. insert the new element into it
```js
let pElement = document.createElement('p');
pElement.textContent = 'This is a paragraph';
let parentElement = document.getElementById('parent');
parentElement.append(pElement);
```
> The [differences](https://flexiple.com/javascript/javascript-appendchild) between `append()` & `appendChild()`.

---

### Deleting Element
1. select the element to be removed
2. remove it
```js
let deleteElement = document.querySelector('p');
deleteElement.remove();
// OR
deleteElement.parentElement.removeChild(deleteElement);
```

---

### Moving Element
1. select the existing element
2. append it to the target element
> A [case](https://stackoverflow.com/questions/20910147/how-to-move-all-html-element-children-to-another-parent-using-javascript) of moving all element from a old parent to a new one.
```js
var newParent = document.getElementById('new-parent');
var oldParent = document.getElementById('old-parent');

function move() {
  while (oldParent.childNodes.length > 0) {
    newParent.appendChild(oldParent.childNodes[0]);
  }
}
```

---
