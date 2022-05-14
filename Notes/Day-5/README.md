## HTML
### #`<pre>` Preformatted Text
> This tag wrap any text to output it as plain text (that may include HTML code). <br/>
> When using `<pre>`, whitespace is also preserved and not ignored by the browser.

### #`<img />` Image Tag
> 1. The img tag is to embed an image in an HTML page. <br/>
> 2. It has no content, it's configured with attributes only.

#### The `alt=""` Attribute
> This `alt` attribute specifies an alternate text for an image if the image cannot be displayed.

---

## CSS
#### The `text-align` property
> This CSS property only modifies the content of a HTML element, and not the element itself, <br/>
> for example in a `<img />` HTML tag, it don't have a content inside a img tag. <br/>
> Therefore, this property won't affect the image.

#### Using a shared CSS file
> Be careful the order of referencing CSS file do matter when there've conflicts with the same CSS properties.

```html
<link rel="stylesheet" href="shared.css" />
<link rel="stylesheet" href="specified.css" />
```
> The latter one will override the properties of that element. 
If they've the same selector and same properties with difference values.
---

## File Naming Conventions
> 1. One important characteristic is that, normally all the filenames are all lowercase for both the HTML and CSS.
> 2. Use dashes (-) to replace the blanks between words.
> 3. Do not use special characters.
#### CSS
> For CSS files, in general, you'll either have a file that belong to a specific HTML file <br/>
or you have a global CSS files that are used in multiple / all HTML files.
