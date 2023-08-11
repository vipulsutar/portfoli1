import React from 'react'
import Navbar from '../components/Navbar';
import Footerc from '../components/Footerc';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects" text="Some of my recent woek"/>
      <Work />
      <PricingCard />
      <Footerc/>
    </div>
  )
}

export default Project;
