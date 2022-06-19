## JavaScript 

### `Element.tagName` [Property](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)
> The `tagName` read-only property returns the tag name of the element in which it's called.
```js
<button class="btn">Click me</button>

var btnElement = document.querySelector(".btn");
console.log(span.tagName); // "BUTTON"
```

---

### [Add Event Listener](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/) on Multiple Elements
```js
// Method 1
document.querySelectorAll('.some-class').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
})

// Method 2
for(const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}
```

---
