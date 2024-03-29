import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../Stylesheets/navbar.scss'

const Navbar = () => {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">HOME</a>
      <a id="about" className="menu-item" href="/about">ABOUT</a>
      <a id="projects" className="menu-item" href="/projects">PROJECTS</a>
      <a id="contact" className="menu-item" href="/contact">CONTACT</a>
    </Menu>
  )
}
export default Navbar
// <a id="blog" className="menu-item" href="/blog">BLOG</a>
