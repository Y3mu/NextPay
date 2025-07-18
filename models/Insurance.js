const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
  userEmail: String,
  plan: String,
  purchasedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Insurance', insuranceSchema);