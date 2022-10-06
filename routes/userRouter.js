
const express = require("express")
const userController = require("../controllers/userController")


const router = express.Router()

router.get("/info", userController.userInfo)
router.patch("/patch",userController.userUpdate)

//회원 삭제하기 (비식별화 처리)
router.delete("/:id", userController.deleteUser);


module.exports = router
