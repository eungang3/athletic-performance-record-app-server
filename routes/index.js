const express = require("express");
const userRouter = require("./userRouter");
const router = express.Router();

router.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

router.use("/user", userRouter);

module.exports = router;
