import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Context from '../../context';
import './Form.css'

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

  handleFormSubmit = (e) => {
    console.log('hello')
  }

  render() {
    return (
      <div className='form'>
        <form
          className='book__form'
          onSubmit={(e) => this.handleFormSubmit(e)}
        >
          <div className='formInfo'>
            <label htmlFor='FullName'>
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
              type='number'
              name='phone'
              id='phone'
              aria-label="phone"
              placeholder='###-###-####'
              onChange={this.handlePhone}
              required
            />
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
              type='text'
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
            <label htmlFor='type' onChange={this.handlePackage}>
              Select Package:
              {' '}
              <Required /> {' '}
              <br></br>
              <select required>
                <option>--Select--</option>
                <option>25 drinks | 1 Hour of Service | $400</option>
                <option>50 drinks | 1 Hour of Service | $500</option>
                <option>75 drinks | 1 Hour of Service | $550</option>
                <option>100 drinks | 1 Hour of Service | $650</option>
                <option>150 drinks | 1 Hour of Service | $700</option>
                <option>Custom Event (Please fill out "Additional Request" field)</option>
              </select>
            </label>
          </div>
          <div className='formInfo'>
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
