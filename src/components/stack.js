import React, { Component } from 'react'
import JsIcon from "../img/javascriptIcon.png"
import CssIcon from "../img/css3-logo.png"
import HtmlIcon from "../img/HTML5_Logo.png"
import SassIcon from "../img/sass-logo.png"
import ReactIcon from "../img/react-logo.png"
import ReduxIcon from "../img/redux-logo.png"
import RubyIcon from "../img/ruby-logo.png"
import RailsIcon from "../img/Ruby_On_Rails_Logo.png"
import SqlIcon from "../img/sql-logo.png"
import PostIcon from "../img/elephant.png"
import GitIcon from "../img/Git_icon.svg.png"
import HubIcon from "../img/github.png"
import HeroIcon from "../img/heroku-logo.png"
import IllIcon from "../img/illustrator.png"
import '../Stylesheets/stack.scss'

class Stack extends Component {
  render() {
    return (
      <div className="stack-container">
        <div className="stack-wrapper">
          <div className="front">
            <div className="top-div">frontend</div>
            <div className="bottom-div">
                <div className="stack-list">
                  <div className="column">
                    <div className="language">
                      <img src={JsIcon} alt="javascript" className="stack-pic"/>
                      <p>JavaScript</p>
                    </div>
                    <div className="language">
                      <img src={CssIcon} alt="css" className="stack-pic"/>
                      <p>CSS3</p>
                    </div>
                    <div className="language">
                      <img src={HtmlIcon} alt="html-icon" className="stack-pic"/>
                      <p>HTML5</p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="language">
                      <img src={SassIcon} alt="sass" className="stack-pic"/>
                      <p>Sass</p>
                    </div>
                    <div className="language">
                      <img src={ReactIcon} alt="react" className="stack-pic"/>
                      <p>React</p>
                    </div>
                    <div className="language">
                      <img src={ReduxIcon} alt="redux" className="stack-pic"/>
                      <p>Redux</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="back">
            <div className="top-div">backend</div>
            <div className="bottom-div">
              <div className="stack-list">
                <div className="column">
                  <div className="language">
                    <img src={RubyIcon} alt="ruby" className="stack-pic"/>
                    <p>Ruby</p>
                  </div>
                  <div className="language">
                    <img src={RailsIcon} alt="rails" className="stack-pic"/>
                    <p>Rails</p>
                  </div>
                </div>
                <div className="column">
                  <div className="language">
                    <img src={PostIcon} alt="postgres" className="stack-pic"/>
                    <p>PostgreSQL</p>
                  </div>
                  <div className="language">
                    <img src={SqlIcon} alt="sql-icon" className="stack-pic"/>
                    <p>SQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tools">
            <div className="top-div">tools</div>
            <div className="bottom-div">
              <div className="stack-list">
                <div className="column">
                  <div className="language">
                    <img src={GitIcon} alt="git" className="stack-pic"/>
                    <p>Git</p>
                  </div>
                  <div className="language">
                    <img src={HubIcon} alt="github" className="stack-pic"/>
                    <p>GitHub</p>
                  </div>
                </div>
                <div className="column">
                  <div className="language">
                    <img src={HeroIcon} alt="heroku" className="stack-pic"/>
                    <p>Heroku</p>
                  </div>
                  <div className="language">
                    <img src={IllIcon} alt="illustrator" className="stack-pic"/>
                    <p>Illustrator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stack;
