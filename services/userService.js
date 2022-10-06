
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
  if (info == undefined) {
    info = "null"
  }
  const userInfo = await userDao.userInfo(info)
  return userInfo
}

//특정 회원정보 수정하기
const userUpdate = async (id, name, birth, phoneNumber, tall) => {
  const userUpdate = await userDao.userUpdate(id, name, birth, phoneNumber, tall)
  return userUpdate
}

//회원정보 등록하기
const registerUser = async (userDto) => {
  const birthForm = /^(19[0-9][0-9]|20\d{2})-?(0[0-9]|1[0-2])-?(0[1-9]|[1-2][0-9]|3[0-1])$/;
  const phoneNumberForm = /^010-?([0-9]{4})-?([0-9]{4})$/;

  if (!birthForm.test(userDto.birth)) {
    const error = new Error('생년월일 형식이 올바르지 않습니다.');
    error.statusCode = 409
    throw error
  }

  if (!phoneNumberForm.test(userDto.phoneNumber)) {
    const error = new Error('전화번호 형식이 올바르지 않습니다.');
    error.statusCode = 409
    throw error
  }

  await userDao.createUser(userDto);
};

module.exports = {
  userInfo,
  userUpdate,
  deleteUser,
  registerUser,
};
