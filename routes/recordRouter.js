const express = require("express");
const router = express.Router();
const recordController = require("../controllers/recordController");
const auth = require("../middlewares/auth");

router.get("/users/:userId", auth.checkUser, recordController.getUserRecord);
router.get("/:recordId", recordController.getRecord);

router.delete("/:recordId", recordController.deleteRecord);

router.post("/:userId", recordController.createRecordData);

module.exports = router;
