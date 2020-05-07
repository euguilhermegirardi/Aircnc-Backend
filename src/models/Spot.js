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
}, {
  // Everytime that a spot in converted into JSON I need it calculete the virtual automatically.
  toJSON: {
    virtuals: true,
  }
});

// To get the img in the frontend cos' the the backend gets only the name of the img.
SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);
