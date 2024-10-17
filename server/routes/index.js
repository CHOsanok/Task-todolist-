const express = require("express");
const router = express.Router();
const taskApi = require("./taks.api");

router.use("/tasks", taskApi);

module.exports = router;
