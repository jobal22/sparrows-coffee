import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from './Img/SCLogoBig.png';
import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import AboutUs from './Components/AboutUs/AboutUs';
import './App.css';

export default class App extends Component {

  renderMainRoutes() {
    return (
      <Switch>
        <Route exact path = "/" component={AboutUs}/>
      </Switch>
    )
  }

  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          <Link className='navLink' to={'/'}>
            <img className='logo img' src={logo} alt='Logo'/>
          </Link>
          <div className="topnav">
            <div className="hamburger">
              <HamburgerMenu/>
            </div>
          </div>
        </nav>
        <main className='App__main'>
          <Route exact path = "/" component={AboutUs}/>
        </main>
        {/* <AboutUs /> */}
      </div>
    )
  }
}
