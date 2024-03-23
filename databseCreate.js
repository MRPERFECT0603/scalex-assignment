const mongoose = require('mongoose');
const TokenPair = require('./Models/tokenModel');
const sampleData = require('./sample.json');
require('dotenv').config();



// Connect to MongoDB Atlas cluster
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas');

        // Insert sample data into the database
        sampleData.pairs.forEach(async pair => {
            try {
                await TokenPair.create(pair);
                console.log('Data inserted successfully:', pair);
            } catch (error) {
                console.error('Error inserting data:', error);
            }
        });
    })
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
