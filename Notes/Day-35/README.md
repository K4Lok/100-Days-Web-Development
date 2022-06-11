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

### innerHTML vs textContent
#### `element.innerHTML`
> It contain all the text and element in its child node. <br/>
> It recognized the HTML tag when assigning value into it.

#### `element.textContent`
> It contain only the text of its content and the child's. <br/>
> It don't recognize the HTML tag and will save the plain text version of the HTML tag after assigned.

```js
<p id="elm">
  <br />
  Hello this is <span>Tharun</span> How are you?
  <br />
</p>

let element = document.getElementById('elm');
console.log(element.innerHTML); // "<br /> Hello ...... are you? <br />"
console.log(element.textContent); // "Hello ..... are you?"
```

---
## Event
> JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page.

> Event can occurs when the page is loaded, button being clicked, entering to a input field.
### Event Listener
> An event listener can monitor and return event object when an event is fired.

### Event Handler
> An event handler is the actions to response when an event occurred.

> The process of reacting over the events is called event handling.

#### Example
```js
let inputElement = document.getElementById('input-field');
inputElement.addEventListener('input', () => { // 'input' is the type of event
  console.log(inputElement.value);
});
```
> In this case, when user enter any character into the input field, it triggers the function in the event listener.

### The `"event"` object
> Whatever types of event, the event listener will by default pass an `event` object to the function. <br/>
> This `event` object holds information of each event and also the element node.
```js
let inputElement = document.getElementById('input-field');
inputElement.addEventListener('input', (event) => { // you can name the parameter whatever you want
  console.log(event.target.value); // target is an object of the element node
}
```

#### [Common Event types](https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/a/dom-event-types) 
1. Mouse Event
2. Touch Event
3. Keyboard Event
4. Form Event
5. Window Event

---
