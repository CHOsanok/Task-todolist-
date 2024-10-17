const Task = require("../model/tasks");

const taskController = {};

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });

    await newTask.save();
    res.status(200).json({ status: "OK", data: newTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskController.getTask = async (req, res) => {
  try {
    const taksList = await Task.find({});

    res.status(200).json({ status: "OK", data: taksList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskController.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, isComplete } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { task, isComplete },
      { new: true, runValidators: true }
    );

    res.status(200).json({ status: "OK", data: updatedTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskController.deleteTaks = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.deleteOne({ _id: id });

    res.status(200).json({ status: "OK", data: deletedTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

module.exports = taskController;
