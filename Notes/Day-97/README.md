# REST API
> Here will build a more complex REST API with four request types with a todo management application.

## Todo Management
> An application that allow user to CREATE, READ, UPDATE, DELETE their own todos.

## Notes
### WHen documents sucessfully created, mongodb returns a object that contain the Objectid of that documents.
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
    insertedId = result.insertId;
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

# Decoupled Frontend
