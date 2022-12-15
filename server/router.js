import express from 'express';
import mongoose from "mongoose";
import {Event, Question} from './mongo.js';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

app.use(cors());

app.use(express.json());

app.post('/event', async (req, res) =>
{
	const {username, password, email, title, date} = req.body;
	console.log(req.body);

	// try
	// {
	// 	const event = new Event({username, password, email, title, date});
	// 	event.save();
	// 	res.status(200).send("OK");
	// }
	// catch (error)
	// {
	// 	console.log(error);
	// 	res.status(404).send(error);
	// }
})

app.get('/event', async (req, res) =>
{
	const {username, password, email, title, date} = req.body;
	console.log(req.body);

	// try
	// {
	// 	const event = new Event({username, password, email, title, date});
	// 	event.save();
	// 	res.status(200).send("OK");
	// }
	// catch (error)
	// {
	// 	console.log(error);
	// 	res.status(404).send(error);
	// }
})

app.get('/event_test', async (req, res) =>
{
	let response = await fetch("http://localhost:4242/event", {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			"username": "hello1",
			"password": "hello2",
			"email": "hello3",
			"title": "hello4",
			"date": "2002-08-08",
		})
	})
});

export { app };