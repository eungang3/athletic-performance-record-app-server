const userService = require("../services/userService");

//회원 삭제하기
const deleteUser = async (req, res, next) => {
  await userService.deleteUser(req.params.id);
  res.status(200).json({ message: "유저 삭제 성공" });
};

module.exports = {
  deleteUser,
};
