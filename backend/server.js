const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:27017/myapp';

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Роуты
const recordRoutes = require('./routes/records');
app.use('/api/records', recordRoutes);

// Старт сервера
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
