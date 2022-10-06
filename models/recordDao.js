const myDataSource = require("./db.config");

const getUserRecord = async (userId) => {
  try {
    const result = await myDataSource.query(
      `
      SELECT DISTINCT
        records.id as 'recordId',
        records.weight as 'weight',
        DATE_FORMAT(records.measured_at, '%y-%m-%d') as 'date',
        d.datas
      FROM records

      LEFT JOIN(
        SELECT
          record_id,
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'typeId', datas.type_id,
              'figure', datas.figure,
              'typeName', types.name
            )
          ) as datas
        FROM datas
        JOIN records ON records.id = datas.record_id
        JOIN types ON types.id = datas.type_id
      GROUP BY record_id )
      d ON records.id = d.record_id
      WHERE records.user_id = ${userId}
    `
    );
    return result;
  } catch (err) {
    const error = new Error("데이터베이스에 데이터를 저장할 수 없습니다.");
    error.statusCode = 400;
    throw error;
  }
};

const getRecord = async (recordId) => {
  try {
    const result = await myDataSource.query(
      `
      SELECT DISTINCT
        users.id as 'userId',
        users.name as 'userName',
        DATE_FORMAT(users.birth, '%y-%m-%d') as 'birth',
        users.height as 'height',
        records.id as 'recordId',
        records.weight as 'weight',
        DATE_FORMAT(records.measured_at, '%y-%m-%d') as 'date',
        d.datas
      FROM records
      JOIN users ON users.id = records.user_id

      LEFT JOIN(
        SELECT
          record_id,
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'typeId', datas.type_id,
              'figure', datas.figure,
              'typeName', types.name
            )
          ) as datas
        FROM datas
        JOIN records ON records.id = datas.record_id
        JOIN types ON types.id = datas.type_id
      GROUP BY record_id )
      d ON records.id = d.record_id
      WHERE records.id = ${recordId}
    `
    );
    return result;
  } catch (err) {
    const error = new Error("데이터베이스에 데이터를 저장할 수 없습니다.");
    error.statusCode = 400;
    throw error;
  }
};

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

module.exports = { getUserRecord, getRecord, deleteRecord, createRecordData };
