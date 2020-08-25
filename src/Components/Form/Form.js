import React, { Component } from 'react';
import Context from '../../context';
import emailjs from 'emailjs-com';
import config from '../../.config';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-input-2';
import './Form.css';

const Required = () => (
  <span className='AddAddress__required'>(required)</span>
)

export default class Form extends Component {

  // static propTypes = {
  //   match: PropTypes.shape({
  //     params: PropTypes.object,
  //   }),
  //   history: PropTypes.shape({
  //     push: PropTypes.func,
  //   }).isRequired,
  // };

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
    //took off .target.value due to not working with react-phone-input-2
    phone.value = e
    this.setState({phone})
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

  render() {
    return (
      <div className='form'>
        <form
          className='book__form'
          onSubmit={(e) => this.handleFormSubmit(e)}
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
            <PhoneInput
              country='us'
              regions={'north-america'}
              value={'this.state.phone.value'}
              disableCountryCode='true'
              inputProps={{
                name: 'phone',
                required: true,
                // autoFocus: true,
                placeholder:'(###) ###-####',
              }}
              onChange={this.handlePhone}
            />
          </div>
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
                <option value='1 hour | $350 | 50 guests'>1 hour | $350 | 50 guests</option>
                <option value='2 hour | $700 | 100 guests'>2 hour | $700 | 100 guests</option>
                <option value='3 hour | $1050 | 150 guests'>3 hour | $1050 | 150 guests</option>
                <option value='Custom Event (Please fill out "Additional Request" field)'>Custom Event (Please fill out "Additional Request" field)</option>
              </select>
            </label>
          </div>
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
              onChange={this.handleNotes}
            />
           </div>
          <div className='form__button'>
            <button type='submit'>Let's Brew!</button>
          </div>
        </form>
      </div>
    )
  }
}
