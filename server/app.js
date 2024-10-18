const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const indexRouter = require("./routes/index");
require("dotenv").config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
const PORT_NUMBER = 8000;
const app = express();

app.use(bodyparser.json());
app.use("/api", indexRouter);

mongoose
  .connect(MONGODB_URI_PROD)
  .then(() => {
    console.log("mongoose conected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(PORT_NUMBER, () => {
  console.log("server on");
});
