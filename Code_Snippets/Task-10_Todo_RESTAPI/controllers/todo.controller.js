const Todo = require('../models/Todo');

async function getAllTodos(req, res, next) {
    let todos;
    try {
        todos = await Todo.getAllTodos();
    }
    catch(error) {
        return next(error);
    }

    res.json({
        todos: todos
    });
}

async function addTodo(req, res, next) {
    if(!req.body.text) {
        return res.status(409).json({
            message: 'add failed'
        })
    }
    const text = req.body.text;

    const todo = new Todo(text);

    let insertedId;
    try {
        const result = await todo.save();
        insertedId = result.insertedId;
    }
    catch(error) {
        return next(error);
    }

    todo.id = insertedId.toString();

    res.json({
        message: 'todo added!',
        createdTodo: todo
    })
}

async function updateTodo(req, res, next) {
    const todoId = req.params.id;

    const updatedText = req.body.updateText;

    const todo = new Todo(updatedText, todoId);

    try {
        const result = todo.save();
    }
    catch(error) {
        return next(error);
    }

    return res.json({
        message: 'todo udpated',
        updatedTodo: todo
    });
}

async function deleteTodo(req, res, next) {
    const todoId = req.params.id;

    const todo = new Todo(null, todoId);

    try {
        await todo.delete();
    }
    catch(error) {
        return next(error);
    }

    return res.json({
        message: 'todo deleted'
    });
}

module.exports = {
    getAllTodos: getAllTodos,
    addTodo: addTodo,
    updateTodo, updateTodo,
    deleteTodo: deleteTodo
}