const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const rulesRoutes = require('./routes/ruleRoutes');
const cors = require('cors'); 

dotenv.config();

const app = express(); 


app.use(cors()); 

const PORT = process.env.PORT || 5000;


connectDB();


app.use(express.json()); 


app.use('/api/rules', rulesRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).send({ message: 'Something went wrong!' }); // Generic error response
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
