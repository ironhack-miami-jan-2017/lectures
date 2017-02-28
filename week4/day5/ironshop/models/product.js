const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review.js');

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    minlength: [2, 'Name must be 2 characters or above']
  },
  price: {
    type: Number,
    required: [true, 'Please enter a price'],
    min: [0, 'Please make your price 0 or above']
  },
  imageUrl: { type: String, required: true },
  description: String,
    // the "reviews" field is an array of objects
    // that follow the Review model's schema
  reviews: [ Review.schema ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
