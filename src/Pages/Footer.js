import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consequat justo vel finibus.
        </p>
      </div>
      <div className="footer-section">
        <h2>Follow Us</h2>
        <ul className="social-media-links">
          <SocialMediaLink icon="fab fa-facebook" />
          <SocialMediaLink icon="fab fa-twitter" />
          <SocialMediaLink icon="fab fa-instagram" />
        </ul>
      </div>
      <div className="footer-section">
        <h2>Contact Us</h2>
        <p>Email: example@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="footer-section">
        <h2>Help & Support</h2>
        <ul>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Newsletter</h2>
        <p>Subscribe to our newsletter for updates:</p>
        <NewsletterSubscription />
      </div>
    </footer>
  );
};

const SocialMediaLink = ({ icon }) => (
  <li>
    <a href="#">
      <i className={icon}></i>
    </a>
  </li>
);

const NewsletterSubscription = () => (
  <form>
    <input type="email" placeholder="Enter your email" />
    <button type="submit">Subscribe</button>
  </form>
);

export default Footer;
