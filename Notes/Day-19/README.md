## CSS
### Overflow
> Apply to the container, sets the desired behavior for an element's overflow.
```css
overflow: visible; /* by default */
overflow: hidden; /* to hide the content out of the container */
```

---

### [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
> The CSS Grid layout is a two-dimensional grid-based layout system.

#### Define a Grid Container
> 1. To define a container element as a grid container: <br/>
> `display: grid;`

> 2. Set the column and row sizes of the container: <br/>
> `grid-template-columns` and `grid-template-rows`

> 3. Place its child elements into the grid with: <br/>
> `grid-column` and `grid-row`

---

### [CSS Tree-structural Pseudo-Class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
> These pseudo-classes relate to the location of an element within the document tree.
#### `:nth-of-type()`
> The `nth-of-type` pseudo-class is specified with a single argument, which represents the pattern for matching elements.
```css
p:nth-of-type(2n+1) { /* This will affect every odd element among any group of siblings */
  font-weight: bold;
}
```

---
