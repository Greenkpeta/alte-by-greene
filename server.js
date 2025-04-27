const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
require('dotenv').config(); // Load .env file

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
  })
});

const db = admin.firestore();

// Create User Endpoint
app.post('/create-user', async (req, res) => {
  try {
    const { uid, name, email } = req.body;
    if (!uid || !name || !email) {
      return res.status(400).json({ message: 'Missing fields: uid, name, or email' });
    }

    await db.collection('users').doc(uid).set({
      name,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Wallet server running on port ${PORT}`);
});