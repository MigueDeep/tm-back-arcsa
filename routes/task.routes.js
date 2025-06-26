const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const validate = require('../middlewares/validate.middleware');
const { registerTaskSchema } = require('../validators/task.validator');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware);

router.post('/register', validate(registerTaskSchema), taskController.createTask);
router.get('/byUserId', taskController.getTasksbyUserId);
router.put('/:id', validate(registerTaskSchema), taskController.updateTask);
router.delete('/delete/:id', taskController.deleteTask);

module.exports = router;