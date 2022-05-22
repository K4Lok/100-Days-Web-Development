## HTML
### Website Structure
> To begin with out new website, should better consider the structure of it. <br/>
> Semantic Tag makes the HTML more comprehensible by better defining the different sections and layout of web pages. <br/>
> It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content. <br/>
> For more details, [Link-1](https://www.pluralsight.com/guides/semantic-html) and [Link-2](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure).

---
### Non-semantic Element
> `<span>` is a comman non-semantic element and also a inline-element can be used when you can't find of a semantic element to fit the content.

> `<div>` is also a comman non-semantic element and a block-element.

---

## CSS
### `text-transform:`
> To transform to text to capital, all uppercase or all lower case etc...

### `text-shadow:`
> Just like the `box-shadow:`, to add some shadow on the horizontal and the vertical offset with the blur radius.

---

## CSS [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology)
### Introduction
> The main idea behind the flex layout is to give the container the ability to alter it's items' width/height (and order) 
> to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). <br/>
> We've to define a flex container in order to manipulate the item inside it, and this container is the direct parent of the flex items.

### Flexbox layout
![Flex-layout](flex-layout.svg)
> Items will be laid out following either the main axis (from main-start to main-end) or the cross axis (from cross-start to cross-end). <br/>
> However, the direction of main axis and cross axis can be changed with the property `flex-direction:`.

### Implement
> To defines a flex container: <br/>
```css
.container {
  display: flex;
}
```

### `flex-direction:`
> This rule defines the direction flex items are placed in the flex container.
```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### `flex-wrap:`
> By default, flex items will all try to fit onto one line, thus by changing the window size, it will still stick on the same line. <br/>
> To fix this, use the `flex-wrap: wrap` to wrap onto multiple lines when there's out of available space.
```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

### `flex-flow:`
> This is a combination of the `flex-direction` and `flex-wrap` properties.
```css
  .container {
    flex-flow: column wrap;
  }
```

### `justify-content:`
> This property defines how the browser distributes space between and around content items along the main axis of a flex container.

---

## [Project-2](/Code_Snippets/Project-2)
> So far finish the layout of the nav bar with flexbox.



___
