## Final Project
> We have tackled the basic structure of the project so far, and should move on to the views (HTML pages) right now.

# EJS Template Engine
> Template engine let us to generate HTML markup with embedded plain JavaScript.
1. Install ejs
```console
npm install ejs
```
2. Set ejs as the Template Engine
```js
// app.js
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
```
> path package is recommended to use for having url resources, because it can help joining the path based on the OS.

# Create EJS Files
> Ready the necessary `.ejs` file for the view.
### head.ejs
> To store the head part of every HTML file, the title name, scripts, all the common shared resources we need.
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= pageTitle %></title>
```
### signup.ejs
```js
<%- include('../includes/head', { pageTitle: 'Signup' }) %>
</head>
<body>
    <%- include('../includes/header') %>
    <main>
        <h1>Create New Account</h1>
        <form action="" method="POST">
            <p>
                <label for="email">E-Mail</label>
                <input type="email" id="email" name="email" required>
            </p>
            // ...
            <button class="btn">Create Account</button>
            <p id="switch-form"><a href="/login">Login</a></p>
        </form>
    </main>
<%- include('../includes/footer'); %>
```
> So on and so forth with other view pages...

---

# Base CSS file
> Let's do some simple decoration for the view.
### Serving Static files - Middleware
> In order for the user to apply the css and javascripts sources, we need to serve it as a static file assets. And express has a built-in middleware function `express.static` to do so.
```js
app.use(express.static('public'));
```
We created a base.css under the directory `public` and folder `styles`, full path: `/public/styles/base.css`.
### Link the css file
```js
//head.ejs
<link rel="stylesheet" href="/styles/base.css">
```
> The path is based on the static path we set, and in this case the public directory is the root.
### Performance
> We can separate the css into multiple files based on components so that it won't waste the bandwidth for requesting the whole package of css which parts of the css might not be used.

---

