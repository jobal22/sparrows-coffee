import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Form.css'

const Required = () => (
  <span className='AddAddress__required'>(required)</span>
)

export default class Form extends Component {


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
            {/* <input
              type='submit'
              value='Submit'
            /> */}
          </div>
          <div className='formInfo'>
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
          </div>
          <div className='formInfo'>
            <label htmlFor='date' onChange={this.handleEventDate}>
              Event Date:
            </label>
            <br></br>
            <DatePicker
              // selected={this.state.startDate}
              onChange={this.handleChange} className='input'
            />
          </div>
          <div className='formInfo'>
            <label htmlFor='location'>
              Event Location (Venue):
              {' '}
            </label>
            <br></br>
            <input
              type='text'
              name='location'
              id='location'
              // defaultValue='N/A'
              onChange={this.handleEventLocation}
            />
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
            <label htmlFor='notes'>
              Tell Us More:
            </label>
            <br></br>
            <textarea
              name='notes'
              id='notes'
              // defaultValue='N/A'
              onChange={this.handleNotes}
            />
           </div>
          <div className='formInfo'>
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
          </div>

          <div className='form__button'>
            <button type='submit'>Let's Brew!</button>
          </div>
        </form>
      </div>
    )
  }
}
