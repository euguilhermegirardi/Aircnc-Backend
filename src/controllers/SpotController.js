const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
  // index method = Creates a method of session list.
  async index(req, res) {
    // req.query = To filter. Access Query params on Insomnia.
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  },


  // store method = Create a session.
  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    // Check the user exist
    const user = await User.findById(user_id);
    if(!user) {
      return res.status(400).json({ error: 'User not found.' })
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()),
      // 'techs' - The database wait it as an array, so, transform into an array, cos it is actually a string.
      // Split with commas and remove the space from the words.
      price
    })

    return res.json(spot);
  }
};
