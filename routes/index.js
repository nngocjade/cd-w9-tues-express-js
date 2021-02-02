var express = require("express");
var router = express.Router();

const userApi = require("./user.api.js");
router.use("/users", userApi);

const authApi = require("./auth.api.js");
router.use("/auth", authApi);

const blogApi = require("./blog.api.js");
router.use("/blog", blogApi);

module.exports = router;
