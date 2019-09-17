import React from 'react';
import { NavLink } from 'react-router-dom'
import '../Stylesheets/navbar.scss'

const Navbar = () => {
  return (
    <div className="sidebar">
      <NavLink className="nav-link" exact to='/about'>ABOUT ME</NavLink>
      <NavLink className="nav-link" exact to='/projects'>PROJECTS</NavLink>
      <NavLink className="nav-link" exact to='/blog'>BLOG</NavLink>
      <NavLink className="nav-link" exact to='/contact'>CONTACT</NavLink>
    </div>
  )
}
export default Navbar
