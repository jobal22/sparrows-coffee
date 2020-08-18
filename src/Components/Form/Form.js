import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import Context from '../../context';
import emailjs from 'emailjs-com';
import config from '../../.config';
import Swal from 'sweetalert2';
import {normalizeInput, vlidateInput} from '../../helpers';
import PhoneInput from 'react-phone-number-input/input';
import './Form.css';

const Required = () => (
  <span className='AddAddress__required'>(required)</span>
)

export default class Form extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  static contextType = Context;

  state = {
    name: {
      touched: false,
      value: '',
    },
    email: {
      touched: false,
      value: '',
    },
    phone: {
      touched: false,
      value: '',
    },
    date: {
      touched: false,
      value: '',
    },
    location: {
      touched: false,
      value: '',
    },
    packageOption: {
      touched: false,
      value: '',
    },
    eventInfo: {
      touched: false,
      value: '',
    },
    notes: {
      touched: false,
      value: '',
    }
  }

  handleName = (e) => {
    let {name} = this.state
    name.value = e.target.value
    this.setState({name})
  }

  handleEmail = (e) => {
    let {email} = this.state
    email.value = e.target.value
    this.setState({email})
  }

  handlePhone= (e) => {
    let {phone} = this.state
    phone.value = e.target.value
    this.setState({phone})
    console.log('look', {phone})
  }

  handleEventDate = (e) => {
    let {date} = this.state
    date.value = e.target.value
    this.setState({date})
  }
  
  handleEventLocation = (e) => {
    let {location} = this.state
    location.value = e.target.value
    this.setState({location})
  }

  handlePackage = (e) => {
    let {packageOption} = this.state
    packageOption.value = e.target.value
    this.setState({packageOption})
  }

  handleEventInfo = (e) => {
    let {eventInfo} = this.state
    eventInfo.value = e.target.value
    this.setState({eventInfo})
  }

  handleNotes = (e) => {
    let {notes} = this.state
    notes.value = e.target.value
    this.setState({notes})
  }

  handleFormSubmit = (e) => {
    e.preventDefault(e)
    const newGuest = {
      name: this.state.name.value,
      email: this.state.email.value,
      phone: this.state.phone.value,
      date: this.state.date.value,
      location: this.state.location.value,
      packageOption: this.state.packageOption.value,
      eventInfo: this.state.eventInfo.value,
      notes: this.state.notes.value,
    }
    // console.log(newGuest)
    const props = this.props.props
    Swal.fire({title: 'Booking Information Sent!', width: 300, confirmButtonColor: '#9CA7AD'})
    .then(() => {
    props.history.push('/')})
    .catch(error => {
      Swal.fire({title: 'Oops!', text: 'Booking information failed', width: 300, confirmButtonColor: '#9CA7AD'})
      console.error(error)
      this.setState({ error })
    })
    emailjs.sendForm('gmail', `${config.SID}`, e.target, `${config.UID}`)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }

  // sendEmail (event) {
  //   event.preventDefault();
  //   emailjs.sendForm('gmail', `${config.SID}`, event.target, `${config.UID}`)
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

  render() {
    console.log('jobal look', this.props.props.history)
    const phoneValue = this.state.phone.value;
    const phoneFirstThree = phoneValue.substring(0,3);
    const phoneNextThree = phoneValue.substring(3,6);
    const phoneNextFour = phoneValue.substring(6,10);
    function formatPhone (x,y,z) {
      return `(${x}) ${y}-${z}`
    }
    // const [value,setValue] = useState();
    return (
      <div className='form'>
        <form
          className='book__form'
          onSubmit={(e) => this.handleFormSubmit(e)}
          // onSubmit={this.sendEmail}
        >
          <div className='formInfo'>
            <label htmlFor='name'>
              Full Name:
              {' '}
              <Required /> {' '}
            </label>
            <br></br>
            <input
              type='text'
              name='name'
              id='name'
              aria-label="Name"
              // placeholder='123 Lake Ln'
              onChange={this.handleName}
              required
            />
          </div>
          <div className='formInfo'>
            <label htmlFor='email'>
              Email:
              {' '}
              <Required /> {' '}
            </label>
            <br></br>
            <input
              type='text'
              name='email'
              id='email'
              aria-label="email"
              // placeholder='Fort Worth'
              onChange={this.handleEmail}
              required
            />
          </div>
          <div className='formInfo'>
            <label htmlFor='phone'>
              Phone:
              {' '}
              <Required /> {' '}
            </label>
            <br></br>
            <input
              type='text'
              name='phone'
              id='phone'
              aria-label="phone"
              placeholder='(###) ###-####'
              value= {formatPhone(phoneFirstThree, phoneNextThree,phoneNextFour)}

              onChange={this.handlePhone}
              required
            />
            {/* <PhoneInput
              defaultCountry="US"
              // value={value}
              type='text'
              name='phone'
              id='phone'
              aria-label="phone"
              placeholder='(###) ###-####'
              required
              onChange={this.handlePhone}
            /> */}
          </div>
          {/* <div className='formInfo'>
            <label htmlFor='type' onChange={this.handleType}>
              Event Type:
              <br></br>
              <select>
                <option>--Select--</option>
                <option>Church</option>
                <option>Conference of Expo</option>
                <option>Corporate or Office Event</option>
                <option>Retail Event</option>
                <option>Marketing or Style Shoot</option>
                <option>Tenant or Resident Event</option>
                <option>Trial for Permanent Location</option>
                <option>Wedding</option>
                <option>Other</option>
              </select>
            </label>
          </div> */}
          {/* <div className='formInfo'>
            <label htmlFor='company'>
              Company (Corporate Only):
            </label>
            <br></br>
            <input
              type='text'
              name='company'
              id='company'
              aria-label="company"
              // placeholder='LA'
              onChange={this.handleCompany}
            />
          </div> */}
          <div className='formInfo'>
            <label htmlFor='date'>
            Event Date:
              {' '}
              <Required /> {' '}
            </label>
            <br></br>
            <input
              type='date'
              name='date'
              id='date'
              aria-label="date"
              placeholder='MM/DD/YYYY'
              onChange={this.handleEventDate}
              required
            />
          </div>
          {/* <div className='formInfo'>
            <label htmlFor='date' onChange={this.handleEventDate}>
              Event Date:
            </label>
            <br></br>
            <DatePicker
              // selected={this.state.startDate}
              onChange={this.handleChange} className='input'
            />
          </div> */}
          <div className='formInfo'>
            <label htmlFor='location'>
              Event Location (Venue):
              {' '}
              <Required /> {' '}
            </label>
            <br></br>
            <input
              type='text'
              name='location'
              id='location'
              // defaultValue='N/A'
              onChange={this.handleEventLocation}
              required
            />
          </div>
          <div className='formInfo'>
            <label htmlFor='packageOption'>
              Select Package:
              {' '}
              <Required /> {' '}
              <br></br>
              <select required name='packageOption' id='packageOption' onChange={this.handlePackage}>
                <option value=''>--Select--</option>
                <option value='25 drinks | 1 Hour of Service | $400'>25 drinks | 1 Hour of Service | $400</option>
                <option value='50 drinks | 1 Hour of Service | $500'>50 drinks | 1 Hour of Service | $500</option>
                <option value='75 drinks | 1 Hour of Service | $550'>75 drinks | 1 Hour of Service | $550</option>
                <option value='100 drinks | 1 Hour of Service | $650'>100 drinks | 1 Hour of Service | $650</option>
                <option value='150 drinks | 1 Hour of Service | $700'>150 drinks | 1 Hour of Service | $700</option>
                <option value='Custom Event (Please fill out "Additional Request" field)'>Custom Event (Please fill out "Additional Request" field)</option>
              </select>
            </label>
          </div>
          {/* <div className='formInfo'>
            <label htmlFor='guest'>
              Expected Guests:
              {' '}
            </label>
            <br></br>
            <input
              type='text'
              name='guest'
              id='guest'
              // defaultValue='N/A'
              onChange={this.handleExpectedGuests}
            />
          </div> */}
          <div className='formInfo'>
            <label htmlFor='eventInfo'>
            Please Tell Us About Your Event:
              {' '}
            </label>
            <br></br>
            <input
              type='text'
              name='eventInfo'
              id='eventInfo'
              // defaultValue='N/A'
              onChange={this.handleEventInfo}
            />
          </div>
          <div className='formInfo'>
            <label htmlFor='notes'>
              Additional Requests:
            </label>
            <br></br>
            <textarea
              name='notes'
              id='notes'
              // defaultValue='N/A'
              onChange={this.handleNotes}
            />
           </div>
          {/* <div className='formInfo'>
            <label htmlFor='inquiry' onChange={this.handleInquiry}>
              Please Provide:
              <br></br>
              <select>
                <option>--Select--</option>
                <option>More Information</option>
                <option>Quote</option>
                <option>Invoice</option>
              </select>
            </label>
          </div> */}
          <div className='form__button'>
            <button type='submit'>Let's Brew!</button>
          </div>
        </form>
      </div>
    )
  }
}
