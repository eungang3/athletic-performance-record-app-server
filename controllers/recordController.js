const recordService = require("../services/recordService");

const getUserRecord = async (req, res) => {
  const userId = req.params["userId"];
  const getRecordByUser = await recordService.getUserRecord(userId);
  res.status(200).json({ data: getRecordByUser });
};

const getRecord = async (req, res) => {
  const recordId = req.params["recordId"];
  const getRecordById = await recordService.getRecord(recordId);
  res.status(200).json({ data: getRecordById });
};

const deleteRecord = async (req, res) => {
  const recordId = req.params["recordId"];
  await recordService.deleteRecord(recordId);
  res.status(200).json({ message: "측정 기록 삭제 성공" });
};

module.exports = { getUserRecord, getRecord, deleteRecord };
