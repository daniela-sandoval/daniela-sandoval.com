import React, { Component } from 'react';
import '../Stylesheets/contact.scss'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Cat } from '../img/cat.svg'

const float = keyframes `
  0% {
    transform: translatey(-10px);
  }
  50% {
    transform: translatey(10px)
  }
  100% {
    transform: translatey(-10px)
  }
`

const StyledCatContact = styled(Cat) `
  height: 15vw;
  animation: ${float} 2s ease-in-out infinite;
`

class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-visual">
          <StyledCatContact/>
        </div>
        <hr></hr>
        <div className="contact-info">
        <h1>send me an email!</h1>
          <h4>daniela.sandoval820@gmail.com</h4>
        </div>
        <p>thanks for stopping by
        <span role="img" aria-label="hand"> 👋🏼</span>
        <span role="img" aria-label="sprout">🌱</span>
        <span role="img" aria-label="spark">✨</span></p>
      </div>
    )
  }
}

export default Contact;
