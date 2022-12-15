import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SignIn from '../../components/SignIn';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
}from "./SigninComponents"

const SigninPage = () => {

  return (
    <>
      <Navbar toggle={toggle} />
      <SignIn/>
      <Footer/>
      </>
  );
};



export default SignIn;
