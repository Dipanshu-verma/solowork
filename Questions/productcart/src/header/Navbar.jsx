import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
  return (
    
    <div className='navbar'>
      <h1>My product App</h1>
      <div>
        <Link to='/' className='nav-link' >
           Home
        </Link>
        <Link to='/product' className='nav-link'  >
            Products 
        </Link>
        <Link to='/cart' className='nav-link' >
           Cart
                   </Link>
      </div>
    </div>
   
  )
}

export default Navbar
