const { sendOtpEmail } = require('../model/mail_otp'); // Email model

// Controller to handle OTP sending via email
const sendOtp = async (req, res) => {
  const { email, otp } = req.body;

  // Validate the request body
  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required' });
  }

  try {
    // Call the model to send the OTP email
    const result = await sendOtpEmail(email, otp);

    // Send the response based on the result
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(500).json({ message: result.message });
    }
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Failed to send OTP.' });
  }
};

module.exports = { sendOtp };
