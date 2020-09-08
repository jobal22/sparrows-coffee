import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Context from '../../context';
import config from '../../.config';
import Swal from 'sweetalert2';
import Footer from '../../Footer/Footer';
import './Contact.css';

const Required = () => (
  <span className='AddEmails__required'>(required)</span>
)

class Contact extends Component {

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
    requests: {
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

  handleRequests= (e) => {
    let {requests} = this.state
    requests.value = e.target.value
    this.setState({requests})
  }

  handleFormSubmit (e) {
    e.preventDefault(e)
    const newEmail = {
      name: this.state.name.value,
      email: this.state.email.value,
      requests: this.state.requests.value,
    }
    fetch(`${config.API_ENDPOINT}/api/emails`, {
      method: 'POST',
      body: JSON.stringify(newEmail),
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(res => {
      return res.json()
    })
    .then((data) => {
      this.context.handleAddEmails(data)
      Swal.fire({title: 'Requests Sent!', width: 300, confirmButtonColor: '#9CA7AD'})
      .then(() => {
      this.props.history.push('/')})
      })
      .catch(error => {
        Swal.fire({title: 'Oops!', text: 'Requests Failed', width: 300, confirmButtonColor: '#9CA7AD'})
        console.error(error)
        this.setState({ error })
      })
      //allows information to be emailed directly to the owner
      emailjs.sendForm('gmail', `${config.CID}`, e.target, `${config.UID}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  render() {
    return (
      <div className='contact'>
        <div className='contact__content'>
          <div className='contactFormat'>
            <section className='contactInfo'>
              <h3>Let's Chat</h3>
            </section>
            <section>
              <form 
                className='contact__form'
                onSubmit={this.handleFormSubmit.bind(this)}
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
                  <label htmlFor='requests'>
                    Additional Requests:
                    {' '}
                    <Required /> {' '}
                  </label>
                  <br></br>
                  <textarea
                    name='requests'
                    id='requests'
                    onChange={this.handleRequests}
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
        <Footer />
      </div>
    )
  }
}

export default withRouter(Contact);