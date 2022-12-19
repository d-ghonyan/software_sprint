import mongoose from "mongoose";

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
		required: "Email is required",
	},
	title:
	{
		type: String,
		required: "Title is required",
	},
	description:
	{
		type: String,
		required: "Description is required",
	},
	accepted:
	{
		type: Boolean,
		default: false,
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
		required: "Email is required",
	},
	question:
	{
		type: String,
		required: "Question is required",
	},
	answered: {
		type: Boolean,
		default: false,
	}
});

const Question = mongoose.model("Question", QuestionSchema, "Questions");

export {Event, Question};