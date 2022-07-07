# Project-4
## Get access to MySQL Database
> To get access to a MySQL Database, we can use some database driver to do so.

## [MySQL2](https://www.npmjs.com/package/mysql2)
> It's a MySQL client for Node.js with focus on performance.
### Getting started
1. Install the package
```console
npm install --save mysql2
```
2. Create a Connections Pool
```js
const mysql = require('mysql2');
// This could works too, but there's only 1 connections and all the query need to be queued.
const connection = mysql.CreateConnection({...}); 
// Instead, we use the CreatePool for asynchronously.
const pool = mysql.CreatePool({
  host: 'localhost',
  database: 'blog',
  user: 'root',
  password: 'xxxxxx'
});
```
3. Then exports and require it in the main file
```js
// database.js
...
module.exports = pool;

// blog.js
const db = require('database.js');
```
4. Then we can do the query with it
```js
// to get the result by using array destructuring
const [authors] = db.query('SELECT * FROM authors');
// outputs: [
//  { id: 1, name: 'Elon Musk', email: 'elonmusk@tasla.com' },
//  { id: 2, name: 'Steve Jobs', email: 'stevejobs@apple.com' },
//  { id: 3, name: 'Ma Yun', email: 'mayun@alibaba.com' }
// ]
```
5. MySQL2 also works with promise
```js
// database.js
const mysql = require('mysql2/promise');

// blog.js
router.get('/new-post', aysnc function(req, res) {
  const [authors] = await db.query('SELECT * FROM authors');
  res.render('create-post', {authors: authors});
});
```
---

### Insert Data
> The MySQL2 driver has some built-in function for replacing query statement with special symbol `?`.
```js
// get a POST form request
router.post('/new-post', aysnc function(req, res) {
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
  ];
  await db.query('INSERT INTO posts (title, summary, content, author) VALUES (?)', [data]);
  res.redirect('/posts');
});
```

---

### Fetching Data
> 

---
