const express = require('express');
const cors = require('cors');
const emailRouter = require('./routes/email');
const subscribeRouter = require('./routes/subscribe');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS ayarları
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Ana endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Kan Tahlili API çalışıyor!' });
});

// Test endpoint'i
app.get('/test', (req, res) => {
  res.json({ 
    status: 'success',
    message: 'API test endpoint çalışıyor',
    time: new Date().toISOString()
  });
});

// Routes
app.use('/api/send-email', emailRouter);
app.use('/api/subscribe', subscribeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test the API at: http://localhost:${PORT}/test`);
}); 