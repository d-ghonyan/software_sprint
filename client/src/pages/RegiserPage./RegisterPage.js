import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Register from "../../components/Register";
import Sidebar from "../../components/SideBar";
import"./index.css";
function RegisterPage() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
	  setIsOpen(!isOpen);
	};
  
	return (
	  <div ckassname = "wrapp">
		<Sidebar isOpen={isOpen} toggle={toggle} />
		<Navbar toggle={toggle} />
      <Register/>
	<Footer/>
    </div>
  );
}

export default RegisterPage;