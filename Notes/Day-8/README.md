## CSS
### Block-level element
> 1. Full-width by default
> 2. Starts with a new line
> 3. Width and height can be set

### Inline element
> 1. Takes space as much as needed
> 2. Place side by side
> 3. Width and height cannot be set

> More details for the two concept above ([yt link](https://www.youtube.com/watch?v=hgoFi0fCv3w))

#### Inline Element margin
> The `margin:` propertiy with values `"top"` and `"bottom"` of inline element would not affect other element.

#### #`"Disply:"` Property
> The `display` property sets whether an element is treated as a block or inline element 
and the layout used for its children, such as flow layout, grid or flex. ([Link](https://developer.mozilla.org/en-US/docs/Web/CSS/display)).
```css
a {
  display: inline;
  display: block;
  display: inline-block;
}
```
> Value `"inline-block"` combines the both inline and block, it display elements in the same line but with a modifiable top and bottom.

### Margin Collapsing
> 1. Margin collapsing only occurs to vertical margins.
> 2. The larger margin wins between two element.

> More details on ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)).

### #`"box-shadow:"` Property
```css
li {
  box-shadow: "offset-x" "offset-y" "blur-radius" "spread-radius" "color";
}
```
> For more [details](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow).
---

## Showcase -- ([Project-1](/Code_Snippets/Project-1/index.html))
### Index.html
<img alt="index.html" src="/Code_Snippets/Project-1/showcase/index.png" />

### Full-week.html
<img alt="full-week.html" src="/Code_Snippets/Project-1/showcase/full-week.png" />

---
