const mongoose = require("mongoose");

const complaintSchema = mongoose.Schema({
    isDone: {
        type: String,
        default: false
    },

    description: {
        type: String,
        required: true
    },

    house: {
        type: mongoose.Types.ObjectId,
        ref: "house"
    }
});

module.exports = mongoose.model("Complaints", complaintSchema);