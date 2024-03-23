const express = require('express');
const router = express.Router();
const { getAllPairs, getPairById } = require('../Controllers/pairController');

// Route for fetching all pairs
router.get('/pairs', getAllPairs);

// Route for fetching pair by ID
router.get('/pairs/:id', getPairById);

module.exports = router;
