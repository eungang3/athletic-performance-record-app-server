const userDao = require("../models/userDao");

const test = async () => {
  const error = new Error("테스트");
  error.statusCode = 500;
  throw error;
};

module.exports = {
  test,
};
