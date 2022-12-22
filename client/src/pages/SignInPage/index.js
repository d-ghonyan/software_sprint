import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Signin, { Login } from "../../components/SignIn";



function SigninPage() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
	  setIsOpen(!isOpen);
	};
  
	return (
	  <div min-height = "100vh" className = "wrapper">
		<Sidebar isOpen={isOpen} toggle={toggle} />
		<Navbar toggle={toggle} />
      <Signin/>

    </div>
  );
}

export default SigninPage;