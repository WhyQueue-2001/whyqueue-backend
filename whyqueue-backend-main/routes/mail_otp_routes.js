// const express = require('express');
// const router = express.Router();
// const otpController = require('../controller/mailer_controller');

// router.post('/send-otp', otpController.sendOtp);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controller/mailer_controller');

// Route to send OTP or credentials based on request body
router.post('/send-email', sendEmail);

module.exports = router;
