const User = require("../model/login_user"); // Adjust path

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Direct password comparison (not secure)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", username: user.username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};