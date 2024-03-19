import React from 'react'
import {  faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Navbar.css"



const Navbar = ({ toggleMenu }) => {

    // const hamburger = () =>{
       
    // }


  return (
    <>
    
            <div className='navbar'>
                <div className='hamburger' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} className='ham-burger' />
                </div>
                <div className='navbar-brand'>Dashboard</div>
            </div>
   
    
    
    </>
  )
}

export default Navbar