const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/info', userController.userInfo)
router.patch('/patch',userController.userUpdate)

module.exports = router
