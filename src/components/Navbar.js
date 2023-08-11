import { Link } from 'react-router-dom';
import './Navstyles.css';
 import React, { useState } from 'react';
 import {FaBars,FaTimes} from "react-icons/fa";
 
 const Navbar = () => {
    const[click,setClick] = useState(false);
    const HandleClick=()=>setClick(!click);

    const[color,setcolor]= useState(false);
    const changeColor = () => {
      if(window.scrollY >= 100){
        setcolor(true);
      } else{
        setcolor(false);
      }
    };
    window.addEventListener("scroll",changeColor);



   return (
     <div className={color ? "header header-bg" : "header"}>
       <Link to='/'><h1>Portfolio</h1></Link>
       <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to='/'><h4>Home</h4></Link>
        </li>
        <li>
            <Link to='/Project'><h4>Project</h4></Link>
        </li>
        <li>
            <Link to='/About'><h4>About</h4></Link>
        </li>
        <li>
            <Link to='/Contact'><h4>Contact</h4></Link>
        </li>
       </ul>
       <div className='hamburger' onClick={HandleClick} >
            {click ?   <FaTimes size={20} style={{color : "#fff" }}/> : <FaBars size={20} style={{color : "#fff" }}/>}
          
            
       </div>
     </div>
   );
 };
 
 export default Navbar;
 