const express = require('express');
const mongoose = require("mongoose");
const User = require('./mongo.js');

require("dotenv").config();

const app = require("./router.js");

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_CONNECT, {useNewUrlParser: true,});

app.listen(process.env.PORT)
{
	console.log('aaaaaaa');
}