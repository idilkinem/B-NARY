const express = require('express');
const cors = require('cors');
const emailRouter = require('./routes/email');
const subscribeRouter = require('./routes/subscribe');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/send-email', emailRouter);
app.use('/api/subscribe', subscribeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 