## JavaScript Project
### Overlay Screen
```html
<aside class="modal" id="config-overlay">
  ...
  ...
</aside>
<button class="btn btn-alt" id="edit-btn">Edit</button>
```
> Sometimes, we want to have a customed overlay screen for alerting user or inputting values.
```js
const configOverlayElement = document.getElementById('config-overlay');
const editBtnElement = document.getElementById('edit-btn');

editBtnElemnt.addEventListener('click', popOverlayScreen);
cancelBtnElement.addEvenListener('click', cancelOverlayScreen);

function popOverlayScreen() {
  configOverlayElement.style.display = 'block';
}

function cancelOverlayScreen() {
  configOverlayElement.style.display = 'none';
}
```
> The shawdow background when the overlay screen pop up can also be done in the some way.

---

## CSS Function
### CSS `calc()`
> It's a built-in function lets you perform calculations when specifying CSS property values.
```css
width: calc(10px + 100px);
width: calc(100% - 30rem);
width: calc(var(--variable-width) + 20px);
```

### CSS `repeat()`
> A built-in function represents a repeated fragment of the track list ( The tack listing of the display grid).
```css
grid-template-columns: repeat(3, 6rem);
grid-template-rows: repeat(3, 6rem);
grid-template-columns: repeat(auto-fill, 40px);
```

---

## CSS Recall
### Button and Input
> By default, these two elements won't inherit the font property from the parent container.
---
