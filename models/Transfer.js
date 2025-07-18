const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  senderEmail: String,
  recipientName: String,
  recipientEmail: String,
  recipientCountry: String,
  amount: Number,
  method: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transfer', transferSchema);