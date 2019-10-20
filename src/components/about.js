import React, { Component } from 'react'
import styled from 'styled-components'
import Bio from './bio.js'
import Stack from './stack.js'
import Site from './site.js'
import { ReactComponent as Logo } from '../img/logo1.svg'
import '../Stylesheets/about.scss'

const StyledLogo = styled(Logo) `
  height: 5vw;
  position: fixed;
  right: 36px;
  top: 10px;
  z-index: 10;
`

class About extends Component {
  render () {
    return (
      <div className="about-page">
        <a href="/">
          <StyledLogo />
        </a>
        <Bio />
        <hr></hr>
        <Stack />
        <hr></hr>
        <Site />
      </div>
    )
  }
}

export default About;
