var express = require('express');

var router = express.Router();

var TodoController = require('../../controllers/todo.controller');

router.get('/', TodoController.getTodos);
router.post('/', TodoController.saveTodo);
router.put('/', TodoController.updateTodo);
router.delete('/', TodoController.removeTodo);

module.exports = router;