const mongoose = require("mongoose");

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new mongoose.Schema(
{
	name: 
	{
		type: String,
		required: "Name is required",
	}, 
	password: 
	{
		type: String,
		required: "Password is required",
	}, 
	email: {
		type: String,
		unique: true,
		required: "Email is required",
		validate: [validateEmail, 'Please fill a valid email address'],
	}
});

const User = mongoose.model("User", UserSchema, "Users");

module.exports = User;