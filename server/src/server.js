import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv'
import {mail} from "./mail.js";

dotenv.config();

import { app } from "./router.js";

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_CONNECT, {useNewUrlParser: true,});

app.listen(process.env.PORT)
{
	console.log(`listening on port ${process.env.PORT}`);
}