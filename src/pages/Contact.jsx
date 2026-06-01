import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaYoutube, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); };
  const handleSubmit = (e) => { e.preventDefault(); console.log('Contact form:', formData); setSubmitted(true); };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>Contact Us</h1>
          <p>We would love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              <p>Have a prayer request, question, or want to know more about our church? Reach out to us!</p>
              <div className="contact-details">
                <div className="contact-item"><FaMapMarkerAlt className="contact-icon" /><div><h4>Address</h4><p>Rehoboth Philadelphia Assembly</p></div></div>
                <div className="contact-item"><FaPhone className="contact-icon" /><div><h4>Phone</h4><p>+91 98765 43210</p></div></div>
                <div className="contact-item"><FaEnvelope className="contact-icon" /><div><h4>Email</h4><p>info@rehobothphiladelphia.in</p></div></div>
              </div>
              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://www.youtube.com/@RehobothPhiladelphiaAssembly" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                  <a href="https://www.facebook.com/RehobothPhiladelphiaAssembly" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://www.instagram.com/rehobothphiladelphia" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">&#10003;</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We will get back to you soon.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Send us a Message</h3>
                  <div className="form-group"><label>Your Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required /></div>
                  <div className="form-group"><label>Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required /></div>
                  <div className="form-group"><label>Subject</label><select name="subject" value={formData.subject} onChange={handleChange}><option value="">Select a subject</option><option value="prayer">Prayer Request</option><option value="general">General Inquiry</option><option value="visit">Planning to Visit</option><option value="volunteer">Want to Volunteer</option><option value="other">Other</option></select></div>
                  <div className="form-group"><label>Message *</label><textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." rows="5" required></textarea></div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
