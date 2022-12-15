const express = require('express');
const mongoose = require("mongoose");
const User = require('./mongo.js');
const app = express();
const cors = require('cors');
const {randomName} = require("./utils.js");

app.use(cors());

app.use(express.json());

app.post("/new_user", async (req, res) => {
	try {
		const user = new User({name: req.body.name, email: req.body.email, password: req.body.password});
		await user.save();
		res.send({hello: "hello"}); // Auth token?
	}
	catch(e) {
		console.log(e);
		res.send({err: e, status: "oh no", another_status: res.status});
		throw new Error("i'll end you");
	}
});

app.post("/user", async (req, res) => {
	try {
		const response =  await User.find({
			name: req.username,
		});
		if (!response || response.password !== req.body.password)
			res.status(400).send("urod");	
		else
			res.send({hello: "hello"}); // token again
	}
	catch(err) {
		console.log(err);
		res.status(501).send({err: err, status: "what are you doing step user"});
	}
})

module.exports = app;
// router.get('/gettdata/:imei', (req, res, next) => {
// 	Post.find({ 'imei.name': req.params.imei })
// 	  .then((posts) => {
// 		res.json(posts);
// 		console.log(posts);
// 	  })
// 	  .catch(err => console.log(err))
//   });