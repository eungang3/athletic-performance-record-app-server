const userDao = require('../models/userDao');

//회원 정보 등록하기
const userCreate = async (name, birth, phoneNumber, tall) => {
  console.log('START createUserService')
  const users = await userDao.userCreate(name, birth, phoneNumber, tall)
  console.log('END createUserService')
  return users
};

//회원 목록과 정보 or 특정 회원 정보 가져오기
const userList = async (info) => {
  console.log('START userListService')
  if (info == undefined) {
    info = 'null'
  }
  const userList = await userDao.userList(info)
  console.log('END userListService')
  return userList
}

//특정 회원정보 수정하기
const userUpdate = async (id, name, birth, phoneNumber, tall) => {
  console.log('START userUpdateService')
  const userUpdate = await userDao.userUpdate(id, name, birth, phoneNumber, tall)
  console.log('END userUpdateService')
  return userUpdate
}

//특정 회원 삭제하기
const userDelete = async (id) => {
  console.log('START userDeleteService')
  const userDelete = await userDao.userDelete(id)
  console.log('END userDeleteService')
  return userDelete
}


module.exports = {
  userCreate,
  userList,
  userUpdate,
  userDelete,
};
