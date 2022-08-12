# REST API
> Here will build a more complex REST API with four request types with a todo management application.

## Todo Management
> An application that allow user to CREATE, READ, UPDATE, DELETE their own todos.

## Postman
> It's a designed tool for testing API, it's an HTTP client that tests HTTP requests.
1. Select Raw and add JSON for setting header as `application/json`
2. Attach json data inside body with double quotes embraced
3. Send it to see if there's any issues

## Notes

### Mongodb Return Object
> When documents sucessfully created, mongodb returns a object that contain the Objectid of that documents.
```js
// models/Todo.js

async function saveDocument() {
  return await db.getDb().collection('todos').insertOne({ text: this.text });
}

// controllers/todo.controller.js

async function addTodo(req, res, next) {
  const text = req.body.text;
  
  const todo = new Todo(text);
  
  let insertedId;
  try {
    const result = await todo.save();
    insertedId = result.insertedId;
  }
  catch(error) {
    next(error);
  }

  // the insertedId is a mongodb Object which need to be converted to normal string.
  todo.id = insertedId.toString();
  
  res.json({
    message: 'todo added!',
    createdTodo: todo
  });
}

```

---

# Decoupled Web Architecture
> It means the codes of front end and back end are seperated, with no shared resources. Normally the backend side will provide data and allow frontend to manipulate the data via API with format like JSON.

## Advantage of Decoupled Architecture
> The advantages of seperating the frontend and backend are as follows:
1. Don't require an expert on full-stack to build up a web application
2. More innovative with not neccessarily be only one tech stack, enable diverse tech stack
3. With the way of providing data (APIs), it can be used in many devices, not only based on browser

---

# CORS
> CORS stands for Cross-Origin Resource Sharing, it's a server standard that controls whether receiving requests from others beside the original domains or not.
## Configure CORS in express.js
> Even tho express has its own CORS middleware, but we can still create our own to understand it under the hood.
```js
// middlewares/cors.js

function enableCORS(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*");
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS");
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type");
  next();
}
```

---
