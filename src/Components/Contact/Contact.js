import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';
import config from '../../.config';
import Swal from 'sweetalert2';
import './Contact.css';

const Required = () => (
  <span className='AddAddress__required'>(required)</span>
)

class Contact extends Component {
  state = {
    name: {
      touched: false,
      value: '',
    },
    email: {
      touched: false,
      value: '',
    },
    message: {
      touched: false,
      value: '',
    },
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

  handleMessage = (e) => {
    let {message} = this.state
    message.value = e.target.value
    this.setState({message})
    // .then(() => this.setState(() => ({
    //   toMain: true
    // })))
  }

  submitForm (e) {
    e.preventDefault()
    // this.props.history.push('/');
    Swal.fire({title: 'Message Sent!', width: 300, confirmButtonColor: '#9CA7AD'})
    .then(() => {
    this.props.history.push('/')})
    .catch(error => {
      Swal.fire({title: 'Oops!', text: 'Message Failed', width: 300, confirmButtonColor: '#9CA7AD'})
      console.error(error)
      this.setState({ error })
    })
    emailjs.sendForm('gmail', `${config.CID}`, e.target, `${config.UID}`)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }

  // sendEmail (event) {
  //   event.preventDefault();
  //   emailjs.sendForm('gmail', `${config.CID}`, event.target, `${config.UID}`)
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }
  
  render() {
    console.log(this.props)
    return (
      <div className='contact'>
        <div className='contactFormat'>
          <section className='contactInfo'>
            <h3>Let's Chat</h3>
          </section>
          <section>
            <form 
              className='contact__form'
              onSubmit={this.submitForm.bind(this)}
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
                <label htmlFor='message'>
                  Additional Requests:
                  {' '}
                  <Required /> {' '}
                </label>
                <br></br>
                <textarea
                  name='message'
                  id='message'
                  // defaultValue='N/A'
                  onChange={this.handleMessage}
                  required
                />
            </div>
            <div className='form__button'>
              <button type='submit'>Submit</button>
            </div>
            </form>
          </section>
        </div>
      </div>
    )
  }
}

export default withRouter(Contact);