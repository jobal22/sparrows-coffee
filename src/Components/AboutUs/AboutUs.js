import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import onehour from '../../Img/1hour.png';
import twohour from '../../Img/2hour.png';
import threehour from '../../Img/3hour.png';
import custom from '../../Img/custom.png';

import './AboutUs.css';

// export default class AboutUs extends Component {
//   render() {
//     const [offsetY, setOffsetY] = useState(0);
//     const handleScroll = () => setOffsetY(window.pageYOffset);
  
//     useEffect(() => {
//       window.addEventListener("scroll", handleScroll);
  
//       return () => window.removeEventListener("scroll", handleScroll);
//     }, []);
//     return (
//       <div className='aboutUs'>
//         {/* <div className='photo1'></div> */}
//         <section className='bookEvent'>
//           <img className='bookEvent__background' />
//           <div className='bookEvent__content'>
//             <h1>Craft Coffee.</h1>
//             <h1>Anywhere.</h1>
//             <button><Link className='aboutUsLink' to={`/book`}>Book Event</Link></button>
//           </div>
//         </section>
//         <section className='passion'>
//           <h3>Our Passion</h3>
//           <p>Who says no to coffee? Did you know a person’s ability to smell can evoke particular memories; the scent of a freshly pulled shot of espresso will bring your guests back to that star-lit night they were given the opportunity to sip on a drink they just could not forget. You bring the people, we bring the coffee. Let us make your dreams come true by providing not only the best coffee but enhancing your event that allows you to sit down and enjoy..... Or get up and get more. At Sparrows, there is no limit. We are committed to offering you the best coffee at your next event!</p>
//         </section>
//         <section className='teamMember'>
//           <h1>Coffee with Personality</h1>
//           <button><Link className='aboutUsLink' to={`/team`}>Meet Our Team</Link></button>
//         </section>
//         <section className='passion custom'>
//           <h3>Packages</h3>
//           <p>Choose which package best fits your event.  We will have enough product to serve one drink to all your guests and an additional 10%, just in case.  Make your selection when filling out the booking form.</p>
//           <div className='priceCollection'>
//             <div className='priceOptions'>
//               <div className='prices'>
//                 <img className='priceLogo' src={onehour}/>
//                 <p className='priceInfo'>$350 | 50 guests</p>
//               </div>
//               <div className='prices'>
//                 <img className='priceLogo' src={twohour}/>
//                 <p className='priceInfo'>$700 | 100 guests</p>
//               </div>
//               <div className='prices'>
//                 <img className='priceLogo' src={threehour}/>
//                 <p className='priceInfo'>$1050 | 150 guests</p>
//               </div>
//               <div className='prices'>
//                 <img className='priceLogo' src={custom}/>
//                 <p className='priceInfo'>Customize Your Event</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }

// import React from 'react'

export default function AboutUs() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);  
  return (
    <div className='aboutUs'>
      {/* <div className='photo1'></div> */}
      <section className='bookEvent'>
        <img className='bookEvent__background' />
        <div className='bookEvent__content'>
          <h1>Craft Coffee. <br className='bookEvent__break'></br>Anywhere.</h1>
          {/* <h1>Anywhere.</h1> */}
          <button><Link className='aboutUsLink' to={`/book`}>Book Event</Link></button>
        </div>
      </section>
      <section className='passion'>
        <div className='passion__background'/>
        {/* <div className='passion__content'> */}
          <h3>Our Passion</h3>
          <p>Who says no to coffee? Did you know a person’s ability to smell can evoke particular memories; the scent of a freshly pulled shot of espresso will bring your guests back to that star-lit night they were given the opportunity to sip on a drink they just could not forget. You bring the people, we bring the coffee. Let us make your dreams come true by providing not only the best coffee but enhancing your event that allows you to sit down and enjoy..... Or get up and get more. At Sparrows, there is no limit. We are committed to offering you the best coffee at your next event!</p>
        {/* </div> */}
      </section>
      <section className='teamMember'>
        {/* <img className='teamMember__background' style={{transform: `translateY(-${offsetY * 0.8}px)` }}/> */}
        <div className='teamMember__content'>
          <h1>Coffee with Personality</h1>
          <button><Link className='aboutUsLink' to={`/team`}>Meet Our Team</Link></button>
        </div>
      </section>
      <section className='custom'>
        <div className='custom__background'/>
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
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  )
}
