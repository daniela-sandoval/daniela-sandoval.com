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
            <p><span role="img" aria-label="cat">🐈</span> Daniela is currently leveling up her coding skills or taking a break to play with her cats. After graduating from St. John's University, her love for digital media led her down the rabbit hole of web development. With the help of the Flatiron School and a loving cohort, Daniela is proud to call herself a Software Developer. She is actively pursuing new opportunities to level up her coding skills as she commutes all over NYC. As a developer, she hopes to continue learning, but also help others to love code! </p>
            <p><span role="img" aria-label="cat">🐈</span> Her first steps with coding actually began by trying to insert music players and scrolling through hundreds of different Tumblr themes. It was fun connecting the different combination of words with what was appearing on the browser. Now, opening up developer tools has become second nature when coming across a site that sparks her interest. Becoming a maker of digital spaces leads Daniela into creating applications that are not only unique experiences, but are also functional. Daniela loves interacting with others especially when collaborating on projects because new prospectives open doors to new possibilities.</p>
            <p><span role="img" aria-label="cat">🐈</span> When she's not refactoring code, Daniela is the ultimate cat mom. She loves showing off her two cats Mochi and Lychee. On her spare time, you can find her playing ukulele, watching Great British Bake Off, fighting in Dungeons and Dragons, or playing a relaxing mobile game.</p>
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
            <StyledGlassesBio />
          </div>
        </div>
      </div>
    )
  }
}

export default Bio;
