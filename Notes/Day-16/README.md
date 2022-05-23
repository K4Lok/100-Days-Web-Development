## CSS
### Background Image
#### `background-image:`
```css
#hero {
  background-image: url("path.jpg");
```
#### Position and Size
```css
#hero {
  background-position: center:
  background-size: cover;
```
---

### Positioning Elements
### [Document Flow](https://soulandwolf.com.au/blog/what-is-document-flow/)
> Document Flow is the arrangement of page elements, as defined by CSS positioning statements, and the order of HTML elements. <br/>
> How each definition takes up space and how other elements position themselves accordingly.

> There're 3 main ways elements are positioned:
### 1. Display types
> Block element and Inline element...
### 2. Floats
> The float CSS property is usded to position the elements to the left, right...
### 3. Positioning
> Value: `static` | `relative` | `abosolute` | `fixed` | `inherit` <br/>
> Initial: `static` <br/> 
> // every elements by default are `display: static`.
#### Static
> Default value: position: static, with this default rule, we're not able to change the position with `top`, `bottom`, `left` or `right`.
#### Relative
> But with `position: relative` we can now move the element with properties `top`, `bottom`, `left` and `right`.
#### Absolute
> This is a out-of-flow property, a box is removed from the normal flow entirely (it has no impact on later siblings) <br/>
> and assigned a position with respect to a closest relative container.
#### Fixed
> It's a subcategory of absolute positioning, it also position with respect to a container, but the container is the viewport.
---
