const express = require("express");
const router = express.Router();
const recordController = require("../controllers/recordController");

router.delete("/:recordId", recordController.deleteRecord);
module.exports = router;
