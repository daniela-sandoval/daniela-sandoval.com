import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import About from './components/about'
import Social from './components/social'
import Splash from './components/splash'
import Projects from './components/projects'
import './Stylesheets/app.scss'

const showNav = {
  backgroundColor: "#799ad9b3",
  position: "fixed",
  minHeight: "12vh",
  width: "100vw",
  transition: "0.4s",
  zIndex: "1"
}

class App extends React.Component {
  // state = {
  //   scroll: false
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll)
  // }

  // handleScroll = (e) => {
  //   if (window.scrollY > 100) {
  //     this.setState({scroll: true})
  //   } else if (window.scrollY === 0) {
  //     this.setState({scroll: false})
  //   }
  // }

  render () {
    return (
      <div className="portfolio">
        <Navbar/>
        <div style={window.location.pathname === "/"? null : showNav} className="fake-nav">
        </div>
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
