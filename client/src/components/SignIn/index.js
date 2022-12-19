import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';

import axios from '../api/axios';
import { Icon } from './SigninComponents';
const LOGIN_URL = '/auth';

const Signin = () => {
	const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ user, pwd }),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true,
				}
			);

			const accessToken = response?.data?.accessToken;
			const roles = response?.data?.roles;
			setAuth({ user, pwd, roles, accessToken });
			setUser('');
			setPwd('');
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password');
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login Failed');
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			{success ? (
				<section>
          <Icon to="/">Tumo Labs</Icon>
					<h1>You are logged in!</h1>
					<br />
					<p>{/* <a href="#">Go to Home</a> */}</p>
				</section>
			) : (
				<section>
          <Icon to="/">Tumo Labs</Icon>
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<form onSubmit={handleSubmit}>
					<h1>Sign In</h1>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
						/>

						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
						/>
						<button>Sign In</button>
					<p>
						Need an Account?
						<br />
						<span className="line">
							<a href="/signup">Sign Up</a>
						</span>
					</p>
					</form>
				</section>
			)}
		</>
	);
};

export default Signin;

// import React,  { useState } from 'react'
// import {
//   Container,
//   FormWrap,
//   Icon,
//   FormContent,
//   Form,
//   FormH1,
//   FormLabel,
//   FormInput,
//   FormButton,
//   Text
// }from "./SigninComponents"

// const Login = (props) => {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }
//   return (
//     <>
//       <Container>
//         <FormWrap>
//           <Icon to="/">Tumo Labs</Icon>

//           <FormContent>
//             <Form onSubmit={handleSubmit}>
//               <FormH1>Sign in to your account</FormH1>

//               <FormLabel htmlFor="for">Email</FormLabel>

//               <FormInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email"required />

//               <FormLabel htmlFor="for">Password</FormLabel>

//               <FormInput value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

//               <FormButton type="submit">Continue</FormButton>
//               <Text>Forgot password</Text>
//             <FormButton  onClick={() => props.onFormSwitch('register')}><a href = "/signup">Don't have an account? Register here.</a></FormButton>
//             </Form>

//           </FormContent>
//         </FormWrap>
//       </Container>
//     </>
//   );
// };



// export default Login;