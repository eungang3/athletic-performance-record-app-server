const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.post('/signup', userController.userCreate)
router.get('/list', userController.userList)
router.patch('/patch',userController.userUpdate)
router.delete('/delete/:id',userController.userDelete)

module.exports = router
