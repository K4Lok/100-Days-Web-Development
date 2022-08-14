# Vue.js
> Get to know the vue frameworks more, with the basis that are able to leverage and create a simple todo app as well as interacting with the Mongo database.

## Vue Directives
> They're instructions (element attribute) for Vue.js that link with DOM element to do things in a certain way. It's prefixed by the clause `v-`
which helps the framework to know it's a special type of syntax used for performing some tasks.

There're some common used built-in directives like `v-if`, `v-for`, and `v-on` for example. These directives are highly enhanced the development process.

We can alos build our own custom directives if the built-in directives don't meet our needs.

## Handling Events
### Binding a event listener
> As we've mentioned the directives' functionality, it can also help with handling element event with the directive `v-on`, 
which we can also make it shorter with the shorthand symbol `@` instead of `v-on:`
```js
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

