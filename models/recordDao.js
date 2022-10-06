const myDataSource = require("./db.config");

const deleteRecord = async (recordId) => {
  return await myDataSource.query(
    `DELETE FROM records
    WHERE records.id = ${recordId}`
  );
};

const createRecordData = async (userId, weight, measuredAt, typeId, figure) => {
  await myDataSource.query(
    `INSERT INTO records (user_id,weight,measured_at)
  VALUES (?,?,?)`,
    [userId, weight, measuredAt]
  );

  const typeAndFigure = typeId
    .map((type, index) => `((SELECT LAST_INSERT_ID()),${type},${figure[index]})`)
    .join(",");
  const datas = await myDataSource.query(
    `INSERT IGNORE INTO datas (record_id,type_id,figure)
  VALUES ${typeAndFigure}`
  );

  return datas;
};

module.exports = {
  deleteRecord,
  createRecordData,
};
