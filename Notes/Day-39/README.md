## JavaScript
### Lexical Scope
> Refers to the accessibility of the variables, functions, and objects based on their physical location in the source code.
```js
let a = 'global';
  function outer() {
    let b = 'outer';
    function inner() {
      let c = 'inner'
      console.log(c);   // prints 'inner'
      console.log(b);   // prints 'outer'
      console.log(a);   // prints 'global'
    }
    console.log(a);     // prints 'global'
    console.log(b);     // prints 'outer'
    inner();
  }
outer();
console.log(a);         // prints 'global'
```
> The inner scope will keep looking for the variable on the outer scope until it finds the variable that're not inside the inner scope.

---

### Closure
> A closure gives you access to an outer function's scope from an inner function.
```js
function person() {
  let name = '';
  function displayName() {
    console.log(name);
  }
  function setName(str) {
    name = str;
  }
  return {
    displayName,
    setName
  }
}

const Tom = person();
Tom.setName("Tom");
Tom.displayName(); // output Tom
Tom.name = "Tom"; // not able to access this variable, will occur error
```
#### [Why we need closure](https://nissentech.org/why-do-we-need-closure/)
> We can create the private variable and private methods via closure.
> If we want the operation of the function is strictly followed, we can for example provide only one method for each variable to be changed or access.

---

### Benefits of Closure
> With the previous example's code base.
```js
const Tom = person();
const Andrew = person();

Tom.setName("Tom");
Andrew.setName("Andrew");

Tom.displayName();
Andrew.displayName();
```
> `Tom` and `Andrew` are both closures, they share the same function body definition, but they store the `name` in different lexical environments.<br/>
> Closure is useful where it allows you to associate to the same object type with different values applying on multiple variables.

---

### Most Common JavaScript Interview Question with Closure
```js
for(var i=0;i<3;i++) {
  setTimeout(() => {
    console.log(i); // output: 3 3 3
  }, 3000);
}
```
> With the previous knowledge of lexical scope and closure, the `var i = 0` is actually a global variable, where they're sharing a common variable `i` when logging out the value after 3 seconds.

---
