import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
import './footerstyles.css'

import React from 'react'

const Footerc = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='left'>
        <div className='location'>
            <FaHome size={20} style={{color : "#fff",marginRight: "2rem"}} />
                <div>
                <p>joshibaug,kalyan</p>
                <p>mumbai</p>
                </div>
        </div>
        <div className='phone'>
            <h4>
            <FaPhone size={20} style={{color : "#fff",marginRight: "2rem"}}/>+91 9833238091
            </h4>
        </div>
        <div className='email'>
            <h4>
            <FaMailBulk size={20} style={{color : "#fff",marginRight: "2rem"}}/>sutarvipul675#gmail.com
            </h4>
        </div>
        </div>
        <div className='right'>
            <h4>ABOUT ME</h4>
            <p>currently pursing degree of B.E. in information  technology from Vidyalankar institute of Technology</p>
            <div className='socials'>
            <a 
            href='https://www.facebook.com/vipul.sutar.165'>
           <FaFacebook size={30} style={{color : "#fff",marginRight: "1rem"}} />
           </a>
           <a 
            href='https://www.instagram.com/vipul_sutar_1501/'>
           <FaInstagram size={30} style={{color : "#fff",marginRight: "1rem"}} />
           </a>
           <a 
            href='https://www.linkedin.com/in/vipul-sutar-13415321b/'>
           <FaLinkedin size={30} style={{color : "#fff",marginRight: "1rem"}} />
           </a>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Footerc

