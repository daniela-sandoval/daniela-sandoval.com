import React, { Component } from 'react'
import daniela from '../img/daniela3.png'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Glasses } from '../img/glasses.svg'
import Resume from '../img/Daniela-Sandoval-Resume-2019.pdf'
import '../Stylesheets/bio.scss'

const float = keyframes `
  0% {
    transform: translatey(6px) rotate(6deg);
  }
  50% {
    transform: translatey(-6px) rotate(-6deg);
  }
  100% {
    transform: translatey(6px) rotate(6deg);
  }
`

const StyledGlassesBio = styled(Glasses) `
  opacity: 1;
  height: 4.1vw;
  animation: ${float} 3s ease-in-out infinite;
`

class Bio extends Component {

  handleClick = () => {
    debugger
  }

  render () {
    return (
      <div className="bio-container">
        <div className="profile">
          <h1>daniela sandoval</h1>
          <h4>full stack web developer</h4>
          <h4 className="sub-line">brooklyn, ny</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="profile-btns">
              <a href={ Resume } download>
                <button className="resume-btn">RESUME</button>
              </a>
          </div>
        </div>
        <div className="visual">
          <div className="image-wrapper">
            <div className="me-pic" style={{backgroundImage: `url(${daniela})`}}></div>
          </div>
          <div className="glasses">
            <StyledGlassesBio />
          </div>
        </div>
      </div>
    )
  }
}

export default Bio;
