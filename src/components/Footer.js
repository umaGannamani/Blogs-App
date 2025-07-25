import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>🌍 Wanderlust Bites</h4>
        <p>Discover food, travel, and unforgettable experiences.</p>
      </div>
      <div>
        <h5>Quick Links</h5>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div>
        <h5>Categories</h5>
        <ul>
          <li>Food Reviews</li>
          <li>Travel Tips</li>
        </ul>
      </div>
      <div>
        <h5>Newsletter</h5>
        <input type="email" placeholder="📧 Your Email" />
      </div>
    </footer>
  );
};

export default Footer;
