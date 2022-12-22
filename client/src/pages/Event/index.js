import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import Sidebar from "../../components/SideBar";


const EventsPage = () => {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
	  setIsOpen(!isOpen);
	};


  return (
    <>
			<Sidebar isOpen={isOpen} toggle={toggle} />
		<Navbar toggle={toggle} />
		<Services/>
		<Footer/>
    </>
  );
};

export default EventsPage;
