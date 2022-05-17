## CSS
### `#<img>` Image tag
> 1. The image have `display: inline` by default. If you want the image to be align, <br/>
> `text-align: center` can help
> 2. The browser will keep the image ratio by default, changing the width or height will still keep the ratio.
---

## HTML
### `#<span>` Span Tag
> It's an inline element, which means that it won't wrap your text or distort it in any other way.

### `#<a download>` Download Attribute
#### With PDF
> Anchor Tag has a attribute `download` for downloading the file the `href` pointed to.
```html
<a href="html-css-basics-summary.pdf" download>Click here!</a>
```
> Without the `download` attribute, by clicking the link, google chrome will open a new tab for the PDF for preview by default.

### `#<a target="">` Target Attribute
> This attribute helps control the tab for opening the file preview window.
```html
<a href="html-css-basics-summary.pdf" target="_blank" download>Click here!</a>
```
> 1. `_blank` will open a new tag for the preview
> 2. `_self` will preview the file on the original page

### Emphasize the Content
#### With `#<em>` Emphasis Text
```html
<p This is an <em>emphasized text</em>.</p>
```
#### With `#<em>` Strong Tag
```html
<p This is an <strong>emphasized text</strong>.</p>
```

### `#<section>` Generic Sectioning Element
> With the `<section>` tag, it can wrap out a section of code and increasing the readibility, easier to maintain the codes.
---

## Showcase -- ([Task-1](/Code_Snippets/Task-1/index.html))
### Index.html
<img alt="index.html" src="/Code_Snippets/Task-1/showcase/index.png" />

---
