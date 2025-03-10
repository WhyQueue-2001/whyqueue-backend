const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    hotelName: { type: String, required: true },
    numberOfPeople: { type: Number, required: true },
    bookingPersonName: { type: String, required: true }
});

module.exports = mongoose.model("Booking", bookingSchema);