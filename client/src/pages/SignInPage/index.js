import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Signin, { Login } from "../../components/SignIn";
import "./index.css";

function SigninPage() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
	  setIsOpen(!isOpen);
	};
  
	return (
	  <div className = "sinwrapp">
		<Sidebar isOpen={isOpen} toggle={toggle} />
		<Navbar toggle={toggle} />
      <Signin/>
		<Footer/>
    </div>
  );
}

export default SigninPage;