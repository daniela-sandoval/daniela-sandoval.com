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
          <h1>hi, i'm daniela!</h1>
          <h4>full stack software developer</h4>
          <h4 className="sub-line">brooklyn, ny</h4>
          <div className="bio-text">
            <p><span role="img" aria-label="cat">🐈</span> After graduating from St. John's University, my love for digital media led med down the rabbit hole of web development. With the help of the Flatiron School and a loving cohort, I am proud to call myself a Software Developer. I'm actively pursuing new opportunities to level up my coding skills as I commutes all over NYC. As a developer, I hope to continue learning, but also help others learn to love code! </p>
            <p><span role="img" aria-label="cat">🐈</span> My first steps with coding actually began by trying to insert music players into the perfect Tumblr theme. Becoming a maker of digital spaces inspires me into creating applications that are not only unique experiences, but also functional. I love interacting with others especially when collaborating on projects because new prospectives open doors to new possibilities.</p>
            <p><span role="img" aria-label="cat">🐈</span> When I'm not refactoring code, I am the ultimate cat mom. I love to show off my two cats Mochi and Lychee. On my spare time, you can find me playing ukulele, watching Great British Bake Off, fighting in Dungeons and Dragons, or playing a relaxing mobile game.</p>
          </div>
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
            <StyledGlassesBio className="svg-glasses"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio;
