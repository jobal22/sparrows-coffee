import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Context from './context';
import config from './.config';
import logo from './Img/SCLogoBig.png';
import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import AboutUs from './Components/AboutUs/AboutUs';
import Book from './Components/Book/Book';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import './App.css';

export default class App extends Component {

  state = {
    emails: [],
    addEmails: {
      hasError: false,
      touched: false,
      name: '',
    }
  }

  setEmails = emails => {
    this.setState({
      emails
    })
  }

  // componentDidMount() {
  //   Promise.all([
  //     fetch(`${config.API_ENDPOINT}/api/emails`),
  //   ])
  //     .then(([emailsRes]) => {
  //       if (!emailsRes.ok) return emailsRes.json().then(e => Promise.reject(e))
  //       return Promise.all([emailsRes.json()])
  //     })
  //     .then(([emails]) => {
  //       this.setState({ loading: false, emails})
  //     })
  //     .catch(error => {
  //       console.error({ error })
  //     })
  // }

  handleAddEmails = emails => {
    this.setState({
      emails: [...this.state.emails, emails],
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
      emails: this.state.emails,
      handleAddEmails: this.handleAddEmails,
    }
    return (
      <div className='App-container'>
        <div className='content-wrap'>
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
        </div>
      </div>
    )
  }
}
