# Vue.js
> Get to know the vue frameworks more, with the basis that are able to leverage and create a simple todo app as well as interacting with the Mongo database.

## Vue Directives
> They're instructions (element attribute) for Vue.js that link with DOM element to do things in a certain way. It's prefixed by the clause `v-`
which helps the framework to know it's a special type of syntax used for performing some tasks.

There're some common used built-in directives like `v-on`, `v-for`, and `v-if` for example. These directives are highly enhanced the development process.

We can alos build our own custom directives if the built-in directives don't meet our needs.

---

## Handling Events
### Binding a event listener
> As we've mentioned the directives' functionality, it can also help with handling element event with the directive `v-on`, 
which we can also make it shorter with the shorthand symbol `@` instead of `v-on:`
```vue
<button v-on:click="clickHandler"></button>
// or
<button @click="clickHandler"></button>
```
### Creating the handler function
> Handler function can be created inside the Vue object under the `methods` property.
```js
const { createApp } = Vue;

const MyApp = {
  data() {
    //...
  },
  methods: {
    clickHandler(event) {
      event.preventDefault();
      console.log(event);
    }
  }
};
```

---

## Display Element Conditionally
> It's common that we want to display different content based on whether the dynamic data is existed or not, here we can use the `v-if` and `v-else` directives to display or not based on the condition.

```vue
<section id="todos">
  <p v-if="todos.length === 0">No todos added yet - maybe start adding some?</p>
  <ul v-else id="todos-list">
  //...
  </ul>
</section>
```
Here just keep in mind the if else directives must be direct sibling elements.

---

## List Rendering
> This come to place when we want to generate and display dynamic list of data in the view, vue uses the `v-for` directive to iterate through an array and render a list. And this directive requires a special syntax in the form of `item in items`.
```vue
<section>
  <ul>
    <li v-for="item in items">
      <p>{{ item.title }}</p>
    </li>
  </ul>
</section>
```

## Update and Delete Data
> Vue will help us to manipulate the DOM behind the scenes based on the content of the array, it will add new element when the array is pushed, and delete element when the content of the array is removed.

So if we delete the content inside an array, vue will help us remove the elements in the DOM, and of course the elements must be render by an array with directive `v-for`.

Here's a Delete Todo example:
```vue
<button @click="deleteTodo(todo.id)">Delete</button>
```
```js
//...
  methods: {
    //...
    deleteTodo(todoId) {
      this.todos = this.todos.filter( todoItem = > {
        return todoItem.id !== todoId;
      });
    }
  }
```

---
