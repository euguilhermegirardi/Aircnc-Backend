const mongoose = require('mongoose');

// Login of the application
const UserSchema = new mongoose.Schema({
  //name: String,
  //age: Number,
  //active: Boolean,
  email: String,
});

module.exports = mongoose.model('User', UserSchema);
