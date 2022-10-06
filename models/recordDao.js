const myDataSource = require("./db.config");

const deleteRecord = async (recordId) => {
  return await myDataSource.query(
    `DELETE FROM records
    WHERE records.id = ${recordId}`
  );
};

module.exports = {
  deleteRecord,
};
