const express = require("express");
const userRouter = require("./userRouter");
const recordRouter = require("./recordRouter");
const router = express.Router();

router.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

router.use("/records", recordRouter);
router.use("/users", userRouter);

module.exports = router;
