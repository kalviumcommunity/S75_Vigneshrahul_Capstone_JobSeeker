const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: String,
  position: String,
  status: {
    type: String,
    enum: ['pending', 'interview', 'declined'],
    default: 'pending',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
