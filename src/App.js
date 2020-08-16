import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from './Img/SCLogoBig.png';
import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import AboutUs from './Components/AboutUs/AboutUs';
import Book from './Components/Book/Book';
import Team from './Components/Team/Team';
import './App.css';

export default class App extends Component {

  renderMainRoutes() {
    return (
      <Switch>
        <Route exact path = "/" component={AboutUs}/>
        <Route  path = "/book" component={Book}/>
        <Route  path = "/team" component={Team}/>
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
        <main className='App__main'>{this.renderMainRoutes()}
        </main>
        <footer className="App__footer">
          {/* <hr /> */}
          <ol className='footInfo'>
            <li><Link className='footLink'>FAQ</Link></li>
            <li><Link className='footLink'>CONTACT US</Link></li>
          </ol>
          <ol className='footIcon'>
            <li><Link className='fIcon far fa-envelope'></Link></li>
            <li><Link className='fIcon fab fa-linkedin-in'></Link></li>
            <li><Link className='fIcon fab fa-facebook-f'></Link></li>
            <li><Link className='fIcon fab fa-instagram'></Link></li>
          </ol>
          <p>COPYRIGHT © 2020 SPARROWS COFFEE CO. | ALL RIGHTS RESERVED</p>
        </footer>
      </div>
    )
  }
}
