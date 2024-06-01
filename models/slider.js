
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid');



const sliderSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  image_position: {
    type: String,
    required: true,
  },
  text_position: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: uuidv4(),
  },
  mobile_image: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: new Date(),
    immutable: true
  },
  createdBy: {
    type: String,
    required: true,
  },
  modifiedOn: {
    type: Date,
    default: new Date(),
  },
  modifiedBy: {
    type: String,
    timestamp: true,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
});

const Slider = mongoose.model('Slider', sliderSchema);

module.exports = Slider;

