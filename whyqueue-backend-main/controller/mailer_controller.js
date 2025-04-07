const { sendOtpEmail, sendCredentialEmail } = require('../model/mail_otp');

// Controller to handle sending email
const sendEmail = async (req, res) => {
  const { email, otp, username, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    let result;

    if (otp) {
      // Send OTP email
      result = await sendOtpEmail(email, otp);
    } else if (username && password) {
      // Send username and password email
      result = await sendCredentialEmail(email, username, password);
    } else {
      return res.status(400).json({ message: 'Invalid request parameters' });
    }

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(500).json({ message: result.message });
    }

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
};

module.exports = { sendEmail };
