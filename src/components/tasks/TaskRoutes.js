const router = require('express').Router()
const TaskController = require('./TaskController')
router.get('/getTasks',TaskController.getTasks )
router.post('/addTask',TaskController.addTask )
router.delete('/deleteTask',TaskController.deleteTask )
router.put('/updateTask/:id',TaskController.updateTask )





module.exports = router