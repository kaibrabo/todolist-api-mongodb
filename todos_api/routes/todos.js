 const express = require("express");
 const router = express.Router();
 const helpers = require("../helpers/todos.js");
 
router.route('/')
    .get(helpers.getTodos) // GET all todos
    .post(helpers.createTodo); // POST create new todo

router.route('/:todoId')
    .get(helpers.getTodo) // GET one specific todo
    .put(helpers.updateTodo) // PUT update one todo
    .delete(helpers.deleteTodo); // DELETE one specific todo

 module.exports = router;