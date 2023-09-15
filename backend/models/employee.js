const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    empId: {
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

    salary: {
        type: Number,
        required: true
    },

    house: {
        type: mongoose.Types.ObjectId,
        ref: "house"
    }
});

module.exports = mongoose.model("Employees", employeeSchema);