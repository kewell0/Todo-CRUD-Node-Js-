const router = require('express').Router();
const controller = require('../controller/todoController');


router.post('/', controller.createTodo);
router.get('/:id', controller.getTodo);
router.put('/:id', controller.updateTodo);
router.delete('/:id', controller.deleteTodo);
router.get('/', controller.getAllTodos);

module.exports = router;