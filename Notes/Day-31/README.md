## Javascript String
### Backticks String
```js
let userName = `Max`;
// The line break and spaces will also take place to store in the variable.
let brokeName = `M
   a
  x`;
```

---

## Javascript Object
#### 3 ways to [access](https://dmitripavlutin.com/access-object-properties-javascript/) Object Property
> If the property is not exist, it will return `undefined`.
```js
const foundedYear = {
  microsoft: 1975,
  google: 1998,
  tesla: 2003,
  facebook: 2004,
}

```
### 1. Dot property accessor
```js
log(foundedYear.microsoft); //
log(foundedYear.google); // 1998
log(foundedYear.facebook); // 2004
log(foundedYear.tesla);
```

### 2. Square brackets property accessor
```js
log(foundedYear["microsoft"]; // 1975
log(foundedYear["tesla"]; // 2003
```
### 3. Object destructuring
```js
const { google } = foundedYear;
log(google); // 1998
const { tesla, facebook } = foundedYear;
log(tesla); // 2003
log(facebook); // 2004
```

---

## Javascript Function
> A function is a block of code designed to perform a particular task.
```js
function myFunction(p1, p2) {
   return p1 * p2;
}
```
> Local variables can only be accessed from within the function.
---
