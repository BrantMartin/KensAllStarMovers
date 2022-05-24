const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const appointmentSchema = new Schema({
  appointmentText: {
    type: String,
    required: 'You need to make an appointment!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  appointmentAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;
