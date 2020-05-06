const mongoose = require('mongoose');

// Spot of the application
const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String], // more than one
  user: {
    type: mongoose.Schema.Types.ObjectId, // ObjectId is the id from Insomnia ( "_id": "5eb1a0993a1d89d269df6d88")
    ref: 'User'
  }
});

module.exports = mongoose.model('Spot', SpotSchema);
