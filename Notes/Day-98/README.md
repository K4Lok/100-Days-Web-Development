# Frontend JavaScript Frameworks
> A JavaScript framwork is a collection of JavaScript code library that helps developers to be more productive and makes the code base more structured and readable.

## Why using Frameworks
> Pure JavaScript can be so complicated and messy when the project scales, we have to manage every DOM element on our own when we need to update or delete the element. 
The frontend framework can help us finish the boring procedures behind the scenes and let us focus on what is matter.

## Imperative Programming
> It's the approach of coding where you spell out all the steps to implement your goal, you show the flows of your steps on how to finish a task.

## Declarative Programming
> It's also a way of thinking of coding, you will hide mostly the steps and only display what you want to implement. In short, you abstract the steps into a readable function name and implement the goal.

## Differences
> Both of them achieve the same goal, but with different approach of showing in the code project. 
And when we're using the frontend framework, it's more likely we're using the declarative approach where the framework will help tackle the steps for you.

---

## 3 Most Popular Frameworks
1. React
2. Vue
3. Angular

# Vue.js
> Here we will try vue to see the differences between a framework and vanilla JavaScript.

## Set up Vue.js
> There're [ways](https://vuejs.org/guide/quick-start.html#with-build-tools) of getting vue into the project. 1) Initialize and install the vue packages into your project directory. 2) Get the vue package via CDN.

## Quick Start
> It's much more clear and simple to use vue.js instead of vanilla JavaScript.

A todo app for example:
```js
// app.js
import { createApp } from 'vue'

const TodoApp = {
  data() {
    return {
      newTodoText: 'Testing'
    };
  }
};

// of coz we need the container id to manipulate the DOM element
createApp(TodoApp).mount('#todo-app');
```

## String Interpolation
> When we were leanring node.js, they got the template engine to replace some keyword in the template with variable that passed in. And almost every framework has similar mechanism to do so.
```js
<div id="todo-app">
  <h1>{{ newTodoText }}</h1>
</div>
```

## Listening to Events and Two-Way-Binding
> Adding Event Listening is much more easier in Vue, we just need to add a `@` with the name of the event we want to handle. And for two-way-binding, either way of used place changed, the other will be changed as well.
```js
<div ...>
  // here we can have an inline function as well, not necessarily has to be a function
  <form @click="addTodo">
    <input type="text" id="text" v-model="newTodoText" required/>
  </form>
</div>
```
```js
// app.js

const TodoApp = {
  data() {
    return {
      newTodoText: '',
      enteredText: '',
    };
  },
  methods: {
    addTodo(event) {
      event.preventDefault();
      this.newTodoText: this.enteredText;
      this.enteredText = '';
    }
  }
};
```

---
