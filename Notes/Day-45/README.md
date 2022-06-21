## Third-Party Packages
### CSS Packages
> Normally their are CSS framwork (package) that provides dozens of pre-built component styles.
#### Popular CSS Packages
1. Bootsrap
2. Material UI
3. Tailwind CSS

### JavaScript Packages
> Unlike with CSS Packages, it's less about choosing "one packages for everything".<br/>
> JS Packages often only used for solving specific demand.

---

## Bootstrap Usage
> Based on the documentations from the official webpage, you can link the stylesheet via the [`cdn`](https://www.cloudflare.com/en-gb/learning/cdn/what-is-a-cdn/)
(which is the content delivery network refers to many servers in different part of the world working together to provide fast delivery of Internet content.

```js
// The Bootstrap CSS for example
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
```

> Sometime the components from those CSS framework also requires correcsponding javascript to work out, by that time, we need to link the javascript file they provide as well.
```js
// The Bootstrap CSS for example
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous" defer></script>
```

---
