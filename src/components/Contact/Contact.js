import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <form className="form box-shadow" method="post" name="contact"
      data-netlify="true" netlify-honeypot="bot-field">

      <input type="hidden" name="form-name" value="contact" />

      <p className="hidden">
        <label>Don’t fill this out:<input name="bot-field" /></label>
      </p>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" id="name" required placeholder="John Doe" />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input name="email"
          type="email" id="email" required placeholder="example@email.com" />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input name="tel" type="tel" id="phone" required placeholder="555-555-5555" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" required placeholder="Type your message..." />
      </div>

      <div className="form-group">
        <button className="pull-right btn btn-primary" type="submit">
          Submit
        </button>
      </div>
      <div className="tel">
        Or call us at: <span className="highlight">+1 (281) 606-9918</span>
      </div>
    </form>
  );
};

export default Contact;
