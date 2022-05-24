const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const appointmentSchema = new Schema({
  _id: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  startLocation: {
    type: String,
    required: true,
    trim: true,
  },
  endLocation: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
  bedroomNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  appointmentAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  
});

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;
