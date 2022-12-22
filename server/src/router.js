import express from 'express';
import {Event, Question} from './mongo.js';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';
import hbs from 'hbs';
import * as url from 'url';
import { sendEmail } from './mail.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.use(express.static(publicPath));

app.set('view engine', 'hbs');

app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

app.use(cors());

app.use(express.json());

app.get('/admin', (req, res) => {
	res.render('index', {title: 'Events', name: 'hello'});
})

app.post('/event', async (req, res) =>
{
	const {username, password, email, title, accepted, description, date} = req.body;

	if (!username || !password || !email || !title || !description || !date)
	{
		console.log(username, password, email, title, accepted, description, date, date instanceof Date);
		console.log("Invalid data");
		return ;
	}
	try
	{
		const event = new Event({username, password, email, accepted: false, description, title, date});
		await event.save();
		sendEmail({
			key: process.env.API_KEY,
			email, username,
			subject: "Your event is submitted",
			body: `We received your event request and will review it as soon as possible.<br><br>Details<br>\
			Title: ${title}<br>Description: ${description}<br>Date: ${date.slice(0, 10)}`,
		});
	}
	catch (error)
	{
		console.log(error);
	}
})

app.post('/question', async (req, res) =>
{
	const {email, question} = req.body;
	try
	{
		const q = new Question({email, question});
		await q.save();
		sendEmail({
			key: process.env.API_KEY,
			username: "User",
			subject: "Question is recorded",
			email,
			body: `We've got your question and will answer it as soon as possible!<br><br>Question: ${question}`
		});
	}
	catch (error)
	{
		console.log(error);
	}
})

app.get('/events', async (req, res) =>
{
	let events = {};
	
	try {
		Event.find({}, (e, arr) => {
			if (req.query.accepted === "true")
			arr = arr.filter(el => el.accepted == true);
			arr = arr.forEach(el => {
				events[el._id] = el;
			});
			res.status(200).send(events);
		});
	} catch (error) {
		console.log(error);
		res.status(404).send({error: e});
	}
})

app.get('/questions', async (req, res) =>
{
	let questions = {};

	try {
		Question.find({}, (e, arr) => {
			arr = arr.filter(el => el.answered == false);
			arr = arr.forEach(el => {
				questions[el._id] = el;
			});
			res.status(200).send(questions);
		});
	} catch (error) {
		console.log(error);
		res.status(404).send({error: e});
	}
})

app.patch('/event', async (req, res) =>
{
	const {_id, username, email, title, description, date} = req.body;
	
	try
	{
		await Event.updateOne({_id}, {accepted: true});
		sendEmail({
			key: process.env.API_KEY,
			email, username,
			subject: "Your event was accepted",
			body: `Your event request \`${title}' was accepted.<br><br>Details<br>\
			Title: ${title}<br>Description: ${description}<br>Date: ${date.slice(0, 10)}`,
		});
		res.status(200).send({status: "OK"});
	}
	catch (error)
	{
		console.log(error);
		res.status(404).send({error: error});
	}
})

/* ------------------------------------------------------------------------------------------------------------------------------- */

app.get('/question_test', async (req, res) =>
{
	let response = await fetch("http://localhost:4242/question", {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			"email": "hello3@mail.ru",
			"question": "what the fuck is this"
		})
	});
	console.log(response.json().then(a => {console.log(a);}));
});

app.get('/event_test_post', async (req, res) =>
{
	let response = await fetch("http://127.0.0.1:4242/event", {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			"username": "hello1",
			"password": "hello2",
			"email": "ghonyaaaan@gmail.com",
			"title": "hello4",
			"accepted": "true",
			"description": "hello5",
			"date": "2002-08-08",
		})
	});
	console.log(response.json().then(a => {console.log(a);}));
});

app.get('/event_test_patch', async (req, res) =>
{
	let response = await fetch("http://127.0.0.1:4242/event", {
		method: "PATCH",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			"_id": "639d8340e5db9427672b2032"
		})
	});
	console.log(response.json().then(a => {console.log(a);}));
});

app.get('/event_test_get', async (req, res) =>
{
	let response = await fetch("http://localhost:4242/events?accepted=true", {
		method: "GET",
		headers: {'Content-Type': 'application/json'},
	});
	console.log(response.json().then(a => {console.log(a);}));
});

export { app };