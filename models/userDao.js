const myDataSource = require("./db.config");

//회원 목록과 정보 or 특정 회원 정보 가져오기
const userInfo = async (info) => {
  console.log("START userInfoDao")
  const userInfo = await myDataSource.query(
    `
      SELECT 
        users.id, users.name, users.phone_number, users.height,
        DATE_FORMAT(users.birth,"%Y-%m-%d")as birth
        FROM USERS
      WHERE (users.deleted_at IS null)
            AND (((?="null")AND(id=id))
                      OR(users.id = ?)
                      OR(users.name = ?)
                      OR(users.phone_number = ?))
    `,
    [info, info, info, info]
  )
  console.log("END userInfoDao")
  return userInfo
};

// 특정 회원 정보 수정하기
const userUpdate = async (id, name, birth, phone_number, height) => {
  console.log("START userUpdateDao")
  if (name != undefined) {
    const userUpdate = await myDataSource.query(
      `
      UPDATE USERS
      SET name = ?, updated_at = now()
      WHERE id = ?
    `,
      [name, id]
    )
    console.log("END userNameUpdate")
  }
  if (birth != undefined) {
    const userUpdate = await myDataSource.query(
      `
      UPDATE USERS
      SET birth = ?
      WHERE id = ?
    `,
      [birth, id]
    )
    console.log("END userBirthUpdate")
  }
  if (phone_number != undefined) {
    const userUpdate = await myDataSource.query(
      `
      UPDATE USERS
      SET phone_number = ?
      WHERE id = ?
    `,
      [phone_number, id]
    )
    console.log("END userphone_numberUpdate")
  }
  if (height != undefined) {
    const userUpdate = await myDataSource.query(
      `
      UPDATE USERS
      SET height = ?
      WHERE id = ?
    `,
      [height, id]
    )
    console.log("END userheightUpdate")
  }
  console.log("END userUpdate")
  return userUpdate
}

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
module.exports = {
  userInfo,
  userUpdate,
  updateUsersForDelete, 
  readUserById
};

