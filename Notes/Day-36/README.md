## JavaScript
### [Constant](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
> Constant are block-scoped like `let` keyword. The value of a constant can't be changed through reassignment and also redeclared.

> However, if a constant is an `object` or an `array`, its properties or items can be updated or removed.

---

### Styling with JavaScript
> Every Element object has a property of `style` with it stores all the css related properties. <br/>
> To styling element with javascript, we can utilize this `style` property.

```js
const element = document.getElementById('element');
console.dir(element.style); // Output the `style` property
// To style element
element.style.fontFamily = "sans-serif";
element.style.fontSize = "2rem";
```

### Managing CSS Classes
> With 2 methods.
#### `className`
> This property can help assigning css class into an element, but it will override all the previous classes that element has.
```js
<div class="first-tier noble><div>
element.className = "second-tier"; // <div class="second-tier><div> 
```

#### `classList`
> With this property, it shows all the classes of an element, since it's a list, so we can so `.add('class')` and `.remove('class')` without override any classes.
```js
<div class="first-tier noble><div>
element.classList.add("second-tier"); // <div class="first-tier noble second-tier><div> 

---
