## Node.js
### Serving Static files in Express.js
> To [serve static files](https://expressjs.com/en/starter/static-files.html) like CSS and JavaScript file in express, we can use the built-in middleware function `express.static` to link the root folder from which to serve the static assets.
1. For example, we're store the static assets in a root directory `public`
```
├── public
   ├── scripts
   │   └── responsive.js
   └── styles
       ├── index.css
       ├── recommend.css
       ├── restaurants.css
       └── shared.css
```
```js
const express = require('express');
const app = express();

app.use(express.static('public'));
// link the css and js directly in the html files
<link rel="stylesheet" href="/styles/shared.css" />
<script src="/scripts/responsive.js" defer />
```
2. You can get the static file directly via the url:
```console
http://localhost:3000/styles/shared.css
http://localhost:3000/scripts/responsive.js
```
> By default, there's NO files or folders of the server can be accessible to the public. You can only send back responds in the route.

---

### Parse Post Data and Store it
> To parse the form data from the user, we use `app.post()` method route to receive the data.
1. Remember to use the built-in middleware `express.urlencoded`
```js
app.use(express.urlencoded({ extended: false }));
```
2. Create the POST method route:
```js
// The name of the route can be same as the app.get() method
app.post('/InputPage', function(req, res) {
  const userData = res.body;
  const filePath = path.join(__dirname, 'data', 'userInput.json');
  // get an array of old user data from the file
  const storedUserData = JSON.parse(fs.readFileSync(filePath));
  storedUserData.push(userData);
  // write it back to the file
  fs.writeFileSync(filePath, storedUserData);
  
  // redirect the user to the confirm page
  res.redirect('/confirm');
});

app.get('/confirm', function(req, res) {
  ...
});
```

---

## Template Engine
> A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values. And transform the template into HTML file send to the client.
### [EJS](https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/#:~:text=EJS%20(Embedded%20JavaScript%20Templating)%20is,then%20used%20to%20generate%20HTML.)
> Embedded JavaScript Templating, it embed JavaScript code in a template language that is then used to generate HTML.
1. Install EJS via npm
```console
npm install ejs
```
2. setup [the view engine](https://www.educative.io/answers/what-is-a-view-engine-in-expressjs) to apply EJS with [express.set()](https://stackoverflow.com/questions/29961711/app-setviews-dirname-views-in-express-node-js) method
```js
// the first parameter of set method is not arbitrary
// with this 'views' set, we can then render our ejs file later on
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
```

---
