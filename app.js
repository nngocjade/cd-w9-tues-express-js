var express = require("express");
require("dotenv").config();
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);

// ERROR HANDLER
app.use((req, res, next) => {
  const error = new Error("Resource Not Found");
  error.statusCode = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode ? err.statusCode : 500).send(err.message);
});

module.exports = app;
