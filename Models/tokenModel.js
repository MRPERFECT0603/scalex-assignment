const mongoose = require('mongoose');

// Define the schema for the socials array
const socialSchema = new mongoose.Schema({
    type: String,
    url: String
});

// Define the main schema for the Pair collection
const pairSchema = new mongoose.Schema({
    chainId: String,
    dexId: String,
    url: String,
    pairAddress: String,
    baseToken: {
        address: String,
        name: String,
        symbol: String
    },
    quoteToken: {
        address: String,
        name: String,
        symbol: String
    },
    priceNative: String,
    priceUsd: String,
    txns: {
        m5: {
            buys: Number,
            sells: Number
        },
        h1: {
            buys: Number,
            sells: Number
        },
        h6: {
            buys: Number,
            sells: Number
        },
        h24: {
            buys: Number,
            sells: Number
        }
    },
    volume: {
        h24: Number,
        h6: Number,
        h1: Number,
        m5: Number
    },
    priceChange: {
        m5: Number,
        h1: Number,
        h6: Number,
        h24: Number
    },
    liquidity: {
        usd: Number,
        base: Number,
        quote: Number
    },
    pairCreatedAt: Number,
    info: {
        imageUrl: String,
        websites: [{
            label: String,
            url: String
        }],
        socials: [socialSchema] // Define socials as an array of objects using the socialSchema
    }
});

// Create the Pair model
const Pair = mongoose.model('Pair', pairSchema);

module.exports = Pair;
