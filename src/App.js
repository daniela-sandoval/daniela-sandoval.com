import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Navbar from './components/navbar';
import About from './components/about'

class App extends React.Component {
  render () {
    return (
      <div className="portfolio">
        <Navbar/>
        <Switch>
          <Route path="/about" component={ About }/>
        </Switch>
      </div>
    );
  }
}

export default App;



// <Route path="/projects" component={ Projects }/>
// <Route path="/blog" component={ Blog }/>
// <Route path="/contact" component={ Contact }/>
