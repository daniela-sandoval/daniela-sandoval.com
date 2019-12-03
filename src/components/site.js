import React from 'react';
import '../Stylesheets/site.scss'

function Site() {
  return (
    <div className="site">
      <h1>this site was made with...</h1>
      <div className="site-stack">
        <div>
          <p><span role="img" aria-label="react">⚛️</span>React</p>
          <p><span role="img" aria-label="burger">🍔</span>React Burger Menu</p>
          <p><span role="img" aria-label="dance">💃🏻</span>Radium</p>
          <p><span role="img" aria-label="style">💅🏼</span>Styled Components</p>
        </div>
        <div>
          <p><span role="img" aria-label="bow">🎀</span>Sass</p>
          <p><span role="img" aria-label="leaves">🌿</span>GitHub</p>
          <p><span role="img" aria-label="pen">🖌</span>Adobe Illustrator</p>
          <p><span role="img" aria-label="love">💖</span>Lots of love</p>
        </div>
      </div>
    </div>
  )
}

export default Site;
