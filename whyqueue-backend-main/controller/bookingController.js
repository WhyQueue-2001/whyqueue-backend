const Booking = require("../model/bookingModel");

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const { hotelName, numberOfPeople, bookingPersonName } = req.body;

        if (!hotelName || !numberOfPeople || !bookingPersonName) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newBooking = new Booking({ hotelName, numberOfPeople, bookingPersonName });
        await newBooking.save();

        res.status(201).json({ message: "Booking created successfully", booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: "Error creating booking", error: error.message });
    }
};

// Get bookings by hotel name
exports.getBookingsByHotel = async (req, res) => {
    try {
        const { hotelName } = req.params;

        if (!hotelName) {
            return res.status(400).json({ message: "Hotel name is required" });
        }

        const bookings = await Booking.find({ hotelName }).select("numberOfPeople bookingPersonName");

        if (bookings.length === 0) {
            return res.status(404).json({ message: "No bookings found for this hotel" });
        }

        res.status(200).json({ bookings });
    } catch (error) {
        res.status(500).json({ message: "Error fetching bookings", error: error.message });
    }
};
