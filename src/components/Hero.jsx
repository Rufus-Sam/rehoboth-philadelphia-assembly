import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-badge">Welcome to</span>
        <h1 className="hero-title">Rehoboth Philadelphia Assembly</h1>
        <p className="hero-subtitle">
          &#8220;For where two or three gather in my name, there am I with them.&#8221; &#8212; Matthew 18:20
        </p>
        <div className="hero-buttons">
          <Link to="/events" className="btn btn-primary">Service Timings</Link>
          <a
            href="https://www.youtube.com/@RehobothPhiladelphiaAssembly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaYoutube style={{ marginRight: '8px' }} /> Watch Live
          </a>
        </div>
        <div className="hero-live-badge">
          <FaPlay className="pulse" />
          <span>Live Streaming Every Sunday on YouTube</span>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
