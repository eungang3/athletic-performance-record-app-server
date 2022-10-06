const recordService = require("../services/recordService");

const deleteRecord = async (req, res) => {
  const recordId = req.params["recordId"];
  await recordService.deleteRecord(recordId);
  res.status(200).json({ message: "측정 기록 삭제 성공" });
};

module.exports = {
  deleteRecord,
};
