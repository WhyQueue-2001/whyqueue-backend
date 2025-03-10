const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const new_user = require('./routes/new_user_routes');
const login = require('./routes/login_user_routes');
const otp_mail = require('./routes/mail_otp_routes');
const check_user = require('./routes/check_user_routes');
const booking = require('./routes/bookingRoutes');
// Middleware to parse JSON requests
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '100mb' }));  // For JSON payloads
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
// MongoDB connection


const mongoURI = 'mongodb+srv://whyqueue2001:yash%26jay2025@cluster0.rq4yh.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));



app.use('/new', new_user);
app.use('/login', login);
app.use('/mail', otp_mail);
app.use('/check', check_user);
app.use('/bookApi', booking);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
