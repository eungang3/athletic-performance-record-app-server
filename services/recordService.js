const recordDao = require("../models/recordDao");

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

module.exports = {
  deleteRecord,
};
