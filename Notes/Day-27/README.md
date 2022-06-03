## Form
### [Label](https://www.bitdegree.org/learn/html-label#:~:text=HTML%20label%20acts%20as%20a,inside%20the%20HTML%20label%20tag.)
> A HTML label acts as a caption for a specified element.
#### `for=` [attribute](https://stackoverflow.com/questions/18432376/what-does-for-attribute-do-in-html-label-tag)
> Use the `for` attribute on the label to connect the `id` attribute on the input tag.
### To pair a label and an input
> There are [two ways](https://css-tricks.com/html-inputs-and-labels-a-love-story/) to do so.

#### 1. implicit way
> Embrace the input element inside a label element. Then it will pair together.
#### 2. `id=` & `for=` attributes
> Using the `id` attribute to set a unique reference to a input element, <br/>
> Then use the `for` attribute on a label element to pair them together.

---

## Styling the Form
### Font
> The font property is default override by the browser, to make changes for the input related elements. <br/>
> 1. Specify the rules of that element directly.
> 2. Use the value `inherit` to inherit the parent container's font properties.
```css
/* Directly */
element {
  font: normal 1rem "Roboto", sans-serif;
}

/* Inherit */
element {
  font: inherit;
}

```

### Input field
#### `:focus` pseudo-selector
> Style the element when the user select the input field.
```css
element:focus {
  background-color: ...;
  border-color: ...;
  color: ...;
}
```

---

## Input Types
> There are different input types based on the attribute `type=`.
#### `<input type="text">`
> A single-line text input field.

#### `<input type="email">`
> An input field optimized for email input on mobile phones.

#### `<input type="number">`
> Optimized for number input and without characters.

#### `<input type="password">`
> A password input field where input are hidden.

#### `<input type="date">`
> A date picker overlay the input field.

#### `<input type="radio">`
> Multiple options where only one option can be selected simultaneously.

#### `<input type="checkbox">`
> Multiple options to selected like the agree to terms section.

#### `<input type="file">`
> Allow user to pick a file to upload.

---
