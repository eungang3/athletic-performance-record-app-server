const myDataSource = require("../models/db.config");

/**
 * 기능: 유저 테이블 deleted_at 현재시간으로 업데이트,
 * name과 phone_number는 마스킹 처리하여 업데이트
 */
const updateUsersForDelete = async (id, maskedPhoneNumber, maskedName) => {
  try {
    return await myDataSource.query(
      `
        UPDATE users
        SET
        name = '${maskedName}',
        phone_number = '${maskedPhoneNumber}',
        deleted_at = now()
        WHERE id = '${id}'
      `
    );
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 500;
    throw error;
  }
};

/**
 * 기능: id로 user 조회
 */
const readUserById = async (id) => {
  try {
    const user = await myDataSource.query(
      `
      SELECT *
      FROM users
      WHERE id = ${id}
    `
    );
    return user;
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 500;
    throw error;
  }
};

module.exports = { updateUsersForDelete, readUserById };
