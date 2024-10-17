const express = require("express");
const taskControlloer = require("../controller/task.controller");
const router = express.Router();

router.post("/", taskControlloer.createTask);
router.get("/", (req, res) => {
  res.send("get tasks");
});
router.put("/:id", (req, res) => {
  res.send("put tasks");
});
router.delete("/:id", (req, res) => {
  res.send("delete tasks");
});

module.exports = router;
