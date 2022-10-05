const userService = require("../services/userService");

const test = async (req, res, next) => {
  await userService.test();
  res.status(200).json({ message: "에러 핸들러 테스트" });
};

//회원 삭제하기
const daleteUser = async (req, res, next) => {
  await userService.daleteUser(req.params.id);
  res.status(200).json({ message: "유저 삭제 성공" });
};

module.exports = {
  daleteUser,
  test,
};
