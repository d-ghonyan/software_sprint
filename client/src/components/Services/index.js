// https://www.youtube.com/watch?v=27f3B1qndW8
//https://github.com/monsterlessonsacademy/monsterlessonsacademy/tree/221-react-image-slider
// https://www.youtube.com/watch?v=wr3VmbZdVA4
// import React, { useState, useEffect } from "react";

// function Services() {
//   const [data, setData] = useState([]);
//   const [inputs, setInputs] = useState({});

//   //Get Method
//   const apiGet = () => {
//     fetch("http://localhost:4242/events?accepted=true")
//       .then((response) => response.json())
//       .then((json) => {
// 		json = Object.values(json);
//         console.log(json);
//         setData(json);
//       });
//   };

//   //Post Method
//   const apiPost = async () => {
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

//   const handleChange = (event) => {
//     event.persist();
//     setInputs((inputs) => ({
//       ...inputs,

//       [event.target.name]: event.target.value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     apiPost();
//     console.log(inputs);
//   };

//   //   useEffect(() => {
//   //     apiGet();
//   //   }, []);

//   return (
//     <div>
//       My API <br />
//       <button onClick={apiGet}>Fetch API</button>
//       <br />
//       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//       <div>
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>
//               {item.userId},{item.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             placeholder="title"
//             onChange={handleChange}
//           />{" "}
//           <br />
//           <input
//             type="text"
//             name="body"
//             placeholder="body"
//             onChange={handleChange}
//           />
//           <br />
//           <input
//             type="number"
//             name="userId"
//             placeholder="userId"
//             onChange={handleChange}
//           />
//           <br />
//           <input type="submit" value="Submit" onChange={handleChange} />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Services;

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
import './index.css';



const Services = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [inputs, setInputs] = useState({});

	const togglePopup = () => {
		setIsOpen(!isOpen);
	}
	const [data, setData] = useState([]);

	const apiGet = () => {
		fetch("http://localhost:4242/events?accepted=true")
		  .then((response) => response.json())
		  .then((json) => {
			const arr = [];
			for (const key in json) arr.push(json[key]);
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
				{	data &&
					data.map((val) => (
						<ServicesCard key={val._id} className="card">
							<ServicesH2>{val.title}</ServicesH2>
							<ServicesP>{val.description}</ServicesP>
							<input
								type="button"
								value="More"
								onClick={togglePopup}
							/>
							{isOpen && <Popup
								content={<>
									<p>{val._id}</p>
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
						placeholder="description"
						onChange={handleChange}
					/>
					<br />
					<input
						type="text"
						name="body"
						placeholder="username"
						onChange={handleChange}
					/>
					<br />
					<input
						placeholder="password"
						onChange={handleChange}
						type="date"
						name="event_date"
					></input>
										<br />
					<input
						placeholder="userId"
						onChange={handleChange}
						type="date"
						name="event_date"
					></input>
					<br />
					<br />
					<input type="submit" value="Submit" onChange={handleChange} />
				</form>
			</div>
		</ServicesContainer>
	)
}
export default Services;
