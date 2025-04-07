// // models/mailer.js
// const nodemailer = require('nodemailer');
// const path = require('path'); 
// // Function to send email
// const sendOtpEmail = async (email, otp) => {
//   // Set up the transporter using your email service credentials
//   let transporter = nodemailer.createTransport({
//     service: 'gmail', // Use your preferred email service (e.g., Gmail, Outlook)
//     auth: {
//       user: 'shahjay1407@gmail.com', // Replace with your email
//       pass: 'hjia jrgs mclf uugt', // Replace with your email password or app password
//     },
//   });
//   const imagePath = path.join(__dirname, '../images/datacheckLogo.png');
//   // Define the email options
//   let mailOptions = {
//     from: 'shahjay1407@gmail.com', // Sender email
//     to: email, // Recipient email
//     subject: 'Your OTP Code',
//       html: `
//         <div style="text-align: center; font-family: Arial, sans-serif;">
//           <img src="cid:unique@logo.img" alt="Company Logo" style="width: 100px; margin-bottom: 20px;">
//           <h2 style="color: #333;">Your OTP Code</h2>
//           <p style="font-size: 18px; color: #555;">Hello,</p>
//           <p style="font-size: 16px; color: #555;">Thank you for using our service. Your OTP code is:</p>
//           <div style="font-size: 24px; font-weight: bold; color: #4CAF50;">${otp}</div>
//           <p style="font-size: 16px; color: #555;">Please enter this code in the app to verify your account. This code is valid for 10 minutes.</p>
//           <a href="https://nextwavelogic.com/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #4CAF50; color: #fff; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
//           <p style="font-size: 14px; color: #999; margin-top: 30px;">If you did not request this OTP, please ignore this email.</p>
//         </div>
//       `
//   };

//   // Send the email and return the result
//   try {
//     await transporter.sendMail(mailOptions);
//     return { success: true, message: 'OTP sent successfully!' };
//   } catch (error) {
//     console.error('Error sending OTP:', error);
//     return { success: false, message: 'Failed to send OTP.' };
//   }
// };

// module.exports = { sendOtpEmail };




const nodemailer = require('nodemailer');
const path = require('path');

// Common transporter setup
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shahjay1407@gmail.com',    // Replace with your email
      pass: 'hjia jrgs mclf uugt'       // Replace with your email password or app password
    }
  });
};

// Function to send OTP email
const sendOtpEmail = async (email, otp) => {
  const transporter = createTransporter();

  let mailOptions = {
    from: 'shahjay1407@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    html: `
      <div style="text-align: center; font-family: Arial, sans-serif;">
        <h2>Your OTP Code</h2>
        <p>Your OTP code is:</p>
        <div style="font-size: 24px; font-weight: bold; color: #4CAF50;">${otp}</div>
        <p>This code is valid for 10 minutes.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'OTP sent successfully!' };
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, message: 'Failed to send OTP.' };
  }
};

// Function to send username and password email
const sendCredentialEmail = async (email, username, password) => {
  const transporter = createTransporter();

  let mailOptions = {
    from: 'shahjay1407@gmail.com',
    to: email,
    subject: 'Your Login Credentials',
    html: `
      <div style="text-align: center; font-family: Arial, sans-serif;">
        <h2>Your Login Credentials</h2>
        <p>Here are your credentials:</p>
        <div style="font-size: 18px; color: #555;">
          <p><strong>Username:</strong> ${username}</p>
          <p><strong>Password:</strong> ${password}</p>
        </div>
        <p>Please keep this information secure.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Credentials sent successfully!' };
  } catch (error) {
    console.error('Error sending credentials:', error);
    return { success: false, message: 'Failed to send credentials.' };
  }
};

module.exports = { sendOtpEmail, sendCredentialEmail };