// backend/controllers/authController.js
let generatedOTP = null;

exports.requestOTP = (req, res) => {
  const { nationalID, phone } = req.body;

  if (!nationalID || !phone) {
    return res.status(400).json({ message: 'National ID and phone number are required.' });
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  console.log(`OTP for ${nationalID} → ${generatedOTP}`);

  res.json({ message: 'OTP sent to your phone.' });
};

exports.verifyOTP = (req, res) => {
  const { otp } = req.body;

  if (parseInt(otp) === generatedOTP) {
    return res.json({ success: true, message: 'OTP verified successfully!' });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid OTP. Try again.' });
  }
};

