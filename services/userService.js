const userDao = require("../models/userDao");
const maskingFunc = require("../utils/maskingFunc");

const getUserRecord = async (id) => {
  const getRecordByUser = await recordDao.getUserRecord(id);
  for (const obj of getRecordByUser) {
    obj.datas = JSON.parse(obj.datas);
  }

  if (getRecordByUser.length === 0) {
    const error = new Error("NO_DATA");
    error.statusCode = 404;
    throw error;
  }

  return getRecordByUser;
};

const getRecord = async (id) => {
  const getRecordById = await recordDao.getRecord(id);
  for (const obj of getRecordById) {
    obj.datas = JSON.parse(obj.datas);
  }

  if (getRecordById.length === 0) {
    const error = new Error("NO_DATA");
    error.statusCode = 404;
    throw error;
  }

  return getRecordById;
};

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

module.exports = { getUserRecord, getRecord, deleteUser };
