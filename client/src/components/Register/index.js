import { useRef, useState, useEffect } from 'react';
import {
	faCheck,
	faTimes,
	faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from '../SignIn';
import axios from '../api/axios';
import { FormWrap, Icon } from './RegisterComponents';
require('./App.css')

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setValidName(USER_REGEX.test(user));
	}, [user]);

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd]);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd, matchPwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = USER_REGEX.test(user);
		const v2 = PWD_REGEX.test(pwd);
		if (!v1 || !v2) {
			setErrMsg('Invalid Entry');
			return;
		}
		try {
			const response = await axios.post(
				REGISTER_URL,
				JSON.stringify({ user, pwd }),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true,
				}
			);
			// TODO: remove console.logs before deployment
			console.log(JSON.stringify(response?.data));
			setSuccess(true);
			//clear state and controlled inputs
			setUser('');
			setPwd('');
			setMatchPwd('');
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 409) {
				setErrMsg('Username Taken');
			} else {
				setErrMsg('Registration Failed');
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			{success ? (
				<Login />
			) : (
				<section >
          <Icon to="/">Tumo Labs</Icon>
          
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<form onSubmit={handleSubmit}>
					<h1>Register</h1>
						<label htmlFor="username">
							Username:
							<FontAwesomeIcon
								icon={faCheck}
								className={validName ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={validName || !user ? 'hide' : 'invalid'}
							/>
						</label>
						<input
							type="text"
							id="username"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
							aria-invalid={validName ? 'false' : 'true'}
							aria-describedby="uidnote"
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
						/>
						<p
							id="uidnote"
							className={
								userFocus && user && !validName ? 'instructions' : 'offscreen'
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							4 to 24 characters.
							<br />
							Must begin with a letter.
							<br />
							Letters, numbers, underscores, hyphens allowed.
						</p>

						<label htmlFor="password">
							Password:
							<FontAwesomeIcon
								icon={faCheck}
								className={validPwd ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={validPwd || !pwd ? 'hide' : 'invalid'}
							/>
						</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
							aria-invalid={validPwd ? 'false' : 'true'}
							aria-describedby="pwdnote"
							onFocus={() => setPwdFocus(true)}
							onBlur={() => setPwdFocus(false)}
						/>
						<p
							id="pwdnote"
							className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							8 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a number and a
							special character.
							<br />
							Allowed special characters:{' '}
							<span aria-label="exclamation mark">!</span>{' '}
							<span aria-label="at symbol">@</span>{' '}
							<span aria-label="hashtag">#</span>{' '}
							<span aria-label="dollar sign">$</span>{' '}
							<span aria-label="percent">%</span>
						</p>

						<label htmlFor="confirm_pwd">
							Confirm Password:
							<FontAwesomeIcon
								icon={faCheck}
								className={validMatch && matchPwd ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={validMatch || !matchPwd ? 'hide' : 'invalid'}
							/>
						</label>
						<input
							type="password"
							id="confirm_pwd"
							onChange={(e) => setMatchPwd(e.target.value)}
							value={matchPwd}
							required
							aria-invalid={validMatch ? 'false' : 'true'}
							aria-describedby="confirmnote"
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
						/>
						<p
							id="confirmnote"
							className={
								matchFocus && !validMatch ? 'instructions' : 'offscreen'
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							Must match the first password input field.
						</p>

						<button
							disabled={!validName || !validPwd || !validMatch ? true : false}
						>
							Sign Up
						</button>
					<p>
						Already registered?
						<br />
						<span className="line">
							<a href="/login">Sign In</a>
						</span>
					</p>
					</form>
				</section>
			)}
		</>
	);
};

export default Register;

// import React, { useState } from "react";
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
// }from "./RegisterComponents"

// export const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <Container>
//             <FormH1>Register</FormH1>
//         <Form  onSubmit={handleSubmit}>
//             <FormLabel htmlFor="name">Full name</FormLabel>
//             <FormInput value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
//             <FormLabel htmlFor="email">email</FormLabel>
//             <FormInput value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <FormLabel htmlFor="password">password</FormLabel>
//             <FormInput value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             < FormButton type="submit">Log In</ FormButton>
//         </Form>
//         < FormButton className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</ FormButton>
//     </Container>
//     )
// }

// // import React, { Component } from "react";

// // export default class SignUp extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       fname: "",
// //       lname: "",
// //       email: "",
// //       password: "",
// //     };
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }
// //   handleSubmit(e) {
// //     e.preventDefault();
// //     const { fname, lname, email, password } = this.state;
// //     console.log(fname, lname, email, password);
// //     fetch("http://localhost:3000/register", {
// //       method: "POST",
// //       crossDomain: true,
// //       headers: {
// //         "Content-Type": "application/json",
// //         Accept: "application/json",
// //         "Access-Control-Allow-Origin": "*",
// //       },
// //       body: JSON.stringify({
// //         fname,
// //         email,
// //         lname,
// //         password,
// //       }),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log(data, "userRegister");
// //       });
// //   }
// //   render() {
// //     return (
// //       <form onSubmit={this.handleSubmit}>
// //         <h3>Sign Up</h3>

// //         <div className="mb-3">
// //           <label>First name</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="First name"
// //             onChange={(e) => this.setState({ fname: e.target.value })}
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label>Last name</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Last name"
// //             onChange={(e) => this.setState({ lname: e.target.value })}
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label>Email address</label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             placeholder="Enter email"
// //             onChange={(e) => this.setState({ email: e.target.value })}
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             placeholder="Enter password"
// //             onChange={(e) => this.setState({ password: e.target.value })}
// //           />
// //         </div>

// //         <div className="d-grid">
// //           <button type="submit" className="btn btn-primary">
// //             Sign Up
// //           </button>
// //         </div>
// //         <p className="forgot-password text-right">
// //           Already registered <a href="/sign-in">sign in?</a>
// //         </p>
// //       </form>
// //     );
// //   }
// // }