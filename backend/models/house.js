const mongoose = require('mongoose');

const houseSchema = mongoose.Schema({
    address: {
        type: String,
        required: true,
    },

    n_rooms: {
        type: Number,
        required: true
    },

    n_bathrooms: {
        type: Number,
        required: true
    },

    rent: {
        type: Number,
        required: true
    },

    tenant: {
        type: mongoose.Types.ObjectId,
        ref: 'tenant'
    }
});

module.exports = mongoose.model('Houses', houseSchema);