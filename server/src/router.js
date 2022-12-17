import express from 'express';
import mongoose from "mongoose";
import {Event, Question} from './mongo.js';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';
import hbs from 'hbs';
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();

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
	
	try
	{
		const event = new Event({username, password, email, accepted, description, title, date});
		await event.save();
		res.status(200).send({status: "OK"});
	}
	catch (error)
	{
		console.log(error);
		res.status(404).send({error: error});
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
		})
	} catch (error) {
		console.log(error);
		res.status(404).send({error: e});
	}
})

app.patch('/event', async (req, res) =>
{
	const {_id} = req.body;
	
	try
	{
		await Event.updateOne({_id}, {accepted: true});
		res.status(200).send({status: "OK"});
	}
	catch (error)
	{
		console.log(error);
		res.status(404).send({error: error});
	}
})

app.get('*',(req,res)=>{
	res.render('404',{
		title:'404',
		name:'dve'
	})
})

/* ------------------------------------------------------------------------------------------------------------------------------- */

app.get('/event_test_post', async (req, res) =>
{
	let response = await fetch("http://localhost:4242/event", {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			"username": "hello1",
			"password": "hello2",
			"email": "hello3@mail.ru",
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
	let response = await fetch("http://localhost:4242/event", {
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