const userService = require("../services/userService");

const test = async (req, res, next) => {
  await userService.test();
  res.status(200).json({ message: "에러 핸들러 테스트" });
};

module.exports = {
  test,
};
