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
