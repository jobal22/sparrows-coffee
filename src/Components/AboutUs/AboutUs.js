import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import twentyfive from '../../Img/25.png';
import fifty from '../../Img/50.png';
import seventyfive from '../../Img/75.png';
import hundred from '../../Img/100.png';
import hundredfifty from '../../Img/150.png';
import plus from '../../Img/Plus.png';
import './AboutUs.css';

export default class AboutUs extends Component {
  render() {
    return (
      <div className='aboutUs'>
        {/* <div className='photo1'></div> */}
        <section className='bookEvent'>
          <h1>Craft Coffee.</h1>
          <h1>Anywhere.</h1>
          <button><Link className='aboutUsLink' to={`/book`}>Book Event</Link></button>
        </section>
        <section className='passion'>
          <h3>Our Passion</h3>
          <p>Sparrows Coffee Cart is a mobile craft coffee that offers an elevated beverage experience for weddings, events, and corporate functions. Since we believe everyone deserves great coffee, we literally bring the cafe experience directly to you. Life’s too short for bad brew, so turn your office, venue, expo booth, or home into a craft beverage lounge full of celebration, excitement, and, of course, great coffee.</p>
        </section>
        <section className='teamMember'>
          <h1>Coffee with Personality</h1>
          <button><Link className='aboutUsLink' to={`/team`}>Meet Our Team</Link></button>
        </section>
        <section className='passion custom'>
          <h3>Packages</h3>
          <p>Choose which package best fits your event.  We will have enough product to serve one drink to all your guests and an additional 10%, just in case.  Make your selection when filling out the booking form.</p>
          <div className='priceCollection'>
            <div className='priceOptions'>
              <div className='prices'>
                <img className='priceLogo' src={twentyfive}/>
                <p className='priceInfo'>$400 | 1 Hour</p>
              </div>
              <div className='prices'>
                <img className='priceLogo' src={fifty}/>
                <p className='priceInfo'>$500 | 1 Hour</p>
              </div>
              <div className='prices'>
                <img className='priceLogo' src={seventyfive}/>
                <p className='priceInfo'>$550 | 1 Hour</p>
              </div>
            </div>
            <div className='priceOptions'>
              <div className='prices'>
                <img className='priceLogo' src={hundred}/>
                <p className='priceInfo'>$650 | 1 Hour</p>
              </div>
              <div className='prices'>
                <img className='priceLogo' src={hundredfifty}/>
                <p className='priceInfo'>$700 | 1 Hour</p>
              </div>
              <div className='prices'>
                <img className='priceLogo' src={plus}/>
                <p className='priceInfo'>Customize</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className='passion custom'>
          <h3>The Craft of Custom</h3>
          <p>Our taste for customization goes far beyond corporate branding. From signature lattes and housemate syrups to custom-designed menus and curated floral arrangements, our passion for bringing events to life is deeply rooted in our love for tailored elements.</p>
        </section> */}
      </div>
    )
  }
}
