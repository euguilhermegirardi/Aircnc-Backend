const Spot = require('../models/Spot');

module.exports = {
  // show method = List only one session.
  async show(req, res) {
    // search the user who is logged in the headers.
    const { user_id } = req.headers;
    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
};
