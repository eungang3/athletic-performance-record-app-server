const recordDao = require("../models/recordDao");

//유저 측정 기록 조회
const getUserRecord = async (userId) => {
  const record = await recordDao.getUserRecord(userId);
  for (const obj of record) {
    obj.datas = JSON.parse(obj.datas);
  }

  if (record.length === 0) {
    const error = new Error("측정기록이 없습니다.");
    error.statusCode = 404;
    throw error;
  } else {
    return record;
  }
};

//측정 기록 조회
const getRecord = async (recordId) => {
  const record = await recordDao.getRecord(recordId);
  for (const obj of record) {
    obj.datas = JSON.parse(obj.datas);
  }

  if (record.length === 0) {
    const error = new Error("측정기록이 없습니다.");
    error.statusCode = 404;
    throw error;
  } else {
    return record;
  }
};

//측정 기록 삭제
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

//유저 측정 기록 생성
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
    const error = new Error("어깨굴곡 또는 어깨신전이 입력되지 않았습니다.");
    error.statusCode = 400;
    throw error;
  }

  try {
    return await recordDao.createRecordData(userId, weight, measuredAt, typeId, figure);
  } catch (err) {
    const error = new Error("입력한 수치가 허용 범위를 벗어났습니다.");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  getUserRecord,
  getRecord,
  deleteRecord,
  createRecordData,
};
