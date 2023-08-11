import React from 'react'
import Navbar from '../components/Navbar';
import Footerc from '../components/Footerc';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading = "CONTACT" text="Lets Have a Chat !"/>
      <Form/>
      <Footerc />
      </div>
  )
};

export default Contact;
