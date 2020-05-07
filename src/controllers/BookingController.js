const Booking = require('../models/Booking');

module.exports = {
  // store = To create a session.
  async store(req, res) {
    // search the user who is logged in the headers.
    const { user_id } = req.headers;
    // Linking the booking with the spot where the user is going to book.
    const { spot_id } = req.params; // req.params = Access route params (to edit, delete).
    const { date } = req.body;

    // Creating the bok.
    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    await booking.populate('spot').populate('user').execPopulate();

    return res.json(booking);
  }
};
