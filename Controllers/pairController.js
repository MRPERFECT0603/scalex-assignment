const Pair = require('../Models/tokenModel');

// Controller function to fetch all pairs with priceUsd and volume fields
const getAllPairs = async (req, res) => {
    try {
        const pairs = await Pair.find().select('_id priceUsd volume');
        const formattedPairs = pairs.map(pair => ({
            _id: pair._id,
            priceUsd: pair.priceUsd,
            volume: pair.volume
        }));
        res.json(formattedPairs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to fetch pair by ID with priceUsd and volume fields
const getPairById = async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.id).select('_id priceUsd volume');
        if (pair == null) {
            return res.status(404).json({ message: 'Pair not found' });
        }
        const formattedPair = {
            _id: pair._id,
            priceUsd: pair.priceUsd,
            volume: pair.volume
        };
        res.json(formattedPair);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPairs,
    getPairById
};
