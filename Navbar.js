import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='header-items'>
        <Link to="/">Developer</Link>

        <ul className='nav-items'>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/Project" > Project</Link>
            </li>
            <li>
            <Link to="/Skills">Skills</Link>
            </li>
           
        </ul>
    </div>
  )
}

export default Navbar