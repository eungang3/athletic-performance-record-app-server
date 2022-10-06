const authDao = require("../models/authDao");

const checkUser = async (req, res, next) => {
  try {
    const userId = req.params["userId"];
    const checkUserById = await authDao.getUserById(userId);

    if (checkUserById.length === 0) {
      const error = new Error("등록된 회원이 아닙니다.");
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
