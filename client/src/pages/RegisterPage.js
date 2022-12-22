import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Sidebar from "../components/SideBar";

function RegisterPage() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
	  setIsOpen(!isOpen);
	};
  
	return (
	  <div min-height = "100vh" className = "wrapper">
		<Sidebar isOpen={isOpen} toggle={toggle} />
		<Navbar toggle={toggle} />
      <Register/>

    </div>
  );
}

export default RegisterPage;