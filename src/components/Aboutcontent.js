import './Abountcontentstyle.css'
import React1 from '../assets/react1.jpg';


import React from 'react'
import { Link } from 'react-router-dom'

const Aboutcontent = (props) => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>{props.heading}</h1>
        <p>
            Im a react Front-End developer willing to creatw more user-friendly websites
        </p>
        <Link to='/Contact'>
            <button className='btn'>Contact</button>
        </Link>
      </div>

      <div className='right'>
        <div className='img-container'>
            <div>
                <img src={React1} className='img'alt='true' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent
