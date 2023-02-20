import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-wrapper'>  
        <nav className='navbar'>
            <div id='logo'>
                <a href='#'>Booking.com</a>
            </div>
            <div id='rightBtn'>
                <button id='btn-list'>List your Property</button>
                <button className='auth-btn'>Register</button>
                <button className='auth-btn'>Sign In</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar