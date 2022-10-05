const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

//에러 핸들러 테스트
router.get("/test", userController.test);

module.exports = router;
