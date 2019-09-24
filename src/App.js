import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Navbar from './components/navbar';
import Burger from './components/burger'
import About from './components/about'
import './Stylesheets/app.scss'

class App extends React.Component {
  state = {
    navbar: false
  }

  toggleNav = () => {
    this.setState({navbar: !this.state.navbar})
  }

  render () {
    return (
      <div className="portfolio">
        <Burger toggleNav={this.toggleNav}/>
        {this.state.navbar ? <Navbar toggleNav={this.toggleNav}/> : null}
        <Switch>
          <Route path="/about" component={ About }/>
        </Switch>
      </div>
    );
  }

}

export default App;

// <div onClick={this.toggleNav} className="hamburger">
//   <div className="part1"></div>
//   <div className="part2"></div>
//   <div className="part3"></div>
// </div>

// document.querySelector(".sidebar").style.width = "250px";


// <Route path="/projects" component={ Projects }/>
// <Route path="/blog" component={ Blog }/>
// <Route path="/contact" component={ Contact }/>
