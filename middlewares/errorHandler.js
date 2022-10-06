const errorHandler = (err, req, res, next) => {
  console.log("\x1b[33m%s\x1b[0m", err);

  if (err.statusCode >= 500) {
    return res.status(404).json({ message: "잠시후에 다시 시도해주세요." });
  } else {
    return res.status(err.statusCode).json({ message: err.message });
  }
};

module.exports = errorHandler;
