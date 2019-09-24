import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import { fadeIn, slideInLeft, fadeOut, slideOutLeft} from 'react-animations'
import '../Stylesheets/navbar.scss'

const styles = {
  fadeIn: {
    animation: 'x 0.3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  slideInLeft: {
    animation: '0.6s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  },
  fadeOut: {
    animation: 'x 0.3s',
    animationName: Radium.keyframes(fadeOut, 'fadeOut')
  },
  slideOutLeft: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(slideOutLeft, 'slideOutLeft')
  }
}

class Navbar extends Component {
  state = {
    overDiv: styles.fadeIn,
    menuDiv: styles.slideInLeft
  }
  animation = async() => {
    // debugger
    // this.props.toggleNav()
    await this.domManipulation()
    this.props.toggleNav()
  }

  domManipulation = () => {
    let overlay = document.querySelector("#overlay-js")
    overlay.className = "hide-overlay"
    let menu = document.querySelector("#menu-js")
    menu.className = "hide-menu"
  }

  // componentWillUnmount = () => {
  //   // debugger
  //   let overlay = document.querySelector(".overlay")
  //   overlay.className = "hide-overlay"
  // }

  render() {
    return (
      <StyleRoot>
        <div className="sidebar-modal">
          <div id="overlay-js" className="overlay" style={this.props.status ? styles.fadeIn : styles.fadeOut}></div>
          <div className="menu-wrapper">
            <div id="menu-js" className="menu" onClick={this.animation} style={this.props.status ? styles.slideInLeft : styles.slideOutLeft}>
              <div className="close-btn" onClick={this.props.toggleNav}>
                <button>&times;</button>
              </div>
              <div className="menu-list">
                <a id="about" className="menu-item" href="/about">ABOUT ME</a>
                <a id="projects" className="menu-item" href="/projects">PROJECTS</a>
                <a id="blog" className="menu-item" href="/blog">BLOG</a>
                <a id="contact" className="menu-item" href="/contact">CONTACT ME?</a>
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    )
  }
}
export default Navbar
