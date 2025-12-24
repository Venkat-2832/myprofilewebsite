const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Routes
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Get all info
app.get('/info', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM info');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new info
app.post('/info', async (req, res) => {
  const { name, email, bio } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO info (name, email, bio) VALUES ($1, $2, $3) RETURNING *',
      [name, email, bio]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
