import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>&#10013; Rehoboth Philadelphia Assembly</h3>
            <p>A place of worship, fellowship, and spiritual growth. Join us as we grow together in faith and love.</p>
            <div className="footer-social">
              <a href="https://www.youtube.com/@RehobothPhiladelphiaAssembly" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.facebook.com/RehobothPhiladelphiaAssembly" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com/rehobothphiladelphia" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events & Timings</Link></li>
              <li><Link to="/ministries">Ministries</Link></li>
              <li><Link to="/branches">Branch Churches</Link></li>
              <li><Link to="/subscribe">Subscribe</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Service Timings</h4>
            <ul className="timings-list">
              <li><strong>Sunday Worship:</strong> 8:00 AM & 10:30 AM</li>
              <li><strong>Sunday School:</strong> 9:30 AM</li>
              <li><strong>Wednesday Prayer:</strong> 7:00 PM</li>
              <li><strong>Friday Youth:</strong> 6:30 PM</li>
              <li><strong>Saturday Women&#39;s:</strong> 5:00 PM</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li><FaMapMarkerAlt /> Rehoboth Philadelphia Assembly, Main Road</li>
              <li><FaPhone /> +91 98765 43210</li>
              <li><FaEnvelope /> info@rehobothphiladelphia.in</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rehoboth Philadelphia Assembly. All rights reserved.</p>
          <p>Built with &#10084; for the Glory of God</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
