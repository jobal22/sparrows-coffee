import React, { Component } from 'react';
import Form from '../Form/Form';
import Footer from '../../Footer/Footer';
import './Book.css';

export default class Book extends Component {
  render() {
    const props = this.props
    return (
      <div className='book'>
        <section className='bookInfo'>
          <h3>Let's Brew!</h3>
          <p>Tell us more about your upcoming event and we’ll respond with availability and pricing within 24 hours. We can’t wait to celebrate with you!</p>
        </section>
        <section>
          <Form props={props}/>
        </section>
        <Footer />
      </div>
    )
  }
}
