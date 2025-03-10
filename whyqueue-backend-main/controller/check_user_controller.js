const User = require("../model/check_username");


exports.checkUsername = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(200).json({ exists: true, message: "Username already taken" });
    } else {
      return res.status(200).json({ exists: false, message: "Username available" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
