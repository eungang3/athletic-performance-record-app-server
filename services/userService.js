const userDao = require('../models/userDao');

const test = async () => {
  const error = new Error("테스트");
  error.statusCode = 500;
  throw error;
};

//회원 목록과 정보 or 특정 회원 정보 가져오기
const userInfo = async (info) => {
  console.log('START userInfoService')
  if (info == undefined) {
    info = 'null'
  }
  const userInfo = await userDao.userInfo(info)
  console.log('END userInfoService')
  return userInfo
}

//특정 회원정보 수정하기
const userUpdate = async (id, name, birth, phoneNumber, tall) => {
  console.log('START userUpdateService')
  const userUpdate = await userDao.userUpdate(id, name, birth, phoneNumber, tall)
  console.log('END userUpdateService')
  return userUpdate
}

module.exports = {
  test,
  userInfo,
  userUpdate,
};
