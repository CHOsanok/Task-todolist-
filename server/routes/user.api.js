const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.post("/", userController.creatUser);
router.post("/login", userController.loginWithEmail);

module.exports = router;
