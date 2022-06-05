## Form Button
### Types of Button in Form
#### 1. `type="button"`
> It'll set the button type to button for further javascript use in a form.

#### 2. `type="submit"`
> It's the default property of buttons in a form, will submit all the inputs.

#### 3. `type="reset"`
> It will clear all the input field within the form when clicked.

---

## [Boolean Attributes](https://meiert.com/en/blog/boolean-attributes-of-html/#:~:text=A%20Boolean%20attribute%20is%20an,represents%20the%20%E2%80%9Cfalse%E2%80%9D%20value.)
> It's a data type that has one of two possible values (true and false).
#### How boolean attribute work
> "The presence of a boolean attribute on an element represents the 'true' value, and the absence of the attribute represents the 'false' value.

--

## Form Validation
#### Common Attributes for `<input />`
### `required` - boolean attribute
```html
<input type="..." name="..." id="..." required />
```
> The browser will make sure the the input is not empty when submitting the form. <br/>
> Will pop up a message to ask the user to finish the input field.

### `minlength=`
```html
<input type="..." name="..." id="..." minlength="8" />
```
> The browser will ensure the input field meet the minimum length before submitting.

> `minlength` controls the amount of characters in the input field.

### `min` & `max`
```html
<input type="number" name="..." id="..." min="10" max="20" />
<!-- OR -->
<input type="date" name="..." id="..." min="1960-01-01" max="2004-01-01" />
```
> The `min` and `max` attribute controls the range of a numeric input field.

### `placeholder=`
> Display an extra hint for the user in the input field. <br/>
> The words in the placeholder won't be submitted to the form.

### `row=`
```html
<textarea name="..." id="..." required row="8"></textarea>
```
> The set the display row size of a textarea input field.

---

## textarea CSS Styling
> By default, the input field of a textarea element can be resized by the user on both the vertical and horizontal axis, but this could break your website layout.

> To avoid this situation, we can set a CSS property to restrict the resizing function of a textarea.
```css
textarea {
  resize: none; /* Not able to resize the input field */
  resize: both; /* Default */
  resize: vertical; /* Resize only along the vertical axis */
  resize: horizontal; /* Resize only along the horizontal axis */  
}

---
