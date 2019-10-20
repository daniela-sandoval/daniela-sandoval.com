import React, { Component } from 'react';
import { ReactComponent as Logo } from '../img/logo1.svg'
import styled from 'styled-components'
import FlorPic1 from '../img/florpic2.png'
import '../Stylesheets/projects.scss'


const StyledLogo = styled(Logo) `
  position: fixed
  height: 5vw;
  right: 36px;
  top: 10px;
  z-index: 10;
`

class Projects extends Component {
  render () {
    return (
      <div className="project-container">
        <a href="/">
          <StyledLogo />
        </a>
        <h1>projects</h1>
        <div className="project-list">
          <div className="single-project">
            <div className="project-pics" style={{backgroundImage: `url(${FlorPic1})`}}></div>
            <div className="information">
              <h2>Floriography</h2>
              <h4>August 2019</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Tech: Rails, ActionMailer, React, Redux, Watson Tone Analyzer</p>
              <hr></hr>
              <div className="btns">
                <a href="https://github.com/daniela-sandoval/Floriography-App-Frontend" target="_blank" rel="noopener noreferrer"><button>front</button></a>
                <a href="https://github.com/daniela-sandoval/Floriography-App-Backend" target="_blank" rel="noopener noreferrer"><button>back</button></a>
                <a href="https://floriography.herokuapp.com" target="_blank" rel="noopener noreferrer"><button>live</button></a>
                <a href="https://youtu.be/3J0I3uoayso" target="_blank" rel="noopener noreferrer"><button>demo</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects;
