const express = require('express');
const axios = require('axios');
const qs = require('querystring');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve login.html from root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// OAuth2 Callback
app.get('/callback', async (req, res) => {
  const code = req.query.code;

  try {
    const tokenResponse = await axios.post('http://localhost:8080/esignet/token', qs.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'http://localhost:3000/callback',
      client_id: 'health-client'
    }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const accessToken = tokenResponse.data.access_token;

    const userResponse = await axios.get('http://localhost:8080/esignet/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const user = userResponse.data;

    res.send(`
      <h2>Login Successful</h2>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>National ID:</strong> ${user.national_id}</p>
      <p><strong>Date of Birth:</strong> ${user.date_of_birth}</p>
      <p><strong>Gender:</strong> ${user.gender}</p>
    `);

  } catch (error) {
    console.error('Callback error:', error.response?.data || error.message);
    res.send(`<h3>Login Failed: ${error.message}</h3>`);
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
