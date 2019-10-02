import React, { Component } from 'react'
import styled from 'styled-components'
import Bio from './bio.js'
import Stack from './stack.js'
import { ReactComponent as Logo } from '../img/logo1.svg'
import '../Stylesheets/about.scss'

const StyledLogo = styled(Logo) `
  height: 6vw;
  position: fixed;
  right: 36px;
  top: 10px;
`

class About extends Component {
  render () {
    return (
      <div className="about-page">
        <StyledLogo />
        <Bio />
        <hr></hr>
        <Stack />
      </div>
    )
  }
}

export default About;
