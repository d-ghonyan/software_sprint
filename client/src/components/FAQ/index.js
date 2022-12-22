import { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { data } from "./data";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./styles.css";

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #111;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export default function Faq() {
	const [inputs, setInputs] = useState({});

	const apiPost = async () => {
		try {
			let response = await fetch("http://localhost:4242/question", {
				method: "POST",
				headers: { "Content-Type": 'application/json' },
				body: JSON.stringify(
					{
						question: inputs.question,
						email: inputs.email
					}),
			})
		} catch (error) {
			console.log(error);
		}
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		apiPost();
		event.target.reset();
		// console.log(inputs);
	};

	const handleChange = (event) => {
		event.persist();
		setInputs((inputs) => ({
			...inputs,

			[event.target.name]: event.target.value,
		}));
	};

	const [questions, setQuestions] = useState(data);

	return (
		<div className="p-5">

			{/* 
	<Icon to="/">Tumo Labs</Icon> */}
			{questions.map((question) => (
				<SingleQuestion {...question} />
			))}
				<form onSubmit={handleSubmit}>
				<br />
		<input
			type="email"
			name="email"
			placeholder="Email"
			onChange={handleChange}
			required={true}
		/>
		<br />
		<input
			type="text"
			name="question"
			placeholder="Ask your question"
			onChange={handleChange}
			required={true}
		/>
		<button onChange={handleChange} > Ask</button>
	</form>
		</div>
	);

}
