const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const userSchema = Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

userSchema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this.id }, JWT_SECRET_KEY, { expiresIn: "1d" });

  return token;
};
userSchema.methods.toJSON = function () {
  const { __v, password, ...obj } = this._doc;

  return obj;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
