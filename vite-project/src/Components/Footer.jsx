import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="gym-footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h3 className="footer-heading">METHIL FITNESS</h3>
          <p className="footer-about">
            We're dedicated to helping you achieve your fitness goals with state-of-the-art equipment, 
            expert trainers, and a supportive community.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/itz_brahman_85/" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.youtube.com/@mishra7391" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3 className="footer-heading">CONTACT US</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Fitness Street, Gym City, GC 12345</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+1 (123) 456-7890</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>info@methilfitness.com</span>
            </li>
            <li>
              <FaClock className="contact-icon" />
              <span>Mon-Fri: 5:00 AM - 11:00 PM<br />Sat-Sun: 7:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter-section">
          <h3 className="footer-heading">NEWSLETTER</h3>
          <p>Subscribe to get updates on special offers and fitness tips.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Methil Fitness Club. All Rights Reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;