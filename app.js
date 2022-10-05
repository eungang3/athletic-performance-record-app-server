require("dotenv").config();
const express = require("express");
require("express-async-errors");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const myDataSource = require("./models/db.config");

const app = express();

// DB 연결
myDataSource
  .initialize()
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

// 에러 처리 미들웨어
app.use(errorHandler);

module.exports = app;
