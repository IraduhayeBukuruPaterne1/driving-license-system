const express = require('express');
const axios = require('axios');
const qs = require('querystring');

const app = express();
const PORT = 3000;

// Replace with your values
const CLIENT_ID = 'health-client';
const CLIENT_SECRET = 'secret'; // usually not needed in demo
const REDIRECT_URI = 'http://localhost:3000/callback';
const TOKEN_URL = 'http://localhost:8080/esignet/token';
const USERINFO_URL = 'http://localhost:8080/esignet/userinfo';

app.get('/callback', async (req, res) => {
  const code = req.query.code;

  try {
    // Exchange code for token
    const tokenResponse = await axios.post(TOKEN_URL, qs.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const accessToken = tokenResponse.data.access_token;

    // Fetch user info
    const userResponse = await axios.get(USERINFO_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
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
    console.error('Error during callback:', error.response?.data || error.message);
    res.send(`<h3>Error: ${error.message}</h3>`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
