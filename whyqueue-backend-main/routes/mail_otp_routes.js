const express = require('express');
const router = express.Router();
const otpController = require('../controller/mailer_controller');

router.post('/send-otp', otpController.sendOtp);

module.exports = router;