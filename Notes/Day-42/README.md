## JavaScript Propery behaviour
### `FormData` Objects
> The `FormData` object lets you compile a set of key/value pairs to send using `XMLHttpRequest`. It is primarily intended for use in sending form data.
```js
const formData = new FormData();
formData.get('the-id');
```

#### `.trim()`
```js
formData.get('player-id').trim();
```
> Get rid of the spaces around the string (not betweeghn the string). So that we can know the stirng is empty if the user entered a branch  blank.

### add CSS class
```js
const divElement = document.getElementById('backgroud-wrapper');
// The first child of the divElement
divElement.firstChildElement.classList.add('shadow-effect');
```
> To add CSS class into an element.

### remove CSS class
```js
divElement.firstChildElement.classList.remove('shadow-effect');
```
> To remove CSS class of an element.

### `type="reset"` button
```js
<form>
  <input type="reset" value="Reset" />
  // or
  <button type="reset">Reset</button>
</form>
```
> This is used for clearing all the input of a form.
---

## Handling Form Submission
> After we have the validated input from the user, we can start working on the form submission.

### `data-*` attribute
> The `data-*` attribute is used to store custom data private to the page or application.
```js
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
// JavaScript
const articleElement = document.getElementById('electric-cars');

articleElement.dataset.columns; // "3"
articleElement.dataset['index-number']; // "12314"
// OR
articleElement.dataset.indexNumber; // "12314"
articleElement.dataset.cars; // "cars"
```

#### dot notation & square bracket notation

---
