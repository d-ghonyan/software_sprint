import React, { useState } from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import { HomeObjOne, HomeObjThree, HomeObjTwo } from "../../components/InfoSection/Data";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import Sidebar from "../../components/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjThree} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
