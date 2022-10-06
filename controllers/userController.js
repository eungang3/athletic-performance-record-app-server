const userService = require("../services/userService");

//회원 삭제하기
const deleteUser = async (req, res, next) => {
  await userService.deleteUser(req.params.id);
  res.status(200).json({ message: "유저 삭제 성공" });
};

//회원 목록과 정보 or 특정 회원 정보 가져오기
const userInfo = async (req, res) => {
  const { info } = req.query;
  const userInfo = await userService.userInfo(info);
  console.log("END userInfoController");
  res.status(200).json({ userInfo: userInfo });
};

//특정 회원정보 수정하기
const userUpdate = async (req, res) => {
  const { id, name, birth, phoneNumber, tall } = req.query;
  const userUpdate = await userService.userUpdate(id, name, birth, phoneNumber, tall);
  console.log("END userUpdateController");
  res.status(200).json({ message: "정보 수정 완료" });
};

//회원정보 등록하기
const registerUserInfo = async (req, res) => {
  const userDto = { ...req.body };

  if (!userDto.name || !userDto.birth || !userDto.height || !userDto.phoneNumber) {
    return res.status(400).json({ message: "모든 정보를 기입해주세요." });
  }

  await userService.registerUser(userDto);

  return res.status(200).json({ message: "회원정보 등록 성공" });
};

module.exports = {
  userInfo,
  userUpdate,
  deleteUser,
  registerUserInfo,
};
