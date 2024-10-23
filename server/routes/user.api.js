const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const authController = require("../controller/auth.controller");

router.post("/", userController.creatUser);
router.post("/login", userController.loginWithEmail);
router.get("/me", authController.authenticate, userController.getUser);
router.delete(
  "/deleteId",
  authController.authenticate,
  userController.deleteId
);
module.exports = router;
