const {Router} = require('express')
const {getToDo,saveToDo, updateToDo, deleteToDo} = require("../controlers/ToDoControler")
const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.delete('/delate/:_id', deleteToDo)

module.exports = router;