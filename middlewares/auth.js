const userDao = require("../models/userDao");

/**
 * 기능: 유저 가입, 삭제 여부 확인
 */
const checkUser = async (req, res, next) => {
  try {
    const id = req.params["userId"];
    const checkUserById = await userDao.readUserById(id);

    if (checkUserById.length === 0) {
      const error = new Error("등록된 유저가 아닙니다.");
      error.statusCode = 404;
      throw error;
    }

    if (checkUserById[0].deleted_at !== null) {
      console.log(checkUserById[0].deleted_at);
      const error = new Error("삭제된 유저 입니다.");
      error.statusCode = 400;
      throw error;
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { checkUser };
