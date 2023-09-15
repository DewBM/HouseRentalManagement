const mongoose = require("mongoose");

const tenantSchema = mongoose.Schema({
    NIC: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    dob: {
        type: String,
        required: true
    },

    tel_no: {
        type: String,
        required: true
    },

    house: {
        type: mongoose.Types.ObjectId,
        ref: "house"
    }
});

module.exports = mongoose.model("Tenants", tenantSchema);