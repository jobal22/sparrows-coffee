import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import twentyfive from '../../Img/25.png';
import fifty from '../../Img/50.png';
import seventyfive from '../../Img/75.png';
import hundred from '../../Img/100.png';
import hundredfifty from '../../Img/150.png';
import plus from '../../Img/Plus.png';
import onehour from '../../Img/1hour.png';
import twohour from '../../Img/2hour.png';
import threehour from '../../Img/3hour.png';
import fourhour from '../../Img/4hour.png';
import fivehour from '../../Img/5hour.png';
import custom from '../../Img/custom.png';

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
                <img className='priceLogo' src={onehour}/>
                <p className='priceInfo'>$350 | 50 guests</p>
              </div>
              <div className='prices'>
                <img className='priceLogo' src={twohour}/>
                <p className='priceInfo'>$700 | 100 guests</p>
              </div>
              <div className='prices'>
                <img className='priceLogo' src={threehour}/>
                <p className='priceInfo'>$1050 | 150 guests</p>
              </div>
              <div className='prices'>
                <img className='priceLogo' src={custom}/>
                <p className='priceInfo'>Customize Your Event</p>
              </div>

            </div>
            {/* <div className='priceOptions'>
              <div className='prices'>
                <img className='priceLogo' src={fourhour}/>
                <p className='priceInfo'>$650</p>
              </div>
              <div className='prices'>
                <img className='priceLogo' src={fivehour}/>
                <p className='priceInfo'>$700</p>
              </div>
              <div className='prices'>
                <img className='priceLogo' src={custom}/>
                <p className='priceInfo'>Customize Your Event</p>
              </div>
            </div> */}
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
