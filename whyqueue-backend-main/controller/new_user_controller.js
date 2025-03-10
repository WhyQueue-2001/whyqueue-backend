
const User = require("../model/new_user"); // Adjust path if needed

exports.createUser = async (req, res) => {
  try {
      const { username, email, phone, password } = req.body;

      // Check if username or email already exists
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
          return res.status(400).json({ message: "Username or Email already exists" });
      }

      const newUser = new User({ username, email, phone, password });
      await newUser.save();
      res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// Get User by Username
exports.getUserByUsername = async (req, res) => {
  try {
      const user = await User.findOne({ username: req.params.username });
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};