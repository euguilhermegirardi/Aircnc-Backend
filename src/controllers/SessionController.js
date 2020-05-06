// index method = Creates a method of session list.
// show method = List only one session.
// store method = Create a session.
// update method = Edit a session.
// destroy method = Remove a session.

// req.query = Access Query params (to filter)
// req.params = Access rote params (to edit, delete)
// req.body = Access the body of the req (to create, edit)

const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;  // const email = req.body.email;

    // Creating an user.
    let user = await User.findOne({ email });
    if(!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
