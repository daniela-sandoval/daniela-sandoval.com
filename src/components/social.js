import React from 'react';
import { faLinkedinIn, faGithubAlt, faMediumM, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Stylesheets/social.scss'

function Social() {
  return (
    <div className="social-container">
      <div className="socials">
        <a href="https://www.linkedin.com/in/danielamsandoval/" target="_blank" rel="noopener noreferrer">
          <div className="icons">
            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '17px'}}/>
          </div>
        </a>
        <a href="https://github.com/daniela-sandoval" target="_blank" rel="noopener noreferrer">
          <div className="icons">
            <FontAwesomeIcon icon={faGithubAlt} style={{ fontSize: '17px'}}/>
          </div>
        </a>
        <a href="https://medium.com/@daniela.sandoval" target="_blank" rel="noopener noreferrer">
          <div className="icons">
            <FontAwesomeIcon icon={faMediumM} style={{ fontSize: '17px'}}/>
          </div>
        </a>
        <a href="https://twitter.com/danieladotjs" target="_blank" rel="noopener noreferrer">
          <div className="icons">
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '17px'}}/>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Social;

// <div className="copyright">
// <small>&copy; Copyright 2019 <br/>Daniela Sandoval</small>
// </div>
