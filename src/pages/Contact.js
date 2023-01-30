import React from 'react';
import BannerImage from '../assets/2blackbean.jpg';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage}` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">First Name</label>
          <input name="name" placeholder="Enter Full Name" type="text" />
          <label htmlFor="email">E-mail</label>
          <input name="mail" placeholder="Enter E-mail" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            type="text"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
