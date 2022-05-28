## CSS
### % Units
> Percentage values are always relative to another quantity. For example, 
> an element's length is relative to its parent element's length.

### [Box-sizing](https://css-tricks.com/box-sizing/)
> `box-sizing:border-box` property was created for better responsive design.
#### `content-box` - default
> This is the original box model. <br/>
> `width` or `height` + `padding` + `border` = actual `width` or `height`.

#### `border-box`
> This is the new one for fluid design. <br/>
> An element's specified width and height aren't affected by padding or borders. <br/>
> The content size will be flexible to fit in the specified width or height.

---

### To fit an Image
#### `object-fit:`
> The CSS `object-fit:` property is used to specify how an `<img` or `<video>` shoud be resized to fit its container.
> 1. `fill` - This is default. If necessary, the image will be stretched or squished to fit.
> 2. `contain` - The image keeps its aspect ratio, but is resized to fit within the given dimension. (Have white spaces)
> 3. `cover` - The image keeps its aspecet ratio and will be clipped to fit.
#### `height` & `width`
> In order to size every image into a same size in a container, we need to set its `height` to a specified value
> and `width: 100%`.
#### `overflow: hidden`
> When have a `border-radius` on a parent container of an image element, the image element won't automatically follow the `border-radius` property, it will overflow and display outof the container.

> To fix this, need to have property `overflow: hidden` inside the container to hidden the image overflow.

---

### Flex
#### [`flex-grow`](https://www.youtube.com/watch?v=YozReABRmzo)
> By default, every flex item is `flex-grow: 0;` which means they are not allow to grow or fill any free space that may be left over inside their parent container.

> If the flex items inside a some flex container with the same `flex-grow` value, their will share the same amount of space portion of their parent container.

#### [`flex-basis`](https://www.youtube.com/watch?v=qdf9Qa0xJe4)
> This property specifies the initial size of the flex item, before any available space is distributed according to the flex factors.

> By default, it's `flex-basis: auto;`. <br/>
> If the flex item don't have specified width, then it will assign the width to its min-width. <br/>


#### [`flex-shrink`](https://www.youtube.com/watch?v=tSdq8amjMso)
> 1. By default, when the web size decrease, the flex items will shrink into a same portion.
> 2. Also by default, the `flex-shrinkt: 1` will shrink the flex item and avoiding the overflow.

---

## [Project-2](/Code_Snippets/Project-2)
> Finished the highlighted section with the same size for multiple images and uses the object-fit to fit the images.

---
