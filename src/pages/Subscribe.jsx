import React from 'react';
import SubscriptionForm from '../components/SubscriptionForm';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className="subscribe-page">
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>Subscribe</h1>
          <p>Receive daily spiritual content delivered to you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Daily Content Subscription</h2>
          <p className="section-subtitle">Choose a plan and start receiving daily devotionals, Bible verses, and church updates</p>
          <SubscriptionForm />
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
