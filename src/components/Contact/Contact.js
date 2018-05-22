import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <form className="form box-shadow" name="contact" method="POST"
      netlify netlify-honeypot="bot-field">
      <p class="hidden">
        <label>Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required placeholder="John Doe" />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email" id="email" required placeholder="example@email.com" />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" required placeholder="555-555-5555" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" required placeholder="Type your message..." />
      </div>

      <div netlify-recaptcha></div>

      <div className="form-group">
        <button className="pull-right btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
