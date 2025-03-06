const express = require('express');
const db = require('./config/db');
const counterRoutes = require('./routes/counterRoutes');

const app = express();
app.use(express.json());
app.use('/api', counterRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));