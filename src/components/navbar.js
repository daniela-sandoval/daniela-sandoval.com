import React from 'react';
import { NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import '../Stylesheets/navbar.scss'

const Navbar = () => {
  return (
    <Menu>
      <a id="about" className="menu-item" href="/about">ABOUT</a>
      <a id="projects" className="menu-item" href="/projects">PROJECTS</a>
      <a id="blog" className="menu-item" href="/blog">BLOG</a>
      <a id="contact" className="menu-item" href="/contact">CONTACT</a>
    </Menu>
  )
}
export default Navbar
