const express = require("express");
const router = express.Router();
const bookingController = require("../controller/bookingController");

router.post("/bookings", bookingController.createBooking);
router.get("/bookings/:hotelName", bookingController.getBookingsByHotel);

module.exports = router;