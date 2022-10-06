
const userDao = require("../models/userDao");
const maskingFunc = require("../utils/maskingFunc");


//회원 삭제하기
const deleteUser = async (id) => {
  const seletedUser = await userDao.readUserById(id);

  if (seletedUser.length === 0) {
    const error = new Error("존재하지 않는 유저 id 입니다.");
    error.statusCode = 404;
    throw error;
  }

  if (seletedUser[0].deleted_at === null) {
    const maskedPhoneNumber = maskingFunc.phone(seletedUser[0].phone_number);
    const maskedName = maskingFunc.name(seletedUser[0].name);
    await userDao.updateUsersForDelete(id, maskedPhoneNumber, maskedName);
  } else {
    const error = new Error("이미 삭제 처리된 유저입니다.");
    error.statusCode = 400;
    throw error;
  }
};

//회원 목록과 정보 or 특정 회원 정보 가져오기
const userInfo = async (info) => {
  console.log("START userInfoService")
  if (info == undefined) {
    info = "null"
  }
  const userInfo = await userDao.userInfo(info)
  console.log("END userInfoService")
  return userInfo
}

//특정 회원정보 수정하기
const userUpdate = async (id, name, birth, phoneNumber, tall) => {
  console.log("START userUpdateService")
  const userUpdate = await userDao.userUpdate(id, name, birth, phoneNumber, tall)
  console.log("END userUpdateService")
  return userUpdate
}

module.exports = {
  userInfo,
  userUpdate,
  deleteUser,
};
