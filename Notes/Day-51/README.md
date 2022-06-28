## EJS Template
### [Include Partial Content](https://ejs.co/)
> For website development, often we're using a same component for multiple pages, it's great that we can reuse those content in multiple file without copy and paste into all files.
```js
// the dash syntax enable us to output unescaped value.
<%- include('includes/header') %>
```
> This `include()` function allow us to use other `.ejs` file to render HTML content.

#### You can also pass variable via `include()` methods
```js
<%- include('includes/students/student-item', { student: student }) %>
```

---

### EJS VSCode Extension
> Install a extension for EJS language support if you want to have a better syntax highlighting or emmet code snippet.

---

## Dynamic Routes
> It means we don't want to specify a static routes for the pages; it would be dynamically generated using data from API or other means.
### With the colon symbol `:`
> The colon `:` symbol can help the link to be arbitrary value following the pre-set format.
```js
app.get('/books/:bookId/users/:userId', function(req, res) {
  res.send(res.params);
});
// enter localhost:3000/books/book-4/users/ImK4Lok
// will output { 
  "books": "book-4",
  "users": "ImK4Lok",
}
```

### uuid - third-party package
> Help generating unique id.
```js
const uuid = reuiqre('uuid');
```
#### JS Tricks
> To add a new property of an object, just access a non-exist property name.
```js
const student = JSON.parse(...);
student.id = uuid.v4();
```

### Example
> To use the student id as part of the url.
app.get('/student/:id', function(req, res) {
    const studentId = req.params.id;
    res.render('student-detail', { sid: studentId });
});

---
