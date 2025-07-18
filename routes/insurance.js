const express = require('express');
const Insurance = require('../models/Insurance');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const insurance = new Insurance(req.body);
    await insurance.save();
    res.status(201).json({ message: 'Insurance plan purchased' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;