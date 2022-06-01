## CSS Variables
> AKA Custom Properties.

> Are entities defined by CSS authors that contain specific values to be reused throughout a document. <br/>
> They are set using custom prperty notation, and are accessed using the `var()` function.

#### Usage
```css
element {
  --main-bg-color: brown;
}
main-container {
  background-color: var(--main-bg-color);
}
```
> A common best parctice is to define custom properties on the `:root` pseudo selector, so that it can be applied globally across your HTML document.

### [`:root`](https://www.digitalocean.com/community/tutorials/css-root-pseudo-class) - pseudo-class selector
> It's used to select the highest-level parent of a given specification. In the HTML specification, the `:root` is essentially equivalent to the `html` selector.

> However, pseudo-class selector `:root` has a higher specificity.

---

### Selector Diff - `html`, `:root` , `*`
#### `html`
> Selects `html` element which `html` is the root element of all element nested inside html tag.

#### `:root`
> Basically same as `html`, but the specificity of `:root` will be higher.

#### `*`
> Asterisk selector select all the element directly. <br/>
> In contrast, `html` and `:root` selector inherited the rules to nested element.

---

## CSS Transformation
> The `transform` property applies a 2D or 3D transformation to an element. <br/>
> Which allows you to do following to elements: rotate, scale, move, skew, etc...

### Examples
> To scale a element by 2.
```css
element:hover {
  transform: scale(2);  
}
```


---
## CSS Transition
> The `transition` property allows you to change property values smoothly, over a given duration.
```css
transition: <property> <duration> <timing function> <delay>;
```

### To create a transition
> 1. The CSS property you want to add an effect to.
> 2. The duration of the effect.

### Usage
> The `transition` property has to applied to the inital state of the element, not on event triggering the transition.
```css
element {
  transition: background-color 0.5s ease-out;
}
element:hover {
  background-color: var(--main-color-hover);
}

```

---

## SVG
### Scalable Vector Graphics
> It's a XML based mark up language to describe two dimentional vector graphics.

> Text based description of skalable images that can be rendered by the browser.

---
