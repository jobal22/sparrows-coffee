import React, { Component } from 'react';
import config from '../.config';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
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
