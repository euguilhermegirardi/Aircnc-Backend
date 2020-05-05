// index, show, store, update and destroy methods.
// index = Creates a method of session list.
// show = List only one session.
// store = Create a session.
// update = Edit a session.
// destroy = Remove a session.
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;  // const email = req.body.email;
    let user = await User.findOne({ email });
    if(!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
