const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Serve frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
app.use('/api/auth', authRoutes);

// ✅ QR License verification data
const licenses = {
  "License-ID-12345": {
    name: "Iraduhaye Bukuru Paterne",
    category: "B",
    status: "Approved"
  }
};

// ✅ Verify License by QR Code ID
app.get('/api/verify-license/:id', (req, res) => {
  const license = licenses[req.params.id];
  if (license) {
    res.json({ valid: true, ...license });
  } else {
    res.json({ valid: false });
  }
});

// Home route
app.get('/', (req, res) => {
  res.send('🚀 Driver License System API is running');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

