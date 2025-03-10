const express = require("express");
const UserController = require("../controller/check_user_controller");

const router = express.Router();

// Check Username Availability
router.post("/check-username", UserController.checkUsername);

module.exports = router;
