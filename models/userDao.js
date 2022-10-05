const { DataSource } = require('typeorm');

const myDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

myDataSource
  .initialize()
  .then(() => {
    console.log('userDao has been initialized!');
  })
  .catch(() => {
    console.log('Database initiate fail');
  });

//회원 정보 등록하기
const userCreate = async (name, birth, phone_number, height) => {
  console.log('START userCreateDao')
  const userCreate = await myDataSource.query(
    `
      INSERT INTO USERS(name, birth, phone_number, height)
      VALUES (?, ?, ?, ?)
    `,
    [name, birth, phone_number, height]
  );
  console.log('END userCreateDao')
  return userCreate
};

//회원 목록과 정보 or 특정 회원 정보 가져오기
const userList = async (info) => {
  console.log('START userListDao')
  const userList = await myDataSource.query(
    `
      SELECT 
        users.id, users.name, users.phone_number, users.height,
        DATE_FORMAT(users.birth,'%Y-%m-%d')as birth
        FROM USERS
      WHERE (users.deleted_at IS null)
            AND (((?='null')AND(id=id))
                      OR(users.id = ?)
                      OR(users.name = ?)
                      OR(users.phone_number = ?))
    `,
    [info, info, info, info]
  )
  console.log('END userListDao')
  return userList
};

// 특정 회원 정보 수정하기
const userUpdate = async (id, name, birth, phone_number, height) => {
  console.log('START userUpdateDao')
  if (name != undefined) {
    const userUpdate = await myDataSource.query(
      `
      UPDATE USERS
      SET name = ?, updated_at = now()
      WHERE id = ?
    `,
      [name, id]
    )
    console.log('END userNameUpdate')
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
    console.log('END userBirthUpdate')
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
    console.log('END userphone_numberUpdate')
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
    console.log('END userheightUpdate')
  }
  console.log('END userUpdate')
  return userUpdate
}

//특정 회원 삭제하기
const userDelete = async (id) => {
  console.log('Start userDelete')
  const userDelete = await myDataSource.query(
    `
    UPDATE USERS
    SET Is_deleted = true , deleted_at = now()
    WHERE id = ?
    `,
    [id]
  )
  console.log('END userDelete')
  return userDelete
}

module.exports = {
  userCreate,
  userList,
  userUpdate,
  userDelete,
};

/** 
const mysql = require("mysql")
const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "!#@#123qwe",
  database: "project1"
}
  
let connection = mysql.createConnection(conn)
connection.connect()

const userList= async(info, res) => {
  let sql = `SELECT 
  users.id, users.name, users.phone_number, users.height,
  DATE_FORMAT(users.birth,'%Y-%m-%d')as birth
  FROM USERS
  WHERE (users.deleted_at IS null)
      AND (((?='null')AND(id=id))
                OR(users.id = ?)
                OR(users.name = ?)
                OR(users.phone_number = ?))
  `
  let params = [info,info,info,info]

  connection.query(sql, params, function(err,results,fields){
    if(err){console.log(err)}
    console.log(results)
    res.status(200).json({userList:results})
  })
}
*/