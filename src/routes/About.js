import React from 'react'
import Navbar from '../components/Navbar';
import Footerc from '../components/Footerc';
import HeroImg2 from '../components/HeroImg2';
import Aboutcontent from '../components/Aboutcontent';


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I'm a Friendly Front-End Developer"/>
      <Aboutcontent heading="Who am I ?"/>
      <Footerc/>

    </div>
  )
}

export default About;
