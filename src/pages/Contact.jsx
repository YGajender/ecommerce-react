import React from 'react';
import "../ecommerce.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="content-section">
        <h1>Contact Us</h1>
        <p>
          We are here to help you with any queries you may have. Please fill out the form on the right to get in touch with us.
        </p>
        <p>
          Address: Rewari, Haryana, India<br />
          Mobile No.: +91 8708556762<br />
          Email: gajenderdahina@gmail.com
        </p>
        
      </div>
      <div className="form-section">
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="contact">Contact No.:</label>
          <input type="text" id="contact" name="contact" required />

          <label htmlFor="email">Email ID:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="remarks">Remarks:</label>
          <textarea id="remarks" name="remarks" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
