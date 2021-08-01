const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name'],
  },
  rollNumber: {
    type: String,
    required: [true, 'Please add roll Number'],
  },
  standard: {
    type: String,
    required: [true, 'Please add standard'],
  },
  section: {
    type: String,
    required: [true, 'Please add section'],
  },
  photoURL: {
    type: String,
    required: [true, 'Please add photo URL'],
  },
  address: {
    line1: { type: String },
    line2: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
  },
  parents: {
    type: Array,
  },
});

module.exports = mongoose.model('Student', StudentSchema);
