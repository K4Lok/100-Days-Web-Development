## Javascript Object Methods
> Methods are actions that can be performed on objects. <br/>
> In short, it's a function inside an object.
### Declare an Object Methods
```js
const person = {
  name: "Tom",
  getName: function() {
    return this.name;
  },
  //OR
  getName() {
    return this.name;
  },
}

```

---

## Javascript Console Log
> It's a built-in method used to print any kind of variables (an array, an object or any message) defined in JS.
```js
let age = 18;
console.log(age); // print out 18 on the console window
```

---

## Operators
### Assignment Operators
1. Assignment `=`
```js
let x = 10;
```
> Ex: `+=`, `-=`, `*=`...

### Arithmetic Operators
1. Addition `+`
```js
x + 10; // 20
```
2. Subtraction `-`
```js
x - 10; // 0
```
3. Multiplication `*`
```js
x * 2; // 20
```
4. Exponentiation `**`
```js
x ** 2; // 100
```
5. Division `/`
```js
x / 2; // 5
```
6. Modulus (Division Remainder) `%`
```js
x % 4; // 1
```

---

## String
### Adding String
```js
let firstName = "Hello";
let lastName = "World";
console.log(firstName + lastName); // output "HelloWorld"
console.log(firstName + " " + lastName); // output "Hellow World"
```
