const express = require("express");
const UserController = require("../controller/new_user_controller"); // Adjust path if needed

const router = express.Router();

// Define user routes
router.post("/users", UserController.createUser);
router.get("/users/:id", UserController.getUserById);
router.get("/users/username/:username", UserController.getUserByUsername); // New route

module.exports = router;
