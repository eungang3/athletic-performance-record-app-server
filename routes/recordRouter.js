const express = require("express");
const router = express.Router();
const recordController = require("../controllers/recordController");
const auth = require("../middlewares/auth");

//특정 회원의 측정 기록 조회
router.get("/users/:userId", auth.checkUser, recordController.getUserRecord);

//측정 기록 및 데이터 조회
router.get("/:recordId", recordController.getRecord);

//측정 기록 삭제
router.delete("/:recordId", recordController.deleteRecord);

//특정 회원에 대한 측정 기록 & 데이터 생성
router.post("/:userId", recordController.createRecordData);

module.exports = router;
