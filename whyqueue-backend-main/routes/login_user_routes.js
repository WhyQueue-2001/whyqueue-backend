const express = require("express");
const AuthController = require("../controller/login_user_controller");

const router = express.Router();

router.post("/loginCredebtial", AuthController.loginUser);

module.exports = router;
