import React, { Component } from 'react';
import { ReactComponent as Logo } from '../img/logo1.svg'
import styled from 'styled-components'
import FlorPic1 from '../img/flor-pic1.png'
import '../Stylesheets/projects.scss'


const StyledLogo = styled(Logo) `
  position: fixed
  height: 6vw;
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
              <h2>Title</h2>
              <h4>info like date</h4>
              <p>asdlkajsdlkajsdlkajsdlakjsdlaksjdlakjsdlakjsdlaksjdlkasjd</p>
              <p>Tech Stack: abc, abc, abc, abc</p>
              <hr></hr>
              <div className="btns">
                <button>code</button>
                <button>live</button>
                <button>demo</button>
              </div>
            </div>
          </div>
          <div className="single-project">
            <div className="project-pics" style={{backgroundImage: `url(${FlorPic1})`}}></div>
            <div className="information">
              <h2>Title</h2>
              <h4>info like date</h4>
              <p>asdlkajsdlkajsdlkajsdlakjsdlaksjdlakjsdlakjsdlaksjdlkasjd</p>
              <p>Tech Stack: abc, abc, abc, abc</p>
              <hr></hr>
              <div className="btns">
                <button>code</button>
                <button>live</button>
                <button>demo</button>
              </div>
            </div>
          </div>
          <div className="single-project">
            <div className="project-pics" style={{backgroundImage: `url(${FlorPic1})`}}></div>
            <div className="information">
              <h2>Title</h2>
              <h4>info like date</h4>
              <p>asdlkajsdlkajsdlkajsdlakjsdlaksjdlakjsdlakjsdlaksjdlkasjd</p>
              <p>Tech Stack: abc, abc, abc, abc</p>
              <hr></hr>
              <div className="btns">
                <button>code</button>
                <button>live</button>
                <button>demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects;
