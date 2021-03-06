const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  title: String,
  content: String,
  rating: Number,
  date: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'location',
    required: true,
  },
});

const Review = mongoose.model('review', ReviewSchema);

module.exports = Review;
