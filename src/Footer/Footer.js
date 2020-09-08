import React, { Component } from 'react';
import config from '../.config';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="App__footer">
          <ol className='footIcon'>
            <li><a className='fIcon far fa-envelope' href={`mailto:${config.email}`} target='_blank' rel="noopener noreferrer"></a></li>
            <li><a className='fIcon fab fa-linkedin-in' href={''}></a></li>
            <li><a className='fIcon fab fa-instagram' href='https://www.instagram.com/sparrowscoffeega/' target='_blank' rel="noopener noreferrer"></a></li>
          </ol>
          <p>COPYRIGHT © 2020 SPARROWS COFFEE CO. | ALL RIGHTS RESERVED</p>
        </footer>
      </div>
    )
  }
}
