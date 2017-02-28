const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ReviewSchema = new Schema({
  content: { type: String, require: true },
  stars: {
    type: Number,
    require: true,
    min: 0,
    max: 5
  },
  author: String
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
