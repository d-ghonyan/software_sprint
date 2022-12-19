import React, { useEffect, useState } from "react";
import {
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesP
} from "./SeviceElements"
import Popup from "./Popup";
import axios from 'axios';
require('./index.css')

// get event list
// fetch("http://localhost:4242/events?acceptes=true", {method: "GET", headers: {"Content-Type": 'application/json'}})

// post an event
// fetch("http://localhost:4242/event", {method: "POST", headers: {"Content-Type": 'application/json'}, body: JSON.stringify({
// username, password, email, title, descriptione, accepted=false, date(YYYY-MM-DD);
// })})

// post a question
// fetch("http://localhost:4242/question", {method: "POST", headers: {"Content-Type": 'application/json'}, body: JSON.stringify({
// email, question;
// })})


const Services = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [inputs, setInputs] = useState({});

	const togglePopup = () => {
		setIsOpen(!isOpen);
	}
	const [data, setData] = React.useState([]);

	//   const apiGet = async () => {
	//     let response = await fetch("http://localhost:4242/events?accepted=true", { method: "GET", headers: { "Content-Type": 'application/json' } });

	// 	let a = await response.json();

	// 	console.log(Object.values(a));
	// 	setData(a);
	//   };

	// useEffect(()=>{
	// 	fetch("http://localhost:4242/events?accepted=true", { method: "GET", headers: { "Content-Type": 'application/json' } })
	// 	.then((response) => response.json())
	// 	.then((json) => {
	// 		console.log(json);
	// 		setData(json);
	// 	});
	// }, [data])


	// console.log(data);

	//   const apiGet = () => {
	// 	const fetched_data= fetch("http://localhost:4242/events?accepted=true", { method: "GET", headers: { "Content-Type": 'application/json' } })
	//       .then((response) => response.json())
	//       .then((json) => {
	//         console.log(json);
	//         setData(json);
	//       });
	// 	  return fetched_data;
	//   };

	const apiGet = async () => {
		console.log(">>>>>>>\n")
		try {
			let response = await fetch("http://localhost:4242/events?accepted=true", {
				method: "GET",
				headers: {"Content-Type": 'application/json'},
			})
			return response;

			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	setData(apiGet());

	const apiPost = async () => {
		try {
			let response = await fetch("http://localhost:4242/event", {
				method: "POST",
				headers: { "Content-Type": 'application/json' },
				body: JSON.stringify(
					{
						username: "ajshgdjasd",
						password: "ajshgdjasd",
						email: "ajshgdjasd",
						title: inputs.title,
						description: "hellllloloololo",
						accepted: false,
						date: "2002-08-08"//Date("2002-08-08")
					}),
			})
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	//     await fetch("https://jsonplaceholder.typicode.com/posts", {
	//       method: "POST",
	//       body: JSON.stringify({
	//         title: inputs.title,
	//         body: inputs.body,
	//         userId: parseInt(inputs.userId),
	//       }),
	//       headers: {
	//         "Content-type": "application/json; charset=UTF-8",
	//       },
	//     })
	//       .then((response) => response.json())
	//       .then((json) => console.log(json));
	//   };

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
		console.log(inputs);
	};

	return (
		<ServicesContainer id="sevices">
			<ServicesH1>Our Events</ServicesH1>
			<ServicesWrapper>
				{
					data.map((val, i) => (
						<ServicesCard key={i} className="card">
							<ServicesH2>{val.id !== undefined ? val : "kruykuyiuiyurttyuyruruyyt"}</ServicesH2>
							<ServicesP>{val.id}</ServicesP>
							<input
								type="button"
								value="More"
								onClick={togglePopup}
							/>
							{isOpen && <Popup
								content={<>
									<b>{val.idl}</b>
									<p>{val.id}</p>
									<button>Test button</button>
								</>}
								handleClose={togglePopup}
							/>}
						</ServicesCard>
					))}
			</ServicesWrapper>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="title"
						placeholder="title"
						onChange={handleChange}
					/>{" "}
					<br />
					<input
						type="text"
						name="body"
						placeholder="body"
						onChange={handleChange}
					/>
					<br />
					<input
						placeholder="userId"
						onChange={handleChange}
						type="date"
						name="event_date"
					></input>
					<br />
					<input type="submit" value="Submit" onChange={handleChange} />
				</form>
			</div>
		</ServicesContainer>
	)
}
export default Services;
