const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

//회원 삭제하기 (비식별화 처리)
router.delete("/:id", userController.deleteUser);

//회원정보 등록
router.post("/register", userController.registerUserInfo);

module.exports = router;
