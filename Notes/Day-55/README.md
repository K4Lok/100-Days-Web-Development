# JavaScript
## Custom Error Handling
> Sometimes we might expects an error and want the program keep on running without interrupting, we can use the `try`-`catch` statement to do certain things depend on error occur or not.
```js
function myAction(path) {
  try {
    const fileContent = fs.readFileSync(path);
  }
  catch(error) {
    console.log(error.message);
  }
}

myAction(); //
```

---

## Class
> Classes are simply a template for creating objects. It's a built-in Prototypes in JS.
1. Class declarations
```js
class Rectangle {
  // constructor can helps pass values into the variable of an object of this class
  constructor(height, weight) {
    // assign arguments value to the variable of the object of this class
    this.height = height;
    this.weight = weight;
  }
}
```
2. Creating object of the class
```js
const newRectangle = new Rectangle(); // this'll occur in error if you don't pass the necessary parameters
const newRectangle = new Rectangle(10, 32);
```

### Methods
> Class also works the same way with object when having methods. Where it allow you to run more customized function.
1. Declaring methods
```js
class Rectangle {
  constructor() {
    ...
  }
  setHeight(height) {
    this.height = height;
  }
  getHeight() {
    return this.height;
  }
}
```
2. Invoke the methods
```js
const myRectangle = new Rectangle(1, 4);
myRectangle.setHeight(100);
console.log(myRectangle.getHeight()); // output: 100
```

---

## Destructuring Objects & Arrays
