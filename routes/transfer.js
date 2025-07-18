const express = require('express');
const Transfer = require('../models/Transfer');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const transfer = new Transfer(req.body);
    await transfer.save();
    res.status(201).json({ message: 'Transfer recorded successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;