const userService = require('../services/userService');

//회원 정보 등록하기
const userCreate = async (req, res) => {
  console.log('START createUserController')
  const { name, birth, phoneNumber, tall } = req.body
  const userCreate = await userService.userCreate(name, birth, phoneNumber, tall)
  console.log('END createUserController')
  res.status(200).json({ message: '회원 정보 등록 완료' })
}

const userList = async (req, res) => {
  console.log('START userListController')
  const {info} = req.query
  const userList = await userService.userList(info)
  console.log('END userListController')
  res.status(200).json({userList : userList})
}

const userUpdate = async (req, res) => {
  console.log('START userUpdateController')
  const { id, name, birth, phoneNumber, tall } = req.query
  const userUpdate = await userService.userUpdate(id, name, birth, phoneNumber, tall)
  console.log('END userUpdateController')
  res.status(200).json({ message: '정보 수정 완료' })
}

const userDelete = async (req, res) => {
  console.log('START userDeleteController')
  const { id } = req.params
  const userDelete = await userService.userDelete(id)
  console.log('END userDeleteController')
  res.status(200).json({ message: '회원 삭제 완료' })
}


module.exports = {
  userCreate,
  userList,
  userUpdate,
  userDelete,
};
