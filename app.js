require("dotenv").config();
const express = require("express");
require("express-async-errors");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

// 에러 처리 미들웨어
app.use(errorHandler);

module.exports = app;
