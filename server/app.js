const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const PORT_NUMBER = 8000;
const app = express();
app.use(bodyparser.json());

const mongoURI = "mongodb://localhost:27017/todolist";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("mongoose conected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(PORT_NUMBER, () => {
  console.log("server on");
});
