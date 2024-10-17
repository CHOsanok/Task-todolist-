const Task = require("../model/tasks");

const taskControlloer = {};

taskControlloer.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task(task, isComplete);

    await newTask.save();
    res.status(200).josn({ status: "OK", data: newTask });
  } catch (err) {
    res.status(400).josn({ status: "fail", error: err });
  }
};

module.exports = taskControlloer;
