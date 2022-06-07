## Javascript
#### How to apply Javascript on your html file
### 1. Direct coding
> You can apply the javascript code directly inside a html file via `<script>` `</script>` tag.<br/>
> It's not a self-closing element (not a "void element").
```html
<head>
  <script>
    <!-- javascript code right inside the element tag -->
  </script>
</head>
```

### 2. Linking to a `.js` file
> The `<script>` tag is pointing to the `script.js` file, the `src` attribute specifies the URL of an external script file.

```html
<head>
  <script src="js/script.js"></script>
</head>
```

---

## Javascript Data Type
### String
> The text string in Javascript can be assigned through either with single quote `'` or double quotes `"`

#### Declaring Variable with Naming Convention
> Normally, we use camelCase for identifier names (variables and functions).
```js
let firstName = "Hello";
let lastName = "World";
```

---

### Array
> An array is a special variable, which can hold more than one value.
#### Declaring an Array
```js
let brands = ["apple", "google", "facebook"];
```
#### Use Array
```js
let brands = ["apple", "google", "facebook"];
console.log(brands[0]); // "apple"
console.log(brands[1]); // "google"
console.log(brands[2]); // "facebook"
```

---

### [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
> An object is a collection of properties, and a property is an association between a name (or key) and a value.
#### Declaring an Object
> We use curly braces `{` `}` to enclose a comma-delimited list of zero of more pairs of property names and associated values of an object.
```js
let myCar = {
  make: "Tesla",
  model: "Model Y",
  year: 2019
}
```
> Unassigned properties of an object are `undefined` (and not null)
#### Access the properties
> Properties of JS objects can be accessed or set using a bracket notation.
```js
myCar["make"]; // "Tesla"
myCar["model"] = "Model S"; // Assign new value
myCar["year"] = 2021; // 2021
```
---
