import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { FaYoutube, FaBible, FaPray, FaUsers, FaChurch, FaHeart } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const quickLinks = [
    { icon: <FaYoutube />, title: 'Watch Sermons', desc: 'Live & recorded services', link: 'https://www.youtube.com/@RehobothPhiladelphiaAssembly', external: true },
    { icon: <FaBible />, title: 'Daily Devotion', desc: 'Subscribe for daily content', link: '/subscribe', external: false },
    { icon: <FaPray />, title: 'Prayer Request', desc: 'Submit your prayer needs', link: '/contact', external: false },
    { icon: <FaUsers />, title: 'Ministries', desc: 'Get involved today', link: '/ministries', external: false },
    { icon: <FaChurch />, title: 'Branch Churches', desc: 'Find a church near you', link: '/branches', external: false },
    { icon: <FaHeart />, title: 'Give Online', desc: 'Support the ministry', link: '/contact', external: false },
  ];

  return (
    <div className="home-page">
      <Hero />
      <section className="section quick-links-section">
        <div className="container">
          <h2 className="section-title">Connect With Us</h2>
          <p className="section-subtitle">Find what you are looking for</p>
          <div className="grid-3">
            {quickLinks.map((item, index) => (
              item.external ? (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="quick-link-card">
                  <div className="ql-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </a>
              ) : (
                <Link key={index} to={item.link} className="quick-link-card">
                  <div className="ql-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      <section className="section service-times-section">
        <div className="container">
          <h2 className="section-title">Service Times</h2>
          <p className="section-subtitle">Join us for worship and fellowship</p>
          <div className="times-grid">
            <div className="time-card"><div className="time-day">Sunday</div><div className="time-services"><div className="time-item"><span className="time-label">First Service</span><span className="time-value">8:00 AM - 9:30 AM</span></div><div className="time-item"><span className="time-label">Sunday School</span><span className="time-value">9:30 AM - 10:30 AM</span></div><div className="time-item"><span className="time-label">Second Service</span><span className="time-value">10:30 AM - 12:30 PM</span></div></div></div>
            <div className="time-card"><div className="time-day">Wednesday</div><div className="time-services"><div className="time-item"><span className="time-label">Midweek Prayer</span><span className="time-value">7:00 PM - 8:30 PM</span></div></div></div>
            <div className="time-card"><div className="time-day">Friday</div><div className="time-services"><div className="time-item"><span className="time-label">Youth Service</span><span className="time-value">6:30 PM - 8:00 PM</span></div></div></div>
            <div className="time-card"><div className="time-day">Saturday</div><div className="time-services"><div className="time-item"><span className="time-label">Women Fellowship</span><span className="time-value">5:00 PM - 6:30 PM</span></div><div className="time-item"><span className="time-label">Fasting Prayer</span><span className="time-value">10:00 AM - 1:00 PM</span></div></div></div>
          </div>
        </div>
      </section>

      <section className="section youtube-section">
        <div className="container">
          <div className="youtube-content">
            <div className="youtube-info">
              <h2>Watch Us on YouTube</h2>
              <p>Never miss a sermon! Subscribe to our YouTube channel for live streams every Sunday and access our complete sermon library.</p>
              <ul className="youtube-features">
                <li>&#128308; Live Streaming Every Sunday</li>
                <li>&#128250; Full Sermon Archive</li>
                <li>&#127925; Worship Music Videos</li>
                <li>&#128214; Bible Study Series</li>
                <li>&#128591; Special Event Recordings</li>
              </ul>
              <a href="https://www.youtube.com/@RehobothPhiladelphiaAssembly" target="_blank" rel="noopener noreferrer" className="btn btn-secondary youtube-btn">
                <FaYoutube /> Subscribe on YouTube
              </a>
            </div>
            <div className="youtube-embed">
              <div className="video-placeholder">
                <FaYoutube className="play-icon" />
                <p>Latest Sermon</p>
                <a href="https://www.youtube.com/@RehobothPhiladelphiaAssembly" target="_blank" rel="noopener noreferrer" className="btn btn-outline watch-btn">Watch Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Receive Daily Spiritual Content</h2>
            <p>Subscribe to get daily devotionals, Bible verses, prayer points, and church updates delivered to your inbox.</p>
            <Link to="/subscribe" className="btn btn-primary">Subscribe Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
