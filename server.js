const express = require('express');
const bodyParser = require('body-parser');
const pairRoutes = require('./Routes/pairRoutes');
const dbMangementRoutes = require('./Routes/dbmangement');
const ConnectDb = require('./dbConfig/dbConnection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
ConnectDb().then(() => {
    // Routes
    app.use('/api', pairRoutes);
    app.use('/api', dbMangementRoutes);

    // Start server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
});
