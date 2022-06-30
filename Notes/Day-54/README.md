# JavaScript More Advanced
## Function [default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
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

## Indefine Number of Parameters for Function
> Sometime you wish to have a dynamic number of parameters for function because you don't want a fixed number and it's also not flexible as well. One of the solution can be passing an array as a parameters and iterate through it inside the function.
```js
function sumUp(numbers) {
  let total = 0;
  for(number of numbers) {
    total += number;
  }
  return total;
}
console.log(sumUp([1,3,5,7])); // output: 16
```
> However, sometimes people found it cumbersome to pass it with an array so that we've the second appoarch.
### [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
> JavaScript provides a way for us to allow function accepting an indefine number of arguments as an array.
```js
function sumUp(...numbers) {
  let total = 0;
  for(number of numbers) {
    total += number;
  }
  return total;
}
console.log(sumUp(1, 3, 5, 7); // output: 16
console.log(sumUp([1, 3, 5, 7]); // output: 01,3,5,7, which is not what we wanted
// if we want to pass an array instead, we can use the spread operator.
```

### []()
