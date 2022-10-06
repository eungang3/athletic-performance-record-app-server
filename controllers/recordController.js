const recordService = require("../services/recordService");

//특정 유저 측정 기록 조회
const getUserRecord = async (req, res) => {
  const userId = req.params["userId"];
  const record = await recordService.getUserRecord(userId);
  res.status(200).json({ data: record });
};

//특정 측정 기록 및 데이터 조회
const getRecord = async (req, res) => {
  const recordId = req.params["recordId"];
  const record = await recordService.getRecord(recordId);
  res.status(200).json({ data: record });
};

//측정 기록 삭제
const deleteRecord = async (req, res) => {
  const recordId = req.params["recordId"];
  await recordService.deleteRecord(recordId);
  res.status(200).json({ message: "측정 기록 삭제 성공" });
};

//특정 회원에 대한 측정 기록과 데이터 생성
const createRecordData = async (req, res) => {
  const { userId } = req.params;
  const { weight, measuredAt, typeId, figure } = req.body;
  await recordService.createRecordData(userId, weight, measuredAt, typeId, figure);
  res.status(201).json({ message: "측정 기록,데이터 생성 성공" });
};

module.exports = {
  getUserRecord,
  getRecord,
  deleteRecord,
  createRecordData,
};
