const Task = require("../model/tasks");

const taskControlloer = {};

taskControlloer.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });

    await newTask.save();
    res.status(200).json({ status: "OK", data: newTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskControlloer.getTask = async (req, res) => {
  try {
    const taksList = await Task.find({});

    res.status(200).json({ status: "OK", data: taksList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

module.exports = taskControlloer;
