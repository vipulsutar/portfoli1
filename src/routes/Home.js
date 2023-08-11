import React from 'react'
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Footerc from '../components/Footerc';
import Work from '../components/Work';
const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImage />
        <Work />
        <Footerc />
    </div>
  )
};

export default Home;
