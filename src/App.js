import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import About from './components/about'
import Social from './components/social'
import Splash from './components/splash'
import Projects from './components/projects'
import './Stylesheets/app.scss'


class App extends React.Component {
  render () {
    return (
      <div className="portfolio">
        <Navbar/>
        <Switch>
          <Route path="/about" component={ About }/>
          <Route path="/projects" component={ Projects }/>
          <Route path="/" component={ Splash }/>
        </Switch>
        <Social/>
      </div>
    );
  }

}

export default App;


// <Route path="/projects" component={ Projects }/>
// <Route path="/blog" component={ Blog }/>
// <Route path="/contact" component={ Contact }/>
