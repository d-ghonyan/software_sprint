import React, { useState } from "react";
import Faq from "../components/FAQ/index";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

export function FaqPage() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
	  setIsOpen(!isOpen);
	};
  
	return (
	  <>
		<Sidebar isOpen={isOpen} toggle={toggle} />
		<Navbar toggle={toggle} />

		<Faq/>
		<Footer/>
	</>
  );
}

export default FaqPage;