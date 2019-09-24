import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import { fadeIn, slideInLeft} from 'react-animations'
import '../Stylesheets/navbar.scss'

const styles = {
  fadeIn: {
    animation: 'x 0.3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  slideInLeft: {
    animation: '0.5s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}

class Navbar extends Component {

  componentWillUnmount() {
    debugger
  }

  render() {
    return (
      <StyleRoot>
        <div className="sidebar-modal">
          <div className="overlay" style={styles.fadeIn}></div>
          <div className="menu-wrapper">
            <div className="menu" onClick={this.props.toggleNav} style={styles.slideInLeft}>
              <div className="close-btn">
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
