import React from 'react'
import "../styles/Slidemenu.css"

const Slidemenu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`sliding-menu ${isOpen ? 'open' : ''}`}>
    <div className='menu-content'>
    <button onClick={closeMenu}>Close</button>
        <ul>
            <li>Rooms</li>
            <li>Availability</li>
            <li>More...</li>
            {/* Add more menu items as needed */}
        </ul>
        
    </div>
</div>
  )
}

export default Slidemenu