## JavaScript More Advanced
### Function default Parameters
> Default parameters can be handy when you want to have a optional parameters where you set a base value for the parameters so that it's not necessary to pass the parameters when calling a function.
```js
function sumA(a, b) {
  return a + b;
}
console.log(sumA(2)); // NaN (refers to not a number) -> 2 + undefined

function sumB(a, b = 5) {
  return a + b;
}
console.log(sumB(2)); // 7
```
> Variables without setting default value will result in undefined in the later access if you didn't pass the value.

---

### Rest Parameters
