const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Import routes
const absensiRoutes = require('./routes/absensiRoutes');
const userRoutes = require('./routes/userRoutes');

// Routes
app.use('/api/absensi', absensiRoutes);
app.use('/api/user', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
