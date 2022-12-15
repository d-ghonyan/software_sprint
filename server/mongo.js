import mongoose from "mongoose";

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const EventSchema = new mongoose.Schema(
{
	username:
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
	},
	title:
	{
		type: String,
		required: "Title is required",
	},
	date:
	{
		type: Date,
		required: "Date is required",
	},
});

const Event = mongoose.model("Event", EventSchema, "Events");

const QuestionSchema = new mongoose.Schema(
{
	email: {
		type: String,
		unique: true,
		required: "Email is required",
		validate: [validateEmail, 'Please fill a valid email address'],
	},
	question:
	{
		type: String,
		required: "Question is required",
	},
});

const Question = mongoose.model("Question", QuestionSchema, "Questions");

export {Event, Question};