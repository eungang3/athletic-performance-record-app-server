const myDataSource = require("../models/db.config");

const getUserById = async (userId) => {
  try {
    const result = await myDataSource.query(
      `
      SELECT *
      FROM users
      WHERE users.id = ${userId}
    `
    );
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = { getUserById };
