

import React, { useEffect, useState } from "react";


import {
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesP,
	Icon
} from "./SeviceElements"
import Popup from "./Popup";
import Item from "./Item";
import axios from 'axios';
import './index.css';



const Services = () => {
	
	const [inputs, setInputs] = useState({});
	const [data, setData] = useState([]);

	

	const apiGet = () => {
		fetch("http://localhost:4242/events?accepted=true")
		  .then((response) => response.json())
		  .then((json) => {
			const arr = [];
			for (const key in json) 
			{
				json[key].date = json[key].date.slice(0, 10);
				arr.push(json[key]);
			}
			setData(arr);
		});
	  };
	

	useEffect(() => {
		apiGet();
	}, [])

	const apiPost = async () => {
		try {
			let response = await fetch("http://localhost:4242/event", {
				method: "POST",
				headers: { "Content-Type": 'application/json' },
				body: JSON.stringify(
					{
						username: inputs.username,
						password: inputs.password,
						email: inputs.email,
						title: inputs.title,
						description: inputs.description,
						accepted: false,
						date: inputs.date,
					}),
			})
			// console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	const handleChange = (event) => {
		event.persist();
		setInputs((inputs) => ({
			...inputs,

			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		apiPost();
		event.target.reset();
		// console.log(inputs);
	};

	return (
		<ServicesContainer id="sevices">
			{/* <Icon to="/">Tumo Labs</Icon> */}
			<ServicesH1>Our Events</ServicesH1>
			<ServicesWrapper>
				{	data &&
					data.map((val) => (
						<Item val ={val} />
					))}
			</ServicesWrapper>

			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="username"
						placeholder="username"
						onChange={handleChange}
						required={true}
					/>
					<br />
					<input
						type="password"
						name="password"
						placeholder="password"
						onChange={handleChange}
						required={true}
					/>
					<br />
					<input
						type="text"
						name="title"
						placeholder="title"
						onChange={handleChange}
						required={true}
					/>
					<br />
					<input
						type="text"
						name="description"
						placeholder="Description"
						onChange={handleChange}
						required={true}
					/>
					<br />
					<input
						placeholder="mail"
						onChange={handleChange}
						type="email"
						name="email"
						required={true}
					></input>
										<br />
					<input
						placeholder="date"
						onChange={handleChange}
						type="date"
						name="date"
						required={true}
					></input>
					<br />
					<br />
					{/* <input type="submit" value="Submit" onChange={handleChange} /> */}
					<button  onChange={handleChange} > Create Event</button> 
				</form >
			</div>
		</ServicesContainer>
	)
}
export default Services;
