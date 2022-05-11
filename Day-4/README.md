## CSS
### CSS Pseudo-classes
> It's a keyword added to a selector that specifies a special states of the selected element(s).
```html
<style>
  a:hover{
    cursor: grab;
    text-decoration: underline dotted blueviolet;
  }
</style>
```
> The `:hover` in this case is the pseudo-class can be used to change a button's style<br/>
when the user's cursor hovers over it.

> The `cursor:` property can modify the user's cursor [(details)](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).

### Why it's named Cascading Style Sheets
> Because we can have multiple CSS rules that affect the same element. <br/>

> By Wiki, The name cascading comes from the specified priority scheme to determine which style rule applies 
if more than one rule matches a particular element [(Wiki)](https://en.wikipedia.org/wiki/CSS#:~:text=The%20name%20cascading%20comes%20from,Wide%20Web%20Consortium%20(W3C).). 

### CSS ID Selector
> So as the Type Selector, ID Selector modify the style of the unique element.
```css
#para-1 {
  font-weight: bold;
}
```
> A ID Selector start with a `#`, like `#ID-Name` for say.

### CSS Sizes & Size Units
#### Device-Independent Pixels (px)
> It will automatically scale the pixels regardless of the resolution quality of the device.<br/>
(Low Resolution Device and High Resolution Device are the same under the Device-Independent Pixels)

> It's absolute and perform the same scale on different devices.

#### Relative Size Units
> `rem`, `%`

### CSS Fallback Fonts
> It make sure to have a back up fonts to use when your prioritized fonts no working in the first place.

`font-family: 'Macondo', sans-serif`

> The `font-family` property parse from left to right.

---

## HTML
#### Store the CSS Code in a External File
> In terms of readability, a btter approach would be keeping your css code out of the html files.

> Link it with the link tag `<link>` in the html file, since there's no content, it don't need a closing tag.
### #`<link>` Link Tag
```html
<html>
  <head>
    <link rel="stylesheet" href="d4.css"> // "location of the file"
  </head>
</html>
```
> 1. Link Tag can also be used for other purposes with the `rel` attribute [(details)](https://www.w3schools.com/tags/att_link_rel.asp).
> 2. The `href` attribute specifies the location of the linked document.

### #`id=""` ID Attribute
> It's used to specify a unique id for an HTML element. Then later on you can modify the unique element with CSS or Javascript.
```html
<body>
  <p id="para-1">Testing Text</p>
</body>
```

### Adding Font-family
> Here we use [Google Fonts](https://fonts.google.com/) 
as the example.
1. Selected the fonts you want to apply on your website.
2. Add it to your html file via `<link>` attribute.
3. Use it in the CSS file.
4. Instructions can be found from Google Fonts.
---


