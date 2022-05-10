## HTML
> 1. Line breask in the code is ignored by the browser by default.
> 2. Nesting HTML Elements is common.

#### HTML History
1. HTML1: `1993`
2. HTML2: `1995`
3. HTML3: `1997`
4. HTML4: `1999`
5. HTML5: `2014`

### #`<a>` Anchor Tag
This is a link to [Google](https://google.com).

```html
<body>
  <p>
    This is a link to <a href="https://www.google.com">Google</a> 
    // `href` -> Hyperlink Reference
  </p>
</body>
```

### HTML Document Skeleton
```html
<!DOCTYPE html> // HTML Version
  <html>
    <head> // Page Metadata -> Information of the page
      <title>My Page</title> // The title on the browser tab
    </head>
    <body> // Page Content
      <h1>Welcome!</h1>
    </body>
  </html>
```

### #`<!--` Comment Tag
```html
<body>
  <h1>This is a main title!</h1>
  <!-- This is a comment - the browser ignores it. It won't show on the user's screen -->
</body>
```
---

## CSS
> Doing the styling attribute in the HTML opening tag is not efficient when it comes to a larger project. <br/>
> It's hard to maintain and not realistic to make a change for the same style of elements.

### #`<style>` Global Style Tag
```html
<style>
  h1 {
    color: #FFF;
    font-family: verdana;
    font-size: 200%;
  }
</style>
```

#### CSS Selector
> In this case: it's a "Type Selector", slects by element type 'h1'.

#### CSS Rules
> In this case: the CSS Properties and Values are the CSS Rules within the curly braces {}.

### #`/* */` CSS Comments
```css
p {
  color: red; /* Set text color to red */
}
```
---

## VSCode
### Emmet Abbreviation
> It's a built-in function in VSCode, it will auto complete a bunch of html element with some keywords. <br/>
> For more [details](https://code.visualstudio.com/docs/editor/emmet).

### VSCode Extension
#### Code Formatter
> Search Extension -> `Prettier - Code formatter` <br/>

Set the default formatter: <br/>

> Preferences -> Settings -> Search Bar: format -> Editor: Default Formatter: esbenp.prettier-vscode

Usage: <br/>

> 1. CMD + Shift + P -> Format Document <br/>
>  Or
> 2. Shift + Option + F 
> (Check the Keyboard Shortcuts: Preferences -> Keyboard Shortcuts)
---
