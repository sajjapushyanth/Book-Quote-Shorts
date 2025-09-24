const express = require('express');
const cors = require('cors');
const path = require('path');
const quotes = require('./data/quotes.json');


const app = express();
app.use(cors());
app.use(express.json());


// Simple API to fetch all quotes
app.get('/api/quotes', (req, res) => {
res.json(quotes);
});


// Mock like endpoint - keeps no state (demo only)
app.post('/api/quotes/:id/like', (req, res) => {
const { id } = req.params;
// In production you'd persist like to DB
res.json({ success: true, id, liked: true });
});


// Health
app.get('/api/health', (req, res) => res.json({ ok: true }));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));