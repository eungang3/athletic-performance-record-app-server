const recordDao = require("../models/recordDao");

const getUserRecord = async (userId) => {
  const getRecordByUser = await recordDao.getUserRecord(userId);
  for (const obj of getRecordByUser) {
    obj.datas = JSON.parse(obj.datas);
  }

  if (getRecordByUser.length === 0) {
    const error = new Error("측정기록이 없습니다.");
    error.statusCode = 404;
    throw error;
  } else {
    return getRecordByUser;
  }
};

const getRecord = async (recordId) => {
  const getRecordById = await recordDao.getRecord(recordId);
  for (const obj of getRecordById) {
    obj.datas = JSON.parse(obj.datas);
  }

  if (getRecordById.length === 0) {
    const error = new Error("측정기록이 없습니다.");
    error.statusCode = 404;
    throw error;
  } else {
    return getRecordById;
  }
};

const deleteRecord = async (recordId) => {
  const record = await recordDao.deleteRecord(recordId);
  if (record.affectedRows) {
    return record;
  } else {
    const error = new Error("존재하지 않는 측정 기록 id입니다.");
    error.statusCode = 404;
    throw error;
  }
};

const createRecordData = async (userId, weight, measuredAt, typeId, figure) => {
  const TYPE = {
    SHOULDER_EXTENSION: 3,
    SHOULDER_FLEXION: 2,
  };

  const hasShoulderType = typeId.some((type) =>
    [TYPE.SHOULDER_EXTENSION, TYPE.SHOULDER_FLEXION].includes(type)
  );

  const isValidShoulderType =
    typeId.filter((type) => type === TYPE.SHOULDER_EXTENSION || type === TYPE.SHOULDER_FLEXION)
      .length === Object.keys(TYPE).length;

  if (hasShoulderType && !isValidShoulderType) {
    const error = new Error("SHOULDER_TYPE_ERROR");
    error.statusCode = 400;
    throw error;
  }

  try {
    return await recordDao.createRecordData(userId, weight, measuredAt, typeId, figure);
  } catch (err) {
    const error = new Error("The entered figure is out of the allowed range.");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = { getUserRecord, getRecord, deleteRecord, createRecordData };
