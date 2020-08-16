import React, { Component } from 'react';
import linc from '../../Img/Linc.png';
import './Team.css';

export default class Team extends Component {
  render() {
    return (
      <div className='team'>
        <div className='teamInfoPic'>
          <img className='profile' src={linc} />
        </div>
        <div className='teamInfo'>
            <h3>Lincoln Cieply, Owner</h3>
            <p> NEED BIO </p>
        </div>
      </div>
    )
  }
}
