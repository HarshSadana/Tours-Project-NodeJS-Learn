const mongoose = require('mongoose');

// What is mongoose?
// we don't use mongoDB drivers, but we use mongoose for our connection, writing queries etc , the relation between mongoose and mongoDB is same as the relation between express and node.js

// mongo schema is the blueprint of the document, it holds what data and type of data the document will hold.
// mongo model is the wrapper around the schema, it is the collection and provides methods to query the database.

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have the price']
    }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;