 const express = require("express");
 const router = express.Router();
 const db = require("../models");
 
//  GET - all todos
router.get('/', (req, res) => {
    db.Todo.find()
    .then( todos => res.json(todos))
    .catch( err => res.send(err));
});

// GET - specific todo
router.get('/:todoId', (req, res) =>{
    db.Todo.findById(req.params.todoId)
    .then( foundTodo => res.json(foundTodo))
    .catch( err => res.send(err));
});
 
//  POST - create todo
router.post('/', (req, res) => {
    db.Todo.create(req.body)
    .then( newTodo => res.status(201).json(newTodo))
    .catch( err => res.send(err));
});

// PUT - update todo
router.put('/:todoId', (req, res) => {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then( todo => res.json(todo))
    .catch( err => res.send(err));
});

// DELETE - delete single todo

 
 module.exports = router;