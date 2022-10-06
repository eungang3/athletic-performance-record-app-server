const userService = require("../services/userService");

//회원 삭제하기
const deleteUser = async (req, res, next) => {
  await userService.deleteUser(req.params.id);
  res.status(200).json({ message: "유저 삭제 성공" });
};

//회원정보 등록하기
const registerUserInfo = async (req, res) => {
  const userDto = {...req.body};

  if(!userDto.name || !userDto.birth || !userDto.height || !userDto.phoneNumber){
    return res.status(400).json({message: "모든 정보를 기입해주세요."})
  }

  await userService.registerUser(userDto);
  
  return res.status(200).json({ message: "회원정보 등록 성공"});
};

module.exports = {
  deleteUser,
  registerUserInfo,
};
