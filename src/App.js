import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Context from './context';
import logo from './Img/SCLogoBig.png';
import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import AboutUs from './Components/AboutUs/AboutUs';
import Book from './Components/Book/Book';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import config from './.config';
import './App.css';

export default class App extends Component {

  state = {
    guests: [],
    addGuest: {
      hasError: false,
      touched: false,
      name: '',
    }
  }

  setGuests = guests => {
    this.setState({
      guests
    })
  }

  handleAddGuest = guest => {
    this.setState({
      guests: [...this.state.guests, guest],
    })
  }

  renderMainRoutes() {
    return (
      <Switch>
        <Route exact path = "/" component={AboutUs}/>
        <Route  path = "/book" component={Book}/>
        <Route  path = "/team" component={Team}/>
        <Route  path = "/contact" component={Contact}/>
      </Switch>
    )
  }

  render() {
    const contextValue = {
      guests: this.state.guests,
      updateGuest: this.updateGuest,
    }
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
        <div>
          <Context.Provider value={contextValue}>
            <main className='App__main'>{this.renderMainRoutes()}</main>
          </Context.Provider>
        </div>
        <footer className="App__footer">
          {/* <hr /> */}
          {/* <ol className='footInfo'>
            <li><Link className='footLink'>FAQ</Link></li>
            <li><Link className='footLink'>CONTACT US</Link></li>
          </ol> */}
          <ol className='footIcon'>
            <li><a className='fIcon far fa-envelope' href={`mailto:${config.email}`} target='_blank'></a></li>
            <li><a className='fIcon fab fa-linkedin-in'></a></li>
            {/* <li><Link className='fIcon fab fa-facebook-f'></Link></li> */}
            <li><a className='fIcon fab fa-instagram' href='https://www.instagram.com/sparrowscoffeega/' target='_blank'></a></li>
          </ol>
          <p>COPYRIGHT © 2020 SPARROWS COFFEE CO. | ALL RIGHTS RESERVED</p>
        </footer>
      </div>
    )
  }
}
