const express = require('express');
const router = express.Router();
const eventController = require('../controller/taskController');

router.post('/task', eventController.createTask);
router.get('/task', eventController.getTasks);
router.get('/task/:taskId', eventController.getTask);
router.delete('/task/:taskId', eventController.deleteTask);
router.put('/task/:taskId', eventController.updateTask);
router.get('/task/title/:taskTitle', eventController.getTaskByTitle);
module.exports = router;