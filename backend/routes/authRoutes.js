// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();

let generatedOTP = null; // temporary in-memory OTP storage

// Request OTP
router.post('/request-otp', (req, res) => {
  const { nationalID, phone } = req.body;
  if (!nationalID || !phone) {
    return res.status(400).json({ success: false, message: 'Missing National ID or phone number.' });
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000); // Random 6-digit OTP
  console.log(`🔐 OTP for ${nationalID}: ${generatedOTP}`);
  res.json({ success: true, message: 'OTP sent to your phone (simulated)' });
});

// Verify OTP
router.post('/verify-otp', (req, res) => {
  const { otp } = req.body;
  if (parseInt(otp) === generatedOTP) {
    res.json({ success: true, message: '✅ OTP verified successfully!' });
  } else {
    res.json({ success: false, message: '❌ Invalid OTP. Try again.' });
  }
});

module.exports = router;
