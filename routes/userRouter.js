const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

//에러 핸들러 테스트
router.get("/test", userController.test);

//회원 삭제하기 (비식별화 처리)
router.delete("/:id", userController.daleteUser);

module.exports = router;
