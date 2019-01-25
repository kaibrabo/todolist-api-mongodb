const db = require("../models");

//  GET - all todos
exports.getTodos = function(req, res) {
    db.Todo.find()
    .then( todos => res.json(todos))
    .catch( err => res.send(err));
};

// GET - a specific todo
exports.getTodo = function(req, res) {
    db.Todo.findById(req.params.todoId)
    .then( foundTodo => res.json(foundTodo))
    .catch( err => res.send(err));
};

//  POST - create a todo
exports.createTodo = function(req, res) {
    db.Todo.create(req.body)
    .then( newTodo => res.status(201).json(newTodo))
    .catch( err => res.send(err));
};

// PUT - update a todo
exports.updateTodo = function(req, res) {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then( todo => res.json(todo))
    .catch( err => res.send(err));
};

// DLETE - delete a todo
exports.deleteTodo = function(req, res) {
    db.Todo.remove({_id: req.params.todoId})
    .then(() => res.json({message: "Deleted Message"}))
    .catch( err => res.send(err));
};

module.exports = exports;