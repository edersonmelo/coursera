import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
const navbar = () => {
  return (
    <nav>
      <div className='logocontainer'><img src={logo} alt='logo' className='logo'/>
      <p>Littel Lemmon</p></div>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Menu</li>
      <li>Reservations</li>
      <li>Order Online</li>
      <li className='login'>Login</li>
      </ul>
    </nav>
  )
}

export default navbar