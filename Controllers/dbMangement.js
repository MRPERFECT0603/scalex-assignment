const Pair = require('../Models/tokenModel');

// Create operation
async function createPair(req, res) {
    try {
        const pair = new Pair(req.body);
        const result = await pair.save();
        res.json({ message: 'Pair created successfully', data: result });
    } catch (error) {
        res.status(500).json({ message: 'Error creating pair', error: error.message });
    }
}

// Read operation
async function findPairs(req, res) {
    try {
        const pairs = await Pair.find();
        res.json({ message: 'Pairs found', data: pairs });
    } catch (error) {
        res.status(500).json({ message: 'Error finding pairs', error: error.message });
    }
}

// Update operation
async function updatePair(req, res) {
    try {
        const pair = await Pair.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'Pair updated successfully', data: pair });
    } catch (error) {
        res.status(500).json({ message: 'Error updating pair', error: error.message });
    }
}

// Delete operation
async function deletePair(req, res) {
    try {
        const result = await Pair.findByIdAndDelete(req.params.id);
        res.json({ message: 'Pair deleted successfully', data: result });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting pair', error: error.message });
    }
}

module.exports = {
    createPair,
    findPairs,
    updatePair,
    deletePair
};
