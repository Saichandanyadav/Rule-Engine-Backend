const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const rulesRoutes = require('./routes/ruleRoutes');
const cors = require('cors'); // Importing CORS

dotenv.config();

const app = express(); // Create the Express app

// Use CORS middleware
app.use(cors()); // This should be before other middleware/routes

const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware to parse JSON requests
app.use(express.json()); 

// Routes
app.use('/api/rules', rulesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).send({ message: 'Something went wrong!' }); // Generic error response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
