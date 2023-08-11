import "./Heroimagestyles.css";
import introImg from '../assets/project-1.jpg';

import React from 'react'
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="introImg" src={introImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI,I AM VIPUL</p>
            <h1>REACT DEVELOPER</h1>
            <div>
                <Link to="/Project" className="btn">PROJECTS</Link>
                <Link to="/Contact" className="btn btn-light">CONTACTS</Link>
            </div>
        </div>
      
    </div>
  )
}

export default HeroImage;
