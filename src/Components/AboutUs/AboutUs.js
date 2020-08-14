import React, { Component } from 'react';
import './AboutUs.css'

export default class AboutUs extends Component {
  render() {
    return (
      <div className='aboutUs'>
        {/* <div className='photo1'></div> */}
        <section className='bookEvent'>
          <h1>Craft Coffee.</h1>
          <h1>Anywhere.</h1>
          <button>Book Event</button>
        </section>
        <section className='passion'>
          <h3>Our Passion</h3>
          <p>Sparrows Coffee Cart is a mobile craft coffee that offers an elevated beverage experience for weddings, events, and corporate functions. Since we believe everyone deserves great coffee, we literally bring the cafe experience directly to you. Life’s too short for bad brew, so turn your office, venue, expo booth, or home into a craft beverage lounge full of celebration, excitement, and, of course, great coffee.</p>
        </section>
        <section className='team'>
          <h1>Coffee with Personality</h1>
          <button>Meet Out Team</button>
        </section>
      </div>
    )
  }
}
