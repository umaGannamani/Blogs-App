import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    setShowPopup(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide popup after 3 seconds
  };

  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Fill out the form below to reach us.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        {showPopup && (
          <div className="popup-message">
            ✅ Your message has been sent!
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
