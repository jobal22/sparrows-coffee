import React, { Component } from 'react';
import linc from '../../Img/Family.jpg';
import Footer from '../../Footer/Footer';
import './Team.css';

export default class Team extends Component {
  render() {
    return (
      <div className='team'>
        <div className='team__content'>
          <div className='teamInfoPic'>
            <img className='profile' src={linc} alt='profile'/>
          </div>
          <div className='teamInfo'>
              <h3>Lincoln Cieply, Owner</h3>
              <p>Sparrows Coffee derives from my heart’s desire and love for delicious coffee. It all started with my sippy cup when I was four years old. Yup, you can re-read that. My mother introduced me to this black magic liquid that I now like to call pure delight. For me it is so much more than just coffee. Coffee brings people together. Studying in Kauai, Hawaii I enjoyed some of the best cups of Joe which is where my love for the magic beans grew to the next level. Not to mention my heart, where I met my beautiful bride Camila in 2018 and convinced her to move to beautiful Georgia. After living in ATL for one whole year, we welcomed our precious baby boy, Atticus Cieply into this world on December 26th, 2019!</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
