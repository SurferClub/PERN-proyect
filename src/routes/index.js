const { Router } = require('express');
const router = Router();

const { getTasks, getTaskId, createTask ,updateTask , deleteTask } = require('../controllers/index.controller');

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskId);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask);

module.exports = router; 


