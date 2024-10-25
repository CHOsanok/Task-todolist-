const express = require("express");
const router = express.Router();
const taskApi = require("./taks.api");
const userApi = require("./user.api");

router.use("/tasks", taskApi);
router.use("/user", userApi);

module.exports = router;
