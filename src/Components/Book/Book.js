import React, { Component } from 'react';
import Form from '../Form/Form';
import './Book.css';

export default class Book extends Component {
  render() {
    return (
      <div className='book'>
        <section className='bookInfo'>
          <h3>Let's Brew!</h3>
          <p>Tell us more about your upcoming event and we’ll respond with availability and pricing within 24 hours. We can’t wait to celebrate with you!</p>
        </section>
        <section>
          <Form />
        </section>
      </div>
    )
  }
}
