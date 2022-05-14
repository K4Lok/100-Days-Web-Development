## CSS
### CSS Box Model
#### #`padding:` Padding Property
`padding:` `"top"` `"right"` `"bottom"` `"left"` ([Link](https://developer.mozilla.org/en-US/docs/Web/CSS/padding))

#### #`Border:` Border Property
`border:` `"line-width"`  `"line-style"`  `"color"` ([Link](https://developer.mozilla.org/en-US/docs/Web/CSS/border))

#### #`Margin:` Margin Property
`margin:` `"top"` `"right"` `"bottom"` `"left"` ([Link](https://developer.mozilla.org/en-US/docs/Web/CSS/margin))

#### Margin Collapse
> It'll happen when two vertical margins come in contact with one another. 
([Link](https://css-tricks.com/what-you-should-know-about-collapsing-margins/#:~:text=Collapsing%20margins%20happen%20when%20two,the%20other%2C%20leaving%20one%20margin.))

### Center Alignment CSS Property
#### `"text-align: center"` vs `"margin:auto"`
> 1. `"text-align:center"`will center the contents of the container.
> 2. `"margin:auto"` will center the container itself.


#### Google Chrome Development Tool
> Can also provide a box model view for us to inspect the size of the box model.
> It uses difference color to represents the box model.

### Types of Selectors
1. Type Selector -> `elementname`
```css
p {
  text-align: center;
}
```

2. ID Selector.  -> `#id`
```css
#id-name {
  padding-left: 40px;
}
```

3. Group Selector -> `elementname, elementname`
```css
h1, h2, p {
  font-family: cursive;
}
```

4. Class Selector -> `.class`
```css
.class-name {
  background-color: bisque;
}
```
(For more [details](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors).)

### Combinators
1. Descendant combinator
2. Child combinator
3. Adjacent sibling combinator
4. General sibling combinator

(For more [details](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators).)

---

## HTML
> HTML is all about the semantic. It provide the semantic information of the element and what probably would be inside.

### More Structural HTML Layouts
> Provide more semantic information of the Website with `<header>` and `<main>` tag.
```html
<html>
  <head>
    <!-- meta data -->
  </head>
  <body>
    <header>
      <!-- Title -->
      <!-- Sub Title -->
    </header>
    <main>
      <!-- Main content -->
    </main>
  </body>
</html>
```

### Block vs Inline Elements
> For more [details](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements).
#### Block Elements
> It'll take the space of entire line.
#### Common Inline Elements
> `<a>`, `<button>`, `<img>`, `<span>`
---
