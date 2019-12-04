import React, { Component } from 'react';
import { ReactComponent as Logo } from '../img/logo1.svg'
import FlorPic1 from '../img/florpic2.png'
import Grave from '../img/graveyard.png'
import Bodega from '../img/bodega1.png'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Laptop } from '../img/laptop.svg'
import '../Stylesheets/projects.scss'

const StyledLogo = styled(Logo) `
position: fixed
height: 5vw;
right: 36px;
top: 10px;
z-index: 10;
`

const float2 = keyframes `
  0% {
    transform: translatey(10px);
  }
  50% {
    transform: translatey(-10px)
  }
  100% {
    transform: translatey(10px)
  }
`


const StyledLaptop = styled(Laptop) `
  margin: 40px;
  height: 20vw;
  animation: ${float2} 3s ease-in-out infinite;
`

class Projects extends Component {
  render () {
    return (
      <div className="project-container">
        <a href="/">
          <StyledLogo className="logo"/>
        </a>
        <div className="project-visual">
          <h1>projects</h1>
          <StyledLaptop className="svg-project"/>
        </div>
        <div className="project-list">
          <div className="single-project">
            <div className="project-pics" style={{backgroundImage: `url(${FlorPic1})`}}></div>
            <div className="information">
              <h2>Floriography</h2>
              <h4>August 2019</h4>
              <div className="project-text">
                <p>Communicate in the language of flowers by using either adjectives or text inputs and create bouquets! Discover the different meanings by hovering or explore the garden to see all flowers. If you love what you've created, try emailing it to someone!</p>
                <p><em>Rails · ActionMailer · React · Redux · IBM Watson Tone Analyzer API</em></p>
              </div>
              <hr></hr>
              <div className="btns">
                <a href="https://github.com/daniela-sandoval/Floriography-App-Frontend" target="_blank" rel="noopener noreferrer"><button>front</button></a>
                <a href="https://github.com/daniela-sandoval/Floriography-App-Backend" target="_blank" rel="noopener noreferrer"><button>back</button></a>
                <a href="https://floriography.herokuapp.com" target="_blank" rel="noopener noreferrer"><button>live</button></a>
                <a href="https://youtu.be/3J0I3uoayso" target="_blank" rel="noopener noreferrer"><button>demo</button></a>
              </div>
            </div>
          </div>
          <div className="single-project">
            <div className="project-pics" style={{backgroundImage: `url(${Bodega})`}}></div>
            <div className="information">
              <h2>La Bodega</h2>
              <h4>July 2019</h4>
              <div className="project-text">
                <p>Want to remember your friendly neighborhood deli? Miss NYC? No problem, try shopping and browse through our iconic New York products. Make sure to add money to your wallet every so often! </p>
                <p><em>Rails · JavaScript Web Tokens · React · React Semantics</em></p>
              </div>
              <hr></hr>
              <div className="btns">
                <a href="https://github.com/daniela-sandoval/bodega-app-frontend" target="_blank" rel="noopener noreferrer"><button>front</button></a>
                <a href="https://github.com/daniela-sandoval/bodega-app-backend" target="_blank" rel="noopener noreferrer"><button>back</button></a>
                <a href="https://youtu.be/3J0I3uoayso" target="_blank" rel="noopener noreferrer"><button>demo</button></a>
              </div>
            </div>
          </div>
          <div className="single-project">
            <div className="project-pics" style={{backgroundImage: `url(${Grave})`}}></div>
            <div className="information">
              <h2>The Graveyard</h2>
              <h4>July 2019</h4>
              <div className="project-text">
                <p>No longer will you have to wait till October to get your Halloween fix. The Graveyard let's you read, write, and comment on a library stories written by other Internet travels. Be careful, you might summon a ghost or two!</p>
                <p><em>Rails · JavaScript · Bootstrap · Anime.js</em></p>
              </div>
              <hr></hr>
              <div className="btns">
                <a href="https://github.com/daniela-sandoval/The_graveyard/tree/master/project_frountend" target="_blank" rel="noopener noreferrer"><button>front</button></a>
                <a href="https://github.com/daniela-sandoval/The_graveyard/tree/master/project_backend" target="_blank" rel="noopener noreferrer"><button>back</button></a>
                <a href="https://the-graveyard-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button>live</button></a>
                <a href="https://youtu.be/uFopq3tpZD8" target="_blank" rel="noopener noreferrer"><button>demo</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects;
