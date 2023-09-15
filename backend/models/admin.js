const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const SECRET_KEY = "jhgasUYTljnOIUbjygBblih";

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
    }
});


adminSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, "SECRET_KEY", {
		expiresIn: "7d",
	});
	return token;
};




const validate = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label("Username"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};



const Admin = mongoose.model("admin", adminSchema);
module.exports = {Admin, validate};